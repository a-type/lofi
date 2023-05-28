import {
	CollectionFilter,
	Migration,
	MigrationEngine,
	ObjectIdentifier,
	StorageSchema,
	addFieldDefaults,
	assignIndexValues,
	assignOidPropertiesToAllSubObjects,
	assignOidsToAllSubObjects,
	cloneDeep,
	createOid,
	decomposeOid,
	diffToPatches,
	initialToPatches,
	migrationRange,
	removeOidPropertiesFromAllSubObjects,
	removeOidsFromAllSubObjects,
} from '@verdant-web/common';
import { Context } from './context.js';
import { Metadata } from './metadata/Metadata.js';
import { findAllOids, findOneOid } from './queries2/dbQueries.js';

const globalIDB =
	typeof window !== 'undefined' ? window.indexedDB : (undefined as any);

type OpenDocumentDbContext = Omit<Context, 'documentDb'>;

export async function openDocumentDatabase({
	version,
	indexedDB = globalIDB,
	migrations,
	meta,
	context,
}: {
	version: number;
	migrations: Migration<any>[];
	indexedDB?: IDBFactory;
	meta: Metadata;
	context: OpenDocumentDbContext;
}) {
	const currentVersion = await getDatabaseVersion(
		indexedDB,
		context.namespace,
		version,
		context.log,
	);

	context.log(
		'Current database version:',
		currentVersion,
		'target version:',
		version,
	);

	const toRunVersions = migrationRange(currentVersion, version);
	const toRun = toRunVersions.map((ver) =>
		migrations.find((m) => m.version === ver),
	);
	if (toRun.some((m) => !m)) {
		throw new Error(`No migration found for version(s) ${toRunVersions}`);
	}

	if (toRun.length > 0) {
		await acquireLock(context.namespace, async () => {
			// now the fun part
			for (const migration of toRun as Migration<any>[]) {
				// special case: if this is the version 1 migration, we have no pre-existing database
				// to use for the migration.
				let engine: MigrationEngine<any, any>;
				if (migration.version === 1) {
					engine = getVersion1MigrationEngine({
						meta,
						migration,
						context,
					});
					await migration.migrate(engine);
				} else {
					// open the database with the current (old) version for this migration. this should
					// align with the database's current version.
					const originalDatabase = await openDatabase(
						indexedDB,
						context.namespace,
						migration.oldSchema.version,
					);

					// this will only write to our metadata store via operations!
					engine = getMigrationEngine({
						meta,
						migration,
						context: {
							...context,
							documentDb: originalDatabase,
						},
					});
					await migration.migrate(engine);
					// wait on any out-of-band async operations to complete
					await Promise.all(engine.awaitables);

					// now we have to open the database again with the next version and
					// make the appropriate schema changes during the upgrade.
					await closeDatabase(originalDatabase);
				}
				await upgradeDatabase(
					indexedDB,
					context.namespace,
					migration.newSchema.version,
					(transaction, db) => {
						for (const newCollection of migration.addedCollections) {
							db.createObjectStore(newCollection, {
								keyPath:
									migration.newSchema.collections[newCollection].primaryKey,
								autoIncrement: false,
							});
						}

						for (const collection of migration.allCollections) {
							const store = transaction.objectStore(collection);
							// apply new indexes
							for (const newIndex of migration.addedIndexes[collection] || []) {
								store.createIndex(newIndex.name, newIndex.name, {
									multiEntry: newIndex.multiEntry,
								});
							}
							// remove old indexes
							for (const oldIndex of migration.removedIndexes[collection] ||
								[]) {
								store.deleteIndex(oldIndex.name);
							}
						}
						for (const removedCollection of migration.removedCollections) {
							// !! can't delete the store, because old operations that relate to
							// this store may still exist in history. instead, we can clear it out
							// and leave it in place
							transaction.objectStore(removedCollection).clear();
						}
					},
					context.log,
				);

				// once the schema is ready, we can write back the migrated documents
				const upgradedDatabase = await openDatabase(
					indexedDB,
					context.namespace,
					migration.newSchema.version,
				);
				for (const collection of migration.allCollections) {
					// first step is to read in all the keys we need to rewrite
					const documentReadTransaction = upgradedDatabase.transaction(
						collection,
						'readwrite',
					);
					const readStore = documentReadTransaction.objectStore(collection);
					const keys = await getAllKeys(readStore);
					// map the keys to OIDs
					const oids = keys.map((key) => createOid(collection, `${key}`));
					oids.push(
						...engine.newOids.filter((oid) => {
							return decomposeOid(oid).collection === collection;
						}),
					);

					const snapshots = await Promise.all(
						oids.map(async (oid) => {
							try {
								const snap = await meta.getDocumentSnapshot(oid);
								return [oid, snap];
							} catch (e) {
								// this seems to happen with baselines/ops which are not fully
								// cleaned up after deletion?
								context.log(
									'error',
									'Could not regenerate snapshot during migration for oid',
									oid,
									'this document will not be preserved',
									e,
								);
								return null;
							}
						}),
					);

					const views = snapshots
						.filter((s): s is [string, any] => !!s)
						.map(([oid, snapshot]) => {
							if (!snapshot) return [oid, undefined];
							const view = assignIndexValues(
								migration.newSchema.collections[collection],
								snapshot,
							);
							// TODO: remove the need for this by only storing index values!
							assignOidPropertiesToAllSubObjects(view);
							return [oid, view];
						});

					// now we can write the documents back
					const documentWriteTransaction = upgradedDatabase.transaction(
						collection,
						'readwrite',
					);
					const writeStore = documentWriteTransaction.objectStore(collection);
					await Promise.all(
						views.map(([oid, view]) => {
							if (view) {
								return putView(writeStore, view);
							} else {
								const { id } = decomposeOid(oid);
								return deleteView(writeStore, id);
							}
						}),
					);
				}

				await closeDatabase(upgradedDatabase);

				context.log(`
					⬆️ v${migration.newSchema.version} Migration complete. Here's the rundown:
						- Added collections: ${migration.addedCollections.join(', ')}
						- Removed collections: ${migration.removedCollections.join(', ')}
						- Changed collections: ${migration.changedCollections.join(', ')}
						- New indexes: ${Object.keys(migration.addedIndexes)
							.map((col) =>
								migration.addedIndexes[col].map((i) => `${col}.${i.name}`),
							)
							.flatMap((i) => i)
							.join(', ')}
						- Removed indexes: ${Object.keys(migration.removedIndexes)
							.map((col) =>
								migration.removedIndexes[col].map((i) => `${col}.${i.name}`),
							)
							.flatMap((i) => i)
							.join(', ')}
				`);
			}
		});
		return openDatabase(indexedDB, context.namespace, version);
	} else {
		// just open the database
		return openDatabase(indexedDB, context.namespace, version);
	}
}

async function getDatabaseVersion(
	indexedDB: IDBFactory,
	namespace: string,
	version: number,
	log?: (...args: any[]) => void,
): Promise<number> {
	function openAndGetVersion(
		resolve: (res: [number, IDBDatabase]) => void,
		reject: (err: Error) => void,
	) {
		let currentVersion: number;
		let database: IDBDatabase;
		const request = indexedDB.open(
			[namespace, 'collections'].join('_'),
			version,
		);
		request.onupgradeneeded = async (event) => {
			currentVersion = event.oldVersion;
			const transaction = request.transaction!;
			database = request.result;
			transaction.abort();
		};
		request.onsuccess = (event) => {
			resolve([request.result.version, request.result]);
		};
		request.onblocked = (event) => {
			// retry if blocked
			log?.('Database blocked, waiting...');
			// setTimeout(() => {
			// 	openAndGetVersion(resolve, reject);
			// }, 200);
		};
		request.onerror = (event) => {
			// FIXME: this fails if the code is older than the local database
			resolve([currentVersion!, database!]);
		};
	}
	const [currentVersion, db] = await new Promise<[number, IDBDatabase]>(
		openAndGetVersion,
	);
	await closeDatabase(db);
	return currentVersion;
}

async function openDatabase(
	indexedDb: IDBFactory,
	namespace: string,
	version: number,
): Promise<IDBDatabase> {
	const db = await new Promise<IDBDatabase>((resolve, reject) => {
		const request = indexedDb.open(
			[namespace, 'collections'].join('_'),
			version,
		);
		request.onupgradeneeded = async (event) => {
			const transaction = request.transaction!;
			transaction.abort();

			reject(
				new Error('Migration error: database version changed while migrating'),
			);
		};
		request.onsuccess = (event) => {
			resolve(request.result);
		};
		request.onblocked = (event) => {
			reject(new Error('Migration error: database blocked'));
		};
		request.onerror = (event) => {
			reject(new Error('Migration error: database error'));
		};
	});

	db.addEventListener('versionchange', (event) => {
		db.close();
	});

	return db;
}

function getMigrationMutations({
	migration,
	meta,
	getMigrationNow,
	newOids,
}: {
	migration: Migration<any>;
	newOids: string[];
	getMigrationNow: () => string;
	meta: Metadata;
}) {
	return migration.allCollections.reduce((acc, collectionName) => {
		acc[collectionName] = {
			put: async (doc: any) => {
				// add defaults
				addFieldDefaults(migration.newSchema.collections[collectionName], doc);
				const primaryKey =
					doc[migration.newSchema.collections[collectionName].primaryKey];
				const oid = createOid(collectionName, primaryKey);
				newOids.push(oid);
				await meta.insertLocalOperation(
					initialToPatches(doc, oid, getMigrationNow),
				);
				return doc;
			},
			delete: (id: string) => {
				const oid = createOid(collectionName, id);
				return meta.insertLocalOperation([
					{
						oid,
						timestamp: getMigrationNow(),
						data: { op: 'delete' },
					},
				]);
			},
		};
		return acc;
	}, {} as any);
}

function getMigrationEngine({
	meta,
	migration,
	context,
}: {
	log?: (...args: any[]) => void;
	migration: Migration;
	meta: Metadata;
	context: Context;
}): MigrationEngine<any, any> {
	function getMigrationNow() {
		return meta.time.zero(migration.version);
	}

	const newOids = new Array<ObjectIdentifier>();

	const queries = migration.oldCollections.reduce((acc, collectionName) => {
		acc[collectionName] = {
			get: async (id: string) => {
				const oid = createOid(collectionName, id);
				const doc = await meta.getDocumentSnapshot(oid);
				removeOidsFromAllSubObjects(doc);
				return doc;
			},
			findOne: async (filter: CollectionFilter) => {
				const oid = await findOneOid({
					collection: collectionName,
					index: filter,
					context,
				});
				if (!oid) return null;
				const doc = await meta.getDocumentSnapshot(oid);
				removeOidsFromAllSubObjects(doc);
				return doc;
			},
			findAll: async (filter: CollectionFilter) => {
				const oids = await findAllOids({
					collection: collectionName,
					index: filter,
					context,
				});
				const docs = await Promise.all(
					oids.map((oid) => meta.getDocumentSnapshot(oid)),
				);
				docs.forEach((doc) => removeOidsFromAllSubObjects(doc));
				return docs;
			},
		};
		return acc;
	}, {} as any);
	const mutations = getMigrationMutations({
		migration,
		getMigrationNow,
		newOids,
		meta,
	});
	const awaitables = new Array<Promise<any>>();
	const engine: MigrationEngine<StorageSchema, StorageSchema> = {
		log: context.log,
		newOids,
		migrate: async (collection, strategy) => {
			const docs = await new Promise<any[]>((resolve, reject) => {
				const transaction = context.documentDb.transaction(
					collection,
					'readonly',
				);

				const store = transaction.objectStore(collection);
				const cursorReq = store.openCursor();

				const documentsToMigrate: any[] = [];

				cursorReq.onsuccess = async (event) => {
					const cursor = cursorReq.result;
					if (cursor) {
						documentsToMigrate.push(cursor.value);
						cursor.continue();
					} else {
						resolve(documentsToMigrate);
					}
				};
				cursorReq.onerror = (event) => {
					reject(cursorReq.error);
				};
			});

			await Promise.all(
				docs.map(async (doc) => {
					const original = cloneDeep(doc);
					// remove any indexes before computing the diff
					const collectionSpec = migration.oldSchema.collections[collection];
					const indexKeys = [
						...Object.keys(collectionSpec.synthetics || {}),
						...Object.keys(collectionSpec.compounds || {}),
					];
					indexKeys.forEach((key) => {
						delete doc[key];
					});
					// @ts-ignore - excessive type resolution
					const newValue = await strategy(doc);
					if (newValue) {
						// the migration has altered the shape of our document. we need
						// to create the operation from the diff and write it to meta as
						// a migration patch
						removeOidPropertiesFromAllSubObjects(original);
						removeOidPropertiesFromAllSubObjects(newValue);
						assignOidsToAllSubObjects(newValue);
						const patches = diffToPatches(
							original,
							newValue,
							getMigrationNow,
							undefined,
							[],
							{
								mergeUnknownObjects: true,
							},
						);
						if (patches.length > 0) {
							await meta.insertLocalOperation(patches);
						}
					}
				}),
			);
		},
		queries,
		mutations,
		awaitables,
	};
	return engine;
}

function getVersion1MigrationEngine({
	meta,
	migration,
	context,
}: {
	context: OpenDocumentDbContext;
	migration: Migration;
	meta: Metadata;
}): MigrationEngine<any, any> {
	function getMigrationNow() {
		return meta.time.zero(migration.version);
	}

	const newOids = new Array<ObjectIdentifier>();

	const queries = new Proxy({} as any, {
		get() {
			throw new Error(
				'Queries are not available in version 1 migrations; there is no database yet!',
			);
		},
	}) as any;

	const mutations = getMigrationMutations({
		migration,
		getMigrationNow,
		newOids,
		meta,
	});
	const engine: MigrationEngine<StorageSchema, StorageSchema> = {
		log: context.log,
		newOids,
		migrate: (collection, strategy) => {
			throw new Error(
				'Calling migrate() in version 1 migrations is not supported! Use version 1 migrations to seed initial data using mutations.',
			);
		},
		queries,
		mutations,
		awaitables: [],
	};
	return engine;
}

async function closeDatabase(db: IDBDatabase) {
	db.close();
	// FIXME: this isn't right!!!!
	await new Promise<void>((resolve) => resolve());
}

async function upgradeDatabase(
	indexedDb: IDBFactory,
	namespace: string,
	version: number,
	upgrader: (
		transaction: IDBTransaction,
		db: IDBDatabase,
		event: IDBVersionChangeEvent,
	) => void,
	log?: (...args: any[]) => void,
): Promise<void> {
	function openAndUpgrade(resolve: () => void, reject: (err: Error) => void) {
		const request = indexedDb.open(
			[namespace, 'collections'].join('_'),
			version,
		);
		let wasUpgraded = false;
		request.onupgradeneeded = (event) => {
			const transaction = request.transaction!;
			upgrader(transaction, request.result, event);
			wasUpgraded = true;
		};
		request.onsuccess = (event) => {
			request.result.close();
			if (wasUpgraded) {
				resolve();
			} else {
				reject(
					new Error(
						'Database was not upgraded when a version change was expected',
					),
				);
			}
		};
		request.onerror = (event) => {
			reject(request.error || new Error('Unknown error'));
		};
		request.onblocked = (event) => {
			log?.('Database upgrade blocked, waiting...');
			// setTimeout(() => {
			// 	openAndUpgrade(resolve, reject);
			// }, 200);
		};
	}
	return new Promise(openAndUpgrade);
}

async function getAllKeys(store: IDBObjectStore) {
	return new Promise<IDBValidKey[]>((resolve, reject) => {
		const request = store.getAllKeys();
		request.onsuccess = (event) => {
			resolve(request.result);
		};
		request.onerror = (event) => {
			reject(request.error);
		};
	});
}

async function deleteView(store: IDBObjectStore, id: string) {
	const request = store.delete(id);
	return new Promise<void>((resolve, reject) => {
		request.onsuccess = (event) => {
			resolve();
		};
		request.onerror = (event) => {
			reject(request.error);
		};
	});
}

async function putView(store: IDBObjectStore, view: any) {
	const request = store.put(view);
	return new Promise<void>((resolve, reject) => {
		request.onsuccess = (event) => {
			resolve();
		};
		request.onerror = (event) => {
			reject(request.error);
		};
	});
}

async function acquireLock(namespace: string, procedure: () => Promise<void>) {
	if (typeof navigator !== 'undefined' && navigator.locks) {
		await navigator.locks.request(`lo-fi_migration_${namespace}`, procedure);
	} else {
		// TODO: is there a fallback?
		await procedure();
	}
}

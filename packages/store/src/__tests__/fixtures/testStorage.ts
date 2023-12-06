import { collection, createMigration, schema } from '@verdant-web/common';
// @ts-ignore
import { IDBFactory } from 'fake-indexeddb';
import { ClientWithCollections, ClientDescriptor } from '../../index.js';
import { METADATA_VERSION_KEY } from '../../client/constants.js';

export const todoCollection = collection({
	name: 'todo',
	primaryKey: 'id',
	fields: {
		id: {
			type: 'string',
			indexed: true,
			default: () => Math.random().toString(36).slice(2, 9),
		},
		content: {
			type: 'string',
			indexed: true,
		},
		done: {
			type: 'boolean',
			default: false,
		},
		tags: {
			type: 'array',
			items: {
				type: 'string',
			},
		},
		category: {
			type: 'string',
		},
		attachments: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					name: {
						type: 'string',
					},
					test: {
						type: 'number',
						default: 1,
					},
				},
			},
		},
	},
	synthetics: {
		example: {
			type: 'string',
			compute: (doc) => doc.content,
		},
	},
	compounds: {
		tagsSortedByDone: {
			of: ['tags', 'done'],
		},
		categorySortedByDone: {
			of: ['category', 'done'],
		},
	},
});

export const weirdCollection = collection({
	name: 'weird',
	primaryKey: 'id',
	fields: {
		id: {
			type: 'string',
			indexed: true,
			default: () => Math.random().toString(36).slice(2, 9),
		},
		weird: {
			type: 'any',
		},
		map: {
			type: 'map',
			values: {
				type: 'string',
			},
		},
		objectMap: {
			type: 'map',
			values: {
				type: 'object',
				properties: {
					content: {
						type: 'string',
					},
				},
			},
		},
	},
	synthetics: {},
	compounds: {},
});

const testSchema = schema({
	version: 1,
	collections: {
		todos: todoCollection,
		weirds: weirdCollection,
	},
});

export function createTestStorage({
	idb = new IDBFactory(),
	disableRebasing = false,
	metadataVersion,
	weakRefs,
}: {
	idb?: IDBFactory;
	disableRebasing?: boolean;
	metadataVersion?: number;
	weakRefs?: boolean;
} = {}) {
	const storage = new ClientDescriptor({
		schema: testSchema,
		migrations: [createMigration<{}>(testSchema)],
		indexedDb: idb,
		namespace: 'test',
		disableRebasing,
		[METADATA_VERSION_KEY]: metadataVersion,
		EXPERIMENTAL_weakRefs: weakRefs,
	}).open();
	return storage as Promise<ClientWithCollections>;
}

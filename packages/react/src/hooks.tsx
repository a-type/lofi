import {
	CollectionIndexFilter,
	SchemaCollectionName,
	StorageCollectionSchema,
	StorageSchema,
} from '@lo-fi/common';
import {
	Entity,
	ObjectEntity,
	Query,
	Storage,
	StorageDescriptor,
	UserInfo,
	AccessibleEntityProperty,
} from '@lo-fi/web';
import { EntityBase } from '@lo-fi/web/src/reactives/Entity.js';
import {
	createContext,
	Provider,
	useContext,
	useMemo,
	useState,
	useSyncExternalStore,
} from 'react';
import { suspend } from 'suspend-react';

type QueryHookResult<T> = T;

type PluralCapital<
	Name extends string,
	PluralName extends string | undefined,
> = PluralName extends string ? Capitalize<PluralName> : `${Capitalize<Name>}s`;

type CollectionHooks<
	Collection extends StorageCollectionSchema<any, any, any>,
> = {
	[key in Collection['name'] as `use${Capitalize<Collection['name']>}`]: (
		id: string,
	) => QueryHookResult<ObjectEntity<any, any>>;
} & {
	[key in Collection['name'] as `useAll${PluralCapital<
		Collection['name'],
		Collection['pluralName']
	>}`]: (config?: {
		index?: CollectionIndexFilter;
	}) => QueryHookResult<ObjectEntity<any, any>[]>;
} & {
	[key in Collection['name'] as `useOne${Capitalize<
		Collection['name']
	>}`]: (config?: {
		index?: CollectionIndexFilter;
	}) => QueryHookResult<ObjectEntity<any, any>>;
};

type UnionToIntersection<T> = (T extends any ? (k: T) => void : never) extends (
	k: infer U,
) => void
	? U
	: never;
type Flatten<T extends Record<string, any>> = T extends Record<string, infer V>
	? UnionToIntersection<V>
	: never;

type GeneratedHooks<
	Schema extends StorageSchema<{
		[k: string]: StorageCollectionSchema<any, any, any>;
	}>,
> = Flatten<{
	[CollectionName in Extract<
		keyof Schema['collections'],
		string
	>]: CollectionHooks<Schema['collections'][CollectionName]>;
}>;

function useLiveQuery(liveQuery: Query<any>) {
	suspend(() => liveQuery.resolved, [liveQuery]);
	return useSyncExternalStore(
		(callback) => {
			return liveQuery.subscribe(callback);
		},
		() => {
			return liveQuery.current;
		},
	);
}

function capitalize<T extends string>(str: T) {
	return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;
}

type CapitalizedCollectionName<
	Schema extends StorageSchema<{
		[k: string]: StorageCollectionSchema<any, any, any>;
	}>,
> = Capitalize<Extract<keyof Schema['collections'], string>>;

type CreatedHooks<Presence = any, Profile = any> = {
	useWatch<T>(liveObject: T): T;
	useSelf(): UserInfo<Profile, Presence>;
	usePeerIds(): string[];
	usePeer(peerId: string): UserInfo<Profile, Presence>;
	useSyncStatus(): boolean;
	/** @deprecated use useClient */
	useStorage(): Storage;
	useClient(): Storage;
	useCanUndo(): boolean;
	useCanRedo(): boolean;
	Provider: Provider<StorageDescriptor<any>>;
	[other: string]: any;
};

export function createHooks<Presence = any, Profile = any>(
	schema: StorageSchema<any>,
): CreatedHooks<Presence, Profile> {
	const Context = createContext<StorageDescriptor<Presence, Profile> | null>(
		null,
	);

	function useStorage() {
		const ctx = useContext(Context);
		if (!ctx) {
			throw new Error('No lo-fi provider was found');
		}
		return suspend(() => ctx.readyPromise, ['lofi_' + ctx.namespace]);
	}

	function useWatch<S>(liveObject: EntityBase<any, S> | null, prop?: keyof S) {
		return useSyncExternalStore(
			(handler) => {
				if (liveObject) {
					return liveObject.subscribe('change', handler);
				}
				return () => {};
			},
			() => {
				if (liveObject) {
					if (prop) {
						return liveObject.get(prop);
					}

					return liveObject.getAll();
				}

				return undefined;
			},
		);
	}

	function useSelf() {
		const storage = useStorage();
		return useSyncExternalStore(
			(callback) => storage.sync.presence.subscribe('selfChanged', callback),
			() => storage.sync.presence.self,
		);
	}

	function usePeerIds() {
		const storage = useStorage();
		return useSyncExternalStore(
			(callback) => storage.sync.presence.subscribe('peersChanged', callback),
			() => storage.sync.presence.peerIds,
		);
	}

	function usePeer(peerId: string | null) {
		const storage = useStorage();
		return useSyncExternalStore(
			(callback) => {
				const unsubs: (() => void)[] = [];
				unsubs.push(
					storage.sync.presence.subscribe('peerChanged', (id, user) => {
						if (id === peerId) {
							callback();
						}
					}),
				);
				unsubs.push(
					storage.sync.presence.subscribe('peerLeft', (id) => {
						if (id === peerId) {
							callback();
						}
					}),
				);

				return () => {
					unsubs.forEach((unsub) => unsub());
				};
			},
			() => (peerId ? storage.sync.presence.peers[peerId] ?? null : null),
		);
	}

	function useSyncStatus() {
		const storage = useStorage();
		return useSyncExternalStore(
			(callback) => storage.sync.subscribe('onlineChange', callback),
			() => storage.sync.isConnected,
		);
	}

	function useCanUndo() {
		const storage = useStorage();

		return useSyncExternalStore(
			(callback) => storage.undoHistory.subscribe('change', callback),
			() => storage.undoHistory.canUndo,
		);
	}

	function useCanRedo() {
		const storage = useStorage();
		return useSyncExternalStore(
			(callback) => storage.undoHistory.subscribe('change', callback),
			() => storage.undoHistory.canRedo,
		);
	}

	const hooks: Record<string, any> = {
		useStorage,
		useClient: useStorage,
		useWatch,
		useSelf,
		usePeerIds,
		usePeer,
		useSyncStatus,
		useCanUndo,
		useCanRedo,
		Provider: ({ value, ...rest }: { value: StorageDescriptor }) => {
			// auto-open storage when used in provider
			useMemo(() => {
				value.open();
			}, [value]);
			return <Context.Provider value={value} {...rest} />;
		},
	};

	const collectionNames = Object.keys(schema.collections);
	for (const name of collectionNames) {
		const collection = schema.collections[name];
		const getOneHookName = `use${capitalize(collection.name)}`;
		hooks[getOneHookName] = function useOne(id: string) {
			const storage = useStorage();
			const liveQuery = useMemo(() => {
				return storage.get(name, id);
			}, [id]);
			const data = useLiveQuery(liveQuery);

			return data;
		};

		const findOneHookName = `useOne${capitalize(collection.name)}`;
		hooks[findOneHookName] = function useOne(
			config: {
				index?: CollectionIndexFilter;
			} = {},
		) {
			const storage = useStorage();
			const liveQuery = useMemo(() => {
				return (storage as any).findOne(name, config.index);
			}, [config?.index]);
			const data = useLiveQuery(liveQuery);
			return data;
		};

		const getAllHookName = `useAll${capitalize(
			collection.pluralName || collection.name + 's',
		)}`;
		hooks[getAllHookName] = function useAll(
			config: {
				index?: CollectionIndexFilter;
			} = {},
		) {
			const storage = useStorage();
			// assumptions: this query getter is fast and returns the same
			// query identity for subsequent calls.
			const liveQuery = useMemo(
				() => (storage as any).findAll(name, config.index),
				[config?.index],
			);
			const data = useLiveQuery(liveQuery);
			return data;
		};
	}
	return hooks as any;
}

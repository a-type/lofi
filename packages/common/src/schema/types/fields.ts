export type StorageStringFieldSchema = {
	type: 'string';
	indexed?: boolean;
	nullable?: boolean;
	default?: string | (() => string);
};
export type StorageNumberFieldSchema = {
	type: 'number';
	indexed?: boolean;
	nullable?: boolean;
	default?: number | (() => number);
};
export type StorageBooleanFieldSchema = {
	type: 'boolean';
	nullable?: boolean;
	default?: boolean | (() => boolean);
};
export type StorageArrayFieldSchema = {
	type: 'array';
	items: NestedStorageFieldSchema;
	nullable?: boolean;
};
export type StorageObjectFieldSchema = {
	type: 'object';
	properties: NestedStorageFieldsSchema;
	nullable?: boolean;
};
export type StorageAnyFieldSchema = {
	type: 'any';
	default?: any;
};
export type StorageMapFieldSchema<V extends NestedStorageFieldSchema> = {
	type: 'map';
	values: V;
};
export type StorageFieldSchema =
	| StorageStringFieldSchema
	| StorageNumberFieldSchema
	| StorageBooleanFieldSchema
	| StorageArrayFieldSchema
	| StorageObjectFieldSchema
	| StorageAnyFieldSchema
	| StorageMapFieldSchema<any>;

// nested versions don't have index info
export type NestedStorageStringFieldSchema = {
	type: 'string';
	nullable?: boolean;
	default?: string | (() => string);
};
export type NestedStorageNumberFieldSchema = {
	type: 'number';
	nullable?: boolean;
	default?: number | (() => number);
};

export type NestedStorageFieldSchema =
	| NestedStorageStringFieldSchema
	| NestedStorageNumberFieldSchema
	| StorageBooleanFieldSchema
	| StorageArrayFieldSchema
	| StorageObjectFieldSchema
	| StorageAnyFieldSchema
	| StorageMapFieldSchema<any>;

export type StorageFieldsSchema = Record<string, StorageFieldSchema>;

export type NestedStorageFieldsSchema = Record<
	string,
	NestedStorageFieldSchema
>;

// filters to only fields which can be indexed
export type StorageIndexableFields<Fields extends StorageFieldsSchema> = {
	[K in keyof Fields]: Fields[K] extends { indexed: boolean } ? K : never;
};

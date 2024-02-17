import {
	StorageBooleanFieldSchema,
	StorageFieldsSchema,
	StorageNumberFieldSchema,
	StorageStringFieldSchema,
} from './fields.js';
import { ShapeFromFields } from './shapes.js';

export type StorageStringSyntheticSchema<Fields extends StorageFieldsSchema> = {
	type: 'string';
	compute: (value: ShapeFromFields<Fields>) => string | null;
};
export type StorageNumberSyntheticSchema<Fields extends StorageFieldsSchema> = {
	type: 'number';
	compute: (value: ShapeFromFields<Fields>) => number | null;
};
export type StorageBooleanSyntheticSchema<Fields extends StorageFieldsSchema> =
	{
		type: 'boolean';
		compute: (value: ShapeFromFields<Fields>) => boolean | null;
	};
export type StorageStringArraySyntheticSchema<
	Fields extends StorageFieldsSchema,
> = {
	type: 'string[]';
	compute: (value: ShapeFromFields<Fields>) => string[];
};
export type StorageNumberArraySyntheticSchema<
	Fields extends StorageFieldsSchema,
> = {
	type: 'number[]';
	compute: (value: ShapeFromFields<Fields>) => number[];
};
export type StorageBooleanArraySyntheticSchema<
	Fields extends StorageFieldsSchema,
> = {
	type: 'boolean[]';
	compute: (value: ShapeFromFields<Fields>) => boolean[];
};
export type StorageDirectSyntheticSchema<Fields extends StorageFieldsSchema> = {
	field: DirectIndexableFieldName<Fields>;
};

type DirectIndexableFields<Fields extends StorageFieldsSchema> = {
	[K in keyof Fields as Fields[K] extends StorageStringFieldSchema
		? K
		: Fields[K] extends StorageNumberFieldSchema
		? K
		: Fields[K] extends StorageBooleanFieldSchema
		? K
		: never]: any;
};
export type DirectIndexableFieldName<Fields extends StorageFieldsSchema> =
	keyof DirectIndexableFields<Fields> extends never
		? string
		: keyof DirectIndexableFields<Fields>;

export type StorageSyntheticIndices<Fields extends StorageFieldsSchema> =
	Record<string, StorageSyntheticIndexSchema<Fields>>;

export type StorageSyntheticIndexSchema<Fields extends StorageFieldsSchema> =
	| StorageStringSyntheticSchema<Fields>
	| StorageNumberSyntheticSchema<Fields>
	| StorageBooleanSyntheticSchema<Fields>
	| StorageStringArraySyntheticSchema<Fields>
	| StorageNumberArraySyntheticSchema<Fields>
	| StorageBooleanArraySyntheticSchema<Fields>
	| StorageDirectSyntheticSchema<Fields>;

export type IndexValueTag = Exclude<
	StorageSyntheticIndexSchema<any>,
	StorageDirectSyntheticSchema<any>
>['type'];

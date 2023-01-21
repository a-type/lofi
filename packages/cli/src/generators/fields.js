import { getObjectProperty, objectExpressionEntries } from './tools.js';
import * as changeCase from 'change-case';

export function getFieldSnapshotTyping(field, { flattenArrays = false } = {}) {
	const type = getObjectProperty(field, 'type').value;
	const nullable = getObjectProperty(field, 'nullable')?.value === true;

	let baseType;

	if (type === 'string') {
		baseType = 'string';
	} else if (type === 'number') {
		baseType = 'number';
	} else if (type === 'boolean') {
		baseType = 'boolean';
	} else if (type === 'array') {
		const items = field.properties.find(
			(prop) => prop.key.value === 'items',
		).value;
		if (flattenArrays) {
			baseType = getFieldSnapshotTyping(items, { flattenArrays });
		} else {
			baseType = `Array<${getFieldSnapshotTyping(items)}>`;
		}
	} else if (type === 'object') {
		const properties = objectExpressionEntries(
			field.properties.find((prop) => prop.key.value === 'properties').value,
		);
		baseType = `{
      ${properties
				.map(([key, value]) => `${key}: ${getFieldSnapshotTyping(value)}`)
				.join(',')}
    }`;
	} else if (type === 'map') {
		const values = field.properties.find(
			(prop) => prop.key.value === 'values',
		).value;
		baseType = `Record<string, ${getFieldSnapshotTyping(values)}>`;
	} else if (type === 'any') {
		baseType = 'any';
	} else if (type === 'file') {
		baseType = 'string';
	} else {
		throw new Error(`Unknown field type: ${type}`);
	}
	return nullable ? `${baseType} | null` : baseType;
}

export function getFieldInitTyping(field) {
	const type = getObjectProperty(field, 'type').value;

	const hasDefault =
		type === 'array' ||
		type === 'map' ||
		getObjectProperty(field, 'nullable')?.value === true ||
		getObjectProperty(field, 'default') !== undefined;

	const nullable = getObjectProperty(field, 'nullable')?.value === true;

	let baseType;

	if (type === 'string') {
		baseType = 'string';
	} else if (type === 'number') {
		baseType = 'number';
	} else if (type === 'boolean') {
		baseType = 'boolean';
	} else if (type === 'array') {
		const items = field.properties.find(
			(prop) => prop.key.value === 'items',
		).value;
		baseType = `Array<${getFieldInitTyping(items).type}>`;
	} else if (type === 'object') {
		const properties = objectExpressionEntries(
			field.properties.find((prop) => prop.key.value === 'properties').value,
		);
		baseType = `{
				${properties
					.map(([key, value]) => {
						const { type, optional } = getFieldInitTyping(value);
						return `${key}${optional ? '?' : ''}: ${type}`;
					})
					.join(',')}
			}`;
	} else if (type === 'map') {
		const values = field.properties.find(
			(prop) => prop.key.value === 'values',
		).value;
		baseType = `Record<string, ${getFieldInitTyping(values).type}>`;
	} else if (type === 'any') {
		baseType = 'any';
	} else if (type === 'file') {
		baseType = 'File';
	} else {
		throw new Error(`Unknown field type: ${type}`);
	}
	if (nullable) {
		baseType = `${baseType} | null`;
	}

	return {
		type: baseType,
		optional: hasDefault || nullable,
	};
}

export function getFieldDestructuredTyping(name, field) {
	const type = getObjectProperty(field, 'type').value;

	const nullable = getObjectProperty(field, 'nullable')?.value === true;

	let baseType;

	if (type === 'array' || type === 'object' || type === 'map') {
		baseType = name;
	} else {
		return null;
	}
	if (nullable) {
		baseType = `${baseType} | null`;
	}

	return baseType;
}

export function getAllIndexedFieldsAsMap(collection) {
	const fields = objectExpressionEntries(
		getObjectProperty(collection, 'fields'),
	);
	const indexableFields = fields.filter(
		([, field]) => getObjectProperty(field, 'indexed')?.value === true,
	);
	const synthetics = objectExpressionEntries(
		getObjectProperty(collection, 'synthetics'),
	);
	return new Map([...indexableFields, ...synthetics]);
}

export function getAllFieldsAndSyntheticsAsMap(collection) {
	const fields = objectExpressionEntries(
		getObjectProperty(collection, 'fields'),
	);
	const syntheticsMap = getObjectProperty(collection, 'synthetics');
	const synthetics = syntheticsMap
		? objectExpressionEntries(syntheticsMap)
		: [];
	return new Map([...fields, ...synthetics]);
}

export function getSubObjectFieldName(baseName, key) {
	return baseName + changeCase.pascalCase(key);
}

export function parseField(field) {
	const type = getObjectProperty(field, 'type').value;
	const nullable = getObjectProperty(field, 'nullable')?.value === true;
	const defaulted =
		getObjectProperty(field, 'default') !== undefined ||
		type === 'array' ||
		type === 'map' ||
		type === 'any';

	return {
		type,
		optional: defaulted || nullable,
		nullable,
	};
}

import { getFieldInitTyping, getFieldSnapshotTyping } from './fields.js';
import { getObjectProperty, objectExpressionEntries } from './tools.js';
import * as path from 'path';
import * as changeCase from 'change-case';
import { getCollectionFilterTypings } from './filters.js';

export function getAllCollectionDefinitions(ast) {
	const defaultExportExpression = ast.find(
		(node) => node.type === 'ExportDefaultExpression',
	)?.expression;
	if (
		!defaultExportExpression ||
		defaultExportExpression.callee.value !== 'schema'
	) {
		throw new Error(
			'Invalid schema file. Must have a default export which is a lo-fi schema.',
		);
	}
	const schema = defaultExportExpression.arguments[0].expression;
	const collections = schema.properties.find(
		(prop) => prop.key.value === 'collections',
	);
	const collectionKeyValues = collections.value.properties;
	const collectionDefinitions = {};
	for (const collection of collectionKeyValues) {
		const valueExpression =
			collection.value.type === 'Identifier'
				? lookupCollection(ast, collection.value.value)
				: collection.value;
		collectionDefinitions[collection.key.value] =
			valueExpression.arguments[0].expression;
	}
	return collectionDefinitions;
}

function lookupCollection(ast, name) {
	return ast.find(
		(node) =>
			node.type === 'VariableDeclaration' &&
			node.declarations[0].id.value === name,
	).declarations[0].init;
}

export function getCollectionTypings(name, definition) {
	const fieldsExpression = getObjectProperty(definition, 'fields');
	const fields = objectExpressionEntries(fieldsExpression);

	const pascalName = changeCase.pascalCase(name);

	let content = '';
	content += getCollectionSnapshotTyping(definition);
	content += getCollectionInitTyping(definition);
	content += getCollectionDocumentTyping(definition);
	content += getCollectionFilterTypings(definition);

	return content;
}

function getCollectionDocumentTyping(collection) {
	const collectionName = getObjectProperty(collection, 'name').value;
	const pascalName = changeCase.pascalCase(collectionName);

	return `export type ${pascalName} = ObjectEntity<${pascalName}Snapshot>`;
}

function getCollectionSnapshotTyping(collection) {
	const collectionName = getObjectProperty(collection, 'name').value;
	const pascalName = changeCase.pascalCase(collectionName);

	const fieldsExpression = getObjectProperty(collection, 'fields');
	const fields = objectExpressionEntries(fieldsExpression);

	return `
export interface ${pascalName}Snapshot {
  ${fields
		.map(([key, value]) => `${key}: ${getFieldSnapshotTyping(value)}`)
		.join(';\n')}
}
`;
}

function getCollectionInitTyping(collection) {
	const collectionName = getObjectProperty(collection, 'name').value;
	const pascalName = changeCase.pascalCase(collectionName);

	const fieldsExpression = getObjectProperty(collection, 'fields');
	const fields = objectExpressionEntries(fieldsExpression);

	return `
export interface ${pascalName}Init {
  ${fields
		.map(([key, value]) => `${key}: ${getFieldInitTyping(value)}`)
		.join(';\n')}
}
`;
}
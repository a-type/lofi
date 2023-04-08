#!/usr/bin/env node

import swc from '@swc/core';
import * as path from 'path';
import * as fs from 'fs/promises';
import prettier from 'prettier';
import * as changeCase from 'change-case';
import {
	getAllCollectionDefinitions,
	getCollectionTypings,
} from '../src/generators/collections.js';
import {
	clientImplementation,
	clientPackage,
	reactImplementation,
} from '../src/generators/constants.js';
import {
	getClientImplementation,
	getClientTypings,
} from '../src/generators/client.js';
import { emptyDirectory } from '../src/fs/emptyDirectory.js';
import {
	getReactImplementation,
	getReactTypings,
} from '../src/generators/react.js';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { getSchemaVersion, schemasDiffer } from '../src/readers/schemaInfo.js';
import {
	createMigration,
	createMigrationIndex,
} from '../src/generators/migrations.js';
import { fileExists } from '../src/fs/exists.js';
import { getObjectProperty } from '../src/generators/tools.js';
import { createDirectory } from '../src/fs/createDirectory.js';

const v = yargs(hideBin(process.argv))
	.option('schema', {
		alias: 's',
		type: 'string',
		description: 'Path to schema file',
	})
	.option('output', {
		alias: 'o',
		type: 'string',
		description: 'Path to output directory',
	})
	.option('migrations', {
		alias: 'm',
		type: 'string',
		description:
			'Path to migrations directory. Default is adjacent to output directory.',
	})
	.option('react', {
		alias: 'r',
		type: 'boolean',
		description: 'Include react hooks',
	})
	.option('debug', {
		alias: 'd',
		type: 'boolean',
		description: 'Include debug output for submitting bug reports',
	})
	.option('force', {
		alias: 'f',
		type: 'boolean',
		description:
			'Ignore a mismatch between the input schema and a saved historical schema of the same version.',
	})
	.option('commonjs', {
		alias: 'c',
		type: 'boolean',
		description:
			"Disables file extensions on module imports for environments that don't support them.",
	})
	.demandOption(['schema', 'output']).argv;

run(v)
	.then(() => {
		console.log('✅ Generated lo-fi code');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

async function run({
	schema: input,
	output,
	includeReact,
	debug,
	migrations,
	force,
	commonjs,
}) {
	const schemaInputFilePath = path.resolve(process.cwd(), input);

	// get the input file as the first argument and output as second
	const outputDirectory = path.resolve(process.cwd(), output);
	await createDirectory(outputDirectory);

	const result = await swc.parseFile(schemaInputFilePath, {
		syntax: 'typescript',
	});

	// dropping this in a temp file is useful for debugging
	if (debug) {
		const tempTranspiledOutput = path.resolve(
			outputDirectory,
			'schema-temp.json',
		);
		await fs.writeFile(
			tempTranspiledOutput,
			prettier.format(JSON.stringify(result.body), {
				parser: 'json',
			}),
		);
	}

	// get the schema version. if a historical schema already exists with this version,
	// compare their files and throw an error if they are different - a migration is
	// required.
	// otherwise, write this historical schema to the output directory
	const version = getSchemaVersion(result.body);
	const historicalSchemasDirectory = path.resolve(
		outputDirectory,
		'./schemaVersions',
	);
	const historicalSchemaPath = path.resolve(
		historicalSchemasDirectory,
		`./v${version}.ts`,
	);

	await createDirectory(historicalSchemasDirectory);

	const collections = getAllCollectionDefinitions(result.body);
	const collectionNames = Object.keys(collections);

	const migrationsDirectory = migrations
		? path.resolve(process.cwd(), migrations)
		: path.resolve(outputDirectory, '../migrations');

	await createDirectory(migrationsDirectory);

	const historicalSchemaExists = await fileExists(historicalSchemaPath);
	const conflictWithHistorical =
		historicalSchemaExists &&
		(await schemasDiffer(historicalSchemaPath, schemaInputFilePath));
	if (conflictWithHistorical && !force) {
		throw new Error(
			`Schema version ${version} already exists, but the schema files are different. Please upgrade your schema version.`,
		);
	} else {
		await fs.copyFile(schemaInputFilePath, historicalSchemaPath);
		// write a migration file if it doesn't already exist.
		const migrationFilePath = path.resolve(
			migrationsDirectory,
			`./v${version}.ts`,
		);
		const migrationExists = await fileExists(migrationFilePath);
		if (!migrationExists) {
			const migration = createMigration({
				version,
				historyDirectory: historicalSchemasDirectory,
				migrationsDirectory,
				collectionNames,
				commonjs,
			});
			await fs.writeFile(
				migrationFilePath,
				prettier.format(migration, {
					parser: 'typescript',
				}),
			);
			const allMigrationFiles = await fs.readdir(migrationsDirectory);
			const migrationFiles = allMigrationFiles.filter(
				(f) => f.startsWith('v') && f.endsWith('.ts'),
			);
			const migrationFileNames = migrationFiles.map((f) =>
				f.replace('.ts', ''),
			);
			const migrationIndex = createMigrationIndex({
				migrationsDirectory,
				migrationNames: migrationFileNames,
				commonjs,
			});
			await fs.writeFile(
				path.resolve(migrationsDirectory, `./index.ts`),
				prettier.format(migrationIndex, {
					parser: 'typescript',
				}),
			);
		}
	}

	const { compiledSchemaPath, relativeSchemaPath } = await writeCanonicalSchema(
		outputDirectory,
		input,
		commonjs,
	);

	let typingsFile = getClientTypings({
		collections: Object.values(collections),
		schemaPath: relativeSchemaPath,
		commonjs,
	});
	for (const [name, definition] of Object.entries(collections)) {
		typingsFile += getCollectionTypings(definition) + '\n';
	}

	const typingsFilePath = path.resolve(process.cwd(), output, 'index.d.ts');
	await fs.writeFile(
		typingsFilePath,
		prettier.format(typingsFile, {
			parser: 'typescript',
		}),
	);

	const implementationFilePath = path.resolve(
		process.cwd(),
		output,
		'index.js',
	);
	await fs.writeFile(
		implementationFilePath,
		prettier.format(getClientImplementation(relativeSchemaPath), {
			parser: 'babel',
		}),
	);

	const reactTypingsFilePath = path.resolve(
		process.cwd(),
		output,
		'react.d.ts',
	);
	await fs.writeFile(
		reactTypingsFilePath,
		prettier.format(
			getReactTypings({ collections: Object.values(collections), commonjs }),
			{
				parser: 'typescript',
			},
		),
	);

	const reactImplementationFilePath = path.resolve(
		process.cwd(),
		output,
		'react.js',
	);
	await fs.writeFile(
		reactImplementationFilePath,
		prettier.format(getReactImplementation(relativeSchemaPath), {
			parser: 'babel',
		}),
	);

	// don't bother writing package.json, it doesn't seem to be helpful.
	// const packageFilePath = path.resolve(process.cwd(), output, 'package.json');
	// await fs.writeFile(
	// 	packageFilePath,
	// 	prettier.format(clientPackage, {
	// 		parser: 'json',
	// 	}),
	// );
}

async function writeCanonicalSchema(output, input, commonjs = false) {
	const compiledSchemaPath = path.resolve(output, 'schema.js');

	const compiledSchema = await swc.transformFile(input, {
		sourceMaps: false,
		jsc: {
			parser: {
				syntax: 'typescript',
				dynamicImport: true,
				decorators: true,
				decoratorsBeforeExport: true,
			},
			loose: true,
			target: 'es2019',
		},
	});

	// load the schema, parse it, and write plain JS to temporary file
	await fs.writeFile(compiledSchemaPath, compiledSchema.code);

	const relativeSchemaPath = commonjs ? './schema' : './schema.js';

	return {
		compiledSchemaPath: commonjs
			? compiledSchemaPath.replace('.js', '')
			: compiledSchemaPath,
		relativeSchemaPath,
	};
}

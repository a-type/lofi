import { Context } from '../../../../context/context.js';

/** During migration, only a partial context is available */
export type OpenDocumentDbContext = Omit<Context, 'queries' | 'files'>;

export type MigrationDbRef = {
	current: IDBDatabase;
};
import 'fake-indexeddb/auto';
import { WebSocket } from 'ws';
import {
	IDBKeyRange,
	IDBCursor,
	IDBDatabase,
	IDBTransaction,
	IDBRequest,
	IDBFactory,
} from 'fake-indexeddb';
window.IDBKeyRange = IDBKeyRange;
window.IDBCursor = IDBCursor;
window.IDBDatabase = IDBDatabase;
window.IDBTransaction = IDBTransaction;
window.IDBRequest = IDBRequest;
window.IDBFactory = IDBFactory;

// @ts-ignore
global.WebSocket = WebSocket;

// patch URL.createObjectURL to return a string
// @ts-ignore
URL.createObjectURL = (blob: Blob) => {
	return `blob:${blob.type}:${blob.size}`;
};

process.env.TEST = 'true';
process.env.NODE_ENV = 'test';
process.env.VITEST = 'true';

// FAIL LOUDLY on unhandled promise rejections / errors
process.on('unhandledRejection', (reason) => {
	// eslint-disable-next-line no-console
	console.log(`FAILED TO HANDLE PROMISE REJECTION`, reason);

	throw reason;
});

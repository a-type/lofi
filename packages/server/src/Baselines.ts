import { applyPatch, DocumentBaseline, Operation } from '@lo-fi/common';
import { Database } from 'better-sqlite3';
import { DocumentBaselineSpec } from './types.js';

export class Baselines {
	constructor(private db: Database, private libraryId: string) {}

	get = (oid: string): DocumentBaseline<any> | null => {
		const row = this.db
			.prepare(
				`
      SELECT * FROM DocumentBaseline
      WHERE libraryId = ? AND oid = ?
    `,
			)
			.get(this.libraryId, oid);

		if (!row) {
			return null;
		}

		return this.hydrateSnapshot(row);
	};

	getAllWithSubObjects = (oid: string): DocumentBaseline<any>[] => {
		const rows = this.db
			.prepare(
				`
			SELECT * FROM DocumentBaseline
			WHERE libraryId = ? AND oid LIKE ?
		`,
			)
			.all(this.libraryId, `${oid}%`);

		return rows.map(this.hydrateSnapshot);
	};

	set = (baseline: DocumentBaseline) => {
		return this.db
			.prepare(
				`
      INSERT OR REPLACE INTO DocumentBaseline (libraryId, oid, snapshot, timestamp)
      VALUES (?, ?, ?, ?)
    `,
			)
			.run(
				this.libraryId,
				baseline.oid,
				JSON.stringify(baseline.snapshot),
				baseline.timestamp,
			);
	};

	insertAll = (baselines: DocumentBaseline[]) => {
		const tx = this.db.transaction(() => {
			for (const baseline of baselines) {
				this.db
					.prepare(
						`
				INSERT OR REPLACE INTO DocumentBaseline (libraryId, oid, snapshot, timestamp)
				VALUES (?, ?, ?, ?)
			`,
					)
					.run(
						this.libraryId,
						baseline.oid,
						JSON.stringify(baseline.snapshot),
						baseline.timestamp,
					);
			}
		});
		tx();
	};

	private hydrateSnapshot = (
		snapshot: DocumentBaselineSpec,
	): DocumentBaseline<any> => {
		return {
			...snapshot,
			snapshot: JSON.parse(snapshot.snapshot),
		};
	};

	getAllAfter = (timestamp: string | null): DocumentBaseline<any>[] => {
		if (!timestamp) {
			return this.db
				.prepare(
					`
					SELECT * FROM DocumentBaseline
					WHERE libraryId = ?
					ORDER BY timestamp ASC
				`,
				)
				.all(this.libraryId)
				.map(this.hydrateSnapshot);
		}
		return this.db
			.prepare(
				`
      SELECT * FROM DocumentBaseline
      WHERE libraryId = ? AND timestamp > ?
      ORDER BY timestamp ASC
    `,
			)
			.all(this.libraryId, timestamp)
			.map(this.hydrateSnapshot);
	};

	applyOperations = (oid: string, operations: Operation[]) => {
		if (operations.length === 0) return;

		let baseline = this.get(oid);
		if (!baseline) {
			baseline = {
				oid,
				snapshot: {},
				timestamp: operations[0].timestamp,
			};
		}
		for (const operation of operations) {
			baseline.snapshot = applyPatch(baseline.snapshot, operation.data);
		}
		baseline.timestamp = operations[operations.length - 1].timestamp;
		this.set(baseline);
	};

	deleteAll = () => {
		this.db
			.prepare(
				`
			DELETE FROM DocumentBaseline
			WHERE libraryId = ?
		`,
			)
			.run(this.libraryId);
	};
}

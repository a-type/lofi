import { describe, expect, it } from 'vitest';
import {
	assignOid,
	assignOidsToAllSubObjects,
	createRef,
	getOid,
	OID_KEY,
} from './oids.js';
import {
	applyPatch,
	applyOperations,
	diffToPatches,
	initialToPatches,
	substituteRefsWithObjects,
} from './operation.js';

function createClock(init = 0) {
	let i = init;
	return () => (i++).toString();
}

describe('creating diff patch operations', () => {
	describe('on flat objects', () => {
		it('generates and applies set and remove operations', () => {
			const from = { foo: 'bar', baz: 'qux', zing: 1 };
			assignOid(from, 'test/a');
			const to = { foo: 'bar', baz: 'pop' };
			assignOid(to, 'test/a');
			const ops = diffToPatches(from, to, createClock(), []);
			expect(ops).toMatchInlineSnapshot(`
				[
				  {
				    "data": {
				      "name": "baz",
				      "op": "set",
				      "value": "pop",
				    },
				    "oid": "test/a",
				    "timestamp": "0",
				  },
				  {
				    "data": {
				      "name": "zing",
				      "op": "remove",
				    },
				    "oid": "test/a",
				    "timestamp": "1",
				  },
				]
			`);
			const result = applyOperations(from, ops);
			expect(result).toEqual(to);
		});
	});
	describe('on nested objects', () => {
		it('replaces whole nested objects', () => {
			const from = assignOid(
				{
					foo: 'bar',
					baz: assignOid({ qux: 'corge' }, 'test/a:0'),
				},
				'test/a',
			);
			const to = assignOid(
				{
					foo: 'bar',
					baz: assignOid({ qux: 'grault' }, 'test/a:1'),
				},
				'test/a',
			);
			const patches = diffToPatches(from, to, createClock(), []);
			expect(patches).toMatchInlineSnapshot(`
				[
				  {
				    "data": {
				      "op": "initialize",
				      "value": {
				        "qux": "grault",
				      },
				    },
				    "oid": "test/a:1",
				    "timestamp": "0",
				  },
				  {
				    "data": {
				      "name": "baz",
				      "op": "set",
				      "value": {
				        "@@type": "ref",
				        "id": "test/a:1",
				      },
				    },
				    "oid": "test/a",
				    "timestamp": "1",
				  },
				  {
				    "data": {
				      "op": "delete",
				    },
				    "oid": "test/a:0",
				    "timestamp": "2",
				  },
				]
			`);
		});
		it('replaces whole nested objects with different ids even if fields are the same', () => {
			const from = {
				foo: 'bar',
				baz: { qux: 'corge' },
			};
			assignOid(from, 'test/a');
			assignOid(from.baz, 'test/a:0');
			const to = {
				foo: 'bar',
				baz: { qux: 'corge' },
			};
			assignOid(to, 'test/a');
			assignOid(to.baz, 'test/a:1');
			const patches = diffToPatches(from, to, createClock(), []);
			expect(patches).toMatchInlineSnapshot(`
				[
				  {
				    "data": {
				      "op": "initialize",
				      "value": {
				        "qux": "corge",
				      },
				    },
				    "oid": "test/a:1",
				    "timestamp": "0",
				  },
				  {
				    "data": {
				      "name": "baz",
				      "op": "set",
				      "value": {
				        "@@type": "ref",
				        "id": "test/a:1",
				      },
				    },
				    "oid": "test/a",
				    "timestamp": "1",
				  },
				  {
				    "data": {
				      "op": "delete",
				    },
				    "oid": "test/a:0",
				    "timestamp": "2",
				  },
				]
			`);
		});
		it('does not replace objects with the same identity and same fields', () => {
			const from = {
				foo: 'bar',
				baz: { qux: 'corge' },
			};
			assignOid(from, 'test/a');
			assignOid(from.baz, 'test/a:0');
			const to = {
				foo: 'bar',
				baz: { qux: 'corge' },
			};
			assignOid(to, 'test/a');
			assignOid(to.baz, 'test/a:0');
			const patches = diffToPatches(from, to, createClock(), []);
			expect(patches).toEqual([]);
		});
		it('patches sub-objects with same identity', () => {
			const from = {
				foo: 'bar',
				baz: { qux: 'corge' },
			};
			assignOid(from, 'test/a');
			assignOid(from.baz, 'test/a:0');
			const to = {
				foo: 'bar',
				baz: { qux: 'fig' },
			};
			assignOid(to, 'test/a');
			assignOid(to.baz, 'test/a:0');
			const patches = diffToPatches(from, to, createClock(), []);
			expect(patches).toMatchInlineSnapshot(`
				[
				  {
				    "data": {
				      "name": "qux",
				      "op": "set",
				      "value": "fig",
				    },
				    "oid": "test/a:0",
				    "timestamp": "0",
				  },
				]
			`);
		});
		it('retains keys which are undefined in new object if defaultUndefined is set', () => {
			const from = {
				foo: 'bar',
				baz: { qux: 'corge' },
			};
			assignOid(from, 'test/a');
			assignOid(from.baz, 'test/a:0');
			const to = {
				foo: 'bip',
			};
			assignOid(to, 'test/a');
			const patches = diffToPatches(
				from,
				to,
				createClock(),
				[],
				undefined,
				[],
				{
					defaultUndefined: true,
					mergeUnknownObjects: true,
				},
			);
			expect(patches).toMatchInlineSnapshot(`
				[
				  {
				    "data": {
				      "name": "foo",
				      "op": "set",
				      "value": "bip",
				    },
				    "oid": "test/a",
				    "timestamp": "0",
				  },
				]
			`);
		});
	});
	describe('on lists of primitives', () => {
		it('pushes items', async () => {
			expect(
				applyOperations(assignOid(['foo', 'bar'], 'test/a'), [
					{
						oid: 'test/a',
						timestamp: 'meh',
						data: {
							op: 'list-push',
							value: 'baz',
						},
					},
				]),
			).toEqual(assignOid(['foo', 'bar', 'baz'], 'test/a'));
		});
		it.todo('sets items');
		it.todo('inserts items');
		it.todo('removes items by index');
		it.todo('removes items by value');
		it.todo('moves items by index');
		it.todo('moves items by value');
	});
	describe.todo('on lists of objects', () => {
		it.todo('pushes items');
		it.todo('moves objects by identity');
		it.todo('removes objects by identity');
	});
	describe.todo('on lists of lists', () => {
		it.todo('rejects operations by value or identity');
	});
	it('should work for complex nested arrays and objects', () => {
		const from = {
			foo: {
				bar: [1, 2, 3],
			},
			baz: [
				{
					corge: true,
				},
			],
		};
		assignOid(from, 'test/a');
		assignOid(from.foo, 'test/a:1');
		assignOid(from.foo.bar, 'test/a:2');
		assignOid(from.baz, 'test/a:3');
		assignOid(from.baz[0], 'test/a:4');

		const to = {
			foo: {
				bar: [1, 2],
				bop: [0],
			},
			baz: [
				{
					corge: false,
				},
				{
					corge: false,
				},
			],
		};
		assignOid(to, 'test/a');
		assignOid(to.foo, 'test/a:1');
		assignOid(to.foo.bar, 'test/a:2');
		assignOid(to.foo.bop, 'test/a:6');
		assignOid(to.baz, 'test/a:3');
		assignOid(to.baz[0], 'test/a:4');
		assignOid(to.baz[1], 'test/a:5');
		expect(diffToPatches(from, to, createClock(), [])).toMatchInlineSnapshot(`
			[
			  {
			    "data": {
			      "count": 1,
			      "index": 2,
			      "op": "list-delete",
			    },
			    "oid": "test/a:2",
			    "timestamp": "0",
			  },
			  {
			    "data": {
			      "op": "initialize",
			      "value": [
			        0,
			      ],
			    },
			    "oid": "test/a:6",
			    "timestamp": "1",
			  },
			  {
			    "data": {
			      "name": "bop",
			      "op": "set",
			      "value": {
			        "@@type": "ref",
			        "id": "test/a:6",
			      },
			    },
			    "oid": "test/a:1",
			    "timestamp": "2",
			  },
			  {
			    "data": {
			      "name": "corge",
			      "op": "set",
			      "value": false,
			    },
			    "oid": "test/a:4",
			    "timestamp": "3",
			  },
			  {
			    "data": {
			      "op": "initialize",
			      "value": {
			        "corge": false,
			      },
			    },
			    "oid": "test/a:5",
			    "timestamp": "4",
			  },
			  {
			    "data": {
			      "name": 1,
			      "op": "set",
			      "value": {
			        "@@type": "ref",
			        "id": "test/a:5",
			      },
			    },
			    "oid": "test/a:3",
			    "timestamp": "5",
			  },
			]
		`);
	});

	it('should try to merge unknown objects if specified to do so', () => {
		const from = {
			foo: {
				bar: [1, 2, 3],
			},
			baz: [
				{
					corge: true,
				},
			],
		};
		assignOid(from, 'test/a');
		assignOidsToAllSubObjects(from, createClock());

		const to = {
			foo: {
				bar: [1, 2],
				bop: [0],
			},
			baz: [
				{
					corge: false,
				},
				{
					corge: false,
				},
			],
		};
		expect(
			diffToPatches(from, to, createClock(), [], createClock(5), [], {
				mergeUnknownObjects: true,
			}),
		).toMatchInlineSnapshot(`
			[
			  {
			    "data": {
			      "count": 1,
			      "index": 2,
			      "op": "list-delete",
			    },
			    "oid": "test/a.foo.bar:1",
			    "timestamp": "0",
			  },
			  {
			    "data": {
			      "op": "initialize",
			      "value": [
			        0,
			      ],
			    },
			    "oid": "test/a.foo.bop:5",
			    "timestamp": "1",
			  },
			  {
			    "data": {
			      "name": "bop",
			      "op": "set",
			      "value": {
			        "@@type": "ref",
			        "id": "test/a.foo.bop:5",
			      },
			    },
			    "oid": "test/a.foo:0",
			    "timestamp": "2",
			  },
			  {
			    "data": {
			      "name": "corge",
			      "op": "set",
			      "value": false,
			    },
			    "oid": "test/a.baz.#:3",
			    "timestamp": "3",
			  },
			  {
			    "data": {
			      "op": "initialize",
			      "value": {
			        "corge": false,
			      },
			    },
			    "oid": "test/a.baz.#:6",
			    "timestamp": "4",
			  },
			  {
			    "data": {
			      "name": 1,
			      "op": "set",
			      "value": {
			        "@@type": "ref",
			        "id": "test/a.baz.#:6",
			      },
			    },
			    "oid": "test/a.baz:2",
			    "timestamp": "5",
			  },
			]
		`);
	});
});

describe('substituting refs with objects', () => {
	it('does nothing when no refs exist', () => {
		const root = {
			foo: 'bar',
		};
		assignOid(root, 'test/a');
		const substituted = substituteRefsWithObjects(root, new Map());
		expect(root).toEqual(
			assignOid(
				{
					foo: 'bar',
				},
				'test/a',
			),
		);
		expect(substituted).toEqual([]);
	});

	it('inserts top level objects with oids', () => {
		const root = {
			foo: {
				'@@type': 'ref',
				id: 'test/1:a',
			},
			qux: 1,
		};
		assignOid(root, 'test/1');

		const substituted = substituteRefsWithObjects(
			root,
			new Map([['test/1:a', { foo: 'bar' }]]),
		);
		expect(root).toEqual(
			assignOid(
				{
					foo: assignOid(
						{
							foo: 'bar',
						},
						'test/1:a',
					),
					qux: 1,
				},
				'test/1',
			),
		);
		expect(substituted).toEqual(['test/1:a']);
		expect(getOid(root)).toEqual('test/1');
		expect(getOid(root.foo)).toEqual('test/1:a');
	});

	it('inserts nested objects with oids', () => {
		const root: any = {
			foo: {
				'@@type': 'ref',
				id: 'test/1:a',
			},
		};
		assignOid(root, 'test/1');
		const substituted = substituteRefsWithObjects(
			root,
			new Map([
				[
					'test/1:a',
					{
						foo: 'bar',
						baz: {
							'@@type': 'ref',
							id: 'test/1:b',
						},
					},
				],
				[
					'test/1:b',
					{
						qux: 'corge',
					},
				],
			]),
		);
		expect(root).toEqual(
			assignOid(
				{
					foo: assignOid(
						{
							foo: 'bar',
							baz: assignOid(
								{
									qux: 'corge',
								},
								'test/1:b',
							),
						},
						'test/1:a',
					),
				},
				'test/1',
			),
		);
		expect(substituted).toEqual(['test/1:a', 'test/1:b']);
		expect(getOid(root)).toEqual('test/1');
		expect(getOid(root.foo)).toEqual('test/1:a');
		expect(getOid(root.foo.baz)).toEqual('test/1:b');
	});

	it('substitutes arrays of objects', () => {
		const root: any = {
			foo: {
				'@@type': 'ref',
				id: 'test/1:c',
			},
		};
		assignOid(root, 'test/1');

		const substituted = substituteRefsWithObjects(
			root,
			new Map([
				[
					'test/1:c',
					[
						{
							'@@type': 'ref',
							id: 'test/1:a',
						},
						{
							'@@type': 'ref',
							id: 'test/1:b',
						},
					],
				],
				[
					'test/1:a',
					{
						foo: 'bar',
					},
				],
				[
					'test/1:b',
					{
						qux: 'corge',
					},
				],
			]),
		);
		expect(root).toEqual({
			foo: assignOid(
				[
					assignOid(
						{
							foo: 'bar',
						},
						'test/1:a',
					),
					assignOid(
						{
							qux: 'corge',
						},
						'test/1:b',
					),
				],
				'test/1:c',
			),
		});
		expect(substituted).toEqual(['test/1:c', 'test/1:a', 'test/1:b']);
		expect(getOid(root)).toEqual('test/1');
		expect(getOid(root.foo)).toEqual('test/1:c');
		expect(getOid(root.foo[0])).toEqual('test/1:a');
		expect(getOid(root.foo[1])).toEqual('test/1:b');
	});

	it.todo('substitutes arrays of arrays of objects');
});

describe('creating patches from initial state', () => {
	it('adds oids to all sub-objects', async () => {
		let i = 0;
		function createSubId() {
			return (i++).toString();
		}
		const result = initialToPatches(
			{
				foo: {
					bar: 'baz',
				},
				qux: [
					{
						corge: 'grault',
					},
					{
						bin: {
							oof: 1,
						},
					},
				],
			},
			'test/a',
			createClock(),
			createSubId,
		);
		/**
		 * Patches should not include assigned OID property
		 */
		expect(result).toMatchInlineSnapshot(`
			[
			  {
			    "data": {
			      "op": "initialize",
			      "value": {
			        "bar": "baz",
			      },
			    },
			    "oid": "test/a.foo:0",
			    "timestamp": "0",
			  },
			  {
			    "data": {
			      "op": "initialize",
			      "value": {
			        "corge": "grault",
			      },
			    },
			    "oid": "test/a.qux.#:2",
			    "timestamp": "1",
			  },
			  {
			    "data": {
			      "op": "initialize",
			      "value": {
			        "oof": 1,
			      },
			    },
			    "oid": "test/a.qux.#.bin:4",
			    "timestamp": "2",
			  },
			  {
			    "data": {
			      "op": "initialize",
			      "value": {
			        "bin": {
			          "@@type": "ref",
			          "id": "test/a.qux.#.bin:4",
			        },
			      },
			    },
			    "oid": "test/a.qux.#:3",
			    "timestamp": "3",
			  },
			  {
			    "data": {
			      "op": "initialize",
			      "value": [
			        {
			          "@@type": "ref",
			          "id": "test/a.qux.#:2",
			        },
			        {
			          "@@type": "ref",
			          "id": "test/a.qux.#:3",
			        },
			      ],
			    },
			    "oid": "test/a.qux:1",
			    "timestamp": "4",
			  },
			  {
			    "data": {
			      "op": "initialize",
			      "value": {
			        "foo": {
			          "@@type": "ref",
			          "id": "test/a.foo:0",
			        },
			        "qux": {
			          "@@type": "ref",
			          "id": "test/a.qux:1",
			        },
			      },
			    },
			    "oid": "test/a",
			    "timestamp": "5",
			  },
			]
		`);
	});
});

describe('applying individual operations', () => {
	it('applies a list-remove of only the last instance', () => {
		expect(
			applyPatch(['a', 'b', 'c', 'a', 'b'], {
				op: 'list-remove',
				value: 'a',
				only: 'last',
			}),
		).toEqual(['a', 'b', 'c', 'b']);
	});
	it('applies a list-remove of only the first instance', () => {
		expect(
			applyPatch(['a', 'b', 'c', 'a', 'b'], {
				op: 'list-remove',
				value: 'a',
				only: 'first',
			}),
		).toEqual(['b', 'c', 'a', 'b']);
	});
	it('applies a list-remove of all instances', () => {
		expect(
			applyPatch(['a', 'b', 'c', 'a', 'b'], {
				op: 'list-remove',
				value: 'a',
			}),
		).toEqual(['b', 'c', 'b']);
	});
	it('applies a list-remove of an object ref', () => {
		expect(
			applyPatch(
				[
					createRef('a'),
					createRef('b'),
					createRef('c'),
					createRef('a'),
					createRef('b'),
				],
				{
					op: 'list-remove',
					value: createRef('a'),
					only: 'last',
				},
			),
		).toEqual([createRef('a'), createRef('b'), createRef('c'), createRef('b')]);
	});
	it('applies a list-add of a nonexistent item', () => {
		expect(
			applyPatch(['a', 'b', 'c'], {
				op: 'list-add',
				value: 'd',
			}),
		).toEqual(['a', 'b', 'c', 'd']);
	});
	it('does not apply a list-add if the item is already present', () => {
		expect(
			applyPatch(['a', 'b', 'c'], {
				op: 'list-add',
				value: 'b',
			}),
		).toEqual(['a', 'b', 'c']);
	});
});

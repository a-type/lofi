import {
	TDAsset,
	TDAssetType,
	TDBinding,
	TDShape,
	TDUser,
	Tldraw,
	TldrawApp,
} from '@tldraw/tldraw';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PageAssetsValue } from './client/index.js';
import { clientDescriptor, hooks, Client } from './store.js';

/*
This example shows how to integrate TLDraw with a multiplayer room
via LiveBlocks. You could use any other service instead—the important
part is to get data from the Tldraw app when its document changes
and update it when the server's synchronized document changes.
Warning: Keeping images enabled for multiplayer applications
without providing a storage bucket based solution will cause
massive base64 string to be written to the multiplayer storage.
It's recommended to use a storage bucket based solution, such as
Amazon AWS S3. See the www project for our implementation.
*/

export function App() {
	return (
		<hooks.Provider value={clientDescriptor}>
			<Editor />
		</hooks.Provider>
	);
}

function Editor() {
	const { error, ...events } = useMultiplayerState();
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="tldraw">
			<Tldraw showPages={false} {...events} disableAssets={false} />
		</div>
	);
}

declare const window: Window & { app: TldrawApp };

async function lofiAssetToTldrawAsset(
	id: string,
	asset: PageAssetsValue,
	client: Client,
): Promise<TDAsset> {
	const type = asset.get('type') as TDAssetType;
	const size = asset.get('size').getSnapshot();
	const storedAsset = await client.assets.get(id).resolved;
	const file = storedAsset.get('file');
	if (file.url) {
		return {
			id,
			type,
			src: file.url,
			fileName: file.name || '',
			size,
		};
	} else {
		await new Promise<void>((resolve) => {
			file.subscribe('change', resolve);
		});
		if (file.failed) {
			throw new Error('Cannot load asset');
		} else if (file.url) {
			return {
				id,
				type,
				src: file.url,
				fileName: file.name || '',
				size,
			};
		} else {
			throw new Error('Unknown asset error');
		}
	}
}

export function useMultiplayerState() {
	const [app, setApp] = useState<TldrawApp>();
	const [error, setError] = useState<Error>();
	const [loading, setLoading] = useState(true);

	const room = hooks.useClient();

	const page = hooks.usePage('default')!;

	const rIsPaused = useRef(false);

	const { shapes, assets, bindings } = hooks.useWatch(page);

	// Callbacks --------------

	// Put the state into the window, for debugging.
	const onMount = useCallback((app: TldrawApp) => {
		app.loadRoom('default');
		app.pause(); // Turn off the app's own undo / redo stack
		window.app = app;
		setApp(app);
	}, []);

	// Update the live shapes when the app's shapes change.
	const onChangePage = useCallback(
		(
			app: TldrawApp,
			tShapes: Record<string, TDShape | undefined>,
			tBindings: Record<string, TDBinding | undefined>,
			tAssets: Record<string, TDAsset | undefined>,
		) => {
			Object.entries(tShapes).forEach(([id, shape]) => {
				if (!shape) {
					shapes.delete(id);
				} else {
					const syncShape = shapes.get(shape.id);
					if (!syncShape) {
						shapes.set(shape.id, shape);
					} else {
						syncShape.update(shape);
					}
				}
			});

			Object.entries(tBindings).forEach(([id, binding]) => {
				if (!binding) {
					bindings.delete(id);
				} else {
					const syncBinding = bindings.get(binding.id);
					if (!syncBinding) {
						bindings.set(binding.id, binding);
					} else {
						syncBinding.update(binding);
					}
				}
			});

			Object.entries(tAssets).forEach(([id, asset]) => {
				if (!asset) {
					assets.delete(id);
				} else {
					const syncAsset = assets.get(asset.id);
					if (!syncAsset) {
						assets.set(asset.id, asset);
					} else {
						syncAsset.update(asset);
					}
				}
			});
		},
		[],
	);

	// Handle presence updates when the user's pointer / selection changes
	const onChangePresence = useCallback(
		(app: TldrawApp, user: TDUser) => {
			room.sync.presence.update({ user });
		},
		[room],
	);

	// Document Changes --------

	useEffect(() => {
		const unsubs: (() => void)[] = [];
		if (!(app && room)) return;
		// Handle errors
		// unsubs.push(room.subscribe('error', (error) => setError(error)))

		// Handle changes to other users' presence
		unsubs.push(
			room.sync.presence.subscribe('peersChanged', (others) => {
				app.updateUsers(
					Object.values(others)
						.filter((other) => other.presence)
						.map((other) => other.presence!.user)
						.filter(Boolean),
				);
			}),
		);
		unsubs.push(
			room.sync.presence.subscribe('peerLeft', (id, info) =>
				app.removeUser(info.presence.user.id),
			),
		);

		let stillAlive = true;

		// Setup the document's storage and subscriptions
		async function setupDocument() {
			// Migrate previous versions
			const version = page.get('version');

			// Subscribe to changes
			const handleChanges = async () => {
				app?.replacePageContent(
					shapes.getSnapshot() || {},
					bindings.getSnapshot() || {},
					(
						await Promise.all(
							assets
								.entries()
								.map(
									async ([id, asset]) =>
										[
											id,
											await lofiAssetToTldrawAsset(id, asset, room),
										] as const,
								),
						)
					).reduce((acc, [id, asset]) => {
						acc[id] = asset;
						return acc;
					}, {} as Record<string, TDAsset>),
				);
			};

			if (stillAlive) {
				unsubs.push(shapes.subscribe('changeDeep', handleChanges));
				unsubs.push(bindings.subscribe('changeDeep', handleChanges));
				unsubs.push(assets.subscribe('changeDeep', handleChanges));

				// Update the document with initial content
				handleChanges();

				// Zoom to fit the content
				if (app) {
					app.zoomToFit();
					if (app.zoom > 1) {
						app.resetZoom();
					}
				}

				setLoading(false);
			}
		}

		setupDocument();

		return () => {
			stillAlive = false;
			unsubs.forEach((unsub) => unsub());
		};
	}, [page, app]);

	const onAssetCreate = useCallback(
		async (app: TldrawApp, file: File, id: string) => {
			const asset = await room.assets.put({
				id,
				file,
			});
			return asset.get('file').url || false;
		},
		[],
	);

	const onAssetDelete = useCallback((app: TldrawApp, assetId: string) => {
		room.assets.delete(assetId);
	}, []);

	return {
		onMount,
		onChangePage,
		onChangePresence,
		error,
		loading,
		onAssetCreate,
		onAssetDelete,
	};
}

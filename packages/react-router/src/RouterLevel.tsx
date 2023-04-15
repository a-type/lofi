import { ReactNode, useEffect } from 'react';
import { RouteLevelProvider } from './context.js';
import { useMatchingRoute } from './hooks.js';
import { RouteMatch } from './types.js';

export function RouterLevel({
	children,
	rootPath,
	parent,
	transitioning,
}: {
	children: ReactNode;
	rootPath: string;
	parent: RouteMatch | null;
	transitioning?: boolean;
}) {
	const [match, remainingPath] = useMatchingRoute(parent, rootPath);

	useEffect(() => {
		if (match?.route?.onVisited) {
			match.route.onVisited(match.params);
		}
	}, [match]);

	return (
		<RouteLevelProvider
			match={match}
			parent={parent}
			subpath={remainingPath}
			transitioning={!!transitioning}
		>
			{children}
		</RouteLevelProvider>
	);
}

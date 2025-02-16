import { type RouteConfig, route, index } from '@react-router/dev/routes';

// Define your routes with type safety
export default [
	index('./screens/home.tsx'),
	route('edge', './screens/edge.tsx'),
	route('edgestream', './screens/edgestream.tsx'),
	route('node', './screens/node.tsx'),
	route('nodestream', './screens/nodestream.tsx'),
] satisfies RouteConfig;

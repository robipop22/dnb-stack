import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import styles from './styles/tailwind.css';
import globalStyles from './styles/globals.css';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: styles },
	{ rel: 'stylesheet', href: globalStyles },
];

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

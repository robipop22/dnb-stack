import type { LinksFunction } from '@vercel/remix';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import styles from './tailwind.css?url';
import globalStyles from './styles/globals.css?url';

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
			</body>
		</html>
	);
}

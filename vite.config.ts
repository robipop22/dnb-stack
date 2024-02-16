/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';

installGlobals();

export default defineConfig({
	plugins: [
		remix({
			ignoredRouteFiles: ['**/.*'],
			// appDirectory: "app",
			// assetsBuildDirectory: "public/build",
			// serverBuildPath: "api/index.js",
			// publicPath: "/build/",
			tailwind: true,
			serverModuleFormat: 'cjs',
		}),
		tsconfigPaths(),
	],
});

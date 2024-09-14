/// <reference types="vitest" />
/// <reference types="vite/client" />

import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { vercelPreset } from '@vercel/remix/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

installGlobals();

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [
		remix({
			ignoredRouteFiles: ['**/.*'],
			// appDirectory: "app",
			// assetsBuildDirectory: "public/build",
			// serverBuildPath: "api/index.js",
			// publicPath: "/build/",
			presets: [vercelPreset()],
		}),
		tsconfigPaths(),
	],
});

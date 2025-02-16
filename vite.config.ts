/// <reference types="vitest" />
/// <reference types="vite/client" />

import { reactRouter } from '@react-router/dev/vite';
import { vercelPreset } from '@vercel/react-router/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [reactRouter(), tsconfigPaths(), vercelPreset(), tailwindcss()],
});

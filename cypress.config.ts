import { defineConfig } from 'cypress';

export default defineConfig({
	video: false,
	screenshotOnRunFailure: false,

	e2e: {
		setupNodeEvents() {
			// implement node event listeners here
		},
		baseUrl: 'https://dnb-stack.vercel.app',
	},
});

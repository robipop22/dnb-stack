/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
	// When running locally in development mode, we use the built in remix
	// server. This does not understand the vercel lambda module format,
	// so we default back to the standard build output.
	server: process.env.VERCEL ? './server.js' : undefined,
	ignoredRouteFiles: ['**/.*'],
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// serverBuildPath: "api/index.js",
	// publicPath: "/build/",
	future: {
		v2_meta: true,
		unstable_tailwind: true,
		v2_routeConvention: true,
	},
};

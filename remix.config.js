/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
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

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
	ignoredRouteFiles: ['**/.*'],
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// serverBuildPath: "api/index.js",
	// publicPath: "/build/",
	tailwind: true,
	serverModuleFormat: 'cjs',
	future: {
		v2_meta: true,
		v2_routeConvention: true,
		v2_errorBoundary: true,
		v2_normalizeFormMethod: true,
		v2_headers: true,
	},
};

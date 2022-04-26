/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
    ignoredRouteFiles: ['**/.*'],
    appDirectory: 'app',
    publicPath: '/_static/',
    serverBuildTarget: 'arc',
    assetsBuildDirectory: 'public/_static',
    server: './server.js',
    serverDependenciesToBundle: [/^((?!aws-sdk).)*$/],
};

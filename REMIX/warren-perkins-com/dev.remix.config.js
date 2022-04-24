/**
 * @type {import('@remix-run/dev').AppConfig}
 */
 module.exports = {
    ignoredRouteFiles: ["**/.*"],
    appDirectory: "app",
    publicPath: "/build/",
    serverBuildTarget: "arc",
    assetsBuildDirectory: "public/build",
    serverDependenciesToBundle: [
      /^((?!aws-sdk).)*$/
    ]
  };
  
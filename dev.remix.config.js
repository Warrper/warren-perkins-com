/**
 * @type {import('@remix-run/dev').AppConfig}
 */

module.exports = {
    ignoredRouteFiles: ['**/.*'],
    appDirectory: 'app',
    publicPath: '/build/',
    serverBuildTarget: 'arc',
    assetsBuildDirectory: 'public/build',
    serverDependenciesToBundle: [/^((?!aws-sdk).)*$/],
    mdx: async (filename) => {
        const [rehypeHighlight, remarkToc] = await Promise.all([
            import('rehype-highlight').then((mod) => mod.default),
            import('remark-toc').then((mod) => mod.default),
        ]);

        return {
            remarkPlugins: [remarkToc],
            rehypePlugins: [rehypeHighlight],
        };
    },
};

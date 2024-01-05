module.exports = {
  distDir: 'build-next',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return defaultPathMap;
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{master}' : '',
};
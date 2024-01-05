module.exports = {
  distDir: 'build-next',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{master}' : '',
};
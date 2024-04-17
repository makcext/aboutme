/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isGH = process.env.DEPLOY_TARGET === 'gh-pages'

const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true
    },
    basePath: isProd && isGH ? '/aboutme' : '',
    assetPrefix: isProd && isGH ? '/aboutme' : '',
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath: process.env.NODE_ENV === 'production' ? '/aboutme' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/aboutme' : '',
}

module.exports = nextConfig
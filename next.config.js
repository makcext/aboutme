/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	reactStrictMode: true,
	basePath: process.env.NODE_ENV === 'production' ? '/aboutme' : '',
	assetPrefix: process.env.NODE_ENV === 'production' ? '/aboutme' : '',
}

module.exports = nextConfig
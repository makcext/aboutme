/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	images: {
		unoptimized: true
	},
	basePath: '/aboutme',
  assetPrefix: '/aboutme/',

	
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/hackathonGluten',
  assetPrefix: '/hackathonGluten/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

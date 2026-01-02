/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/crypto-mastery-site' : '',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
}

module.exports = nextConfig

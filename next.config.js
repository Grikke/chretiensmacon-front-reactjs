/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [
      process.env?.NEXT_PUBLIC_WORDPRESS_URL?.replace(/^http(s?):\/\//i, '')
    ],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      process.env?.NEXT_PUBLIC_WORDPRESS_URL?.replace(/^http(s?):\/\//i, '')
    ],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx'],
  images: {
    domains: [
      's3.us-west-2.amazonaws.com',
      'www.notion.so',
      'images.unsplash.com',
    ],
  },
}

module.exports = nextConfig

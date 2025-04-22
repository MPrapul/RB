/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'images.pexels.com',
      'i.imgur.com',
      'cdn.sanity.io'
    ],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
};

module.exports = nextConfig; 
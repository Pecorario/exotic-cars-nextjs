/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com'],
    deviceSizes: [320, 640, 768, 1024]
  }
};

module.exports = nextConfig;

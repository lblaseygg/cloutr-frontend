/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  output: 'standalone',
  // Disable API routes since we're only showcasing the frontend
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig; 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  eslint: {
    dirs: ['src', 'playwright', 'e2e'],
  },
};

module.exports = nextConfig;

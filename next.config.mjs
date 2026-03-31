/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['uptelecomnet.com.br', 'www.figma.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/mcp/asset/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;


import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'linksairelectrical.com.au',
      },
    ],
  },
};

export default nextConfig;

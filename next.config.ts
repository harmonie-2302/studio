import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  serverActions: {
    bodySizeLimit: '4.5mb', // Default is 1mb
    // Extend the timeout for all server actions
    // By default, the timeout is 60 seconds
    executionTimeout: 120, // 2 minutes
  },
};

export default nextConfig;

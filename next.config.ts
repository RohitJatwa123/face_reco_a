import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'wphelp.blog',
        port: '',
        pathname: '**',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;

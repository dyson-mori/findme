import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'pinterest.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: ''
      }
    ],
  },
};

export default nextConfig;

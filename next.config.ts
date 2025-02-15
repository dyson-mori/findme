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

  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          fs: false
        }
      }
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};

export default nextConfig;

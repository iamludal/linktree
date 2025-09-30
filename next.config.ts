import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  redirects() {
    return [
      {
        source: '/:path(.*)',
        destination: '/',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;

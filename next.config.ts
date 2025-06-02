import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;

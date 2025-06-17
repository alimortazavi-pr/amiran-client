import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "api.amirangroup.co",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "amiran-back",
        pathname: "**",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;

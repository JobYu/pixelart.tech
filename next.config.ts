import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    domains: ["placehold.co"],
    unoptimized: true,
  },
  // Remove trailing slash for static export
  trailingSlash: false,
};

export default nextConfig;

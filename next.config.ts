import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
  assetPrefix: process.env.NODE_ENV === "production" ? "web2025-project/" : "",
};

export default nextConfig;

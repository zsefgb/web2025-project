import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://zsefgb.github.io/web2025-project/"
      : "",
};

export default nextConfig;

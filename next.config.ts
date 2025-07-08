import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  assetPrefix: isProd ? "/tusker-lodge" : "",
  basePath: isProd ? "/tusker-lodge" : "",
};

export default nextConfig;

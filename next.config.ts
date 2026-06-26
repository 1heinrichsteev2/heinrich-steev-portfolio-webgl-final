import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: { formats: ["image/avif", "image/webp"] },
  webpack(config) {
    config.module.rules.push({ test: /\.(glb|gltf)$/, type: "asset/resource" });
    return config;
  },
};
export default nextConfig;

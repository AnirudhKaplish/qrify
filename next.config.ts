import type { NextConfig } from "next";

// Static export for GitHub Pages (served from /qrify/)
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/qrify",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;

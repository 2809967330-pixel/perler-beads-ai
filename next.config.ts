import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // 关键添加：构建时忽略 ESLint 错误
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

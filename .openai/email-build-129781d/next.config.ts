import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Portfolio artwork is already sized and compressed for the web. Serving it
    // directly also keeps local Vinext previews independent of Cloudflare's
    // production-only ASSETS and IMAGES bindings.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;

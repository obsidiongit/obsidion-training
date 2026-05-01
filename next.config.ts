import type { NextConfig } from "next";

const basePath = "/training";

const nextConfig: NextConfig = {
  // Static HTML export for embedding under the outreach app at /training/*
  // (so links and /_next assets resolve correctly inside the iframe).
  output: "export",
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: { unoptimized: true },
  trailingSlash: true,
  async redirects() {
    return [
      // Legacy single-segment /playbook route → new role-scoped cannabis playbook
      {
        source: "/playbook/:moduleId",
        destination: "/role/account-executive/playbooks/cannabis/:moduleId",
        permanent: false,
      },
      // Old /playbooks/[slug]/[moduleId] → new role-scoped route
      {
        source: "/playbooks/:slug/:moduleId",
        destination: "/role/account-executive/playbooks/:slug/:moduleId",
        permanent: false,
      },
      // Role about redirect stays as-is
      {
        source: "/role/:roleSlug/about",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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

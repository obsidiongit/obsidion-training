import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/playbook/:moduleId",
        destination: "/playbooks/cannabis/:moduleId",
        permanent: false,
      },
      {
        source: "/role/:roleSlug/about",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

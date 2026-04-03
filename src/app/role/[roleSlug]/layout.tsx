import { notFound } from "next/navigation";
import type { Metadata } from "next";

const VALID_ROLES = ["account-executive"] as const;

export const metadata: Metadata = {
  title: "Obsidion Training Hub",
  description: "Employee training hub for Obsidion.",
};

export default async function RoleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;
  if (!VALID_ROLES.includes(roleSlug as (typeof VALID_ROLES)[number])) {
    notFound();
  }

  return <>{children}</>;
}

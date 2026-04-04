import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageTransition from "@/components/ui/PageTransition";
import SectionMobileHeader from "@/components/ui/SectionMobileHeader";
import { ROLES } from "@/data/roles/registry";

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
  const isKnownRole = ROLES.some((r) => r.slug === roleSlug);
  if (!isKnownRole) {
    notFound();
  }

  return (
    <>
      <SectionMobileHeader />
      <PageTransition>{children}</PageTransition>
    </>
  );
}

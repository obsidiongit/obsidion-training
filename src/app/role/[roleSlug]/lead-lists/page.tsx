import LeadListsContent from "@/components/sdr/LeadListsContent";

export const metadata = {
  title: "Lead Lists & Accounts — Obsidion Training Hub",
  description:
    "How to read, work, and prioritize your lead list every day.",
};

export default async function LeadListsPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;
  return <LeadListsContent roleSlug={roleSlug} />;
}

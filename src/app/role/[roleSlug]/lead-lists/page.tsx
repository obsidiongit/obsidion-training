import LeadListsContent from "@/components/sdr/LeadListsContent";

export const metadata = {
  title: "Lead Generation & Prospecting — Obsidion Training Hub",
  description:
    "Self-source your pipeline — networking, social media, outreach channels, and how to submit leads.",
};

export default async function LeadListsPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;
  return <LeadListsContent roleSlug={roleSlug} />;
}

import GettingPaidContent from "@/components/getting-paid/GettingPaidContent";

export const metadata = {
  title: "Getting Paid & Bonuses — Obsidion Training Hub",
  description:
    "Compensation structure, front-end commissions, MRR bonus tiers, enterprise deal treatment, and earning potential for Account Executives.",
};

export default async function GettingPaidPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;
  return <GettingPaidContent roleSlug={roleSlug} />;
}

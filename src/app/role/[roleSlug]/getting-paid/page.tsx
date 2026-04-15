import GettingPaidContent from "@/components/getting-paid/GettingPaidContent";
import SDRGettingPaidContent from "@/components/sdr/SDRGettingPaidContent";

export const metadata = {
  title: "Getting Paid & Bonuses — Obsidion Training Hub",
  description:
    "Compensation structure, commissions, bonus tiers, and earning potential.",
};

export default async function GettingPaidPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;

  if (roleSlug === "sdr") {
    return <SDRGettingPaidContent roleSlug={roleSlug} />;
  }

  return <GettingPaidContent roleSlug={roleSlug} />;
}

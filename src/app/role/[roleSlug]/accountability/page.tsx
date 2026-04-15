import AccountabilityContent from "@/components/accountability/AccountabilityContent";
import SDRAccountabilityContent from "@/components/sdr/SDRAccountabilityContent";

export const metadata = {
  title: "What Wins Here & What Gets You Exited — Obsidion Training Hub",
  description:
    "No ambiguity. The specific behaviors that define top performers — and the non-negotiables that end the relationship.",
};

export default async function AccountabilityPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;

  if (roleSlug === "sdr") {
    return <SDRAccountabilityContent roleSlug={roleSlug} />;
  }

  return <AccountabilityContent roleSlug={roleSlug} />;
}

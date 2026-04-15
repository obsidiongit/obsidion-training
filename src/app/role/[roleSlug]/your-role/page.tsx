import YourRoleContent from "@/components/sdr/YourRoleContent";

export const metadata = {
  title: "Your Role as an SDR — Obsidion Training Hub",
  description:
    "What you do, how you fit in, and the SDR to AE handoff flow.",
};

export default async function YourRolePage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;
  return <YourRoleContent roleSlug={roleSlug} />;
}

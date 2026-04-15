import AmbassadorSetupContent from "@/components/sdr/AmbassadorSetupContent";

export const metadata = {
  title: "Ambassador Profile Setup — Obsidion Training Hub",
  description:
    "Set up your LinkedIn, Facebook, and email signature with Obsidion branding.",
};

export default async function AmbassadorSetupPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;
  return <AmbassadorSetupContent roleSlug={roleSlug} />;
}

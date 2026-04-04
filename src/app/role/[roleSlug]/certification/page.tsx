import CertificationContent from "@/components/certification/CertificationContent";

export const metadata = {
  title: "Certification & Readiness Gate — Obsidion Training Hub",
  description:
    "Nobody touches a live prospect until they've passed all seven gates. Product knowledge, role-play assessments, CRM proficiency, and proposal submission.",
};

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;
  return <CertificationContent roleSlug={roleSlug} />;
}

import CertificationContent from "@/components/certification/CertificationContent";
import SDRCertificationContent from "@/components/sdr/SDRCertificationContent";

export const metadata = {
  title: "Certification & Readiness Gate — Obsidion Training Hub",
  description:
    "Complete your certification gates before going live with prospects.",
};

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;

  if (roleSlug === "sdr") {
    return <SDRCertificationContent roleSlug={roleSlug} />;
  }

  return <CertificationContent roleSlug={roleSlug} />;
}

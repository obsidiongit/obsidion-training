import DailyChecklist from "@/components/daily-structure/DailyChecklist";
import SDRDailyChecklistSection from "@/components/sdr/SDRDailyChecklistSection";

export default async function DailyStructurePage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;

  if (roleSlug === "sdr") {
    return <SDRDailyChecklistSection />;
  }

  return <DailyChecklist roleSlug={roleSlug} />;
}

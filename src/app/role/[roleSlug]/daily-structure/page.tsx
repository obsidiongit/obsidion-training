import DailyChecklist from "@/components/daily-structure/DailyChecklist";

export default async function DailyStructurePage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;

  return <DailyChecklist roleSlug={roleSlug} />;
}

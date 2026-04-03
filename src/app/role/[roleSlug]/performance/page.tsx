import PerformanceContent from "@/components/performance/PerformanceContent";

export default async function PerformancePage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;

  return <PerformanceContent roleSlug={roleSlug} />;
}

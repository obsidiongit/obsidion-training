import PerformanceContent from "@/components/performance/PerformanceContent";
import SDRPerformanceContent from "@/components/sdr/SDRPerformanceContent";

export default async function PerformancePage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;

  if (roleSlug === "sdr") {
    return <SDRPerformanceContent roleSlug={roleSlug} />;
  }

  return <PerformanceContent roleSlug={roleSlug} />;
}

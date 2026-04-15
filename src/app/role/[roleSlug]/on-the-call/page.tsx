import OnTheCallOverview from "@/components/on-the-call/OnTheCallOverview";
import OutreachOverviewContent from "@/components/sdr/OutreachOverviewContent";

export const metadata = {
  title: "On the Call — Obsidion Training Hub",
  description:
    "Scripts, objection handling, and call frameworks for booking meetings and closing deals.",
};

export default async function OnTheCallPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;

  if (roleSlug === "sdr") {
    return <OutreachOverviewContent roleSlug={roleSlug} />;
  }

  return <OnTheCallOverview roleSlug={roleSlug} />;
}

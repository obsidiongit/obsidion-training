import MeetingCadenceContent from "@/components/meetings/MeetingCadenceContent";
import SDRMeetingCadenceContent from "@/components/sdr/SDRMeetingCadenceContent";

export const metadata = {
  title: "Meeting Cadence & Preparation — Obsidion Training Hub",
  description:
    "Meeting format, preparation checklist, agenda structure, and attendance expectations.",
};

export default async function MeetingsPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;

  if (roleSlug === "sdr") {
    return <SDRMeetingCadenceContent roleSlug={roleSlug} />;
  }

  return <MeetingCadenceContent roleSlug={roleSlug} />;
}

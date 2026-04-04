import MeetingCadenceContent from "@/components/meetings/MeetingCadenceContent";

export const metadata = {
  title: "Meeting Cadence & Preparation — Obsidion Training Hub",
  description:
    "Twice-weekly team meeting format, preparation checklist, agenda structure, and attendance expectations for Account Executives.",
};

export default async function MeetingsPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;
  return <MeetingCadenceContent roleSlug={roleSlug} />;
}

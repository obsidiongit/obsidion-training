import OnTheCallOverview from "@/components/on-the-call/OnTheCallOverview";

export const metadata = {
  title: "On the Call — Obsidion Training Hub",
  description:
    "Your live playbook: scripts, objection handling, and call frameworks for inbound and outbound calls.",
};

export default async function OnTheCallPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;
  return <OnTheCallOverview roleSlug={roleSlug} />;
}

import { notFound } from "next/navigation";
import ScriptsContent from "@/components/on-the-call/ScriptsContent";
import ObjectionHandlingContent from "@/components/on-the-call/ObjectionHandlingContent";
import CallFrameworksContent from "@/components/on-the-call/CallFrameworksContent";

const VALID_SLUGS = ["scripts", "objections", "frameworks"] as const;
type TopicSlug = (typeof VALID_SLUGS)[number];

const TOPIC_META: Record<TopicSlug, { title: string; description: string }> = {
  scripts: {
    title: "Call Scripts — Obsidion Training Hub",
    description:
      "Opening talk tracks, discovery prompts, voicemail scripts, gatekeeper navigation, and follow-up email templates.",
  },
  objections: {
    title: "Objection Handling — Obsidion Training Hub",
    description:
      "Live rebuttals organized by call phase — early resistance, mid-call skepticism, and late-stage stalls.",
  },
  frameworks: {
    title: "Call Frameworks — Obsidion Training Hub",
    description:
      "The 30-minute discovery structure, qualifying signals, closing language, and follow-up cadence.",
  },
};

export function generateStaticParams() {
  return VALID_SLUGS.map((topicSlug) => ({ topicSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topicSlug: string }>;
}) {
  const { topicSlug } = await params;
  const meta = TOPIC_META[topicSlug as TopicSlug];
  if (!meta) return {};
  return { title: meta.title, description: meta.description };
}

const TOPIC_COMPONENTS: Record<
  TopicSlug,
  React.ComponentType<{ roleSlug: string }>
> = {
  scripts: ScriptsContent,
  objections: ObjectionHandlingContent,
  frameworks: CallFrameworksContent,
};

export default async function OnTheCallTopicPage({
  params,
}: {
  params: Promise<{ roleSlug: string; topicSlug: string }>;
}) {
  const { roleSlug, topicSlug } = await params;

  if (!VALID_SLUGS.includes(topicSlug as TopicSlug)) {
    notFound();
  }

  const Component = TOPIC_COMPONENTS[topicSlug as TopicSlug];
  return <Component roleSlug={roleSlug} />;
}

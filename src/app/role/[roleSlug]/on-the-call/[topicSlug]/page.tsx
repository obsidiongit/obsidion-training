import { notFound } from "next/navigation";
import ScriptsContent from "@/components/on-the-call/ScriptsContent";
import ObjectionHandlingContent from "@/components/on-the-call/ObjectionHandlingContent";
import CallFrameworksContent from "@/components/on-the-call/CallFrameworksContent";
import PhoneScriptsContent from "@/components/sdr/PhoneScriptsContent";
import EmailTemplatesContent from "@/components/sdr/EmailTemplatesContent";
import SocialOutreachContent from "@/components/sdr/SocialOutreachContent";
import SDRObjectionHandlingContent from "@/components/sdr/SDRObjectionHandlingContent";

const AE_SLUGS = ["scripts", "objections", "frameworks"] as const;
const SDR_SLUGS = [
  "phone-scripts",
  "email-templates",
  "social-outreach",
  "objection-handling",
] as const;
const ALL_SLUGS = [...AE_SLUGS, ...SDR_SLUGS] as const;
type TopicSlug = (typeof ALL_SLUGS)[number];

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
  "phone-scripts": {
    title: "Phone Scripts — Obsidion Training Hub",
    description:
      "Cold call openers, qualifying questions, booking scripts, voicemail drops, and gatekeeper navigation.",
  },
  "email-templates": {
    title: "Email Templates — Obsidion Training Hub",
    description:
      "First-touch, follow-up, breakup, and post-call email templates for SDR outreach cadences.",
  },
  "social-outreach": {
    title: "Social Outreach — Obsidion Training Hub",
    description:
      "LinkedIn and Facebook outreach sequences, connection request templates, and DM scripts.",
  },
  "objection-handling": {
    title: "SDR Objection Handling — Obsidion Training Hub",
    description:
      "Rebuttals for the most common cold outreach objections — not interested, send info, have a vendor, and more.",
  },
};

export function generateStaticParams() {
  return [
    ...AE_SLUGS.map((topicSlug) => ({
      roleSlug: "account-executive",
      topicSlug,
    })),
    ...SDR_SLUGS.map((topicSlug) => ({ roleSlug: "sdr", topicSlug })),
  ];
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

const AE_COMPONENTS: Record<
  (typeof AE_SLUGS)[number],
  React.ComponentType<{ roleSlug: string }>
> = {
  scripts: ScriptsContent,
  objections: ObjectionHandlingContent,
  frameworks: CallFrameworksContent,
};

const SDR_COMPONENTS: Record<
  (typeof SDR_SLUGS)[number],
  React.ComponentType<{ roleSlug: string }>
> = {
  "phone-scripts": PhoneScriptsContent,
  "email-templates": EmailTemplatesContent,
  "social-outreach": SocialOutreachContent,
  "objection-handling": SDRObjectionHandlingContent,
};

export default async function OnTheCallTopicPage({
  params,
}: {
  params: Promise<{ roleSlug: string; topicSlug: string }>;
}) {
  const { roleSlug, topicSlug } = await params;

  if (roleSlug === "sdr") {
    if (!(SDR_SLUGS as readonly string[]).includes(topicSlug)) {
      notFound();
    }
    const Component = SDR_COMPONENTS[topicSlug as (typeof SDR_SLUGS)[number]];
    return <Component roleSlug={roleSlug} />;
  }

  if (!(AE_SLUGS as readonly string[]).includes(topicSlug)) {
    notFound();
  }

  const Component = AE_COMPONENTS[topicSlug as (typeof AE_SLUGS)[number]];
  return <Component roleSlug={roleSlug} />;
}

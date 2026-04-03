import Link from "next/link";
import { notFound } from "next/navigation";

const TOPICS: Record<string, { title: string; description: string; contentFile: string }> = {
  scripts: { title: "Call Scripts", description: "Opening talk tracks, discovery prompts, voicemail scripts, and follow-up templates.", contentFile: "on-the-call/scripts.md" },
  objections: { title: "Objection Handling", description: "Live conversational rebuttals for common pushback on calls.", contentFile: "on-the-call/objection-handling.md" },
  frameworks: { title: "Call Frameworks", description: "Discovery call structure, closing framework, and follow-up cadence.", contentFile: "on-the-call/call-frameworks.md" },
};

export function generateStaticParams() {
  return Object.keys(TOPICS).map((topicSlug) => ({ topicSlug }));
}

export default async function OnTheCallTopicPage({
  params,
}: {
  params: Promise<{ roleSlug: string; topicSlug: string }>;
}) {
  const { roleSlug, topicSlug } = await params;
  const topic = TOPICS[topicSlug];
  if (!topic) notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Link href={`/role/${roleSlug}/on-the-call`} className="text-sm text-muted-foreground hover:text-accent transition-colors mb-6 inline-block">
          ← On the Call
        </Link>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">On the Call</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{topic.title}</h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">{topic.description}</p>
        <div className="rounded-2xl border border-dashed border-border bg-muted/10 p-8 text-center">
          <p className="text-muted-foreground">Content coming soon — see <code className="text-xs bg-muted px-1.5 py-0.5 rounded">content/roles/account-executive/{topic.contentFile}</code> for the outline.</p>
        </div>
      </div>
    </div>
  );
}

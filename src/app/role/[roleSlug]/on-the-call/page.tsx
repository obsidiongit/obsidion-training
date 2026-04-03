import Link from "next/link";

const TOPICS = [
  { slug: "scripts", title: "Call Scripts", description: "Opening talk tracks, discovery prompts, voicemail scripts, and follow-up templates." },
  { slug: "objections", title: "Objection Handling", description: "Live conversational rebuttals for common pushback on calls." },
  { slug: "frameworks", title: "Call Frameworks", description: "Discovery call structure, closing framework, and follow-up cadence." },
] as const;

export default async function OnTheCallPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Link href={`/role/${roleSlug}`} className="text-sm text-muted-foreground hover:text-accent transition-colors mb-6 inline-block">
          ← Back to hub
        </Link>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Role-Specific</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">On the Call</h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Your live playbook: scripts, objection handling, and call frameworks for inbound and outbound calls.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {TOPICS.map((topic) => (
            <Link
              key={topic.slug}
              href={`/role/${roleSlug}/on-the-call/${topic.slug}`}
              className="block rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-accent/40 hover:shadow-md transition-all group"
            >
              <h2 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                {topic.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

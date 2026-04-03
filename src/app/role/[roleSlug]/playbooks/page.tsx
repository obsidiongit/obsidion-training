import Link from "next/link";
import { getAllPlaybooks } from "@/data/playbooks/registry";

export default async function PlaybooksIndexPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;
  const playbooks = getAllPlaybooks();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <Link href={`/role/${roleSlug}`} className="text-sm text-muted-foreground hover:text-accent transition-colors mb-6 inline-block">
          ← Back to hub
        </Link>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Role-Specific</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Training Playbooks</h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Pick a vertical to study. Each playbook covers market opportunity, product selling angles, pricing, outreach, objections, and a quiz.
        </p>
        <ul className="space-y-4">
          {playbooks.map((pb) => (
            <li key={pb.slug}>
              <Link
                href={`/playbooks/${pb.slug}/0`}
                className="block rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm hover:border-accent/40 hover:shadow-md transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {pb.title} Playbook
                    </h2>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{pb.description}</p>
                  </div>
                  <span className="text-sm font-semibold text-accent whitespace-nowrap shrink-0">
                    Open →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

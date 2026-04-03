import Link from "next/link";

const SECTIONS = [
  { slug: "about", title: "About the Company", description: "Company history, mission, values, and culture." },
  { slug: "products", title: "Product Knowledge", description: "Deep-dive into every Obsidion product." },
  { slug: "getting-paid", title: "Getting Paid & Bonuses", description: "Compensation structure, commissions, and bonus programs." },
  { slug: "performance", title: "Performance Expectations", description: "KPIs, ramp schedule, and activity benchmarks." },
  { slug: "tech", title: "Tech We Use", description: "CRM, dialer, project management, and internal systems." },
  { slug: "assets", title: "Downloadable Assets", description: "Logos, banners, email footers, and brand guidelines." },
  { slug: "on-the-call", title: "On the Call", description: "Scripts, objection handling, and call frameworks." },
  { slug: "playbooks", title: "Training Playbooks", description: "Vertical-specific sales training for each industry." },
] as const;

export default async function RoleHubPage({
  params,
}: {
  params: Promise<{ roleSlug: string }>;
}) {
  const { roleSlug } = await params;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors mb-4 inline-block">
            ← All roles
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mb-2">
            Account Executive Hub
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Everything you need to ramp as an AE at Obsidion. Work through each section at your own pace.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SECTIONS.map((section) => (
            <Link
              key={section.slug}
              href={`/role/${roleSlug}/${section.slug}`}
              className="block rounded-2xl border border-border bg-card p-6 shadow-sm hover:border-accent/40 hover:shadow-md transition-all group"
            >
              <h2 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                {section.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

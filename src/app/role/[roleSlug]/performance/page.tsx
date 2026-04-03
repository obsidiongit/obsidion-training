import Link from "next/link";

export default async function PerformancePage({
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
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Performance Expectations</h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          KPIs, ramp schedule, quota expectations, and activity benchmarks.
        </p>
        <div className="rounded-2xl border border-dashed border-border bg-muted/10 p-8 text-center">
          <p className="text-muted-foreground">Content coming soon — see <code className="text-xs bg-muted px-1.5 py-0.5 rounded">content/roles/account-executive/performance.md</code> for the outline.</p>
        </div>
      </div>
    </div>
  );
}

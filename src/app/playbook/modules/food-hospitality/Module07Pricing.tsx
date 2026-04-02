import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";

export default function Module07Pricing() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 08 — Sales
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Pricing Structure</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Same tier architecture as our other verticals—tuned for how you talk about covers,
          catering contracts, and repeat visits. Own these numbers. Confidence sells.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">One-time setup fees</h2>
        <p className="text-muted-foreground mb-6">
          Paid at kickoff. Covers design, development, integrations, and launch.
        </p>
        <CardGrid cols={2}>
          <Card>
            <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Setup fee</div>
            <h3 className="text-2xl font-black mb-1">Website buildout</h3>
            <div className="text-3xl font-black text-foreground mb-4">$5K–$8K</div>
            <p className="text-muted-foreground text-sm border-b pb-4 mb-4">
              Single location, truck flagship site, or standalone bar/restaurant
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>→ Custom design (no template dump)</li>
              <li>→ Menu, events, catering, and booking flows</li>
              <li>→ Reservation / POS handoffs as scoped</li>
              <li>→ CRM &amp; analytics wiring</li>
              <li>→ SEO-ready structure</li>
              <li>→ ~7-day deployment average</li>
            </ul>
          </Card>
          <Card>
            <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Setup fee</div>
            <h3 className="text-2xl font-black mb-1">Multi-location / group</h3>
            <div className="text-3xl font-black text-foreground mb-4">$8K–$12K</div>
            <p className="text-muted-foreground text-sm border-b pb-4 mb-4">2+ concepts or locations</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>→ Everything in single-location</li>
              <li>→ Location architecture and shared components</li>
              <li>→ Per-venue SEO templates</li>
              <li>→ Priority build queue</li>
            </ul>
          </Card>
        </CardGrid>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Monthly retainer packages</h2>
        <p className="text-muted-foreground mb-6">
          Ongoing growth and operations from launch. Match tier to volume and ambition.
        </p>
        <CardGrid cols={3}>
          <Card>
            <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Essentials</div>
            <h3 className="text-xl font-bold mb-1">Maintenance</h3>
            <div className="text-2xl font-black text-foreground mb-4">
              $597<span className="text-base font-normal text-muted-foreground">/mo</span>
            </div>
            <p className="text-muted-foreground text-xs border-b pb-4 mb-4">Baseline independent</p>
            <ul className="space-y-2 text-xs text-muted-foreground mt-4">
              <li>→ Hosting &amp; uptime</li>
              <li>→ Security updates</li>
              <li>→ Core local SEO (GBP)</li>
              <li>→ Automated review requests</li>
              <li>→ Monthly analytics snapshot</li>
            </ul>
          </Card>
          <Card variant="green">
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
              Growth — most popular
            </div>
            <h3 className="text-xl font-bold mb-1">SEO + remarketing</h3>
            <div className="text-2xl font-black text-foreground mb-4">
              $997<span className="text-base font-normal text-muted-foreground">/mo</span>
            </div>
            <p className="text-muted-foreground text-xs border-b border-emerald-900/10 pb-4 mb-4">
              Active operators filling seats
            </p>
            <ul className="space-y-2 text-xs text-muted-foreground mt-4">
              <li>→ Everything in Essentials</li>
              <li>→ Full local SEO execution</li>
              <li>→ SMS &amp; email automations</li>
              <li>→ Loyalty / win-back programs</li>
              <li>→ Reputation management</li>
            </ul>
          </Card>
          <Card>
            <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Premium</div>
            <h3 className="text-xl font-bold mb-1">Full-service</h3>
            <div className="text-2xl font-black text-foreground mb-4">
              $1,497<span className="text-base font-normal text-muted-foreground">/mo</span>
            </div>
            <p className="text-muted-foreground text-xs border-b pb-4 mb-4">Groups &amp; aggressive growth</p>
            <ul className="space-y-2 text-xs text-muted-foreground mt-4">
              <li>→ Everything in Growth</li>
              <li>→ Multi-location SEO management</li>
              <li>→ Advanced reporting</li>
              <li>→ Priority account rhythm</li>
              <li>→ Quarterly planning sessions</li>
              <li>→ Content support as scoped</li>
            </ul>
          </Card>
        </CardGrid>
      </div>

      <div className="mt-8 border p-6 rounded-xl bg-card">
        <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
          One-time premium add-on
        </div>
        <div className="flex justify-between items-end border-b pb-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold">Branded mobile app</h3>
            <p className="text-muted-foreground text-sm">Groups, trucks with cult followings, loyalty-heavy brands</p>
          </div>
          <div className="text-3xl font-black text-foreground">$15K–$25K</div>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mt-4">
          <li>→ iOS + Android</li>
          <li>→ Push, loyalty, and compliant deep links</li>
          <li>→ Shared backend with web</li>
          <li>→ Submission support as scoped</li>
        </ul>
      </div>

      <HighlightBox variant="warning" title="Pricing context">
        Standalone SEO shops often charge $1K–$2.5K/mo for SEO alone—without site stewardship,
        automations, or review systems. Growth at $997 is the full operating layer. Compare apples
        to apples: not “a website,” but revenue infrastructure.
      </HighlightBox>

      <NavButtons currentModuleId={8} />
    </div>
  );
}

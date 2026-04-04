import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";

export default function ContractorsModule06Pricing() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 07 — Sales
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Pricing Structure</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Know these numbers. Confidence in pricing dictates confidence in the product. We do not
          apologize for our rates.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">One-Time Setup Fees</h2>
        <p className="text-muted-foreground mb-6">
          Paid once at kickoff. Covers full design, development, and launch.
        </p>
        <CardGrid cols={2}>
          <Card id="pricing-setup-single">
            <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
              Setup Fee
            </div>
            <h3 className="text-2xl font-black mb-1">Website Buildout</h3>
            <div className="text-3xl font-black text-foreground mb-4">$5K–$8K</div>
            <p className="text-muted-foreground text-sm border-b pb-4 mb-4">
              Single territory deployment
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>→ Custom design (no templates)</li>
              <li>→ Service area page architecture</li>
              <li>→ Before/after project gallery</li>
              <li>→ Estimate request &amp; lead capture</li>
              <li>→ Trust signals (licensing, insurance, certs)</li>
              <li>→ CRM &amp; analytics connection</li>
              <li>→ SEO-ready architecture</li>
              <li>→ 7-day deployment average</li>
            </ul>
          </Card>
          <Card id="pricing-setup-multi">
            <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
              Setup Fee
            </div>
            <h3 className="text-2xl font-black mb-1">Multi-Location / Multi-Trade</h3>
            <div className="text-3xl font-black text-foreground mb-4">$8K–$12K</div>
            <p className="text-muted-foreground text-sm border-b pb-4 mb-4">
              2+ territories or service lines
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>→ Everything in single-territory</li>
              <li>→ Multi-location site architecture</li>
              <li>→ Unified backend across territories</li>
              <li>→ Per-location SEO configuration</li>
              <li>→ Priority build queue</li>
            </ul>
          </Card>
        </CardGrid>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Monthly Retainer Packages</h2>
        <p className="text-muted-foreground mb-6">
          Ongoing service activating upon launch. Select the tier matching client constraints;
          upgrades remain available as they grow.
        </p>
        <CardGrid cols={3}>
          <Card id="pricing-retainer-essentials">
            <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
              Essentials
            </div>
            <h3 className="text-xl font-bold mb-1">Maintenance</h3>
            <div className="text-2xl font-black text-foreground mb-4">
              $597<span className="text-base font-normal text-muted-foreground">/mo</span>
            </div>
            <p className="text-muted-foreground text-xs border-b pb-4 mb-4">
              Single-territory baseline
            </p>
            <ul className="space-y-2 text-xs text-muted-foreground mt-4">
              <li>→ Website hosting &amp; uptime</li>
              <li>→ Security updates</li>
              <li>→ Basic local SEO (GBP)</li>
              <li>→ Automated review requests</li>
              <li>→ Monthly analytics</li>
            </ul>
          </Card>
          <Card variant="green" id="pricing-retainer-growth">
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
              Growth — Most Popular
            </div>
            <h3 className="text-xl font-bold mb-1">SEO + Remarketing</h3>
            <div className="text-2xl font-black text-foreground mb-4">
              $997<span className="text-base font-normal text-muted-foreground">/mo</span>
            </div>
            <p className="text-muted-foreground text-xs border-b border-emerald-900/10 pb-4 mb-4">
              Active operational growth
            </p>
            <ul className="space-y-2 text-xs text-muted-foreground mt-4">
              <li>→ Everything in Essentials</li>
              <li>→ Full local SEO execution</li>
              <li>→ SMS &amp; email remarketing</li>
              <li>→ Referral request automation</li>
              <li>→ Estimate follow-up sequences</li>
              <li>→ Full reputation management</li>
            </ul>
          </Card>
          <Card id="pricing-retainer-premium">
            <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
              Premium
            </div>
            <h3 className="text-xl font-bold mb-1">Full-Service</h3>
            <div className="text-2xl font-black text-foreground mb-4">
              $1,497<span className="text-base font-normal text-muted-foreground">/mo</span>
            </div>
            <p className="text-muted-foreground text-xs border-b pb-4 mb-4">
              Multi-territory &amp; aggressive growth
            </p>
            <ul className="space-y-2 text-xs text-muted-foreground mt-4">
              <li>→ Everything in Growth</li>
              <li>→ Multi-territory SEO management</li>
              <li>→ Advanced campaign analytics</li>
              <li>→ Priority account management</li>
              <li>→ Quarterly strategy sessions</li>
              <li>→ Content creation support</li>
            </ul>
          </Card>
        </CardGrid>
      </div>

      <div
        id="pricing-mobile-app"
        className="mt-8 border p-6 rounded-xl bg-card scroll-mt-24"
      >
        <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
          One-Time Premium Add-On
        </div>
        <div className="flex justify-between items-end border-b pb-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold">Branded Mobile App</h3>
            <p className="text-muted-foreground text-sm">
              Multi-territory / high-volume recurring services standard play
            </p>
          </div>
          <div className="text-3xl font-black text-foreground">$15K–$25K</div>
        </div>
        <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mt-4">
          <li>→ iOS + Android branded deployment</li>
          <li>→ App Store compliant structure</li>
          <li>→ Push notifications &amp; geo-targeting</li>
          <li>→ Referral &amp; loyalty system</li>
          <li>→ Job status &amp; booking hub</li>
          <li>→ Shared operational backend</li>
        </ul>
      </div>

      <HighlightBox variant="warning" title="Pricing Context">
        Competing local SEO agencies charge $1,000–$2,500/month for SEO alone—excluding website
        management, remarketing tools, and automation. Our Growth package ($997) delivers the
        entire stack. Frame the discussion: &ldquo;Hire an SEO agency for the same capital and receive a
        fraction of the utility, or deploy an entire digital operation through us.&rdquo; The fiscal value
        is undeniable.
      </HighlightBox>

      <NavButtons currentModuleId={6} />
    </div>
  );
}

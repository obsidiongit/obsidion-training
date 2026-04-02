import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StatBox, StatRow } from "@/components/ui/StatBox";
import { PullQuote } from "@/components/ui/PullQuote";

export default function Module04SEO() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 05 — Products
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Local SEO</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Google Business Profile and local search are how guests find salons and med spas when they
          are ready to book—not just scrolling. Most competitors leave that money on the table.
        </p>
      </div>

      <PullQuote author="Strategic Focus">
        &ldquo;When someone searches &lsquo;hydrafacial near me&rsquo; or &lsquo;hair salon
        [city],&rsquo; the top results get the appointment. We build the site + GBP stack to earn
        those clicks.&rdquo;
      </PullQuote>

      <StatRow>
        <StatBox
          value="High"
          label="Intent on local service queries"
          sublabel="Near-me and city + service drive bookings"
        />
        <StatBox
          value="3–4x"
          label="Lift potential"
          sublabel="Strong site + GBP + reviews vs. baseline"
        />
        <StatBox value="Top 3" label="Local pack target" variant="accent" />
      </StatRow>

      <div>
        <CardGrid cols={2}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Google Business Profile</h3>
            <p className="text-muted-foreground text-sm">
              Optimize categories, services, photos, posts, Q&amp;A, and attributes. Keep hours and
              booking links accurate so Google trusts the listing.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">On-Page &amp; Technical SEO</h3>
            <p className="text-muted-foreground text-sm">
              Service pages for cuts, color, extensions, facials, injectables, body treatments, and
              location pages for multi-site brands—with schema and fast Core Web Vitals.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Booking Funnel Alignment</h3>
            <p className="text-muted-foreground text-sm">
              Landing pages match search intent and route to booking without extra clicks. Fewer
              leaks between search → trust → appointment.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Calls &amp; Direction Requests</h3>
            <p className="text-muted-foreground text-sm">
              Strong local signals and review velocity increase map pack visibility and tap-to-call
              volume—especially important for same-day decisions.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Review Generation</h3>
            <p className="text-muted-foreground text-sm">
              Automated post-visit requests build review count and recency—both ranking factors and
              conversion drivers for med spa trust.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Reputation Monitoring</h3>
            <p className="text-muted-foreground text-sm">
              Track Google and key platforms; respond fast. For med spa, balance confidence with
              compliant language—no guaranteed outcomes in public replies.
            </p>
          </Card>
        </CardGrid>
      </div>

      <HighlightBox variant="info" title="Med spa note">
        Paid and organic policies for aesthetic claims vary by platform and region. Lead with
        conservative, policy-safe positioning on landing pages; never promise specific medical
        outcomes in ad-like copy without appropriate oversight.
      </HighlightBox>

      <NavButtons currentModuleId={5} />
    </div>
  );
}

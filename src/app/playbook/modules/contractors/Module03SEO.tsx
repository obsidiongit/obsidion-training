import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StatBox, StatRow } from "@/components/ui/StatBox";
import { PullQuote } from "@/components/ui/PullQuote";

export default function ContractorsModule03SEO() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 04 — Products
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Local SEO</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Google Search and Maps are where homeowners decide who gets the call. This is the largest
          scalable acquisition channel for contractors—yet most operators under-invest in it or get
          sold bad SEO and walk away thinking it does not work.
        </p>
      </div>

      <PullQuote author="Strategic Focus">
        &ldquo;When someone searches &apos;plumber near me&apos; or &apos;roof repair [city]&apos; after a storm, the top
        results get the call, the estimate, and the job. We position our clients in that path.&rdquo;
      </PullQuote>

      <StatRow>
        <StatBox value="300%+" label="Typical lift in inbound calls" sublabel="When local stack is fixed" />
        <StatBox value="3–4x" label="Growth in booked jobs" sublabel="Via SEO + site + follow-up" />
        <StatBox value="#1" label="Local pack ranking goal" sublabel="Top 3 capture the majority of clicks" variant="accent" />
      </StatRow>

      <div>
        <CardGrid cols={2}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Google Business Profile</h3>
            <p className="text-muted-foreground text-sm">
              We build, optimize, and actively manage the GBP—categories, services, photos, posts,
              service areas, and Q&amp;A tuned to how homeowners search for trade work.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Service Area Pages</h3>
            <p className="text-muted-foreground text-sm">
              Dedicated pages for every city and neighborhood they serve. Contractors often work
              across 10–30 mile radii—the site needs to rank everywhere they go.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Emergency &amp; Intent Keywords</h3>
            <p className="text-muted-foreground text-sm">
              High-value terms like &ldquo;emergency HVAC repair,&rdquo; &ldquo;water damage plumber [city],&rdquo; and
              &ldquo;roof replacement estimate&rdquo; are optimized with urgency-focused content and page structure.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Citation &amp; NAP Consistency</h3>
            <p className="text-muted-foreground text-sm">
              Clean, consistent business data across all directories strengthens map pack rankings
              and removes confusion for homeowners finding them in multiple places.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Review Generation</h3>
            <p className="text-muted-foreground text-sm">
              Automated SMS requests after job completion—more reviews, stronger map presence,
              higher trust with homeowners who read reviews before calling anyone.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Seasonal SEO Execution</h3>
            <p className="text-muted-foreground text-sm">
              HVAC in summer and winter, roofing after storm seasons, landscaping in spring—we
              optimize content to match the seasonal search spikes that drive contractor revenue.
            </p>
          </Card>
        </CardGrid>
      </div>

      <HighlightBox variant="info" title="The Revenue Math">
        A contractor doing solid monthly job volume that gains visibility in the local pack and
        converts even a few more leads per week compounds into major annual revenue. The retainer
        returns its cost quickly when tied to booked jobs and project value—not vanity rankings.
      </HighlightBox>

      <NavButtons currentModuleId={3} />
    </div>
  );
}

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
          Module 04 — Products
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Local SEO</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          For restaurants, bars, trucks, and caterers, local search and maps are revenue. Most
          competitors neglect structured data, photos, posts, and review velocity. We treat GBP and
          on-site SEO as active channels—not a one-time checkbox.
        </p>
      </div>

      <PullQuote author="Strategic focus">
        "When someone types 'brunch near me' or 'corporate catering [city],' the top results win
        the inquiry. We build authority for those moments."
      </PullQuote>

      <StatRow>
        <StatBox value="Maps" label="Primary discovery" sublabel="GBP + mobile search" />
        <StatBox value="Reviews" label="Social proof at scale" sublabel="Volume + recency matter" />
        <StatBox value="Multi-unit" label="Location pages" sublabel="Each site ranks for its trade area" variant="accent" />
      </StatRow>

      <div>
        <CardGrid cols={2}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Google Business Profile</h3>
            <p className="text-muted-foreground text-sm">
              Accurate hours, menu links, attributes, photos, posts, and Q&amp;A—managed like a
              campaign, not a forgotten listing.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">On-page &amp; technical SEO</h3>
            <p className="text-muted-foreground text-sm">
              Schema for restaurants, location and service-area pages for catering, clean URLs, and
              speed optimizations.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Cuisine &amp; occasion keywords</h3>
            <p className="text-muted-foreground text-sm">
              Target high-intent queries: happy hour, private dining, wedding catering, food truck
              booking, tasting menus—aligned to what they actually sell.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Call &amp; direction tracking</h3>
            <p className="text-muted-foreground text-sm">
              Tie SEO effort to calls, bookings, and form fills so owners see the line between
              rankings and covers.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Review generation</h3>
            <p className="text-muted-foreground text-sm">
              Automated SMS/email prompts after visits—ethical, opt-in, and tuned to their cadence.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Reputation monitoring</h3>
            <p className="text-muted-foreground text-sm">
              Google, Yelp, TripAdvisor where relevant—responses and escalation paths so nothing
              festers unanswered.
            </p>
          </Card>
        </CardGrid>
      </div>

      <HighlightBox variant="info" title="Revenue framing">
        A few extra tables per week or one more corporate lunch contract pays for the retainer many
        times over. Local SEO is not “marketing fluff”—it is table stakes for independent operators.
      </HighlightBox>

      <NavButtons currentModuleId={4} />
    </div>
  );
}

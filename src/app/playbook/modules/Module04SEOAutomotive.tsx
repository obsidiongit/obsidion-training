import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StatBox, StatRow } from "@/components/ui/StatBox";
import { PullQuote } from "@/components/ui/PullQuote";

export default function Module04SEOAutomotive() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 04 — Products</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Local SEO</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Google Search and Maps are where drivers decide. This is the largest scalable acquisition
          channel for shops—yet most operators under-invest in it.
        </p>
      </div>

      <PullQuote author="Strategic Focus">
        "When someone searches 'tire shop near me' or 'collision repair [city],' the top results get
        the tow, the key, and the card. We position our clients in that path."
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
              attributes, and Q&amp;A for automotive search behavior.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">On-Page &amp; Technical SEO</h3>
            <p className="text-muted-foreground text-sm">
              Keywords, schema, speed, and service pages for high-intent terms—alignments, ADAS,
              PDR, ceramic coating, fleet, and more.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Citation &amp; NAP Consistency</h3>
            <p className="text-muted-foreground text-sm">
              Clean data across directories supports maps rankings and removes customer confusion for
              multi-location groups.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Call Volume Growth</h3>
            <p className="text-muted-foreground text-sm">
              Local SEO plus conversion-focused pages drives inbound calls—often dramatic lifts within
              the first 60–90 days when execution is real.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Review Generation</h3>
            <p className="text-muted-foreground text-sm">
              Automated SMS requests after visits—more reviews, stronger map pack, higher conversion
              on the same traffic.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Reputation Management</h3>
            <p className="text-muted-foreground text-sm">
              Monitoring and response workflows so owners are not blindsided on the same reviews
              prospects read before calling.
            </p>
          </Card>
        </CardGrid>
      </div>

      <HighlightBox variant="info" title="The Revenue Math">
        A shop doing solid monthly RO volume that gains visibility in the local pack and converts
        even a few more jobs per week compounds into major annual revenue. The retainer returns its
        cost quickly when tied to bays and tickets—not vanity rankings.
      </HighlightBox>

      <NavButtons currentModuleId={4} />
    </div>
  );
}

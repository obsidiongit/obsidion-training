import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StatBox, StatRow } from "@/components/ui/StatBox";

export default function Module02MarketOpp() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 03 — Foundation
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          The Market Opportunity
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Personal care and med spa services are a massive, fragmented market. Most locations
          under-invest in digital infrastructure while competing fiercely on Instagram and
          word-of-mouth alone. That gap is your sales target.
        </p>
      </div>

      <StatRow>
        <StatBox value="1M+" label="Salon & spa establishments in the U.S." />
        <StatBox
          value="Fragmented"
          label="Digital maturity"
          sublabel="Few run a unified site + SEO + retention stack"
        />
        <StatBox
          value="$60B+"
          label="U.S. hair & nail services segment (IBISWorld-scale)"
          variant="accent"
        />
      </StatRow>

      <div>
        <CardGrid cols={2}>
          <Card variant="amber">
            <h3 className="text-lg font-bold text-destructive mb-4">What exists today</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>→ Booking software “free” sites that all look the same</li>
              <li>→ Agencies that ignore scheduling, reviews, and rebooking</li>
              <li>→ Pretty designs with no local SEO or automation</li>
              <li>→ Slow rebuilds when the owner finally commits</li>
              <li>→ High retainers for partial solutions</li>
            </ul>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold text-accent mb-4">What Obsidion brings</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>→ Professional-grade technical stack</li>
              <li>→ Playbooks built for service businesses, not random verticals</li>
              <li>→ Reliable 7-day deployment</li>
              <li>→ Automated systems that fill chairs and bring clients back</li>
              <li>→ Transparent pricing models</li>
            </ul>
          </Card>
        </CardGrid>
      </div>

      <HighlightBox variant="info" title="The Core Pain Point">
        Owners live in chaos: last-minute cancellations, staff turnover, retail goals, and
        marketing that starts and stops. They need one competent partner for the digital layer—not
        another vendor selling “posts per month.”
      </HighlightBox>

      <NavButtons currentModuleId={3} />
    </div>
  );
}

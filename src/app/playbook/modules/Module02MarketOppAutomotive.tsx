import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StatBox, StatRow } from "@/components/ui/StatBox";

export default function Module02MarketOppAutomotive() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 03 — Foundation</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">The Market Opportunity</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Automotive service is a massive, fragmented, hyper-local market with a severe lack of
          professional digital infrastructure. That gap is your sales target.
        </p>
      </div>

      <StatRow>
        <StatBox value="70%+" label="Of drivers use search and maps before calling" />
        <StatBox value="~0%" label="Shops with a unified site + SEO + automation stack" />
        <StatBox value="Repeat" label="Highest-ROI revenue is already in their database" variant="accent" />
      </StatRow>

      <div>
        <CardGrid cols={2}>
          <Card variant="amber">
            <h3 className="text-lg font-bold text-destructive mb-4">What exists today</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>→ Slow sites that break on phones</li>
              <li>→ Wrong hours, wrong services, thin proof</li>
              <li>→ SEO sold as reports nobody acts on</li>
              <li>→ No follow-up on leads or past customers</li>
              <li>→ Competitors winning the map pack on reviews alone</li>
            </ul>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold text-accent mb-4">What Obsidion brings</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>→ Professional-grade technical stack</li>
              <li>→ Operators who speak shop, not buzzwords</li>
              <li>→ Reliable ~7-day deployment</li>
              <li>→ Automated systems that drive repeat ROs</li>
              <li>→ Transparent pricing models</li>
            </ul>
          </Card>
        </CardGrid>
      </div>

      <HighlightBox variant="info" title="The Core Pain Point">
        Shop owners are practical operators forced to work with whoever shows up. Most lack a single
        partner who owns the website, local pack, reviews, and list-based follow-up. Repair lives on
        reminders and “near me” intent; collision on trust and proof; detail on portfolio and premium
        positioning; tire on seasonality and clarity on mobile. You deliver the one accountable
        system that covers all of it.
      </HighlightBox>

      <NavButtons currentModuleId={3} />
    </div>
  );
}

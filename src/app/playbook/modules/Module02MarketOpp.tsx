import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StatBox, StatRow } from "@/components/ui/StatBox";

export default function Module02MarketOpp() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 03 — Foundation</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">The Market Opportunity</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Cannabis is a multi-billion dollar industry with a severe lack of professional infrastructure. That gap is your sales target.
        </p>
      </div>

      <StatRow>
        <StatBox value="35+" label="States with legal cannabis markets" />
        <StatBox value="~0%" label="Penetration of quality digital agencies" />
        <StatBox value="$100B+" label="Projected U.S. cannabis market by 2030" variant="accent" />
      </StatRow>

      <div>
        <CardGrid cols={2}>
          <Card variant="amber">
            <h3 className="text-lg font-bold text-destructive mb-4">What exists today</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>→ Freelancers with no strategy</li>
              <li>→ Generic agencies scared of compliance</li>
              <li>→ Agencies with no actual technology</li>
              <li>→ Weeks-long turnarounds for basic tasks</li>
              <li>→ High costs for low returns</li>
            </ul>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold text-accent mb-4">What Obsidion brings</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>→ Professional-grade technical stack</li>
              <li>→ Operators who ran cannabis businesses</li>
              <li>→ Reliable 7-day deployment</li>
              <li>→ Automated systems that drive repeat revenue</li>
              <li>→ Transparent pricing models</li>
            </ul>
          </Card>
        </CardGrid>
      </div>

      <HighlightBox variant="info" title="The Core Pain Point">
        Dispensary owners are practical operators forced to work with whoever accepts their money. The corporate world avoids the space. You provide them with the competent business infrastructure they require but cannot currently find. 
      </HighlightBox>

      <NavButtons currentModuleId={3} />
    </div>
  );
}

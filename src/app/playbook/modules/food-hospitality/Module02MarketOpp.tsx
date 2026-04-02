import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StatBox, StatRow } from "@/components/ui/StatBox";

export default function Module02MarketOpp() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 02 — Foundation
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
          The Market Opportunity
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Restaurants, bars, caterers, and food trucks compete on thin margins and constant
          distraction. Most still under-invest in the digital layer that fills seats and drives
          catering revenue. That gap is the opportunity.
        </p>
      </div>

      <StatRow>
        <StatBox value="Huge" label="U.S. food service spend" sublabel="Billions annually across dining out" />
        <StatBox value="Mobile-first" label="Guest discovery" sublabel="Maps, search, and social on the phone" />
        <StatBox
          value="Repeat"
          label="Profit lives in regulars"
          sublabel="Owned SMS/email beats cold ads for most independents"
          variant="accent"
        />
      </StatRow>

      <div>
        <CardGrid cols={2}>
          <Card variant="amber">
            <h3 className="text-lg font-bold text-destructive mb-4">What they tolerate today</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>→ PDF menus and broken mobile layouts</li>
              <li>→ Wrong hours on Google and unanswered DMs</li>
              <li>→ No follow-up after catering inquiries</li>
              <li>→ Agencies that vanish after launch</li>
              <li>→ Paying for ads with no system underneath</li>
            </ul>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold text-accent mb-4">What Obsidion delivers</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>→ Fast, conversion-focused sites</li>
              <li>→ Local SEO and reputation that drive calls and bookings</li>
              <li>→ Automations that fill slow nights and recover lapsed guests</li>
              <li>→ Clear pricing and a single accountable partner</li>
              <li>→ Optional app for brands that need home-screen presence</li>
            </ul>
          </Card>
        </CardGrid>
      </div>

      <HighlightBox variant="info" title="Core pain point">
        Owners and GMs are operators first. They need someone who speaks reservations, covers,
        catering deposits, and health of the Google Business Profile—not abstract “brand
        strategy.” You sell systems that protect and grow revenue while they run the house.
      </HighlightBox>

      <NavButtons currentModuleId={2} />
    </div>
  );
}

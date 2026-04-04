import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StatBox, StatRow } from "@/components/ui/StatBox";

export default function ContractorsModule01MarketOpp() {
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
          Home services is a massive, fragmented, hyper-local industry with a severe lack of
          professional digital infrastructure. Contractors are too busy running crews to fix
          their digital presence. That gap is your sales target.
        </p>
      </div>

      <StatRow>
        <StatBox value="$600B+" label="U.S. home services market annually" />
        <StatBox value="90%+" label="Homeowners search online before hiring" />
        <StatBox
          value="Referrals"
          label="Most contractors' only growth channel"
          variant="accent"
        />
      </StatRow>

      <div>
        <CardGrid cols={2}>
          <Card variant="amber">
            <h3 className="text-lg font-bold text-destructive mb-4">What exists today</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>→ Outdated sites that break on mobile</li>
              <li>→ No service area pages or local SEO</li>
              <li>→ Zero automated follow-up on estimates or past jobs</li>
              <li>→ Reviews left to chance—no system to collect them</li>
              <li>→ Competitors winning on Google Maps through reviews alone</li>
            </ul>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold text-accent mb-4">What Obsidion brings</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>→ Professional-grade digital infrastructure</li>
              <li>→ Operators who speak trades, not buzzwords</li>
              <li>→ Reliable ~7-day deployment</li>
              <li>→ Automated systems that drive repeat work and referrals</li>
              <li>→ Transparent pricing models</li>
            </ul>
          </Card>
        </CardGrid>
      </div>

      <HighlightBox variant="info" title="The Core Pain Point">
        Contractors are practical operators who built their businesses on trust and word-of-mouth.
        They are excellent at the trade and terrible at digital marketing—not by choice but by
        bandwidth. Most lack a single partner who owns the website, local search, reviews, and
        customer follow-up. Emergency plumbing runs on &ldquo;near me&rdquo; intent; roofing on
        storm urgency; HVAC on seasonality; renovation on portfolio and proof. You deliver the one
        accountable system that covers all of it.
      </HighlightBox>

      <div>
        <h2 className="text-2xl font-bold mb-4">Who You Are Selling To</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "General Contractors",
            "Roofers",
            "Plumbers",
            "HVAC Technicians",
            "Electricians",
            "Landscapers",
            "Painters",
            "Pest Control",
            "Garage Door & Fence",
          ].map((trade) => (
            <div
              key={trade}
              className="px-4 py-3 rounded-lg border bg-card text-sm font-medium text-center"
            >
              {trade}
            </div>
          ))}
        </div>
      </div>

      <NavButtons currentModuleId={1} />
    </div>
  );
}

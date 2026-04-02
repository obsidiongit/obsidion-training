import { CheatTable } from "@/components/ui/CheatTable";
import { NavButtons } from "@/components/ui/NavButtons";
import { HighlightBox } from "@/components/ui/HighlightBox";

export default function Module10QuickRef() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-5xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 14 — Reference
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Quick Reference</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Scan this before calls with owners, lead stylists, and med spa directors.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Pricing at a glance</h2>
        <CheatTable
          headers={["Product", "Price", "Best for"]}
          rows={[
            [
              <span className="font-semibold text-foreground">Website (single)</span>,
              "$5,000 – $8,000",
              "One salon, spa, or med spa location",
            ],
            [
              <span className="font-semibold text-foreground">Website (multi)</span>,
              "$8,000 – $12,000",
              "Studios with 2+ locations or distinct brands",
            ],
            [
              <span className="font-semibold text-foreground">Essentials retainer</span>,
              "$597 / mo",
              "Hosting, GBP, reviews, baseline SEO",
            ],
            [
              <span className="font-semibold text-foreground">Growth retainer</span>,
              "$997 / mo",
              "SEO + SMS/email + win-back / fill gaps",
            ],
            [
              <span className="font-semibold text-foreground">Premium retainer</span>,
              "$1,497 / mo",
              "Multi-location, aggressive growth, priority rhythm",
            ],
            [
              <span className="font-semibold opacity-70">Mobile app</span>,
              "$15,000 – $25,000",
              "Groups, loyalty-heavy brands, multi-studio scale",
            ],
          ]}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Key differentiators</h2>
        <CheatTable
          headers={["They say...", "You answer..."]}
          rows={[
            ["How fast?", "About 7 days to launch—not 7 weeks of runway."],
            [
              "Do you get beauty / med spa?",
              "We build for booking, providers, treatments, and compliance-aware structure—not generic brochures.",
            ],
            [
              "We only use Instagram.",
              "Great—plus we own search, maps, and your list so you are not one algorithm change from empty chairs.",
            ],
            ["One vendor?", "One stack: site, SEO, remarketing, optional app. One accountable team."],
            [
              "Is the app allowed?",
              "We scope loyalty, booking, and deep-link patterns to their concept and counsel—same discipline as premium hospitality apps.",
            ],
          ]}
        />
      </div>

      <HighlightBox variant="warning" title="Primary directive">
        Beauty and med spa operators are tired of flaky creatives and SEO hacks. You represent a
        professional operating system: fast delivery, local demand, and repeat visits. Sound like
        you have done this a hundred times—because we have.
      </HighlightBox>

      <NavButtons currentModuleId={14} />
    </div>
  );
}

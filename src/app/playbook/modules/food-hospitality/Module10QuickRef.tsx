import { CheatTable } from "@/components/ui/CheatTable";
import { NavButtons } from "@/components/ui/NavButtons";
import { HighlightBox } from "@/components/ui/HighlightBox";

export default function Module10QuickRef() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-5xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 10 — Reference
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Quick Reference</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Scan this before calls with owners, GMs, chefs, and catering leads.
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
              "One bar, restaurant, flagship truck, or caterer HQ",
            ],
            [
              <span className="font-semibold text-foreground">Website (group)</span>,
              "$8,000 – $12,000",
              "Multi-location, hospitality groups, multi-concept",
            ],
            [
              <span className="font-semibold text-foreground">Essentials retainer</span>,
              "$597 / mo",
              "Hosting, GBP, reviews, baseline SEO",
            ],
            [
              <span className="font-semibold text-foreground">Growth retainer</span>,
              "$997 / mo",
              "SEO + SMS/email + loyalty / win-back",
            ],
            [
              <span className="font-semibold text-foreground">Premium retainer</span>,
              "$1,497 / mo",
              "Multi-unit, aggressive growth, priority rhythm",
            ],
            [
              <span className="font-semibold opacity-70">Mobile app</span>,
              "$15,000 – $25,000",
              "Groups, loyalty-heavy brands, trucks with fan bases",
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
              "Do you get hospitality?",
              "We build for reservations, catering, trucks, and multi-location—not generic brochures.",
            ],
            [
              "We only use Instagram.",
              "Great channel—plus we own search, maps, and your list so you are not one algorithm change from empty seats.",
            ],
            ["One vendor?", "One stack: site, SEO, remarketing, optional app. One accountable team."],
            ["Is the app allowed?", "We build to compliant loyalty, booking, and deep-link patterns—scoped to their concept and counsel."],
          ]}
        />
      </div>

      <HighlightBox variant="warning" title="Primary directive">
        Hospitality operators are exhausted by flaky creatives and SEO hacks. You represent a
        professional operating system: fast delivery, local demand, and repeat revenue. Sound like
        you have done this a hundred times—because we have.
      </HighlightBox>

      <NavButtons currentModuleId={10} />
    </div>
  );
}

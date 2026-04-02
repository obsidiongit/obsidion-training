import { CheatTable } from "@/components/ui/CheatTable";
import { NavButtons } from "@/components/ui/NavButtons";
import { HighlightBox } from "@/components/ui/HighlightBox";

export default function Module10QuickRefAutomotive() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-5xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 14 — Reference</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Quick Reference</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Access this data prior to any conversation.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Pricing at a Glance</h2>
        <CheatTable
          headers={["Product", "Price", "Best For"]}
          rows={[
            [
              <span className="font-semibold text-foreground">Website (Single)</span>,
              "$5,000 – $8,000",
              "Single-store repair, detail, collision, or tire shops",
            ],
            [
              <span className="font-semibold text-foreground">Website (Multi)</span>,
              "$8,000 – $12,000",
              "Chains, multi-bay groups, multi-brand operators",
            ],
            [
              <span className="font-semibold text-foreground">Essentials Retainer</span>,
              "$597 / mo",
              "Smaller shops — hosting, GBP, reviews",
            ],
            [
              <span className="font-semibold text-foreground">Growth Retainer</span>,
              "$997 / mo",
              "Active shops — SEO + remarketing",
            ],
            [
              <span className="font-semibold text-foreground">Premium Retainer</span>,
              "$1,497 / mo",
              "Multi-location — full-service",
            ],
            [
              <span className="font-semibold opacity-70">Mobile App</span>,
              "$15,000 – $25,000",
              "Tire groups, detail chains, high-volume multi-location",
            ],
          ]}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Key Differentiators</h2>
        <CheatTable
          headers={["They state...", "You answer..."]}
          rows={[
            ["How fast?", "7 days average. Not 7 weeks."],
            [
              "Do you know automotive?",
              "We build for bays—services, proof, seasonality, and how drivers pick a shop.",
            ],
            [
              "We rely on drive-bys.",
              "Great—plus search, maps, and your list so slow weeks and new competition do not empty bays.",
            ],
            [
              "One vendor for everything?",
              "Yes. One login. One team. No finger-pointing.",
            ],
            [
              "Is the app a fit for us?",
              "We scope loyalty, booking, and push for multi-location and high-database operators—same disciplined rollout we use everywhere.",
            ],
          ]}
        />
      </div>

      <HighlightBox variant="warning" title="Primary Directive">
        Automotive operations are managed by serious owners forced to tolerate amateur vendors. You
        supply them with a professional infrastructure team that understands the trade. Project
        absolute confidence in this reality.
      </HighlightBox>

      <NavButtons currentModuleId={14} />
    </div>
  );
}

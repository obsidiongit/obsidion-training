import { CheatTable } from "@/components/ui/CheatTable";
import { NavButtons } from "@/components/ui/NavButtons";
import { HighlightBox } from "@/components/ui/HighlightBox";

export default function Module10QuickRef() {
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
              "Single-store dispensaries, ancillary brands"
            ],
            [
              <span className="font-semibold text-foreground">Website (MSO)</span>,
              "$8,000 – $12,000",
              "Chains, multi-state operators"
            ],
            [
              <span className="font-semibold text-foreground">Essentials Retainer</span>,
              "$597 / mo",
              "Smaller shops — hosting, GBP, reviews"
            ],
            [
              <span className="font-semibold text-foreground">Growth Retainer</span>,
              "$997 / mo",
              "Active dispensaries — SEO + remarketing"
            ],
            [
              <span className="font-semibold text-foreground">Premium Retainer</span>,
              "$1,497 / mo",
              "MSOs & multi-location — full-service"
            ],
            [
              <span className="font-semibold opacity-70">Mobile App</span>,
              "$15,000 – $25,000",
              "MSOs, high-volume multi-location groups"
            ]
          ]}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Key Differentiators</h2>
        <CheatTable
          headers={["They state...", "You answer..."]}
          rows={[
            [
              "How fast?",
              "7 days average. Not 7 weeks."
            ],
            [
              "Do you know cannabis?",
              "We operated in it. We possess operational background, not just research."
            ],
            [
              "Can we run ads?",
              "We execute what is strictly compliant. SEO + remarketing is the required system."
            ],
            [
              "One vendor for everything?",
              "Yes. One login. One team. No finger-pointing."
            ],
            [
              "Is the app compliant?",
              "Yes. Built fully compliant for the App Store. We deploy these regularly."
            ]
          ]}
        />
      </div>

      <HighlightBox variant="warning" title="Primary Directive">
        Cannabis operations are managed by serious business owners forced to tolerate amateur vendors. You supply them with a professional infrastructure team possessing deep industry knowledge. Project absolute confidence in this reality.
      </HighlightBox>

      <NavButtons currentModuleId={14} />
    </div>
  );
}

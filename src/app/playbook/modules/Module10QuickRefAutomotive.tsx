import { CheatTable } from "@/components/ui/CheatTable";
import { NavButtons } from "@/components/ui/NavButtons";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { PlaybookModuleLink } from "@/components/ui/PlaybookModuleLink";
import { PLAYBOOK_MODULE_IDS, PRICING_SECTION_IDS } from "@/lib/playbookDeepLinks";

const { pricing, objections } = PLAYBOOK_MODULE_IDS;
const A = PRICING_SECTION_IDS;

export default function Module10QuickRefAutomotive() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-5xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 14 — Reference</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Quick Reference</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Access this data prior to any conversation. Tap a product for the full pricing tier, or an
          objection prompt for the full rebuttal module.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Pricing at a Glance</h2>
        <CheatTable
          headers={["Product", "Price", "Best For"]}
          rows={[
            [
              <PlaybookModuleLink
                key="w1"
                moduleId={pricing}
                hash={A.setupSingle}
                className="font-semibold text-foreground"
              >
                Website (Single)
              </PlaybookModuleLink>,
              "$5,000 – $8,000",
              "Single-store repair, detail, collision, or tire shops",
            ],
            [
              <PlaybookModuleLink
                key="w2"
                moduleId={pricing}
                hash={A.setupMulti}
                className="font-semibold text-foreground"
              >
                Website (Multi)
              </PlaybookModuleLink>,
              "$8,000 – $12,000",
              "Chains, multi-bay groups, multi-brand operators",
            ],
            [
              <PlaybookModuleLink
                key="e"
                moduleId={pricing}
                hash={A.retainerEssentials}
                className="font-semibold text-foreground"
              >
                Essentials Retainer
              </PlaybookModuleLink>,
              "$597 / mo",
              "Smaller shops — hosting, GBP, reviews",
            ],
            [
              <PlaybookModuleLink
                key="g"
                moduleId={pricing}
                hash={A.retainerGrowth}
                className="font-semibold text-foreground"
              >
                Growth Retainer
              </PlaybookModuleLink>,
              "$997 / mo",
              "Active shops — SEO + remarketing",
            ],
            [
              <PlaybookModuleLink
                key="p"
                moduleId={pricing}
                hash={A.retainerPremium}
                className="font-semibold text-foreground"
              >
                Premium Retainer
              </PlaybookModuleLink>,
              "$1,497 / mo",
              "Multi-location — full-service",
            ],
            [
              <PlaybookModuleLink
                key="app"
                moduleId={pricing}
                hash={A.mobileApp}
                className="font-semibold text-foreground opacity-70"
              >
                Mobile App
              </PlaybookModuleLink>,
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
            [
              <PlaybookModuleLink key="o1" moduleId={objections} className="text-foreground">
                How fast?
              </PlaybookModuleLink>,
              "7 days average. Not 7 weeks.",
            ],
            [
              <PlaybookModuleLink key="o2" moduleId={objections} className="text-foreground">
                Do you know automotive?
              </PlaybookModuleLink>,
              "We build for bays—services, proof, seasonality, and how drivers pick a shop.",
            ],
            [
              <PlaybookModuleLink key="o3" moduleId={objections} className="text-foreground">
                We rely on drive-bys.
              </PlaybookModuleLink>,
              "Great—plus search, maps, and your list so slow weeks and new competition do not empty bays.",
            ],
            [
              <PlaybookModuleLink key="o4" moduleId={objections} className="text-foreground">
                One vendor for everything?
              </PlaybookModuleLink>,
              "Yes. One login. One team. No finger-pointing.",
            ],
            [
              <PlaybookModuleLink key="o5" moduleId={objections} className="text-foreground">
                Is the app a fit for us?
              </PlaybookModuleLink>,
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

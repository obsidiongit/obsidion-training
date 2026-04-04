import { CheatTable } from "@/components/ui/CheatTable";
import { NavButtons } from "@/components/ui/NavButtons";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { PlaybookModuleLink } from "@/components/ui/PlaybookModuleLink";
import { PLAYBOOK_MODULE_IDS, PRICING_SECTION_IDS } from "@/lib/playbookDeepLinks";

const { pricing, objections } = PLAYBOOK_MODULE_IDS;
const A = PRICING_SECTION_IDS;

export default function Module10QuickRef() {
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
              "Single-store dispensaries, ancillary brands",
            ],
            [
              <PlaybookModuleLink
                key="w2"
                moduleId={pricing}
                hash={A.setupMulti}
                className="font-semibold text-foreground"
              >
                Website (MSO)
              </PlaybookModuleLink>,
              "$8,000 – $12,000",
              "Chains, multi-state operators",
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
              "Active dispensaries — SEO + remarketing",
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
              "MSOs & multi-location — full-service",
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
              "MSOs, high-volume multi-location groups",
            ],
          ]}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Key Differentiators</h2>
        <CheatTable
          headers={["Prospect Says", "Your Response"]}
          rows={[
            [
              <PlaybookModuleLink key="o1" moduleId={objections} className="text-foreground">
                How fast?
              </PlaybookModuleLink>,
              "7 days average. Not 7 weeks.",
            ],
            [
              <PlaybookModuleLink key="o2" moduleId={objections} className="text-foreground">
                Do you know cannabis?
              </PlaybookModuleLink>,
              "We operated in it. Operational background, not just research.",
            ],
            [
              <PlaybookModuleLink key="o3" moduleId={objections} className="text-foreground">
                Can we run ads?
              </PlaybookModuleLink>,
              "We execute what is strictly compliant. SEO + remarketing is the required system.",
            ],
            [
              <PlaybookModuleLink key="o4" moduleId={objections} className="text-foreground">
                One vendor for everything?
              </PlaybookModuleLink>,
              "Yes. One login. One team. No finger-pointing.",
            ],
            [
              <PlaybookModuleLink key="o5" moduleId={objections} className="text-foreground">
                Is the app compliant?
              </PlaybookModuleLink>,
              "Yes. Built fully compliant for the App Store. We deploy these regularly.",
            ],
          ]}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">First Call Checklist</h2>
        <CheatTable
          headers={["You Must Know", "Why It Matters"]}
          rows={[
            ["Their budget range or willingness to invest", "Avoid building a proposal they can't action"],
            ["Decision-making timeline", "Prioritize deals that can close this month"],
            ["Who else is in the decision", "Map to the right person before the next call"],
            ["Current vendor / what they're paying", "Identify switching cost and position value clearly"],
            ["Top pain point in their own words", "Use their language in the proposal — not yours"],
            ["Agreed next step before hanging up", "No next step = dead deal"],
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

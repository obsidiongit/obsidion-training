import { CheatTable } from "@/components/ui/CheatTable";
import { NavButtons } from "@/components/ui/NavButtons";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { PlaybookModuleLink } from "@/components/ui/PlaybookModuleLink";
import { PLAYBOOK_MODULE_IDS, PRICING_SECTION_IDS } from "@/lib/playbookDeepLinks";

const { pricing, objections } = PLAYBOOK_MODULE_IDS;
const A = PRICING_SECTION_IDS;

export default function ContractorsModule09QuickRef() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-5xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 10 — Reference
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Quick Reference</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Pull this up before any contractor conversation. Tap a product for the full pricing tier,
          or an objection prompt for the full rebuttal module.
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
                Website (Single Territory)
              </PlaybookModuleLink>,
              "$5,000 – $8,000",
              "Single-trade contractors—roofers, plumbers, HVAC, painters, landscapers",
            ],
            [
              <PlaybookModuleLink
                key="w2"
                moduleId={pricing}
                hash={A.setupMulti}
                className="font-semibold text-foreground"
              >
                Website (Multi-Location)
              </PlaybookModuleLink>,
              "$8,000 – $12,000",
              "Multi-territory, multi-trade, or franchise operators",
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
              "Smaller operators — hosting, GBP, automated review requests",
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
              "Active contractors — full SEO + remarketing + referral automation",
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
              "Multi-territory — full-service with priority management",
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
              "Multi-territory, franchise operators, high-volume recurring services",
            ],
          ]}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Key Differentiators</h2>
        <CheatTable
          headers={["They say...", "You answer..."]}
          rows={[
            [
              <PlaybookModuleLink key="o1" moduleId={objections} className="text-foreground">
                How fast?
              </PlaybookModuleLink>,
              "7 days average. Not 7 weeks.",
            ],
            [
              <PlaybookModuleLink key="o2" moduleId={objections} className="text-foreground">
                We get all our work from referrals.
              </PlaybookModuleLink>,
              "Referrals are gold. We add search, maps, and automated referral requests to that engine—so slow seasons don't empty the calendar.",
            ],
            [
              <PlaybookModuleLink key="o3" moduleId={objections} className="text-foreground">
                We tried SEO and it didn't work.
              </PlaybookModuleLink>,
              "You bought reports, not results. We own the site, the GBP, the pages, and the reviews—all of it.",
            ],
            [
              <PlaybookModuleLink key="o4" moduleId={objections} className="text-foreground">
                One vendor for everything?
              </PlaybookModuleLink>,
              "Yes. One login. One team. No finger-pointing when a lead falls through.",
            ],
            [
              <PlaybookModuleLink key="o5" moduleId={objections} className="text-foreground">
                Is the app a fit for us?
              </PlaybookModuleLink>,
              "We scope job status, booking, and push for multi-territory and recurring-service operators—same disciplined rollout we use everywhere.",
            ],
          ]}
        />
      </div>

      <HighlightBox variant="warning" title="Primary Directive">
        Contractors are practical operators running crews, not marketing departments. They respond
        to results and speed—not buzzwords. You supply them with a professional digital
        infrastructure team that speaks their trade and ships in a week. Project absolute
        confidence in that reality.
      </HighlightBox>

      <NavButtons currentModuleId={9} />
    </div>
  );
}

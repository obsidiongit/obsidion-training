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
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 14 — Reference
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Quick Reference</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Scan this before calls with owners, lead stylists, and med spa directors. Tap a product for
          the full pricing tier, or an objection prompt for the full rebuttal module.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Pricing at a glance</h2>
        <CheatTable
          headers={["Product", "Price", "Best for"]}
          rows={[
            [
              <PlaybookModuleLink
                key="w1"
                moduleId={pricing}
                hash={A.setupSingle}
                className="font-semibold text-foreground"
              >
                Website (single)
              </PlaybookModuleLink>,
              "$5,000 – $8,000",
              "One salon, spa, or med spa location",
            ],
            [
              <PlaybookModuleLink
                key="w2"
                moduleId={pricing}
                hash={A.setupMulti}
                className="font-semibold text-foreground"
              >
                Website (multi)
              </PlaybookModuleLink>,
              "$8,000 – $12,000",
              "Studios with 2+ locations or distinct brands",
            ],
            [
              <PlaybookModuleLink
                key="e"
                moduleId={pricing}
                hash={A.retainerEssentials}
                className="font-semibold text-foreground"
              >
                Essentials retainer
              </PlaybookModuleLink>,
              "$597 / mo",
              "Hosting, GBP, reviews, baseline SEO",
            ],
            [
              <PlaybookModuleLink
                key="g"
                moduleId={pricing}
                hash={A.retainerGrowth}
                className="font-semibold text-foreground"
              >
                Growth retainer
              </PlaybookModuleLink>,
              "$997 / mo",
              "SEO + SMS/email + win-back / fill gaps",
            ],
            [
              <PlaybookModuleLink
                key="p"
                moduleId={pricing}
                hash={A.retainerPremium}
                className="font-semibold text-foreground"
              >
                Premium retainer
              </PlaybookModuleLink>,
              "$1,497 / mo",
              "Multi-location, aggressive growth, priority rhythm",
            ],
            [
              <PlaybookModuleLink
                key="app"
                moduleId={pricing}
                hash={A.mobileApp}
                className="font-semibold text-foreground opacity-70"
              >
                Mobile app
              </PlaybookModuleLink>,
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
            [
              <PlaybookModuleLink key="o1" moduleId={objections} className="text-foreground">
                How fast?
              </PlaybookModuleLink>,
              "About 7 days to launch—not 7 weeks of runway.",
            ],
            [
              <PlaybookModuleLink key="o2" moduleId={objections} className="text-foreground">
                Do you get beauty / med spa?
              </PlaybookModuleLink>,
              "We build for booking, providers, treatments, and compliance-aware structure—not generic brochures.",
            ],
            [
              <PlaybookModuleLink key="o3" moduleId={objections} className="text-foreground">
                We only use Instagram.
              </PlaybookModuleLink>,
              "Great—plus we own search, maps, and your list so you are not one algorithm change from empty chairs.",
            ],
            [
              <PlaybookModuleLink key="o4" moduleId={objections} className="text-foreground">
                One vendor?
              </PlaybookModuleLink>,
              "One stack: site, SEO, remarketing, optional app. One accountable team.",
            ],
            [
              <PlaybookModuleLink key="o5" moduleId={objections} className="text-foreground">
                Is the app allowed?
              </PlaybookModuleLink>,
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

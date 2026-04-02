import { CheatTable } from "@/components/ui/CheatTable";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StatBox, StatRow } from "@/components/ui/StatBox";
import { StepList, Step } from "@/components/ui/StepList";

export default function Module09Compensation() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 09 — Sales</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Getting Paid & Bonuses</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Compensation is designed to reward qualified revenue and clean pipeline hygiene. The
          structure below is representative; your compensation details will be confirmed during
          onboarding and in your written offer.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Commission tiers (illustrative)</h2>
        <p className="text-muted-foreground text-sm mb-4">
          Tiers typically track rolling qualified revenue or gross margin—your plan document defines
          the meter. Percentages below are placeholders for training purposes.
        </p>
        <CheatTable
          headers={["Tier", "Qualified revenue (rolling)", "Commission rate (example)"]}
          rows={[
            ["Starter", "$0 – $24K/mo", "6%"],
            ["Builder", "$24K – $55K/mo", "8%"],
            ["Accelerator", "$55K – $95K/mo", "10%"],
            ["Partner", "$95K+/mo", "12% + quarterly bonus review"],
          ]}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Reference figures</h2>
        <StatRow>
          <StatBox value="TBD" label="Base draw / salary" sublabel="Confirmed in offer letter" />
          <StatBox value="TBD" label="On-target earnings" variant="accent" sublabel="Includes base + at-plan variable" />
          <StatBox value="2× / month" label="Payout cadence" sublabel="Mid-month + month-end (typical)" />
        </StatRow>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">How payouts are calculated</h2>
        <StepList>
          <Step number={1} title="Deal marked closed–won in CRM">
            The opportunity must be in the correct stage with executed agreement (or equivalent
            trigger defined in your comp plan). Verbal yeses do not count until paperwork matches.
          </Step>
          <Step number={2} title="Revenue recognition rules apply">
            Setup fees may pay on invoice; recurring may pay on first payment received or on
            schedule. Multi-location rollouts may split across milestones—follow finance&apos;s
            eligibility table.
          </Step>
          <Step number={3} title="Clawback window">
            If a client churns or disputes within the clawback period, associated variable comp may
            be adjusted. Know the window length for your product mix.
          </Step>
          <Step number={4} title="Bonus tiers & spiffs">
            Quarterly accelerators and team goals stack on top of core commission when published.
            Spiffs are announced in Slack with explicit dates and caps.
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="warning" title="Numbers are placeholders">
        The percentages, thresholds, and dates in this module are training examples only. Specific
        numbers, draw terms, and eligibility will always be confirmed by management and your offer
        documentation.
      </HighlightBox>

      <NavButtons currentModuleId={9} />
    </div>
  );
}

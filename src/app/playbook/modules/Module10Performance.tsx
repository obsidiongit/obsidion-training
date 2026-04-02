import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StatBox, StatRow } from "@/components/ui/StatBox";
import { StepList, Step } from "@/components/ui/StepList";

export default function Module10Performance() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 10 — Sales</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Performance Expectations</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Quotas and KPIs align the team on activity quality and revenue outcomes. Targets below are
          onboarding placeholders—your manager will assign territory-specific goals.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Ramp: 30 / 60 / 90 days</h2>
        <StepList>
          <Step number={30} title="First 30 days — fluency">
            Finish the playbook, shadow five live calls, and run your first ten qualified
            conversations. Goal: explain the full stack without reading slides.
          </Step>
          <Step number={60} title="Days 31–60 — pipeline">
            Maintain a healthy CRM with stages, next steps, and notes on every active deal. Target:
            a steady mix of discovery calls and follow-ups booked each week.
          </Step>
          <Step number={90} title="Days 61–90 — production">
            Operate at or above activity benchmarks and close your first eligible deals (or hit the
            ramp milestone your plan defines). Request feedback early if you are off pace.
          </Step>
        </StepList>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Activity benchmarks (examples)</h2>
        <StatRow>
          <StatBox value="35–50" label="Quality touches / day" sublabel="Calls, meaningful DMs, booked meetings" />
          <StatBox value="6–10" label="Demos or deep dives / week" variant="accent" sublabel="After qualification" />
          <StatBox value="2–4" label="Closes / month" sublabel="At full ramp; varies by ACV" />
        </StatRow>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">What &quot;good&quot; looks like</h2>
        <CardGrid cols={3}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Exceeds expectations</h3>
            <p className="text-muted-foreground text-sm">
              Accurate forecasting, fast follow-up, multi-threaded deals (economic buyer + ops), and
              clean handoffs to delivery with zero surprise scope.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Meets expectations</h3>
            <p className="text-muted-foreground text-sm">
              Hits activity and revenue targets, keeps CRM truthful, and communicates blockers
              before they become slippage.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Needs improvement</h3>
            <p className="text-muted-foreground text-sm">
              Sporadic activity, thin notes, optimistic stages without evidence, or repeated
              no-shows from poor calendar discipline.
            </p>
          </Card>
        </CardGrid>
      </div>

      <HighlightBox variant="info" title="Coaching">
        If you are behind at any checkpoint, bring your pipeline export and call recordings to your
        one-on-one. The goal is to fix the system, not to surprise you at quarter-end.
      </HighlightBox>

      <NavButtons currentModuleId={10} />
    </div>
  );
}

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
          Nobody expects you to show up on day one already running at full ramp. These milestones describe
          how competence and pipeline momentum typically build—your manager will calibrate territory-specific
          quotas and KPIs to match your market.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">How your rhythm builds</h2>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Think of this as a path forward, not a scorecard. Early weeks are about learning the motion; later
          weeks are where repetition turns into confidence.
        </p>
        <StepList>
          <Step number="W1" title="Week 1 — immersion and first reps">
            You are deep in the playbook, shadowing live calls, and putting real touches on the board.
            Notes might feel rough—that is expected. The win is protecting calendar time for outreach and
            treating every conversation as practice, not a verdict on your future here.
          </Step>
          <Step number="W4" title="Week 4 — things start to click">
            The stack feels less abstract: your CRM tells a coherent story, follow-ups get easier to
            schedule, and you can walk a prospect through the offer without leaning on slides. You will
            notice the difference in how calm you feel going into the next call.
          </Step>
          <Step number="M3" title="Month 3 — momentum you can feel">
            Pipeline has real depth—several active opportunities, stages that match reality, and a weekly
            cadence that lines up with the benchmarks your plan defines. This is what sustainable
            production feels like: repeatable motion, fewer heroic saves, and honest forecasting.
          </Step>
        </StepList>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">The longer arc: 30 / 60 / 90 days</h2>
        <CardGrid cols={3}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">First 30 days</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Aim for fluency: finish the playbook, shadow several live calls, and run your first batch of
              qualified conversations. The goal is to explain the full value story in your own words.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Days 31–60</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your pipeline becomes the system you trust—stages, next steps, and notes on every active
              deal. Week over week, you want a steady mix of discovery and follow-ups on the calendar.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Days 61–90</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              You are operating at or toward full activity benchmarks and closing eligible deals (or
              hitting the ramp milestone your plan spells out). Early feedback loops matter more than
              waiting to be &quot;fully ready.&quot;
            </p>
          </Card>
        </CardGrid>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Activity benchmarks (examples)</h2>
        <p className="text-muted-foreground text-sm mb-4 max-w-2xl">
          These numbers illustrate where experienced reps often land at full ramp—your targets will
          reflect ACV, territory, and channel mix.
        </p>
        <StatRow>
          <StatBox value="35–50" label="Quality touches / day" sublabel="Calls, meaningful DMs, booked meetings" />
          <StatBox value="6–10" label="Demos or deep dives / week" variant="accent" sublabel="After qualification" />
          <StatBox value="2–4" label="Closes / month" sublabel="At full ramp; varies by ACV" />
        </StatRow>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Habits that compound</h2>
        <CardGrid cols={2}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">What great looks like over time</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fast, specific follow-up; forecasting that matches reality; multi-threaded deals when it
              matters; and handoffs to delivery that leave no ambiguity. These are skills you grow into—
              not a bar you are expected to clear on week one.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Where your manager helps</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pace, list quality, and talk tracks all improve faster with coaching. Bring your pipeline
              view and a few call snippets to one-on-ones; the goal is to tune the system together, not to
              catch you off guard at quarter-end.
            </p>
          </Card>
        </CardGrid>
      </div>

      <HighlightBox variant="info" title="If something feels off">
        Speak up early. Whether it is list quality, product clarity, or calendar load, the fastest fixes
        happen when you surface friction in the first weeks—not when targets are due.
      </HighlightBox>

      <NavButtons currentModuleId={10} />
    </div>
  );
}

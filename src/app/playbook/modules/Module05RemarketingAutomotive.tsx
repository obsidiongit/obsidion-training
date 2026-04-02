import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StepList, Step } from "@/components/ui/StepList";

export default function Module05RemarketingAutomotive() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 05 — Products</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Remarketing</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The highest-ROI audience is the customer list they already own. Re-engaging past ROs,
          detail clients, and tire buyers is the fastest path to full bays. We automate this process.
        </p>
      </div>

      <div>
        <CardGrid cols={3}>
          <Card>
            <h3 className="text-lg font-bold mb-2">SMS Campaigns</h3>
            <p className="text-muted-foreground text-sm">
              Opt-in texts for seasonal tires, service reminders, flash bays—high open rates, immediate
              action.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Email Sequences</h3>
            <p className="text-muted-foreground text-sm">
              Welcome flows, estimate nurture, newsletters showcasing work and offers—running without
              daily manual work.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Loyalty Programs</h3>
            <p className="text-muted-foreground text-sm">
              Points and visit-based rewards tied to the site and automations so customers default to
              your client.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Win-Back Automation</h3>
            <p className="text-muted-foreground text-sm">
              When a customer goes quiet, structured re-engagement brings them back cheaper than cold
              acquisition.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Instant Lead Response</h3>
            <p className="text-muted-foreground text-sm">
              Form fills and missed calls trigger immediate follow-up—speed to lead wins when they are
              comparing shops.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Campaign Analytics</h3>
            <p className="text-muted-foreground text-sm">
              Dashboards on opens, replies, and booked appointments—not just sends.
            </p>
          </Card>
        </CardGrid>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Why Remarketing is the Most Important Product</h2>
        <StepList>
          <Step number={1} title="Acquisition vs Retention">
            Paid channels are noisy and expensive. Owned SMS/email lists face fewer restrictions and
            convert at higher rates—if someone turns the machine on.
          </Step>
          <Step number={2} title="Repeat Service Is Built In">
            Oil changes, rotations, seasonal tires, annual details—increasing frequency by one visit
            per customer scales revenue across the whole database.
          </Step>
          <Step number={3} title="Dormant Lists">
            Most shops sit on gold in their shop software and never systematically work it. We activate
            dormant contacts from day one.
          </Step>
          <Step number={4} title="Speed to Response">
            Responding within minutes—not hours—wins the appointment. Our infrastructure compresses
            that gap.
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="warning" title="Retention Strategy">
        Once an owner watches a tire blast or service reminder fill bays, they retain the retainer.
        Lead with the website for credibility; close with automations on revenue they are already
        leaving on the table.
      </HighlightBox>

      <NavButtons currentModuleId={5} />
    </div>
  );
}

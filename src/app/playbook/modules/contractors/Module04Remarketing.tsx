import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StepList, Step } from "@/components/ui/StepList";

export default function ContractorsModule04Remarketing() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 05 — Products
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Remarketing</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The highest-ROI audience is the customer list they already own. Re-engaging past clients,
          automating referral requests, and following up on dormant estimates is the fastest path to
          more jobs. We build and run those systems.
        </p>
      </div>

      <div>
        <CardGrid cols={3}>
          <Card>
            <h3 className="text-lg font-bold mb-2">SMS Campaigns</h3>
            <p className="text-muted-foreground text-sm">
              Opt-in texts for seasonal service reminders, annual maintenance follow-ups, and
              limited-availability promotions—high open rates, immediate response.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Email Sequences</h3>
            <p className="text-muted-foreground text-sm">
              Welcome flows, estimate nurture, newsletters showcasing recent projects—running
              without daily manual work so contractors stay top of mind between jobs.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Referral Request Automation</h3>
            <p className="text-muted-foreground text-sm">
              Contractors live on referrals. We automate the ask after every completed job—the
              right message at the right time, every time, without the owner remembering to send it.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Estimate Follow-Up</h3>
            <p className="text-muted-foreground text-sm">
              Quotes sitting untouched for 72+ hours are dying. Automated follow-up sequences keep
              estimates warm and convert more of the pipeline already in hand.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Review Collection</h3>
            <p className="text-muted-foreground text-sm">
              Post-job review requests sent automatically. More reviews, faster. Each new review
              compounds the local pack ranking and homeowner trust over time.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Instant Lead Response</h3>
            <p className="text-muted-foreground text-sm">
              Form fills and missed calls trigger immediate follow-up. Speed to lead wins when
              homeowners are comparing multiple contractors in the same moment.
            </p>
          </Card>
        </CardGrid>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Why Remarketing Is the Most Important Product</h2>
        <StepList>
          <Step number={1} title="Referrals Are Not Scalable Alone">
            Contractors depend on referrals but cannot control the volume or timing. Automated
            referral requests and seasonal outreach add a channel they can actually predict.
          </Step>
          <Step number={2} title="Repeat Work Exists—Nobody Is Capturing It">
            Annual gutter cleaning, seasonal HVAC maintenance, spring landscaping, exterior
            repainting every 5–7 years—increasing repeat frequency by one service cycle per
            customer scales revenue across the entire database.
          </Step>
          <Step number={3} title="Dormant Lists Are Gold">
            Most contractors sit on hundreds of past customer contacts in their CRM or phone and
            never systematically work them. We activate dormant contacts from day one.
          </Step>
          <Step number={4} title="Speed to Response Wins the Job">
            Homeowners compare multiple contractors simultaneously. Responding within minutes—not
            hours—wins the estimate slot. Our infrastructure compresses that gap automatically.
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="warning" title="Retention Strategy">
        Once a contractor watches a seasonal blast or referral sequence fill their calendar, they
        retain the retainer. Lead with the website for credibility; close with automations on
        revenue they are already leaving on the table.
      </HighlightBox>

      <NavButtons currentModuleId={4} />
    </div>
  );
}

import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StepList, Step } from "@/components/ui/StepList";

export default function Module05Remarketing() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 06 — Products</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Remarketing</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Cannabis operations cannot run cold ad campaigns. Re-engaging the existing customer base is the highest-ROI strategy available. We automate this entire process.
        </p>
      </div>

      <div>
        <CardGrid cols={3}>
          <Card>
            <h3 className="text-lg font-bold mb-2">SMS Campaigns</h3>
            <p className="text-muted-foreground text-sm">
              We deploy text messages to opted-in lists. SMS commands 90% open rates. The system sends daily deals, product drops, and flash sales automatically.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Email Sequences</h3>
            <p className="text-muted-foreground text-sm">
              We build automated drip campaigns. Welcome sequences, weekly newsletters, and promotional alerts run indefinitely without manual input.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Loyalty Programs</h3>
            <p className="text-muted-foreground text-sm">
              We implement points-based rewards and visit streaks. The system ties directly into the website and triggers automatically after transactions.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Win-Back Automation</h3>
            <p className="text-muted-foreground text-sm">
              When a customer stops purchasing for 30 days, the infrastructure fires a re-engagement sequence containing a specific incentive. Dead leads convert back to active buyers.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Instant Lead Response</h3>
            <p className="text-muted-foreground text-sm">
              Every form submission or missed call triggers an immediate systemic response. Speed to lead dictates close rate.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Campaign Analytics</h3>
            <p className="text-muted-foreground text-sm">
              Clients receive real-time dashboards displaying open rates, conversion events, and direct revenue attributed to specific messages.
            </p>
          </Card>
        </CardGrid>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Why Remarketing is the Most Important Product</h2>
        <StepList>
          <Step number={1} title="Acquisition vs Retention">
            You cannot acquire new customers through paid ads, but you face zero restrictions communicating with an opted-in list. The existing database represents the most valuable marketing asset a dispensary owns.
          </Step>
          <Step number={2} title="High-Frequency Purchases">
            Cannabis customers purchase weekly. Increasing visit frequency by a single additional visit per month scales into massive annual revenue across a database.
          </Step>
          <Step number={3} title="Dormant Databases">
            Most dispensaries abandon their customer contacts. We activate dormant lists into revenue engines from deployment day one, maximizing value they already paid to acquire.
          </Step>
          <Step number={4} title="Speed to Response">
            Responding to an inquiry within 5 minutes increases conversion rates by up to 900%. Our infrastructure responds in seconds, 24/7.
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="warning" title="Retention Strategy">
        Once a dispensary owner watches an automated SMS script drive 40 customers into the store on a weekend, they retain our services indefinitely. Lead your sales conversations here after establishing trust through the website infrastructure.
      </HighlightBox>

      <NavButtons currentModuleId={6} />
    </div>
  );
}

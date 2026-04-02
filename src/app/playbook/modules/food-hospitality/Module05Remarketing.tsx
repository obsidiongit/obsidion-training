import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StepList, Step } from "@/components/ui/StepList";

export default function Module05Remarketing() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 06 — Products
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Remarketing</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Paid reach gets expensive fast. The list they already earned—reservations, Wi-Fi captures,
          catering leads, loyalty signups—is the profit center. We automate SMS, email, and loyalty
          touches that drive repeat visits, event fills, and off-peak traffic.
        </p>
      </div>

      <div>
        <CardGrid cols={3}>
          <Card>
            <h3 className="text-lg font-bold mb-2">SMS campaigns</h3>
            <p className="text-muted-foreground text-sm">
              High open rates for same-day features, wine dinners, truck locations, and last-minute
              table releases—always compliant and opt-in.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Email sequences</h3>
            <p className="text-muted-foreground text-sm">
              Welcome series, chef&apos;s menus, holiday promos, and catering nurture drips that run
              without someone remembering to hit send.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Loyalty &amp; VIP tiers</h3>
            <p className="text-muted-foreground text-sm">
              Points, visit streaks, and birthday rewards—integrated with how they identify guests
              at the door or POS where possible.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Win-back &amp; slow-night fills</h3>
            <p className="text-muted-foreground text-sm">
              Triggers for guests who have not visited in 30–60 days or campaigns aimed at Tuesday
              and Wednesday covers.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Instant lead response</h3>
            <p className="text-muted-foreground text-sm">
              Catering and private-event inquiries get immediate acknowledgment—speed wins
              deposits against slower competitors.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Campaign analytics</h3>
            <p className="text-muted-foreground text-sm">
              Show which sends drove reservations, clicks, and attributed revenue—not just open
              rates.
            </p>
          </Card>
        </CardGrid>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Why remarketing wins in hospitality</h2>
        <StepList>
          <Step number={1} title="Frequency beats one-off ads">
            Regulars and semi-regulars drive margin. Small lifts in visit frequency compound across
            hundreds of guests.
          </Step>
          <Step number={2} title="Lists already exist—they are underused">
            Most venues collect data accidentally. We turn it into scheduled revenue without adding
            head count.
          </Step>
          <Step number={3} title="Events and catering need nurture">
            Long sales cycles reward automated follow-up, reminders, and social proof drops.
          </Step>
          <Step number={4} title="Speed to the guest">
            A missed DM or form for 12 hours loses the party. Automation keeps them warm instantly.
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="warning" title="Retention story">
        Once an owner sees a slow Monday fill from one SMS blast, remarketing stops feeling optional.
        Lead demos here after you have established the site and SEO story.
      </HighlightBox>

      <NavButtons currentModuleId={6} />
    </div>
  );
}

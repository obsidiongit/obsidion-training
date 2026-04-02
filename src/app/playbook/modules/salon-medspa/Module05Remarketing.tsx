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
          The highest ROI in beauty and wellness is usually the list you already have: past guests,
          members, and leads who did not book. We automate re-engagement so chairs stay full.
        </p>
      </div>

      <div>
        <CardGrid cols={3}>
          <Card>
            <h3 className="text-lg font-bold mb-2">SMS Campaigns</h3>
            <p className="text-muted-foreground text-sm">
              Opted-in texts for fill-the-gap days, retail drops, membership renewals, and seasonal
              packages. High open rates; strict compliance on consent.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Email Sequences</h3>
            <p className="text-muted-foreground text-sm">
              Welcome series, rebooking nudges, win-backs, and VIP tiers—running without someone
              remembering to hit send.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Loyalty &amp; Memberships</h3>
            <p className="text-muted-foreground text-sm">
              Points, tiers, and subscription-style perks tied to visit frequency and retail attach.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Win-Back Automation</h3>
            <p className="text-muted-foreground text-sm">
              When a guest goes quiet, trigger a structured offer or personal check-in before they
              switch to a competitor.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Instant Lead Response</h3>
            <p className="text-muted-foreground text-sm">
              Forms and missed calls get immediate follow-up. Speed wins consultations and first-time
              bookings.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Campaign Analytics</h3>
            <p className="text-muted-foreground text-sm">
              Show booked appointments and revenue influenced by specific sends—not vanity opens
              alone.
            </p>
          </Card>
        </CardGrid>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Why Remarketing Wins Here</h2>
        <StepList>
          <Step number={1} title="CAC vs. Reactivation">
            Winning a brand-new guest is expensive. Bringing back someone who already trusts you is
            cheaper—and fills slow Tuesday afternoons.
          </Step>
          <Step number={2} title="Frequency Drives Revenue">
            One extra visit per quarter across hundreds of clients compounds fast—especially with
            retail and upsells attached.
          </Step>
          <Step number={3} title="Silent Databases">
            Most salons collect numbers and never use them systematically. Turning that data on is
            an immediate before/after moment for the owner.
          </Step>
          <Step number={4} title="Speed to Response">
            Quick replies to DMs, forms, and consult requests convert dramatically better than
            &ldquo;we will get back to you tomorrow.&rdquo;
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="warning" title="Retention Strategy">
        Once an owner sees automated texts fill last-minute openings or win back lapsing members,
        they stop treating marketing as optional. Anchor demos on a real calendar outcome, not
        abstract &ldquo;engagement.&rdquo;
      </HighlightBox>

      <NavButtons currentModuleId={6} />
    </div>
  );
}

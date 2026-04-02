import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { PullQuote } from "@/components/ui/PullQuote";

export default function Module01WhoWeAreAutomotive() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 01 — Foundation</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Who We Are</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Obsidion is a full-service digital infrastructure provider for serious automotive operations.
          We build websites, manage local SEO, automate remarketing, integrate scheduling and CRM, and
          deploy branded mobile apps.
        </p>
      </div>

      <PullQuote author="Internal Directive">
        "We are not an agency that figures it out as we go. We built this system dozens of times. Our
        clients go live in days, not months."
      </PullQuote>

      <div>
        <CardGrid cols={2}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Speed</h3>
            <p className="text-muted-foreground">
              Average 7-day delivery from kickoff to launch. Competitors take 6–12 weeks and deliver
              less—while your prospect loses jobs to whoever answers Google first.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Built Different</h3>
            <p className="text-muted-foreground">
              We deploy proven systems, not garage templates. Every site is custom-built for service
              menus, proof, and conversions—optimized for how drivers actually choose a shop.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Automotive Aesthetics &amp; Proof</h3>
            <p className="text-muted-foreground">
              We know how to present bays, before/after, certifications, and offers so collision,
              detail, mechanical, and tire brands look as capable as they are.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Industry Fluency</h3>
            <p className="text-muted-foreground">
              We speak ROs, DRPs, seasonality, estimates, fleet, and fitment. That vocabulary earns
              trust on the first call.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Integrations</h3>
            <p className="text-muted-foreground">
              Scheduling, CRM, analytics—so form fills and calls become measurable work, not dead
              ends in an inbox.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Full-Service Framework</h3>
            <p className="text-muted-foreground">
              One system for the website, SEO, remarketing, and mobile apps. No handoffs between
              vendors.
            </p>
          </Card>
        </CardGrid>
      </div>

      <HighlightBox variant="warning" title="Our Positioning">
        The automotive service space is full of slow freelancers and one-off SEO pitches. Obsidion
        brings professional infrastructure: fast execution, clear scope, and metrics tied to calls and
        booked jobs.
      </HighlightBox>

      <NavButtons currentModuleId={1} />
    </div>
  );
}

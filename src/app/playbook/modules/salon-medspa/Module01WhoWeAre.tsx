import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { PullQuote } from "@/components/ui/PullQuote";

export default function Module01WhoWeAre() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 01 — Foundation
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Who We Are</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Obsidion is a full-service digital infrastructure partner for serious salons, med spas, and
          wellness brands. We build websites, manage local SEO, automate remarketing, integrate
          scheduling and POS, and deploy branded mobile apps.
        </p>
      </div>

      <PullQuote author="Internal Directive">
        &ldquo;We are not an agency that figures it out as we go. We built this system dozens of
        times. Our clients go live in days, not months.&rdquo;
      </PullQuote>

      <div>
        <CardGrid cols={2}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Speed</h3>
            <p className="text-muted-foreground">
              Average 7-day delivery from kickoff to launch. Competitors take 6–12 weeks and deliver
              less.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Built Different</h3>
            <p className="text-muted-foreground">
              We deploy proven systems, not templates. Every site is custom-built, optimized for
              performance, and wired to the tools salons and med spas run daily.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Beauty &amp; Clinical Trust</h3>
            <p className="text-muted-foreground">
              We understand premium beauty aesthetics and med spa trust signals—clean typography,
              strong service hierarchy, provider profiles, and before/after presentation that
              respects platform rules.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Operator Fluency</h3>
            <p className="text-muted-foreground">
              We speak chair utilization, no-shows, retail attach, membership, and injectable
              marketing guardrails. We are not a generic shop reskinning WordPress themes.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Scheduling &amp; Stack Integrations</h3>
            <p className="text-muted-foreground">
              We connect to Mindbody, Boulevard, Vagaro, Fresha, Zenoti, Phorest, and similar
              platforms so booking, services, and client flows stay in sync—not bolted on.
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
        Beauty and wellness is crowded with freelancers and generalist agencies. Obsidion brings
        professional infrastructure: fast delivery, reliable automation, and vocabulary that matches
        how owners actually run the business.
      </HighlightBox>

      <NavButtons currentModuleId={1} />
    </div>
  );
}

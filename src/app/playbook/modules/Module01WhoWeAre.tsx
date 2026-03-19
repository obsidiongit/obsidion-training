import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { PullQuote } from "@/components/ui/PullQuote";

export default function Module01WhoWeAre() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 01 — Foundation</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Who We Are</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Obsidion is a full-service digital infrastructure provider for serious cannabis operations. We build websites, manage local SEO, automate remarketing, integrate POS systems, and deploy branded mobile apps.
        </p>
      </div>

      <PullQuote author="Internal Directive">
        "We are not an agency that figures it out as we go. We built this system dozens of times. Our clients go live in days, not months."
      </PullQuote>

      <div>
        <CardGrid cols={2}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Speed</h3>
            <p className="text-muted-foreground">
              Average 7-day delivery from kickoff to launch. Competitors take 6–12 weeks and deliver less.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Built Different</h3>
            <p className="text-muted-foreground">
              We deploy proven systems, not templates. Every site is custom-built, optimized for performance, and integrated with the tools dispensaries use daily.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Cannabis Aesthetics</h3>
            <p className="text-muted-foreground">
              We know the visual language of the industry. Earthy palettes, premium typography, and compliance-conscious design. Our sites stand out immediately.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Industry Knowledge</h3>
            <p className="text-muted-foreground">
              We operated in cannabis. We understand compliance restrictions, consumer behavior, POS systems, and the specific limitations plant-touching businesses face.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">POS Integrations</h3>
            <p className="text-muted-foreground">
              We integrate with Dutchie, Weedmaps, and major POS systems. The website functions connected to the store inventory, not isolated from it.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Full-Service Framework</h3>
            <p className="text-muted-foreground">
              One system for the website, SEO, remarketing, and mobile apps. No handoffs between vendors.
            </p>
          </Card>
        </CardGrid>
      </div>

      <HighlightBox variant="warning" title="Our Positioning">
        The cannabis space relies on underqualified vendors—freelancers and new agencies. Obsidion brings professional infrastructure to this market. We move fast, we deliver reliable systems, and we understand the restrictions these businesses face.
      </HighlightBox>

      <NavButtons currentModuleId={1} />
    </div>
  );
}

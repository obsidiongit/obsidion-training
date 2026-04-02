import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StepList, Step } from "@/components/ui/StepList";

export default function Module03WebsiteAutomotive() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 03 — Products</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Website Buildout</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The foundation of the infrastructure. A shop website is where high-intent drivers decide
          whether to call, book, or keep scrolling. It must convert traffic, integrate with their
          tools, and represent the brand with proof.
        </p>
      </div>

      <div>
        <CardGrid cols={3}>
          <Card>
            <h3 className="text-lg font-bold mb-2">Automotive-Native Design</h3>
            <p className="text-muted-foreground text-sm">
              Custom layouts for service menus, detail packages, collision capabilities, tire brands
              and promotions—no generic themes. Stressed drivers understand what you do in seconds.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Scheduling &amp; Lead Capture</h3>
            <p className="text-muted-foreground text-sm">
              Embed the tools they already use—or clean forms to the service writer—with tracking so
              nothing falls through.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Proof That Sells</h3>
            <p className="text-muted-foreground text-sm">
              Before/after for detail and body, certifications for mechanical, fleet logos—whatever
              makes them the obvious choice.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Multi-Location Ready</h3>
            <p className="text-muted-foreground text-sm">
              Location pages, NAP, and structured data so each bay shows up where it matters—critical
              for tire and multi-store groups.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Mobile-First</h3>
            <p className="text-muted-foreground text-sm">
              Most jobs are booked from a phone. Fast loads, click-to-call, thumb-friendly CTAs.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Analytics &amp; CRM</h3>
            <p className="text-muted-foreground text-sm">
              We track calls, forms, and chats and tie activity to the CRM to trigger remarketing
              sequences.
            </p>
          </Card>
        </CardGrid>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Why the Website Matters More in Automotive</h2>
        <StepList>
          <Step number={1} title="High-Intent Moments">
            Breakdowns, collisions, and seasonal tire rushes start with Google. A poor site means they
            tap the next listing.
          </Step>
          <Step number={2} title="Trust Before Keys">
            Especially for collision and premium detail, the site signals whether the shop is
            legitimate, organized, and proud of the work.
          </Step>
          <Step number={3} title="Local Competition">
            Many shop sites are dated and disconnected from marketing systems. An Obsidion deployment
            immediately elevates the client above local competitors.
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="warning" title="Key Talking Point">
        "Your website is your best service writer. It works 24/7, answers the questions that stop the
        call, and we deploy it in about 7 days—not a quarter."
      </HighlightBox>

      <NavButtons currentModuleId={3} />
    </div>
  );
}

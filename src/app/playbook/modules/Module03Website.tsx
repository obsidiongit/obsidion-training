import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StepList, Step } from "@/components/ui/StepList";

export default function Module03Website() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 04 — Products</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Website Buildout</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The foundation of the infrastructure. A dispensary website operates as their only legal advertising surface. It must convert traffic, integrate with existing systems, and represent the brand accurately.
        </p>
      </div>

      <div>
        <CardGrid cols={3}>
          <Card>
            <h3 className="text-lg font-bold mb-2">Cannabis-Native Design</h3>
            <p className="text-muted-foreground text-sm">
              We design Custom sites around the brand. Earthy palettes, premium typography, and strict compliance metrics. We do not use templates.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Dutchie Integration</h3>
            <p className="text-muted-foreground text-sm">
              We embed Dutchie menus and ordering flows directly into the site. Users browse and order without leaving the environment, synced with inventory.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Weedmaps & Leafly Sync</h3>
            <p className="text-muted-foreground text-sm">
              We connect the site to key aggregator profiles. Listings, menus, and reviews remain consistent across all points of contact.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">POS Integration</h3>
            <p className="text-muted-foreground text-sm">
              We integrate with Dutchie POS, Flowhub, Treez, and others. The website displays real inventory and accurate pricing automatically.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Mobile-First</h3>
            <p className="text-muted-foreground text-sm">
              Most cannabis consumers operate on mobile. We build mobile-first: fast load times, thumb-friendly navigation, and focused product pages.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Analytics & CRM</h3>
            <p className="text-muted-foreground text-sm">
              We track form submissions, clicks, and sessions. We tie activity directly to the CRM to trigger automated remarketing sequences.
            </p>
          </Card>
        </CardGrid>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Why the Website Matters More in Cannabis</h2>
        <StepList>
          <Step number={1} title="Advertising Restrictions">
            Meta and Google prohibit cannabis product advertising. Organic traffic from Google Search and the website are the primary acquisition systems. A poor website creates daily revenue loss.
          </Step>
          <Step number={2} title="First Impressions">
            Cannabis consumers evaluate quality visually. A subpar site implies subpar products. Premium designs drive premium perception and higher spend per visit.
          </Step>
          <Step number={3} title="Local Competition">
            Most dispensary sites are outdated and disconnected from marketing systems. An Obsidion deployment immediately elevates the client above local competitors.
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="warning" title="Key Talking Point">
        "Your website is your best salesperson. It works 24/7, handles your entire booking flow automatically, and never calls in sick. We deploy this system in 7 days."
      </HighlightBox>

      <NavButtons currentModuleId={4} />
    </div>
  );
}

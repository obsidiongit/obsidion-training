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
          Obsidion is a full-service digital infrastructure partner for serious food and hospitality
          businesses. We build websites, own local SEO, automate remarketing, integrate reservations
          and POS where it matters, and deploy branded mobile apps for groups that need them.
        </p>
      </div>

      <PullQuote author="Internal directive">
        "We are not figuring it out per client from scratch. We ship proven systems. Our clients go
        live in days—not after a three-month 'discovery phase.'"
      </PullQuote>

      <div>
        <CardGrid cols={2}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Speed</h3>
            <p className="text-muted-foreground">
              Average 7-day delivery from kickoff to launch. Traditional agencies quote months for
              what we operationalize in a week.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Built for operations</h3>
            <p className="text-muted-foreground">
              Menus, hours, locations, events, catering inquiry flows, and private dining—we design
              around the real guest journey, not a generic brochure.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Hospitality-native design</h3>
            <p className="text-muted-foreground">
              Photography direction, typography, and layout that read premium on mobile—where
              guests decide where to eat or drink.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Stack fluency</h3>
            <p className="text-muted-foreground">
              We work with OpenTable, Resy, Tock, Square, Toast, Clover, and common ordering
              handoffs. The site and automations connect to how they already run service.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Integrations</h3>
            <p className="text-muted-foreground">
              Reservations, waitlist, gift cards, catering forms, and CRM hooks—so marketing is not
              siloed from the floor.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">One team, one system</h3>
            <p className="text-muted-foreground">
              Website, SEO, remarketing, and app share one roadmap. No juggling designers who ghost
              and SEOs who never talk to dev.
            </p>
          </Card>
        </CardGrid>
      </div>

      <HighlightBox variant="warning" title="Positioning">
        Food and hospitality is crowded with freelancers, theme dumps, and agencies that have never
        worked a Friday night rush. Obsidion sells professional infrastructure: fast builds,
        measurable local demand, and repeat-visit revenue through owned channels.
      </HighlightBox>

      <NavButtons currentModuleId={1} />
    </div>
  );
}

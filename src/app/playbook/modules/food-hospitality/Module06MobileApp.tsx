import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";

export default function Module06MobileApp() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 06 — Products
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Mobile App</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A branded app earns home-screen space for loyal guests: push notifications for drops and
          events, loyalty balances, reservations, and deep links to approved ordering flows. Best fit
          for multi-location groups, high-frequency concepts, and brands investing in retention—not
          every single mom-and-pop on day one.
        </p>
      </div>

      <HighlightBox variant="warning" title="Compliance framing">
        App store policies and alcohol or third-party ordering rules vary by concept and region. We
        architect around loyalty, bookings, content, and compliant handoffs—never promising to bypass
        platform or liquor regulations. Position Obsidion as building to their attorney and
        operator requirements.
      </HighlightBox>

      <div>
        <CardGrid cols={2}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Push notifications</h3>
            <p className="text-muted-foreground text-sm">
              Direct line for chef collabs, tasting menus, truck routes, and bar specials—without
              fighting social algorithms.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Ordering &amp; booking handoffs</h3>
            <p className="text-muted-foreground text-sm">
              Deep links to the flows they are allowed to run—kept in sync with web and in-store
              operations.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Loyalty wallet</h3>
            <p className="text-muted-foreground text-sm">
              Points, rewards, and tier status visible before they walk in—drives repeat visits over
              competitors one block away.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Geo-aware messaging</h3>
            <p className="text-muted-foreground text-sm">
              Useful for trucks, pop-ups, and multi-site brands promoting the right location at the
              right time—where policy allows.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Menus &amp; storytelling</h3>
            <p className="text-muted-foreground text-sm">
              Rich media for wine programs, suppliers, and chef narratives—brand depth beyond a
              static PDF.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Shared backend with web</h3>
            <p className="text-muted-foreground text-sm">
              One source of truth for hours, menus, and campaigns. Updates propagate everywhere.
            </p>
          </Card>
        </CardGrid>
      </div>

      <div className="mt-8 border-t pt-8">
        <h2 className="text-xl font-bold mb-4">Who to pitch</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Multi-location
          </span>
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Fast-casual &amp; QSR-style
          </span>
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Food truck fleets
          </span>
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Catering-heavy brands
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Single-location independents often start with website + SEO + remarketing. Introduce the
          app when they have proof of concept, multiple sites, or a loyalty engine that justifies
          home-screen real estate.
        </p>
      </div>

      <NavButtons currentModuleId={6} />
    </div>
  );
}

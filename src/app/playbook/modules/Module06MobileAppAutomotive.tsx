import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";

export default function Module06MobileAppAutomotive() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 06 — Products</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Mobile App</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The premium asset for multi-location operators. A branded application secures placement on a
          customer&apos;s home screen. We deploy complete mobile environments.
        </p>
      </div>

      <HighlightBox variant="warning" title="Deployment Framework">
        Automotive loyalty and booking apps belong in the store when they focus on offers,
        appointments, push notifications, and account history—not on trying to replace every
        in-shop workflow. We scope features for App Store patterns and the operator&apos;s realistic
        phase-one needs.
      </HighlightBox>

      <div>
        <CardGrid cols={2}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Push Notifications</h3>
            <p className="text-muted-foreground text-sm">
              Direct access to lock screens—seasonal tire windows, bay openings, detail slots—without
              fighting social algorithms.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Mobile Booking Experience</h3>
            <p className="text-muted-foreground text-sm">
              Frictionless rebooking and status—meets expectations set by national chains and dealer
              apps.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Loyalty System</h3>
            <p className="text-muted-foreground text-sm">
              Points and rewards across mechanical, detail, or combined brands—customers revisit your
              client over competitors.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Geo-Targeted Promotions</h3>
            <p className="text-muted-foreground text-sm">
              Proximity-aware prompts for multi-store groups—steer demand to the right bay or
              inventory.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Offers &amp; Service Hub</h3>
            <p className="text-muted-foreground text-sm">
              Packages, promotions, and vehicle-centric content synchronized with the site and
              operational backend.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Shared Backend</h3>
            <p className="text-muted-foreground text-sm">
              The application and website rely on identical infrastructure. Updates propagate to both
              platforms.
            </p>
          </Card>
        </CardGrid>
      </div>

      <div className="mt-8 border-t pt-8">
        <h2 className="text-xl font-bold mb-4">Target Audience</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">Multi-location</span>
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tire groups</span>
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">Detail chains</span>
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">High-volume</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Single-location independents rarely require immediate app deployment. Prioritize the website
          package. Introduce the app as a secondary phase after demonstrating results. Multi-location
          tire and growing groups often need this solution earlier in the conversation.
        </p>
      </div>

      <NavButtons currentModuleId={6} />
    </div>
  );
}

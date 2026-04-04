import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";

export default function ContractorsModule05MobileApp() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 06 — Products
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Mobile App</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The premium asset for multi-service or multi-territory contractors. A branded application
          secures placement on a customer&apos;s home screen and drives rebooking, referrals, and
          direct communication without competing for attention in a crowded inbox.
        </p>
      </div>

      <HighlightBox variant="warning" title="Deployment Framework">
        Home services apps belong in the store when they focus on job status, booking, push
        notifications, and account history—not on trying to replace field management software.
        We scope features for App Store patterns and the operator&apos;s realistic phase-one needs.
        Not every single-trade sole operator needs this on day one.
      </HighlightBox>

      <div>
        <CardGrid cols={2}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Push Notifications</h3>
            <p className="text-muted-foreground text-sm">
              Direct access to lock screens—seasonal service reminders, limited-availability
              windows, and promotion blasts without fighting email filters or social algorithms.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Job Status &amp; Communication</h3>
            <p className="text-muted-foreground text-sm">
              Homeowners get real-time updates on scheduling, arrival, and job completion—reducing
              calls to the office and increasing satisfaction.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Estimate &amp; Booking Hub</h3>
            <p className="text-muted-foreground text-sm">
              Frictionless rebooking and estimate requests—meets the expectations set by national
              home service franchises and platforms like Angi and Thumbtack.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Referral &amp; Loyalty Prompts</h3>
            <p className="text-muted-foreground text-sm">
              In-app referral requests and service milestones convert satisfied customers into
              active referral sources—the contractor&apos;s most valuable growth channel, now automated.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Geo-Targeted Promotions</h3>
            <p className="text-muted-foreground text-sm">
              Proximity-aware campaigns for multi-territory operators—steer demand to available
              crews and keep service areas fully utilized.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Shared Backend</h3>
            <p className="text-muted-foreground text-sm">
              The application and website share identical infrastructure. Updates to services,
              pricing, and availability propagate to both platforms simultaneously.
            </p>
          </Card>
        </CardGrid>
      </div>

      <div className="mt-8 border-t pt-8">
        <h2 className="text-xl font-bold mb-4">Target Audience</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Multi-territory
          </span>
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Franchise operators
          </span>
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Multi-trade companies
          </span>
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            High-volume recurring services
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Single-trade, single-operator contractors rarely require immediate app deployment.
          Prioritize the website and retainer packages first. Introduce the app as a secondary
          phase after demonstrating results. Multi-location or high-volume recurring operators—
          HVAC maintenance plans, pest control, landscaping—often need this solution earlier in
          the conversation.
        </p>
      </div>

      <NavButtons currentModuleId={5} />
    </div>
  );
}

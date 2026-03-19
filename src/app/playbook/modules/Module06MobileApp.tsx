import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";

export default function Module06MobileApp() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 06 — Products</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Mobile App</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The premium asset for multi-location operators. A branded application secures placement on a customer's home screen. We deploy complete mobile environments.
        </p>
      </div>

      <HighlightBox variant="warning" title="Compliance Framework">
        Cannabis applications maintain compliance on the App Store and Google Play provided they do not process cannabis transactions directly. We structure our applications around loyalty, booking, push notifications, and content deployment.
      </HighlightBox>

      <div>
        <CardGrid cols={2}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Push Notifications</h3>
            <p className="text-muted-foreground text-sm">
              Direct access to customer lock screens. We bypass algorithms and ad spend entirely, delivering daily deals and product alerts instantly.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Mobile Ordering Experience</h3>
            <p className="text-muted-foreground text-sm">
              We implement a frictionless mobile flow. Customers review inventory and process orders for in-store pickup quickly.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Loyalty System</h3>
            <p className="text-muted-foreground text-sm">
              Customers manage points and rewards intuitively. This infrastructure ensures they revisit your client over competitors.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Geo-Targeted Promotions</h3>
            <p className="text-muted-foreground text-sm">
              The application triggers proximity alerts when users pass physical locations. We drive foot traffic on demand.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Digital Menu & Strain Info</h3>
            <p className="text-muted-foreground text-sm">
              Live inventory synchronizes with Dutchie and POS systems. Customers access strain data and terpene profiles to accelerate checkout.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Shared Backend</h3>
            <p className="text-muted-foreground text-sm">
              The application and website rely on identical infrastructure. Status updates to inventory output simultaneously to both platforms.
            </p>
          </Card>
        </CardGrid>
      </div>

      <div className="mt-8 border-t pt-8">
        <h2 className="text-xl font-bold mb-4">Target Audience</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">Multi-location</span>
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">MSOs</span>
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ancillary brands</span>
          <span className="px-3 py-1 bg-muted rounded-md text-xs font-semibold uppercase tracking-wider text-muted-foreground">High-volume</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Single-location dispensaries rarely require immediate app deployment. Prioritize the website package. Introduce the app as a secondary phase after demonstrating results. Multi-state operators (MSOs) require this solution efficiently from the first discussion.
        </p>
      </div>

      <NavButtons currentModuleId={6} />
    </div>
  );
}

import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { Tag } from "@/components/ui/Tag";

export default function Module06MobileApp() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 07 — Products
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Mobile App</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The premium asset for multi-location brands and high-volume operators. A branded app earns
          home-screen real estate, repeat opens, and push-driven fills for slow days.
        </p>
      </div>

      <HighlightBox variant="warning" title="Positioning">
        Structure apps around booking, reminders, loyalty, promotions, and account history—not
        misleading medical claims. Med spa clients still benefit from compliant education and
        consultation CTAs inside the same framework.
      </HighlightBox>

      <div>
        <CardGrid cols={2}>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Push Notifications</h3>
            <p className="text-muted-foreground text-sm">
              Same-day openings, flash retail, membership perks, and event invites—without paying for
              every impression.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Frictionless Booking</h3>
            <p className="text-muted-foreground text-sm">
              Repeat guests rebook favorite providers and services in a few taps, synced with the
              scheduling stack.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Loyalty &amp; Rewards</h3>
            <p className="text-muted-foreground text-sm">
              Visible points and perks keep the brand top-of-mind versus competitors in the same
              strip or block.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Geo &amp; Local Prompts</h3>
            <p className="text-muted-foreground text-sm">
              Useful for multi-site brands: nudge guests near a specific location with relevant
              offers or events.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Service Discovery</h3>
            <p className="text-muted-foreground text-sm">
              Showcase packages, memberships, and retail tied to live availability where the stack
              allows.
            </p>
          </Card>
          <Card variant="green">
            <h3 className="text-lg font-bold mb-2">Shared Backend</h3>
            <p className="text-muted-foreground text-sm">
              Website and app pull from the same operational data—no double maintenance nightmare.
            </p>
          </Card>
        </CardGrid>
      </div>

      <div className="mt-8 border-t pt-8">
        <h2 className="text-xl font-bold mb-4">Target Audience</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <Tag>Multi-location</Tag>
          <Tag>Med spa groups</Tag>
          <Tag>High-volume salons</Tag>
          <Tag>Membership-heavy brands</Tag>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Single-chair studios can win with website + SEO + remarketing first. Introduce the app
          after you have proof and momentum—or lead with it when the buyer is a regional brand
          comparing enterprise vendors.
        </p>
      </div>

      <NavButtons currentModuleId={7} />
    </div>
  );
}

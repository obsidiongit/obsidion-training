import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StepList, Step } from "@/components/ui/StepList";

export default function Module03Website() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 03 — Products
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Website Buildout</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The foundation of the stack. A salon or med spa site must convert lookers into booked
          appointments, showcase providers and services clearly, and integrate with the scheduling
          tools the front desk already uses.
        </p>
      </div>

      <div>
        <CardGrid cols={3}>
          <Card>
            <h3 className="text-lg font-bold mb-2">Service-First Design</h3>
            <p className="text-muted-foreground text-sm">
              Custom layouts for menus, packages, memberships, and med spa treatment categories—no
              generic template that hides your best revenue services.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Online Booking</h3>
            <p className="text-muted-foreground text-sm">
              Embed or deep-link booking from Mindbody, Boulevard, Vagaro, Fresha, Zenoti, Phorest,
              and similar platforms so guests book without friction.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Provider &amp; Trust Pages</h3>
            <p className="text-muted-foreground text-sm">
              Stylists, injectors, and estheticians get profiles that build trust—credentials,
              specialties, and social proof where appropriate.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Retail &amp; Gift Cards</h3>
            <p className="text-muted-foreground text-sm">
              Surface retail, bundles, and gift purchases where the business wants upsell—not as an
              afterthought buried in a PDF menu.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Mobile-First</h3>
            <p className="text-muted-foreground text-sm">
              Most bookings start on the phone. Fast loads, thumb-friendly navigation, and clear
              calls-to-action for “Book now” win.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Analytics &amp; CRM</h3>
            <p className="text-muted-foreground text-sm">
              Track forms, clicks, and booking events. Feed remarketing and follow-up sequences so
              no-shows and partial leads get a second chance.
            </p>
          </Card>
        </CardGrid>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Why the Website Matters Here</h2>
        <StepList>
          <Step number={1} title="Search + Maps Beat a Pretty Grid">
            Instagram helps discovery, but high-intent traffic still searches &ldquo;med spa near
            me&rdquo; or &ldquo;balayage [city].&rdquo; The site must close the loop with services,
            proof, and booking.
          </Step>
          <Step number={2} title="First Impression = Quality Signal">
            Guests assume treatment quality from digital polish. A slow or confusing site costs
            appointments before anyone reads a caption.
          </Step>
          <Step number={3} title="Differentiation in a Crowded Market">
            Most competitors run template booking pages. A fast, structured Obsidion site
            immediately reads as more professional than the salon three doors down.
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="warning" title="Key Talking Point">
        &ldquo;Your website is your always-on receptionist: it answers questions, shows proof, and
        takes bookings while you are with clients. We deploy that system in about 7 days.&rdquo;
      </HighlightBox>

      <NavButtons currentModuleId={3} />
    </div>
  );
}

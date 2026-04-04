import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StepList, Step } from "@/components/ui/StepList";

export default function ContractorsModule02Website() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 03 — Products
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Website Buildout</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          The foundation of the infrastructure. A contractor website is where high-intent homeowners
          decide whether to call, request an estimate, or keep scrolling. It must convert traffic,
          build trust, and represent the brand with proof.
        </p>
      </div>

      <div>
        <CardGrid cols={3}>
          <Card>
            <h3 className="text-lg font-bold mb-2">Contractor-Native Design</h3>
            <p className="text-muted-foreground text-sm">
              Custom layouts for service listings, project galleries, service areas, and emergency
              CTAs—no generic templates. Homeowners understand what the contractor does in seconds.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Before &amp; After Galleries</h3>
            <p className="text-muted-foreground text-sm">
              Portfolio proof is how contractors win trust before a first conversation. Renovation,
              roofing, painting, landscaping—visual proof closes estimates before the call.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Estimate Request &amp; Lead Capture</h3>
            <p className="text-muted-foreground text-sm">
              Smart forms that route leads correctly, with CRM integration so nothing falls through
              and automated follow-up triggers immediately.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Service Area Architecture</h3>
            <p className="text-muted-foreground text-sm">
              Dedicated location and service-area pages so the site ranks in every city and
              neighborhood they serve—not just the zip code of their shop.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Trust Signals</h3>
            <p className="text-muted-foreground text-sm">
              Licensing, insurance, certifications, accreditations, and associations displayed
              prominently—the signals homeowners check before letting anyone into their home.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2">Mobile-First &amp; Fast</h3>
            <p className="text-muted-foreground text-sm">
              Most jobs are found on a phone, often in moments of stress. Click-to-call, fast loads,
              and thumb-friendly CTAs for the homeowner who needs someone now.
            </p>
          </Card>
        </CardGrid>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Why the Website Matters More in Home Services</h2>
        <StepList>
          <Step number={1} title="High-Intent, High-Stakes Moments">
            Burst pipes, roof damage after a storm, HVAC failure in August—these are not casual
            searches. Homeowners are stressed and decide fast. A poor site means they tap the next
            result.
          </Step>
          <Step number={2} title="Trust Before Entry">
            Letting a stranger into your home is a high-trust decision. The website is often the
            first vetting step—legitimacy, photos of real work, reviews, and visible credentials
            close that gap before the first call.
          </Step>
          <Step number={3} title="Local Competition Is Weak">
            Most contractor sites are outdated, slow, and disconnected from any marketing system.
            An Obsidion deployment immediately elevates the client above local competitors who are
            still running on word-of-mouth alone.
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="warning" title="Key Talking Point">
        &ldquo;Your website is your best estimator. It answers the questions that stop the call,
        builds trust before you arrive, and we deploy it in about 7 days—not a quarter.&rdquo;
      </HighlightBox>

      <NavButtons currentModuleId={2} />
    </div>
  );
}

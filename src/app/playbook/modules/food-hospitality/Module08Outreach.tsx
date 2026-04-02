import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StepList, Step } from "@/components/ui/StepList";

export default function Module08Outreach() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 08 — Sales
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Outreach Strategy</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Two lanes: warm relationships (fastest closes) and cold social outreach (volume). Chefs,
          owners, and GMs respond to specificity—never spray-and-paste pitches.
        </p>
      </div>

      <CardGrid cols={2}>
        <Card variant="green">
          <h3 className="text-lg font-bold mb-2">Warm network (priority)</h3>
          <p className="text-muted-foreground text-sm">
            Industry friends, former colleagues, suppliers, and regulars who opened a place. Lead
            with genuine check-ins. Let them admit where the website, reviews, or follow-up is
            broken—then introduce Obsidion.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold mb-2">Instagram &amp; local cold</h3>
          <p className="text-muted-foreground text-sm">
            Operators live on IG. DMs work when you reference a dish, pop-up, or brand moment they
            posted—not when you pitch in message one.
          </p>
        </Card>
      </CardGrid>

      <div>
        <h2 className="text-2xl font-bold mb-6">Warm network approach</h2>
        <StepList>
          <Step number={1} title="Re-open the relationship">
            Ask how service, staffing, or the new menu wave is going. Listen for marketing pain
            without interrogating.
          </Step>
          <Step number={2} title="Surface operational friction">
            Probe gently: reservations flow, catering leads sitting in Gmail, one-star reviews
            unanswered, wrong menu on Google. Their words become your headline.
          </Step>
          <Step number={3} title="Offer the bridge">
            "I work with a team that ships full digital systems for restaurants—site, local SEO, and
            the text/email stuff that fills slow nights. Happy to intro if you want a second
            opinion on what you have today."
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="info" title="Instagram DM framework (cold)">
        "Hey [Name] — loved the [specific dish / collab / truck location post]. Quick question: are
        you happy with how reservations and catering inquiries flow from the site, or is that still
        a pain? I work with a crew that builds serious hospitality systems in [market] and your
        brand stood out."
      </HighlightBox>

      <div className="p-6 bg-muted/40 rounded-xl border border-dashed text-sm text-muted-foreground">
        <strong className="text-foreground">Execution protocol:</strong> Short messages. One
        specific compliment. One question. Aim for a reply—then move to voice or in-person.
      </div>

      <NavButtons currentModuleId={8} />
    </div>
  );
}

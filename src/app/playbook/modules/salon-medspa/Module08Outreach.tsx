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
          You have two primary channels: warm network (fastest trust) and Instagram cold outreach
          (where owners and lead stylists already spend time). Execute them differently.
        </p>
      </div>

      <CardGrid cols={2}>
        <Card variant="green">
          <h3 className="text-lg font-bold mb-2">Warm Network (Priority)</h3>
          <p className="text-muted-foreground text-sm">
            Use real relationships—former clients, industry friends, vendor circles. Lead with
            curiosity about how booking, reviews, and retention are going before you pitch.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold mb-2">Instagram Cold Outreach</h3>
          <p className="text-muted-foreground text-sm">
            Personalize every DM. Reference a specific service, stylist, or campaign you genuinely
            noticed. Templates get ignored; specificity gets replies.
          </p>
        </Card>
      </CardGrid>

      <div>
        <h2 className="text-2xl font-bold mb-6">Warm Network Approach</h2>
        <StepList>
          <Step number={1} title="Initiate Genuine Dialogue">
            Reconnect before you pitch. &ldquo;How is the salon holding up this season?&rdquo; or
            &ldquo;Are you still slammed on Saturdays?&rdquo; surfaces stress before you offer a
            system.
          </Step>
          <Step number={2} title="Identify Operational Friction">
            Ask about no-shows, booking leaks, review droughts, or &ldquo;we post but the phone does
            not ring.&rdquo; Their exact frustration becomes your hook.
          </Step>
          <Step number={3} title="Introduce the Solution">
            &ldquo;I work with a team that builds the full digital layer for salons and med spas—site,
            local SEO, and the automated follow-ups most owners never turn on.&rdquo; Pause. Let them
            pull you forward.
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="info" title="Instagram DM Framework (Cold)">
        &ldquo;Hey [Name] — love the work on [specific cut / campaign / interior detail]. Quick
        question: is your site actually pulling local bookings, or is Instagram doing all the heavy
        lifting? I work with a team that deploys serious systems for salons in [area]—your brand
        stood out.&rdquo;
      </HighlightBox>

      <HighlightBox variant="info" title="Execution Protocol">
        Be concise. Personalize the opening. Ask a question instead of declaring a monologue. The
        goal is a reply, not a read receipt.
      </HighlightBox>

      <NavButtons currentModuleId={8} />
    </div>
  );
}

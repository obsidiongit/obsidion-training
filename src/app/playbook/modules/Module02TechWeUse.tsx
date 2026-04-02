import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";

export default function Module02TechWeUse() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 02 — Foundation</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Tech We Use</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          You will live in a small set of systems every day. You do not need to be an admin in all of
          them on day one—know what each category is for and who to ask when something breaks.
        </p>
      </div>

      <CardGrid cols={2}>
        <Card variant="green">
          <h3 className="text-lg font-bold mb-2">CRM</h3>
          <p className="text-sm font-medium text-accent mb-2">Obsidion CRM (workspace name assigned at onboarding)</p>
          <p className="text-muted-foreground text-sm">
            Houses accounts, contacts, deal stages, notes, and handoff to delivery. This is the source
            of truth for pipeline and commission-eligible revenue.
          </p>
        </Card>
        <Card variant="green">
          <h3 className="text-lg font-bold mb-2">Dialer / phone</h3>
          <p className="text-sm font-medium text-accent mb-2">Cloud voice stack (carrier + softphone)</p>
          <p className="text-muted-foreground text-sm">
            Outbound and inbound calling with recording and disposition where enabled. Use it for
            scheduled demos and follow-ups—not random cold blitzes without a list.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold mb-2">Project management</h3>
          <p className="text-sm font-medium text-accent mb-2">Delivery board (e.g. Obsidion Projects)</p>
          <p className="text-muted-foreground text-sm">
            Tracks website build tasks, SEO onboarding, and client milestones after the sale. You
            reference this when a prospect asks &quot;what happens after we sign?&quot;
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold mb-2">Design & creative</h3>
          <p className="text-sm font-medium text-accent mb-2">Brand workspace + asset library</p>
          <p className="text-muted-foreground text-sm">
            Logos, banners, mockup requests, and brand guidelines live here. Pull approved assets
            for proposals and emails—do not invent off-brand graphics.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold mb-2">Communication</h3>
          <p className="text-sm font-medium text-accent mb-2">Slack (or Teams) + company email</p>
          <p className="text-muted-foreground text-sm">
            Day-to-day coordination with managers, marketing, and delivery. Sensitive client
            details and anything contractual belong in CRM and email, not DMs.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold mb-2">Vertical & integrations</h3>
          <p className="text-sm font-medium text-accent mb-2">Industry connectors (territory-specific)</p>
          <p className="text-muted-foreground text-sm">
            POS, reservations, shop management, or compliance-adjacent tools your prospects
            already use. Your team lead will confirm which integrations and proof points matter for
            your patch.
          </p>
        </Card>
      </CardGrid>

      <HighlightBox variant="info" title="First-week setup">
        Your team lead will walk you through account creation, permissions, and where to log calls
        and notes. If you are missing access to any category above, open a single thread with your
        manager rather than working around the stack.
      </HighlightBox>

      <NavButtons currentModuleId={2} />
    </div>
  );
}

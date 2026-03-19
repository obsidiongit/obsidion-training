import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StepList, Step } from "@/components/ui/StepList";

export default function Module08Outreach() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 08 — Sales</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Outreach Strategy</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          You possess two primary acquisition channels: the warm network and Instagram cold outreach. Execute them differently.
        </p>
      </div>

      <CardGrid cols={2}>
        <Card variant="green">
          <h3 className="text-lg font-bold mb-2">Warm Network (Priority)</h3>
          <p className="text-muted-foreground text-sm">
            Leverage existing relationships from prior industry experience. Prioritize the dialogue, not the pitch. Extract their current operational status. Let the conversation arrive at the solution organically.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold mb-2">Instagram Cold Outreach</h3>
          <p className="text-muted-foreground text-sm">
            Cannabis operators inhabit Instagram. DMs convert only if personalized. Do not deploy copy-paste templates. Reference specific brand details before initiating the pitch.
          </p>
        </Card>
      </CardGrid>

      <div>
        <h2 className="text-2xl font-bold mb-6">Warm Network Approach</h2>
        <StepList>
          <Step number={1} title="Initiate Genuine Dialogue">
            Re-engage prior to pitching. "How is the [store / brand / season] performing?" extracts required intelligence regarding current constraints before introducing Obsidion.
          </Step>
          <Step number={2} title="Identify the Operational Frustration">
            Inquire about their website utility, marketing infrastructure, and follow-up protocols. Analyze their complaints. Their specific frustration forms the foundation of your pitch.
          </Step>
          <Step number={3} title="Introduce the Solution">
            "I work alongside an organization executing this exact framework for dispensaries. The operation is highly legitimate." Pause. Allow them to request details.
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="info" title="Instagram DM Framework (Cold)">
        "Hey [Name] — excellent execution on [specific store/brand detail]. Quick question: does your current website architecture perform to your standards, or is that infrastructure due for an upgrade? I work with a team deploying serious systems for dispensaries across [state] — your operation stood out."
      </HighlightBox>

      <div className="p-6 bg-muted/40 rounded-xl border border-dashed text-sm text-muted-foreground">
        <strong className="text-foreground">Execution Protocol:</strong> Be concise. Personalize the opening. Present a question, not a statement. The goal is a reply, not a read receipt.
      </div>

      <NavButtons currentModuleId={8} />
    </div>
  );
}

import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StepList, Step } from "@/components/ui/StepList";

export default function ContractorsModule07Outreach() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 08 — Sales
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Outreach Strategy</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          You have two primary acquisition channels for contractor prospects: the warm network and
          social cold outreach. Execute them differently—one is a conversation, one is a door knock.
        </p>
      </div>

      <CardGrid cols={2}>
        <Card variant="green">
          <h3 className="text-lg font-bold mb-2">Warm Network (Priority)</h3>
          <p className="text-muted-foreground text-sm">
            Leverage existing relationships—suppliers, trade associations, Chamber connections,
            BNI groups, prior clients. Prioritize the dialogue, not the pitch. Understand their
            current operational pain before introducing Obsidion. Let the conversation arrive at
            the solution organically.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold mb-2">Social Cold Outreach</h3>
          <p className="text-muted-foreground text-sm">
            Contractors showcase their work daily on Facebook, Instagram, and Nextdoor.
            DMs convert only if personalized. Do not deploy copy-paste templates. Reference
            specific project photos, their service area, or a recent post before initiating
            the pitch.
          </p>
        </Card>
      </CardGrid>

      <div>
        <h2 className="text-2xl font-bold mb-6">Warm Network Approach</h2>
        <StepList>
          <Step number={1} title="Initiate Genuine Dialogue">
            Re-engage before pitching. &ldquo;How is the schedule looking heading into the season?&rdquo;
            or &ldquo;Did that storm last month bring in a lot of roofing calls?&rdquo; extracts intelligence
            about current constraints before introducing Obsidion.
          </Step>
          <Step number={2} title="Identify the Operational Frustration">
            Ask about their website, how they follow up on estimates, where their reviews stand,
            and how they handle slow weeks. Their specific frustration forms the foundation
            of your pitch.
          </Step>
          <Step number={3} title="Introduce the Solution">
            &ldquo;I work with a team that deploys exactly this kind of system for contractors. They
            handle the website, the SEO, the follow-up—all of it. Real operation.&rdquo; Pause. Let
            them ask for details.
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="info" title="Instagram / Facebook DM Framework (Cold)">
        &ldquo;Hey [Name]—great work on [specific project or photo reference]. Quick question: does
        your current website actually bring in calls, or is it mostly just sitting there? I work
        with a team deploying real digital systems for contractors across [area]—your operation
        stood out.&rdquo;
      </HighlightBox>

      <div>
        <h2 className="text-2xl font-bold mb-6">Where to Find Contractor Prospects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              channel: "Warm Network",
              examples: "Suppliers, previous clients, Chamber of Commerce, BNI, trade associations",
            },
            {
              channel: "Instagram & Facebook",
              examples: "Before/after posts, local trade community groups, project showcases",
            },
            {
              channel: "Nextdoor & Local Groups",
              examples: "Community recommendation threads, neighborhood contractor searches",
            },
            {
              channel: "LinkedIn",
              examples: "Commercial contractors, property managers, franchise development contacts",
            },
            {
              channel: "Google Maps",
              examples:
                "Search your target trade in your target area—identify who lacks reviews, has a weak site, or is not ranking",
            },
            {
              channel: "Referral Partners",
              examples:
                "Real estate agents, property managers, insurance adjusters—people who recommend contractors constantly",
            },
          ].map((item) => (
            <div key={item.channel} className="p-4 rounded-xl border bg-card">
              <div className="font-bold text-sm mb-1">{item.channel}</div>
              <div className="text-xs text-muted-foreground">{item.examples}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-muted/40 rounded-xl border border-dashed text-sm text-muted-foreground">
        <strong className="text-foreground">Execution Protocol:</strong> Be concise. Personalize
        the opening. Present a question, not a statement. The goal is a reply that starts a
        conversation—not a read receipt on a pitch deck.
      </div>

      <NavButtons currentModuleId={7} />
    </div>
  );
}

import { Card, CardGrid } from "@/components/ui/Card";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";
import { StepList, Step } from "@/components/ui/StepList";

export default function Module08Outreach() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 11 — Sales</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Outreach Strategy</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          You possess two primary acquisition channels: the warm network and Instagram cold outreach.
          Execute them differently. Follow up with discipline.
        </p>
      </div>

      {/* ── Channel Overview ── */}
      <CardGrid cols={2}>
        <Card variant="green">
          <h3 className="text-lg font-bold mb-2">Warm Network (Priority)</h3>
          <p className="text-muted-foreground text-sm">
            Leverage existing relationships from prior industry experience. Prioritize the dialogue,
            not the pitch. Extract their current operational status. Let the conversation arrive at
            the solution organically.
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold mb-2">Instagram Cold Outreach</h3>
          <p className="text-muted-foreground text-sm">
            Cannabis operators inhabit Instagram. DMs convert only if personalized. Do not deploy
            copy-paste templates. Reference specific brand details before initiating the pitch.
          </p>
        </Card>
      </CardGrid>

      {/* ── Warm Network Approach ── */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Warm Network Approach</h2>
        <StepList>
          <Step number={1} title="Initiate Genuine Dialogue">
            Re-engage prior to pitching. "How is the [store / brand / season] performing?" extracts
            required intelligence regarding current constraints before introducing Obsidion.
          </Step>
          <Step number={2} title="Identify the Operational Frustration">
            Inquire about their website utility, marketing infrastructure, and follow-up protocols.
            Analyze their complaints. Their specific frustration forms the foundation of your pitch.
          </Step>
          <Step number={3} title="Introduce the Solution">
            "I work alongside an organization executing this exact framework for dispensaries. The
            operation is highly legitimate." Pause. Allow them to request details.
          </Step>
        </StepList>
      </div>

      <HighlightBox variant="info" title="Instagram DM Framework (Cold)">
        "Hey [Name] — excellent execution on [specific store/brand detail]. Quick question: does your
        current website architecture perform to your standards, or is that infrastructure due for an
        upgrade? I work with a team deploying serious systems for dispensaries across [state] — your
        operation stood out."
      </HighlightBox>

      {/* ── Phone/Call Script ── */}
      <div>
        <h2 className="text-2xl font-bold mb-2">First 5 Minutes of a Phone Call</h2>
        <p className="text-muted-foreground mb-6">
          Most reps lose the call in the opening. This script gets you through the first five minutes
          with control and credibility.
        </p>
        <div className="space-y-3">
          {[
            {
              label: "Open (0:00–0:30)",
              script:
                '"Hey [Name] — it\'s [Your Name] with Obsidion. I work with dispensaries across [state/region] on their websites, local SEO, and remarketing. I noticed [specific detail about their store/brand] and thought it was worth a quick call. Do you have 3 minutes?"',
              note: "Always ask permission. It resets their defensiveness and gets a verbal yes.",
            },
            {
              label: "Acknowledge & qualify (0:30–1:30)",
              script:
                '"Before I tell you anything about us — I\'d rather understand where you\'re at. Are you happy with the traffic your site is pulling in, or is that an area you\'re actively trying to improve?"',
              note: "Flip the conversation. Get them talking within 90 seconds.",
            },
            {
              label: "Bridge to pain (1:30–3:00)",
              script:
                '"Got it. A lot of operators we talk to are in the same spot — solid product, but the digital side either isn\'t converting or isn\'t keeping up with the store. Is that resonating at all, or does your current setup have that locked down?"',
              note: "Use their exact words back to them. Not your words.",
            },
            {
              label: "Position & set the next step (3:00–5:00)",
              script:
                '"We deploy the full stack — website, SEO, remarketing automations — specifically for cannabis operators. Average build is 7 days. I\'m not trying to pitch you right now, but it sounds like a 20-minute call where I can show you what we\'ve done for similar shops would be worth your time. What does your schedule look like this week?"',
              note: "Close for the meeting, not the deal.",
            },
          ].map((block) => (
            <div
              key={block.label}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <div className="px-4 py-2 border-b border-border bg-muted/30">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  {block.label}
                </span>
              </div>
              <div className="px-4 py-4 space-y-2">
                <p className="text-sm leading-relaxed text-foreground italic">{block.script}</p>
                <p className="text-xs text-muted-foreground">{block.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Discovery Call Framework ── */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Discovery Call Framework</h2>
        <p className="text-muted-foreground mb-6">
          Five questions that surface the information you need to build a compelling proposal.
          Ask them in order. Take notes.
        </p>
        <div className="space-y-3">
          {[
            {
              q: "What does your digital presence look like right now?",
              why: "Reveals current setup, vendor relationships, and self-awareness.",
            },
            {
              q: "Where are most of your new customers coming from — walk-in, Google, word of mouth, Weedmaps?",
              why: "Identifies which channel is already working and which ones are dead.",
            },
            {
              q: "How are you currently staying in contact with customers after their first visit?",
              why: "Exposes whether they have any remarketing. Most don't.",
            },
            {
              q: "What's the biggest operational headache on the marketing side right now?",
              why: "Gets you their language. Use it verbatim in your close.",
            },
            {
              q: "If you could double your online ordering volume in the next 90 days, what would that be worth to the business?",
              why: "Anchors the value of your solution before you name a price.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl border border-border bg-card">
              <div className="w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">{item.q}</p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground/70">Why: </span>
                  {item.why}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Follow-Up Cadence ── */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Follow-Up Cadence</h2>
        <p className="text-muted-foreground mb-6">
          Most deals die because nobody followed up. Three touches after the first conversation,
          spaced strategically. If they go dark after Day 14, move them to a monthly check-in.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="text-2xl font-black text-accent mb-1">Day 3</div>
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Value touch</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Send something useful — a relevant case study, a quick note on something you noticed on
              their GBP, or a specific question from your discovery call. Not a &ldquo;just checking in.&rdquo;
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="text-2xl font-black text-accent mb-1">Day 7</div>
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Direct ask</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              &ldquo;Hey [Name] — wanted to follow up on our conversation. I put together a quick breakdown
              of what we&rsquo;d do for [Store Name] specifically. Worth 15 minutes this week to walk through it?&rdquo;
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="text-2xl font-black text-accent mb-1">Day 14</div>
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Final push</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              &ldquo;Last follow-up from me for now — I know things get busy. If the timing ever shifts,
              I&rsquo;d love to reconnect. [Attach a one-liner on a recent result from a similar operator.]&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ── Closing Section ── */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Closing the Deal</h2>
        <p className="text-muted-foreground mb-6">
          Trial closes keep you informed of where the prospect actually stands. Use them throughout
          the conversation — not just at the end.
        </p>
        <div className="space-y-3">
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="px-4 py-2 border-b border-border bg-muted/30">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Temperature check</span>
            </div>
            <p className="px-4 py-4 text-sm text-foreground leading-relaxed italic">
              &ldquo;Based on what we&rsquo;ve talked about, does this seem like it could be a fit for where
              you&rsquo;re trying to take the business?&rdquo;
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="px-4 py-2 border-b border-border bg-muted/30">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Proposal trial close</span>
            </div>
            <p className="px-4 py-4 text-sm text-foreground leading-relaxed italic">
              &ldquo;If I sent over a proposal specific to your two locations — website + the Growth retainer
              — is that something you&rsquo;d be in a position to review this week?&rdquo;
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="px-4 py-2 border-b border-border bg-muted/30">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Objection flush</span>
            </div>
            <p className="px-4 py-4 text-sm text-foreground leading-relaxed italic">
              &ldquo;What would need to be true for this to be a clear yes for you?&rdquo;
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="px-4 py-2 border-b border-border bg-muted/30">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Proposal presentation</span>
            </div>
            <p className="px-4 py-4 text-sm text-foreground leading-relaxed italic">
              &ldquo;Here&rsquo;s what I&rsquo;d recommend for [Store Name]: Website buildout at $[X], which gets
              you live in 7 days. Then the Growth retainer at $997/month — SEO, remarketing, and reputation
              management. That&rsquo;s the package I&rsquo;d bet on for your volume. To move forward, it&rsquo;s just
              a 50% deposit on the setup and we schedule the kickoff call.&rdquo;
            </p>
          </div>
        </div>
      </div>

      <HighlightBox variant="info" title="Execution Protocol">
        Be concise. Personalize every touch. Present a question, not a statement. The goal at each
        stage is a reply and a next step — not a read receipt and silence.
      </HighlightBox>

      <NavButtons currentModuleId={11} />
    </div>
  );
}

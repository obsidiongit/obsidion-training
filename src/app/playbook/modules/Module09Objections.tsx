import { ObjectionCard } from "@/components/ui/ObjectionCard";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";

export default function Module09Objections() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl mx-auto space-y-12">
      <div className="text-center mb-12">
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 13 — Sales</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Objection Handling</h1>
        <p className="text-xl text-muted-foreground">
          Memorize these responses prior to your first conversation.
        </p>
      </div>

      <HighlightBox variant="info" title="Mindset First">
        An objection is not a rejection. It is a request for more information — or a signal that
        the prospect does not yet feel confident enough to move forward. Your job is not to argue.
        Your job is to acknowledge, clarify, and reframe. The reps who close at the highest rate
        are the ones who get comfortable saying "I hear you — let me address that specifically."
        Do not rush past objections. Slow down, name the concern, and answer it directly.
      </HighlightBox>

      <div className="space-y-4">
        <ObjectionCard
          objection="We already have a website."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "That is the baseline. The real question is performance. Does it rank when users search
                for dispensaries in your city? Does it capture leads and deploy follow-ups automatically?
                Most dispensary sites exist but provide zero utility. We can run a free performance audit
                immediately to identify the exact revenue gaps."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="We're working with someone already."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Understood. Are they executing the SEO and automation sequences, or strictly managing
                the design? The majority of vendors in this sector execute one vertical while neglecting
                the remainder. We deploy the complete stack. Operations upgrade to our infrastructure
                because piecing together multiple vendors fails at scale."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="We can't really advertise, so what's the point?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "That restriction is exactly why this infrastructure is mandatory. You cannot run paid
                acquisition campaigns, which isolates your website and Google presence as your sole
                legitimate acquisition channels. Furthermore, your existing customer list becomes your
                most valuable marketing asset. We convert both channels into active revenue systems."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="How do I know you actually understand cannabis?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Fair question. Our team possesses ownership and operational background inside the
                industry. We understand 280E, compliance variables per state, and the accurate customer
                journey. We are not corporate personnel reading market research. We have operated in
                the room."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="$5,000 is a lot / we don't have the budget."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Compare $5,000 against your average daily revenue. A properly optimized system
                captures customers you currently lose locally every day. If we increase your ranking,
                speed, and conversion rate marginally, the system pays for itself inside the first month.
                Competitors charge double and require 3 months to deliver. We deliver in 7 days. You
                cannot afford to delay the upgrade."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="What makes you different from competitors?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Speed, scope, and expertise. We deploy in 7 days, not months. We deliver the website,
                SEO, remarketing, and automation within one unified system, eliminating vendor fatigue.
                Finally, our operational cannabis background ensures we deploy solutions that actually
                serve the industry."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="Can I see your portfolio / do you have examples?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Absolutely — I'll send over a few live sites and results. One thing worth noting: many
                of our clients prefer we don't publicize the relationship because their competitors don't
                know who's running their digital. That's a good problem to have, and we respect it. I can
                walk you through what we built for a similar operator on a call — including the traffic
                and conversion numbers — so you see exactly what you're evaluating."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="I need to think about it / let me get back to you."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Of course — this is a real investment and I want you to be confident. Can I ask what
                specifically you're still weighing? If it's the price, the timeline, or something about
                the deliverables, I'd rather address it now so you have the full picture. Most of the
                time when someone says they need to think about it, there's one specific thing that
                isn't resolved yet. What's that for you?"
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="We're locked in a contract with someone else."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Completely understand — I'm not asking you to break anything. Two things worth knowing:
                first, when does that contract expire? Because we plan builds in advance and good slots
                fill up. Second, some operators run a parallel system — we handle the SEO and automation
                layer while the other vendor manages the design. It's not always an either/or. Either
                way, let's put a follow-up on the calendar so you're not scrambling when the contract
                ends."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="Can you guarantee results?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "I'll be straight with you — anyone who guarantees a specific rank or a specific revenue
                number is telling you what you want to hear. What I can tell you is what we've delivered
                for operators in your market, what our execution process looks like, and what typically
                happens within the first 60–90 days. I'd rather show you documented results from real
                clients than promise you a number I can't control. Want me to send those over before we
                talk next?"
              </p>
            </div>
          }
        />
      </div>

      <NavButtons currentModuleId={13} />
    </div>
  );
}

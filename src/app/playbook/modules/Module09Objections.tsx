import { ObjectionCard } from "@/components/ui/ObjectionCard";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { NavButtons } from "@/components/ui/NavButtons";

export default function Module09Objections() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-3xl mx-auto space-y-12">
      <div className="text-center mb-12">
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 09 — Sales</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Objection Handling</h1>
        <p className="text-xl text-muted-foreground">
          Memorize these responses prior to your first conversation.
        </p>
      </div>

      <div className="space-y-4">
        <ObjectionCard
          objection="We already have a website."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "That is the baseline. The real question is performance. Does it rank when users search for dispensaries in your city? Does it capture leads and deploy follow-ups automatically? Most dispensary sites exist but provide zero utility. We can run a free performance audit immediately to identify the exact revenue gaps."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="We're working with someone already."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Understood. Are they executing the SEO and automation sequences, or strictly managing the design? The majority of vendors in this sector execute one vertical while neglecting the remainder. We deploy the complete stack. Operations upgrade to our infrastructure because piecing together multiple vendors fails at scale."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="We can't really advertise, so what's the point?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "That restriction is exactly why this infrastructure is mandatory. You cannot run paid acquisition campaigns, which isolates your website and Google presence as your sole legitimate acquisition channels. Furthermore, your existing customer list becomes your most valuable marketing asset. We convert both channels into active revenue systems."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="How do I know you actually understand cannabis?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Fair question. Our team possesses ownership and operational background inside the industry. We understand 280E, compliance variables per state, and the accurate customer journey. We are not corporate personnel reading market research. We have operated in the room."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="$5,000 is a lot / we don't have the budget."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Compare $5,000 against your average daily revenue. A properly optimized system captures customers you currently lose locally every day. If we increase your ranking, speed, and conversion rate marginally, the system pays for itself inside the first month. Competitors charge double and require 3 months to deliver. We deliver in 7 days. You cannot afford to delay the upgrade."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="What makes you different from competitors?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Speed, scope, and expertise. We deploy in 7 days, not months. We deliver the website, SEO, remarketing, and automation within one unified system, eliminating vendor fatigue. Finally, our operational cannabis background ensures we deploy solutions that actually serve the industry."
              </p>
            </div>
          }
        />
      </div>

      <NavButtons currentModuleId={9} />
    </div>
  );
}

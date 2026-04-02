import { ObjectionCard } from "@/components/ui/ObjectionCard";
import { NavButtons } from "@/components/ui/NavButtons";

export default function Module09ObjectionsAutomotive() {
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
                &ldquo;That is the baseline. The real question is performance. Does it rank when users
                search for your core services in your city? Does it capture leads and deploy follow-ups
                automatically? Most shop sites exist but provide zero utility. We can run a performance
                audit immediately to identify the exact revenue gaps.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="We're working with someone already."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Understood. Are they executing the SEO and automation sequences, or strictly
                managing the design? The majority of vendors in this sector execute one vertical while
                neglecting the remainder. We deploy the complete stack. Operations upgrade to our
                infrastructure because piecing together multiple vendors fails at scale.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="We get enough from drive-bys and referrals—why spend on digital?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Referrals are gold—and they are not enough when bays go quiet, a competitor
                opens closer to the highway, or tire season hits. Search, maps, and your customer list
                are the channels you control. We turn those into active revenue systems alongside
                word of mouth.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="How do I know you actually understand automotive?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Fair question. We build for how shops run—ROs, seasonality, insurers, estimates,
                detail proof, and tire urgency. We are not corporate personnel reading generic
                playbooks. We speak the trade and ship infrastructure that matches it.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="$5,000 is a lot / we don't have the budget."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Compare $5,000 against your average daily revenue. A properly optimized system
                captures customers you currently lose locally every day. If we increase your ranking,
                speed, and conversion rate marginally, the system pays for itself inside the first
                month. Competitors charge double and require 3 months to deliver. We deliver in 7 days.
                You cannot afford to delay the upgrade.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="What makes you different from competitors?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Speed, scope, and expertise. We deploy in 7 days, not months. We deliver the
                website, SEO, remarketing, and automation within one unified system, eliminating vendor
                fatigue. Finally, our fluency with automotive operations ensures we deploy solutions
                that actually fill bays.&rdquo;
              </p>
            </div>
          }
        />
      </div>

      <NavButtons currentModuleId={9} />
    </div>
  );
}

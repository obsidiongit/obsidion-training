import { ObjectionCard } from "@/components/ui/ObjectionCard";
import { NavButtons } from "@/components/ui/NavButtons";

export default function ContractorsModule08Objections() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl mx-auto space-y-12">
      <div className="text-center mb-12">
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 09 — Sales
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Objection Handling</h1>
        <p className="text-xl text-muted-foreground">
          Memorize these responses before your first conversation. Every objection below has been
          pulled straight from contractor sales calls.
        </p>
      </div>

      <div className="space-y-4">
        <ObjectionCard
          objection="We get all our work from referrals."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Referrals are gold—and they are not enough on their own when a slow season hits,
                a competitor opens up nearby, or you want to grow beyond your current circle.
                Search, maps, and a systematic referral follow-up process add volume to word of
                mouth rather than replacing it. We turn your best referral sources into an engine
                that runs without you asking every time.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="We already have a website."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;That is the baseline. The real question is performance. Does it rank when
                homeowners search for your services in your area? Does it capture leads and
                deploy follow-up automatically? Most contractor sites exist but generate zero
                utility. We can run a performance audit immediately to identify the exact revenue
                gaps yours is creating.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="We tried SEO before and it didn't work."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;That is the most common story in this industry—because most SEO vendors
                deliver reports, not results. What they sold you was metrics. What actually moves
                the needle is a combination of a properly built site, active GBP management,
                service area pages, and review velocity. We own the whole system. If one piece
                fails, we fix it—not point fingers at a different vendor.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="We're too busy right now."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;That is the best time to lock in the infrastructure. When the season slows
                down—and it will—you want a site that is already ranking, a list that is already
                warmed up, and reviews that are already building. Setting this up during a busy
                season means it is working for you when volume naturally dips. The contractors
                who wait until things slow down to start digital are always 90 days behind.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="$5,000 is a lot / we don't have the budget right now."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Compare $5,000 against the value of a single mid-size job in your trade. A
                properly built and ranked site that captures two to three additional jobs per month
                pays for itself inside the first week it is live. Competitors charge double and
                require three months to deliver. We are live in seven days. You cannot afford to
                keep losing those leads to whoever is ranking above you right now.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="We're working with someone already."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Understood. Are they handling the SEO and follow-up automations, or strictly
                managing the design? Most vendors in this space execute one piece while neglecting
                the rest. We deploy the complete stack. Contractors upgrade to our infrastructure
                because piecing together multiple vendors fails at scale—and someone always drops
                the ball when a lead comes in.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="What makes you different from every other agency that calls me?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Speed, scope, and fluency in your trade. We deploy in seven days, not months.
                We own the website, local SEO, remarketing, and automation in one system—no vendor
                fragmentation. And we speak contractor: service areas, estimate pipelines,
                seasonality, referral culture, and what homeowners actually check before they call.
                That is not what you hear from agencies reading generic playbooks.&rdquo;
              </p>
            </div>
          }
        />
      </div>

      <NavButtons currentModuleId={8} />
    </div>
  );
}

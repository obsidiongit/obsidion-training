import { ObjectionCard } from "@/components/ui/ObjectionCard";
import { NavButtons } from "@/components/ui/NavButtons";

export default function Module09Objections() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-3xl mx-auto space-y-12">
      <div className="text-center mb-12">
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 09 — Sales
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Objection Handling</h1>
        <p className="text-xl text-muted-foreground">
          Memorize these before your first hospitality conversation.
        </p>
      </div>

      <div className="space-y-4">
        <ObjectionCard
          objection="We already have a website."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Totally—and the question is whether it earns its keep. Does it rank for what you
                sell? Do catering leads get answered in minutes? Is the menu accurate on mobile? Most
                sites exist but leak covers. We can audit the gaps in one pass if you want a second
                opinion."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="We're working with someone already."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Makes sense. Are they running local SEO, review velocity, and SMS/email automations
                together—or mostly just design updates? A lot of shops get half the stack and still
                juggle three vendors. We unify it so nothing falls between chairs."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="We run everything through Instagram."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Instagram is huge—but search and maps still drive first-time guests who have never
                seen your reel. You also do not own that audience. We make sure Google, your site,
                and your list work together so IG is additive, not your only lifeline."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="How do I know you understand restaurants (or bars / trucks / catering)?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Fair question. We build for operations: reservations, shifts, catering pipelines,
                multi-location menus, and the speed guests expect on their phones. This is not
                generic corporate marketing—it's infrastructure for how hospitality actually makes
                money."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="$5,000 is a lot / we don't have the budget."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Stack it against a slow weekend or one lost catering job. If we tighten local
                discovery and capture leads you currently miss, the setup pays back fast—and we ship
                in about a week, not a quarter. Delaying is usually more expensive than the invoice."
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="What makes you different from competitors?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                "Speed, scope, and one team. Seven-day launches, not endless redesigns. Website plus
                local SEO plus remarketing in one system—not three companies pointing fingers. If you
                need an app later, it shares the same backbone. That's the difference operators feel
                week one."
              </p>
            </div>
          }
        />
      </div>

      <NavButtons currentModuleId={9} />
    </div>
  );
}

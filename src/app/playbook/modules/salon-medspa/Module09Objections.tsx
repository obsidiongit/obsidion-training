import { ObjectionCard } from "@/components/ui/ObjectionCard";
import { NavButtons } from "@/components/ui/NavButtons";

export default function Module09Objections() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl mx-auto space-y-12">
      <div className="text-center mb-12">
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 13 — Sales
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Objection Handling</h1>
        <p className="text-xl text-muted-foreground">
          Memorize these before your first salon or med spa conversation.
        </p>
      </div>

      <div className="space-y-4">
        <ObjectionCard
          objection="We already have a website."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Totally—and the question is whether it books. Does it rank for your core
                services? Do new guests find providers and treatments on mobile in seconds? Most
                salon sites are pretty but passive. We can walk a quick performance pass if you want a
                second opinion.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="We're working with someone already."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Makes sense. Are they owning local SEO, review velocity, and SMS/email
                follow-ups together—or mostly design tweaks? A lot of studios still juggle three
                vendors. We unify the stack so nothing falls between chairs.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="We fill the book from Instagram / word of mouth."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;That is strength, not a reason to skip infrastructure. Search and maps still
                drive first-time guests who have never seen your feed—and you do not own the IG
                algorithm. We make Google, your site, and your list work so social is additive, not
                your only pipeline.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="How do I know you understand salons / med spas?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Fair question. We build for how you operate: booking software, provider pages,
                treatment menus, compliance-conscious med spa structure, and the speed guests expect on
                their phones. This is operational infrastructure—not generic corporate marketing.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="$5,000 is a lot / we don't have the budget."
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Stack it against a slow week of chairs or a few lost high-ticket med spa
                consults. If we tighten local discovery and capture leads you currently miss, setup
                pays back fast—and we ship in about a week. Waiting usually costs more than the
                invoice.&rdquo;
              </p>
            </div>
          }
        />

        <ObjectionCard
          objection="What makes you different from competitors?"
          rebuttal={
            <div className="space-y-3">
              <p className="text-muted-foreground leading-relaxed">
                &ldquo;Speed, scope, one team. ~7-day launches, not endless redesigns. Website, local
                SEO, and remarketing in one system—not three companies pointing fingers. If you want an
                app later, it shares the same backbone. That is what owners feel in week one.&rdquo;
              </p>
            </div>
          }
        />
      </div>

      <NavButtons currentModuleId={13} />
    </div>
  );
}

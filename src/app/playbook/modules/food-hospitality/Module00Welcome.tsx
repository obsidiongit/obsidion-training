import { NavButtons } from "@/components/ui/NavButtons";
import { HighlightBox } from "@/components/ui/HighlightBox";

export default function Module00Welcome() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Obsidion // Food & Hospitality
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
          Food & Hospitality Playbook
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Your sales guide for restaurants, bars, catering, food trucks, and related hospitality
          concepts. Read it start to finish once. Use it as a reference before every conversation.
          By the end, you will know the product, the pitch, and the close.
        </p>
      </div>

      <HighlightBox variant="info" title="How to use this playbook">
        <ol className="list-decimal list-inside space-y-2 text-[15px] leading-relaxed">
          <li>
            Go in order the first time (modules 0→16) so context builds the way it was written.
          </li>
          <li>
            After that, jump to any section from the sidebar—before calls, use Quick Reference and
            Objections most.
          </li>
          <li>
            Finish the knowledge check at the end; passing marks the playbook complete on this
            device.
          </li>
        </ol>
      </HighlightBox>

      <HighlightBox variant="info" title="By the end you will be able to">
        <ul className="list-disc list-inside space-y-1.5 text-[15px] leading-relaxed">
          <li>
            Explain Obsidion’s hospitality stack: site, local SEO, remarketing, and optional app
          </li>
          <li>Quote realistic setup, retainer, and app pricing with confidence</li>
          <li>Run warm outreach and handle the most common objections for food & beverage</li>
          <li>Use the quick reference before live conversations</li>
        </ul>
      </HighlightBox>

      <HighlightBox variant="info" title="Your edge">
        Operators are busy, margin-conscious, and burned by slow agencies. You bring a full digital
        operating system that launches fast and fits how guests actually find them—search, maps,
        social, and their inbox. That combination wins.
      </HighlightBox>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-xl border bg-card text-center">
          <div className="text-2xl font-black text-accent mb-1">$5K–$12K</div>
          <div className="text-xs text-muted-foreground">Website buildout range</div>
        </div>
        <div className="p-6 rounded-xl border bg-card text-center">
          <div className="text-2xl font-black text-accent mb-1">$597–$1,497</div>
          <div className="text-xs text-muted-foreground">Monthly retainer per client</div>
        </div>
        <div className="p-6 rounded-xl border bg-card text-center">
          <div className="text-2xl font-black text-accent mb-1">$15K–$25K</div>
          <div className="text-xs text-muted-foreground">Premium mobile app</div>
        </div>
        <div className="p-6 rounded-xl border bg-card text-center">
          <div className="text-2xl font-black text-accent mb-1">7 days</div>
          <div className="text-xs text-muted-foreground">Average delivery timeline</div>
        </div>
      </div>

      <NavButtons currentModuleId={0} />
    </div>
  );
}

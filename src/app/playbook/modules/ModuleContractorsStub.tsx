import { NavButtons } from "@/components/ui/NavButtons";
import { HighlightBox } from "@/components/ui/HighlightBox";

export default function ModuleContractorsStub() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Obsidion // Contractors
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
          Contractors Playbook
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          This vertical playbook is in progress. When modules are ready, they will appear in the
          sidebar like the Cannabis Playbook.
        </p>
      </div>

      <HighlightBox variant="info" title="Placeholder">
        Use this playbook slot to add modules for home services, general contractors, and related
        verticals. The routing and progress tracking are already wired per playbook.
      </HighlightBox>

      <NavButtons currentModuleId={0} />
    </div>
  );
}

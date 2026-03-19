import { Quiz } from "@/components/Quiz";
import { NavButtons } from "@/components/ui/NavButtons";

export default function Module11Quiz() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12 pb-20">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">Module 11 — Assessment</div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
          Knowledge Check
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Verify your comprehension of the Playbook systems. You must score at least 9/12 to proceed.
        </p>
      </div>

      <div className="mt-8">
        <Quiz />
      </div>

      <NavButtons currentModuleId={11} />
    </div>
  );
}

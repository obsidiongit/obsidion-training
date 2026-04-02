"use client";

import { Quiz } from "@/components/Quiz";
import { NavButtons } from "@/components/ui/NavButtons";
import { usePlaybook } from "@/components/PlaybookContext";

export default function Module11Quiz() {
  const playbook = usePlaybook();
  const n = playbook.quizQuestions.length;
  const need = playbook.quizPassCount;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12 pb-20">
      <div>
        <div className="text-sm font-semibold tracking-wider text-accent uppercase mb-3">
          Module 11 — Assessment
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-foreground">
          Knowledge Check
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Verify your comprehension of the Food &amp; Hospitality playbook. Score at least {need}/
          {n} to mark this playbook complete on this device and unlock the completion actions below.
        </p>
      </div>

      <div className="mt-8">
        <Quiz />
      </div>

      <NavButtons currentModuleId={11} />
    </div>
  );
}

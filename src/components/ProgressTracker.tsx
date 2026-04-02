"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { usePlaybook } from "@/components/PlaybookContext";
import { readProgress, writeProgress } from "@/lib/progressStorage";

export default function ProgressTracker() {
  const pathname = usePathname();
  const playbook = usePlaybook();

  useEffect(() => {
    const match = pathname?.match(/\/playbooks\/[^/]+\/(\d+)/);
    if (!match) return;

    const moduleId = parseInt(match[1], 10);
    const quizId = playbook.quizModuleId;
    if (quizId !== null && moduleId === quizId) return;

    try {
      const completed = readProgress(playbook.slug);
      if (!completed.includes(moduleId)) {
        const next = [...completed, moduleId];
        writeProgress(playbook.slug, next);
        window.dispatchEvent(new Event("progress-updated"));
      }
    } catch (e) {
      console.error("Error setting progress", e);
    }
  }, [pathname, playbook.slug, playbook.quizModuleId]);

  return null;
}

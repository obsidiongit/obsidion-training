"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ProgressTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const match = pathname?.match(/\/playbook\/(\d+)/);
    if (!match) return;
    
    const moduleId = parseInt(match[1], 10);
    
    // We don't auto-complete the quiz (Module 11) - that happens only upon passing
    if (moduleId === 11) return;

    try {
      const saved = localStorage.getItem('obsidion-progress');
      const completed = saved ? JSON.parse(saved) : [];
      
      if (!Array.isArray(completed)) return;
      
      if (!completed.includes(moduleId)) {
        const newCompleted = [...completed, moduleId];
        localStorage.setItem('obsidion-progress', JSON.stringify(newCompleted));
        window.dispatchEvent(new Event('progress-updated'));
      }
    } catch (e) {
      console.error("Error setting progress", e);
    }
  }, [pathname]);

  return null;
}

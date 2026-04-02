"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CheckCircle2, Circle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect, useMemo } from "react";
import { usePlaybook } from "@/components/PlaybookContext";
import { readProgress, clearProgress } from "@/lib/progressStorage";

export default function Sidebar() {
  const pathname = usePathname();
  const playbook = usePlaybook();
  const [isOpen, setIsOpen] = useState(false);
  const [completedModules, setCompletedModules] = useState<number[]>([]);

  const pathMatch = pathname.match(/\/playbooks\/([^/]+)\/(\d+)/);
  const currentModuleId = pathMatch ? parseInt(pathMatch[2], 10) : null;

  const currentModule = useMemo(
    () => playbook.modules.find((m) => m.id === currentModuleId),
    [playbook.modules, currentModuleId],
  );

  useEffect(() => {
    const loadProgress = () => {
      setCompletedModules(readProgress(playbook.slug));
    };

    loadProgress();
    window.addEventListener("progress-updated", loadProgress);
    return () => window.removeEventListener("progress-updated", loadProgress);
  }, [playbook.slug]);

  const progressPercent = Math.round(
    (completedModules.length / playbook.modules.length) * 100,
  );

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const handleResetProgress = () => {
    if (
      typeof window !== "undefined" &&
      !window.confirm("Clear all progress for this playbook on this device?")
    ) {
      return;
    }
    clearProgress(playbook.slug);
    setCompletedModules([]);
    window.dispatchEvent(new Event("progress-updated"));
  };

  const base = `/playbooks/${playbook.slug}`;

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 h-20 bg-background border-b z-50 flex items-center gap-3 px-4">
        <div
          className="overflow-hidden -mt-1 -mb-1 -ml-1 flex items-center shrink-0"
          style={{ height: "80px", width: "175px" }}
        >
          <img
            src="/logos/logo.png"
            alt="Obsidion"
            className="block w-full h-full object-contain object-center"
          />
        </div>
        <div className="flex-1 min-w-0 pr-2">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground truncate">
            {playbook.sidebarLabel}
          </p>
          {currentModule ? (
            <p className="text-sm font-semibold text-foreground truncate leading-tight">
              {currentModule.id}. {currentModule.title}
            </p>
          ) : (
            <p className="text-sm text-muted-foreground truncate">Training</p>
          )}
        </div>
        <button type="button" onClick={toggleSidebar} className="p-2 -mr-2 shrink-0">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-background border-r transform transition-transform duration-300 ease-in-out md:translate-x-0 flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="px-6 pt-4 pb-3 border-b hidden md:flex md:flex-col gap-1">
          <Link href="/" className="block">
            <div className="overflow-hidden -mt-2 -mx-1" style={{ height: "163px" }}>
              <img
                src="/logos/logo.png"
                alt="Obsidion"
                className="block w-full h-full object-contain object-center"
              />
            </div>
          </Link>
          <p className="text-sm text-muted-foreground font-medium">{playbook.sidebarLabel}</p>
        </div>

        <div className="p-6 border-b bg-muted/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Progress
            </span>
            <span className="text-xs font-bold">{progressPercent}%</span>
          </div>
          <div className="h-2 w-full bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          {progressPercent === 100 && (
            <p className="text-xs text-emerald-accent font-medium mt-2">Playbook complete</p>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
          {playbook.moduleSections.map((sectionName) => {
            const sectionModules = playbook.modules.filter((m) => m.section === sectionName);
            if (sectionModules.length === 0) return null;

            return (
              <div key={sectionName}>
                <h3 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {sectionName}
                </h3>
                <div className="space-y-1">
                  {sectionModules.map((module) => {
                    const isActive = pathname === `${base}/${module.id}`;
                    const isCompleted = completedModules.includes(module.id);

                    return (
                      <Link
                        key={module.id}
                        href={`${base}/${module.id}`}
                        onClick={closeSidebar}
                        className={cn(
                          "group flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors",
                          isActive
                            ? "bg-accent/10 text-accent font-semibold"
                            : "text-foreground hover:bg-muted",
                        )}
                      >
                        <span className="truncate mr-2">
                          {module.id}. {module.title}
                        </span>
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-accent flex-shrink-0" />
                        ) : isActive ? (
                          <Circle className="w-4 h-4 text-accent flex-shrink-0 fill-accent w-[8px] h-[8px] mx-1" />
                        ) : null}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="p-4 border-t mt-auto">
          <Link
            href="/"
            className="text-xs text-muted-foreground hover:text-foreground font-medium block mb-3"
            onClick={closeSidebar}
          >
            ← All playbooks
          </Link>
          <button
            type="button"
            onClick={handleResetProgress}
            className="text-xs text-muted-foreground hover:text-amber-accent underline underline-offset-2"
          >
            Reset progress (this device)
          </button>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden backdrop-blur-sm"
          onClick={closeSidebar}
          aria-hidden
        />
      )}
    </>
  );
}

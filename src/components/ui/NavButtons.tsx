"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePlaybook } from "@/components/PlaybookContext";

export function NavButtons({ currentModuleId }: { currentModuleId: number }) {
  const playbook = usePlaybook();
  const pathname = usePathname();
  const { slug, modules } = playbook;

  // Determine base URL: new role-scoped route takes precedence over legacy route
  const rolePathMatch = pathname.match(/\/role\/([^/]+)\/playbooks\//);
  const base = rolePathMatch
    ? `/role/${rolePathMatch[1]}/playbooks/${slug}`
    : `/playbooks/${slug}`;

  const currentIndex = modules.findIndex((m) => m.id === currentModuleId);
  const prevModule = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextModule =
    currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-16 pt-8 border-t border-border">
      {prevModule ? (
        <Link
          href={`${base}/${prevModule.id}`}
          className="flex-1 flex items-center justify-start gap-3 p-4 rounded-xl border border-transparent hover:border-border hover:bg-muted/30 transition-all group"
        >
          <div className="bg-background rounded-full p-2 border shadow-sm group-hover:-translate-x-1 transition-transform">
            <ArrowLeft className="w-4 h-4 text-muted-foreground" />
          </div>
          <div>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">
              Previous
            </div>
            <div className="text-sm font-medium text-foreground">{prevModule.title}</div>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {nextModule ? (
        <Link
          href={`${base}/${nextModule.id}`}
          className="flex-1 flex items-center justify-end text-right gap-3 p-4 rounded-xl border border-transparent hover:border-border hover:bg-muted/30 transition-all group"
        >
          <div>
            <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-0.5">
              Next Module
            </div>
            <div className="text-sm font-medium text-foreground">{nextModule.title}</div>
          </div>
          <div className="bg-accent rounded-full p-2 border-accent shadow-sm group-hover:translate-x-1 transition-transform">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}

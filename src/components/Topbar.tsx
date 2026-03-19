"use client";

import { usePathname } from 'next/navigation';
import { PLAYBOOK_MODULES } from '@/data/playbook-modules';

export default function Topbar() {
  const pathname = usePathname();
  const moduleIdMatch = pathname.match(/\/playbook\/(\d+)/);
  const currentModuleId = moduleIdMatch ? parseInt(moduleIdMatch[1], 10) : null;
  
  const currentModule = PLAYBOOK_MODULES.find(m => m.id === currentModuleId);

  if (!currentModule) return null;

  return (
    <header className="sticky top-0 z-20 w-full bg-background/80 backdrop-blur-md border-b flex items-center h-16 px-6 hidden md:flex">
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-0.5">
          {currentModule.eyebrow}
        </span>
        <h2 className="text-sm font-medium text-foreground">
          {currentModule.title}
        </h2>
      </div>
    </header>
  );
}

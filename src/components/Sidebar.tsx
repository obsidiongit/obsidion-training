"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CheckCircle2, Circle, Menu, X } from 'lucide-react';
import { PLAYBOOK_MODULES, MODULE_SECTIONS } from '@/data/playbook-modules';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [completedModules, setCompletedModules] = useState<number[]>([]);

  // React to progress updates
  useEffect(() => {
    const loadProgress = () => {
      const saved = localStorage.getItem('obsidion-progress');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) setCompletedModules(parsed);
        } catch (e) {}
      }
    };

    // Load initial
    loadProgress();

    // Listen for updates from ProgressTracker or Quiz
    window.addEventListener('progress-updated', loadProgress);
    return () => window.removeEventListener('progress-updated', loadProgress);
  }, []);

  const progressPercent = Math.round((completedModules.length / PLAYBOOK_MODULES.length) * 100);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Header Toggle */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-background border-b z-50 flex items-center justify-between px-4">
        <div className="overflow-hidden -mt-1 -mb-1 -ml-1 flex items-center" style={{ height: '64px', width: '180px' }}>
          <img src="/logos/logo.png" alt="Obsidion" className="block w-full h-full object-contain object-center" />
        </div>
        <button onClick={toggleSidebar} className="p-2 -mr-2">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar Container */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-background border-r transform transition-transform duration-300 ease-in-out md:translate-x-0 flex flex-col",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="px-6 pt-4 pb-3 border-b hidden md:block flex flex-col gap-1">
          <div className="overflow-hidden -mt-2 -mx-1" style={{ height: '130px' }}>
            <img src="/logos/logo.png" alt="Obsidion" className="block w-full h-full object-contain object-center" />
          </div>
          <p className="text-sm text-muted-foreground font-medium">Cannabis Playbook</p>
        </div>

        {/* Progress Bar */}
        <div className="p-6 border-b bg-muted/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Progress</span>
            <span className="text-xs font-bold">{progressPercent}%</span>
          </div>
          <div className="h-2 w-full bg-border rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-500 ease-out" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
          {MODULE_SECTIONS.map((sectionName) => {
            const sectionModules = PLAYBOOK_MODULES.filter(m => m.section === sectionName);
            if (sectionModules.length === 0) return null;

            return (
              <div key={sectionName}>
                <h3 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {sectionName}
                </h3>
                <div className="space-y-1">
                  {sectionModules.map((module) => {
                    const isActive = pathname === `/playbook/${module.id}`;
                    const isCompleted = completedModules.includes(module.id);
                    
                    return (
                      <Link 
                        key={module.id} 
                        href={`/playbook/${module.id}`}
                        onClick={closeSidebar}
                        className={cn(
                          "group flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors",
                          isActive 
                            ? "bg-accent/10 text-accent font-semibold" 
                            : "text-foreground hover:bg-muted"
                        )}
                      >
                        <span className="truncate mr-2">{module.id}. {module.title}</span>
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-accent flex-shrink-0" />
                        ) : isActive ? (
                          <Circle className="w-4 h-4 text-accent flex-shrink-0 fill-accent w-[8px] h-[8px] mx-1" />
                        ) : null}
                      </Link>
                    )
                  })}
                </div>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden backdrop-blur-sm"
          onClick={closeSidebar}
        />
      )}
    </>
  );
}

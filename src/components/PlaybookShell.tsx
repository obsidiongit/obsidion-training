"use client";

import type { ReactNode } from "react";
import type { PlaybookDefinition } from "@/data/playbooks/types";
import { PlaybookProvider } from "@/components/PlaybookContext";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import ProgressTracker from "@/components/ProgressTracker";

export default function PlaybookShell({
  playbook,
  children,
}: {
  playbook: PlaybookDefinition;
  children: ReactNode;
}) {
  return (
    <PlaybookProvider value={playbook}>
      <div className="min-h-screen bg-background">
        <ProgressTracker />
        <Sidebar />
        <div className="md:pl-64 flex flex-col min-h-screen pt-20 md:pt-0">
          <Topbar />
          <main className="flex-1 w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-10 lg:p-12">
            {children}
          </main>
        </div>
      </div>
    </PlaybookProvider>
  );
}

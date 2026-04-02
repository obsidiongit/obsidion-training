"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { PlaybookDefinition } from "@/data/playbooks/types";

const PlaybookContext = createContext<PlaybookDefinition | null>(null);

export function PlaybookProvider({
  value,
  children,
}: {
  value: PlaybookDefinition;
  children: ReactNode;
}) {
  return <PlaybookContext.Provider value={value}>{children}</PlaybookContext.Provider>;
}

export function usePlaybook(): PlaybookDefinition {
  const ctx = useContext(PlaybookContext);
  if (!ctx) {
    throw new Error("usePlaybook must be used within PlaybookProvider");
  }
  return ctx;
}

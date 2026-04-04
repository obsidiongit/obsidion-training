const HUB_PROGRESS_PREFIX = "obsidion-hub-progress";
export const HUB_PROGRESS_EVENT = "hub-progress-updated";

function storageKey(roleSlug: string): string {
  return `${HUB_PROGRESS_PREFIX}:${roleSlug}`;
}

function readSet(roleSlug: string): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(storageKey(roleSlug));
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? new Set(parsed as string[]) : new Set();
  } catch {
    return new Set();
  }
}

function writeSet(roleSlug: string, sections: Set<string>): void {
  try {
    localStorage.setItem(storageKey(roleSlug), JSON.stringify([...sections]));
  } catch {
    /* ignore storage errors */
  }
}

function dispatch(roleSlug: string): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(HUB_PROGRESS_EVENT, { detail: { roleSlug } }));
  }
}

export function markSectionComplete(roleSlug: string, sectionSlug: string): void {
  const set = readSet(roleSlug);
  set.add(sectionSlug);
  writeSet(roleSlug, set);
  dispatch(roleSlug);
}

export function markSectionIncomplete(roleSlug: string, sectionSlug: string): void {
  const set = readSet(roleSlug);
  set.delete(sectionSlug);
  writeSet(roleSlug, set);
  dispatch(roleSlug);
}

export function isSectionComplete(roleSlug: string, sectionSlug: string): boolean {
  return readSet(roleSlug).has(sectionSlug);
}

export function getCompletedSections(roleSlug: string): string[] {
  return [...readSet(roleSlug)];
}

export function getCompletionPercent(roleSlug: string, totalSections: number): number {
  if (totalSections === 0) return 0;
  return Math.round((readSet(roleSlug).size / totalSections) * 100);
}

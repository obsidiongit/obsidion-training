const LEGACY_KEY = "obsidion-progress";

export function progressStorageKey(slug: string): string {
  return `obsidion-progress:${slug}`;
}

function parseProgress(raw: string | null): number[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as number[]) : [];
  } catch {
    return [];
  }
}

/** Read completed module IDs; migrates legacy single-key storage for cannabis once. */
export function readProgress(slug: string): number[] {
  if (typeof window === "undefined") return [];
  const key = progressStorageKey(slug);
  let raw = localStorage.getItem(key);
  if (!raw && slug === "cannabis") {
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy) {
      const ids = parseProgress(legacy);
      if (ids.length > 0) {
        try {
          localStorage.setItem(key, legacy);
        } catch {
          /* ignore */
        }
      }
      raw = legacy;
    }
  }
  return parseProgress(raw);
}

export function writeProgress(slug: string, completed: number[]): boolean {
  try {
    localStorage.setItem(progressStorageKey(slug), JSON.stringify(completed));
    return true;
  } catch {
    return false;
  }
}

export function clearProgress(slug: string): void {
  localStorage.removeItem(progressStorageKey(slug));
  if (slug === "cannabis") {
    localStorage.removeItem(LEGACY_KEY);
  }
}

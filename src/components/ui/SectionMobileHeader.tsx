"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/** Maps section slugs to display names */
const SECTION_NAMES: Record<string, string> = {
  playbooks: "Training Playbooks",
  "on-the-call": "On the Call",
  certification: "Certification",
  products: "Product Knowledge",
  "getting-paid": "Getting Paid",
  performance: "Performance",
  tech: "Tech We Use",
  meetings: "Meeting Cadence",
  accountability: "Accountability",
  "daily-structure": "Daily Structure",
  about: "About Obsidion",
  assets: "Downloadable Assets",
};

function parsePath(pathname: string): { roleSlug: string | null; sectionName: string | null } {
  // /role/[roleSlug]/[section]/...
  const match = pathname.match(/^\/role\/([^/]+)\/([^/]+)/);
  if (!match) return { roleSlug: null, sectionName: null };
  const roleSlug = match[1];
  const sectionSlug = match[2];
  return { roleSlug, sectionName: SECTION_NAMES[sectionSlug] ?? null };
}

/**
 * Sticky mobile-only header that shows the current section and a back link.
 * Hides itself on the role hub root page and on desktop (sm+).
 */
export default function SectionMobileHeader() {
  const pathname = usePathname();
  const { roleSlug, sectionName } = parsePath(pathname);

  if (!roleSlug || !sectionName) return null;

  return (
    <div className="sticky top-0 z-40 flex items-center gap-2 border-b border-border bg-background/90 px-4 py-2.5 backdrop-blur-md sm:hidden">
      <Link
        href={`/role/${roleSlug}`}
        className="flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors shrink-0"
        aria-label="Back to hub"
      >
        <ArrowLeft size={15} />
      </Link>
      <div className="h-4 w-px bg-border" />
      <span className="text-sm font-semibold truncate text-foreground">{sectionName}</span>
    </div>
  );
}

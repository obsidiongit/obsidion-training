"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { usePlaybook } from "@/components/PlaybookContext";
import { cn } from "@/lib/utils";

export function PlaybookModuleLink({
  moduleId,
  hash,
  className,
  children,
}: {
  moduleId: number;
  /** Without leading #; must match an element id on the target module page. */
  hash?: string;
  className?: string;
  children: ReactNode;
}) {
  const { slug } = usePlaybook();
  const pathname = usePathname();

  const rolePathMatch = pathname.match(/\/role\/([^/]+)\/playbooks\//);
  const base = rolePathMatch
    ? `/role/${rolePathMatch[1]}/playbooks/${slug}`
    : `/playbooks/${slug}`;

  const href = `${base}/${moduleId}${hash ? `#${hash}` : ""}`;

  return (
    <Link
      href={href}
      className={cn(
        "underline underline-offset-2 decoration-accent/50 hover:decoration-accent hover:text-accent transition-colors",
        className
      )}
    >
      {children}
    </Link>
  );
}

import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  variant = "default",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "green" | "amber";
  /** For in-page anchors (e.g. deep links from Quick Reference). */
  id?: string;
}) {
  return (
    <div
      id={id}
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow-sm p-6 overflow-hidden scroll-mt-24",
        variant === "green" && "border-emerald-accent border-l-4",
        variant === "amber" && "border-amber-accent border-l-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardGrid({
  children,
  className,
  cols = 2,
}: {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3;
}) {
  return (
    <div
      className={cn(
        "grid gap-6",
        cols === 1 && "grid-cols-1",
        cols === 2 && "grid-cols-1 md:grid-cols-2",
        cols === 3 && "grid-cols-1 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

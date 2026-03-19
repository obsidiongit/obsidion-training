import { cn } from "@/lib/utils";

export function Tag({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "green" | "amber" | "blue";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-widest",
        variant === "default" && "bg-muted text-muted-foreground",
        variant === "green" && "bg-emerald-accent/10 text-emerald-700",
        variant === "amber" && "bg-amber-accent/10 text-amber-700",
        variant === "blue" && "bg-accent/10 text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils";

export function StatBox({
  value,
  label,
  sublabel,
  className,
  variant = "default",
}: {
  value: string | React.ReactNode;
  label: string;
  sublabel?: string;
  className?: string;
  variant?: "default" | "accent";
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-6 text-center rounded-xl bg-muted/40 border",
        className
      )}
    >
      <div
        className={cn(
          "text-4xl md:text-5xl font-black tracking-tight mb-2",
          variant === "accent" ? "text-accent" : "text-foreground"
        )}
      >
        {value}
      </div>
      <div className="text-sm font-semibold uppercase tracking-wider text-foreground">
        {label}
      </div>
      {sublabel && (
        <div className="text-xs text-muted-foreground mt-1">
          {sublabel}
        </div>
      )}
    </div>
  );
}

export function StatRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
}

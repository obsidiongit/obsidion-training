import { cn } from "@/lib/utils";
import { AlertTriangle, Info, CheckCircle2 } from "lucide-react";

export function HighlightBox({
  children,
  title,
  variant = "info",
  className,
}: {
  children: React.ReactNode;
  title?: string;
  variant?: "info" | "success" | "warning";
  className?: string;
}) {
  const isInfo = variant === "info";
  const isSuccess = variant === "success";
  const isWarning = variant === "warning";

  return (
    <div
      className={cn(
        "rounded-xl border p-5 flex gap-4",
        isInfo && "bg-accent/5 border-accent/20",
        isSuccess && "bg-emerald-accent/5 border-emerald-accent/20",
        isWarning && "bg-amber-accent/5 border-amber-accent/20",
        className
      )}
    >
      <div className="shrink-0 mt-0.5">
        {isInfo && <Info className="w-5 h-5 text-accent" />}
        {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-accent" />}
        {isWarning && <AlertTriangle className="w-5 h-5 text-amber-accent" />}
      </div>
      <div>
        {title && (
          <h4
            className={cn(
              "text-sm font-bold mb-1",
              isInfo && "text-accent",
              isSuccess && "text-emerald-700",
              isWarning && "text-amber-700"
            )}
          >
            {title}
          </h4>
        )}
        <div className="text-sm text-foreground/90 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

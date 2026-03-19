import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function PriceCard({
  title,
  price,
  period = "/month",
  description,
  features,
  popular = false,
}: {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col p-6 md:p-8 rounded-2xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md",
        popular && "border-accent shadow-accent/10 border-2"
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <div className="mb-6 border-b pb-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground min-h-[40px] mb-4">
          {description}
        </p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-black tracking-tight">{price}</span>
          <span className="text-sm font-semibold text-muted-foreground">{period}</span>
        </div>
      </div>

      <ul className="flex-1 space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <Check className="w-5 h-5 text-emerald-accent shrink-0" />
            <span className="text-foreground/90">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

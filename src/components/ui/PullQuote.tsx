import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

export function PullQuote({
  children,
  author,
  className,
}: {
  children: React.ReactNode;
  author?: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "relative pl-6 py-4 my-8 border-l-4 border-accent bg-accent/5 rounded-r-xl",
        className
      )}
    >
      <Quote className="absolute top-4 left-4 w-10 h-10 text-accent/10 -translate-x-8 -translate-y-6" />
      <blockquote className="text-lg/relaxed md:text-xl/relaxed font-medium text-foreground italic relative z-10">
        "{children}"
      </blockquote>
      {author && (
        <figcaption className="mt-4 text-sm font-semibold text-accent uppercase tracking-wider">
          — {author}
        </figcaption>
      )}
    </figure>
  );
}

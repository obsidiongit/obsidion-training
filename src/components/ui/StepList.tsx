import { cn } from "@/lib/utils";

export function StepList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent", className)}>
      {children}
    </div>
  );
}

export function Step({
  number,
  title,
  children,
}: {
  number: number | string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      {/* Icon */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent text-white font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
        {number}
      </div>
      
      {/* Content */}
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-card border p-5 rounded-xl text-card-foreground shadow-sm hover:shadow-md transition-shadow">
        <h4 className="font-bold mb-2 text-foreground">{title}</h4>
        <div className="text-sm text-foreground/80 leading-relaxed space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
}

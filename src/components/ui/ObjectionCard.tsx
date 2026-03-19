"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export function ObjectionCard({
  objection,
  rebuttal,
}: {
  objection: string;
  rebuttal: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-xl bg-card overflow-hidden transition-all duration-200 hover:shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-muted/20 hover:bg-muted/40 transition-colors"
      >
        <div className="flex items-start gap-4 pr-4">
          <MessageSquare className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
          <span className="font-semibold text-foreground text-base">{objection}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
        )}
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="p-5 pt-4 text-sm leading-relaxed border-t bg-background">
            {rebuttal}
          </div>
        </div>
      </div>
    </div>
  );
}

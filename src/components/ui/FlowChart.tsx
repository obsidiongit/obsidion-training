"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface FlowStep {
  label: string;
  sublabel?: string;
  icon?: React.ElementType;
}

export default function FlowChart({
  steps,
  accentClass = "bg-accent text-white",
  arrowClass = "text-accent",
}: {
  steps: FlowStep[];
  accentClass?: string;
  arrowClass?: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <div key={i} className="flex items-center gap-2 sm:gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className={`flex flex-col items-center justify-center rounded-xl px-4 py-3 text-center shadow-sm ${accentClass} min-w-[90px] sm:min-w-[110px]`}
            >
              {Icon && <Icon size={18} strokeWidth={1.8} className="mb-1" />}
              <span className="text-xs sm:text-sm font-bold leading-tight">{step.label}</span>
              {step.sublabel && (
                <span className="text-[10px] opacity-80 leading-tight mt-0.5">{step.sublabel}</span>
              )}
            </motion.div>
            {i < steps.length - 1 && (
              <ChevronRight size={18} className={`shrink-0 ${arrowClass}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, ArrowRight, PartyPopper } from "lucide-react";
import {
  markSectionComplete,
  markSectionIncomplete,
  isSectionComplete,
} from "@/lib/hubProgress";

interface UpNextItem {
  slug: string;
  title: string;
}

interface Props {
  roleSlug: string;
  sectionSlug: string;
  /** Optional "Up Next" suggestions shown after marking complete */
  upNext?: UpNextItem[];
}

export default function MarkCompleteButton({ roleSlug, sectionSlug, upNext }: Props) {
  const [completed, setCompleted] = useState(false);
  const [justCompleted, setJustCompleted] = useState(false);

  useEffect(() => {
    setCompleted(isSectionComplete(roleSlug, sectionSlug));
  }, [roleSlug, sectionSlug]);

  function toggle() {
    if (completed) {
      markSectionIncomplete(roleSlug, sectionSlug);
      setCompleted(false);
      setJustCompleted(false);
    } else {
      markSectionComplete(roleSlug, sectionSlug);
      setCompleted(true);
      setJustCompleted(true);
    }
  }

  return (
    <div className="mt-12 mb-4 space-y-6">
      {/* Mark complete button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <motion.button
          onClick={toggle}
          whileTap={{ scale: 0.96 }}
          className={`
            inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm
            border transition-all duration-300 cursor-pointer select-none
            ${completed
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20"
              : "bg-accent/10 border-accent/30 text-accent hover:bg-accent/20"
            }
          `}
        >
          <AnimatePresence mode="wait">
            {completed ? (
              <motion.span
                key="done"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <CheckCircle2 size={18} className="text-emerald-400" />
              </motion.span>
            ) : (
              <motion.span
                key="undone"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Circle size={18} />
              </motion.span>
            )}
          </AnimatePresence>
          <span>{completed ? "Section Complete" : "Mark as Complete"}</span>
        </motion.button>

        <Link
          href={`/role/${roleSlug}`}
          className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
        >
          Back to hub
          <ArrowRight size={12} />
        </Link>
      </div>

      {/* Up Next panel — only shows after first completion */}
      <AnimatePresence>
        {justCompleted && upNext && upNext.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 sm:p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <PartyPopper size={16} className="text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-400">
                Section complete — what&apos;s next?
              </span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {upNext.map((item) => (
                <Link
                  key={item.slug}
                  href={`/role/${roleSlug}/${item.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium transition-all hover:border-accent/30 hover:text-accent"
                >
                  <span>{item.title}</span>
                  <ArrowRight
                    size={14}
                    className="text-muted-foreground/40 transition-all group-hover:text-accent group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
              <Link
                href={`/role/${roleSlug}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-accent/30 hover:text-foreground"
              >
                <span>Return to hub</span>
                <ArrowRight
                  size={14}
                  className="text-muted-foreground/40 transition-all group-hover:text-accent group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

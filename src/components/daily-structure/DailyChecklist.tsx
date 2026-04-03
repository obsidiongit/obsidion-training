"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sunrise,
  Sun,
  Sunset,
  RotateCcw,
  CheckCircle2,
  Circle,
  Sparkles,
  CalendarDays,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  ProductPageHero,
} from "../products/shared";

/* ─── task data ─── */

const SECTIONS = [
  {
    id: "morning",
    label: "Beginning of Day",
    sublabel: "Morning launch sequence",
    icon: Sunrise,
    accentColor: "text-accent",
    barClass: "bg-accent",
    bgClass: "bg-accent/[0.04]",
    borderClass: "border-accent/20",
    iconBgClass: "bg-accent/10",
    tasks: [
      {
        id: "m1",
        text: "Pipeline review — priority-rank open deals by close probability",
      },
      {
        id: "m2",
        text: "Check CRM for overnight inbound leads; claim and respond within SLA",
      },
      {
        id: "m3",
        text: "Review calendar — confirm all demos/calls and prep for each (notes, deck, pricing)",
      },
      {
        id: "m4",
        text: "Set 3 non-negotiable outcomes for the day (written, tracked)",
      },
      {
        id: "m5",
        text: "Outbound block: first 60–90 min dedicated to cold/warm outreach (calls, emails, LinkedIn)",
      },
    ],
  },
  {
    id: "midday",
    label: "Middle of Day",
    sublabel: "Execution & pipeline push",
    icon: Sun,
    accentColor: "text-amber-accent",
    barClass: "bg-amber-accent",
    bgClass: "bg-amber-accent/[0.04]",
    borderClass: "border-amber-accent/20",
    iconBgClass: "bg-amber-accent/10",
    tasks: [
      { id: "d1", text: "Run scheduled demos and discovery calls" },
      {
        id: "d2",
        text: "Immediate post-call CRM updates — notes, next steps, deal stage changes",
      },
      {
        id: "d3",
        text: "Follow up on proposals sent — nudge, handle objections, push to close",
      },
      {
        id: "d4",
        text: "Midday pipeline audit: are you on pace for daily activity targets?",
      },
      {
        id: "d5",
        text: "Second outbound block if call volume is light",
      },
    ],
  },
  {
    id: "evening",
    label: "End of Day",
    sublabel: "Close-out & next-day prep",
    icon: Sunset,
    accentColor: "text-emerald-accent",
    barClass: "bg-emerald-accent",
    bgClass: "bg-emerald-accent/[0.04]",
    borderClass: "border-emerald-accent/20",
    iconBgClass: "bg-emerald-accent/10",
    tasks: [
      {
        id: "e1",
        text: "Update every active deal in CRM — no stale records overnight",
      },
      {
        id: "e2",
        text: "Log all activity metrics: calls made, emails sent, demos run, proposals sent",
      },
      { id: "e3", text: "Prep tomorrow's priority list and calendar" },
      {
        id: "e4",
        text: "Flag any at-risk deals or blockers for leadership",
      },
      { id: "e5", text: "Submit daily activity report" },
    ],
  },
] as const;

const ALL_TASK_IDS = SECTIONS.flatMap((s) => s.tasks.map((t) => t.id));
const TOTAL_TASKS = ALL_TASK_IDS.length;

/* ─── helpers ─── */

function todayKey(): string {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function formatDateLabel(): string {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

const STORAGE_KEY = "obsidion-daily-checklist";

interface StoredState {
  date: string;
  checked: Record<string, boolean>;
}

function loadState(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: StoredState = JSON.parse(raw);
    if (parsed.date !== todayKey()) return {};
    return parsed.checked;
  } catch {
    return {};
  }
}

function saveState(checked: Record<string, boolean>): void {
  try {
    const payload: StoredState = { date: todayKey(), checked };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // silently ignore storage errors
  }
}

/* ─── sub-components ─── */

function TaskItem({
  id,
  text,
  checked,
  accentColor,
  onToggle,
}: {
  id: string;
  text: string;
  checked: boolean;
  accentColor: string;
  onToggle: (id: string) => void;
}) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="group"
    >
      <button
        onClick={() => onToggle(id)}
        className="flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
      >
        <span className="mt-0.5 shrink-0 transition-transform duration-200 group-active:scale-90">
          {checked ? (
            <CheckCircle2
              size={20}
              className={`${accentColor} transition-colors duration-200`}
              strokeWidth={2}
            />
          ) : (
            <Circle
              size={20}
              className="text-muted-foreground/40 transition-colors duration-200 group-hover:text-muted-foreground/70"
              strokeWidth={1.5}
            />
          )}
        </span>
        <span
          className={`text-sm leading-relaxed transition-all duration-200 ${
            checked
              ? "line-through text-muted-foreground/50"
              : "text-foreground"
          }`}
        >
          {text}
        </span>
      </button>
    </motion.li>
  );
}

/* ─── main component ─── */

export default function DailyChecklist({ roleSlug }: { roleSlug: string }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);
  const [justReset, setJustReset] = useState(false);

  useEffect(() => {
    setChecked(loadState());
    setHydrated(true);
  }, []);

  const toggle = useCallback(
    (id: string) => {
      setChecked((prev) => {
        const next = { ...prev, [id]: !prev[id] };
        saveState(next);
        return next;
      });
    },
    []
  );

  const reset = useCallback(() => {
    const empty: Record<string, boolean> = {};
    setChecked(empty);
    saveState(empty);
    setJustReset(true);
    setTimeout(() => setJustReset(false), 1500);
  }, []);

  const completedCount = Object.values(checked).filter(Boolean).length;
  const allDone = completedCount === TOTAL_TASKS;
  const progressPct = hydrated ? Math.round((completedCount / TOTAL_TASKS) * 100) : 0;

  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Daily Structure"
        title="Daily Operating Rhythm"
        description="Your day isn't improvised — it's engineered. Run through this checklist every morning and close it out every evening. Consistency is the job."
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-10">
        {/* ── Header bar: date + progress + reset ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <CalendarDays size={20} strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Today
                </p>
                <p className="text-sm font-bold text-foreground">
                  {formatDateLabel()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* progress pill */}
              <div className="flex items-center gap-2">
                <div className="h-2 w-32 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPct}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
                <span className="text-xs font-semibold tabular-nums text-muted-foreground min-w-[3.5rem]">
                  {hydrated ? `${completedCount} / ${TOTAL_TASKS}` : "— / —"}
                </span>
              </div>

              {/* reset button */}
              <button
                onClick={reset}
                title="Reset checklist for today"
                className="flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-all hover:border-red-400/40 hover:text-red-400 active:scale-95"
              >
                <RotateCcw size={13} strokeWidth={2} />
                {justReset ? "Reset!" : "Reset"}
              </button>
            </div>
          </motion.div>

          {/* ── All done banner ── */}
          <AnimatePresence>
            {allDone && hydrated && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                className="flex items-center gap-3 rounded-2xl border border-emerald-accent/30 bg-emerald-accent/[0.06] px-5 py-4"
              >
                <Sparkles size={20} className="text-emerald-accent shrink-0" />
                <p className="text-sm font-semibold text-emerald-accent">
                  Full day complete. That&apos;s how it&apos;s done — go close something.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Checklist sections ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            const sectionTotal = section.tasks.length;
            const sectionDone = section.tasks.filter(
              (t) => checked[t.id]
            ).length;
            const sectionComplete = sectionDone === sectionTotal;

            return (
              <motion.div key={section.id} variants={fadeUp}>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`h-1 w-6 rounded-full ${section.barClass}`} />
                  <h2
                    className={`text-xs font-semibold uppercase tracking-wider ${section.accentColor}`}
                  >
                    {section.label}
                  </h2>
                  <span className="ml-auto text-xs text-muted-foreground tabular-nums">
                    {hydrated ? `${sectionDone}/${sectionTotal}` : ""}
                  </span>
                </div>

                <div
                  className={`rounded-2xl border ${section.borderClass} ${section.bgClass} px-2 py-3`}
                >
                  <div className="flex items-center gap-3 px-3 pb-3 mb-1 border-b border-border/30">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${section.iconBgClass} ${section.accentColor}`}
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {section.label}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {section.sublabel}
                      </p>
                    </div>
                    {sectionComplete && hydrated && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`ml-auto flex items-center gap-1 rounded-full px-2.5 py-0.5 ${section.iconBgClass}`}
                      >
                        <CheckCircle2
                          size={13}
                          className={section.accentColor}
                        />
                        <span
                          className={`text-[11px] font-semibold ${section.accentColor}`}
                        >
                          Done
                        </span>
                      </motion.div>
                    )}
                  </div>

                  <ul className="space-y-0.5">
                    {section.tasks.map((task) => (
                      <TaskItem
                        key={task.id}
                        id={task.id}
                        text={task.text}
                        checked={!!checked[task.id]}
                        accentColor={section.accentColor}
                        onToggle={toggle}
                      />
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Footer note ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-xl border border-border bg-muted/20 px-5 py-4"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            This list auto-resets each morning. Your progress is saved in the
            browser — hit{" "}
            <span className="font-semibold text-foreground">Reset</span> at any
            point to start fresh. Build the habit of running this every day and
            your consistency will show up in your pipeline.
          </p>
        </motion.div>
      </main>

      <footer className="border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            Obsidion Training Hub &middot; Daily Operating Rhythm
          </p>
          <img
            src="/logos/logo.png"
            alt="Obsidion"
            className="h-6 w-auto opacity-30"
          />
        </div>
      </footer>
    </div>
  );
}

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
  ClipboardList,
} from "lucide-react";

/* ─── SDR-specific task data ─── */

const SECTIONS = [
  {
    id: "morning",
    label: "Morning Launch",
    sublabel: "First 30-45 min — set up your day",
    icon: Sunrise,
    accentColor: "text-accent",
    barClass: "bg-accent",
    bgClass: "bg-accent/[0.04]",
    borderClass: "border-accent/20",
    iconBgClass: "bg-accent/10",
    tasks: [
      { id: "sm1", text: "Check Notion for new leads and overnight inbounds — claim and prioritize" },
      { id: "sm2", text: "Sort lead list by priority: callbacks → hot → warm → cold" },
      { id: "sm3", text: "Review scheduled callbacks for today" },
      { id: "sm4", text: "Send appointment reminders for tomorrow's booked meetings" },
      { id: "sm5", text: "Set daily target: \"I'm booking ___ appointments today\"" },
    ],
  },
  {
    id: "midday",
    label: "Outreach & Execution",
    sublabel: "Phone, email, social — all channels active",
    icon: Sun,
    accentColor: "text-amber-accent",
    barClass: "bg-amber-accent",
    bgClass: "bg-amber-accent/[0.04]",
    borderClass: "border-amber-accent/20",
    iconBgClass: "bg-amber-accent/10",
    tasks: [
      { id: "sd1", text: "Outbound Block 1: calls to hot and warm leads (priority 1 & 2)" },
      { id: "sd2", text: "Send follow-up emails for every call that didn't connect" },
      { id: "sd3", text: "Social touches: LinkedIn profile views, connection requests, DMs, comments" },
      { id: "sd4", text: "Outbound Block 2: cold calls (priority 3 volume block)" },
      { id: "sd5", text: "Log every call and touch in Notion immediately after each interaction" },
    ],
  },
  {
    id: "evening",
    label: "End of Day Close-Out",
    sublabel: "Final 30 min — log, review, prep",
    icon: Sunset,
    accentColor: "text-emerald-accent",
    barClass: "bg-emerald-accent",
    bgClass: "bg-emerald-accent/[0.04]",
    borderClass: "border-emerald-accent/20",
    iconBgClass: "bg-emerald-accent/10",
    tasks: [
      { id: "se1", text: "Update every lead status in Notion — no stale records overnight" },
      { id: "se2", text: "Log all activity: calls made, emails sent, social touches, appointments booked" },
      { id: "se3", text: "Review appointments booked today — did you hit your target?" },
      { id: "se4", text: "Prep tomorrow's priority list: callbacks, hot leads, follow-ups" },
      { id: "se5", text: "Send calendar invites for all new appointments booked today" },
    ],
  },
] as const;

const TOTAL_TASKS = SECTIONS.reduce((n, s) => n + s.tasks.length, 0);

/* ─── helpers ─── */

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function formatDateLabel(): string {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

const STORAGE_KEY = "obsidion-sdr-daily-checklist";

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
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: todayKey(), checked }));
  } catch {}
}

/* ─── TaskItem ─── */

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
    <li className="group">
      <button
        onClick={() => onToggle(id)}
        className="flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
      >
        <span className="mt-0.5 shrink-0 transition-transform duration-200 group-active:scale-90">
          {checked ? (
            <CheckCircle2 size={19} className={`${accentColor} transition-colors duration-200`} strokeWidth={2} />
          ) : (
            <Circle size={19} className="text-muted-foreground/40 transition-colors duration-200 group-hover:text-muted-foreground/70" strokeWidth={1.5} />
          )}
        </span>
        <span className={`text-sm leading-relaxed transition-all duration-200 ${checked ? "line-through text-muted-foreground/50" : "text-foreground"}`}>
          {text}
        </span>
      </button>
    </li>
  );
}

/* ─── main export ─── */

export default function SDRDailyChecklistSection() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);
  const [justReset, setJustReset] = useState(false);

  useEffect(() => {
    setChecked(loadState());
    setHydrated(true);
  }, []);

  const toggle = useCallback((id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      saveState(next);
      return next;
    });
  }, []);

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
    <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 px-5 sm:px-6 pt-5 pb-4 border-b border-border/60">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-accent/10 text-purple-accent">
          <ClipboardList size={20} strokeWidth={1.8} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-foreground">Daily Operating Rhythm</h3>
          <p className="text-xs text-muted-foreground">Your SDR day — structured, not improvised</p>
        </div>
      </div>

      <div className="px-5 sm:px-6 py-5 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 rounded-xl border border-border bg-background px-4 py-3">
          <div className="flex items-center gap-2.5 flex-1 min-w-0">
            <CalendarDays size={16} className="text-muted-foreground shrink-0" />
            <span className="text-sm font-semibold text-foreground truncate">{formatDateLabel()}</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-28 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
              <span className="text-xs font-semibold tabular-nums text-muted-foreground min-w-[2.75rem]">
                {hydrated ? `${completedCount}/${TOTAL_TASKS}` : "—/—"}
              </span>
            </div>
            <button
              onClick={reset}
              title="Reset checklist for today"
              className="flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-semibold text-muted-foreground transition-all hover:border-red-400/40 hover:text-red-400 active:scale-95"
            >
              <RotateCcw size={12} strokeWidth={2} />
              {justReset ? "Reset!" : "Reset"}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {allDone && hydrated && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              className="flex items-center gap-2.5 rounded-xl border border-emerald-accent/30 bg-emerald-accent/[0.06] px-4 py-3"
            >
              <Sparkles size={16} className="text-emerald-accent shrink-0" />
              <p className="text-sm font-semibold text-emerald-accent">
                Full day complete — go book some meetings.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-4">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            const sectionDone = section.tasks.filter((t) => checked[t.id]).length;
            const sectionComplete = sectionDone === section.tasks.length;

            return (
              <div key={section.id} className={`rounded-xl border ${section.borderClass} ${section.bgClass}`}>
                <div className="flex items-center gap-2.5 px-3 pt-3 pb-2.5 border-b border-border/30">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${section.iconBgClass} ${section.accentColor}`}>
                    <Icon size={15} strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-bold uppercase tracking-wider ${section.accentColor}`}>{section.label}</p>
                  </div>
                  {sectionComplete && hydrated && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className={`flex items-center gap-1 rounded-full px-2 py-0.5 ${section.iconBgClass}`}>
                      <CheckCircle2 size={11} className={section.accentColor} />
                      <span className={`text-[10px] font-semibold ${section.accentColor}`}>Done</span>
                    </motion.div>
                  )}
                </div>
                <ul className="px-1 py-1.5 space-y-0">
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
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          Auto-resets each morning. Hit{" "}
          <span className="font-semibold text-foreground">Reset</span> to start fresh at any time.
        </p>
      </div>
    </div>
  );
}

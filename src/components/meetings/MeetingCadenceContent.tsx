"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import {
  Users,
  Mic,
  CalendarCheck,
  AlertTriangle,
  CheckCircle2,
  Circle,
  Clock,
  MessageSquare,
  ShieldAlert,
  Target,
  Sparkles,
} from "lucide-react";
import {
  stagger,
  staggerSlow,
  fadeUp,
  scaleIn,
  SectionLabel,
  ProductPageHero,
  ProductPageFooter,
  StatHighlight,
} from "../products/shared";

/* ─── data ─── */

const MEETING_AGENDA = [
  {
    segment: "Opening",
    time: "0–2 min",
    detail:
      "Leadership sets the agenda. Company updates, product news, announcements.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    segment: "Pipeline Round-Robin",
    time: "2–18 min",
    detail:
      "Each AE: top deals, expected closes this week, specific blockers or asks.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    segment: "Wins & Lessons",
    time: "18–23 min",
    detail:
      "What closed since last meeting? What fell through and why? One win, one lesson.",
    color: "text-emerald-accent",
    bg: "bg-emerald-accent/10",
  },
  {
    segment: "Coaching / Focus Topic",
    time: "23–28 min",
    detail:
      "Leadership covers one focus area: objection handling, talk tracks, product update, process change.",
    color: "text-purple-accent",
    bg: "bg-purple-accent/10",
  },
  {
    segment: "Close",
    time: "28–30 min",
    detail: "Action items, reminders, next meeting confirmation.",
    color: "text-muted-foreground",
    bg: "bg-muted",
  },
] as const;

const PREP_CHECKLIST_ITEMS = [
  {
    id: "crm",
    text: "CRM is current — every deal has an accurate stage, a next step, and recent notes",
  },
  {
    id: "top3",
    text: "Top 3 deals ready: who, what stage, blocker, next action, expected close date",
  },
  {
    id: "numbers",
    text: "Your numbers: dials this week, demos run, proposals sent, deals closed",
  },
  {
    id: "ask",
    text: "One specific ask — talk track help, pricing question, warm intro, coaching on a deal",
  },
  {
    id: "insight",
    text: "One win or one lesson to share with the team",
  },
] as const;

const DONT_BRING = [
  {
    icon: ShieldAlert,
    text: "Excuses. If the numbers are bad, own it and bring a plan.",
  },
  {
    icon: MessageSquare,
    text: 'Vague updates. "Working some deals" is not a pipeline update. Names, stages, next steps.',
  },
  {
    icon: Clock,
    text: "Questions you could have Slacked. Save the meeting for live conversation.",
  },
] as const;

/* ─── localStorage prep checklist ─── */

const PREP_STORAGE_KEY = "obsidion-meeting-prep";

interface PrepState {
  date: string;
  checked: Record<string, boolean>;
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function loadPrepState(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(PREP_STORAGE_KEY);
    if (!raw) return {};
    const parsed: PrepState = JSON.parse(raw);
    if (parsed.date !== todayKey()) return {};
    return parsed.checked;
  } catch {
    return {};
  }
}

function savePrepState(checked: Record<string, boolean>): void {
  try {
    localStorage.setItem(
      PREP_STORAGE_KEY,
      JSON.stringify({ date: todayKey(), checked })
    );
  } catch {
    /* silently ignore */
  }
}

/* ─── main component ─── */

export default function MeetingCadenceContent({
  roleSlug,
}: {
  roleSlug: string;
}) {
  const [prepChecked, setPrepChecked] = useState<Record<string, boolean>>(() =>
    loadPrepState()
  );
  const [hydrated, setHydrated] = useState(false);

  useState(() => {
    if (typeof window !== "undefined") {
      setPrepChecked(loadPrepState());
      setHydrated(true);
    }
  });

  function togglePrep(id: string) {
    setPrepChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      savePrepState(next);
      return next;
    });
  }

  const prepDone = PREP_CHECKLIST_ITEMS.every((item) => prepChecked[item.id]);

  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Meeting Cadence"
        title="Meeting Cadence & Preparation"
        description="Twice a week, 30 minutes, Discord. Show up prepared or don't show up."
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-14">
        {/* ── Overview Stats ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          <motion.div
            variants={scaleIn}
            className="rounded-xl border border-border bg-card p-4 text-center"
          >
            <div className="text-2xl font-black text-accent">2×</div>
            <div className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider mt-1">
              Per Week
            </div>
          </motion.div>
          <motion.div
            variants={scaleIn}
            className="rounded-xl border border-border bg-card p-4 text-center"
          >
            <div className="text-2xl font-black text-accent">30 min</div>
            <div className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider mt-1">
              Duration
            </div>
          </motion.div>
          <motion.div
            variants={scaleIn}
            className="rounded-xl border border-border bg-card p-4 text-center"
          >
            <div className="text-2xl font-black text-purple-accent">
              Discord
            </div>
            <div className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider mt-1">
              Platform
            </div>
          </motion.div>
          <motion.div
            variants={scaleIn}
            className="rounded-xl border border-border bg-card p-4 text-center"
          >
            <div className="text-2xl font-black text-emerald-accent">
              Leadership
            </div>
            <div className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider mt-1">
              Led By
            </div>
          </motion.div>
        </motion.div>

        {/* ── Why It Matters ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-4"
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Why This Matters
          </SectionLabel>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              In a remote, commission-only environment, these meetings are one of
              the few places where the team exists as a team. They prevent
              isolation. They keep standards visible. They give you a rhythm
              beyond your own head.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              The best AEs use these meetings to sharpen their approach — steal
              talk tracks that are working, get coaching on stuck deals, and stay
              calibrated against what the rest of the team is seeing. The worst
              AEs treat them as an interruption. The difference shows up in the
              numbers within a month.
            </p>
          </motion.div>
        </motion.div>

        {/* ── Meeting Structure ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-4"
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Meeting Structure
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-sm text-muted-foreground leading-relaxed"
          >
            Every meeting follows the same format. Know it. Prepare for it.
          </motion.p>

          <div className="space-y-2">
            {MEETING_AGENDA.map((item, i) => (
              <motion.div
                key={item.segment}
                variants={fadeUp}
                className="flex items-stretch rounded-xl border border-border overflow-hidden transition-shadow hover:shadow-sm"
              >
                <div
                  className={`flex flex-col items-center justify-center ${item.bg} px-3 sm:px-4 py-3 min-w-[5rem] sm:min-w-[5.5rem] border-r border-border`}
                >
                  <span
                    className={`text-[11px] font-bold ${item.color} tabular-nums`}
                  >
                    {item.time}
                  </span>
                </div>
                <div className="flex-1 px-4 py-3 bg-card">
                  <p className="text-sm font-semibold text-foreground">
                    {item.segment}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Pre-Meeting Prep Checklist ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-4"
        >
          <SectionLabel
            barClass="bg-emerald-accent"
            textClass="text-emerald-accent"
          >
            Pre-Meeting Checklist
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-sm text-muted-foreground leading-relaxed"
          >
            Before every meeting, run through this list. Coming to a pipeline
            meeting without your numbers is like showing up to a demo without
            knowing the product.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-emerald-accent/20 bg-emerald-accent/[0.04] px-2 py-3"
          >
            <AnimatePresence>
              {prepDone && hydrated && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 px-3 pb-3 mb-2 border-b border-emerald-accent/20"
                >
                  <Sparkles size={14} className="text-emerald-accent" />
                  <span className="text-xs font-semibold text-emerald-accent">
                    You&apos;re ready. Go contribute.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <ul className="space-y-0.5">
              {PREP_CHECKLIST_ITEMS.map((item) => (
                <li key={item.id} className="group">
                  <button
                    onClick={() => togglePrep(item.id)}
                    className="flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-accent/50"
                  >
                    <span className="mt-0.5 shrink-0 transition-transform duration-200 group-active:scale-90">
                      {prepChecked[item.id] ? (
                        <CheckCircle2
                          size={19}
                          className="text-emerald-accent transition-colors duration-200"
                          strokeWidth={2}
                        />
                      ) : (
                        <Circle
                          size={19}
                          className="text-muted-foreground/40 transition-colors duration-200 group-hover:text-muted-foreground/70"
                          strokeWidth={1.5}
                        />
                      )}
                    </span>
                    <span
                      className={`text-sm leading-relaxed transition-all duration-200 ${
                        prepChecked[item.id]
                          ? "line-through text-muted-foreground/50"
                          : "text-foreground"
                      }`}
                    >
                      {item.text}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ── What Not to Bring ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-4"
        >
          <SectionLabel barClass="bg-red-500" textClass="text-red-400">
            What Not to Bring
          </SectionLabel>

          <div className="space-y-3">
            {DONT_BRING.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.text}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-xl border border-red-400/15 bg-red-400/[0.03] px-4 py-3"
                >
                  <Icon
                    size={16}
                    className="text-red-400 shrink-0 mt-0.5"
                    strokeWidth={1.8}
                  />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Attendance Policy ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-4"
        >
          <SectionLabel
            barClass="bg-amber-accent"
            textClass="text-amber-accent"
          >
            Attendance Policy
          </SectionLabel>

          <div className="space-y-3">
            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-accent/10 text-amber-accent">
                  <CalendarCheck size={16} strokeWidth={1.8} />
                </div>
                <h3 className="text-sm font-bold text-foreground">
                  Expectations
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-amber-accent mt-1 shrink-0">•</span>
                  Attendance is mandatory unless you&apos;ve communicated to
                  leadership ahead of time.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-accent mt-1 shrink-0">•</span>
                  &ldquo;Ahead of time&rdquo; means before the meeting, not
                  during or after.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-accent mt-1 shrink-0">•</span>
                  If a client call conflicts, that takes priority — but tell your
                  manager and get a recap.
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-400/10 text-red-400">
                  <AlertTriangle size={16} strokeWidth={1.8} />
                </div>
                <h3 className="text-sm font-bold text-foreground">
                  What Happens If You Miss
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-lg border border-amber-accent/20 bg-amber-accent/[0.04] px-4 py-3">
                  <span className="text-xs font-bold text-amber-accent shrink-0 mt-0.5 bg-amber-accent/10 rounded-full px-2 py-0.5">
                    1st
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Noted. You&apos;ll hear about it in your next 1:1. Not the
                    end of the world, but it&apos;s on the record.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-red-400/20 bg-red-400/[0.04] px-4 py-3">
                  <span className="text-xs font-bold text-red-400 shrink-0 mt-0.5 bg-red-400/10 rounded-full px-2 py-0.5">
                    Repeat
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Treated as a performance issue. Consistent absences signal
                    disengagement — and in a commission-only role, disengagement
                    is the first sign things aren&apos;t working.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Bottom Line ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-xl border border-border bg-muted/20 px-5 py-4"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            Show up. Be prepared. Participate. It&apos;s 30 minutes, twice a
            week. The pre-meeting checklist above resets daily — use it before
            every session.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="meetings"
            upNext={[
              { slug: "accountability", title: "Accountability" },
              { slug: "performance", title: "Performance Expectations" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            Obsidion Training Hub &middot; Meeting Cadence & Preparation
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

"use client";

import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import {
  Users,
  Clock,
  MessageSquare,
  CheckCircle2,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const MEETING_STRUCTURE = [
  { segment: "Opening", time: "0-2 min", what: "Leadership sets the agenda. Company updates, product news, announcements." },
  { segment: "Pipeline Round-Robin", time: "2-18 min", what: "AEs give deal updates. SDRs report appointments booked, show rates, AE quality feedback." },
  { segment: "Wins & Lessons", time: "18-23 min", what: "One win, one lesson since last meeting. Keep it tight." },
  { segment: "Coaching / Focus Topic", time: "23-28 min", what: "Objection handling, talk tracks, process changes, product updates." },
  { segment: "Close", time: "28-30 min", what: "Action items, reminders, next meeting confirmation." },
] as const;

const PRE_MEETING = [
  "Your numbers. Appointments booked since last meeting. Show rate. No-shows. How many were qualified.",
  "AE feedback. Did any AEs flag a quality issue? Own it and explain what you'll adjust.",
  "Your top prospect. One lead you're working — situation, channel, next step.",
  "One ask. Need help with a talk track? Stuck on an objection? Bring it.",
  "One win or one lesson. A script that worked, a channel that's producing, or an objection you figured out.",
] as const;

const NOT_TO_BRING = [
  "Vague updates. \"Things are going well\" is not a report. Numbers.",
  "Excuses. If the numbers are off, own it and say what you're changing.",
  "Questions you could have asked on Discord. Save the meeting for live conversation.",
] as const;

const WHY_ATTEND = [
  "You learn what a good appointment looks like from the AE's perspective.",
  "You learn what a bad one looks like — what to fix in your qualifying.",
  "You build team relationships. AEs who trust you give better feedback.",
  "You hear product updates — pricing changes, new features, new verticals.",
  "You stay aligned. In a remote team, these meetings prevent drift.",
] as const;

/* ─── component ─── */

export default function SDRMeetingCadenceContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Meetings"
        title="Meeting Cadence"
        description="Daily at 10:00 AM Eastern on Discord. SDRs attend the same daily sales meeting as Account Executives."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Format ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Meeting Format
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
            {[
              { label: "Frequency", value: "Daily", icon: Clock },
              { label: "Time", value: "10:00 AM ET", icon: Clock },
              { label: "Platform", value: "Discord voice/video", icon: MessageSquare },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label} variants={fadeUp} className="rounded-2xl border border-border bg-card p-5 shadow-sm text-center">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent mb-3">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div className="text-lg font-bold">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Meeting Structure ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Meeting Structure
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Segment</th>
                    <th className="text-center px-4 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider w-24">Time</th>
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">What Happens</th>
                  </tr>
                </thead>
                <tbody>
                  {MEETING_STRUCTURE.map((row) => (
                    <tr key={row.segment} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-3 font-bold text-foreground">{row.segment}</td>
                      <td className="px-4 py-3 text-center text-muted-foreground text-xs">{row.time}</td>
                      <td className="px-5 py-3 text-muted-foreground">{row.what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.section>

        {/* ── What You Bring ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            What You Bring as an SDR
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-emerald-accent/20 bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 size={18} className="text-emerald-accent" />
                <h4 className="text-sm font-bold">Pre-Meeting Checklist</h4>
              </div>
              <ul className="space-y-2">
                {PRE_MEETING.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-red-400/20 bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <XCircle size={18} className="text-red-400" />
                <h4 className="text-sm font-bold">What Not to Bring</h4>
              </div>
              <ul className="space-y-2">
                {NOT_TO_BRING.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Why Attend ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Why SDRs Attend the Full Meeting
          </SectionLabel>

          <div className="space-y-3">
            {WHY_ATTEND.map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
                <CheckCircle2 size={14} className="text-amber-accent mt-0.5 shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Attendance Policy ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Attendance Policy
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5">
            <p className="text-sm text-foreground leading-relaxed mb-3">
              <span className="font-semibold">Mandatory</span> unless you&apos;ve communicated to
              leadership ahead of time — before the meeting, not during or after. If a prospect
              callback conflicts, take the call and tell your manager.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No formal punishment system. But leadership notices. Your teammates notice.
              Don&apos;t be the person who doesn&apos;t show up.
            </p>
          </motion.div>
        </motion.section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="meetings"
            upNext={[
              { slug: "accountability", title: "Accountability" },
              { slug: "certification", title: "Certification" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Meeting Cadence</p>
          <img src="/logos/logo.png" alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}

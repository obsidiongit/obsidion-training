"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Clock,
  MessageSquareWarning,
  Timer,
  Ban,
  Lightbulb,
  ChevronDown,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  PitchQuote,
  ProductPageHero,
  ProductPageFooter,
} from "../products/shared";

/* ─── data ─── */

interface Objection {
  trigger: string;
  response: string;
  note?: string;
}

interface Phase {
  id: string;
  label: string;
  icon: typeof Clock;
  color: "accent" | "amber" | "purple";
  description: string;
  objections: Objection[];
}

const PHASES: Phase[] = [
  {
    id: "early",
    label: "Early Call",
    icon: Clock,
    color: "accent",
    description:
      "These hit before you've earned the conversation. The goal is to buy 60 more seconds — not to pitch.",
    objections: [
      {
        trigger: "I'm slammed right now — can you email me?",
        response:
          "Totally get it. I'll keep this to two minutes: one question on how you handle inbound leads today, and if it's not a fit I'll send a one-pager and disappear. If I catch you at a bad time, what's a 15-minute window tomorrow that won't get bumped?",
      },
      {
        trigger: "Is this a sales call?",
        response:
          "Fair label — I'm reaching out because we deploy digital systems for businesses in your space. If what we do isn't useful, I'll tell you straight. Can I ask one question about how you're growing right now so I don't waste your time?",
      },
    ],
  },
  {
    id: "mid",
    label: "Mid-Call",
    icon: MessageSquareWarning,
    color: "amber",
    description:
      "The prospect is engaged but testing you — or genuinely skeptical. These need more substance than early-call deflections.",
    objections: [
      {
        trigger: "We tried an agency / vendor and got burned.",
        response:
          "Sorry that happened — that's more common than it should be. We're structured around speed, a defined deliverable list, and one team owning site + SEO + follow-up. What specifically went wrong last time — timeline, results, or communication? I'll tell you if we're built differently or if we're not the right fix.",
        note: "The follow-up question is the key move. Don't defend Obsidion before you know what they're defending against.",
      },
      {
        trigger: "We're handling it in-house.",
        response:
          "Respect that — it means someone on your team owns it. Quick question: when you Google your business category and city, where are you showing up — maps, organic, both, neither? Because that's usually where the gap lives, regardless of who's managing it.",
        note: "Redirects from the \"we vs. you\" frame to a diagnostic one.",
      },
      {
        trigger: "We're locked in a contract with someone else.",
        response:
          "Got it — when does that come up for renewal? I'm not trying to get you to break anything, but I'd rather have this conversation now so you have a real comparison when the time comes. What would need to be different about the next vendor for you to make a switch?",
        note: "Note the contract end date in Notion and set a reminder 60 days before it. This is a pipeline item, not a dead end.",
      },
      {
        trigger: "Can you show me examples of your work / a portfolio?",
        response:
          "Absolutely — I'll send over a few that match your vertical after this call. Quick question first so I pull the right ones: are you more focused on fixing the site itself, showing up in local search, or tightening up lead follow-up? I'll send examples that are actually relevant to where you're trying to go.",
        note: "Keeps them on the call and pre-qualifies what you send. Don't just fire off a portfolio link — make it targeted.",
      },
    ],
  },
  {
    id: "late",
    label: "Late Call",
    icon: Timer,
    color: "purple",
    description:
      "The prospect is interested but not yet committed. These objections are usually about risk, not fit — treat them that way.",
    objections: [
      {
        trigger: "Send pricing and I'll think about it.",
        response:
          "Happy to — pricing without scope usually misquotes you. Two quick details so I send the right tier: single location or multi, and are you trying to fix the site, the rankings, or the follow-up first? Then I'll email a clear range and we can book ten minutes to align.",
      },
      {
        trigger: "We don't have the budget right now.",
        response:
          "Appreciate you being straight with me. When you say budget — is it that the spend isn't approved yet, or that it's genuinely not there? Because if it's a timing thing, we can talk about when makes sense. If it's a fit question in disguise, I'd rather hear that.",
        note: "Most \"no budget\" objections are either a soft no or a timing issue. The question forces clarity without being aggressive.",
      },
      {
        trigger: "What if it doesn't work? What's your guarantee?",
        response:
          "Good question — and I'll be honest: we don't offer guarantees on rankings because anyone who does is lying to you. What we do guarantee is delivery. Your site goes live in seven days or we make it right. After that, results come from the system we build — and I can show you what that's looked like for similar businesses before you commit.",
        note: "Don't hedge. The honesty about what can't be guaranteed is itself a credibility move.",
      },
      {
        trigger: "We need to think about it. / Let me talk to my partner.",
        response:
          "Totally fair. What's the part you want to think through — timing, fit, or how we work? I'd rather answer it now than have you sit on a question I could clear up in two minutes.",
        note: "If there's a partner involved: offer to draft a summary they can forward. It reduces friction and keeps you in control of how Obsidion gets framed.",
      },
    ],
  },
];

const colorStyles = {
  accent: {
    badge: "bg-accent/10 text-accent",
    iconBg: "bg-accent/10 text-accent",
    border: "border-accent/20",
    triggerBg: "bg-accent/[0.04] border-accent/10",
    triggerText: "text-accent",
  },
  amber: {
    badge: "bg-amber-accent/10 text-amber-accent",
    iconBg: "bg-amber-accent/10 text-amber-accent",
    border: "border-amber-accent/20",
    triggerBg: "bg-amber-accent/[0.04] border-amber-accent/10",
    triggerText: "text-amber-accent",
  },
  purple: {
    badge: "bg-purple-accent/10 text-purple-accent",
    iconBg: "bg-purple-accent/10 text-purple-accent",
    border: "border-purple-accent/20",
    triggerBg: "bg-purple-accent/[0.04] border-purple-accent/10",
    triggerText: "text-purple-accent",
  },
};

/* ─── accordion for objections ─── */

function ObjectionAccordion({
  objections,
  color,
}: {
  objections: Objection[];
  color: "accent" | "amber" | "purple";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const styles = colorStyles[color];

  return (
    <div className="space-y-3">
      {objections.map((obj, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={i}
            variants={fadeUp}
            className="rounded-xl border border-border bg-card overflow-hidden transition-shadow hover:shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/30 transition-colors cursor-pointer"
            >
              <span className="text-sm font-semibold text-foreground pr-4">
                &ldquo;{obj.trigger}&rdquo;
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
              >
                <ChevronDown size={16} className="text-muted-foreground" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="px-5 pb-5 border-t border-border pt-4 space-y-3">
                    <div className={`rounded-xl border px-5 py-4 ${styles.triggerBg}`}>
                      <p className="text-sm italic leading-relaxed text-foreground">
                        &ldquo;{obj.response}&rdquo;
                      </p>
                    </div>
                    {obj.note && (
                      <div className="flex items-start gap-2.5 px-1">
                        <Lightbulb size={14} className={`mt-0.5 shrink-0 ${styles.triggerText}`} />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {obj.note}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── main component ─── */

export default function ObjectionHandlingContent({
  roleSlug,
}: {
  roleSlug: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}/on-the-call`}
        backLabel="On the Call"
        eyebrow="On the Call"
        title="Objection Handling"
        description="Live rebuttals organized by call phase. Label it, validate it, reframe it — every objection is a signal the prospect is still engaged."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Mindset ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Mindset
          </SectionLabel>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Shield size={24} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight">
                  Objections Are Requests for Information
                </h3>
                <p className="text-sm text-muted-foreground">
                  Not rejections. Silence is worse.
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Every objection is a signal that the prospect is engaged enough to
              push back. The pattern is always the same:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["Label it", "Validate it", "Reframe it"].map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-3 rounded-xl border border-accent/15 bg-accent/[0.03] px-5 py-4"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {step}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              Don&apos;t fight the objection. Walk alongside it. Adapt the tone to
              the moment, but don&apos;t over-script yourself.
            </p>
          </motion.div>
        </motion.section>

        {/* ── Objection Phases ── */}
        {PHASES.map((phase) => {
          const Icon = phase.icon;
          const styles = colorStyles[phase.color];
          const barColors: Record<string, string> = {
            accent: "bg-accent",
            amber: "bg-amber-accent",
            purple: "bg-purple-accent",
          };
          const textColors: Record<string, string> = {
            accent: "text-accent",
            amber: "text-amber-accent",
            purple: "text-purple-accent",
          };

          return (
            <motion.section
              key={phase.id}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <SectionLabel
                barClass={barColors[phase.color]}
                textClass={textColors[phase.color]}
              >
                {phase.label} Objections
              </SectionLabel>

              <motion.div
                variants={fadeUp}
                className="flex items-start gap-3 mb-6"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${styles.iconBg}`}
                >
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                  {phase.description}
                </p>
              </motion.div>

              <ObjectionAccordion
                objections={phase.objections}
                color={phase.color}
              />
            </motion.section>
          );
        })}

        {/* ── When Nothing Works ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            When Nothing Works
          </SectionLabel>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                <Ban size={24} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight">
                  Exit Clean, Leave the Door Open
                </h3>
                <p className="text-sm text-muted-foreground">
                  Don&apos;t drag it out.
                </p>
              </div>
            </div>

            <PitchQuote variant="accent" label="Clean Exit">
              I appreciate you being straight with me. Based on where you&apos;re
              at, it sounds like the timing isn&apos;t right. I&apos;ll follow up in
              [specific timeframe] — things change, and I&apos;d rather check back
              in than disappear. Is email the best way to reach you?
            </PitchQuote>

            <motion.div
              variants={fadeUp}
              className="mt-6 rounded-xl border border-accent/20 bg-accent/[0.04] px-5 py-4 flex items-start gap-3"
            >
              <Lightbulb size={18} className="text-accent mt-0.5 shrink-0" />
              <p className="text-sm leading-relaxed text-foreground">
                Log it in Notion with a note on what the blocker was and a
                reactivation date. A clean no today is often a yes six months from
                now.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      <ProductPageFooter />
    </div>
  );
}

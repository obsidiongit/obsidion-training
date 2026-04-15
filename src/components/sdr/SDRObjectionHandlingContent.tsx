"use client";

import { motion } from "framer-motion";
import {
  ShieldAlert,
  MessageCircle,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  PitchQuote,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const OBJECTIONS = [
  {
    objection: "\"Not interested.\"",
    mindset: "Usually means \"I don't know what you're offering and I'm busy.\"",
    response: "Totally fair — and I'm not trying to sell you anything right now. Quick question before I let you go: are you happy with how your business shows up when someone Googles [their category] in [their city]?",
    ifEngages: "You're back in. Ask one more qualifying question and move toward booking.",
    ifRepeats: "\"No problem at all. If anything changes on the marketing front, we're easy to find. Have a good one.\" — Log it, set a 60-day follow-up, move on.",
  },
  {
    objection: "\"Send me some info.\"",
    mindset: "Usually means \"I want to get off the phone without saying no.\"",
    response: "Happy to — what specifically would be most useful? Are you more curious about the website side, getting found on Google, or the follow-up automation? I'll send you the right thing so it's not just a generic brochure.",
    followUp: "\"I'll shoot that over today. And honestly, a 20-minute call with one of our specialists would give you way more than a PDF. Can I grab a quick time on the calendar for later this week?\"",
  },
  {
    objection: "\"We already have a website / agency / vendor.\"",
    mindset: "They're not saying they're happy. They're saying they have something. Find out if it's working.",
    response: "Got it — glad you're investing in that. Quick question: when you Google [their business type] in [their city], are you showing up where you'd want to be? Because we work with a lot of businesses that have a site but aren't getting the results they expected.",
    ifNotWorking: "\"Yeah, we hear that a lot. The best next step would be a quick call with someone who can look at your setup and tell you where the gaps are — no cost, no obligation. Would 20 minutes work?\"",
  },
  {
    objection: "\"We don't have the budget.\"",
    mindset: "You don't know exact pricing — keep it simple, redirect to the meeting.",
    response: "Makes sense — and I don't know what your budget looks like, so I wouldn't want to guess. The good news is the call is free and there's no commitment. The specialist can walk you through what we'd do and what it costs — and if it doesn't make sense, they'll tell you straight. Worth 20 minutes to find out?",
    ifStillNo: "\"Totally understand. When things free up, we'd love to chat. I'll check back in a couple months if that's cool.\"",
  },
  {
    objection: "\"I need to think about it.\"",
    mindset: "Interested but not ready to commit. Reduce the friction.",
    response: "For sure — what part are you wanting to think through? Because the call itself is just 20 minutes, no cost, no pressure. It's more of a 'let us show you what we'd do' situation than a hard pitch.",
    followUp: "\"How about this — I'll send you a quick email with a couple details, and I'll follow up [tomorrow / in a couple days] to see if you want to grab that 20 minutes. Sound fair?\"",
  },
  {
    objection: "\"How much does it cost?\"",
    mindset: "You don't quote pricing. That's the AE's job. But don't dodge entirely.",
    response: "Good question — it depends on what your business actually needs, which is why the 20-minute call exists. Our specialist will look at your setup and give you a straight answer. I wouldn't want to throw out a number that doesn't match your situation.",
    ifPress: "\"I can tell you it varies — some businesses start around a few hundred a month, others invest more. The call will give you the exact picture. Does [specific day/time] work?\"",
  },
  {
    objection: "\"Call me back later.\"",
    mindset: "Sometimes real, sometimes a brush-off. Lock in a specific time.",
    response: "Absolutely — when's best? I want to make sure I'm not catching you at a bad time again.",
    ifVague: "\"How about [specific day] at [specific time]? That way it's on both our calendars and I'm not guessing.\"",
  },
  {
    objection: "\"I'm not the right person.\"",
    mindset: "Actually useful — find out who is.",
    response: "No problem — who would be the best person to talk to about the website and marketing side? I just want to make sure I'm reaching the right person.",
    followUp: "Get the name. Get their number or email. Call and reference: \"Hey [Decision Maker], [Gatekeeper name] suggested I reach out to you...\"",
  },
] as const;

const QUICK_REF = [
  { objection: "\"Not interested\"", move: "Ask one question about their Google visibility" },
  { objection: "\"Send me info\"", move: "Ask what they want to see, then book the call" },
  { objection: "\"We have a vendor\"", move: "Ask if they're seeing results, offer free second opinion" },
  { objection: "\"No budget\"", move: "The call is free — worth 20 min to find out the cost" },
  { objection: "\"Need to think\"", move: "Reduce friction — it's just 20 min, no commitment" },
  { objection: "\"How much?\"", move: "Depends on needs — the call gives the exact answer" },
  { objection: "\"Call me back\"", move: "Lock in a specific day and time" },
  { objection: "\"Wrong person\"", move: "Get the right name and call them" },
] as const;

/* ─── component ─── */

export default function SDRObjectionHandlingContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}/on-the-call`}
        backLabel="Back to Outreach"
        eyebrow="Objections"
        title="Objection Handling"
        description="Word-for-word responses for every pushback you'll hear. The pattern: acknowledge it, ask a question, redirect to booking."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── The Mindset ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            The Mindset
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5 mb-6">
            <p className="text-sm text-foreground leading-relaxed mb-3">
              When someone pushes back, <span className="font-semibold">they&apos;re still talking to you.</span> That&apos;s
              a good sign. Silence is worse than an objection. The pattern is always:
            </p>
            <ol className="space-y-2">
              {[
                "Acknowledge it. Don't argue. Don't ignore it.",
                "Ask a question. Find out what's behind it.",
                "Redirect. Point back toward booking the appointment.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white text-xs font-bold">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-xl border border-amber-accent/20 bg-amber-accent/[0.04] px-5 py-4">
            <p className="text-sm text-foreground leading-relaxed">
              You&apos;re not trying to close the deal on the spot. You&apos;re trying to keep the
              conversation alive long enough to book a <span className="font-semibold">20-minute meeting with an AE.</span> That&apos;s
              a much lower bar — use it.
            </p>
          </motion.div>
        </motion.section>

        {/* ── Objection Cards ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Objection Responses
          </SectionLabel>

          <div className="space-y-6">
            {OBJECTIONS.map((obj) => (
              <motion.div
                key={obj.objection}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold mb-1">{obj.objection}</h3>
                <p className="text-xs text-muted-foreground mb-4">{obj.mindset}</p>

                <PitchQuote label="Your Response" variant="emerald">
                  {obj.response}
                </PitchQuote>

                {"followUp" in obj && obj.followUp && (
                  <div className="mt-3">
                    <PitchQuote label="Follow-Up" variant="accent">
                      {obj.followUp as string}
                    </PitchQuote>
                  </div>
                )}

                {"ifEngages" in obj && obj.ifEngages && (
                  <p className="text-xs text-muted-foreground mt-3">
                    <span className="font-semibold">If they engage:</span> {obj.ifEngages as string}
                  </p>
                )}
                {"ifRepeats" in obj && obj.ifRepeats && (
                  <p className="text-xs text-muted-foreground mt-2">
                    <span className="font-semibold">If they repeat:</span> {obj.ifRepeats as string}
                  </p>
                )}
                {"ifNotWorking" in obj && obj.ifNotWorking && (
                  <div className="mt-3">
                    <PitchQuote label="If It's Not Working" variant="purple">
                      {obj.ifNotWorking as string}
                    </PitchQuote>
                  </div>
                )}
                {"ifStillNo" in obj && obj.ifStillNo && (
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    {obj.ifStillNo as string}
                  </p>
                )}
                {"ifPress" in obj && obj.ifPress && (
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    <span className="font-semibold not-italic">If they press:</span> {obj.ifPress as string}
                  </p>
                )}
                {"ifVague" in obj && obj.ifVague && (
                  <p className="text-xs text-muted-foreground mt-3 italic">
                    <span className="font-semibold not-italic">If vague:</span> {obj.ifVague as string}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Quick Reference ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Quick Reference Card
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Objection</th>
                    <th className="text-left px-5 py-3 font-semibold text-amber-accent text-xs uppercase tracking-wider">Your First Move</th>
                  </tr>
                </thead>
                <tbody>
                  {QUICK_REF.map((row) => (
                    <tr key={row.objection} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-3 font-semibold text-foreground">{row.objection}</td>
                      <td className="px-5 py-3 text-muted-foreground">{row.move}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5">
            <h3 className="text-sm font-bold mb-2">The Rule</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every objection gets <span className="font-semibold text-foreground">one attempt to redirect.</span> If
              they push back twice, respect it and move on. You&apos;re not trying to win
              arguments — you&apos;re trying to book meetings.
            </p>
          </motion.div>
        </motion.section>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Objection Handling</p>
          <img src="/logos/logo.png" alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}

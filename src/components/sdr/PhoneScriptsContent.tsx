"use client";

import { motion } from "framer-motion";
import FlowChart from "@/components/ui/FlowChart";
import {
  Phone,
  MessageCircle,
  Clock,
  ShieldCheck,
  Voicemail,
  UserCheck,
  XCircle,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  PitchQuote,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const CALL_FLOW = [
  { label: "Open", sublabel: "10 sec" },
  { label: "Hook", sublabel: "30 sec" },
  { label: "Qualify", sublabel: "2-3 min" },
  { label: "Book", sublabel: "30 sec" },
  { label: "Confirm", sublabel: "30 sec" },
];

/* ─── component ─── */

export default function PhoneScriptsContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}/on-the-call`}
        backLabel="Back to Outreach"
        eyebrow="Phone"
        title="Phone Scripts"
        description="Cold call openers, qualifying questions, the booking ask, voicemail scripts, and gatekeeper navigation. Your primary channel for booking appointments."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── How to Use ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            How to Use These Scripts
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5 mb-6">
            <p className="text-sm text-foreground leading-relaxed">
              These are starting points. Don&apos;t read them word for word — you&apos;ll sound like
              a robot. Understand the logic behind each line, then say it like a normal person.
              Your goal: <span className="font-semibold">get the prospect talking, qualify them, and book the appointment.</span>
            </p>
          </motion.div>
        </motion.section>

        {/* ── Cold Call Openers ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Cold Call Openers
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            You have about 10 seconds before the prospect decides if they&apos;re hanging up.
          </motion.p>

          <div className="space-y-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-2">Version 1 — Lead With a Question</h4>
              <PitchQuote label="Say This">
                Hey [Name], this is [Your name] with Obsidion. Quick question — when someone
                Googles [their business type] in [their city], do you know where your business shows up?
              </PitchQuote>
              <p className="text-xs text-muted-foreground mt-3">
                <span className="font-semibold">Why it works:</span> It&apos;s a question they probably can&apos;t answer confidently. That gap is your opening.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-2">Version 2 — Lead With a Problem</h4>
              <PitchQuote label="Say This" variant="emerald">
                Hey [Name], this is [Your name] with Obsidion. I was looking at your business
                online and had a question about your website — do you have two minutes?
              </PitchQuote>
              <p className="text-xs text-muted-foreground mt-3">
                <span className="font-semibold">Before using:</span> Actually look at their website. Know what&apos;s wrong with it.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-2">Version 3 — Referral Opener</h4>
              <PitchQuote label="Say This" variant="purple">
                Hey [Name], this is [Your name] with Obsidion. [Referral name] mentioned you
                might be a good person to talk to — they said you&apos;ve been thinking about
                [website / marketing / getting more customers online]. Do you have a couple minutes?
              </PitchQuote>
              <p className="text-xs text-muted-foreground mt-3">
                <span className="font-semibold">Strongest opener you&apos;ll ever have.</span> Use this any time you have a referral.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-xl border border-amber-accent/20 bg-amber-accent/[0.04] px-5 py-4">
              <h4 className="text-sm font-bold mb-2">If they say &ldquo;I&apos;m busy&rdquo;:</h4>
              <p className="text-sm text-foreground italic leading-relaxed">
                &ldquo;Totally fair — I&apos;ll be quick. Is there a better time today or tomorrow I can
                call back? I just have one question about your online setup and it&apos;ll take two minutes.&rdquo;
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Qualifying Questions ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Qualifying Questions (BANT)
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold text-emerald-accent mb-3">Need Questions</h4>
              <ul className="space-y-2">
                {[
                  "\"How are you getting most of your customers right now?\"",
                  "\"Do you have a website? When's the last time it was updated?\"",
                  "\"If someone searches for [what they do] in [their city], where do you show up?\"",
                  "\"What happens when a lead calls after hours?\"",
                  "\"Are you currently running any paid ads on Facebook or Google?\"",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-accent shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold text-accent mb-3">Authority Questions</h4>
              <ul className="space-y-2">
                {[
                  "\"Are you the one who handles the marketing side of things?\"",
                  "\"If this turned out to be a fit, who would need to be part of that conversation?\"",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
              <h4 className="text-sm font-bold text-purple-accent mt-5 mb-3">Timeline Questions</h4>
              <ul className="space-y-2">
                {[
                  "\"Is this something you've been thinking about for a while?\"",
                  "\"Is there a timeline — a busy season, a launch, anything?\"",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-accent shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Booking the Appointment ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Booking the Appointment
          </SectionLabel>

          <div className="space-y-4">
            <motion.div variants={fadeUp}>
              <PitchQuote label="The Ask" variant="purple">
                Based on what you&apos;re telling me, I think it&apos;d be worth 20 minutes with
                one of our specialists. I&apos;m not the one who runs the demo — I just find the
                people it makes sense for. Can I grab a time on the calendar this week?
              </PitchQuote>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
              <h4 className="text-sm font-bold mb-2">If they hesitate:</h4>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                &ldquo;No commitment — it&apos;s a 20-minute conversation. If it&apos;s not a fit,
                they&apos;ll tell you straight. I just don&apos;t want you to miss it if it is.&rdquo;
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-xl border border-accent/20 bg-accent/[0.04] px-5 py-4">
              <p className="text-sm font-semibold text-foreground">
                Always suggest a specific time. &ldquo;Sometime this week&rdquo; gets forgotten.
                &ldquo;Tuesday at 2pm&rdquo; gets booked.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Voicemail ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Voicemail Script
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
            Keep it under 25 seconds. Don&apos;t pitch. Give one reason to call back.
          </motion.p>

          <motion.div variants={fadeUp}>
            <PitchQuote label="Voicemail">
              Hey [Name], this is [Your name] with Obsidion — [your phone number]. I had a quick
              question about your business&apos;s online presence. Not a sales pitch — just one
              question. Give me a call back: [your phone number]. That&apos;s [Your name], [your phone number].
            </PitchQuote>
          </motion.div>

          <motion.p variants={fadeUp} className="text-xs text-muted-foreground mt-3">
            Say your number at a normal pace. Repeat it once. That&apos;s it.
          </motion.p>
        </motion.section>

        {/* ── Gatekeeper Navigation ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Gatekeeper Navigation
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-3">When You Know the Owner&apos;s Name</h4>
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-3">
                &ldquo;Hey, is [Owner name] around? It&apos;s [Your name] from Obsidion.&rdquo;
              </p>
              <p className="text-xs text-muted-foreground">
                If they ask what it&apos;s about: &ldquo;I work with [their industry] businesses on their
                online setup — I just had a quick question.&rdquo;
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-3">When You Don&apos;t Know Who to Ask For</h4>
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-3">
                &ldquo;Quick question — who handles the marketing or website decisions there?&rdquo;
              </p>
              <p className="text-xs text-muted-foreground">
                Get a name, get a transfer, or get a callback time. Don&apos;t pitch the gatekeeper.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Call Flow Quick Reference ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Call Flow — Quick Reference
          </SectionLabel>

          <motion.div variants={fadeUp}>
            <FlowChart
              steps={CALL_FLOW}
              accentClass="bg-emerald-accent text-white"
              arrowClass="text-emerald-accent"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4 rounded-xl border border-emerald-accent/20 bg-emerald-accent/[0.04] px-5 py-4">
            <p className="text-sm text-foreground leading-relaxed">
              Total call time: <span className="font-bold">~5 minutes.</span> If it&apos;s going
              longer, you&apos;re either having a great conversation (qualify harder and book) or
              you&apos;re chatting instead of closing (wrap it up and book).
            </p>
          </motion.div>
        </motion.section>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Phone Scripts</p>
          <img src="/logos/logo.png" alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import {
  UserCircle,
  Linkedin,
  Facebook,
  Mail,
  Camera,
  Image,
  Type,
  FileText,
  MapPin,
  Phone,
  CheckCircle2,
  AlertTriangle,
  FileDown,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const LINKEDIN_STEPS = [
  { icon: Camera, title: "Profile photo", detail: "Professional headshot. Clean background. Good lighting. No sunglasses, no group photos." },
  { icon: Image, title: "Banner image", detail: "Upload the Obsidion-branded banner from your assets folder." },
  { icon: Type, title: "Headline", detail: "\"Helping local businesses get found online | Obsidion\" — not just your job title." },
  { icon: FileText, title: "About section", detail: "3-4 sentences about what you help businesses with, not about yourself." },
  { icon: UserCircle, title: "Experience", detail: "Add your Obsidion role. Title: \"Sales Development Representative.\"" },
  { icon: MapPin, title: "Location", detail: "Set to your market area. Prospects filter by location." },
  { icon: Phone, title: "Contact info", detail: "Make sure your email and phone are visible so prospects can reach you back." },
] as const;

const FACEBOOK_STEPS = [
  { icon: Camera, title: "Profile photo", detail: "Same professional photo as LinkedIn. Consistency builds recognition." },
  { icon: Image, title: "Cover photo", detail: "Upload the Obsidion-branded banner. Same one as LinkedIn." },
  { icon: Type, title: "Bio / Intro", detail: "\"Helping local businesses grow online with Obsidion.\" Add work info." },
  { icon: UserCircle, title: "Privacy settings", detail: "Professional posts visible to public. Personal stuff can stay private." },
] as const;

const INSTAGRAM_STEPS = [
  { icon: Camera, title: "Profile photo", detail: "Same professional photo as LinkedIn and Facebook for consistency." },
  { icon: Type, title: "Bio / Intro", detail: "\"Helping local businesses grow online 📈 | Marketing @obsidion\"" },
  { icon: FileText, title: "Link in Bio", detail: "Include a link to the Obsidion website or your specific booking link." },
  { icon: Image, title: "Content approach", detail: "You don't need a perfect grid, but ensure public posts are appropriate." },
] as const;

const EMAIL_INCLUDES = [
  "Your full name",
  "Your title: Sales Development Representative",
  "Obsidion (with branded header/footer images)",
  "Your phone number",
  "Your email address",
  "A link to the Obsidion website",
] as const;

const CHECKLIST = [
  { platform: "LinkedIn", tasks: ["Professional photo", "Obsidion banner", "Headline updated", "About section written", "Experience added"] },
  { platform: "Facebook", tasks: ["Professional photo", "Obsidion banner", "Bio / intro updated", "Privacy set for professional visibility"] },
  { platform: "Instagram", tasks: ["Professional photo", "Bio updated and company tagged", "Link in bio points to Obsidion"] },
  { platform: "Email", tasks: ["Branded signature installed", "Test email sent and verified"] },
] as const;

/* ─── component ─── */

export default function AmbassadorSetupContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Profile Setup"
        title="Ambassador Profile Setup"
        description="Set up your LinkedIn, Facebook, and email signature before you make a single call or send a single DM."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Personalized Onboarding Notice ── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative overflow-hidden rounded-2xl border-2 border-accent/40 bg-accent/[0.06] p-6 sm:p-8">
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/10 blur-2xl" />
            <div className="relative flex flex-col sm:flex-row items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <FileDown size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold mb-2">
                  You&apos;ll receive a personalized onboarding checklist
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Every new SDR gets their own onboarding document with
                  profile-setup instructions, credentials, and assets tailored
                  specifically to you. Follow that document as your primary
                  setup guide — it will walk you through everything step by
                  step.
                </p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  The sections below are kept as a <span className="font-medium text-foreground">general reference</span> in
                  case you need a refresher on best practices for any platform.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Why This Matters ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Why This Matters
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5 mb-6">
            <p className="text-sm text-foreground leading-relaxed">
              Prospects will Google you. They&apos;ll check your LinkedIn. They&apos;ll look at your
              Facebook. If your profile picture is a selfie from 2019 and your headline says
              &ldquo;Open to Work,&rdquo; you&apos;ve already lost credibility before the conversation starts.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-xl border border-amber-accent/20 bg-amber-accent/[0.04] px-5 py-4 flex items-start gap-3">
            <AlertTriangle size={16} className="text-amber-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold">Download all brand assets first</span> from the
              Downloadable Assets section: profile banner, email header, email footer, and logo files.
            </p>
          </motion.div>
        </motion.section>

        {/* ── LinkedIn Setup ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            LinkedIn Setup
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            LinkedIn is your primary professional channel. Your profile needs to say
            &ldquo;I help businesses grow&rdquo; — not &ldquo;I&apos;m looking for a job.&rdquo;
          </motion.p>

          <div className="space-y-4">
            {LINKEDIN_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <span className="text-sm font-black">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Facebook Setup ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Facebook Setup
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Many small business owners — especially in food, salons, contractors, and local
            services — spend more time on Facebook than LinkedIn.
          </motion.p>

          <div className="space-y-4">
            {FACEBOOK_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-accent/10 text-emerald-accent">
                    <span className="text-sm font-black">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Instagram Setup ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Instagram Setup
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            If you&apos;re prospecting on Instagram (which you should be for lifestyle, food, and salon verticals), your profile needs to look professional. Keep in mind that a mix of professional and appropriate personal content is fine.
          </motion.p>

          <div className="space-y-4">
            {INSTAGRAM_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-accent/10 text-purple-accent">
                    <span className="text-sm font-black">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Email Signature ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Email Signature Setup
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm mb-6">
            <h4 className="text-sm font-bold mb-3">Your signature should include:</h4>
            <ul className="space-y-2">
              {EMAIL_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-xl border border-purple-accent/20 bg-purple-accent/[0.04] px-5 py-4">
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold">Send yourself a test email</span> to make sure it
              renders correctly on both desktop and mobile before going live.
            </p>
          </motion.div>
        </motion.section>

        {/* ── The Checklist ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Pre-Outreach Checklist
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Don&apos;t skip this. It takes 30 minutes and affects every interaction you have from
            this point forward.
          </motion.p>

          <div className="space-y-4">
            {CHECKLIST.map((group) => (
              <motion.div
                key={group.platform}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <h4 className="text-sm font-bold mb-3">{group.platform}</h4>
                <ul className="space-y-2">
                  {group.tasks.map((task) => (
                    <li key={task} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-emerald-accent shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="ambassador-setup"
            upNext={[
              { slug: "products", title: "Product Knowledge (Lite)" },
              { slug: "on-the-call", title: "Outreach Playbook" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Ambassador Setup</p>
          <img src="/logos/logo.png" alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}

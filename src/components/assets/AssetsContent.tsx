"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import {
  Download,
  Image,
  FileText,
  Code,
  FileDown,
  Clock,
  Camera,
  Palette,
  Instagram,
  Linkedin,
  Mail,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Smartphone,
} from "lucide-react";
import { stagger, fadeUp, SectionLabel, ProductPageHero } from "../products/shared";

/* ─── data ─── */

interface AssetFile {
  label: string;
  description: string;
  href: string;
  icon: typeof Image;
  size?: string;
  status: "available" | "placeholder" | "coming-soon";
}

const BRAND_FILES: AssetFile[] = [
  {
    label: "Logo — PNG",
    description: "Raster logo for slides, Google Docs, social headers, and anywhere SVG isn't supported.",
    href: "/assets/logo.png",
    icon: Image,
    size: "~326 KB",
    status: "available",
  },
  {
    label: "Logo with Text — PNG",
    description: "Horizontal logo lockup with wordmark. Use for email headers, decks, and co-branded materials.",
    href: "/assets/logotext.png",
    icon: Image,
    size: "~25 KB",
    status: "available",
  },
  {
    label: "Logo — SVG",
    description: "Vector logo for web, proposals, and anything that needs infinite scaling without quality loss.",
    href: "/assets/logo.svg",
    icon: FileText,
    size: "< 1 KB",
    status: "placeholder",
  },
  {
    label: "Email Footer / Signature",
    description: "HTML snippet to paste into your mail client or send to IT for a standardized signature block.",
    href: "/assets/email-footer.html",
    icon: Code,
    size: "< 1 KB",
    status: "placeholder",
  },
  {
    label: "Brand Guidelines",
    description: "Official colors, typography, clear space rules, and do/don't examples for client-facing materials.",
    href: "/assets/brand-guidelines.pdf",
    icon: Palette,
    size: "PDF",
    status: "placeholder",
  },
];

const COMING_SOON: { label: string; description: string; icon: typeof Image }[] = [
  {
    label: "Proposal Template",
    description:
      "Google Slides deck with approved structure, cover page, pricing section, and Obsidion branding. Drop in client details — no design work required.",
    icon: FileDown,
  },
  {
    label: "Social Media — Profile Image",
    description:
      "1:1 Obsidion logo on dark background, sized for Instagram, LinkedIn, and Facebook profile photos (1080×1080 px).",
    icon: Instagram,
  },
  {
    label: "Social Media — LinkedIn Banner",
    description:
      "Wide banner (1584×396 px) for your LinkedIn profile. Co-branded with the Obsidion mark and your role title.",
    icon: Linkedin,
  },
  {
    label: "Cannabis Vertical One-Pager",
    description: "Single-page PDF leave-behind for cannabis prospects. Highlights the stack, delivery timeline, and pricing tier overview.",
    icon: FileText,
  },
  {
    label: "Food & Hospitality One-Pager",
    description: "Single-page PDF for F&H prospects. Restaurant/bar-specific pain points, solutions, and pricing at a glance.",
    icon: FileText,
  },
  {
    label: "Salon & Med Spa One-Pager",
    description: "Single-page PDF for salon and med spa prospects. Covers booking, loyalty, and remarketing angles.",
    icon: FileText,
  },
  {
    label: "Automotive One-Pager",
    description: "Single-page PDF for auto shops. Focuses on local SEO, review generation, and online booking uplift.",
    icon: FileText,
  },
];

const HEADSHOT_RULES = [
  {
    icon: Camera,
    title: "Backdrop",
    detail: "Clean, neutral background — white, light grey, or dark charcoal. No brick walls, office clutter, or busy environments.",
  },
  {
    icon: Smartphone,
    title: "Shot quality",
    detail: "At minimum: a modern smartphone on a tripod or propped against something stable, in good natural light. Avoid on-camera flash — it flattens everything.",
  },
  {
    icon: Image,
    title: "Framing",
    detail: "Head-and-shoulders crop. Your face should fill roughly 60–70% of the frame. Centered. Eyes at approximately the upper third of the image.",
  },
  {
    icon: Palette,
    title: "Dress code",
    detail: "Business casual minimum. Solid colors photograph better than patterns. Avoid white on white backgrounds.",
  },
  {
    icon: Mail,
    title: "Delivery",
    detail: "Send your final headshot to your manager as a JPEG or PNG, minimum 1000px on the shortest side. Filename: FirstName-LastName-headshot.jpg",
  },
];

const statusMap = {
  available: { label: "Download", color: "text-accent", bg: "bg-accent/10 hover:bg-accent/20", icon: Download },
  placeholder: { label: "Placeholder — replace before use", color: "text-amber-500", bg: "bg-amber-500/10 hover:bg-amber-500/15", icon: AlertCircle },
  "coming-soon": { label: "Coming soon", color: "text-muted-foreground", bg: "bg-muted/50", icon: Clock },
};

/* ─── component ─── */

export default function AssetsContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        eyebrow="Shared Section"
        title="Downloadable Assets"
        description="Approved brand files for proposals, decks, social profiles, and email. Use these — don't improvise. If something is missing or outdated, ping marketing before creating your own version."
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-16">

        {/* ── Brand Kit ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-5"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel barClass="bg-accent" textClass="text-accent">
              Brand Kit
            </SectionLabel>
          </motion.div>

          <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed">
            Core brand files for day-to-day use. Files marked{" "}
            <span className="text-amber-500 font-medium">placeholder</span> are functional but
            will be replaced with finalized versions — check the Slack channel before sending to
            a client.
          </motion.p>

          <div className="space-y-3">
            {BRAND_FILES.map((file) => {
              const Icon = file.icon;
              const StatusIcon = statusMap[file.status].icon;
              const isDownloadable = file.status !== "coming-soon";

              return (
                <motion.div
                  key={file.label}
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <h3 className="text-sm font-bold text-foreground">{file.label}</h3>
                        {file.size && (
                          <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded-full font-medium">
                            {file.size}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{file.description}</p>
                    </div>
                  </div>

                  <div className="shrink-0 sm:ml-4">
                    {isDownloadable ? (
                      <a
                        href={file.href}
                        download
                        className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-colors ${statusMap[file.status].bg} ${statusMap[file.status].color}`}
                      >
                        <StatusIcon size={13} />
                        {statusMap[file.status].label}
                      </a>
                    ) : (
                      <span className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold ${statusMap[file.status].bg} ${statusMap[file.status].color}`}>
                        <StatusIcon size={13} />
                        {statusMap[file.status].label}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Coming Soon ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-5"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
              In Preparation
            </SectionLabel>
          </motion.div>

          <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed">
            These files are being prepared by the team. When they&apos;re ready, they&apos;ll appear above
            with download buttons. You&apos;ll be notified in Slack when a new kit drops.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COMING_SOON.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-xl border border-border/50 bg-muted/10 p-4 opacity-70"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground mt-0.5">
                    <Icon size={16} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-sm font-semibold text-foreground">{item.label}</h3>
                      <Clock size={11} className="text-muted-foreground shrink-0" />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Headshot Guidelines ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-5"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
              Headshot Guidelines
            </SectionLabel>
          </motion.div>

          <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed">
            A professional headshot is required for your LinkedIn profile, internal directory, and
            any co-branded client-facing materials. You don&apos;t need a photographer — follow these
            guidelines and you can do it yourself.
          </motion.p>

          <div className="space-y-3">
            {HEADSHOT_RULES.map((rule) => {
              const Icon = rule.icon;
              return (
                <motion.div
                  key={rule.title}
                  variants={fadeUp}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-accent/10 text-purple-accent mt-0.5">
                    <Icon size={17} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">{rule.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{rule.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-purple-accent/20 bg-purple-accent/[0.04] px-5 py-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 size={14} className="text-purple-accent" />
              <span className="text-sm font-semibold text-purple-accent">Quick self-shoot checklist</span>
            </div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {[
                "Stand 3–4 feet from a window for soft, even light",
                "Put your phone on a surface at eye level — don't hold it up",
                "Shoot 10–15 frames and pick the best one",
                "Smile with your eyes — not just your mouth",
                "Send to your manager before using publicly",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-purple-accent/60 mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ── Usage Rules ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-5"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel barClass="bg-red-400" textClass="text-red-400">
              Usage Rules
            </SectionLabel>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-emerald-accent/20 bg-emerald-accent/[0.04] p-5">
              <h3 className="text-sm font-bold text-emerald-accent mb-3 flex items-center gap-2">
                <CheckCircle2 size={15} />
                Do
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Use the approved files from this page only",
                  "Keep proportions when resizing logos",
                  "Use the email footer template for all outbound",
                  "Check back after Slack announcements for updated kits",
                ].map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <span className="text-emerald-accent mt-0.5 shrink-0">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-red-400/20 bg-red-400/[0.04] p-5">
              <h3 className="text-sm font-bold text-red-400 mb-3 flex items-center gap-2">
                <AlertCircle size={15} />
                Don&apos;t
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Recreate, recolor, or stretch the logo",
                  "Create your own branded materials without approval",
                  "Send placeholder files (marked amber above) to clients",
                  "Screenshot or screen-record the logo from the site",
                ].map((r) => (
                  <li key={r} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <MarkCompleteButton
          roleSlug={roleSlug}
          sectionSlug="assets"
          upNext={[
            { slug: "tech", title: "Tech We Use" },
            { slug: "on-the-call", title: "On the Call" },
          ]}
        />
      </main>
    </div>
  );
}

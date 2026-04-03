"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  BookOpen,
  Phone,
  Package,
  DollarSign,
  BarChart3,
  Wrench,
  Download,
  ArrowLeft,
  ArrowRight,
  FileText,
  Image,
  Code,
  FileDown,
} from "lucide-react";

const FEATURED = [
  {
    slug: "playbooks",
    title: "Training Playbooks",
    description:
      "Vertical-specific sales training for each industry. Deep-dive modules covering positioning, objections, pricing, and closing strategies.",
    icon: BookOpen,
    badges: ["Cannabis", "Food & Hospitality", "Salon & Med-Spa", "Automotive", "Contractors"],
  },
  {
    slug: "on-the-call",
    title: "On the Call",
    description:
      "Live call frameworks, scripts, and objection-handling flows to keep conversations on track and close with confidence.",
    icon: Phone,
    badges: ["Scripts", "Objection Handling", "Call Framework"],
  },
] as const;

const QUICK_ACCESS = [
  {
    slug: "products",
    title: "Product Knowledge",
    description: "Every Obsidion product, inside and out.",
    icon: Package,
  },
  {
    slug: "getting-paid",
    title: "Getting Paid & Bonuses",
    description: "Comp structure, commissions, and bonus tiers.",
    icon: DollarSign,
  },
  {
    slug: "performance",
    title: "Performance Expectations",
    description: "KPIs, ramp schedule, and activity benchmarks.",
    icon: BarChart3,
  },
  {
    slug: "tech",
    title: "Tech We Use",
    description: "CRM, dialer, and internal systems.",
    icon: Wrench,
  },
] as const;

const ASSET_ITEMS = [
  { href: "/assets/logo.png", label: "Logo PNG", icon: Image },
  { href: "/assets/logo.svg", label: "Logo SVG", icon: FileText },
  { href: "/assets/email-banner.png", label: "Email Banner", icon: Image },
  { href: "/assets/email-footer.html", label: "Email Footer", icon: Code },
  { href: "/assets/brand-guidelines.pdf", label: "Brand Guidelines", icon: FileDown },
] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] as const },
  },
};

export default function RoleHubPage() {
  const { roleSlug } = useParams<{ roleSlug: string }>();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-muted/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-6">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-accent transition-colors mb-4 inline-flex items-center gap-1.5"
          >
            <ArrowLeft size={14} />
            All roles
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mb-2">
            Account Executive Hub
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Everything you need to ramp as an AE at Obsidion. Work through each
            section at your own pace.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* ── Featured Row ── */}
          <section>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <div className="h-1 w-6 rounded-full bg-accent" />
              <h2 className="text-xs font-semibold uppercase tracking-wider text-accent">
                Core Training
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {FEATURED.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.div key={section.slug} variants={fadeUp}>
                    <Link
                      href={`/role/${roleSlug}/${section.slug}`}
                      className="group relative block h-full rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                            <Icon size={22} strokeWidth={1.8} />
                          </div>
                          <h3 className="text-lg font-bold tracking-tight group-hover:text-accent transition-colors">
                            {section.title}
                          </h3>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                          {section.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {section.badges.map((badge) => (
                            <span
                              key={badge}
                              className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all group-hover:gap-2">
                          Open section
                          <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Quick Access Row ── */}
          <section>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <div className="h-1 w-6 rounded-full bg-emerald-accent" />
              <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-accent">
                Quick Access
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {QUICK_ACCESS.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.div key={section.slug} variants={fadeUp}>
                    <Link
                      href={`/role/${roleSlug}/${section.slug}`}
                      className="group relative block h-full rounded-xl border border-border bg-card p-4 sm:p-5 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-md hover:-translate-y-0.5"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-accent/10 group-hover:text-accent mb-3">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <h3 className="text-sm font-bold tracking-tight mb-1 group-hover:text-accent transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {section.description}
                      </p>
                      <ArrowRight
                        size={12}
                        className="absolute top-4 right-4 text-muted-foreground/0 transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5"
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Downloadable Assets (inline) ── */}
          <motion.section variants={fadeUp}>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-6 rounded-full bg-amber-accent" />
              <h2 className="text-xs font-semibold uppercase tracking-wider text-amber-accent">
                Downloadable Assets
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-accent/10 text-amber-accent">
                  <Download size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Brand Assets & Templates</h3>
                  <p className="text-xs text-muted-foreground">
                    Approved files for proposals, decks, and email
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {ASSET_ITEMS.map((asset) => {
                  const AssetIcon = asset.icon;
                  return (
                    <a
                      key={asset.href}
                      href={asset.href}
                      download
                      className="group flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background p-3 text-center transition-all hover:border-accent/30 hover:shadow-sm hover:-translate-y-0.5"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                        <AssetIcon size={16} strokeWidth={1.8} />
                      </div>
                      <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                        {asset.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
}

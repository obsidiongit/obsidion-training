"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
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
  Users,
  ShieldAlert,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  Briefcase,
  HeartHandshake,
  Megaphone,
  Settings,
  Search,
  X,
} from "lucide-react";
import DailyChecklistSection from "@/components/daily-structure/DailyChecklistSection";
import { getCompletedSections, HUB_PROGRESS_EVENT } from "@/lib/hubProgress";
import { getAllRoles, getRole } from "@/data/roles/registry";

/* ─── Section definitions ─── */

const FEATURED = [
  {
    slug: "playbooks",
    title: "Training Playbooks",
    description:
      "Vertical-specific sales training for each industry. Deep-dive modules covering positioning, objections, pricing, and closing strategies.",
    icon: BookOpen,
    badges: ["Cannabis", "Food & Hospitality", "Salon & Med-Spa", "Automotive", "Contractors"],
    shared: false,
  },
  {
    slug: "on-the-call",
    title: "On the Call",
    description:
      "Live call frameworks, scripts, and objection-handling flows to keep conversations on track and close with confidence.",
    icon: Phone,
    badges: ["Scripts", "Objection Handling", "Call Framework"],
    shared: false,
  },
  {
    slug: "certification",
    title: "Certification & Readiness Gate",
    description:
      "Nobody touches a live prospect until they've passed all seven gates. Complete this before going live.",
    icon: BadgeCheck,
    badges: ["7 Gates", "Role-Play Assessed", "Manager Sign-Off"],
    shared: false,
  },
] as const;

const QUICK_ACCESS = [
  {
    slug: "products",
    title: "Product Knowledge",
    description: "Every Obsidion product, inside and out.",
    icon: Package,
    shared: false,
  },
  {
    slug: "getting-paid",
    title: "Getting Paid & Bonuses",
    description: "Comp structure, commissions, and bonus tiers.",
    icon: DollarSign,
    shared: false,
  },
  {
    slug: "performance",
    title: "Performance Expectations",
    description: "KPIs, ramp schedule, and activity benchmarks.",
    icon: BarChart3,
    shared: false,
  },
  {
    slug: "tech",
    title: "Tech We Use",
    description: "CRM, dialer, and internal systems.",
    icon: Wrench,
    shared: true,
  },
  {
    slug: "meetings",
    title: "Meeting Cadence",
    description: "Twice-weekly format, prep, and expectations.",
    icon: Users,
    shared: false,
  },
  {
    slug: "accountability",
    title: "Accountability",
    description: "What wins here and what ends the relationship.",
    icon: ShieldAlert,
    shared: false,
  },
] as const;

const ASSET_ITEMS = [
  { href: "/assets/logo.png", label: "Logo PNG", icon: Image },
  { href: "/assets/logo.svg", label: "Logo SVG", icon: FileText },
  { href: "/assets/email-banner.png", label: "Email Banner", icon: Image },
  { href: "/assets/email-footer.html", label: "Email Footer", icon: Code },
  { href: "/assets/brand-guidelines.pdf", label: "Brand Guidelines", icon: FileDown },
] as const;

/** All trackable section slugs for the AE hub */
const TRACKABLE_SECTIONS = [
  "playbooks",
  "on-the-call",
  "certification",
  "products",
  "getting-paid",
  "performance",
  "tech",
  "meetings",
  "accountability",
  "daily-structure",
];

const ROLE_ICONS: Record<string, React.ElementType> = {
  "account-executive": Briefcase,
  "customer-success": HeartHandshake,
  marketing: Megaphone,
  operations: Settings,
};

/* ─── Animation variants ─── */

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

/* ─── Progress Ring ─── */

function ProgressRing({
  percent,
  size = 64,
  stroke = 5,
}: {
  percent: number;
  size?: number;
  stroke?: number;
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;

  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="currentColor"
        strokeWidth={stroke} className="text-muted/40" />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke="currentColor" strokeWidth={stroke}
        strokeLinecap="round"
        className="text-accent"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      />
    </svg>
  );
}

/* ─── Page ─── */

function ComingSoonHub({ roleSlug }: { roleSlug: string }) {
  const role = getRole(roleSlug);
  const allRoles = getAllRoles();
  const activeRoles = allRoles.filter((r) => r.slug !== roleSlug && r.status === "active");

  return (
    <div className="min-h-screen bg-background">
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
            {role?.title ?? "Role"} Hub
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {role?.description}
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="rounded-2xl border border-dashed border-border bg-muted/10 px-8 py-16 text-center"
        >
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-muted-foreground mb-5">
            <BookOpen size={28} strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight mb-3">Training hub coming soon</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
            Content for the {role?.title} role is being prepared. Check back soon — it follows the same
            structure as the Account Executive hub.
          </p>
          {activeRoles.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              {activeRoles.map((r) => (
                <Link
                  key={r.slug}
                  href={`/role/${r.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold transition-all hover:border-accent/40 hover:text-accent hover:shadow-sm"
                >
                  <ArrowLeft size={13} className="rotate-180" />
                  {r.title} Hub
                </Link>
              ))}
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Back to all roles
              </Link>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}

export default function RoleHubPage() {
  const { roleSlug } = useParams<{ roleSlug: string }>();
  const role = getRole(roleSlug);
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const allRoles = getAllRoles();
  const otherRoles = allRoles.filter((r) => r.slug !== roleSlug);

  if (role?.status === "coming-soon") {
    return <ComingSoonHub roleSlug={roleSlug} />;
  }

  const q = searchQuery.toLowerCase().trim();

  const filteredFeatured = q
    ? FEATURED.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.badges.some((b) => b.toLowerCase().includes(q))
      )
    : FEATURED;

  const filteredQuickAccess = q
    ? QUICK_ACCESS.filter(
        (s) =>
          s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
      )
    : QUICK_ACCESS;

  const refreshProgress = useCallback(() => {
    setCompletedSections(getCompletedSections(roleSlug));
  }, [roleSlug]);

  useEffect(() => {
    refreshProgress();
    window.addEventListener(HUB_PROGRESS_EVENT, refreshProgress);
    return () => window.removeEventListener(HUB_PROGRESS_EVENT, refreshProgress);
  }, [refreshProgress]);

  const totalSections = TRACKABLE_SECTIONS.length;
  const completedCount = completedSections.length;
  const percent = Math.round((completedCount / totalSections) * 100);

  function isComplete(slug: string) {
    return completedSections.includes(slug);
  }

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

          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground mb-2">
                Account Executive Hub
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Everything you need to ramp as an AE at Obsidion. Work through each
                section at your own pace.
              </p>

              {/* Search */}
              <div className="relative mt-4 max-w-sm">
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Search sections…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background pl-9 pr-8 py-2 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Progress ring */}
            <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-1">
              <div className="relative">
                <ProgressRing percent={percent} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-foreground">{percent}%</span>
                </div>
              </div>
              <span className="text-[10px] text-muted-foreground font-medium whitespace-nowrap">
                {completedCount}/{totalSections} done
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 pb-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* ── Search empty state ── */}
          {q && filteredFeatured.length === 0 && filteredQuickAccess.length === 0 && (
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-border bg-muted/10 px-6 py-10 text-center"
            >
              <p className="text-sm text-muted-foreground">
                No sections match &ldquo;<span className="font-medium text-foreground">{searchQuery}</span>&rdquo;
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-3 text-sm text-accent hover:underline"
              >
                Clear search
              </button>
            </motion.div>
          )}

          {/* ── Featured Row ── */}
          {(!q || filteredFeatured.length > 0) && (
          <section>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <div className="h-1 w-6 rounded-full bg-accent" />
              <h2 className="text-xs font-semibold uppercase tracking-wider text-accent">
                Core Training
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {filteredFeatured.map((section) => {
                const Icon = section.icon;
                const done = isComplete(section.slug);
                return (
                  <motion.div
                    key={section.slug}
                    variants={fadeUp}
                    whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                    whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                  >
                    <Link
                      href={`/role/${roleSlug}/${section.slug}`}
                      className={`
                        group relative block h-full rounded-2xl border bg-card p-6 sm:p-8 shadow-sm
                        transition-all duration-300 hover:shadow-lg
                        ${done
                          ? "border-emerald-500/30 hover:border-emerald-500/50"
                          : "border-border hover:border-accent/30"
                        }
                      `}
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Top-right badges */}
                      <div className="absolute top-4 right-4 flex items-center gap-1.5">
                        {section.shared && (
                          <div className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                            Shared
                          </div>
                        )}
                        {done && (
                          <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                            <CheckCircle2 size={10} />
                            Done
                          </div>
                        )}
                      </div>

                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`
                            flex h-11 w-11 items-center justify-center rounded-xl transition-colors
                            ${done
                              ? "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20"
                              : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                            }
                          `}>
                            <Icon size={22} strokeWidth={1.8} />
                          </div>
                          <h3 className={`
                            text-lg font-bold tracking-tight transition-colors
                            ${done ? "group-hover:text-emerald-400" : "group-hover:text-accent"}
                          `}>
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

                        <span className={`
                          inline-flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2
                          ${done ? "text-emerald-400" : "text-accent"}
                        `}>
                          {done ? "Review section" : "Open section"}
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
          )}

          {/* ── Quick Access Row ── */}
          {(!q || filteredQuickAccess.length > 0) && (
          <section>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <div className="h-1 w-6 rounded-full bg-emerald-accent" />
              <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-accent">
                Quick Access
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
              {filteredQuickAccess.map((section) => {
                const Icon = section.icon;
                const done = isComplete(section.slug);
                return (
                  <motion.div
                    key={section.slug}
                    variants={fadeUp}
                    whileHover={{ y: -3, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                    whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                  >
                    <Link
                      href={`/role/${roleSlug}/${section.slug}`}
                      className={`
                        group relative block h-full rounded-xl border bg-card p-4 sm:p-5 shadow-sm
                        transition-all duration-300 hover:shadow-md
                        ${done
                          ? "border-emerald-500/20 hover:border-emerald-500/40"
                          : "border-border hover:border-accent/30"
                        }
                      `}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className={`
                          flex h-9 w-9 items-center justify-center rounded-lg transition-colors
                          ${done
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent"
                          }
                        `}>
                          <Icon size={18} strokeWidth={1.8} />
                        </div>
                        <div className="flex items-center gap-1 mt-0.5">
                          {section.shared && (
                            <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground/60 bg-muted px-1.5 py-0.5 rounded-full">
                              Shared
                            </span>
                          )}
                          {done && (
                            <CheckCircle2 size={14} className="text-emerald-500" />
                          )}
                        </div>
                      </div>
                      <h3 className={`
                        text-sm font-bold tracking-tight mb-1 transition-colors
                        ${done ? "group-hover:text-emerald-400" : "group-hover:text-accent"}
                      `}>
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
          )}

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

          {/* ── Daily Operating Rhythm (inline checklist) ── */}
          <motion.section variants={fadeUp}>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-6 rounded-full bg-purple-accent" />
              <h2 className="text-xs font-semibold uppercase tracking-wider text-purple-accent">
                Daily Operating Rhythm
              </h2>
            </div>
            <DailyChecklistSection />
          </motion.section>

          {/* ── Explore Other Roles ── */}
          {otherRoles.length > 0 && (
            <motion.section variants={fadeUp}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-6 rounded-full bg-muted-foreground/40" />
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Explore Other Roles
                </h2>
              </div>

              <div className="rounded-2xl border border-border bg-muted/10 p-5 sm:p-6">
                <p className="text-sm text-muted-foreground mb-4">
                  Understand how other teams at Obsidion operate — great for cross-functional context.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {otherRoles.map((otherRole) => {
                    const RoleIcon = ROLE_ICONS[otherRole.slug] ?? Briefcase;
                    const isActive = otherRole.status === "active";
                    return (
                      <div key={otherRole.slug} className="relative">
                        <Link
                          href={`/role/${otherRole.slug}`}
                          className={`group flex items-center gap-3 rounded-xl border bg-card p-4 transition-all hover:shadow-sm ${
                            isActive
                              ? "border-border hover:border-accent/30"
                              : "border-border/50 hover:border-border opacity-70 hover:opacity-90"
                          }`}
                        >
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors shrink-0 ${
                            isActive
                              ? "bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent"
                              : "bg-muted text-muted-foreground"
                          }`}>
                            <RoleIcon size={16} strokeWidth={1.8} />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold truncate">{otherRole.title}</div>
                            <div className="text-xs text-muted-foreground truncate">
                              {isActive ? otherRole.shortTitle : "Coming soon"}
                            </div>
                          </div>
                          <ChevronRight size={14} className={`ml-auto shrink-0 transition-colors ${
                            isActive
                              ? "text-muted-foreground/0 group-hover:text-accent"
                              : "text-muted-foreground/30"
                          }`} />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.section>
          )}
        </motion.div>
      </main>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import HeroSection from "./HeroSection";
import RoleCard from "./RoleCard";
import AboutCompanyPanel from "@/components/AboutCompanyPanel";
import type { RoleDefinition } from "@/data/roles/registry";

interface LandingPageProps {
  roles: RoleDefinition[];
}

export default function LandingPage({ roles }: LandingPageProps) {
  const activeRoles = roles.filter((r) => r.status === "active");
  const comingSoonRoles = roles.filter((r) => r.status === "coming-soon");

  return (
    <div className="relative min-h-screen bg-background gradient-mesh overflow-hidden">
      <FloatingShapes />

      <div className="relative z-10">
        {/* hero */}
        <section className="pt-16 sm:pt-24 pb-12 px-4 sm:px-6">
          <HeroSection />
        </section>

        {/* active roles + about panel */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles size={16} className="text-accent" />
            <h2 className="text-sm font-semibold tracking-wide uppercase text-accent">
              Get Started
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 items-stretch sm:grid-cols-2 gap-5">
            {activeRoles.map((role, i) => (
              <RoleCard key={role.slug} role={role} index={i} />
            ))}
            <AboutCompanyPanel />
          </div>
        </section>

        {/* coming soon */}
        {comingSoonRoles.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.4 }}
              className="flex items-center gap-2 mb-6 mt-4"
            >
              <h2 className="text-sm font-semibold tracking-wide uppercase text-foreground-subtle">
                More Roles Coming Soon
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {comingSoonRoles.map((role, i) => (
                <RoleCard
                  key={role.slug}
                  role={role}
                  index={activeRoles.length + i}
                />
              ))}
            </div>
          </section>
        )}

        {/* footer */}
        <footer className="border-t border-border-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foreground-subtle">
              Obsidion Training Hub &middot; Progress is saved locally in your
              browser
            </p>
            <img
              src="/logos/logo.png"
              alt="Obsidion"
              className="h-6 w-auto opacity-30"
            />
          </div>
        </footer>
      </div>
    </div>
  );
}

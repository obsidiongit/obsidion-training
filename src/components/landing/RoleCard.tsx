"use client";

import { useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lock,
  Briefcase,
  HeartHandshake,
  Megaphone,
  Settings,
  type LucideIcon,
} from "lucide-react";
import type { RoleDefinition } from "@/data/roles/registry";

const ICON_MAP: Record<string, LucideIcon> = {
  Briefcase,
  HeartHandshake,
  Megaphone,
  Settings,
};

interface RoleCardProps {
  role: RoleDefinition;
  index: number;
}

export default function RoleCard({ role, index }: RoleCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const isActive = role.status === "active";
  const Icon = ICON_MAP[role.iconName] ?? Briefcase;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -8,
      y: (x - 0.5) * 8,
    });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setHovering(false);
  }

  const card = (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.15 * index,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovering
          ? "transform 0.1s ease-out"
          : "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      className="group relative h-full"
    >
      {/* glow layer */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isActive
            ? `linear-gradient(135deg, ${role.accentColor}20, ${role.accentColor}05)`
            : undefined,
          boxShadow: isActive
            ? `0 0 40px ${role.accentGlow}, 0 0 80px ${role.accentGlow.replace("0.35", "0.15")}`
            : undefined,
        }}
      />

      <div
        className={`
          relative flex h-full min-h-0 flex-col rounded-2xl border bg-card p-6 sm:p-8
          transition-all duration-300
          ${isActive ? "border-border hover:border-transparent cursor-pointer" : "border-border/60 opacity-70 cursor-default"}
        `}
        style={{
          boxShadow:
            hovering && isActive
              ? `0 0 0 1px ${role.accentColor}25, 0 8px 30px ${role.accentGlow.replace("0.35", "0.1")}`
              : "0 0 0 1px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.03)",
        }}
      >
        <div className="flex items-start justify-between mb-4">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300"
            style={{
              backgroundColor:
                hovering && isActive
                  ? `${role.accentColor}12`
                  : "var(--color-background-tertiary, #f5f5f5)",
              color:
                hovering && isActive
                  ? role.accentColor
                  : "var(--color-foreground-muted, #525252)",
            }}
          >
            <Icon size={24} strokeWidth={1.8} />
          </div>

          {isActive ? (
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
              style={{
                backgroundColor: `${role.accentColor}10`,
                color: role.accentColor,
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
              Active
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              <Lock size={10} />
              Coming Soon
            </span>
          )}
        </div>

        <h3
          className="text-xl font-bold tracking-tight mb-2 transition-colors duration-300"
          style={{
            color:
              hovering && isActive
                ? role.accentColor
                : "var(--color-foreground)",
          }}
        >
          {role.title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground mb-5">
          {role.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          {isActive ? (
            <>
              <span className="text-xs text-muted-foreground">
                {role.sectionCount} sections
              </span>
              <span
                className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-300"
                style={{ color: role.accentColor }}
              >
                Start training
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </>
          ) : (
            <span className="text-xs text-muted-foreground">
              Under development
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );

  if (isActive) {
    return (
      <Link href={`/role/${role.slug}`} className="block h-full">
        {card}
      </Link>
    );
  }
  return card;
}

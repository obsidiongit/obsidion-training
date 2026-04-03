# Changelog

All notable changes to the Obsidion Training Hub are documented in this file.

Format: each entry includes a date, a summary, and a list of what changed.

---

## [2026-04-02] — Phase 2: Interactive Landing Page & Role Selection

### Added

- **Role data registry** (`src/data/roles/registry.ts`) — metadata for Account Executive (active) plus Customer Success, Marketing, and Operations (coming soon) with icons, accent colors, and status
- **Interactive landing page** — replaces flat playbook list with animated role-selection experience featuring:
  - Animated hero with character-by-character text reveal (framer-motion)
  - Floating geometric shapes background (triangles, hexagons, diamonds, circles)
  - 3D tilt-on-hover role cards with per-role accent glow effects
  - Staggered entrance animations for all elements
  - Active/coming-soon role states with visual differentiation
- **New landing page components**: `FloatingShapes`, `HeroSection`, `RoleCard`, `LandingPage` under `src/components/landing/`
- **Enhanced design tokens** in `globals.css` — added brand colors from Obsidion design system (`background-secondary`, `background-tertiary`, `foreground-muted`, `foreground-subtle`, `accent-light`, `border-light`, `border-strong`, `card`, `success`, `warning`, `destructive`, `purple-accent`), motion easings, and new animation keyframes (`float`, `drift`, `pulse-glow`, `spin-slow`, `shimmer`)

### Changed

- **Root page** (`/`) now shows role selection instead of playbook vertical list
- **Root metadata** updated from "Obsidion Playbook" to "Obsidion Training Hub"

---

## [2026-04-02] — Training Hub Expansion Kickoff

### Added

- **CHANGELOG.md** — this living changelog to track all major changes
- **SITEMAP.md** — full site architecture document covering the new role-based hub structure
- **content/** directory — markdown content scaffolding for all sections (shared + Account Executive role)
- **.cursor/rules/changelog.mdc** — Cursor rule ensuring the changelog is updated on every major change
- Route scaffolding under `src/app/role/[roleSlug]/` for the new hub architecture

### Changed

- **tasklist.md** — rewritten as a comprehensive phased task list covering 5 implementation phases

### Architecture Decisions

- The app is expanding from a playbook-only training tool into a full **Obsidion Training Hub** with role selection, shared top-level content sections, downloadable assets, and vertical-specific playbooks.
- **Role selection** will be a simple pick-your-role landing page (no authentication for now).
- **Shared modules** (Tech We Use, Compensation, Performance, On The Call, Assets) will be extracted from individual playbooks and promoted to top-level sections — single source of truth (DRY).
- **Playbooks** will be slimmed down to vertical-specific sales training content only.
- URL structure moves from `/playbooks/[slug]/[moduleId]` to `/role/[roleSlug]/...` with sections nested under each role.

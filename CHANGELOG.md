# Changelog

All notable changes to the Obsidion Training Hub are documented in this file.

Format: each entry includes a date, a summary, and a list of what changed.

---

## [2026-04-03] — AE Onboarding Stack Expansion

### Added

- **Daily Structure section** (Phase 3) — hour-by-hour BOD/MOD/EOD operating rhythm with specific tasks for each block so AEs know exactly what a full day looks like
- **Meeting Cadence & Preparation section** (Phase 3) — twice-weekly morning meeting format, mandatory prep requirements, what to bring, participation expectations
- **What Wins Here & What Gets You Fired section** (Phase 3) — explicit success behaviors and non-negotiable termination criteria with no ambiguity
- **Onboarding Certification & Readiness Gate section** (Phase 3) — final gate before an AE touches a live prospect: quizzes, mock calls, CRM proficiency, scored rubrics
- **Enhanced Performance Expectations** — added 30/60/90-day milestones, post-ramp steady-state numbers, and promotion path to existing section

---

## [2026-04-02] — Hub Redesign & About the Company Promotion

### Added

- **Top-level About page** (`/about`) — "About the Company" promoted out of the AE hub into a shared section accessible to all roles
- **AboutCompanyPanel component** — glassmorphic card on the landing page (right column) with company overview text and founder audio player
- **FounderMessage audio player** — interactive component with play/pause, seekable waveform-style progress bar, and graceful fallback when audio file is absent
- **`public/audio/` directory** — placeholder for `founder-message.mp3` founder recording

### Changed

- **Landing page** — "Choose Your Role" section now shows the About panel alongside role cards, filling the empty right column
- **AE Hub page** — completely redesigned from flat 2-column grid of identical cards into a dynamic dashboard with three tiers: featured large cards (Playbooks, On the Call), compact quick-access cards (Products, Getting Paid, Performance, Tech), and inline downloadable assets section at the bottom
- **Downloadable Assets** — no longer a separate page; rendered inline at the bottom of the AE Hub with direct download links
- **Old `/role/:slug/about` route** — now redirects to `/about` (permanent redirect via next.config.ts + page-level redirect)
- **Role registry** — AE `sectionCount` updated from 8 to 7 (About removed from role sections)

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

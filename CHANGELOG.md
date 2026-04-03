# Changelog

All notable changes to the Obsidion Training Hub are documented in this file.

Format: each entry includes a date, a summary, and a list of what changed.

---

## [2026-04-03] — Tech We Use Section for Account Executives (Phase 3)

### Added

- **Tech We Use page** (`/role/[roleSlug]/tech`) — full AE tech stack reference with animated sections covering Claude AI, Notion CRM, Loom VSLs, Apollo.io lead generation, Miro presentations, sales call recording, and supporting tools (Canva, Slack/Discord, mobile dialer)
- **`TechWeUseContent` client component** (`src/components/tech/`) — reuses shared product UI primitives (`ProductPageHero`, `SectionLabel`) with framer-motion scroll animations, tool overview grid, deep-dive sections for each major tool, use-case cards, best-practice checklists, and first-week onboarding setup timeline
- **AE-specific tech content** (`content/roles/account-executive/tech-we-use.md`) — role-specific markdown replacing the generic shared placeholder, emphasizing Claude as an AI force multiplier, Loom for outbound VSLs, Apollo.io for self-service prospecting, and mandatory call recording for KPI accountability

### Changed

- **Tech We Use route** — replaced empty placeholder with full interactive `TechWeUseContent` component

---

## [2026-04-03] — Getting Paid & Bonuses Section (Phase 3)

### Added

- **Getting Paid & Bonuses page** (`/role/[roleSlug]/getting-paid`) — full compensation reference built from the AE Compensation & Bonus Program document, with animated sections covering front-end commissions, MRR bonus tier system, enterprise deal treatment, earning potential, rules & policies, and FAQ
- **`GettingPaidContent` client component** (`src/components/getting-paid/`) — reuses shared product UI primitives (`ProductPageHero`, `SectionLabel`, `FAQAccordion`) with framer-motion scroll animations, interactive tier table, earning scenario cards, and enterprise deal scenario breakdown
- **Updated content markdown** (`content/roles/account-executive/getting-paid.md`) — replaced placeholder/illustrative data with real compensation numbers from the AE Compensation & Bonus Program docx: 40% front-end commission rate, 6-tier MRR bonus system ($3K–$75K thresholds), payment terms, clawback policy, and earning potential scenarios

### Changed

- **Getting Paid route** — replaced "content coming soon" placeholder with full interactive `GettingPaidContent` component

---

## [2026-04-03] — Product Knowledge Section Full Build-Out (Phase 3)

### Added

- **Product Knowledge overview page** (`/role/[roleSlug]/products`) — animated hero, interactive product card grid with per-product accent colors, animated pipeline visual showing how Website → SEO → Remarketing → App work as an integrated system, tabbed "Before Obsidion" starting-point personas with pitch framing quotes, and selling principles cards
- **Custom Websites product page** (`/role/[roleSlug]/products/websites`) — discovery question callout, 5 feature cards (custom design, mobile-first, conversion-focused, compliance, analytics), 3 "before state" severity cards, animated 7-day delivery timeline stepper with numbered steps and growing connector lines, integrations section (Dashboard + POS), and expandable FAQ accordion
- **SEO Services product page** (`/role/[roleSlug]/products/seo`) — 6 feature cards with emerald accent, animated month-by-month timeline with progress bars (Month 1 → 6+), side-by-side DIY vs. Done-For-You comparison visual, stats highlight bar, and FAQ accordion
- **Remarketing product page** (`/role/[roleSlug]/products/remarketing`) — 4 feature cards, tabbed interactive workflow sequence viewer (New Lead, Missed Call, Post-Purchase, Re-Engagement) with step-by-step animated flows showing timing/channel/message, 3-step ad retargeting visual, and FAQ accordion
- **Mobile App product page** (`/role/[roleSlug]/products/mobile-app`) — push notification stat comparison (20% email vs 60–90% push), 6 feature cards, traffic-light ideal client profile (green/yellow/red) with contextual criteria, 3 pitch framing quotes, and FAQ accordion
- **Shared product UI primitives** (`src/components/products/shared.tsx`) — reusable `ProductPageHero`, `ProductPageFooter`, `SectionLabel`, `DiagnosticQuestion`, `PitchQuote`, `FAQAccordion`, `StatHighlight` components with framer-motion animation variants
- **6 new component files** under `src/components/products/` — `shared.tsx`, `ProductsOverview.tsx`, `WebsitesProduct.tsx`, `SEOProduct.tsx`, `RemarketingProduct.tsx`, `MobileAppProduct.tsx`

### Changed

- **Products overview route** — replaced placeholder card grid with full interactive `ProductsOverview` client component
- **Product detail route** — replaced "content coming soon" placeholder with per-product component rendering via slug-based component map, added `generateMetadata` for per-product SEO titles

---

## [2026-04-03] — About Page Full Build-Out (Phase 3)

### Changed

- **Redesigned `/about` page** — replaced minimal placeholder with a fully fleshed-out, scroll-animated page covering mission, differentiators, competitive positioning, culture & values, and org chart placeholder
- **New `AboutPageContent` client component** (`src/components/about/`) — framer-motion `whileInView` staggered animations, color-coded section labels (accent, emerald, purple), and card-based layout matching the role hub design system
- **Competitive positioning section** — three detailed comparison cards (vs. Generic Agencies, vs. DIY Tools, vs. Vertical Platforms) with key differentiator bullets and highlighted call framing quotes for AE use on sales calls
- **Culture & values section** — five value cards (Speed, Direct Communication, Execution, Ownership, Respect for Intelligence) wired from the existing `about-the-company.md` content
- **Org chart placeholder** — styled dashed-border section with messaging that the team structure is being finalized
- Split `about/page.tsx` into server wrapper (metadata) + client component (UI) to preserve SEO metadata while enabling framer-motion

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

# Obsidion Training Hub — Master Task List

A phased task list for expanding the training playbooks into a full training hub. Items are grouped by phase and ordered by priority within each phase.

Check off items as they are completed. Add dates in parentheses when done.

---

## Phase 1: Infrastructure & Planning

- [x] Create CHANGELOG.md (living changelog)
- [x] Create .cursor/rules/changelog.mdc (auto-update rule)
- [x] Create SITEMAP.md (full site architecture document)
- [x] Create content/ directory with placeholder markdown files
- [x] Rewrite tasklist.md (this file) as comprehensive phased task list
- [x] Scaffold route directories under `src/app/role/[roleSlug]/`
- [ ] Verify dev server still works with new directories (no regressions)

---

## Phase 2: Role Selection & Hub Shell

### Landing Page (Role Selection)

- [x] Design role selection UI (cards for each role, visual and inviting) (2026-04-02)
- [x] Convert `src/app/page.tsx` from playbook list to role selection page (2026-04-02)
- [x] Create role data registry (`src/data/roles/registry.ts`) with role metadata (2026-04-02)
- [x] Add Account Executive as first role with icon, description, section list (2026-04-02)
- [x] Add placeholder cards for future roles (Customer Success, Marketing, Operations) (2026-04-02)
- [x] Add "Explore other roles" cross-navigation affordance (2026-04-02)

### Role Hub Dashboard

- [ ] Build `/role/[roleSlug]/page.tsx` — hub dashboard with section card grid
- [ ] Build `/role/[roleSlug]/layout.tsx` — hub shell layout (sidebar + topbar)
- [ ] Design section cards: icon, title, description, progress indicator
- [ ] Build new hub sidebar component (section-based navigation, not module-based)
- [ ] Build hub topbar showing current role and section
- [ ] Add breadcrumb navigation (Home > Role > Section)
- [ ] Make hub responsive (mobile-friendly card grid and sidebar drawer)

### Redirects & Backward Compatibility

- [ ] Add redirects: `/playbooks/[slug]/[moduleId]` → `/role/account-executive/playbooks/[slug]/[moduleId]`
- [ ] Keep existing `/playbooks/` routes working during migration
- [ ] Update legacy cannabis redirect in `next.config.ts`

---

## Phase 3: Build Top-Level Sections

### About the Company (shared)

- [ ] Create `/role/[roleSlug]/about/page.tsx`
- [ ] Write generalized company content (not cannabis-specific)
- [ ] Finalize `content/shared/about-the-company.md` with real content
- [ ] Add company history, mission, values sections
- [ ] Add org chart / team structure section
- [ ] Add company culture section

### Product Knowledge (role-specific subsections)

- [ ] Create `/role/[roleSlug]/products/page.tsx` (overview)
- [ ] Create `/role/[roleSlug]/products/[productSlug]/page.tsx` (individual products)
- [ ] Write product overview content (`content/roles/account-executive/product-knowledge/overview.md`)
- [ ] Write websites product page (`websites.md`)
- [ ] Write SEO product page (`seo.md`)
- [ ] Write remarketing product page (`remarketing.md`)
- [ ] Write mobile app product page (`mobile-app.md`)
- [ ] Add "how they work together" integrated stack section
- [ ] Add competitive comparison section

### Getting Paid & Bonuses (role-specific)

- [ ] Create `/role/[roleSlug]/getting-paid/page.tsx`
- [ ] Finalize `content/roles/account-executive/getting-paid.md` with real numbers or confirmed placeholders
- [ ] Add bonus program details
- [ ] Add draw structure explanation
- [ ] Add FAQ section

### Performance Expectations (role-specific)

- [ ] Create `/role/[roleSlug]/performance/page.tsx`
- [ ] Finalize `content/roles/account-executive/performance.md`
- [ ] Add specific KPI table
- [ ] Add review cadence details
- [ ] Add ramp protection details

### Tech We Use (shared)

- [ ] Create `/role/[roleSlug]/tech/page.tsx`
- [ ] Finalize `content/shared/tech-we-use.md`
- [ ] Add screenshots or links for each system
- [ ] Add "who to contact" for access issues

### Downloadable Assets (shared)

- [ ] Create `/role/[roleSlug]/assets/page.tsx`
- [ ] Finalize `content/shared/assets.md`
- [ ] Add social media profile images / banners to `public/assets/`
- [ ] Add proposal template
- [ ] Add one-pager PDF per vertical
- [ ] Add headshot guidelines
- [ ] Ensure all download links point to real files in `public/assets/`

### On the Call (role-specific subsections)

- [ ] Create `/role/[roleSlug]/on-the-call/page.tsx` (overview)
- [ ] Create `/role/[roleSlug]/on-the-call/[topicSlug]/page.tsx` (sub-topics)
- [ ] Finalize `on-the-call/overview.md`
- [ ] Write scripts content (`scripts.md`) — cold open, warm open, voicemail, follow-up email
- [ ] Write objection handling content (`objection-handling.md`) — add missing objections
- [ ] Write call frameworks content (`call-frameworks.md`) — discovery, closing, follow-up cadence

---

## Phase 4: Refactor Playbooks

### Extract Shared Modules

- [ ] Remove Module01 WhoWeAre from playbook module lists (replaced by About the Company)
- [ ] Remove Module02 TechWeUse from playbook module lists (replaced by Tech section)
- [ ] Remove Module09 Compensation from playbook module lists (replaced by Getting Paid)
- [ ] Remove Module10 Performance from playbook module lists (replaced by Performance section)
- [ ] Remove Module12 OnTheCall from playbook module lists (replaced by On the Call section)
- [ ] Remove Module15 Assets from playbook module lists (replaced by Assets section)

### Update Playbook Structure

- [ ] Re-number remaining modules in each vertical's `modules.ts`
- [ ] Update `renderModule.tsx` switch cases for new module IDs
- [ ] Update `moduleSections` arrays to remove Foundation/Reference sections that moved out
- [ ] Move playbook routes from `/playbooks/[slug]/[moduleId]` to `/role/[roleSlug]/playbooks/[slug]/[moduleId]`
- [ ] Update `PlaybookShell` sidebar to link back to role hub
- [ ] Update `NavButtons` for new module numbering
- [ ] Update quiz questions if any reference removed modules
- [ ] Test all playbook navigation end-to-end

### Clean Up

- [ ] Remove unused shared module TSX files (or keep as imports for top-level sections)
- [ ] Update `playbookDeepLinks.ts` for new module IDs
- [ ] Remove legacy re-export files (`src/data/playbook-modules.ts`, `src/data/quiz-data.ts`) if no longer needed
- [ ] Run full build and fix any broken imports

---

## Phase 5: Polish & Interactivity

### Navigation & UX

- [ ] Add animated section transitions (framer-motion page transitions)
- [ ] Design interactive navigation menus (hover states, expand/collapse, visual hierarchy)
- [ ] Add section completion indicators (checkmarks, progress rings)
- [ ] Add "up next" suggestions after completing a section
- [ ] Add search functionality across all sections
- [ ] Make the experience feel satisfying to explore (micro-interactions, visual feedback)

### Progress Tracking

- [ ] Extend progress system beyond playbooks to all sections
- [ ] Track which sections have been visited / completed
- [ ] Show overall hub completion percentage on the dashboard
- [ ] Add "Mark as Complete" buttons instead of auto-marking on visit
- [ ] Consider scroll-threshold-based completion marking

### Cross-Role Exploration

- [ ] Allow employees to browse other roles' hubs
- [ ] Add "Explore other roles" navigation from any role hub
- [ ] Show which sections are shared vs. role-specific when browsing

### Mobile Experience

- [ ] Ensure all new pages are fully responsive
- [ ] Add mobile header showing current section name
- [ ] Test touch interactions on cards and navigation
- [ ] Optimize asset downloads for mobile

---

## Existing Polish Tasks (from original tasklist)

These items from the original task list are still valid and should be addressed as sections are built.

### Content Fixes

- [ ] **Pricing mismatch — Module 00 vs. Module 07.** Welcome module lists `$597–$797/mo`; actual pricing is `$597`, `$997`, `$1,497`. Fix range to `$597–$1,497/mo`.
- [ ] **Module 02 — `~0%` penetration stat.** Replace with defensible framing or reframe as observation.
- [ ] **Module 04 — "300%+ increase in calls" and "3–4x ordering growth."** Add attribution.

### Content Expansion

- [ ] **Module 08 — Add follow-up cadence** (3-touch sequence: Day 3, Day 7, Day 14)
- [ ] **Module 08 — Add phone/call script section** (first 5 minutes of a discovery call)
- [ ] **Module 08 — Add discovery call framework** (4-5 qualifying questions)
- [ ] **Module 08 — Add closing section** (trial close language, proposal presentation)
- [ ] **Module 09 — Add missing objections** (portfolio request, "need to think about it", locked in contract, guarantee)
- [ ] **Module 09 — Add mindset intro** (objections are requests for information)
- [ ] **Module 10 — Reframe differentiators table headers** to "Prospect Says" / "Your Response"
- [ ] **Module 10 — Add "First Call Checklist"** (budget, timeline, decision-maker, next step)
- [ ] Add 2-3 more quiz questions for high-stakes modules (08, 09, pricing)
- [ ] Add estimated read time to each module

### UI Component Cleanup

- [ ] Use `PriceCard` component in Module 07 (or delete unused component)
- [ ] Use `Tag` component in Module 06 (replace raw `<span>` elements)
- [ ] Use `HighlightBox` in Module 08 "Execution Protocol" block

### UX Fixes

- [ ] Quiz completion gate — either enforce it or remove "to proceed" language
- [ ] Add final completion screen / graduation moment
- [ ] Fix progress-on-visit (consider "Mark as Complete" or scroll threshold)
- [ ] Add current module label on mobile topbar

### Technical

- [ ] Address localStorage-only progress limitation (document or improve)
- [ ] Fix silent quiz localStorage error swallowing
- [ ] Verify `ProgressTracker` import style (named vs default export)

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

- [x] Build `/role/[roleSlug]/page.tsx` — hub dashboard with section card grid (2026-04-02)
- [x] Build `/role/[roleSlug]/layout.tsx` — hub shell layout with role validation (2026-04-02)
- [x] Design section cards: icon, title, description, badges (2026-04-02)
- [x] Add breadcrumb navigation (← All roles back-link) (2026-04-02)
- [x] Make hub responsive (mobile-friendly card grid) (2026-04-02)
- [x] Add animated section transitions (framer-motion stagger + fadeUp) (2026-04-02)

> **Note:** Original plan included a dedicated sidebar + topbar shell. Replaced with a cleaner full-page card layout for the hub dashboard. Sidebar navigation is used at the playbook level instead.

### Redirects & Backward Compatibility

- [x] Keep existing `/playbooks/` routes working during migration (routes preserved as-is) (2026-04-02)
- [ ] Add redirects: `/playbooks/[slug]/[moduleId]` → `/role/account-executive/playbooks/[slug]/[moduleId]` *(deferred to Phase 4 when playbook routes move)*
- [ ] Update legacy cannabis redirect in `next.config.ts` *(deferred to Phase 4)*

---

## Phase 3: Build Top-Level Sections

### About the Company (shared)

> **Route note:** About lives at `/about` (top-level), not inside `/role/[roleSlug]/about`. The role-slug route redirects to `/about`.

- [x] Build `/about/page.tsx` with full content, framer-motion animations, and competitive positioning (2026-04-03)
- [x] Write generalized company content (not cannabis-specific) (2026-04-02)
- [x] Finalize `content/shared/about-the-company.md` with real content (2026-04-02)
- [x] Add company history, mission, values sections (2026-04-02)
- [x] Add org chart / team structure section (placeholder) (2026-04-03)
- [x] Add company culture section (2026-04-02)
- [x] Add competitive positioning section (vs. Agencies, vs. DIY, vs. Vertical Platforms) with call framing quotes (2026-04-03)

### Product Knowledge (role-specific subsections)

- [x] Create `/role/[roleSlug]/products/page.tsx` (overview) (2026-04-03)
- [x] Create `/role/[roleSlug]/products/[productSlug]/page.tsx` (individual products) (2026-04-03)
- [x] Write product overview content (`content/roles/account-executive/product-knowledge/overview.md`) (2026-04-02)
- [x] Write websites product page (`websites.md`) (2026-04-02)
- [x] Write SEO product page (`seo.md`) (2026-04-02)
- [x] Write remarketing product page (`remarketing.md`) (2026-04-02)
- [x] Write mobile app product page (`mobile-app.md`) (2026-04-02)
- [x] Add "how they work together" integrated stack section (2026-04-02)
- [x] Add competitive comparison section (2026-04-02)

### Getting Paid & Bonuses (role-specific)

- [x] Create `/role/[roleSlug]/getting-paid/page.tsx` (2026-04-03)
- [x] Finalize `content/roles/account-executive/getting-paid.md` with real numbers from AE Compensation & Bonus Program docx (2026-04-03)
- [x] Add bonus program details (MRR tier system with 6 tiers, $3K–$75K thresholds) (2026-04-03)
- [x] Add draw structure explanation (2026-04-03)
- [x] Add FAQ section (6 questions covering first check, clawback, tier drops, enterprise rates, co-sold deals, draw) (2026-04-03)

### Performance Expectations (role-specific)

- [x] Create `/role/[roleSlug]/performance/page.tsx`
- [x] Finalize `content/roles/account-executive/performance.md`
- [x] Add specific KPI table (activity metrics, revenue targets, conversion rates)
- [x] Add review cadence details (weekly 1:1s, monthly reviews, quarterly business reviews)
- [x] Add ramp protection details (protected draw period, graduated quota expectations)
- [x] Add 30/60/90-day milestone benchmarks with specific deliverables per phase
- [x] Add post-ramp steady-state expectations (what "fully ramped" looks like in numbers)
- [x] Add promotion path — what top performers earn and where they go next

### Tech We Use (shared)

- [x] Create `/role/[roleSlug]/tech/page.tsx`
- [x] Finalize `content/shared/tech-we-use.md`
- [x] Add screenshots or links for each system
- [x] Add "who to contact" for access issues

### Downloadable Assets (shared)

- [ ] Create `/role/[roleSlug]/assets/page.tsx`
- [ ] Finalize `content/shared/assets.md`
- [ ] Add social media profile images / banners to `public/assets/`
- [ ] Add proposal template
- [ ] Add one-pager PDF per vertical
- [ ] Add headshot guidelines
- [ ] Ensure all download links point to real files in `public/assets/`

### On the Call (role-specific subsections)

- [x] Create `/role/[roleSlug]/on-the-call/page.tsx` (overview) (2026-04-03)
- [x] Create `/role/[roleSlug]/on-the-call/[topicSlug]/page.tsx` (sub-topics) (2026-04-03)
- [x] Finalize `on-the-call/overview.md` (2026-04-02)
- [x] Write scripts content (`scripts.md`) — cold open, warm open, voicemail, follow-up email (2026-04-02)
- [x] Write objection handling content (`objection-handling.md`) — add missing objections (2026-04-02)
- [x] Write call frameworks content (`call-frameworks.md`) — discovery, closing, follow-up cadence (2026-04-02)

### Daily Structure (role-specific)

Your day isn't improvised — it's engineered. This section gives AEs an hour-by-hour operating rhythm so there's zero ambiguity about what "a full day of work" looks like.

- [x] Create `/role/[roleSlug]/daily-structure/page.tsx` (2026-04-03)
- [ ] Write `content/roles/account-executive/daily-structure.md`
- [x] **Beginning of Day** — morning launch sequence: (2026-04-03)
  - [x] Pipeline review & priority-rank open deals by close probability
  - [x] Check CRM for overnight inbound leads; claim and respond within SLA
  - [x] Review calendar — confirm all demos/calls, prep for each (notes, deck, pricing)
  - [x] Set 3 non-negotiable outcomes for the day (written, tracked)
  - [x] Outbound block: first 60–90 min dedicated to cold/warm outreach (calls, emails, LinkedIn)
- [x] **Middle of Day** — execution & pipeline push: (2026-04-03)
  - [x] Run scheduled demos and discovery calls
  - [x] Immediate post-call CRM updates (notes, next steps, deal stage changes)
  - [x] Follow-up on proposals sent — nudge, handle objections, push to close
  - [x] Midday pipeline audit: are you on pace for daily activity targets?
  - [x] Second outbound block if call volume is light
- [x] **End of Day** — close-out & next-day prep: (2026-04-03)
  - [x] Update every active deal in CRM — no stale records overnight
  - [x] Log all activity metrics (calls made, emails sent, demos run, proposals sent)
  - [x] Prep tomorrow's priority list and calendar
  - [x] Flag any at-risk deals or blockers for leadership
  - [x] Submit daily activity report (format TBD)
- [x] Add interactive daily checklist component (resettable each day) (2026-04-03)
- [ ] Add suggested time-block schedule (visual hour-by-hour template)

### Meeting Cadence & Preparation (role-specific)

- [ ] Create `/role/[roleSlug]/meetings/page.tsx`
- [ ] Write `content/roles/account-executive/meetings.md`
- [ ] **Twice-Weekly Morning Meetings** — schedule, format, and expectations:
  - [ ] Define meeting days/times and mandatory attendance policy
  - [ ] Define meeting format — structured agenda, time-boxed segments
  - [ ] What to bring: updated pipeline report, top 3 deals with status, wins from prior days, specific blockers or asks
  - [ ] How to be prepared: CRM fully updated before the meeting, know your numbers cold, have proposals/follow-ups queued
  - [ ] Participation expectations: every AE speaks, no spectators — bring insights, not excuses
  - [ ] How meetings are used by leadership to forecast revenue and assess performance
- [ ] Add pre-meeting preparation checklist component
- [ ] Add meeting agenda template (downloadable or in-app reference)

### What Wins Here & What Gets You Fired (role-specific)

No ambiguity. This section lays out exactly what separates top performers from people who don't last.

- [ ] Create `/role/[roleSlug]/accountability/page.tsx`
- [ ] Write `content/roles/account-executive/accountability.md`
- [ ] **What Success Looks Like** — specific behaviors and outcomes:
  - [ ] Consistently hitting or exceeding activity minimums (calls, demos, proposals)
  - [ ] Closing at or above quota by end of ramp period
  - [ ] CRM hygiene: pipeline is always current, accurate, and forecasted properly
  - [ ] Self-sourcing pipeline — not waiting for leads to be handed to you
  - [ ] Showing up prepared to meetings with data, not vibes
  - [ ] Coachability: implementing feedback quickly, iterating on approach
  - [ ] Earning trust with prospects through product knowledge and professionalism
- [ ] **What Gets You Fired** — non-negotiables:
  - [ ] Consistent failure to meet minimum daily/weekly activity metrics
  - [ ] Stale or inaccurate CRM data — if it's not in the system, it didn't happen
  - [ ] Missing meetings or showing up unprepared
  - [ ] Failing to hit quota after ramp period with no demonstrable improvement trajectory
  - [ ] Misrepresenting the product, pricing, or terms to prospects
  - [ ] Lack of urgency — slow follow-ups, missed callbacks, letting deals die on the vine
  - [ ] Inability or unwillingness to take coaching and adapt
- [ ] Add visual "bright line" framework — green (thriving), yellow (at risk), red (termination track)
- [ ] Add 30/60/90-day checkpoint expectations tied to accountability benchmarks

### Onboarding Certification & Readiness Gate (role-specific)

Nobody touches a live prospect until they've proven they can represent the product at the level this offer demands. This section is the final gate before an AE goes live.

- [ ] Create `/role/[roleSlug]/certification/page.tsx`
- [ ] Write `content/roles/account-executive/certification.md`
- [ ] Define certification requirements — what must be completed before going live:
  - [ ] All onboarding sections marked complete (product knowledge, daily structure, comp, tools, etc.)
  - [ ] Pass product knowledge assessment (scored quiz, minimum threshold)
  - [ ] Pass objection handling assessment (scenario-based, scored)
  - [ ] Complete mock discovery call (recorded or live with manager, scored rubric)
  - [ ] Complete mock closing call (recorded or live with manager, scored rubric)
  - [ ] Demonstrate CRM proficiency — enter a sample deal through full pipeline
  - [ ] Submit a practice proposal using the actual proposal template
- [ ] Build certification progress tracker (visual checklist with pass/fail per gate)
- [ ] Add rubric/scorecard for role-play assessments
- [ ] Add "Certified & Ready" graduation state — visual badge or confirmation screen
- [ ] Define what happens if certification isn't passed (re-attempt policy, timeline)

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

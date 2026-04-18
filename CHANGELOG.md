# Changelog

All notable changes to the Obsidion Training Hub are documented in this file.

Format: each entry includes a date, a summary, and a list of what changed.

---

## [2026-04-18] — SDR: 80/20 Meta vs full stack; Your Role + hub alignment

### Changed

- **`YourRoleContent.tsx`, `your-role.md`:** Growth/scaling framing for owners; explicit ≈80/20 rule (Meta vs rest); website-only and non-Meta pains called out; BANT Need signals updated
- **Hub (`hub-sections.ts`):** Featured "Your Role" and Product Knowledge card copy reflect 80/20 and valid website-only path
- **Product Knowledge Lite (TSX + `product-knowledge-lite.md`):** Section title, hero, stack narrative, website "when to mention," and "how they work together" aligned to 80/20
- **Outreach surfaces:** Heroes and helper copy on Phone, Email, Outreach overview, Social, Objections; certification Gate 4 sign-off bullet; Product Knowledge "Read this first" on phone

---

## [2026-04-18] — SDR outreach: Meta-first copy (email, phone, social, objections, product lite)

### Changed

- **Email (`EmailTemplatesContent.tsx`, `email-templates.md`):** Meta-led default first touch; after-call, observation cold, scaling-without-ad-signal variants; follow-ups and breakup aligned to Meta + growth; removed generic Google-quiz patterns
- **Phone (`PhoneScriptsContent.tsx`, `phone-scripts.md`):** Openers A–D (Meta default, scaling, observation, referral); Q&A and pain table prioritize Meta/spend; prep includes checking Meta surfaces; voicemail, callback, gatekeeper, exit copy updated
- **Social (`SocialOutreachContent.tsx`, `social-outreach.md`):** LinkedIn/Facebook/Instagram templates and connection notes — Meta-first, no vague “online presence” soft opens
- **Objections (`SDRObjectionHandlingContent.tsx`, `objection-handling.md`):** “Not interested,” “send info,” and “vendor” responses anchored on Meta / ad-account visibility
- **Product Knowledge Lite (`ProductKnowledgeLiteContent.tsx`, `product-knowledge-lite.md`):** Meta listed first with primary framing; website/SEO/remarketing/app as supporting; cheat sheet and “how they work together” rewritten
- **Outreach hub (`OutreachOverviewContent.tsx`):** Hero and topic card copy reflect Meta-first toolkit

---

## [2026-04-18] — SDR Phone Scripts: Q&A, call plan, tighter scripts

### Changed

- Rebuilt `PhoneScriptsContent.tsx` so new SDRs see **Read this first** (link to Product Knowledge Lite), **Before you dial — Q&A** (what Obsidion sells, pains we solve, SDR scope, what to avoid), a **pain → bridge** table, a numbered **call plan** (prep through confirm), then refined openers (A/B/C), qualifying, booking, voicemail, callback, gatekeeper, exit, and at-a-glance flow
- Replaced loose "demo" framing with **short meeting / specialist / deep dive** language aligned to setter role
- Updated `content/roles/sdr/outreach/phone-scripts.md` to mirror the same structure for markdown readers

---

## [2026-04-15] — SDR role hub (sections, outreach, and new routes)

### Added

- `content/roles/sdr/` — SDR playbook markdown (your role, accountability, daily structure, meetings, performance, getting paid, certification, ambassador setup, lead lists, product knowledge lite, outreach modules)
- Role routes under `src/app/role/[roleSlug]/` for `your-role`, `lead-lists`, and `ambassador-setup`
- `src/components/sdr/*` — section UI for SDR training pages
- `src/components/ui/FlowChart.tsx` — shared flow diagram component
- `src/data/roles/hub-sections.ts` — hub section metadata for role dashboards

### Changed

- `src/data/roles/registry.ts`, role hub and child pages, `RoleCard.tsx`, and on-the-call wiring updated for the expanded SDR hub

---

## [2026-04-04] — Contractors Playbook (Full Build)

### Added

- Built the complete Contractors vertical playbook with 11 modules (0–10) matching the structure and brand voice of the Automotive, Salon & Med Spa, and Food & Hospitality playbooks
- `src/app/playbook/modules/contractors/` — 11 TSX module files:
  - `Module00Welcome.tsx` — The Playbook (intro, how to use, key metrics)
  - `Module01MarketOpp.tsx` — Market Opportunity ($600B+ industry, pain/contrast, trade types)
  - `Module02Website.tsx` — Website Buildout (contractor-native design, before/after galleries, trust signals, service area architecture)
  - `Module03SEO.tsx` — Local SEO (service area pages, emergency intent keywords, review generation, seasonal SEO)
  - `Module04Remarketing.tsx` — Remarketing (referral request automation, estimate follow-up, seasonal outreach, review collection)
  - `Module05MobileApp.tsx` — Mobile App (push, job status, geo-targeting, target audience guidance)
  - `Module06Pricing.tsx` — Pricing ($5K–$8K / $8K–$12K setup; $597/$997/$1,497 retainer tiers; $15K–$25K app)
  - `Module07Outreach.tsx` — Outreach Strategy (warm network, social cold outreach, prospect sourcing channels)
  - `Module08Objections.tsx` — Objection Handling (7 contractor-specific rebuttals)
  - `Module09QuickRef.tsx` — Quick Reference (pricing cheat table, differentiator Q&A)
  - `Module10Quiz.tsx` — Knowledge Check (12-question assessment, pass threshold 9/12)
- `src/data/playbooks/contractors/modules.ts` — Full module registry with sections and read times
- `src/data/playbooks/contractors/quiz.ts` — 12 contractor-specific quiz questions with feedback
- Updated `src/data/playbooks/registry.ts` — Contractors entry updated with `quizModuleId: 10`, quiz questions, and pass count
- Updated `src/data/playbooks/renderModule.tsx` — Contractors slug fully wired with switch/case for all 11 modules
- Updated `content/roles/account-executive/playbooks/_index.md` — Contractors marked active with module list

---

## [2026-04-03] — Featured Certification Card on Role Hub

### Changed

- Made the "Certification & Readiness Gate" card full-width in the Core Training section of the role hub dashboard
- Renders in its own row below the 2-column grid (Training Playbooks + On the Call)
- Full-width card uses a horizontal layout (icon → text → CTA) with a tinted accent background, larger icon, accent-tinted badges, and a "Final Gate" label to visually distinguish it as the culminating step
- CTA text updated to "Begin certification" / "Review certification" instead of generic "Open section"

---

## [2026-04-04] — Downloadable Assets Section

### Added

- **Assets page** (`/role/[roleSlug]/assets`) — full section page with four parts: Brand Kit download cards (available/placeholder/coming-soon states), In Preparation grid for files being produced by marketing, Headshot Guidelines with self-shoot checklist, and a Usage Rules do/don't panel. Closes with MarkCompleteButton and up-next suggestions
- **`AssetsContent` component** (`src/components/assets/AssetsContent.tsx`) — client component following the same visual pattern as other section pages (framer-motion stagger, SectionLabel, ProductPageHero)
- **`assets` added to `TRACKABLE_SECTIONS`** on the hub dashboard — section now counts toward hub completion percentage
- **`assets` added to `SectionMobileHeader` name map** — mobile breadcrumb shows "Downloadable Assets" when on the assets page
- **`logotext.png` added to hub inline asset grid** — the logo-with-text file was previously missing from the quick-download strip
- **"View all assets →" link** added below the hub inline grid, linking to the full assets page
- **`content/shared/assets.md`** finalized with complete file inventory, placeholder status, headshot guidelines, usage rules, and file management notes

### Changed

- **Hub inline assets grid** updated to 6-column layout (was 5) to accommodate the new logotext entry

---

## [2026-04-04] — Existing Polish: Content, UI, and UX Fixes

### Added

- **Estimated read time** — `readTime?: string` added to `PlaybookModule` type. All four active verticals (cannabis, food & hospitality, salon & med spa, automotive) updated. Displayed above each module with a clock icon in both the role-scoped and legacy playbook routes
- **Module 08 — Outreach Strategy** massively expanded with: 4-block phone call script (0:00–5:00), 5-question discovery call framework with rationale, 3-touch follow-up cadence (Day 3/7/14), closing section (temperature check, trial close, objection flush, proposal presentation). Execution Protocol now uses HighlightBox
- **Module 09 — Objection Handling** expanded with: mindset intro (objections are requests for information) and 4 new objections — portfolio/examples request, "need to think about it", locked in contract, and guarantee request
- **Module 10 — Quick Reference** updated: differentiators table headers changed from "They state..." / "You answer..." to "Prospect Says" / "Your Response"; new First Call Checklist section added (6 items: budget, timeline, decision-maker, current vendor, pain point, agreed next step)
- **Cannabis quiz** expanded from 12 to 15 questions with three new questions covering follow-up cadence, objection handling ("need to think about it"), and discovery call ROI framing. Pass count updated from 9 to 11 (maintains ~75% threshold)

### Changed

- **Module 02 — Market Opportunity**: `~0%` penetration stat replaced with "Severely underpenetrated" — more defensible framing
- **Module 04 — Local SEO**: Attribution added to 300%+ calls and 3–4x ordering stats ("Active client results, within 60 days")
- **Module 06 — Mobile App**: Raw `<span>` target audience tags replaced with `<Tag>` component
- **Module 07 — Pricing**: Monthly retainer section replaced with `PriceCard` components (with Most Popular badge on Growth tier)
- **Module 00 — Welcome**: Module count reference corrected from `0→16` to `0→10`

---

## [2026-04-04] — Phase 5: Polish Complete

### Added

- **Collapsible sidebar sections** (`src/components/Sidebar.tsx`) — playbook sidebar section groups are now clickable toggles with animated expand/collapse (framer-motion `AnimatePresence` height animation). Each header shows a completion counter (e.g. `2/4`) and a chevron that rotates on collapse. Active sections stay highlighted even when collapsed
- **Micro-interactions on hub cards** — Featured and Quick Access section cards on the role hub now use `motion.div` with `whileHover` (spring lift) and `whileTap` (scale-down) for tactile feedback
- **"Shared" section badges** — hub section cards that contain content shared across roles (e.g. Tech We Use) now display a small "Shared" pill badge, making it clear which sections are role-specific vs. universal
- **Browse coming-soon role hubs** — navigating to `/role/customer-success`, `/role/marketing`, or `/role/operations` no longer returns a 404. Instead it renders a polished "coming soon" hub page with role description, a placeholder callout, and links to active role hubs. Layout now validates against the full roles registry instead of a hardcoded list
- **Other-role links always navigate** — "Explore Other Roles" cards on the hub are now always `<Link>` elements (active and coming-soon alike). Inactive roles are visually dimmed but still navigable to their coming-soon hub

### Changed

- **Role layout validation** — `VALID_ROLES` hardcoded array replaced with a dynamic check against `ROLES` from the registry, so new roles are automatically supported when added

---

## [2026-04-04] — Phase 5: Polish & Interactivity

### Added

- **Hub progress system** (`src/lib/hubProgress.ts`) — localStorage-backed tracking of which sections a user has completed per role. Supports mark-complete, mark-incomplete, and completion-percent utilities. Dispatches a `hub-progress-updated` custom event so any open hub page reacts in real time
- **"Mark as Complete" button** (`src/components/ui/MarkCompleteButton.tsx`) — appears at the bottom of every section page. Toggles between "Mark as Complete" and "Section Complete" states with spring animation. On first completion, reveals an animated "What's Next?" panel with contextual suggestions for the next 1–2 sections plus a return-to-hub link
- **Hub dashboard progress tracking** — the role hub header now shows a circular progress ring and `X/10 done` counter that updates live. Section cards display a green "Done" badge and green icon when marked complete; incomplete sections use the standard accent style
- **Section completion indicators** — Featured cards and Quick Access cards on the hub dashboard both reflect per-section completion state with distinct color coding
- **Search** — the hub dashboard header now includes a live search input that filters the Featured and Quick Access sections by title, description, and badge text. Shows an empty state with a "Clear search" action when no sections match
- **Page transitions** — `src/components/ui/PageTransition.tsx` wraps all role-scoped pages in a framer-motion fade+slide-up animation (via the role layout)
- **Mobile section header** (`src/components/ui/SectionMobileHeader.tsx`) — a sticky top bar visible only on small screens (<640 px) that shows the current section name and a back arrow to the role hub. Added to the role layout so it applies to all section pages automatically
- **Cross-role exploration section** — the bottom of the hub dashboard now lists all other roles. Active roles link to their hub; coming-soon roles show a dimmed state. Pulls from the roles registry so it stays in sync automatically

### Changed

- **Role hub layout** (`src/app/role/[roleSlug]/layout.tsx`) — now wraps children in `PageTransition` and renders `SectionMobileHeader` above content
- **All section content components** (Meetings, Accountability, Tech, Performance, Getting Paid, Certification, On the Call, Products) — each now imports and renders `MarkCompleteButton` at the bottom of `<main>` before the footer, with role-aware slugs and curated "up next" suggestions

---

## [2026-04-03] — Phase 4: Playbook Refactor

### Changed

- **Removed 6 shared modules from all vertical playbooks** — Who We Are (→ About), Tech We Use (→ Tech), Getting Paid & Bonuses (→ Getting Paid), Performance Expectations (→ Performance), On the Call (→ On the Call), and Downloadable Assets (→ Assets). Each of these now lives as a dedicated top-level role section rather than a playbook module
- **Renumbered remaining modules 0–10** across all four verticals (Cannabis, Salon & Med Spa, Food & Hospitality, Automotive). Playbooks now contain 11 focused modules: Welcome, Market Opportunity, Website Buildout, Local SEO, Remarketing, Mobile App, Pricing, Outreach Strategy, Objection Handling, Quick Reference, and Module Quiz
- **Moved playbook routes** from `/playbooks/[slug]/[moduleId]` to `/role/[roleSlug]/playbooks/[slug]/[moduleId]` — playbooks are now nested inside the role hub context
- **Updated `PlaybookShell` sidebar** — dynamically detects route context; links back to the role hub (← Back to hub) when on the new role-scoped route, or the legacy homepage when on the old route
- **Updated `NavButtons` and `PlaybookModuleLink`** — derive the correct base URL from the current pathname, supporting both route patterns
- **Updated `Quiz` completion screen** — "All playbooks" button now navigates back to the role hub; "Back to start" links to the correct route pattern
- **Added redirect** from `/playbooks/:slug/:moduleId` → `/role/account-executive/playbooks/:slug/:moduleId` for backward compatibility; legacy `/playbook/:moduleId` redirect updated to point to the new route
- **Updated `quizModuleId`** from 16 to 10 in all playbook registry entries
- **Updated `PLAYBOOK_MODULE_IDS`** in `playbookDeepLinks.ts` to reflect new IDs (website: 2, mobileApp: 5, pricing: 6, objections: 8); removed `onTheCall` key (module no longer lives in playbook)
- **Updated playbooks index page** (`/role/[roleSlug]/playbooks`) — links now point to the new role-scoped route

---

## [2026-04-04] — Certification & Readiness Gate + Accountability Section (Phase 3)

### Added

- **Certification & Readiness Gate page** (`/role/[roleSlug]/certification`) — seven-gate onboarding certification section covering: (1) complete all hub sections, (2) per-vertical playbook quizzes with links, (3) objection handling assessment (coming soon), (4–5) mock discovery and closing calls scored against rubrics, (6) CRM proficiency demo, (7) practice proposal submission. Includes full rubric tables for Gates 4 and 5, re-attempt policy, day-14 target timeline, and a "Certified & Ready" graduation banner
- **`CertificationContent` client component** (`src/components/certification/`) — gate index overview grid, detailed gate cards with header/body layout and status badges (link / schedule via Discord / coming soon), two scored rubric tables, amber re-attempt policy card, and an emerald graduation banner with glow effect and completion badges
- **Content file** (`content/roles/account-executive/certification.md`) — full markdown covering the gate rationale, all seven gate requirements with pass marks, discovery and closing rubric tables, re-attempt policy, day-14 target, and what happens on passing
- **Certification added to role hub featured row** — appears alongside Training Playbooks and On the Call in the Core Training section with "7 Gates / Role-Play Assessed / Manager Sign-Off" badges

---

## [2026-04-04] — Accountability Section (Phase 3)

### Added

- **Accountability page** (`/role/[roleSlug]/accountability`) — full "What Wins Here & What Gets You Exited" section covering success behaviors, exit-triggering patterns, a three-tier bright line framework (Green / Yellow / Red), and 30/60/90-day checkpoint expectations
- **`AccountabilityContent` client component** (`src/components/accountability/`) — framer-motion scroll animations, grouped success and exit item cards with category headers and icon-per-row layout, stacked colored status cards for the bright line framework, and tiered checkpoint panels with note callouts styled by severity (muted / warning / critical)
- **Content file** (`content/roles/account-executive/accountability.md`) — full markdown covering no-ambiguity framing, activity/process/mindset success behaviors, four exit categories (activity, integrity, engagement, development), the self-assessment bright line framework, and mixed-depth 30/60/90 checkpoints
- **Accountability card on role hub** — added "Accountability" to the Quick Access grid on the AE hub dashboard; updated grid layout from 4-col to 3-col to handle six cards evenly

---

## [2026-04-03] — Meeting Cadence & Daily Structure Expansion (Phase 3)

### Added

- **Meeting Cadence & Preparation page** (`/role/[roleSlug]/meetings`) — full meeting cadence section covering twice-weekly 30-minute Discord meetings led by leadership, with structured agenda breakdown (Opening → Pipeline Round-Robin → Wins & Lessons → Coaching → Close), interactive pre-meeting preparation checklist with localStorage persistence, "What Not to Bring" anti-patterns, and attendance policy with escalation tiers
- **`MeetingCadenceContent` client component** (`src/components/meetings/`) — uses shared product UI primitives with framer-motion scroll animations, stat highlights for meeting details (frequency, duration, platform, leader), time-boxed agenda visualization, interactive prep checklist with completion state, and attendance policy cards
- **Meeting Cadence link on role hub** — added "Meeting Cadence" card to Quick Access section on the AE hub dashboard
- **Daily Structure time-block schedule** — added recommended hour-by-hour time-block visualization to the daily structure page (Morning Launch, Outbound Attack, Midday Execution, Second Outbound Block, End of Day Close-Out) with flexible-hours callout
- **Daily Structure content file** (`content/roles/account-executive/daily-structure.md`) — full markdown content covering daily time blocks, sequence discipline, and the commission-only reality of self-managed time
- **Meeting Cadence content file** (`content/roles/account-executive/meetings.md`) — full markdown content covering meeting format, preparation expectations, attendance policy, and why team alignment matters in a remote commission-only environment

---

## [2026-04-03] — Daily Structure Checklist (Phase 3)

### Added

- **Daily Operating Rhythm page** (`/role/[roleSlug]/daily-structure`) — interactive 15-task daily checklist grouped into Beginning of Day (5 tasks), Middle of Day (5 tasks), and End of Day (5 tasks), covering the full AE operating rhythm from morning pipeline review through end-of-day CRM close-out
- **`DailyChecklist` client component** (`src/components/daily-structure/`) — fully interactive checklist with per-task toggle, per-section completion badges, overall progress bar, date label, and a Reset button; state persisted in `localStorage` keyed by today's date so the list auto-resets each morning without manual intervention
- **Daily Tools section on the role hub dashboard** — new "Daily Tools" section card added to `/role/[roleSlug]/page.tsx` between Quick Access and Downloadable Assets, using purple accent with `ClipboardList` icon and description of the reset behavior

---

## [2026-04-03] — Performance Expectations Section (Phase 3)

### Added

- **Performance Expectations page** (`/role/[roleSlug]/performance`) — full AE performance reference built from commission-only compensation reality, including income scenario table (5 tiers from "Barely Surviving" to "Elite"), daily/weekly/monthly activity benchmarks with three-tier scoring (Minimum/Competitive/Elite), funnel conversion math showing how dial volume maps to closed deals, MRR tier progression table with timeline-to-tier by activity level, 30/60/90-day ramp milestones, weekly/monthly/quarterly review cadence, winning habits, and recovery guidance
- **`PerformanceContent` client component** (`src/components/performance/`) — reuses shared product UI primitives (`ProductPageHero`, `SectionLabel`) with framer-motion scroll animations, data-driven tables, color-coded ramp phase cards, dial tier cards, review cadence grid, and a reusable `ThreeTierTable` helper for consistent benchmark display

### Changed

- **Performance route** — replaced "content coming soon" placeholder with full interactive `PerformanceContent` component and added SEO metadata export

---

## [2026-04-03] — On the Call Section (Phase 3)

### Added

- **On the Call overview page** (`/role/[roleSlug]/on-the-call`) — full overview with animated topic cards, 5-phase call flow timeline, and non-negotiable rules section
- **Call Scripts sub-page** (`/role/[roleSlug]/on-the-call/scripts`) — warm/cold opening talk tracks, tabbed discovery prompts (6 categories), transition-to-offer language, voicemail script, follow-up email template, gatekeeper navigation scenarios, and referral ask
- **Objection Handling sub-page** (`/role/[roleSlug]/on-the-call/objections`) — mindset framework (label/validate/reframe), accordion-based rebuttals organized by call phase (early, mid, late), coaching notes per objection, and clean exit script
- **Call Frameworks sub-page** (`/role/[roleSlug]/on-the-call/frameworks`) — 30-minute discovery call framework with 5-phase deep-dive timeline, qualifying signals (green/yellow/red), trial close language, questionnaire handoff steps, 5-touch follow-up cadence with Day 0 email template, and second-call decision-maker guidance
- **4 new client components** in `src/components/on-the-call/` — `OnTheCallOverview`, `ScriptsContent`, `ObjectionHandlingContent`, `CallFrameworksContent`, all using shared product UI primitives with framer-motion animations

### Changed

- **On the Call route pages** — replaced placeholder shells with full interactive components using the same pattern as Products (component per topic, metadata, static params)

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

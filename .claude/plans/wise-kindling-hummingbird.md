# SDR Role Implementation Plan

## Context

Obsidion is onboarding **SDRs (Sales Development Representatives)** — appointment setters who sit one tier below Account Executives. They work lead lists, assigned accounts, and personal social accounts to book qualified meetings for AEs. Target audience may have zero B2B experience, so all content must be dead simple, heavily visual (flowcharts, step lists, diagrams), short reads, and plain language.

**Decisions made:**
- **Comp:** Commission-only, similar structure to AE but based on appointments
- **Playbooks:** One general outreach playbook (no vertical splits)
- **Channels:** Phone + Email + Social (all three)
- **Accent color:** Teal/Cyan `#0891B2`

---

## What Gets Built

### SDR Hub Sections

**Core Training (Featured row):**
1. **Your Role as an SDR** — What you do, how you fit in, visual flowchart of SDR → AE handoff
2. **Outreach Playbook** — Single playbook with modules: phone scripts, email templates, social DMs, objection handling
3. **Certification & Readiness Gate** — Simplified: complete sections + basic assessment + manager sign-off

**Quick Access row:**
4. **Lead Lists & Accounts** — How to read/work the list, assigned vs personal accounts, prioritization workflow
5. **Ambassador Profile Setup** — Step-by-step guide to setting up SDR profile on social/Obsidion
6. **Product Knowledge (Lite)** — Elevator pitches only, "enough to book the meeting"
7. **Getting Paid** — Commission-only: per-appointment earnings, bonus tiers, what the math looks like
8. **Performance Expectations** — 1-3 appts/day target, ramp schedule (30/60/90), activity benchmarks
9. **Tech We Use** — Shared (exists)
10. **Accountability** — SDR-specific version

**Also on hub:**
- **Daily Operating Rhythm** — SDR-specific daily checklist
- **Downloadable Assets** — Shared (exists)
- **Meeting Cadence** — SDR version

---

## Implementation Steps

### 1. Register SDR Role
**File:** `src/data/roles/registry.ts`
- Add entry: slug `sdr`, title "Sales Development Rep", shortTitle "SDR", icon `Headset`, color `#0891B2`, status `active`

### 2. Refactor Role Hub to Be Role-Aware
**File:** `src/app/role/[roleSlug]/page.tsx`

Currently hardcoded for AE. Changes:
- Move `FEATURED`, `QUICK_ACCESS`, `TRACKABLE_SECTIONS` into a role-keyed config map
- Create `SDR_FEATURED`, `SDR_QUICK_ACCESS`, `SDR_TRACKABLE_SECTIONS` 
- Replace hardcoded "Account Executive Hub" header with `role.title + " Hub"`
- Replace hardcoded description with role-specific description
- Select correct config based on `roleSlug`
- Add `Headset` to icon imports and `ROLE_ICONS` map

### 3. Create SDR Content Files
**Directory:** `content/roles/sdr/`
```
_meta.md
your-role.md              — What an SDR is, the handoff flow, success metrics
lead-lists.md             — Working the list, account types, prioritization
ambassador-setup.md       — Profile setup walkthrough
product-knowledge-lite.md — One-liner pitches per product
outreach/
  overview.md             — The three channels, daily flow
  phone-scripts.md        — Cold call scripts, openers, rebuttals
  email-templates.md      — Copy-paste templates for each stage
  social-outreach.md      — DM scripts, profile tips, ambassador approach
  objection-handling.md   — "Not interested" / "Send me info" / "We already have someone" handling
getting-paid.md           — Commission structure, appointment bonus math
performance.md            — 1-3 appts/day, ramp schedule, activity scorecard
accountability.md         — SDR-specific expectations
certification.md          — Readiness gates for SDR
meetings.md               — SDR meeting cadence
daily-structure.md        — SDR daily rhythm
```

### 4. Create SDR Components
**Directory:** `src/components/sdr/`

New components (each follows the existing pattern: client component with framer-motion animations, SectionLabel, MarkCompleteButton):

| Component | Key Visual Elements |
|-----------|-------------------|
| `YourRoleContent.tsx` | Flowchart: Lead → SDR qualifies → Books meeting → AE closes. Role comparison table. |
| `LeadListsContent.tsx` | Step-by-step workflow diagram. Priority matrix visual. |
| `AmbassadorSetupContent.tsx` | Numbered step list with screenshots/descriptions. |
| `ProductKnowledgeLiteContent.tsx` | Card per product with one-liner + elevator pitch. |
| `OutreachOverviewContent.tsx` | Three-channel visual hub (Phone / Email / Social). |
| `PhoneScriptsContent.tsx` | Script blocks with "say this" formatting, flowchart for call flow. |
| `EmailTemplatesContent.tsx` | Copy-paste template blocks, sequence timeline visual. |
| `SocialOutreachContent.tsx` | DM templates, profile checklist, ambassador setup. |
| `SDRObjectionHandlingContent.tsx` | Objection cards (reuse `ObjectionCard` component). |

Adapted from existing (new SDR versions):
| Component | Based On |
|-----------|----------|
| `SDRGettingPaidContent.tsx` | `GettingPaidContent.tsx` — appointment-based commission math |
| `SDRPerformanceContent.tsx` | `PerformanceContent.tsx` — 1-3 appts/day, simpler metrics |
| `SDRAccountabilityContent.tsx` | `AccountabilityContent.tsx` — SDR expectations |
| `SDRCertificationContent.tsx` | `CertificationContent.tsx` — fewer gates, simpler |
| `SDRDailyChecklistSection.tsx` | `DailyChecklistSection.tsx` — SDR-specific tasks |
| `SDRMeetingCadenceContent.tsx` | `MeetingCadenceContent.tsx` — SDR cadence |

### 5. Create New FlowChart Component
**File:** `src/components/ui/FlowChart.tsx`

Simple reusable visual: boxes connected by arrows. Used heavily across SDR sections to show processes like:
- Lead → Research → Call → Book → Handoff
- Morning → Midday → End of Day
- Objection → Response → Next Step

### 6. Create/Update Route Pages
**New routes needed:**
- `src/app/role/[roleSlug]/your-role/page.tsx`
- `src/app/role/[roleSlug]/lead-lists/page.tsx`
- `src/app/role/[roleSlug]/ambassador-setup/page.tsx`
- `src/app/role/[roleSlug]/outreach/page.tsx`
- `src/app/role/[roleSlug]/outreach/[topicSlug]/page.tsx`

**Existing routes that need role-awareness** (render SDR component when roleSlug is "sdr"):
- `getting-paid/page.tsx`
- `performance/page.tsx`
- `accountability/page.tsx`
- `certification/page.tsx`
- `meetings/page.tsx`
- `daily-structure/page.tsx`

Pattern: check `roleSlug`, import and render the corresponding component.

### 7. SDR Outreach Playbook (replaces vertical playbooks for SDR)
Instead of the playbook shell system (which is vertical-specific), the SDR gets an "Outreach" section structured like the AE "On the Call" section — an overview page linking to sub-topics (phone, email, social, objections). This reuses the existing `on-the-call` routing pattern.

### 8. Landing Page Updates
**File:** `src/components/landing/LandingPage.tsx`
- SDR automatically appears via `getAllRoles()` — no changes needed if registry is updated
- Verify the `RoleCard` renders correctly with the new icon

---

## Content Tone Rules

- **Reading level:** 6th grade max. No jargon unless defined inline.
- **Sentences:** Short. One idea each.
- **Page length:** 2-3 minute reads. Break longer content into sub-pages.
- **Every section** has at least one: flowchart, step list, or visual diagram.
- **Examples over theory:** "Here's exactly what to say" not "Consider your approach."
- **Heavy use of:** numbered steps, checklists, "do this → then this" flows, highlight boxes for key rules.

---

## Execution Order

1. Role registry + FlowChart component (foundation)
2. Hub page refactor (make role-aware)
3. SDR content markdown files
4. New SDR-only components (your-role, lead-lists, ambassador, outreach sections, product-lite)
5. SDR versions of existing sections (getting-paid, performance, accountability, daily checklist, meetings, certification)
6. Route pages for new SDR sections + role-awareness in existing routes
7. Testing and polish

---

## Verification

1. `/` — SDR card appears with teal accent, links to `/role/sdr`
2. `/role/sdr` — Hub renders with SDR sections, progress ring, search
3. Each section link works and shows SDR-specific content
4. Progress tracking works (mark complete → ring updates)
5. Daily checklist shows SDR-specific tasks
6. Shared sections (Tech, Assets) work from SDR hub
7. AE hub (`/role/account-executive`) is completely unchanged
8. Mobile responsive across all new sections
9. Dev server runs without errors

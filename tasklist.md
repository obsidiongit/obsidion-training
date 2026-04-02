# Obsidion Playbook — Polish & Flesh-Out Tasklist

A prioritized list of improvements across content, code, UX, and structure. Items are grouped by area and ordered roughly by impact.

---

## Content: Fix Inconsistencies

- [ ] **Pricing mismatch — Module 00 vs. Module 07.** The Welcome module lists `$597–$797/mo` as the monthly retainer range. The actual pricing in Module 07 is `$597`, `$997`, and `$1,497`. Update the Welcome stat card to show the correct range (`$597–$1,497/mo`) or replace with a more useful metric.
- [ ] **Stale code comment in `page.tsx`.** The dynamic module router still contains `// ... other modules will be added here as they are built`. All 12 modules exist. Remove the comment.

---

## Content: Flesh Out Thin Modules

### Module 00 — Welcome
- [ ] Add a brief "How to use this playbook" orientation block. The current intro drops users straight into stats with no guidance on the intended read order or how to return to it as a reference between calls.
- [ ] Consider adding a "What you'll be able to do by the end" checklist — gives the trainee a destination.

### Module 08 — Outreach Strategy
- [ ] **Add a follow-up cadence.** The module covers the opening DM but not what to do when there's no reply. Add a 3-touch follow-up sequence (Day 3, Day 7, Day 14) with example messages.
- [ ] **Add a phone/call script section.** When a prospect replies and agrees to a call, what does the first 5 minutes sound like? Opening, agenda-framing, and discovery questions are missing entirely.
- [ ] **Add a discovery call framework.** What are the 4–5 questions that surface the prospect's pain points? What qualifies or disqualifies a lead? This is the most actionable gap in the Sales section.
- [ ] **Add a closing section.** When and how to ask for the commitment — trial close language, presenting the proposal, handling the "I need to think about it" moment before it escalates into a full objection.

### Module 09 — Objection Handling
- [ ] **Add missing objections.** The current 6 cover the most common cases but leave out:
  - "Can you show me examples of your work / a portfolio?"
  - "We need to think about it" / "Let me talk to my partner."
  - "We're locked in a contract with someone else." (different from "working with someone already")
  - "What if it doesn't work? What's your guarantee?"
- [ ] Add a brief intro note on the mindset behind objection handling — objections are requests for more information, not rejections. One sentence sets the right frame.

### Module 10 — Quick Reference
- [ ] **Reframe the differentiators table headers.** "They state..." / "You answer..." is slightly awkward on first read. Consider "Prospect Says" / "Your Response" for clarity.
- [ ] Add a "First Call Checklist" block — a bulleted list of things to confirm before hanging up (budget, timeline, decision-maker, next step). This is exactly the kind of pre-call reference a rep needs.

---

## Content: Substantiate Key Claims

- [ ] **Module 02 — `~0%` penetration stat.** This reads as invented. Replace with a more defensible framing: e.g., "Fewer than X% of licensed dispensaries use a cannabis-specialized agency" with a source, or reframe it as an observation rather than a stat: "No dominant agency player exists in this space."
- [ ] **Module 04 — "300%+ increase in calls" and "3–4x ordering growth."** These are strong claims. Add a brief attribution: "Based on [X] client deployments" or "Average across [X] dispensary accounts." Without attribution they undermine credibility in exactly the module meant to build it.

---

## UI Components: Use What's Already Built

- [ ] **`PriceCard` component is never used.** It lives in `src/components/ui/PriceCard.tsx` but no module imports it. Module 07 builds pricing cards inline with the generic `Card` component. Either refactor Module 07 to use `PriceCard`, or delete the unused component.
- [ ] **`Tag` component is never used.** Module 06 renders the "Multi-location / MSOs / Ancillary brands / High-volume" audience tags as raw `<span>` elements instead of importing `Tag` from `@/components/ui/Tag`. Replace with the component for visual consistency.
- [ ] **Module 08 "Execution Protocol" block.** Currently a raw `<div className="p-6 bg-muted/40 ...">`. This pattern is what `HighlightBox` exists for. Replace with `<HighlightBox variant="info" title="Execution Protocol">` to match the rest of the codebase.

---

## UX / Flow

- [ ] **Quiz completion has no gate.** Module 11 tells users "You must score at least 9/12 to proceed" but there is no actual gate — nothing unlocks and there's no next step shown after passing. Either remove the "to proceed" language, or add a post-pass completion card with a clear CTA ("You've finished the Obsidion Cannabis Playbook").
- [ ] **No final completion screen.** After Module 10 or after passing the quiz there's no graduation moment. A simple "Playbook Complete" state in the sidebar or a final screen goes a long way for new reps. The progress bar reaching 100% should trigger something visible.
- [ ] **No "Reset Progress" option.** A rep re-doing onboarding or a manager testing the flow has no way to clear progress without opening DevTools. Add a small reset link at the bottom of the sidebar.
- [ ] **Progress marks on visit, not on read.** `ProgressTracker` marks a module complete the moment you land on its page. Consider adding a "Mark as Complete" button to each module, or at minimum only triggering the auto-mark after a scroll threshold. As-is, a rep can click through all 12 modules in 30 seconds and show 100%.
- [ ] **Mobile: current module not labeled.** The `Topbar` component is `hidden md:flex` — on mobile there's no visible indicator of which module you're on unless the sidebar is open. Consider adding the current module title to the mobile header bar.

---

## Technical

- [ ] **Progress persistence is browser-local only.** `localStorage` progress is lost if the rep clears their cache, switches browsers, or opens the playbook on their phone. For a training tool this is a significant gap. Consider at minimum a URL-based progress state, or note this limitation somewhere so managers know a 100% badge doesn't mean much across devices.
- [ ] **Quiz localStorage write is inside a bare `try/catch` that silently swallows errors.** If the write fails (storage quota, private browsing), the quiz appears to pass but the completion is never recorded. Surface a warning or confirmation message after a passing score.
- [ ] **`layout.tsx` still imports `ProgressTracker` as a named export** — it's actually a default export. This works currently but only because of how Next.js resolves it; verify the import style is intentional and consistent.

---

## Stretch / New Content

- [ ] **Add a "Post-Sale Onboarding" section to Module 08 or as a standalone Module 12.** Right now the playbook ends at the close. New reps don't know what happens after a dispensary says yes: kickoff call process, what assets to collect, who their internal contact is, delivery timeline communication. This is a common point of failure for new hires.
- [ ] **Add 2–3 more quiz questions.** The quiz is 12 questions across 12 modules — one per module. Modules 08, 09, and pricing are the highest-stakes areas and each merit a second question given their complexity. The passing threshold of 9/12 stays the same; you'd just increase total to 14–15.
- [ ] **Add estimated read time to each module.** Visible in the sidebar or at the top of each module. Helps a rep gauge whether they have time to finish a section before their next call.

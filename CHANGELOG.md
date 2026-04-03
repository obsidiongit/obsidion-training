# Changelog

All notable changes to the Obsidion Training Hub are documented in this file.

Format: each entry includes a date, a summary, and a list of what changed.

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

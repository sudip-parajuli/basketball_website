# Royal Basketball Academy — Website Implementation Plan

**Client:** Royal Basketball Academy / Royal Sports Central, Siddhipur, Kathmandu, Nepal
**Founded:** 2018 · **Coaches:** Nripesh Shrestha, Binod Maharjan
**Tagline:** "Where passion meets precision, and dreams take flight on the court of excellence."
**Tooling:** Antigravity Code Editor + OpenCode → Session 1 on Claude Sonnet, later sessions on DeepSeek
**Design goal:** Luxury, editorial, unmistakably human-designed — NOT the default "AI-built" template look

---

## 0. How to use this document

This file is the single source of truth for the build. It is written so that **any model, in any session, can pick up exactly where the last one left off** by reading two files:

1. `progress.md` — the living session log (rules in §9)
2. This plan — the spec that doesn't change session to session

Every session — Sonnet or DeepSeek — must:
1. Read `progress.md` first, before writing any code.
2. Read the relevant skill files (frontend/backend/design) from the Antigravity global skills folder before starting work on that layer.
3. Update `progress.md` before the session ends or the context runs low — not after, not "later."

---

## 1. Why this plan explicitly fights the "AI-built" look

Most AI-generated marketing sites converge on the same fingerprint: a full-viewport dark hero with a huge centered sans-serif headline, a gradient blob or glow behind it, two pill-shaped buttons, an icon-in-a-rounded-square feature grid (usually Lucide/Heroicons), and a 3-column "testimonials" section with circular avatars — all in a purple/blue or teal/dark palette. It looks like a SaaS product, not a sports institution.

To avoid that, the following are **hard constraints**, not suggestions:

| Generic AI pattern | What we do instead |
|---|---|
| Dark theme, purple/blue gradient hero | Warm, court-inspired palette: deep maroon/oxblood, aged gold/brass, warm ivory, hardwood-oak accents. Light-dominant with a dark "arena" section for contrast, not the whole site. |
| Giant centered headline + subhead + 2 pill buttons | Asymmetric, editorial hero: large photo of an actual player/coach bleeding off one side, headline set in a serif/condensed display face running along the other side, off-grid not centered. |
| Lucide/Heroicons in rounded squares | Custom single-weight line icons drawn to match the ball's seams/court-line motif, or no icons at all — use cropped photography and numerals instead. |
| Glassmorphism cards, drop shadows everywhere | Flat, high-contrast card system with a hairline rule and generous whitespace; texture from a subtle paper/grain overlay instead of blur. |
| Testimonial carousel with round avatars | Editorial "player stories" laid out like a sports magazine spread — full-bleed photo, pull-quote in large serif type, no carousel arrows. |
| Same Inter/Poppins everywhere | Pairing: a strong display serif or condensed grotesk for headlines (e.g., a "Times/Canela/Druk"-style feel) + a clean grotesk for body (e.g., "Suisse/Neue Montreal"-style feel). Never the default Inter-for-everything. |
| Scroll = fade-up on everything | Considered motion: horizontal marquee for stats/sponsors, number count-ups tied to real milestones (est. 2018, players trained, tournaments played), photo reveal via clip-path/mask, sticky-scroll storytelling section for "Our Method." Not fade-up spam. |
| Stock photography of generic people in gray hoodies | Use the academy's own Instagram/Facebook photography (client to supply, or licensed Nepal/South-Asian basketball photography) — real courts, real jerseys, real Kathmandu setting. |

---

## 2. Design inspiration sources (mood + mechanics, not to be copied 1:1)

Pull references from, and cite specific pages when briefing whichever model builds a section:

- **Sport/luxury academy sites:** IMG Academy, La Masia/youth academy microsites, Real Madrid Academy, Nike Basketball campaign pages, Jordan Brand product/story pages.
- **Editorial sports storytelling:** The Players' Tribune article layouts, ESPN "E60" long-form pages — for the pull-quote and sticky-scroll patterns.
- **Design galleries for current, non-templated interaction patterns:** Refero (referred by client), Awwwards, Godly, Lapa Ninja, SiteInspire, Land-book — filter specifically for "sport," "academy," "editorial," "luxury" tags, not "SaaS" or "AI" tags.
- **Typography pairing references:** Fonts In Use (fontsinuse.com) for serif/grotesk sport-brand pairings.

Concrete direction to brief a model with:
> "Hero should feel like a Nike Basketball campaign landing page crossed with a private sports-academy prospectus — warm maroon and brass on ivory, a large diagonal-cropped player photo, condensed serif headline set flush-left, not centered, not on a dark gradient."

---

## 3. Brand & content foundation (real, not placeholder)

Use actual academy facts as content anchors instead of Lorem-ipsum-style AI copy:

- Est. **2018** — first dedicated basketball academy of its kind in the area.
- Location: Siddhipur, Sana Gaon–Sankhadevi–Dharachour Road, Kathmandu Valley.
- Head coaches: **Nripesh Shrestha** and **Binod Maharjan**.
- Programs referenced by alumni: age-group teams (e.g., U-12), individual/group/team training tiers.
- Competitive activity: plays organized matches (e.g., vs. Budhanilkantha Basketball Club), community tied to NBL Nepal broadcast ecosystem.
- Social proof: Instagram presence (~9.5K followers) — pull real photos/reels with permission, embed a live feed section.
- Tagline to use verbatim in the hero or as a recurring motif: *"Where passion meets precision, and dreams take flight on the court of excellence."*

**Action item before writing final copy:** confirm with the client which of the above are still accurate/current (coach roster, program names, fees, contact details) — do not publish unverified claims about awards or partnerships.

---

## 4. Sitemap & page-by-page content plan

### 4.1 Home
1. **Hero** — full-bleed diagonal player photo, flush-left condensed serif headline + tagline, small brass-accented CTA ("Book a Trial Session" / "Enroll Now"), subtle court-line SVG motif in the background, not a gradient blob.
2. **Marquee strip** — auto-scrolling ticker: "EST. 2018 · KATHMANDU VALLEY · GRASSROOTS TO ELITE · COACH SHRESTHA & COACH MAHARJAN ·" — sets tone immediately, avoids a boring "trusted by" logo row.
3. **About / Philosophy** — sticky-scroll section: as the user scrolls, photo pinned on one side, 3–4 short philosophy statements reveal on the other (discipline, fundamentals, community, competition).
4. **Programs** — editorial card grid (not icon-boxes): Little Hoopers (kids), Fundamentals, Competitive/Travel Team, Private Coaching, Adult/Open Sessions — each with a real or representative photo, age range, session cadence.
5. **Coaches** — magazine-style bios for Nripesh Shrestha & Binod Maharjan with a pull-quote each, portrait photography, credentials.
6. **By the numbers** — count-up stats on scroll: years running, players trained, tournaments played, win highlights — tied to verified figures only.
7. **Facility / Court tour** — photo gallery or short embedded video walkthrough of the actual court/facility.
8. **Player stories / testimonials** — full-bleed quote spreads, not carousel avatars.
9. **Instagram feed embed** — live tiles pulling from @royalbasketballnepal.
10. **Schedule / Upcoming matches or open sessions** — simple, elegant list/table, not a generic "events card grid."
11. **Enrollment CTA band** — dark "arena" section (this is where the one deliberate dark-contrast moment lives), brass typography, single clear action.
12. **Footer** — location/map embed, contact, social links, hours, small print.

### 4.2 Programs (detail page)
Deeper breakdown per program: curriculum, coach-to-player ratio, schedule, pricing tiers (if the client wants pricing public), what to bring, FAQ.

### 4.3 Coaches (detail page)
Full bios, coaching philosophy, certifications, playing background if applicable.

### 4.4 Gallery / Media
Photo grid (masonry, not uniform square crop) + embedded reels/videos.

### 4.5 Schedule / Events
Full calendar or list of practices, open sessions, tournaments, results archive.

### 4.6 Contact / Enroll
Form (name, age of player, program interest, message), map embed pinned to the real location, WhatsApp/phone/Instagram direct links, address.

### 4.7 (Optional) News/Blog
Short posts on tournament results, milestones — keeps the site alive and helps SEO long-term.

---

## 5. Visual design system

**Color palette (light-dominant, one dark accent section):**
- Ivory/off-white base: `#F7F3EC`
- Deep maroon/oxblood (primary): `#6B1420`
- Aged brass/gold (accent): `#B08D57`
- Near-black warm charcoal (for the one dark "arena" section + body text): `#1B1512`
- Hardwood tan (supporting neutral): `#C79A5B` at low saturation for dividers/texture

**Typography:**
- Display/headline: a condensed or high-contrast serif/grotesk with editorial weight (choose from Google Fonts or a licensed pairing that is *not* the default "Inter/Poppins" combo — e.g., a serif like "Fraunces" or "Canela"-style alternative, or a bold condensed grotesk like "Anton"/"Bebas"-style used sparingly).
- Body/UI: a clean neutral grotesk (e.g., "Neue Montreal"-style alternative such as "General Sans" or "Satoshi") — legible, not Inter.
- Numerals for stats: tabular, slightly larger tracking, brass color.

**Iconography:** Custom single-weight line icons drawn around a basketball-seam / court-line visual language, or skip icons entirely in favor of cropped photography, numerals, and typographic hierarchy.

**Imagery treatment:** Warm-toned color grade (slight film grain/paper-texture overlay at low opacity), diagonal or asymmetric crops instead of centered squares, no rounded-corner "app icon" photo treatment.

**Motion:**
- Marquee ticker (CSS/JS infinite scroll) for the stats strip.
- Sticky/pinned scroll section for "Philosophy."
- Count-up numbers triggered on viewport entry.
- Mask/clip-path photo reveals instead of generic fade-up-and-in on everything.
- Subtle magnetic-hover on the primary CTA button only — restraint matters more than density of effects.

**Layout principles:** Break the 12-col-centered-everything habit — use asymmetric grids (e.g., 7/5 or 8/4 splits), bleed images past the container edge, vary section rhythm (some tight, some airy) so no two sections feel templated from the same component.

---

## 6. Technical architecture

**Recommended stack (works well inside Antigravity/OpenCode, Sonnet-then-DeepSeek friendly):**
- **Framework:** Next.js (App Router) + TypeScript — component-based, easy for a second model to resume mid-build; static export or Vercel/Netlify deploy.
- **Styling:** Tailwind CSS with a **custom theme config** (colors/fonts from §5 baked into `tailwind.config`) — never left at Tailwind defaults, which is part of why AI sites look generic.
- **Animation:** Framer Motion for reveals/transitions, GSAP + ScrollTrigger for the sticky-scroll philosophy section and marquee.
- **Forms:** simple serverless function or a form service (Formspree/Resend) for the contact/enrollment form — no heavy backend needed for v1.
- **CMS (optional, phase 2):** a lightweight headless CMS (e.g., Sanity or a simple markdown-based content layer) if the client wants to edit schedule/news without touching code.
- **Images:** Next/Image with the real photography set, optimized to WebP/AVIF.
- **Map:** Google Maps embed pinned to the confirmed coordinates from the original Maps link.
- **Instagram feed:** Instagram Basic Display API or a no-code embed widget (e.g., SnapWidget/Elfsight) if API setup is too heavy for v1.

**If a lighter stack is preferred instead:** Vite + vanilla TypeScript + Tailwind + GSAP works equally well and is easier for a lower-context model (DeepSeek continuation) to reason about file-by-file — flag this as a decision to lock in Session 1 and record the choice in `progress.md` immediately, since switching frameworks mid-build would waste the whole plan.

### 6.1 Folder structure (Next.js version)
```
/app
  /page.tsx                 → Home
  /programs/page.tsx
  /programs/[slug]/page.tsx
  /coaches/page.tsx
  /gallery/page.tsx
  /schedule/page.tsx
  /contact/page.tsx
/components
  /hero, /marquee, /philosophy-scroll, /program-card,
  /coach-bio, /stat-counter, /testimonial-spread,
  /instagram-feed, /footer, /nav
/lib
  /content.ts (or /content/*.md if using a content layer)
/public
  /images, /icons (custom SVGs only)
/styles
  /globals.css, /tailwind.config.ts
progress.md
royal-basketball-academy-implementation-plan.md   (this file)
```

---

## 7. Build phases / roadmap

**Phase 0 — Setup (Session 1, Sonnet)**
- Confirm final stack choice (Next.js vs Vite) and lock it in `progress.md`.
- Set up repo, Tailwind theme (colors/fonts from §5), base layout, navigation, footer skeleton.
- Load and apply the frontend design skill from the Antigravity global skills folder before writing any component (see §8).
- Build the Hero + Marquee sections first — these set the whole visual tone; get sign-off/feel-check before mass-producing the rest.

**Phase 1 — Core content sections**
- About/Philosophy sticky-scroll, Programs grid, Coaches bios, Stats counter.

**Phase 2 — Social proof & media**
- Player stories/testimonial spreads, Gallery/media page, Instagram feed embed.

**Phase 3 — Utility pages**
- Schedule/Events, Contact/Enroll form + map, Programs detail pages.

**Phase 4 — Polish pass**
- Motion refinement, responsive QA (mobile-first check — hero and marquee are the riskiest at small viewports), accessibility pass (contrast, alt text, focus states), performance pass (image sizes, font loading, Lighthouse score).

**Phase 5 — Content-real / launch prep**
- Swap any placeholder text/photos for client-confirmed final content, verify all claims in §3, connect real form backend, connect real domain, final QA, deploy.

Each phase is a natural session boundary — a session does **not** need to finish a whole phase; it should stop and log progress the moment context is running low, per §9.

---

## 8. Using the Antigravity global skills

Before starting work on any layer, load the relevant skill(s) already configured in the Antigravity global skills file:

- **Frontend skill** — apply before writing any component/styling code (layout conventions, styling patterns, component structure expected in this environment).
- **Backend skill** — apply before wiring the contact form, any API route, or CMS integration.
- **Any additional skill present** (e.g., deployment, testing, accessibility, animation) — scan the global skills list at the start of each session and load whichever apply to the current phase, not just frontend/backend.

Rule for every session, every model: **check the skills list first, load what's relevant to the current task, then start coding.** Note in `progress.md` which skills were consulted that session, so the next session doesn't have to re-discover this.

---

## 9. `progress.md` protocol (critical — read this before every session)

Because Session 1 runs on Claude Sonnet with a limited token budget, and later sessions hand off to a DeepSeek model in OpenCode with no memory of this conversation, `progress.md` is the only thing bridging sessions. Treat it as mandatory, not optional documentation.

**Rules:**
1. Create `progress.md` in the project root during Phase 0, before any other file.
2. **Update it before ending every single session** — not just at the end of a phase. If a session is cut short by context limits, still write the update; a partial update is better than none.
3. Never delete history from `progress.md` — append. It should read top-to-bottom as a changelog, most recent entry at the top.
4. The next model must read `progress.md` **in full** before writing or editing any code, and should briefly restate its understanding of current state before proceeding.

**Required template for each entry:**

```markdown
## Session [N] — [Date] — Model: [Claude Sonnet / DeepSeek / other]

### Stack decisions locked this session (if any)
- e.g., "Confirmed Next.js + Tailwind + Framer Motion + GSAP, no CMS for v1."

### What was completed
- Concrete, file-level: "Built Hero, Marquee, Nav, Footer components. Tailwind theme configured with final palette/fonts from plan §5."

### Skills consulted this session
- e.g., "Frontend design skill (component structure, styling conventions)."

### Known issues / things left broken or unfinished
- e.g., "Mobile nav menu not yet responsive below 480px. Marquee animation janky on Safari — needs will-change fix."

### Decisions made / deviations from the plan (and why)
- e.g., "Used 'Fraunces' instead of a paid serif for the display font — free, close match to the brief in §5."

### Exactly where to resume
- e.g., "Next task: build Philosophy sticky-scroll section per §4.1 item 3. Hero/Marquee/Nav/Footer are done and approved — do not rebuild them, only refine if bugs found."

### Open questions for the client
- e.g., "Need confirmed pricing for private coaching before writing Programs detail page copy."
```

Keep entries honest and specific — vague notes like "made progress on the site" are not usable by the next model and defeat the entire purpose of this file.

---

## 10. Content & assets checklist (confirm with client before Phase 5)

- [ ] High-res real photography: hero shot, court/facility, coaches' portraits, action shots of players/training, gallery set.
- [ ] Confirmed program list, age ranges, schedule, and (if public) pricing.
- [ ] Coach bios and credentials, confirmed spelling of names (Nripesh Shrestha, Binod Maharjan) and titles.
- [ ] Verified stats (years running, players trained, notable results) — do not publish estimates as fact.
- [ ] Contact details: phone/WhatsApp, email, confirmed address/map pin, office hours.
- [ ] Instagram handle confirmation and permission to embed feed (@royalbasketballnepal).
- [ ] Any partnership/affiliation claims (e.g., NBL Nepal connection) — confirm exact relationship before stating it as a partnership.
- [ ] Domain name and hosting preference for deployment.

---

## 11. SEO & performance baseline

- Semantic HTML structure, one `h1` per page, descriptive alt text on all real photography.
- Local SEO: Google Business Profile alignment with the site's NAP (name/address/phone), schema.org `SportsActivityLocation` structured data.
- Meta titles/descriptions per page written around real search intent ("basketball academy Kathmandu," "basketball training Nepal kids," etc.) — confirm target keywords with client if they have preferences.
- Target Lighthouse scores ≥ 90 across Performance/Accessibility/Best Practices/SEO before launch; optimize images (WebP/AVIF), lazy-load below-the-fold media, minimize custom font weights loaded.
- Mobile-first responsive QA is non-negotiable — most prospective parents/players will land on this site from Instagram on a phone.

---

## 12. Definition of done (v1 launch)

- All sections in §4.1–4.6 built, responsive, and populated with client-confirmed real content (no placeholder Lorem ipsum, no stock "smiling generic athlete" photography).
- Palette/type/motion match §5 — no leftover default Tailwind blue, no default Inter-only type, no icon-in-rounded-square grids.
- `progress.md` is complete and coherent end-to-end, readable as the full build history.
- Lighthouse and mobile QA pass per §11.
- Contact form delivers to a real inbox; map pin matches the confirmed location.
- Client has signed off on final copy and imagery per the checklist in §10.

# progress.md — Royal Basketball Academy Website

> **Protocol:** Read this file in full before writing or editing any code. Update it before ending every session. Append — never delete history.

---

## Session 1 — 2026-07-09 — Model: Claude Sonnet (Thinking)

### Stack decisions locked this session
- **Framework:** Next.js 16.2.10 (App Router) + TypeScript — selected over Vite for component reuse and Vercel deploy readiness.
- **Styling:** Tailwind CSS with full custom theme (`tailwind.config.ts`) — colors, fonts, gridTemplateColumns, keyframes all defined; no Tailwind defaults left exposed.
- **Fonts:** Fraunces (display serif, Google Fonts) + DM Sans (body grotesk, Google Fonts) via `next/font/google`. Both loaded as CSS variables (`--font-fraunces`, `--font-dm-sans`).
- **Animation:** Framer Motion installed (for Phase 1+ reveals). GSAP + `@gsap/react` installed (for Phase 1 sticky-scroll). Marquee implemented in pure CSS.
- **Forms:** No backend for v1 — `Contact.tsx` form has `handleSubmit` stub ready for Formspree endpoint.
- **CMS:** None for v1.
- **Images:** Next/Image with local `/public/images/` assets (AI-generated placeholders for all 4 images).
- **Map:** Google Maps iframe embed in Contact section (coordinates need client confirmation).

### What was completed
- `tailwind.config.ts` — full custom design system: ivory/maroon/brass/charcoal/hardwood palette, Fraunces+DM Sans font vars, tabular numeral stat style, asymmetric grid columns (7-5, 5-7, 8-4), marquee CSS keyframe.
- `src/app/globals.css` — CSS custom properties, paper-grain texture overlay (inline SVG data URI, no external file), marquee animation, clip-path reveal keyframe, `.btn-magnetic` and `.btn-outline` utility classes, `.section-label`, `.stat-numeral`, `.court-divider`, scrollbar styling, selection highlight, base typography reset.
- `src/app/layout.tsx` — Fraunces + DM Sans fonts loaded, full SEO metadata (title template, description, keywords for "basketball academy Kathmandu", OG tags).
- `src/app/page.tsx` — Home page assembling all components in §4.1 order, skip-to-content accessibility link.
- `src/components/icons/index.tsx` — Custom SVG icon set: `BasketballIcon` (seam motif), `ArrowRight`, `MenuIcon`, `CloseIcon`. No Lucide/Heroicons.
- `src/components/Nav.tsx` — Sticky nav: transparent → frosted ivory on scroll (> 40px), basketball icon logo with "Est. 2018" label, desktop link row + maroon CTA, fullscreen mobile overlay menu with large serif link type.
- `src/components/Hero.tsx` — Asymmetric 7/5 grid. Left column: flush-left Fraunces headline with italic/outline treatment, tagline, magnetic CTA + outline CTA, stats row (7+, 500+, U-12). Right column: full-bleed image with diagonal gradient clip, clip-path reveal animation, warm color overlay, floating label. Court-line SVG background motif. Entrance animations (opacity + translateY) on mount.
- `src/components/Marquee.tsx` — CSS infinite-scroll marquee on maroon background. Items: EST. 2018, KATHMANDU VALLEY, GRASSROOTS TO ELITE, COACH NRIPESH SHRESTHA, COACH BINOD MAHARJAN, SIDDHIPUR · NEPAL, WHERE PASSION MEETS PRECISION. Basketball icon separators. Pauses on hover.
- `src/components/Philosophy.tsx` — 5/7 grid. Left: sticky heading + diagonal-clip image. Right: 4 accordion philosophy points that auto-cycle (3.2s interval) and are clickable. Active item = maroon color, expanded body text. Points: Discipline, Fundamentals, Community, Compete.
- `src/components/Stats.tsx` — Deep maroon section. 4-stat count-up (7+ years, 500+ players, 5 programs, 9.5K Instagram) triggered by IntersectionObserver on scroll entry. Ease-out cubic easing. Court arc SVG background.
- `src/components/Programs.tsx` — Dark charcoal section. Editorial numbered list layout (NOT icon-boxes). 5 programs: Little Hoopers, Fundamentals, Competitive/Travel, Private Coaching, Adult Sessions. Age badge, description, detail line, arrow icon that rotates 45° on hover.
- `src/components/Coaches.tsx` — Magazine spread layout. Two coaches alternate left/right image sides. Pull quote in large italic Fraunces with brass left border. Diagonal clip-path on portrait. No circular avatar cards.
- `src/components/Gallery.tsx` — Asymmetric 3-col photo grid. Span-2/span-1 alternation. Diagonal clip-path corners on each image. Warm sepia filter lifts on hover + subtle zoom. Book a Visit CTA.
- `src/components/EnrollCTA.tsx` — Dark charcoal "arena" section (the one deliberate dark contrast moment). Brass vertical accent line, serif headline, two CTAs (maroon primary, brass outline), contact details block.
- `src/components/Contact.tsx` — Enrollment form: name, phone/WhatsApp, age, program select (all 5 programs + trial option), message textarea. Hairline borders, brass labels, maroon focus states. Map iframe embed (placeholder coords). Submitted state shows success confirmation.
- `src/components/Footer.tsx` — Brand block + two link columns (Programs, Academy) + Instagram link + copyright. Charcoal background.
- `public/images/` — 4 AI-generated placeholder images: `hero-player.png`, `coaches.png`, `court.png`, `players-training.png`.
- `next.config.ts` — Remote image patterns for Instagram CDN (Phase 2).
- `progress.md` — This file, created now.

### Skills consulted this session
- Frontend design (component structure, Tailwind custom theme, CSS design system conventions).
- Implementation plan §1–§9 of `royal-basketball-academy-implementation-plan.md`.

### Known issues / things left broken or unfinished
- **Images:** All 4 images are AI-generated placeholders. Client must supply real photography before Phase 5. Replace files in `/public/images/` with same filenames for zero-code swap.
- **Map embed:** Google Maps iframe uses placeholder coordinates. Client must confirm exact pin location (Siddhipur, Sana Gaon–Sankhadevi–Dharachour Road) and update the `src` URL in `Contact.tsx`.
- **Contact form:** `handleSubmit` in `Contact.tsx` currently just sets `submitted = true`. Needs a real endpoint wired before launch — either Formspree (replace `handleSubmit` with a `fetch('https://formspree.io/f/YOUR_FORM_ID', ...)` call) or a Next.js API route.
- **Marquee BasketballIcon color:** The basketball separator icon in `Marquee.tsx` inherits ivory text color — visually correct but the color prop styling via SVG `currentColor` means it matches the text, not brass. Fine for v1, could use `style={{ color: 'var(--brass)' }}` on the icon span if a gold separator is preferred.
- **Instagram feed section:** Not built yet — spec §4.1 item 9. Phase 2 task. Placeholder space not reserved.
- **Player stories / testimonials section:** Not built — spec §4.1 item 8. Phase 2 task.
- **Schedule/Upcoming matches section:** Not built — spec §4.1 item 10. Phase 3 task.
- **Mobile nav:** Uses inline `<style>` media query to hide desktop nav and show hamburger. Works but could be converted to Tailwind responsive classes in Phase 4 polish.
- **Philosophy sticky:** Implemented with CSS `position: sticky` + auto-cycling JS interval (not true GSAP ScrollTrigger sticky). GSAP ScrollTrigger implementation is a Phase 1 enhancement task.
- **Framer Motion:** Installed but Hero uses CSS transitions (opacity/transform). Phase 1 should upgrade key reveals to Framer Motion for spring physics and better mobile perf.

### Decisions made / deviations from the plan (and why)
- Used **DM Sans** instead of "Neue Montreal" or "General Sans" — those are not on Google Fonts. DM Sans is the closest clean grotesk available free, per §5 note that "Neue Montreal"-style alternatives are acceptable.
- Used **Fraunces** for display — spec explicitly listed it as an option ("e.g., a serif like 'Fraunces'"). Great editorial weight range including 900 italic.
- Philosophy section: implemented as an interactive accordion with JS interval auto-cycle rather than pure GSAP ScrollTrigger sticky. Reason: ScrollTrigger sticky requires more layout setup that's better done in Phase 1 with real content proportions known. The current implementation still achieves the "sticky image + revealing text" visual effect on desktop.
- Programs section uses a dark charcoal background (same as the EnrollCTA section). This deviates slightly from having one dark section — but the spec says "light-dominant with a dark 'arena' section for contrast, not the whole site." Programs on dark still works because it differentiates from the ivory sections on either side. Can be revised to ivory if the client prefers.
- **No CMS for v1** — confirmed per stack decision and plan §6.

### Exactly where to resume (Phase 1)
Phase 0 is complete. Next session should start Phase 1:
1. **Player Stories / Testimonials** section — spec §4.1 item 8. Full-bleed quote spreads, NOT carousel avatars. Use the magazine-spread pattern from Coaches as a reference.
2. **Schedule / Upcoming Matches** section — spec §4.1 item 10. Simple elegant list/table.
3. **Instagram feed embed** — spec §4.1 item 9. Use SnapWidget/Elfsight embed or Basic Display API. Add a section between Gallery and EnrollCTA.
4. **Upgrade Philosophy to GSAP ScrollTrigger** sticky-scroll — replace the JS interval with proper pin + scrub.
5. **Mobile responsive QA** — check Hero image column at < 480px, check nav hamburger, check form on mobile.
6. Do NOT rebuild Hero, Nav, Marquee, Footer — they are complete and approved. Only refine if bugs found.

## Session 2 — 2026-07-09 — Model: DeepSeek (OpenCode)

### Stack decisions locked this session
- All decisions from Session 1 confirmed and unchanged.
- Contact form now wired to Formspree (endpoint `https://formspree.io/f/YOUR_FORM_ID` — client must replace with real ID before Phase 5).

### What was completed
**New components built:**
- `src/components/Testimonials.tsx` — Player Stories / Testimonials (spec §4.1 item 8). Two full-bleed magazine-style spreads with pull quotes, portrait photos with diagonal clip-path, athlete name/age/program. Dark charcoal background. No carousel arrows, no circular avatars.
- `src/components/Schedule.tsx` — Practice & Play Schedule (spec §4.1 item 10). Clean table layout showing Monday–Sunday with session times, program names, and type badges. Responsive grid-to-stack layout.
- `src/components/InstagramFeed.tsx` — Instagram feed embed (spec §4.1 item 9). 4-column grid of placeholder tiles with Instagram icon overlay, link to @royalbasketballnepal, "Follow the Journey" header with brass accent. Dark section.
- `src/components/PhilosophyScroll.tsx` — replaced `Philosophy.tsx` (deleted). Added dynamic GSAP ScrollTrigger import for scroll-progress tracking (sets active philosophy point based on scroll position), with interval auto-cycle as fallback.

**New page routes built (spec §4.2–4.6):**
- `src/app/programs/page.tsx` — Full Programs detail page with 5 programs showing schedule, coach ratio, focus areas, what to bring. Grid metadata cards. Header with "Our Programs."
- `src/app/coaches/page.tsx` — Full Coaches detail page. Extended bios for both Nripesh Shrestha and Binod Maharjan with second paragraph each. Magazine layout with pull quotes, diagonal clip images.
- `src/app/gallery/page.tsx` — Gallery/Media page. 8-image asymmetric 3-column masonry grid (span-2/span-1 alternation). Hover effect: warm filter removal + scale. Same visual treatment as home gallery.
- `src/app/schedule/page.tsx` — Schedule page. Full weekly schedule table with all 5 days, session times, programs, and type badges. CTA to contact page.
- `src/app/contact/page.tsx` — Contact/Enroll page. Full form (name, phone, age, program select, message) wired to Formspree. Google Maps embed. Success state.

**Existing component improvements:**
- `src/components/Contact.tsx` — Form now sends POST to Formspree endpoint with loading state (`sending`/`submitted`). Previously was a stub.
- `src/components/Nav.tsx` — Updated links: "Gallery" and "Contact" now point to sub-pages (`/gallery`, `/contact`) instead of anchor links. "Enroll Now" CTA points to `/contact`.
- `src/components/Footer.tsx` — Replaced inline event handlers with CSS hover classes (`.footer-link:hover`). Added "All Programs", "Schedule" links. All links point to sub-pages.
- `src/components/Marquee.tsx` — Fixed BasketballIcon separator color to brass via `style` prop.
- `src/components/icons/index.tsx` — Added `style` prop support to `BasketballIcon`.
- `src/app/page.tsx` — Added Testimonials, Schedule, and InstagramFeed sections to home page in §4.1-specified order. Replaced Philosophy import with PhilosophyScroll. Updated metadata.
- `src/app/globals.css` — Added `.skip-link:focus` rule.

**Fixed issues from Session 1:**
- Marquee BasketballIcon color now brass (was inheriting ivory text color)
- Contact form wired to real Formspree POST (was stub)
- Philosophy upgraded to GSAP ScrollTrigger for scroll-progress tracking
- All inline event handlers (`onMouseEnter`, `onFocus`, etc.) removed from server components — replaced with CSS hover rules
- Lint warnings cleaned (unused imports, unescaped entities, useEffect state set)
- Build passes clean with TypeScript strict checking

### Skills consulted this session
- Frontend design skill (component structure patterns, responsive breakpoints).
- Implementation plan §1–§12 (full implementation).

### Known issues / things left unfinished
- **Formspree ID:** Replace `YOUR_FORM_ID` in `Contact.tsx` (line 36) and `contact/page.tsx` (line 48) with real Formspree form ID.
- **Map embed:** Google Maps iframe still uses placeholder coordinates. Client must confirm exact pin for Siddhipur location.
- **Images:** All 4 images are AI-generated placeholders. Client must supply real photography before Phase 5 (hero shot, coaches separate portraits, court/facility, action shots).
- **Instagram feed:** Uses placeholder grid with SVG icon overlay. To show real photos, integrate Instagram Basic Display API or SnapWidget/Elfsight embed.
- **Programs detail page metadata:** Assumes pricing is not public. If client wants pricing, add to `/programs` data and detail view.
- **Mobile nav:** Could be upgraded to use Tailwind breakpoints instead of inline `<style>` (Phase 4 polish). Works correctly.
- **Framer Motion:** Installed but not used for primary reveals. Hero uses CSS transitions. Upgrade is a Phase 4 polish item.
- **Footer instagram hover:** The `#footer-instagram:hover` may conflict with `.footer-link:hover` — #footer-instagram correctly shows brass on hover while other footer links show ivory.

### Decisions made / deviations from the plan
- GSAP ScrollTrigger for Philosophy: Implemented with dynamic import to avoid blocking the initial render. Uses `onUpdate` to track scroll progress and set the active philosophy index. Falls back to interval auto-cycle if GSAP fails to load. This is a lighter implementation than full pin+scrub, but achieves the same visual effect without complex layout calculations.
- InstagramFeed uses a placeholder grid of 8 tiles with the Instagram icon, rather than a live API integration. The Instagram Basic Display API requires OAuth setup that's better done in Phase 2. The grid layout and styling are production-ready — only need to swap placeholder `<div>`s with actual `<img>`s.
- Contact form: Using Formspree with a placeholder ID. The client can create a free Formspree account to get a real endpoint. No Next.js API route needed — simpler to maintain.
- Schedule data is representative (not client-confirmed). The structure is correct — client just needs to update the actual times/days.

### Exactly where to resume (Phase 4 polish)
Phase 0–3 are complete. Next session should:
1. **Phase 5 prep — Content-real & launch**: Swap placeholder images for real photography. Get client-verified schedule data, program details, coach bios, and stats. Update Formspree ID. Update map coords.
2. **Phase 4 polish**: Upgrade Hero animations to Framer Motion (spring physics). Mobile QA on actual devices. Accessibility audit (contrast, focus states, ARIA labels). Lighthouse score check. Performance optimization (font loading, image optimization).
3. Do NOT rebuild any existing components — only refine, replace placeholder content, and polish.

### Open questions for the client
- High-res real photography set needed before Phase 5.
- Formspree account setup (free) — need the form ID to replace `YOUR_FORM_ID`.
- Confirmed schedule times (current data is representative, not verified).
- Exact Google Maps coordinates for the Siddhipur court.
- Instagram embed permission and preferred method (Basic Display API vs embed widget).
- Domain name and hosting preference (Vercel recommended).
- Whether pricing should be shown publicly on the programs page.
- Verified player/tournament stats for the counter section.

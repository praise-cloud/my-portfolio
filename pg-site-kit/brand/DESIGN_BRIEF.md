# Design Brief

## 1. Creative direction: "Engineering Editorial"
A calm, premium, editorial portfolio. Agency-level craft (oversized type, strict grid, numbered sections, bento cards, precise motion)
with the restraint of an infrastructure company. Think: a well-designed architecture review, not a nightclub flyer.
Keywords: precise, quiet confidence, structured, deep, premium, technical.
Anti-keywords: loud, neon, "we don't do average", crypto, startup-template, hustle.

## 2. Reference analysis (files in /references) — TAKE vs REJECT
- ref1 Kinetic: TAKE the giant cropped wordmark bleeding off the hero bottom; two-tone headline (dark text fading to grey for the second clause); rounded bento cards with tiny pill labels and small accent dot. REJECT the orange/red motion-blur imagery and loud energy.
- ref2 Mindly: TAKE the soft off-white canvas, generous whitespace, floating glass cards orbiting a central subject, one italic serif phrase inside a sans headline, small trust line. REJECT the wellness/app tone.
- ref3 Gazu: TAKE the monochrome discipline and the portrait cutout overlapping a giant wordmark (depth through layering), wide letter-spaced micro-labels. REJECT fashion-store UI patterns.
- ref4 (Brutal) / ref5 (Form/Shift): TAKE the numbered section system (001–005), monospace metadata (coordinates/time/status), thin hairline rules, index-style project list, marquee band, crop marks and small "fig." annotations. REJECT the heavy condensed display face, orange/yellow/blue color-blocking and confrontational copy.
Added idea (not from a reference): a small live "system status" panel in the hero, since this is an infrastructure brand.
Synthesis: Kinetic/Gazu scale + Form/Shift structure + Mindly softness, in a navy/blue/paper palette.

## 3. Design tokens
Color (CSS variables; dark and light sections alternate):
--navy-950 #060F1D  (deepest, footer/hero-dark)
--navy-900 #0A192F  (primary brand)
--slate-700 #334155 (secondary)
--blue-600 #2563EB  (accent: links, dots, active states ONLY — max ~5% of any screen)
--blue-400 #60A5FA  (accent on dark backgrounds)
--paper #F8FAFC · --white #FFFFFF
--text-on-light #0A192F · --muted-on-light #64748B · --muted-on-dark #94A3B8 · --hairline-light #E2E8F0 · --hairline-dark rgba(148,163,184,.18)
Contrast: body text >= 4.5:1. Never blue text on navy below AA.

Type:
- Display: Manrope 700/800, tight tracking (-0.04em), line-height 0.9–1.0, sizes clamp(3rem, 11vw, 11rem) for wordmark; clamp(2rem, 5vw, 4.5rem) for headlines.
- Body: Inter 400/500, 16–18px, line-height 1.6, max measure 65ch.
- Mono: JetBrains Mono 400, 11–12px uppercase, tracking 0.08em — for metadata, labels, section numbers, status.
- One accent serif italic (Instrument Serif or Newsreader Italic) allowed for a SINGLE word/phrase per page.

Shape/space: 8px grid; radius 20–28px on cards, 999px on pills; hairline 1px rules; container max 1440px, 12-col grid, 24px gutters (16 on mobile).
Elevation: no heavy shadows; use border + subtle inner highlight. Glass cards: bg white/6%, backdrop-blur 16px, 1px hairline.

## 4. Page architecture (single-page home + project/article routes)
Nav: wordmark "PG" or "Praise Georgewill" left; Work, Focus, Writing, About; pill CTA "Start a conversation" right. Sticky, blur on scroll.
001 HERO (dark navy-900): top-left headline "Building systems that scale." (two-tone: second clause in muted); sub: positioning sentence;
   CTAs: "View proof of work" (primary) + "Read the build log" (text link). Right: glass "system status" card + floating mini-cards (Uptime target, Region, Current build) — values clearly labelled as illustrative until real.
   Bottom: giant wordmark PRAISE GEORGEWILL cropped by the section edge (rounded bottom corners like ref1), portrait cutout overlapping letters if portrait exists.
   Mono strip: "SYSTEMS BUILDER / DEVOPS · CLOUD · PLATFORM / LOCAL 14:32 GMT+4" (live clock, Mauritius time).
002 POSITIONING (paper): big two-tone statement, 3 inline pill-icons; one paragraph; mono small caption.
003 CURRENT FOCUS (paper): 4 bento cards (Cloud Infrastructure, DevOps & CI/CD, Platform Engineering, Systems Thinking), staggered heights like ref1, each with tiny diagram-icon, 1-line outcome, tools row in mono.
004 PROOF OF WORK (navy-900): index-style list (01 / Project name / stack / year / status / arrow) with hover preview of architecture diagram; first 3 featured as large cards. Status chips: Planned · Building · Deployed · Published.
005 BUILD LOG (paper): latest 3 articles/weekly notes; format "What I built / What broke / How I fixed it / Lesson".
006 DIRECTION (paper, short): 3–4 sentences on systems -> organizations -> institutions. No Afrivora pitch.
007 CONTACT (navy-950): "Let's solve a systems problem." email + LinkedIn + X + GitHub, availability line, giant wordmark footer repeated, mono footer with build hash + "Deployed on AWS" (only if true).
Marquee band between sections (ref5): "RELIABILITY — OBSERVABILITY — AUTOMATION — SECURITY — COST — SCALE" in mono, slow, pausable.

## 5. Case-study page template (/work/[slug])
Header (title, role, stack, year, status, repo/live links) -> Context -> Constraints -> Architecture (SVG diagram) -> Key decisions & trade-offs ->
Implementation notes (code/IaC excerpts) -> Results (REAL metrics only, else "Measurements pending") -> What broke & how it was fixed -> Cost -> What I'd do next.

## 6. Motion
Purposeful only. Section number + title slide/fade in (y 24px, 600ms, ease-out). Hero: slow drifting network graph (SVG/canvas) with faint blue packets travelling along edges —
the "motion blur" idea from ref1 translated to infrastructure. Cards: 4px lift + hairline brighten on hover. Smooth scroll optional (Lenis) but must not break anchor links.
All motion disabled/simplified under prefers-reduced-motion. No parallax that hurts readability. No autoplay audio/video.

## 7. Imagery
Primary visual language = architecture diagrams, topology graphs, terminal/log excerpts, dashboards screenshots of REAL projects.
Portrait: black-and-white or desaturated navy-toned, cutout optional. If missing, use typographic hero only.
Diagrams: consistent stroke 1.5px, navy/slate/blue, rounded nodes, mono labels.

## 8. SEO / meta
Title "Praise Georgewill — Systems Builder | DevOps & Cloud Engineer". OG image generated from template (navy, wordmark). JSON-LD Person schema. sitemap, robots, canonical.

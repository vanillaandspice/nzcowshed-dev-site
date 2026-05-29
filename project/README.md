# NZ Cowshed Groovers — Design System

> Design system for the NZ Cowshed Groovers website redesign (settlement June 2026). Built to support the in-progress Next.js site at `nzcowshedgroovers.co.nz` and any future marketing collateral, social ads, and lead magnets.

---

## Company

**NZ Cowshed Groovers** is a New Zealand agricultural-services business that cuts grooves into existing concrete to stop livestock slipping. The original technique was developed by founder **Neil Taylor**; **Scott Coker** is the incoming owner (settlement 2 June 2026 — phone, email, and domain transfer that day). Scott's wife Sarsha is Neil's daughter, so the brand continues with family lineage.

**Service:** wet-saw diamond-blade concrete grooving — dust-free, chip-free, 100% lifetime guarantee.
**Surfaces:** cowsheds (primary), dairy yards, races, feedpads, underpasses, car parks, boat ramps, marine docks, wash bays.
**Geography:** North Island, NZ — nationwide capability.
**Phone:** 0274 747 775 (Scott).
**Tagline:** *Stop Losing Money to Slipping Cows.*

The brand is being **refreshed, not rebuilt**. New ownership; same cartoon-cow banner logo, same purple-and-teal identity, with a sparing safety-orange accent introduced for primary CTAs.

---

## Products represented in this design system

There is one product surface:

1. **Marketing website** — `nzcowshedgroovers.co.nz`. WordPress + Elementor in production; the in-progress reference build in the source repo is Next.js 15 + Tailwind v4. The site sells the service to NZ dairy farmers and adjacent commercial buyers (car parks, marinas).

The same tokens, type, and components are also intended to drive: Facebook/Instagram ads (1080×1080), Canva lead-magnet PDFs (A4), and email nurture sequences.

---

## Sources

This design system was built by reading:

- **Repository:** [vanillaandspice/Claudeskills](https://github.com/vanillaandspice/Claudeskills) — branch `main`, subtree `clients/nz-cowshed-groovers/`.
  - `website/Design.md` — full Stitch "Agri-Industrial Practical" token export.
  - `website/src/app/globals.css` — Tailwind v4 `@theme` token block (production source of truth).
  - `website/src/components/**` — `Button`, `Card`, `GrooveDivider`, `Header`, `Footer`, `SectionContainer`.
  - `website/src/app/page.tsx` and the empty stub pages — homepage shell, nav, routes.
  - `website/src/lib/constants.ts` — `SITE`, `CTA`, `NAV_LINKS`, `FOOTER_LINKS`, `HERO_STAT`, `SURFACES`.
  - `context/business-overview.md`, `context/design.md`, `context/product-marketing.md` — brand voice, business goals, ownership.
  - `assets/website/homepage-copy.md` — final approved homepage copy (Version 3).
  - `assets/website/site-architecture.md` — 10-page flat structure, URL map, nav spec.
  - `assets/content/testimonials.md` — 12 customer testimonials + ranking.
  - `public/*.jpg|.png` — logo banner, branded truck, 6 jobsite photos.

The reader is encouraged to browse that repo directly for richer marketing/SEO/research context (`assets/seo/`, `assets/research/`, `assets/advertising/`).

---

## Index of this project

```
README.md                 ← you are here
colors_and_type.css       ← all tokens (CSS vars) + semantic element styles
SKILL.md                  ← Agent Skill manifest (drop into Claude Code)

assets/                   ← raw brand assets
  logo-banner.png         ← cartoon-cow banner logo (purple ribbon)
  truck.jpg               ← branded truck (note: still shows "Neil")
  photos/                 ← jobsite photography (cowsheds, yards, boat ramps)

fonts/                    ← (none — Bebas Neue + Libre Franklin loaded from Google Fonts)

preview/                  ← Design System tab cards (one HTML per token group)

ui_kits/website/          ← high-fidelity React/JSX recreation of the marketing site
  README.md
  index.html              ← interactive multi-page mock
  Header.jsx, Footer.jsx, Button.jsx, Card.jsx, GrooveDivider.jsx,
  HeroSection.jsx, StatCallout.jsx, TestimonialCard.jsx, ServiceCard.jsx,
  EnquiryForm.jsx, ...
```

---

## CONTENT FUNDAMENTALS

The voice is the single most important brand asset. Get this wrong and the rest doesn't matter.

### Vibe

**Farmer-to-farmer. No-nonsense. Plain-speaking.** Hemingway-simple sentences. Active voice. The brand talks the way Scott would talk standing in a cowshed — direct, practical, a bit dry. There is zero marketing jargon ("solutions," "leveraging," "best-in-class," "transform your business" — all banned).

### Person & address

- **"We"** = NZ Cowshed Groovers (the business, Scott + crew).
- **"You"** = the farmer. Always second-person, direct.
- **"Cows," not "livestock,"** when talking to farmers. The word "livestock" appears in commercial/non-dairy contexts only.
- Names are used: **"Call Scott: 0274 747 775"**, not "Call us today!"

### Casing

- **Headlines, buttons, nav, labels:** UPPERCASE Bebas Neue with 0.05em tracking — `GET A QUOTE`, `SERVICES`, `OUR WORK`.
- **Body copy:** sentence case. Not title case.
- **CTA button labels (canonical):**
  - Primary — `Get a Quote`
  - Secondary — `Request a Callback & Quote`
  - Tertiary — `Request a Callback`
  - Phone — `Call Scott: 0274 747 775`

### Tone-defining examples (from the live copy)

> **Stop Losing Money to Slipping Cows**
> We cut grooves into your concrete so cows move safely, milk faster, and you get on with your day.

> A cow that slips loses condition. A cow that goes down can lose production for weeks. On wet concrete, it's not a matter of if — it's when. Most farmers put up with it. The ones who don't call us.

> We grind grooves directly into your existing concrete — cowsheds, yards, races, car parks, boat ramps. No new surface. No major downtime. Just concrete that grips.

> **15,000 cattle movements through one yard since we grooved it. Not a single problem.** — Gordon Wright

Notice: short clauses, em-dashes for emphasis, em-dash + name for attribution, ordinary words ("get on with your day"), concrete numbers ("15,000," "$16–$48 per m²," "20–30 minutes faster milking").

### What we never do

- **No emoji.** Anywhere. Not in headlines, not in buttons, not in CTAs. The brand is rural-NZ, not consumer-tech. (Status arrows ▾ for nav dropdowns and ☰/✕ for the mobile menu toggle are the only Unicode symbols used in the live UI.)
- **No exclamation marks** in headlines. The copy gets emphasis from being right, not from punctuation.
- **No "solutions," "innovative," "cutting-edge," "premium."** Plain words only.
- **No sentence-case marketing trick** of starting every line with a verb. Mix structure naturally.
- **Never invent statistics.** The 15,000-cattle-movements figure is real (Gordon Wright). Pricing range is $16–$48 NZD/m². Grooves last 10–12 years. Milking improves by 20–30 minutes per session. These are the only numbers cleared for use.

### Locale

NZ English spelling: **colour, organised, kilometres, programme.** Currency NZD. "GST" not "VAT" or "tax." Place names from the North Island (Patetonga, Otorohanga, Te Aroha, Waikato, Frankton Sale Yards).

---

## VISUAL FOUNDATIONS

The design system label is **"Agri-Industrial Practical."** It's deliberately a bit utilitarian — flat, bold, sharp on the CTA buttons, soft on the cards. Not a tech-startup look. Not a glossy agricultural-magazine look. Closer to **roadside signage + farm-supplies catalogue + dairy-co-op annual report**, refreshed.

### Colour

- **Deep purple `#3B1F6E`** carries the brand. Used full-bleed for the header, the footer, the hero, and every alternating section. It's the dominant colour on the page.
- **Teal `#2A9D8F`** is the workhorse accent — card top-borders (3px), secondary-button outlines, footer-column headings, dropdown borders, divider tints.
- **Safety-orange `#EC7926`** is reserved for the **primary CTA button** and one or two key highlights per page. Never used for body text, never used for backgrounds (except the CTA itself). If you see orange used twice on the same screen above the fold, you've used too much.
- **Concrete-white `#FFFFFF`** is the page background and the card background.
- **Text-main `#1A1A1A`** for body type — not pure black.
- A full MD3 (Material Design 3) ramp is available for primary / secondary / tertiary / error / surface tokens — these are for systemic UI (form validation, surface containers, inverse-surface footer fragments). Designers should default to the named brand colours first and reach for the MD3 ramp only when they need a tint that isn't in the brand five.

### Typography

- **Bebas Neue** — every heading, every button, every nav link, every label. Condensed, all-caps, single weight (400). Loaded from the **uploaded brand font file** (`fonts/BebasNeue-Regular.ttf`). Letter-spaced 0.02–0.05em depending on size. The whole brand reads as bold because of Bebas, not because everything is in bold weight.
- **Libre Franklin** — every word of body copy, every paragraph, every form input. Loaded from the **uploaded brand variable font files** (`fonts/LibreFranklin-VariableFont_wght.ttf` + matching italic), covering weights 100–900; 400 is default, 700 for inline emphasis. (The earlier brand brief said "Lato" — Libre Franklin is the locked-in choice in the production code, used as a cleaner geometric cousin.)
- Type scale (desktop): display 72px / headline-lg 48px / headline-md 32px / body-lg 20px / body 16px / label-caps 18px. Mobile down-scales h1/h2 to 36px.

### Spacing

- **5rem (80px) vertical section padding.** Sections breathe. There is no edge-to-edge density.
- **2rem (32px) page gutter** on the main container; **1.5rem (24px)** between columns.
- **Stack tokens:** sm 0.5rem / md 1rem / lg 2rem. Use these between stacked elements (label → input, heading → paragraph, paragraph → CTA).

### Backgrounds & layout

- **Tonal-layer alternation** is the depth system. Sections alternate deep-purple (white text) and concrete-white (dark text). Sometimes safety-orange takes a turn for a single high-impact stat bar. No gradients on section backgrounds (the design.md context mentions "gradient variants where appropriate" but the production CSS uses flat fills exclusively — keep it flat unless a Canva ad explicitly requires a gradient).
- **Photography is full-bleed** on hero sections and inside cards. Photos are real jobsite shots — wet concrete, grooved patterns, NZ countryside, working dairy yards. They are intentionally NOT styled or art-directed; the rawness is the point.
- **The grooved-concrete pattern is the brand's secondary texture.** A crosshatch SVG `<GrooveDivider />` is used between sections to reinforce the visual story (grooves on concrete = safe footing). See `preview/component-groove-divider.html`.

### Cards

Flat. White (`#FFFFFF`) background, **3px teal top border**, generous padding (24px), no drop shadow, no inner shadow, no rounded corners on the top edge (it's a hard line). Default radius elsewhere is `0.25rem` (subtle).

### Buttons

| Variant | Background | Border | Text | Radius | Press |
|---|---|---|---|---|---|
| **Primary** | `safety-orange` | none | white Bebas caps | **0px (sharp)** | `scale(0.95)` |
| **Secondary** | transparent | 2px teal | teal Bebas caps | **0px (sharp)** | `scale(0.95)` |
| **Ghost** | transparent | 2px white | white Bebas caps | **0px (sharp)** | `scale(0.95)` |

- Minimum tap target **48px height**, 32px horizontal padding (`px-8`).
- Hover: `filter: brightness(0.9)` — darken on hover, no colour shift, no underline.
- Press: `transform: scale(0.95)` — physical press feedback, no shadow lift.
- The sharp `0px` corner on CTA buttons is intentional — it echoes the cut-groove aesthetic and stops the brand from drifting into "consumer SaaS." All other components (inputs, cards, surfaces) use the soft 0.25rem default.

### Form inputs

- 2px deep-purple border, no fill, 16px padding.
- Uppercase Bebas label above the field (`label-caps` style, 0.05em tracking).
- Focus: keep the 2px border, brighten to `outline` colour or stay on `deep-purple` — no glow rings.

### Dividers

- The `<GrooveDivider />` SVG pattern (24×16 crosshatch on `surface-container` background) is the named divider system. Use between major sections or as a top/bottom edge on photo blocks.
- Plain `1px solid teal/30` for utility dividers (e.g. footer column separator).

### Shadows

**Effectively none.** No `box-shadow` on cards, buttons, headers, modals. The only shadow in the production code is the dropdown menu (`shadow-lg`), kept low and quiet. Depth is achieved through colour alternation, not elevation.

### Borders

- Card top edge: **3px teal**.
- Input: **2px deep-purple**.
- Secondary button: **2px teal**.
- Footer divider: **1px teal at 30% alpha**.
- Dropdown frame: **1px teal**.

### Animation & interaction

The brand is **calm and direct**. Animations are tiny.

- **Easing:** standard ease-in-out — no bounce, no spring, no overshoot.
- **Duration:** 150–200ms for everything. Never longer.
- **Hover:** `filter: brightness(0.9)` on filled buttons; **colour shift to teal** on text links / nav links.
- **Press:** `transform: scale(0.95)` on buttons.
- **Focus:** keep the existing border at full strength; do not add glow.
- **No carousel auto-rotation.** No parallax. No scroll-triggered fades. The mascot (cartoon cow) is allowed to **break container edges** — that's the only "playful" motion permitted, and it's static.

### Imagery vibe

- **Warm but not over-warm.** Photos are NZ jobsites — overcast skies, wet concrete, galvanised steel gates, mud at the edges. Realistic. No filters, no Instagram-grade colour grading. No black-and-white.
- **No stock photography of models in suits.** If a person appears, it's a farmer in work clothes, on-farm.
- **The cartoon cow mascot** (purple ribbon banner) is the one piece of illustration and may be used playfully — it's allowed to overlap and break out of container edges.

### Transparency, blur

- Used very sparingly. Footer nav links use white at 80% alpha (`text-concrete-white/80`) for the "quieter" feel. Mobile-menu border is teal at 20–30% alpha. **No backdrop blur** anywhere. The brand is not glassmorphic.

### Corner radii

- Default `0.25rem` for surfaces, cards, inputs, dropdowns.
- `0px` (rounded-none) for **all CTA buttons** and groove-pattern elements.
- `9999px` (pill) only for chip/tag components if needed — not currently used on the site.

### Protection gradients / capsules

The hero in the cartoon-cow logo uses a **purple ribbon "capsule"** behind the brand name. This is part of the logo asset and is not a repeatable system — don't recreate it elsewhere on the site. There are **no over-image gradient protection layers** in use (photos are paired with adjacent text blocks instead).

### Fixed elements

- **Sticky header** at `z-50`, `position: sticky; top: 0`, deep-purple bg, 64px tall.
- **Mobile menu**: full-screen overlay (`position: fixed; inset: 0; top: 16`) deep-purple, white links, "GET A QUOTE" CTA pinned at the bottom.

---

## ICONOGRAPHY

The website uses **no icon font and no SVG icon library**. This is intentional — the brand voice is plain, and adding a busy iconography layer would clutter it.

### What's used in practice

- **Unicode glyphs** for the few UI symbols that exist:
  - `▾` dropdown chevron in the Services nav item.
  - `☰` / `✕` for the mobile menu open/close button.
  - `☎` phone glyph appears inside the cartoon-cow logo banner.
  - `→` (right-arrow) for inline links like "See all services →".
- **Bullet character** `·` for inline list separators (`Cowsheds · Yards · Car Parks · Boat Ramps`).
- **Em-dash** `—` for attribution (`— Gordon Wright`) — set in body type, this functions iconographically.

### Imagery in place of icons

Where most brands would use a 24×24 icon, NZ Cowshed Groovers uses a **photo**. The "cowsheds / yards / car parks / boat ramps" grid on Services and the homepage uses real jobsite photos as the visual handle for each surface type. This reinforces the "we did this" credibility-by-proof approach.

### Cartoon cow mascot

The single most distinctive iconographic asset is the **cartoon Friesian cow** that lives inside the brand banner (`assets/logo-banner.png`). She wears a bell and stands on grooved concrete. The brief calls for **future seasonal variants** (winter/summer cartoon cow) commissioned from illustrator **Scott Pearson**, to be delivered as **layered Illustrator files for Canva reuse**. Until those land, the existing banner cow is the only mascot artwork in play.

> **Substitution flag — please confirm.** No bespoke icon set has been delivered. If we end up needing inline UI icons (e.g. for service-page feature lists, form-validation states, or footer social), the closest match to the brand's bold, slightly chunky character would be **Lucide** at 2px stroke or **Phosphor "regular"** — both available via CDN. Flag to Scott / Steve before adding any.

### Emoji policy

**Never used in user-facing copy or UI.** This is enforced.

---

## How to build with this system

1. Import `colors_and_type.css` once at the top of any HTML/CSS file. CSS variables drive everything.
2. Use the **named brand colours** (`--deep-purple`, `--teal`, `--safety-orange`, `--concrete-white`, `--text-main`) by default. Only reach for the MD3 ramp when you need a state colour the named five don't cover.
3. For section layout, **alternate** `--deep-purple` and `--concrete-white` backgrounds vertically. Use a `<GrooveDivider />` between sections that need a hand-off (purple → white or vice-versa).
4. Use **one primary orange CTA per screen**. If a screen needs more than one CTA, the others are **secondary teal-outline** buttons.
5. Read `ui_kits/website/README.md` for the canonical component recreations and copy patterns.

---

## CAVEATS — please confirm

These are things the source repo flagged as still-open, or that I had to make a judgement call on. Please flag any I should revise.

- **Orange accent integration** is marked TBC pending advice from contractor **Scott Pearson**. I've followed the production CSS, which already commits `#EC7926` as the primary CTA — change here will propagate.
- **Body font is Libre Franklin** in the production CSS, but the brand brief in `context/design.md` originally specified **Lato**. I've gone with Libre Franklin since it's locked into `globals.css` and `layout.tsx`. If Lato is preferred, swap the `@import` in `colors_and_type.css` and the `--font-body` variable.
- **No bespoke icon set exists.** I have not pulled in Lucide/Heroicons/etc. by default. Flag if you want me to wire one up.
- **The cartoon-cow truck photo** still shows "Neil 0274 747 775" — same number, but Neil is to be replaced with **Scott** in all post-settlement (2 June 2026) materials. The image should be reshot or retouched; we've kept it in `assets/truck.jpg` for now as the only available reference.
- **Cartoon-cow seasonal variants** (winter/summer) are not yet delivered by Scott Pearson — the banner mascot is the only available illustration.
- **No full brand guide PDF** exists yet — this design system is currently the source of truth for tokens, voice, and layout rules.

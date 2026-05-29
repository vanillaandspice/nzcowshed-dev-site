---
name: nz-cowshed-groovers-design
description: Use this skill to generate well-branded interfaces and assets for NZ Cowshed Groovers, either for production or throwaway prototypes / mocks / Facebook ads / lead-magnet PDFs / slide decks. Contains essential design guidelines, colour and type tokens, fonts, jobsite photography, a cartoon-cow logo, and a full UI kit recreation of the marketing website.
user-invocable: true
---

# NZ Cowshed Groovers — Design Skill

Read **README.md** first — it covers the brand context (Scott Coker as new owner, Neil Taylor's original technique), the *Agri-Industrial Practical* visual direction, content fundamentals (farmer-direct voice, no marketing-speak, no emoji), and the full token system.

Then explore:
- `colors_and_type.css` — drop-in CSS variables for colour, type, spacing, radius, motion.
- `assets/` — `logo-banner.png` (cartoon cow), `truck.jpg`, and 6 NZ jobsite photos under `photos/`.
- `ui_kits/website/` — React/JSX recreation of every key marketing-site page. Use the components as canonical references for Header, Footer, Button, Card, Form, Hero, Stat callout, Groove divider, Testimonial, Service tile, Enquiry form.
- `preview/` — atomic Design System tab cards (colours, type, spacing, components, brand). Useful as quick visual reference.

## What to build with it

- **Visual artifacts** (throwaway prototypes, slide decks, mocks, social ads, lead magnets): copy assets out of `assets/` and produce static HTML or image files for the user. Import `colors_and_type.css` once and use the CSS variables exclusively — never hardcode hex values.
- **Production code**: copy `colors_and_type.css` into the project, or lift the `@theme` block from the source repo's `globals.css` directly. Mirror the JSX components in `ui_kits/website/` for parity with the live site.

## Hard rules — do not break

1. **Voice:** plain, farmer-direct. No marketing jargon, no emoji, no exclamation marks in headlines. Use names ("Call Scott: 0274 747 775"), not "Contact us today."
2. **Tonal layering:** alternate `deep-purple` and `concrete-white` sections vertically. Reach for `safety-orange` exactly once per page (the primary CTA).
3. **Buttons are sharp** (`border-radius: 0`) and Bebas-Neue uppercase. Hover = `filter: brightness(0.9)`. Press = `transform: scale(0.95)`. No shadows.
4. **Cards are flat:** white bg, 3px teal top border, no drop shadow.
5. **NZ English spelling.** Numbers are real (15,000 movements, $16–$48/m², 10–12 year life) — never invent stats.
6. **No icons:** use Unicode glyphs (▾ ☰ ✕ → · — ☎) only. If a real icon set is required, flag to the user first; the closest brand-fit substitute is Lucide at 2px stroke.

## If invoked without guidance

Ask what they want to build, then act as an expert designer. Default outputs:
- A new web page → static HTML using `colors_and_type.css` + components from `ui_kits/website/`.
- A Facebook ad → 1080×1080 deep-purple bg, Bebas headline, orange CTA bar bottom, cartoon-cow optional, single proof point.
- A lead-magnet PDF cover → A4 deep-purple bg, big Bebas number/headline, byline.
- A slide deck → see deck conventions in README (Bebas Neue + Libre Franklin, purple/white alternation).

Always confirm tone, audience, and one-page-or-multi-page scope before producing more than a single mock.

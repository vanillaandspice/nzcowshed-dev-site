# NZ Cowshed Groovers — Website UI Kit

High-fidelity React/JSX recreation of the marketing website. Built off the production Next.js source in `clients/nz-cowshed-groovers/website/src/**` and the approved homepage copy.

## Run it

Open `index.html` directly. It loads React 18 + Babel from CDN and stitches the components together with hash-based routing. Anchors `#/`, `#/services`, `#/services/cowshed-grooving`, `#/testimonials`, `#/about`, `#/contact`, `#/our-work` are all wired.

## Components

| File | Purpose |
|---|---|
| `Header.jsx` | Sticky deep-purple header with logo, nav, services dropdown, primary CTA, mobile menu toggle |
| `Footer.jsx` | 3-column deep-purple footer (Services / Company / Contact) + bottom strip |
| `Button.jsx` | Primary (orange) / Secondary (teal outline) / Ghost (white outline) — sharp 0px radius |
| `Card.jsx` | Flat white card with 3px teal top border — service & testimonial variants |
| `GrooveDivider.jsx` | Crosshatch SVG section divider |
| `Section.jsx` | Section container with alternating bg + 5rem padding |
| `Field.jsx` | Form field with Bebas-Neue caps label and 2px deep-purple border |
| `HeroSection.jsx` | Homepage hero with H1, sub, primary CTA |
| `StatCallout.jsx` | Big-number callout (15,000 movements) |
| `TestimonialBlock.jsx` | Quote + attribution |
| `ServiceTile.jsx` | Photo + caption tile for the surfaces grid |
| `EnquiryForm.jsx` | Contact form (name, phone, email, location, surface, m²) |
| `pages/HomePage.jsx` | Full homepage composition |
| `pages/ServicesPage.jsx` | Services hub + 4 surface tiles |
| `pages/CowshedGroovingPage.jsx` | Detail page for the primary service |
| `pages/TestimonialsPage.jsx` | All testimonials |
| `pages/AboutPage.jsx` | Brand + history |
| `pages/ContactPage.jsx` | Enquiry form + phone + map placeholder |

All components reference CSS variables from `../../colors_and_type.css`. No raw hex literals in component files.

## Source of truth

- Production Next.js components — `clients/nz-cowshed-groovers/website/src/components/**`
- Approved homepage copy — `assets/website/homepage-copy.md` (Version 3)
- Routes & nav constants — `src/lib/constants.ts`
- Site architecture — `assets/website/site-architecture.md`

## What's intentionally cosmetic

- Form submit is mocked (logs to console, shows success state).
- The mobile-menu toggle works but the breakpoint is approximated.
- The "Our Work" photo gallery uses the 6 jobsite photos that exist in `assets/photos/`.
- Service-page bodies use the approved copy where it exists and short stub blocks where it doesn't (clearly labelled).

## Known gaps vs production

- Truck photo still shows "Neil 0274 747 775" (settlement asset, to be re-shot).
- No live pricing calculator yet — placeholder block.
- No newsletter signup yet (will hook into the 4-email nurture sequence).

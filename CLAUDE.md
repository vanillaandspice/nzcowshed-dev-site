# NZ Cowshed Groovers — Site Documentation

## Site Overview

Static Astro 6 site. 10 pages. Deployed on Vercel via `main` branch push.

**Live URL**: https://www.nzcowshedgroovers.co.nz
**Dev URL**: Vercel preview (auto-generated per branch)
**Contact email**: info@cowshedgroovers.co.nz
**Phone**: 0274 747 775 (Scott Coker)

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Astro 6 (static output) |
| React islands | @astrojs/react — EnquiryForm, ZoomModal only |
| Styling | CSS custom properties + Astro scoped styles |
| Forms | Formspree (see below) |
| Sitemap | @astrojs/sitemap — auto-generated at build |
| Analytics | Google Analytics 4 (GA4) |
| Search | Google Search Console |
| SEO data | DataForSEO API |
| Deploy | Vercel (auto-deploy on push to main) |
| Updates | GitHub Actions — weekly Astro update PR |

---

## Directory Structure

```
src/
  layouts/
    Layout.astro          ← shared HTML shell, SEO, GA4, JSON-LD
  components/
    Header.astro
    Footer.astro
    Section.astro         ← bg prop: deep-purple|concrete-white|surface|safety-orange
    Button.astro          ← variant prop: primary|ghost
    Card.astro
    GrooveDivider.astro
    HeroSection.astro     ← home page hero only
    ServiceHero.astro     ← reusable hero for service sub-pages
    ServiceTile.astro
    TestimonialBlock.astro
    StatCallout.astro
    Slideshow.astro       ← vanilla JS, no library
    EnquiryForm.tsx       ← React island, Formspree
    ZoomModal.tsx         ← React island, About page clipping
  pages/
    index.astro
    services/
      index.astro
      cowshed-grooving.astro
    yards.astro
    car-parks.astro
    boat-ramps-marine-docks.astro
    our-work.astro
    testimonials.astro
    about.astro
    contact.astro
  styles/
    global.css            ← design tokens, fonts, base reset
public/
  assets/
    brand/                ← logo, cow, truck, clipping, landscape
    photos/               ← job photos
  fonts/                  ← BebasNeue, LibreFranklin (TTF)
  robots.txt
```

---

## Brand

**Colours**
- Deep Purple `#3B1F6E` — primary brand, hero backgrounds
- Teal `#2A9D8F` — accents, borders, highlights
- Safety Orange `#EC7926` — CTAs, prices, urgency
- Concrete White `#FFFFFF` — light backgrounds, text on dark

**Fonts**
- Headings: Bebas Neue (local TTF)
- Body: Libre Franklin (local TTF, variable)

**Tone**: Direct, farmer-friendly. Short sentences. Concrete facts over adjectives. "20–30 minutes faster milking" not "significantly improved".

---

## Pages & URLs

| Page | URL | File |
|------|-----|------|
| Home | `/` | `src/pages/index.astro` |
| Services hub | `/services` | `src/pages/services/index.astro` |
| Cowshed Grooving | `/services/cowshed-grooving` | `src/pages/services/cowshed-grooving.astro` |
| Yards | `/yards` | `src/pages/yards.astro` |
| Car Parks | `/car-parks` | `src/pages/car-parks.astro` |
| Boat Ramps | `/boat-ramps-marine-docks` | `src/pages/boat-ramps-marine-docks.astro` |
| Our Work | `/our-work` | `src/pages/our-work.astro` |
| Testimonials | `/testimonials` | `src/pages/testimonials.astro` |
| About | `/about` | `src/pages/about.astro` |
| Contact | `/contact` | `src/pages/contact.astro` |

---

## Common Update Tasks

### Update a testimonial
Edit the `testimonials` array in `src/pages/testimonials.astro`. Same data structure:
```js
{ quote: "...", name: "Farmer Name", biz: "Location or Business" }
```

### Add a slideshow slide
Find the `slides` array at the top of the relevant page file and add an entry:
```js
{ photo: '/assets/photos/filename.webp', line1: 'First line', line2: 'Second line', name: 'Name', location: 'Location' }
```
Add the photo to `public/assets/photos/`.

### Update phone number or email
Both appear in `src/components/Footer.astro` and `src/pages/contact.astro`. Search for `0274 747 775` and `info@cowshedgroovers.co.nz`.

### Update pricing
Mentioned in `src/pages/services/cowshed-grooving.astro` (CTA section) and `src/pages/contact.astro` (sidebar). Also in `src/layouts/Layout.astro` (JSON-LD `priceRange`).

### Add a new page
1. Create `src/pages/new-page.astro`
2. Import Layout and components
3. Add to nav in `src/components/Header.astro` and `src/components/Footer.astro`

---

## SEO Setup

### Completed (built-in)
- Unique `<title>` and `<meta description>` per page
- Canonical URL tag
- Open Graph + Twitter Card tags
- JSON-LD LocalBusiness schema (every page)
- `sitemap-index.xml` auto-generated at build → `https://www.nzcowshedgroovers.co.nz/sitemap-index.xml`
- `robots.txt` with sitemap URL
- `lang="en-NZ"` locale
- Font preloads

### Actions Required

**Google Search Console**
1. Go to https://search.google.com/search-console
2. Add property for `https://www.nzcowshedgroovers.co.nz`
3. Copy the HTML tag verification code
4. In `src/layouts/Layout.astro`, replace `REPLACE_WITH_GSC_VERIFICATION_CODE`
5. Submit `sitemap-index.xml` in GSC

**Google Analytics 4**
1. Go to https://analytics.google.com and create a GA4 property
2. Copy the Measurement ID (format: `G-XXXXXXXXXX`)
3. In `src/layouts/Layout.astro`, replace both instances of `G-XXXXXXXXXX`

**Formspree**
1. Go to https://formspree.io, create account with info@cowshedgroovers.co.nz
2. Create a new form, copy the 8-character form ID
3. In `src/components/EnquiryForm.tsx`, replace `REPLACE_WITH_FORMSPREE_ID`

---

## DataForSEO Integration

DataForSEO is an API-first SEO data platform used via Claude/Hermes workflows — it does not embed in the site.

**API endpoint**: https://api.dataforseo.com/v3/
**Credentials**: Store as environment variables `DATAFORSEO_LOGIN` and `DATAFORSEO_PASSWORD`

**Recommended workflows (run via Hermes AI agents or Claude Code):**

1. **Keyword rankings** — `POST /v3/serp/google/organic/live/advanced`
   Target keywords: "concrete grooving NZ", "cowshed grooving", "non-slip concrete NZ", "yard grooving New Zealand"

2. **Backlink monitor** — `POST /v3/backlinks/backlinks/live`
   Check monthly for new/lost backlinks to `nzcowshedgroovers.co.nz`

3. **Competitor analysis** — `POST /v3/serp/google/organic/live/advanced`
   Track top 10 SERP results for target keywords

4. **Page speed audit** — `POST /v3/on_page/task_post`
   Monthly Lighthouse-equivalent audit across all 10 pages

**Sample weekly ranking check (Claude tool use)**:
```bash
curl -X POST "https://api.dataforseo.com/v3/serp/google/organic/live/advanced" \
  -u "$DATAFORSEO_LOGIN:$DATAFORSEO_PASSWORD" \
  -H "Content-Type: application/json" \
  -d '[{"keyword":"concrete grooving NZ","location_code":2554,"language_code":"en","device":"desktop","depth":10}]'
```

---

## Astro Updates (Option B — GitHub Actions)

Workflow file: `.github/workflows/astro-updates.yml`

- Runs every Monday at 9am UTC
- Checks for new versions of `astro`, `@astrojs/*`, `react`, `react-dom`
- Runs `npm run build` to verify the update doesn't break anything
- Opens a PR titled "chore: weekly Astro dependency updates"
- **Review the Vercel preview deployment on the PR before merging**
- Major version updates (e.g. Astro 6 → 7) require manual review of breaking changes

Also triggerable manually via GitHub Actions → "Check Astro Updates" → Run workflow.

---

## Deployment

Push to `main` → Vercel auto-builds → live in ~30 seconds.

```bash
git add src/pages/testimonials.astro
git commit -m "Add new testimonial from Kevin, Patetonga"
git push origin main
```

Vercel build logs: https://vercel.com/dashboard (check if build fails)

---

## Management Layers

**Claude Code (interactive)**: Open terminal, run `claude`, describe the change. Claude edits `.astro` files, commits, done.

**Hermes AI agents (automated)**: Scheduled workflows that read repo files and DataForSEO API data — keyword reports, content audits, backlink alerts.

Both work on the same plain-text `.astro` source files. No CMS, no sync issues.

# Changelog

All notable changes to this project will be documented in this file.

---

## 2026-05-20 (Session 2)

### Full Site Structure & Service Pages

**Navigation updated** to match client content brief:
- Air Conditioning: 7 sub-pages (split system, ducted, VRV/VRF, design & construction, repair, maintenance, FAQ)
- Split System: 3 installation type sub-pages (back-to-back, side entry, up & over)
- Electrical: 2 sub-categories (residential, general maintenance)
- Builder Services: combined electrical + AC page

**Reusable service page components created:**
- `ServiceHero` — dark banner with breadcrumbs, title, description, CTA pair
- `ServiceCTA` — dark section with heading, description, quote + phone buttons
- `RelatedServices` — 3-column grid of linked service cards

**15 service pages built:**
- `/services/air-conditioning` — main landing with service grid
- `/services/air-conditioning/split-system` — overview with 3 install types
- `/services/air-conditioning/split-system/back-to-back` — standard install details + pricing
- `/services/air-conditioning/split-system/side-entry` — side entry details + pricing
- `/services/air-conditioning/split-system/up-and-over` — up & over details + pricing
- `/services/air-conditioning/ducted` — ducted AC with AirTouch 5 zone controller
- `/services/air-conditioning/vrv-vrf` — VRV/VRF systems for larger buildings
- `/services/air-conditioning/design-construction` — AC design for new builds
- `/services/air-conditioning/repair-installation` — repair & installation services
- `/services/air-conditioning/service-maintenance` — servicing & maintenance
- `/services/air-conditioning/faq` — 10-question FAQ accordion
- `/services/electrical` — main electrical landing
- `/services/electrical/residential` — 8 residential service cards
- `/services/electrical/maintenance` — 8 maintenance service cards
- `/services/builder` — builder services with 3-stage process

**Content brief saved** to `content/pages/site-content-brief.md` for reference.

**Footer updated** with correct service links matching new page structure.

---

## 2026-05-20 (Session 1)

### Project Setup & Homepage Build

**Config & Branding**
- Updated `config/site.config.ts` with Links Air & Electrical branding: name, phone (`0468 432 538`), email, license (`312045C`), ARC (`AU45821`), tagline, service areas, nav with dropdown menus, social links
- Updated `config/theme.css` with brand color palette: primary blue `#0F4C81`, secondary blue `#1B6EAA`, accent green `#7AC943`, CTA red `#ED1C24`
- Swapped fonts to Lato (headings) + Open Sans (body) in `app/layout.tsx`

**Assets Downloaded** (from linksairelectrical.com.au)
- Logo, favicon, 5 hero images, 3 service images, 6 trust icons, 10 gallery photos, 8 brand logos
- Favicon set up as `favicon.png`, `icon.png`, `apple-icon.png`

**Homepage Sections Built**
- **Header** — dark navy top bar (license, email, 24/7 emergency badge), white nav bar with dropdowns, phone number, red "Get a Quote" CTA
- **Hero** — gradient blue background with decorative circles, brand tagline, "Electrical & air, done right." headline with green accent, trust bullets, red phone CTA + green quote CTA, 5-star Google reviews badge
- **Services** — 3-column cards (Air Conditioning, Electrical, Building & Construction) with images
- **Trust Stats** — 6 icon stats on dark background (7+ yrs, 100% satisfaction, zero damage, top brands, maintenance, no hidden charges)
- **About** — two-column layout (image + text), 24/7 CTA strip with red phone button
- **Gallery** — 4-column image grid with hover effects
- **Why Choose Us** — 3-column feature cards with green icons (licensed, on-time, transparent pricing, compliance, communication, warranties)
- **Brand Partners** — logo row (Daikin, Mitsubishi, Fujitsu, Panasonic, ActronAir, Hisense, TECO)
- **FAQ** — accordion with 5 Q&As
- **Footer** — 4-column (brand, quick links, services, contact), license in copyright bar

### Design Refinement — Jaric-Inspired Overhaul

Restructured homepage to follow Jaric Group's design philosophy: cleaner, more minimal, professional with generous whitespace and dark/light section rhythm. Not a copy — adapted to Links Air branding and content.

**Hero** — Changed from split two-column layout to centered headline (Jaric style). Light font weight on headline. Removed decorative circles. Phone CTA changed from red filled to white-bordered (one solid CTA + one outlined). Reviews badge made smaller/subtler.

**Services** — Changed from white card-with-image to dark overlay cards (image background with gradient overlay, white text). Added service icons. More impactful, Jaric-inspired treatment.

**Trust Stats** — Changed from full dark section with icon circles to a clean horizontal strip with small green icons + text. Less visual weight, more professional.

**About** — Simplified copy. Changed CTA from green filled button to text link with arrow. 24/7 CTA strip changed from blue (`bg-secondary`) to dark (`bg-primary`) for dark/light rhythm.

**Why Choose Us** — Changed from 3-column centered cards to two-column layout (text + reasons grid on left, image on right). More Jaric-like asymmetric layout.

**Gallery** — Reduced from 8 to 6 images. Changed from 4-column to 3-column. Simplified hover effects. Changed aspect ratio from square to 4:3.

**Brand Partners** — Changed from heading + grayscale logos to a clean border strip with faded logos (50% opacity, full on hover). More subtle/professional.

**Section flow** — Reordered for proper dark/light alternation:
`Hero (dark) → Stats (light strip) → Services (muted) → About (light) → CTA (dark) → Why Us (light) → Gallery (muted) → Brands (light strip) → FAQ (light) → Footer (dark)`

**SEO Setup**
- Page title: "Air Conditioning Service in Brisbane - Links Air & Electrical"
- Rich meta description with services, review count, phone number
- 13 targeted keywords
- Canonical URL, geo meta tags, googlebot directives
- Open Graph + Twitter Card with dynamic edge-rendered OG image (1200x630) featuring brand colors, tagline, phone, license, stars
- JSON-LD schemas: LocalBusiness (with geo, services catalog, aggregate rating, opening hours), WebSite, FAQPage
- Sitemap auto-generated from nav including all service sub-pages
- robots.txt with allow `/`, disallow `/api/` and `/_next/`

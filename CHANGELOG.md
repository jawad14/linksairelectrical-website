# Changelog

All notable changes to this project will be documented in this file.

---

## 2026-05-20

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

**SEO Setup**
- Page title: "Air Conditioning Service in Brisbane - Links Air & Electrical"
- Rich meta description with services, review count, phone number
- 13 targeted keywords
- Canonical URL, geo meta tags, googlebot directives
- Open Graph + Twitter Card with dynamic edge-rendered OG image (1200x630) featuring brand colors, tagline, phone, license, stars
- JSON-LD schemas: LocalBusiness (with geo, services catalog, aggregate rating, opening hours), WebSite, FAQPage
- Sitemap auto-generated from nav including all service sub-pages
- robots.txt with allow `/`, disallow `/api/` and `/_next/`

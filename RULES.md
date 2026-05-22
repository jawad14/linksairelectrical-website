# Project Rules

Rules and standards that must be followed across every page and component in this project. This is the enforcement checklist — if it's here, it's non-negotiable.

---

## Two Reference Sites

This project uses two reference websites. Both must be consulted when building pages:

1. **https://linksairelectrical.com.au/** — the **ORIGINAL** live site. Use for:
   - Navigation structure, page links, URLs (must match exactly)
   - Phone numbers, email, service areas, all business data
   - Section order and page structure
2. **https://jaricgroup.com.au/** — the **DESIGN/CONTENT** reference. Use for:
   - Section layout patterns, design approach
   - Content style — how services, testimonials, CTAs, stats are presented
   - **Always rephrase content for Links Air & Electrical — never copy verbatim**

**Rule:** Structure/links/pages come from the original site. Content style comes from Jaric. Business data comes from `siteConfig`.

### Three sources for content (priority order)

When writing content for any section or page, draw from these three sources:

1. **index.html** (deleted but was the design reference) — use its **layout, structure, and visual design** (two-column grids, badge positions, color accents, spacing). This is the gold standard for how sections should look.
2. **Original site** (linksairelectrical.com.au) — use its **business-specific content** (service descriptions, feature bullets, stats like "200+ Google reviews", "since 2014", service areas). This is the factual source.
3. **Jaric site** (jaricgroup.com.au) — use its **content style and tone** (how they write welcome text, testimonials, CTAs). Rephrase everything for Links Air & Electrical.

**Never copy verbatim from Jaric.** Always rewrite in Links Air & Electrical's voice.
**Content always comes from the original site first.** Only fall back to Jaric or rephrased content when the original site has no content for that section. If original site content exists, use it — don't replace it with Jaric-style content.

### Sections not in index.html

When the original site has a section that didn't exist in the index.html (e.g. Gallery, TrustedExperts, OneTeam), create it as a new component using the **same styling patterns** as existing sections (same container widths, eyebrow style, heading sizes, border radius, shadows, color tokens, spacing). Match the look and feel — don't invent a new design language.

## Branding

- **Phone: `1300 010 393` (primary) / `0447 440 050` (mobile).** Always pull from `siteConfig.phone` and `siteConfig.mobile`. Never hardcode.
- **License: `312045C` / ARC: `AU45821`.** Always pull from `siteConfig.license` and `siteConfig.arc`.
- **Tagline: "Trusted Local Sparkies · A/C Specialists".** Pull from `siteConfig.tagline`.
- **CTA color convention:** Red (`bg-[#E73438]`) for phone/call buttons and primary CTAs. Blue (`bg-[#2196D6]`) for secondary. Consistent across all pages.
- **Logo:** Always use `next/image` with `/logo.webp`. Never inline SVG or raw `<img>`.
- **Fonts:** Poppins (headings via `font-heading`) + Inter (body via `font-sans`).
- **Images:** All images must be `.webp` format. When adding new images, download them, convert with `cwebp -q 80`, delete originals. Always add this rule when creating pages.

## SEO (every page — non-negotiable)

Every new page MUST include all of the following before it ships:

1. **Unique `metadata` export** with:
   - `title` — unique, keyword-rich, under 60 chars. Format: `Page Name — Links Air & Electrical`
   - `description` — unique, benefit-driven, 120–155 chars, include location (Brisbane/Gold Coast)
   - `alternates.canonical` — set to the page's own full URL (`${siteConfig.url}/page-slug`)
   - `openGraph.title` and `openGraph.description` — can match title/description
   - `openGraph.url` — page's full URL
2. **JSON-LD schema** via `<JsonLd>` component:
   - Every page: minimum `WebPage` or more specific type (`AboutPage`, `ContactPage`, `FAQPage`)
   - Service pages: add `Service` schema with `name`, `description`, `provider`
   - Homepage only: `LocalBusiness` + `WebSite` + `FAQPage` — do not duplicate on other pages
3. **Images**: all must use `next/image` with descriptive `alt` text. No empty `alt=""`. All images must be `.webp` format.
4. **Headings**: one `H1` per page, semantic order (H1 → H2 → H3). Never skip levels.
5. **Page shell**: `<UtilityBar />` → `<Header />` → `<main>` → content → `<Footer />` on every page.

## Layout & Structure (consistency with homepage)

- Every page uses the same shell: `<Header />` → `<main>` → content sections → `<Footer />`.
- Every content section uses `<Section>` → `<Container>` → layout primitives. No custom `mx-auto max-w-*` combinations.
- Typography uses `H1`–`H6`, `P`, `Lead`, `Muted`, `Small` from `@/components/ui/typography`. Never raw HTML heading or paragraph tags.
- Forms use shadcn primitives from `components/ui/`. Never raw `<input>`, `<textarea>`, `<select>`.

## Responsive (mobile-first)

- Default styles target 360px mobile. Use `sm:`, `md:`, `lg:`, `xl:` for larger screens.
- Every page must work at 360px width with no horizontal scroll.
- Tap targets must be at least 44x44px on mobile.
- Images always use `next/image` with explicit `width`, `height`, and `alt`.

## Content & Copy

- No hardcoded brand strings in components. Company name, phone, email, address, service areas — all come from `siteConfig`.
- Service descriptions, FAQ content, and page copy should be defined as data arrays at the top of the file or in `content/`, not inline in JSX.
- All content visible to search engines must be server-rendered (no client-side-only marketing text).

## Homepage-Only vs Reusable Sections

**Homepage section order** (must match):
1. `UtilityBar` — email, phone, mobile (left) | location (right)
2. `Header` — logo + full mega-menu nav matching original site
3. `Hero` — dark overlay hero, CTAs, service entry cards
4. `TrustStats` — 6 trust icons
5. `Services` — 3 main cards (AC, Electrical, Building)
6. `WhyUs` — welcome/about company intro
7. `Testimonials` — 9 reviews Splide slider + Google link
8. `PromoBanner` — 20% OFF red banner
9. `Gallery` — project photos Splide slider (4-col desktop)
10. `Contact` — form + contact info + emergency CTA
11. `About` — "Why Choose Links" checklist
11. `Areas` — 6 service areas
12. `CTABand` — final blue CTA
13. `Footer` — brand, useful links, contact, social

**Reusable across all pages:**
- `UtilityBar` — every page
- `Header` — every page
- `Footer` — every page

**Inner/service pages should NOT include** homepage-only sections (Hero, TrustStats, PromoBanner, etc.). Inner pages will have their own content sections.

## Components

- Reuse existing block components from `components/blocks/` where applicable. If a new page needs a section that already exists (e.g., BrandPartners), import and reuse — don't rebuild.
- New block components go in `components/blocks/`. New UI primitives go in `components/ui/`.
- `'use client'` only when interactivity is required (dropdowns, accordions, forms with state). Default to server components.

## File Organization

- Page routes in `app/` with `page.tsx`, `loading.tsx`, `error.tsx` per segment.
- Server Actions in `app/actions/`.
- Config in `config/` (site.config.ts, theme.css).
- Content in `content/`.
- Shared utilities in `lib/`.

## What NOT to Do

- Don't create inline styles or arbitrary Tailwind values (`text-[17px]`, `gap-[13px]`).
- Don't add dependencies without checking the facade rule in CLAUDE.md.
- Don't skip the `<Header />` or `<Footer />` on any public page.
- Don't use different CTA button styles than what the homepage established.
- Don't commit `.env.local` or real secrets.
- Don't add pages without SEO metadata.

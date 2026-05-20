# Project Rules

Rules and standards that must be followed across every page and component in this project. This is the enforcement checklist — if it's here, it's non-negotiable.

---

## Branding

- **Colors must come from theme tokens.** Never hardcode hex values in components. Use `primary`, `secondary`, `accent`, `destructive` CSS variables via Tailwind classes (`bg-primary`, `text-accent`, etc.).
- **Phone number: `0468 432 538`.** Always pull from `siteConfig.phone`. Never hardcode.
- **License: `312045C` / ARC: `AU45821`.** Always pull from `siteConfig.license` and `siteConfig.arc`.
- **Tagline: "Trusted Local Sparkies · A/C Specialists".** Pull from `siteConfig.tagline`.
- **CTA color convention:** Red (`bg-destructive`) for phone/call buttons. Green (`bg-accent`) for quote/action buttons. Consistent across all pages.
- **Logo:** Always use `next/image` with `/images/logo.png`. Never inline SVG or raw `<img>`.

## SEO (every page)

- Every page must have a unique `<title>` and `meta description` via Next.js `metadata` export.
- Every page must set `alternates.canonical` to its own URL.
- Every page must include at least one JSON-LD schema (use `<JsonLd>` component). Minimum: `WebPage` with `name`, `description`, `url`. Service pages should add `Service` schema.
- Homepage includes `LocalBusiness`, `WebSite`, and `FAQPage` schemas — do not duplicate these on other pages.
- OG image is auto-generated at `/opengraph-image` — no per-page override needed unless the page has a unique image.
- All images must have descriptive `alt` text. No empty `alt=""` on content images.
- Headings must follow semantic order: one `H1` per page, followed by `H2`, `H3`, etc. Never skip levels.

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

## Components

- Reuse existing block components from `components/blocks/` where applicable. If a new page needs a section that already exists (e.g., FAQ, BrandPartners, WhyChooseUs), import and reuse — don't rebuild.
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

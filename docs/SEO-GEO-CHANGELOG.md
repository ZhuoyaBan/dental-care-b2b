# Uvcare SEO / GEO Change Log

This file is the shared handover for everyone working on `dental-care-b2b`. Read it after synchronizing `main`, and append a concise entry whenever a change is pushed.

## Current operating rules

- Canonical origin: `https://www.dentalcarepack.com`
- Brand: **Uvcare**, operating at DentalCarePack.com
- Fixed homepage H1: **Custom Aligner Care Solutions Manufacturer**
- Non-product CTAs use the on-site contact form (`/#contact`); product inquiry CTAs may use WhatsApp.
- Verify every code change with `npm run build`; `main` auto-deploys through Vercel.
- Do not remove permanent redirects for old numeric product URLs. They protect historical search listings and backlinks.

## 2026-08-11 — Canonical signal cleanup

- Commit: `f426b74` — `Align category social URLs with canonicals`
- Updated URLs:
  - `/products/retainer-case`
  - `/products/cleaning-box`
  - `/products/gift-box`
  - `/products/dental-accessories`
  - `/products/dental-impression-kit`
- Change: Added page-specific `og:url` metadata so each category page no longer inherits the homepage Open Graph URL; canonical and `og:url` now match.
- Verified: Production Retainer Cases canonical and `og:url` match. Old `/products/21`, non-www `/about`, and non-www `/products/cleaning-box` return permanent redirects to the canonical URL and then `200`.
- Follow-up: Google Search Console validation has been started for historical reports: Page with redirect, Duplicate without user-selected canonical, and Redirect error. Wait for Google to recrawl; do not try to index redirect URLs.

## 2026-08-11 — Buyer-education insights

- Commit: `178d268` — `Add supplier evaluation and MOQ guides`
- New Insights:
  - `/insights/retainer-case-manufacturer-beyond-alibaba`
  - `/insights/dental-brand-launch-moq-guide`
- Purpose: Cover two high-intent B2B/GEO questions: qualifying a retainer case manufacturer beyond a marketplace listing, and choosing MOQ for a private-label dental brand launch.
- Connected to: product categories, retainer-case manufacturer page, care-kit and packaging pages, contact form, sitemap, and `llms.txt`.
- Verified: Production titles, canonical URLs, FAQ sections, and sitemap entries are live.

## 2026-08-11 — Orthodontic accessories and dental packaging landing pages

- Commit: `239bf9e` — `Add orthodontic accessories and packaging guides`
- New landing pages:
  - `/orthodontic-accessories-supplier`
  - `/dental-care-packaging-supplier`
- Purpose: Capture supplier/manufacturer intent for orthodontic accessories and dental care packaging, with SEO/GEO key facts and FAQ schema.
- Connected to: home sourcing guides, Dental Accessories category description, Care Kit, Branded Box Gallery, Dental Lab page, related products, sitemap, and `llms.txt`.
- Verified: Both production URLs are live and have correct canonical tags.

## Existing foundations to preserve

- Homepage manufacturer positioning, buyer-entry cards, FAQ expansion, `llms.txt`, and trust-page work are already in place.
- Existing landing pages include retainer-case manufacturer, UV retainer-case manufacturer, custom product development, dental lab supplies, North American private-label accessories, Australian aligner care kits, custom aligner care kits, and Branded Box Gallery.
- All new content should link into this network rather than create standalone SEO pages.

## Entry template for future updates

```md
## YYYY-MM-DD — Short change name

- Commit: `abcdef0` — `Commit message`
- Updated URLs/files: `/example-url`, `path/to/file`
- Purpose: SEO/GEO, conversion, content, technical SEO, or performance goal.
- Verified: Build result and production check.
- Follow-up: GSC validation, data needed from user, monitoring item, or `None`.
```

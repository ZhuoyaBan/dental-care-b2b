# Uvcare SEO / GEO Change Log

This file is the shared handover for everyone working on `dental-care-b2b`. Read it after synchronizing `main`, and append a concise entry whenever a change is pushed.

## Current operating rules

- Canonical origin: `https://www.dentalcarepack.com`
- Brand: **Uvcare**, operating at DentalCarePack.com
- Fixed homepage H1: **Custom Aligner Care Solutions Manufacturer**
- Non-product CTAs use the on-site contact form (`/#contact`); product inquiry CTAs may use WhatsApp.
- Verify every code change with `npm run build`; `main` auto-deploys through Vercel.
- Do not remove permanent redirects for old numeric product URLs. They protect historical search listings and backlinks.

## 2026-08-18 — Flat-Lay Aligner Care Kit Gallery image

- Commit: `e4ea6f5` — `Update flat lay gift box gallery image`
- Updated URL/files: `/dental-gift-box-design-gallery`, `public/images/gift-box-gallery/flat-lay-book-style-kit.webp`
- Purpose: Replace the closed blue Flat-Lay Aligner Care Kit card image with the supplied open-box view, so buyers can see the internal presentation layout.
- Verified: New source converted to a 561×584 WebP (15 KB); `npm run build` passed; production asset matches the committed WebP checksum.
- Follow-up: None.

## 2026-08-18 — Evidence-conscious clear-aligner care guide

- Commit: `734301b` — `Add evidence-conscious aligner care guide`
- Updated URLs/files: `/insights/how-to-clean-clear-aligners`, `lib/insights.ts`, `public/sitemap.xml`
- Purpose: Add a patient-education insight that covers clear-aligner care while retaining relevant internal links to Retainer Cases, Cleaning Boxes, the UV-C product page, the care-kit landing page, and the contact form.
- Compliance review: Removed unsubstantiated numerical efficacy, disease/infection, treatment, price, fixed-frequency, and universal-best-method claims. The page now defers to the treating clinician, aligner manufacturer instructions, product-specific evidence, safety information, and local market authorization.
- Verified: `npm run build` passed; Vercel production page returns `200` with the new evidence-conscious copy and canonical URL, and the sitemap includes the URL with `lastmod` `2026-08-18`.
- Follow-up: Keep UV-C, ultrasonic, and cleaning-product performance claims outside this guide unless product-specific substantiation and applicable regulatory review are on file.

## 2026-08-18 — Magnetic Lid & Drawer Box Gallery image

- Commit: `baf39ef` — `Update magnetic drawer gift box gallery image`
- Updated URL/files: `/dental-gift-box-design-gallery`, `lib/giftBoxGallery.ts`, `public/images/gift-box-gallery/magnetic-lid-drawer-box-open.webp`
- Purpose: Replace the closed yellow Magnetic Lid & Drawer Box image with the supplied open-box view, so the internal layout is visible in the Gallery card.
- Verified: New source image converted to an 11 KB WebP; production build passed.
- Follow-up: Confirm the Vercel production image after deployment.

## 2026-08-12 - B2B conversion path in iSonic vs Zima article

- Commit: `082ea9d` - `Conversion: strengthen B2B path in iSonic vs Zima article`
- Updated URLs/files: `/insights/isonic-ds180-vs-zima-dental-pod`, `lib/insights.ts`
- Purpose: Convert C-end traffic from popular search queries (isonic vs zima, isonic dental pod, sonic dental vs zima dental, zima vs isonic) into B2B inquiries.
- Changes:
  - Added "OEM / Wholesale Available?" row to comparison table (both iSonic and Zima = No, retail-only)
  - Added B2B callout box after table targeting dental brands/clinics/distributors
  - Added Key Fact: "Neither iSonic nor Zima offers OEM branding or wholesale pricing"
  - Added FAQ: "Can I get iSonic or Zima ultrasonic cleaners at wholesale price with my own brand?"
- Verified: Build passed, pushed to main.
- Follow-up: Monitor GSC to see if B2B inquiry conversion improves from isonic/zima traffic.

## 2026-08-11 - Canonical signal cleanup

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

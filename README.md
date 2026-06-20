# AlignerPro Supply — B2B Website

A modern, professional B2B product showcase website for invisible aligner care accessories, built with **Next.js 14** (App Router) and **Tailwind CSS 3**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 📁 Project Structure

```
aligner-b2b/
├── app/
│   ├── globals.css          # Tailwind directives + global utilities
│   ├── layout.tsx           # Root layout (meta, Inter font)
│   └── page.tsx             # Home page — assembles all sections
│
├── components/
│   ├── Header.tsx           # Fixed nav with mobile drawer  [Client]
│   ├── HeroSection.tsx      # Hero banner + stats row
│   ├── ProductsSection.tsx  # Product grid (10 cards + SVG icons)
│   ├── ContactSection.tsx   # Inquiry form with validation  [Client]
│   └── Footer.tsx           # Dark footer + WhatsApp FAB
│
├── lib/
│   └── products.ts          # Product data array & TypeScript interface
│
├── public/                  # Static assets (add real product images here)
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
└── tsconfig.json
```

---

## 🛍 Products Covered

| # | Product | Category |
|---|---------|----------|
| 1 | Aligner Case | Storage |
| 2 | UV Sterilizer Aligner Case | Hygiene |
| 3 | Ultrasonic Cleaning Case | Cleaning |
| 4 | Regular Cleaning Case | Cleaning |
| 5 | Aligner Removal Hook | Accessories |
| 6 | Chewies | Accessories |
| 7 | Aligner Bag | Packaging |
| 8 | Aligner Gift Box | Packaging |
| 9 | Effervescent Cleaning Tablets | Cleaning |
| 10 | Aligner Cleaning Brush | Cleaning |

---

## 🎨 Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `blue-600` (#2563EB) | CTAs, icons, accents |
| Light bg | `blue-50` / `teal-50` | Section backgrounds |
| Text | `gray-800` / `gray-500` | Body / subtext |
| Footer | `gray-900` | Dark footer bg |
| WhatsApp | `#25D366` | Floating button |

---

## ✏️ Customisation Checklist

- [ ] **Replace placeholder contact info** in `ContactSection.tsx` and `Footer.tsx`
  - Email: `sales@alignerpro.com`
  - WhatsApp number: `+86 138 0000 0000` / `wa.me/8613800000000`
  - Location
- [ ] **Wire up the contact form** — replace the `setTimeout` in `ContactSection.tsx` with:
  - [Formspree](https://formspree.io) (easiest)
  - [EmailJS](https://www.emailjs.com)
  - Your own API route: `app/api/contact/route.ts`
- [ ] **Add real product images** — replace SVG icon placeholders with `<Image>` components. Put images in `public/products/`.
- [ ] **Update SEO metadata** in `app/layout.tsx` (title, description, OG image).
- [ ] **Logo** — replace the inline SVG logo in `Header.tsx` / `Footer.tsx`.
- [ ] **(Optional) Google Analytics** — add GA4 snippet in `app/layout.tsx`.

---

## 📦 Tech Stack

| Tech | Version | Role |
|------|---------|------|
| Next.js | 14.2.5 | Framework (App Router) |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| next/font | built-in | Inter font (self-hosted) |

> No external icon library — all icons are inline SVGs for maximum performance.

---

## 🌐 Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

Deploy to **Vercel** (recommended):
1. Push to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. One-click deploy — zero config needed for Next.js.

---

## 📄 License

MIT — free to use and modify for commercial projects.


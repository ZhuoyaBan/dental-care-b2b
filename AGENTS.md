# Uvcare / DentalCarePack project instructions

## Required start-of-task routine

Before inspecting, editing, or deploying this repository, every agent must run:

```bash
git pull --ff-only
git status -sb
git log --oneline -10
cat docs/SEO-GEO-CHANGELOG.md
```

`docs/SEO-GEO-CHANGELOG.md` is the single source of truth for current SEO, GEO, technical SEO, deployment, and follow-up status. Do not rely on an old chat summary when it conflicts with that file or the latest Git history.

## Collaboration and deployment rules

- Preserve other contributors' changes. Do not use destructive Git commands such as `git reset --hard` or overwrite unrelated files.
- Make only task-scoped edits and stage explicit files rather than using a broad stage command.
- Run `npm run build` before pushing any code change.
- Push only after the build passes. The `main` branch deploys automatically to Vercel.
- After deployment, verify the affected production URLs, including canonical URLs or redirects when relevant.
- Before completing work, append a dated entry to `docs/SEO-GEO-CHANGELOG.md` with the commit, changed URLs, purpose, verification result, and any follow-up required.

## Site conventions

- Brand name: **Uvcare**, operating at DentalCarePack.com.
- Homepage H1 is fixed: **Custom Aligner Care Solutions Manufacturer**. Do not change it without explicit user approval.
- Prefer `https://www.dentalcarepack.com` as the canonical origin.
- Non-product CTAs should use the on-site contact form (`/#contact`); product inquiry CTAs may continue using WhatsApp.
- New SEO/GEO content must connect to existing product categories, relevant landing pages, insights, and the sitemap. Do not create isolated pages.

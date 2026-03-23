# CLAUDE.md — Mirai Consulting Website Build

## What is this project?

Build **miraiconsulting.eu** — the website for Mirai Consulting (未来咨询), a trilingual advisory firm for the China ↔ Northern Europe business corridor.

## Read these files first (in this order)

1. **`docs/MIRAI_WEBSITE_BUILD_PACKAGE.md`** — the master spec. Design system, page structure, all EN/ZH/PL content, technical stack, SEO, build order.
2. **`docs/MIRAI_MULTILINGUAL_ADDENDUM.md`** — extends content from 3 to 9 languages (adds DE, NO, SV, FI, DA, ET). Overrides section 3 of the build package.
3. **`docs/MIRAI_FOUNDER_PROFILES.md`** — real founder bios, About page content, team cards, credentials. Overrides the About section in the build package.

## Logo & assets

Pre-processed assets are in `public/assets/`:

```
public/assets/logo/
  mirai-logo-transparent.png   — primary logo, red on transparent (1381x302)
  mirai-logo-white.png         — white version for dark backgrounds
  
public/assets/favicon/
  favicon-512.png              — 512x512 "MC" monogram, red on transparent (PWA icon)
  favicon-192.png              — 192x192 "MC" monogram (Android)
  favicon-32.png               — 32x32 "MC" monogram (browser tab)
  favicon-16.png               — 16x16 "MC" monogram (small)
  apple-touch-icon.png         — 180x180 "MC" monogram on white bg (iOS)

public/assets/og/
  og-image.png                 — 1200x630, logo on white (social sharing default)
  og-image-dark.png            — 1200x630, white logo on dark (alternative)

public/assets/team/
  matt-wieckowski.png          — Matt's portrait (831x1024, white bg)
  zekai-xu.png                 — Zekai's portrait (1024x1077, white bg)
```

**Team portraits:** Use these on the About page team cards and anywhere founders appear. Both have white backgrounds and matching professional style. Crop to consistent aspect ratio (e.g. 3:4 or 1:1) when displaying side by side.

## Key details

- **Domain:** miraiconsulting.eu
- **Email:** hello@miraisolutions.org
- **Entity:** MiraiWorks OÜ (Estonia)
- **Founders:** Matt Więckowski (Founder), Zekai Xu (Co-founder)
- **Stack:** Next.js 14+ App Router, Tailwind, TypeScript, next-intl
- **Languages:** EN, ZH, PL, DE, NO, SV, FI, DA, ET (9 total)
- **Deploy:** Vercel

## Build order

Follow this sequence exactly:

### Phase 1 — Scaffold
1. Init Next.js 14+ with App Router, TypeScript, Tailwind
2. Configure next-intl with 9 locales (EN default)
3. Set up folder structure per the build package
4. Install fonts: Libre Bodoni, Source Serif 4, DM Sans, Noto Serif SC
5. Configure Tailwind with the Mirai color palette and typography scale
6. Place all logo/favicon/OG assets in `public/assets/`

### Phase 2 — Layout
7. Build Header: logo (use transparent PNG, switch to white on dark sections), language switcher (dropdown for 9 languages), nav links
8. Build Footer: tagline, nav columns, contact info (hello@miraisolutions.org), LinkedIn links, legal links, language switcher
9. Responsive shell: max-width 1200px, generous whitespace, serif-forward

### Phase 3 — Core pages (EN + ZH + PL first)
10. **Home page** — hero, 3 audience cards, stats bar, sector grid, "how we work," CTA
11. **Contact page** — trilingual form, Calendly placeholder, WeChat QR placeholder, email
12. **For Chinese organizations** — full segment landing page
13. **For Chinese professionals** — full segment landing page
14. **For European firms** — full segment landing page
15. **About page** — use MIRAI_FOUNDER_PROFILES.md for all content

### Phase 4 — Sector & content pages
16. Sector page template (shared layout)
17. 6 sector pages with full EN content, ZH + PL headings
18. Insights listing page + blog post template
19. 5 placeholder blog posts (titles + excerpts from build package)
20. Community page — membership tiers, events placeholder, WeChat placeholder

### Phase 5 — Remaining languages
21. Add DE translations (all pages)
22. Add NO, SV, FI, DA, ET translations (all pages)
23. For sector page body text in new languages: use translated headings + service lists. Body paragraphs can show "Full content available in English" with a link to the EN version.

### Phase 6 — Polish
24. SEO: meta titles/descriptions per page per language, hreflang tags, structured data (Organization, LocalBusiness, BreadcrumbList)
25. OG tags per page per language (use og-image.png as default)
26. Legal pages: Privacy Policy + Impressum (see build package for impressum content)
27. Cookie consent banner (9 languages — see multilingual addendum)
28. Sitemap.xml + robots.txt
29. Responsive testing pass
30. Favicon + PWA manifest setup

## Design principles (non-negotiable)

- **Editorial, not startup.** Serif-forward typography. Generous whitespace. Quiet confidence.
- **Red is an accent, not a theme.** The logo red (#B22234) appears in the logo, occasional CTA buttons, and subtle accents. Never as a background color, never as a section fill.
- **Politically sober.** No BRI references, no flag imagery, no "bridge between civilizations" language. See content tone guide in the build package.
- **Chinese typography matters.** Use Noto Serif SC, load it locally (not Google Fonts CDN — blocked in China), and set line-height to 1.9-2.0 for ZH content.
- **Border-radius: 4px maximum.** This is a serious advisory firm, not a friendly app. Subtle corners only.
- **Card borders: 0.5px.** Thin, refined, editorial.

## Contact info to use throughout the site

```
Email: hello@miraisolutions.org
Location: Warsaw, Poland
Matt LinkedIn: https://www.linkedin.com/in/matt-wieckowski-002b08168/
Zekai LinkedIn: https://www.linkedin.com/in/zekai-xu-89332017b/
```

## When in doubt

- Check the build package first — it has the answer for most questions
- Err on the side of less decoration, more whitespace
- If a translation feels awkward, keep the English version and mark it for human review
- Serif for content, sans-serif only for UI elements (buttons, nav, form labels)

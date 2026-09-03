# NOVEO Template Kit — Locked Baseline & Build Plan

## Locked homepage baseline
The current `index.html` on `main` is APPROVED and visually locked. Preserve its layout, typography, color direction, spacing character, highlight behavior, button treatment, motion language, header, announcement bar, proof row, cards, testimonial, process section, CTA, and footer. Only change the homepage if a verified usability, accessibility, responsive, or implementation bug requires it.

## Product positioning
NOVEO is a premium Fractional CFO & Financial Advisory template aimed at founders, startups, agencies, professional-services firms, SaaS businesses, e-commerce companies, finance consultants, fractional CFOs, and boutique advisory firms.

## Design-system rules
- Full-width section backgrounds/dividers with content aligned to a shared max-width container.
- Minimum readable text size: 14px.
- Reuse the approved homepage color palette, typography, radii, button variants, labels, cards, form fields, highlight marker, reveal motion, and spacing rhythm.
- No emoji icons. Use inline SVG or CSS shapes only.
- Keep motion subtle and purposeful; support `prefers-reduced-motion`.
- Maintain strong contrast for all buttons, links, forms, dark sections, and hover/focus states.
- Keep layouts Elementor-friendly: full-width parent section → constrained inner container → simple grid/flex nested containers.
- Avoid unnecessary nested markup and one-off CSS when a reusable component/token can be used.
- Copy must sound credible for a real finance/advisory business, not generic lorem ipsum or exaggerated claims.

## Required pages
1. Home — `index.html` — LOCKED / approved.
2. About — `about.html`.
3. Services — `services.html`.
4. Service Detail — `service-detail.html` (reusable detail template for Fractional CFO / Forecasting / Capital Strategy / Finance Operations).
5. Industries — `industries.html`.
6. Case Studies — `case-studies.html`.
7. Case Study Detail — `case-study-detail.html`.
8. Engagement / Pricing — `engagement.html` (transparent engagement models without unrealistic fixed promises).
9. Insights — `insights.html`.
10. Insight / Article Detail — `article.html`.
11. FAQ — `faq.html`.
12. Contact — `contact.html`.
13. 404 — `404.html`.

## Shared reusable foundation
Create and maintain:
- `assets/css/design-system.css` — tokens, typography, layout, buttons, forms, cards, markers, shared responsive rules.
- `assets/css/pages.css` — page-specific compositions only when not reasonably reusable.
- `assets/js/main.js` — announcement rotator, reveal animation, marker animation, navigation behavior, shared interactions.
- `README.md` — page inventory, component inventory, implementation notes, Elementor mapping guidance, image/source notes, and QA checklist.

Refactor the homepage to use the shared files only after verifying that doing so preserves the approved appearance and behavior.

## QA loop for every page
Before marking a page complete:
1. Review as a prospective ThemeForest buyer: first impression, usefulness, completeness, credibility, visual polish, scanability, conversion path, and whether sections feel worth purchasing.
2. Review as a ThemeForest reviewer: consistency, typography, spacing, responsive behavior, accessibility basics, contrast, form quality, navigation consistency, broken links/layout, content relevance, image quality, reusable structure, and code cleanliness.
3. Fix all issues found.
4. Re-review the page after fixes.
5. Only then mark the page complete and move to the next one.

## Final release gate
Do not declare the kit complete until all pages exist, share the same design system, navigation between pages is coherent, responsive states are checked, minimum font-size rules are respected, no emoji arrows/icons remain, forms are visually stable, motion is consistent, and the entire kit has passed one final cross-page buyer + ThemeForest-reviewer audit.

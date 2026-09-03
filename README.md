# NOVEO — Fractional CFO & Financial Advisory Template Kit

NOVEO is a premium, Elementor-friendly website/template-kit prototype for fractional CFOs, finance consultants, boutique advisory firms, and growth-stage businesses.

## Status
- Home: approved and visually locked.
- Shared design-system foundation: created.
- Remaining pages: in progress per `PROJECT_PLAN.md`.

## Shared assets
- `assets/css/design-system.css` — color/spacing/radius tokens, typography, layout primitives, header, announcement rotator, buttons, markers, cards, forms, footer, shared responsive and reduced-motion rules.
- `assets/css/pages.css` — reusable page compositions such as inner-page hero, story split, values, team, timeline, service rows, feature cards, CTA panels.
- `assets/js/main.js` — shared reveal animation, viewport marker wipe, rotating announcement messages, reduced-motion handling, and demo-form prevention.

## Design tokens
Primary palette: ink `#101010`, cream `#f5f0e7`, yellow `#f8ec48`, pink `#f4a8d8`, blue `#a7c6ff`.

Type: Plus Jakarta Sans for display/headings, DM Sans for UI/body. No supporting copy should render below 14px.

Layout: full-width section shell → `.wrap` inner container (max 1240px) → simple grid/flex nested containers. This maps directly to Elementor parent Container → inner constrained Container → child Containers/widgets.

## Reusable component inventory
- Announcement bar / `.top`, `.top-rotator`, `.top-message`
- Sticky header / `.header`, `.nav`, `.navlinks`
- Buttons / `.btn`, `.btn-dark`, `.btn-light`, `.btn-yellow`
- SVG arrow / `.icon-arrow`
- Kicker / `.kicker`
- Marker / `.highlight`, `.highlight-blue`, `.highlight-yellow`
- Section header / `.section-head`, `.section-title`
- Cards / `.card-base` + color variants
- Stats / `.stat-row`
- Forms / `.field`, `.form-grid`, `.newsletter`
- Footer / `.footer`, `.footer-grid`, `.foot-bottom`
- Motion / `.reveal` + delay utilities
- Inner-page compositions in `pages.css`

## Elementor mapping
1. Use a full-width parent Container for each section background/divider.
2. Add an inner container capped at 1240px with responsive side padding.
3. Use no more than one additional nested grid/flex layer unless the component genuinely needs it.
4. Recreate design tokens as Elementor Global Colors, Global Fonts, border radii, and spacing presets.
5. Keep the announcement/header/footer as global templates.
6. Build service cards, stat rows, CTA panels, FAQ rows, article cards, and form fields as reusable saved widgets/containers.

## Accessibility / ThemeForest QA baseline
- Minimum 14px supporting text.
- Explicit light/dark button text colors and visible focus states.
- No emoji arrows/icons; use SVG/CSS only.
- Purposeful image alt text.
- `prefers-reduced-motion` supported.
- Forms use visible labels or meaningful accessible labels and stable responsive sizing.
- Full-width dividers remain full width while content stays aligned to the shared container.
- No lorem ipsum, fake UI placeholders, broken links, or unfinished-looking blocks in release pages.

## Per-page release review
Before marking a page complete: review once as a prospective buyer, once as a ThemeForest reviewer, fix issues, then review again. Final release also requires a cross-page consistency pass.

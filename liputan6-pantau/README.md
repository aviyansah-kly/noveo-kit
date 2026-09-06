# Liputan6 Pantau — MVP Prototype

Interactive static prototype for an internal product pitch: **Liputan6 Pantau / Gunung Api Indonesia**.

## Purpose
Turn disaster-related news into a repeat-use utility by combining:
- volcano activity status
- simulated volcanic ash projection
- wind direction context
- location impact / exposure score concept
- related Liputan6 editorial content

> **Important:** All numbers shown in this prototype are simulation/demo data and must not be interpreted as operational disaster information.

## Stack
- Semantic HTML
- CSS (responsive, no framework)
- Vanilla JavaScript
- Inline SVG map visualization
- No build step

This intentionally keeps the prototype dependency-light so it can be hosted on Cloudflare Pages as a static site.

## Local preview
```bash
python3 -m http.server 8788
```
Then open `http://localhost:8788`.

## Cloudflare Pages
Recommended setup:
- Framework preset: `None`
- Build command: *(empty)*
- Build output directory: `/`
- Root directory: `/`

Or deploy the directory directly with Wrangler:
```bash
npx wrangler pages deploy . --project-name liputan6-pantau
```

## Production direction
The production architecture should replace simulation data with a backend data service that normalizes/caches sources such as PVMBG/MAGMA, VAAC Darwin, BMKG, and GDACS, rather than fetching those sources directly from users' browsers.
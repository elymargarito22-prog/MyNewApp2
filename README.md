# Curated Press

Landing page for Curated Press: custom party labels, graduation caps and
graduation stoles. Plain HTML + CSS, no build step.

## Files

- `index.html` — the landing page (includes the heat press illustration)
- `thanks.html` — shown after someone sends a design request
- `styles.css` — all styling (light and dark colors are CSS variables at the top)
- `theme.js` — Light / Dark / System theme switch (System is the default; choice is saved in the browser)
- `site.js` — mobile menu and footer year
- `favicon.svg` — browser tab icon
- `netlify.toml` — Netlify config (publishes the repo root)
- `ROADMAP.md` — the four-wave improvement checklist, with a quality check after each wave

## Deploy to Netlify

1. In Netlify, choose **Add new site → Import an existing project** and pick this repo.
2. Branch: `main`. Build command: leave empty. Publish directory: `.`
3. Deploy.

The request form uses **Netlify Forms** (form name `inquiry`), so submissions
show up under **Site → Forms** in Netlify automatically, no backend needed.

## Run locally

Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

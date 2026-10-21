# inkhmn — curated ink, made human

Landing page for a curated tattoo/ink company. Plain HTML + CSS, no build step.

## Files

- `index.html` — the landing page
- `thanks.html` — shown after someone joins the waitlist
- `styles.css` — all styling (colors are CSS variables at the top)
- `favicon.svg` — ink-drop icon
- `netlify.toml` — Netlify config (publishes the repo root)

## Deploy to Netlify

1. In Netlify, choose **Add new site → Import an existing project** and pick this repo.
2. Branch: `main`. Build command: leave empty. Publish directory: `.`
3. Deploy.

The waitlist form uses **Netlify Forms**, so submissions show up under
**Site → Forms** in Netlify automatically, no backend needed.

## Run locally

Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Renaming

The brand name `inkhmn` is a placeholder. Search and replace it across the HTML
files to rename.

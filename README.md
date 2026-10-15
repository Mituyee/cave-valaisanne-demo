# Cave Valaisanne – Chalet Suisse · QR digital menu (demonstration)

> **Status: NOT deployed.** This is a demonstration for presentation to the restaurant. Do not publish it until approved.

**Contents of the ZIP:** everything at the root goes straight into the GitHub repo `Mituyee/cave-valaisanne-demo`.

```
index.html                 the menu  → https://mituyee.github.io/cave-valaisanne-demo/          (QR « LA CARTE »)
plat-du-jour/index.html    today's dish → https://mituyee.github.io/cave-valaisanne-demo/plat-du-jour/  (QR « PLAT DU JOUR »)
admin/                     Plat du jour editor (Sveltia CMS, MIT): sign-in with a GitHub token required
content/menu-data.js       food & drinks data (also menu-data.json)
data/plat-du-jour.json     published plats du jour, written by the content repo's GitHub Action, never edit by hand
images/                    illustrative demo photos (AI-generated, to replace, see docs/IMAGE-INTEGRATION-REPORT.md)
images/plats-du-jour/      photos of published plats du jour (written by the Action)
assets/                    CSS, JS, fonts (self-hosted), favicon
docs/                      checklists, setup guide, QR spec, verification report
```

The second ZIP, `cave-valaisanne-contenu-template.zip`, is the **private** repository that holds the weekly dishes and drafts (see `docs/ADMIN-SETUP.md`).

## Deploy to GitHub Pages (when approved)

1. Create a public repo named `cave-valaisanne-demo` under Mituyee.
2. Upload **the contents** of the ZIP, not the folder itself, so that `index.html` sits at the root.
3. Go to Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)` → Save.
4. After about 1 minute, open `https://mituyee.github.io/cave-valaisanne-demo/` and `/plat-du-jour/`.
5. To get Plat du jour updates, set up the private content repo, deploy key and token as described in `docs/ADMIN-SETUP.md`.

All paths are relative, so the site works under the `/cave-valaisanne-demo/` sub-path and on a custom domain later without changes.

## Updating the menu (la carte)

Edit `content/menu-data.js`, or send the changes and I regenerate it from the data source. Prices, items and categories all come from that one file.

## Images

`images/` holds illustrative demo photos: 1 hero, 20 categories and 7 dishes. To replace one, use the exact same file name and supply both versions (desktop + `-800`).

The categories and dishes that have no suitable photo yet are listed in `docs/IMAGE-INTEGRATION-REPORT.md`. Any file that is missing or fails to load falls back to an illustrated placeholder.

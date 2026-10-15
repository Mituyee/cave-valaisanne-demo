# Changelog — Cave Valaisanne QR menu demo

## v3.1 — 15.10.2026
**Added**
- Official Cave Valaisanne logo, replacing the provisional text wordmark:
  - Homepage: centred at the top on a light cream band, above the red Valais-star strip. 132 px on mobile, 144 px from 760 px wide.
  - Plat du jour page: same header.
  - Category pages: small 44 px logo in the top bar.
  - Every logo is a link back to the menu (`#/` on the menu, `../` from Plat du jour), with a visible keyboard focus ring.
  - Files: `assets/img/logo-cave-valaisanne-320.webp` / `-600.webp` (lossless, transparent) and a `-320.png` fallback; `-600.png` kept as the master copy. All are pixel-identical to the supplied file (only resized for the 320 versions). Colours, proportions and transparency are unchanged; nothing was redrawn.
- New **Filet de perche meunière du Valais** photo: `images/p-perche.jpg` (1440 × 900) and `images/p-perche-800.jpg` (800 × 500). Shown as the list thumbnail and in the dish sheet.

**Changed**
- `assets/js/app.js`: the brand header uses `<picture>` (WebP + PNG fallback) wrapped in a link. The text wordmark remains only as an automatic fallback if no logo is configured.
- `assets/js/pdj.js`: same header logo on the Plat du jour page (paths prefixed `../`).
- `assets/css/style.css`: light header band when a logo is present; logo sizes; focus style. No other layout changes.
- `content/menu-data.js` / `.json`: `venue.logo` and `logoWebp`; Filet de perche `image`, `imageAlt` and `imageFocus`. **No menu text, price, category or order changed** (checked by script: 286 items identical to v1).
- `docs/`: image report, source verification (logo resolved), QR card spec (vector logo needed for print), test report, this changelog.
- `tests/test_all.py`: new checks for the logo (home, category bar, Plat du jour, links, pixel identity, transparency) and the perch photo.

**Unchanged**
- Plat du jour page logic, 04:00 Europe/Zurich changeover, weekly editor (`admin/`), private content repo and GitHub Action, QR URLs.
- All other 70 image files (byte-identical to v3), including the Nos Poissons photo.

## v3 — 15.10.2026
- 8 replacement photos: Bières, Sans alcool, Petite Restauration, Nos Poissons, Os à moelle, Fondue chinoise, Choucroute, Meringues. The first perch photo was rejected.

## v2 — 15.10.2026
- First photo pack: gutters cleaned, wine photos re-mapped, wrong subjects replaced by the illustrated fallback.

## v1 — 15.10.2026
- Menu (286 items), Plat du jour page, weekly editor, publisher script and GitHub Action.

# Double-sided table QR card — specification

**Status:** spec only. **No QR codes have been generated.** They will be produced once the permanent domain is confirmed.

## Two permanent destinations

| Side | Heading | Development URL (demo) | Final URL (to choose before printing) |
|---|---|---|---|
| Front | **LA CARTE** | `https://mituyee.github.io/cave-valaisanne-demo/` | e.g. `https://carte.cavevalaisanne.ch/` |
| Back | **PLAT DU JOUR** | `https://mituyee.github.io/cave-valaisanne-demo/plat-du-jour/` | e.g. `https://carte.cavevalaisanne.ch/plat-du-jour/` |

- These URLs never change from week to week. The weekly dishes live in a separate data file, so the cards are printed once.
- Recommendation: before printing, point a domain owned by the restaurant (such as a `carte.` sub-domain, set up as a GitHub Pages custom domain, free) at the site. The printed QR codes should then use that domain, never the `github.io` address. That way the hosting can change later without reprinting.
- Test each final QR code with an iPhone (camera) and an Android phone (Google Lens) before the print run.

## Format

- **Size:** A6 portrait (105 × 148 mm) table tent, or 100 × 150 mm card in an acrylic stand.
- **Bleed and margins:** 3 mm bleed; keep 5 mm safe margin.
- **Paper:** 350 g/m² matte, with anti-fingerprint laminate on both sides.
- **Colours:** Valais red #9C1C24 / CMYK approx. 0 90 80 35 (to be matched to the official logo); cream #FFF8EC; ink #2A211C.

## Front — LA CARTE

1. Official logo, centred at the top. The 600 px PNG in `assets/img/` is enough for screen use; **ask for the vector file (SVG/PDF/AI) for print**: 600 px is only about 50 mm at 300 dpi.
2. Valais star band (as on the site).
3. Heading **LA CARTE** (Bitter Bold, about 20 pt). Sub-heading "Mets & boissons" (Source Sans 3, 10 pt).
4. QR code at least **35 × 35 mm**:
   - error correction level **M**;
   - dark modules on cream or white, never reversed;
   - quiet zone of 4 modules (at least 4 mm);
   - no logo inside the code.
5. Short URL in text below it, e.g. `carte.cavevalaisanne.ch`.
6. Footer: "Bd Georges-Favon 23 · 022 328 12 36".

## Back — PLAT DU JOUR

1. Heading **PLAT DU JOUR** (Bitter Bold, about 20 pt). Sub-heading "Change chaque jour · servi avec une salade verte".
2. QR code with the same spec as the front, pointing to `/plat-du-jour/`.
3. Prices: "Du lundi au vendredi 20.– CHF · Week-end 26.– CHF". This is optional: leave it out if prices may change.
4. Short URL in text.

## Files to deliver after URL confirmation

- Print PDF with crop marks (PDF/X-4).
- Editable source (Canva / PowerPoint).
- QR codes as SVG files, one per side.

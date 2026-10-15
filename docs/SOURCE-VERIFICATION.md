# Cave Valaisanne — source verification checklist

**Source:** https://cavevalaisanne.ch (Carte, Boissons, Plats du jour), read on 15 October 2026.

**Method:** each page was extracted twice, independently. The two sets of prices were compared by script.
- Food: 106 items, 110 prices. Identical across both passes, apart from 3 supplements that appear in notes.
- Drinks: 180 items, 196 prices. Identical, apart from the duplicated Martini.

Every item is in `content/menu-data.json`, with `verif: "vérifié"` or `"à confirmer"`.

## To confirm with the restaurant before showing them the demo

| # | Point | What the site says | What the demo does |
|---|---|---|---|
| 1 | **Logo** | `logo-115px-rouge.png` could not be downloaded | ✅ **Resolved in v3.1:** the official logo (600 × 600 transparent PNG) was supplied and is integrated unchanged. A vector (SVG/PDF) version is still useful for the printed QR cards. |
| 2 | Brand colours / fonts | Not published | Provisional palette: Valais red #9C1C24, wood, cream. Fonts: Bitter + Source Sans 3. |
| 3 | Hot-kitchen hours | Footer says "11:30 – 00:00"; banner says "11h00 – minuit" | Uses 11:30–00:00. **Confirm.** |
| 4 | Currency | No currency printed on the menu ("Frs." appears once) | Shows CHF. |
| 5 | Plats du jour page prices | Prices shown without currency (20.– / 26.–) | Shows 20.– CHF / 26.– CHF. |
| 6 | "GRTA" | Used without explanation (Mesclun de chèvre, Rösti valaisan) | Kept as published. Ask whether to explain it (Genève Région – Terre Avenir). |
| 7 | Fondue: potato supplement | Wording unclear | Kept as a note. **Confirm the price and wording.** |
| 8 | Petite restauration: "choix supplémentaire" | Supplement amount and scope unclear | Kept as a note. |
| 9 | "Arrosé" ice-cream coupes | Alcohol not named | Marked "Alcool". Ask which spirit. |
| 10 | Œil des Roches | 2020 by the glass, 2022 by the bottle | Kept as published. |
| 11 | Martini blanc/rouge | Listed twice at the same price | Shown once. |
| 12 | Thé froid | "2d / 3d" | Kept as published (probably 2 dl / 3 dl). |
| 13 | "Spécialités au Fromage" | An empty parent heading | Used as a note on Fondues and on Raclettes & Rösti. |
| 14 | Spellings | Vacqueras, Tosacane, Bordeau, Vielle prune / poire, Proseco, Martel, "truffe noir", "saucisse au choux" | **Kept exactly as published.** Ask whether they want them corrected (Vacqueyras, Toscane, Bordeaux, Vieille, Prosecco, Martell, truffe noire, saucisse aux choux). |
| 15 | Allergens / origin of meat | Not published | Not shown. Swiss law requires this information to be available on request. Ask whether to add it. |
| 16 | Plat du jour content | The weekly page is copied as **demo** content (week of 12–18 October 2026) | Marked as demo on the page and in the data. |

## Verified facts used

- **Address:** Bd Georges-Favon 23, 1204 Genève.
- **Phone:** 022 328 12 36 (tel:+41223281236).
- **Opening hours:** open 7 days, 09:00 – 00:30.
- **Reservation page:** https://cavevalaisanne.ch/reservation-contact/.
- **Plat du jour pricing:** weekdays 20.–, weekend 26.–. Each dish is "servi avec une salade verte".

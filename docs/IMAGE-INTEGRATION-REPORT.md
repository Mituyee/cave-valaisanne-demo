# Cave Valaisanne — final image integration report (v3.1)

## v3.1 update (15.10.2026)
- **Filet de perche: new photo accepted ✅.** It shows **five small golden fillets meunière**, **pommes frites**, vegetables (broccoli, carrots, courgette, tomato), a **lemon** wedge and **sauce tartare**, matching the menu text "Accompagnés de pommes frites, légumes et sauce tartare". The fillets are small, thin and pale like perch, with no salmon colour and no trout skin.
  - Cropped from 1536 × 1024 (3:2) to 16:10, keeping the full plate (rows 40–1000 of the original).
  - Output: `p-perche.jpg` 1440 × 900 (q84, 282 KB) and `p-perche-800.jpg` 800 × 500 (q80, 103 KB). Progressive JPEG with no visible quality loss.
  - It is a different photo from the Nos Poissons category image, so there is no duplicate on the page.
- **Nos Poissons category photo:** unchanged (byte-identical to v3).
- The other photos attached with the message (petite restauration, fondue chinoise, choucroute, beers, soft drinks, previous fish) are the same subjects already on the site. They were left untouched.
- Dish photos on the site: **12**. Total image files: **72**, with no broken paths and no unused files.

---


**Packs used:**
- (1) `Cave_Valaisanne_36_Demo_Photos_72_JPG.zip`, used in v2.
- (2) `Cave_Valaisanne_9_Replacement_Subjects_18_JPG.zip`, used in v3.

All photographs are **AI-generated illustrations**, not photos of the restaurant's food. The site footer says "photographies illustratives".

## 1. Replacement pack (v3): verification

| File delivered | Shows | Verdict | Used as |
|---|---|---|---|
| cat-bieres | Draught blonde, amber and dark beers, beer bottle | ✅ Accurate | Bières |
| cat-sans-alcool | Lemonades, orange juice, red-fruit drinks, bottled lemonade | 🟡 Good. Leans "mocktail bar"; no mineral water or apple juice bottle (the menu's main items) | Sans alcool |
| cat-petite-restauration | Herb omelette, rösti in a pan, fries, salad | ✅ Very accurate | Petite Restauration |
| cat-poissons | Two white-fish fillets meunière, capers, boiled potatoes, lemon | 🟡 Not salmon. Fits as a generic fish image for a category with trout and perch | Nos Poissons |
| **p-filet-de-perche** | **The same photo as cat-poissons** (tighter crop) | ❌ **Flagged, not used.** See below. | — |
| p-choucroute | Sauerkraut, sausages, smoked pork, potatoes | ✅ Accurate (menu: palette, lard fumé, saucisson vaudois, vienne) | Choucroute sur assiette |
| p-fondue-chinoise | Copper broth pot, thin raw beef slices, sauces, fries | ✅ Very accurate (menu: bœuf, frites, sauces) | Fondue Chinoise |
| p-os-a-moelle | Two gratinated marrow bones, toasts, salad | ✅ Accurate. 🟡 Softer: enlarged crop from a contact sheet | Os à moelle gratiné |
| p-meringues | Meringues with whipped double cream and raspberries | ✅ Accurate. 🟡 Softer: enlarged crop | Meringues à la crème de Gruyère |

**Filet de perche: why I did not use it**
- Swiss perch fillets (*filets de perche*) are small, thin fillets, served several to a plate with **fries and tartare sauce**. That is exactly what the menu says: "Accompagnés de pommes frites, légumes et sauce tartare".
- The photo shows two large single fillets with capers and **boiled potatoes**, no fries and no tartare sauce. It reads as generic white fish (sole, féra, trout). It is not salmon, but it is not recognisably perch either.
- It is also the same image as the new Poissons category photo, so the category page would show the same plate twice.
- Note: the file was named `p-filet-de-perche`. The site expects `p-perche`, so it would also need renaming.
- **Recommended regeneration:** "several small golden perch fillets meunière, a portion of pommes frites, small bowl of tartare sauce, lemon wedge, vegetables". Save it as `p-perche.jpg` + `p-perche-800.jpg` (1440×900 / 800×500). It takes one line to switch on in `build_data.py` and `tools/prep_images.py`.

**File checks on the replacements:** all 18 files are present with correct sizes (1440×1080 / 800×600 categories, 1440×900 / 800×500 dishes). No white gutters. No duplicates except the perch/poissons pair. File sizes are within budget (≤ 353 KB desktop, ≤ 121 KB mobile). They were copied **byte-for-byte**, with no re-compression.

## 2. Full audit: every image now on the site (1 hero + 23 categories + 11 dishes = 70 files)

**Sharpness score** (higher = sharper, measured on the 800 px file):
- The 8 v3 replacements score **375 to 1,971**.
- Every v2 photo scores **11 to 111**.

The v2 pack was enlarged from roughly 250 px tiles, so its photos look clearly soft next to the new ones. That is the main remaining visual issue.

| Image | Subject match | Quality | Notes |
|---|---|---|---|
| Hero | ✅ Chalet dining room, fondue | 🟡 Soft (111) | Most visible image. Replace first. |
| Entrées & Salades | ✅ Mixed salad | 🟡 Soft (29) | |
| Saveurs de la Cave | ✅ Cured ham, gherkins, walnuts | ❌ Very soft (11) | |
| Les Délices de la Cave | 🟡 Creamy mushroom émincé | ❌ Very soft (12) | **Same tile as** the Émincé zurichoise dish photo |
| Tartare & Fondues de bœuf | ✅ Tartare | 🟡 Soft (21) | |
| Le Coin du Boucher | ✅ Grilled beef, fries | 🟡 Soft (34) | **Same tile as** the Entrecôte dish photo |
| Spécialités Brasserie | 🟡 Sausage, lentils, noodles | 🟡 Soft (35) | The new choucroute photo would suit this category better (4 of its 7 dishes are choucroutes). Not swapped without your OK. |
| Fondues au fromage | ✅ | 🟡 Soft (20) | **Same tile as** the Traditionnelle dish photo |
| Raclettes, Rösti & Croûtes | ✅ | 🟡 Soft (19) | **Same tile as** the Raclette 3 services dish photo |
| Nos Poissons | 🟡 White fish (v3) | ✅ Sharp | |
| Les Pâtes | 🟡 Mushroom tagliatelle | 🟡 Soft (29) | |
| Petite Restauration | ✅ (v3) | ✅ Sharp | |
| Les Menus | ✅ Generic meat plate | 🟡 Soft (40) | |
| Desserts Maison | ✅ Chocolate fondant | 🟡 Soft (39) | |
| Desserts Glacés | ✅ | 🟡 Soft (22) | |
| Vins au verre | 🟡 Rosé glasses (re-mapped in v2) | 🟡 Soft (28) | Ideally white + red glasses |
| Vins blancs / Vins rouges | ✅ (re-mapped in v2) | 🟡 Soft (27 / 29) | |
| Rosés, Mousseux & Champagne | ✅ Sparkling flutes | 🟡 Soft (35) | |
| Apéritifs | ✅ Spritz | 🟡 Soft (23) | |
| Digestifs | ✅ Spirits | 🟡 Soft (29) | |
| Bières / Sans alcool | ✅ / 🟡 (v3) | ✅ Sharp | |
| Boissons chaudes | ✅ Coffee | ❌ Very soft (19) | |
| Dishes: Malakoff, Ardoise, Émincé, Entrecôte, Traditionnelle, Raclette, Rösti valaisan | ✅ / 🟡 (Ardoise lacks tomme; Émincé lacks rösti) | 🟡 Soft (15–49) | 4 of them repeat their category photo (see above) |
| Dishes: Os à moelle, Fondue chinoise, Choucroute, Meringues (v3) | ✅ | ✅ Sharp / 🟡 slightly soft (Os, Meringues) | |
| Filet de perche | ✅ v3.1 photo | ✅ Sharp | Replaced in v3.1 |

**Broken paths:** none. All 70 files exist; desktop and 800 px files are paired correctly; no unused files are shipped. This is tested automatically.
**Mobile variants:** every 800 px file is a true 800 px version of its desktop file, and phones load the 800 px file (tested).
**Crops:** object-position is set per photo. Checked at 390 / 430 / 768 / 1280 / 1920 px. No awkward crops found.
**Compression:** v2 files are q80 / q74 (no visible artefacts beyond the source softness). v3 files are as delivered.

## 3. Recommended next replacements (priority order)
1. Hero (the restaurant's real dining room if possible).
2. ~~Filet de perche~~ done in v3.1.
3. Saveurs de la Cave, Les Délices de la Cave, Boissons chaudes: the softest images.
4. The 4 dish photos that repeat their category tile: Émincé, Entrecôte, Fondue traditionnelle, Raclette. Give each one its own photo.
5. All other v2 images, for consistent sharpness. Ideally use the restaurant's own photography.

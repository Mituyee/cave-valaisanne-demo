# Cave Valaisanne v3.1 — technical test report

**Date:** 15.10.2026.
**Status:** **not deployed**.
**Scope:** the automated suite (`test_all.py`) was run against the **extracted final ZIP** `cave-valaisanne-demo-v3.1.zip`.

## A. Automated checks: 259 / 259 passed

**Viewports:** 390 × 844 and 430 × 932 (mobile, touch, 2× pixel density), 768 × 1024 (tablet), 1280 × 860 and 1920 × 1080 (desktop).

| Area | Result | Includes |
|---|---|---|
| Static site | 15/15 | Every referenced photo exists (72 files). The logo files are transparent, and the 600 px versions are identical to the supplied logo. No unused files shipped. 800 px files are 800 px wide and ≤ 150 KB; desktop files are ≥ 1440 px wide and ≤ 400 KB. Relative paths only. No tokens. No draft content. noindex. |
| Menu (la carte) | 140/140 | At every viewport: hero loads, uses object-fit: cover, and the 800 px or full-size file is chosen correctly. All 23 food and drink cards: the photo loads with alt text and the set object-position. All 23 category banners load. All 12 dish thumbnails load, including the new Filet de perche (list + sheet). The official logo loads on the homepage (square, 120–170 px, ≥ 12 px whitespace, links to the menu), in the category bar (returns to the menu when clicked) and on the Plat du jour page (links to ../). Rösti sheet photo loads. No broken image, no failed request, no horizontal scroll. À manger / À boire tabs. All 286 items, names, prices and variants unchanged. Escape key / focus return. Back button keeps scroll. Keyboard focus ring + Enter. |
| Plat du jour | 70/70 | Official logo at the top, linking to the menu. Direct URL with and without a trailing "/". 04:00 changeover and both DST changes. Weekend. None / expired / unavailable / error states. CHF formats. Several courses. Photo present, broken or absent. Week list. No overflow at all 5 viewports. Link to and from the menu. |
| Publisher + GitHub Action | 24/24 | Unchanged from v1. Drafts never output. Validation errors block publication. |
| Editor, end-to-end | 10/10 | Unchanged from v1. Phone-size editor → photo converted to WebP → draft stays private → publish → page shows the dish; "unavailable" day works. |

**Performance (local, measured):**
- First load (food tab), measured in v3: about 0.9 MB of images on a 390 px phone and 1.05 MB on desktop (1.1 / 1.25 MB including code and fonts). v3.1 adds the logo (49 KB WebP). Chrome loads cards near the viewport; the rest load lazily.
- 800 px files average 55 KB for v2 photos and about 100 KB for v3 replacements. The hero is fetched with high priority.

## B. Manual checks: done by me visually from screenshots (not by a tester on a device)
- I reviewed every photo (v2 and v3) against its menu category and item, plus a measured sharpness score for each file. The verdicts are in IMAGE-INTEGRATION-REPORT.md.
- I reviewed the crops at 390, 430, 768, 1280 and 1920: the hero, cards, banners, thumbnails and sheets.

## C. Still to do manually (I could not do these here)
- [ ] A real iPhone (Safari) and Android (Chrome), scanning a test QR code on the live URL.
- [ ] Loading over hotel/restaurant Wi-Fi and 4G after deployment, plus a Lighthouse run on the live URL.
- [ ] A screen-reader pass (VoiceOver / TalkBack).
- [ ] Real GitHub sign-in in `/admin/` and the first live run of the GitHub Action (needs the repos and token).
- [ ] Restaurant approval of the illustrative photos, or supply of their own.

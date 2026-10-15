# Plat du jour editor — setup, tokens and weekly use

**Status: NOT deployed.** Do these steps only after you approve the demo.

## How it works (one picture)

```
 Phone / laptop                 PRIVATE repo                         PUBLIC repo (GitHub Pages)
 /admin/  (Sveltia CMS)  ──►  Mituyee/cave-valaisanne-contenu   ──►  Mituyee/cave-valaisanne-demo
 sign in with your token      plats-du-jour/2026-10-19.json         data/plat-du-jour.json   ← published weeks only
                              images/plats-du-jour/*.webp           images/plats-du-jour/    ← photos of published dishes only
                              (drafts + history live here)          (GitHub Action copies, after validation)
```

- Drafts (**Brouillon**) are saved in the private repo only. No public file, URL or preview contains them.
- When a week is **Publié**, a GitHub Action validates every file. Only then does it copy the published weeks to the public site. If anything is invalid, nothing is copied and the live page stays as it was.
- The page picks the entry whose date is today, in Zurich time, changing over at 04:00. If no entry matches, it shows "Aucun plat du jour n'est publié pour aujourd'hui". It never falls back to an older dish.
- The QR destination (`/plat-du-jour/`) is a fixed page. Only the data file behind it changes each week, so the printed QR code never needs to change.

## One-time setup (about 20 minutes)

### 1. Create the private content repository
1. On GitHub, create a new repo named `cave-valaisanne-contenu` and set it to **Private**.
2. Upload the contents of `cave-valaisanne-contenu-template.zip`: `plats-du-jour/`, `images/`, `scripts/`, `.github/workflows/publier.yml` and `README.md`.
   - Tip: the `.github` folder is hidden on Mac. Press Cmd+Shift+. to show it, or create the file in the GitHub web editor at `.github/workflows/publier.yml`.
3. Delete `plats-du-jour/2026-10-19.json`, the demo draft, before real use. Keep or delete the demo week of 12 October.

### 2. Let the private repo update the public site (deploy key)
1. On your computer, run: `ssh-keygen -t ed25519 -C "plat-du-jour" -f pdj_key -N ""`. This creates `pdj_key` (private) and `pdj_key.pub` (public).
2. In the **public** repo `cave-valaisanne-demo`, go to Settings → Deploy keys → Add deploy key.
   - Title: `plat-du-jour`.
   - Paste `pdj_key.pub`.
   - Tick **Allow write access**.
3. In the **private** repo `cave-valaisanne-contenu`, go to Settings → Secrets and variables → Actions → New repository secret.
   - Name: `SITE_DEPLOY_KEY`.
   - Value: the full contents of `pdj_key`.
4. Delete both key files from your computer. The secret is encrypted by GitHub and is never shown again.

This key can only push to that one public repo. It does not expire. To revoke it, delete the deploy key from the public repo.

### 3. Create your editor token (fine-grained personal access token)
Go to GitHub → Settings → Developer settings → Personal access tokens → **Fine-grained tokens** → Generate new token.

| Setting | Value |
|---|---|
| Token name | `Plat du jour – éditeur (téléphone)` |
| Expiration | **1 year** recommended. Pick a date and add a calendar reminder 1 week before. |
| Resource owner | Mituyee |
| Repository access | **Only select repositories** → `cave-valaisanne-contenu` only |
| Permissions → Repository → **Contents** | **Read and write** |
| Metadata | Read-only. GitHub adds this automatically and requires it. |
| Everything else | No access |

- Do **not** give it access to `cave-valaisanne-demo` or to all repositories.
- Even if the token leaks, it can change only the private menu files. Any change still has to pass validation before reaching the public page.
- Pull requests permission is not needed (the editorial workflow is not used).

**Secure storage**
- GitHub shows the token only once. Store it in a password manager such as 1Password, Bitwarden or Apple Passwords, never in a note, email, WhatsApp or file.
- After you sign in, the editor keeps the token in that browser's local storage on that device, so you don't need to retype it. Use it only on your own devices. Never use it on a shared or restaurant computer unless you sign out afterwards (menu → Sign out).
- Use one token per person. If restaurant staff edit later, give each person their own GitHub account and token, and add them as collaborators on the private repo only.

**Renewal (once a year, or sooner)**
1. Before expiry, GitHub emails you. Generate a new token with the same settings, or use "Regenerate token" on the existing one.
2. Open `/admin/`, sign out, and sign in with the new token.
3. Update the password manager entry.
- GitHub also deletes fine-grained tokens that have not been used for a year.

**If a phone is lost or the token may be exposed**
1. Go to GitHub → Settings → Developer settings → Fine-grained tokens and delete that token immediately.
2. Create a new one.
3. Optionally, check the private repo's commit history for unexpected changes.

### 4. Turn on GitHub Pages for the public repo
- Settings → Pages → Deploy from a branch → `main` / root. (This is already how the Savièse demo was done.)

## Weekly routine (about 5 minutes, works on a phone)

1. Open `https://mituyee.github.io/cave-valaisanne-demo/admin/` and sign in with your token the first time.
2. Tap **Plats du jour** → **Create New Entry** (the editor buttons are in English; all field labels are in French).
3. **Semaine**: choose the Monday. Any day of that week is also accepted and is moved to its Monday.
4. Leave **Statut = Brouillon** while you type.
5. For each day, Lundi to Vendredi plus Samedi & dimanche:
   - Tap **Add plat**.
   - Fill **Nom** (required), **Description**, **Accompagnement** and **Prix CHF**. The price is pre-filled with 20, or 26 for the weekend.
   - Optional: **Type** (e.g. Entrée / Plat / Option végétarienne) and **Photo**. Phone photos are converted to WebP automatically.
   - Need several courses? Tap **Add plat** again.
   - Day closed or no dish? Switch on **Indisponible** for that day.
6. Tap **Save**. The week is saved privately and nothing changes on the site.
7. When you have checked it, open the week, set **Statut = Publié**, and tap **Save**. About 1–2 minutes later the page shows it, from Monday 04:00 for next week.
8. **Prepare next week in advance**: publish it any time. The public page only shows each day's dish on that day.
9. **Change one day afterwards**: open the week, edit the day, and Save. The week stays published.
10. **Remove a dish urgently**: switch on **Indisponible** for that day and Save, or set the whole week back to **Brouillon** to unpublish it.

If a save is refused (for example, a price written as "vingt"), the Action fails. GitHub emails you the reason in French and the site keeps the previous version. Fix the field and Save again.

Before you rely on it, check the Action once: in the private repo go to Actions → "Publier le plat du jour" and look for a green tick.

## Costs
- GitHub Free: private repo, Actions minutes (each publication takes about 20 seconds, well inside the free 2,000 min/month) and Pages: CHF 0.
- Sveltia CMS: open source (MIT), bundled in `/admin/`: CHF 0.

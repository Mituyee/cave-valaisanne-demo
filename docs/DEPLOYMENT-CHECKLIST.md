# Deployment checklist: GitHub Pages + private content repo + editor sign-in

Do this **only after you approve v3**. It takes about 30 minutes. Full details are in `docs/ADMIN-SETUP.md`.

## A. Public site: `Mituyee/cave-valaisanne-demo`
- [ ] Create the repo (**Public**, required for free GitHub Pages).
- [ ] Upload the **contents** of `cave-valaisanne-demo-v3.zip`, so that `index.html` sits at the repo root. Check that `admin/`, `plat-du-jour/`, `data/` and `images/` are all there.
- [ ] Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.
- [ ] After about 1 minute, open `https://mituyee.github.io/cave-valaisanne-demo/` and `…/plat-du-jour/` (and once without the trailing "/").

## B. Private content repo: `Mituyee/cave-valaisanne-contenu`
- [ ] Create the repo (**Private**).
- [ ] Upload the contents of `cave-valaisanne-contenu-template.zip`, including the hidden `.github/workflows/publier.yml`.
- [ ] Delete the demo draft `plats-du-jour/2026-10-19.json`. Keep or delete the demo week of 12 October.

## C. Let the private repo publish to the site (deploy key)
- [ ] Run `ssh-keygen -t ed25519 -C plat-du-jour -f pdj_key -N ""`.
- [ ] In the **public** repo: Settings → Deploy keys → add `pdj_key.pub` and tick **Allow write access**.
- [ ] In the **private** repo: Settings → Secrets and variables → Actions → add a secret `SITE_DEPLOY_KEY` containing `pdj_key`.
- [ ] Delete both key files from your computer.
- [ ] In the private repo: Actions → "Publier le plat du jour" → **Run workflow**. Expect a green tick, and a commit "Plat du jour : mise à jour" in the public repo if anything changed.

## D. Editor sign-in (fine-grained token)
- [ ] GitHub → Settings → Developer settings → Fine-grained tokens → Generate:
  - Repository access: **only `cave-valaisanne-contenu`**.
  - Permissions: **Contents: Read and write**. Metadata (read) is added automatically. Nothing else.
  - Expiry: **1 year**. Add a calendar reminder 1 week before.
- [ ] Save the token in your password manager only.
- [ ] Open `…/cave-valaisanne-demo/admin/` → Sign in with token → **Plats du jour** appears.
- [ ] Test end to end:
  1. Create next week as **Brouillon** and Save. The public page does **not** change.
  2. Switch it to **Publié** and Save.
  3. Within about 2 minutes, `data/plat-du-jour.json` in the public repo contains the week.
- [ ] If a phone is lost: delete the token on GitHub immediately and create a new one.

## E. Final checks on real phones (manual)
- [ ] iPhone Safari + Android Chrome: open the menu and the Plat du jour page, switch the À manger / À boire tabs, open a dish, use the back button.
- [ ] Before printing QR cards, choose the permanent domain (`docs/QR-CARD-SPEC.md`), set it as the GitHub Pages custom domain, then generate and test the QR codes.

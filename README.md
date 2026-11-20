# Lazy-Hanna L. Constantino – Digital Portfolio

Static website (HTML, CSS, JavaScript). No install or build step.

## Preview on your computer
Double-click `index.html`. (Fonts need internet.)

## Edit
Change only `js/data.js`. See `FILL-IN-CHECKLIST.md`.
Put new images in `assets/` and write their path, e.g. `"image": "assets/platech.jpg"`.

## Deploy to Vercel (free)

### Option A – Drag & drop via GitHub (recommended, easiest to update later)
1. Create a free account at https://github.com (use Google sign-in if you like).
2. Click **+ → New repository**. Name it `portfolio`. Keep it Public. Click **Create repository**.
3. Click **uploading an existing file**. Unzip this project, then drag the CONTENTS
   (`index.html`, `css`, `js`, `assets`, etc.) into the page. Click **Commit changes**.
4. Go to https://vercel.com → **Sign Up → Continue with GitHub**.
5. Click **Add New… → Project**, find `portfolio`, click **Import**.
6. Leave every setting as it is (Framework Preset: *Other*, no build command, no output directory). Click **Deploy**.
7. In ~30 seconds you get a link like `https://portfolio-yourname.vercel.app`. Submit this link.
8. To update later: edit the file on GitHub (pencil icon) → Commit. Vercel redeploys automatically.

### Option B – Vercel CLI (no GitHub)
1. Install Node.js from https://nodejs.org
2. Open a terminal in the project folder (the one containing `index.html`).
3. Run:  `npm i -g vercel`
4. Run:  `vercel`  → log in → press Enter to accept the defaults.
5. For the final link run:  `vercel --prod`

### Make the link nicer
Vercel dashboard → your project → **Settings → Domains** → edit the `.vercel.app` name (e.g. `lazyhanna-portfolio.vercel.app`).

### Troubleshooting
- Page is blank / 404: `index.html` must be at the TOP of the repo, not inside another folder.
- Image not showing: file names are case-sensitive (`Photo.jpg` ≠ `photo.jpg`).
- Changes not showing: hard refresh (Ctrl+Shift+R) and check the Vercel *Deployments* tab is green.
- Before submitting: open the link on your phone, click every menu item, and check `showTodoBadges` is `false`.

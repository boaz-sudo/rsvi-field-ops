# Reliable Solutions VI — Installable Web App (PWA)

A installable, offline-capable web app version of the field-ops tool — same
data model as the SwiftUI build, but works on any phone (Android install
prompt, iOS "Add to Home Screen") and desktop, no App Store needed.

## Run it locally first
```
cd rsvi-pwa
python3 -m http.server 8080
```
Open `http://localhost:8080` — install prompts work on localhost even
without HTTPS.

## Deploy it for real
Any static host works — it's plain HTML/CSS/JS, no build step, no backend:
- **DigitalOcean App Platform** (you're already using this for the main
  Reliable Solutions VI site) — add this as a second static site component,
  or a new app pointed at this folder.
- GitHub Pages, Netlify, Cloudflare Pages — drag-and-drop or connect a repo.

**HTTPS is required** for the install prompt and offline caching to work
anywhere other than localhost — all of the options above provide it
automatically.

## Installing on a device
- **Android / Chrome / Edge:** an "Install" banner appears automatically
  (or use the browser menu → "Install app").
- **iPhone / Safari:** Share button → "Add to Home Screen." Safari doesn't
  support the automatic install prompt, so this is the standard iOS path.
- **Desktop Chrome:** an install icon appears in the address bar.

Once installed it opens full-screen with no browser chrome, has its own
home-screen icon, and works offline (the app shell is cached by
`service-worker.js`).

## What's here
- `index.html` / `styles.css` / `app.js` — the app itself (vanilla JS, no
  frameworks or build tools — open `app.js` directly to edit behavior)
- `manifest.json` — name, icons, theme color, what makes it "installable"
- `service-worker.js` — offline caching of the app shell
- `icons/` — the app icon at both required sizes

## Data
Stored in the browser's local storage on-device, same shape as the SwiftUI
build (`clients`, `visits`, `reviews`). It's per-device — installing on a
second phone starts with empty data. If you want data synced across
devices, that's the next step up (would need a small backend or a service
like Firebase/Supabase).

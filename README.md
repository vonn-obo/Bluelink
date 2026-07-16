# Bluelink Technology — Website

Website for **Bluelink Technology**, an Iloilo-based tech company. Lead-gen
site — inquiries route to Messenger/Viber. Services are TBD; see
`CONFIG.services` in `src/config.js`.

React 19 + Vite + Tailwind v4 + shadcn (JSX, not TSX) + Framer Motion +
react-router-dom. Deploys as a static SPA on Vercel.

## Before you launch — edit this

**`src/config.js`** is the single source of truth for all business details:
company name, tagline, phone, email, Facebook page, Viber number, nav links,
and the services list. Every contact link on the site (`LINKS.tel`,
`LINKS.mailto`, `LINKS.messenger`, `LINKS.viber`) is derived from it — edit
content there, never hardcode it into a page.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Adding shadcn / 21st.dev components

```bash
npx shadcn@latest add dialog input navigation-menu ...
npx shadcn@latest add "https://21st.dev/r/<author>/<component>"
```

Components land in `src/components/ui/`. The `@/` alias resolves to `src/`
(configured in `vite.config.js` and `jsconfig.json`).

Note: this project pins `tailwindcss-animate` (a Tailwind v3-style JS
plugin) rather than `tw-animate-css`. It's loaded into the Tailwind v4
CSS-first build via `tailwind.config.js` + the `@config` directive in
`src/index.css` — the plugin itself doesn't ship a CSS entry point.

## Deploy: GitHub → Vercel

```bash
git init
git add .
git commit -m "Bluelink Technology website"
git remote add origin https://github.com/YOUR_USERNAME/bluelink-technology.git
git branch -M main
git push -u origin main
```

In Vercel: **Add New → Project**, import the repo. Framework preset:
**Vite** (auto-detected). `vercel.json` already handles the SPA rewrite so
client-side routes don't 404 on refresh.

## Structure

```
src/
├── config.js          ← central config — edit business details here
├── main.jsx           ← BrowserRouter setup
├── App.jsx             ← routes + AnimatePresence
├── index.css           ← Tailwind v4 + shadcn theme (blue primary)
├── lib/utils.js         ← cn() helper
├── components/
│   ├── Navbar.jsx        ← driven by CONFIG.nav
│   ├── Footer.jsx         ← driven by CONFIG
│   ├── PageTransition.jsx ← Framer Motion page wrapper
│   └── ui/                ← shadcn / 21st.dev components
└── pages/                 ← Home, Services, Portfolio, About, Contact
```

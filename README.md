# QUIN-SMS

Premium SMS verification marketplace — React + Vite + Tailwind frontend, ported from the Google Stitch design.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`, ready to deploy to Vercel exactly like your other frontends (TRACK.ONLINE, QuinCore, PromptStudio).

## What's in here

- `src/pages/` — one file per screen (Landing, SignUp, EmailVerification, Dashboard, Marketplace, ActiveNumbers, Wallet, OrderHistory, Settings)
- `src/components/layout/` — `Sidebar`, `TopBar`, and `AppShell` (wraps sidebar + top bar so they're not duplicated across every dashboard page)
- `tailwind.config.js` — all the design tokens from the Stitch export (colors, spacing, type scale) wired up as real Tailwind theme values instead of inline hex
- `src/index.css` — Google Fonts (Inter, JetBrains Mono, Material Symbols) + base styles

## Still to do (this is UI only right now)

- No backend yet — every number, balance, and order on screen is hardcoded sample data
- No auth wired up — SignUp/EmailVerification pages don't call anything yet
- No routing guard — anyone can hit `/dashboard` directly without signing in
- Service brand icons are colored circles + Material Symbols, not official logos — swap in `simple-icons` SVGs when ready
- API Documentation page (linked from sidebar) doesn't exist yet — the nav link is a placeholder

Let me know which backend piece you want first (auth, wallet/deposits, or the actual number-provisioning integration) and what stack — Firebase like QuinCore, or Node/Express + Postgres like the travel dashboard — and I'll wire it in.

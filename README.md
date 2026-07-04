<div align="center">

# ❤ for-aya

**A love letter, in code — built for one person.**

A single-page, right-to-left Arabic experience with motion-driven storytelling:
a hero, reasons, a handwritten letter, a timeline of meaningful dates,
and an interactive heart that beats back when you tap it.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-animation-FF4D4D)](https://motion.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-live-black?logo=vercel)](https://ya-five.vercel.app)

[**Live demo →**](https://ya-five.vercel.app)

</div>

---

## Overview

`for-aya` is a small, deliberate single-page app. Everything on screen serves one
goal: to feel personal. It is written in Arabic and laid out right-to-left, layered
over an ambient background of drifting light orbs, a tinted heart pattern, falling
petals, and film grain — all tuned to stay smooth on low-end phones.

## Tech stack

| Layer         | Choice                                                        |
| ------------- | ------------------------------------------------------------- |
| Framework     | **Next.js 16** (App Router) + **React 19**                    |
| Language      | **TypeScript**                                                |
| Styling       | **Tailwind CSS** + hand-tuned CSS for the ambient layers      |
| Animation     | **Motion** (`motion/react`)                                   |
| Typography    | **Reem Kufi**, **Tajawal**, **Amiri** (Google Fonts, Arabic)  |
| Analytics     | Vercel Analytics + Speed Insights                             |
| Hosting       | Vercel                                                        |

## Sections

| Component    | What it does                                                              |
| ------------ | ------------------------------------------------------------------------- |
| `Hero`       | Staggered title reveal with shimmer and parallax scroll                   |
| `Reasons`    | Six reasons as gold-bordered cards with a hover lift                      |
| `Letter`     | Handwritten letter; lines blur-fade in on scroll                          |
| `Timeline`   | Meaningful dates as glowing medallions, with a pulsing `?` for what's next |
| `HeartGame`  | Tap the heart to burst petals and float Arabic words of love              |
| `Petals`     | Ambient drifting petals across the page                                   |
| `Cursor`     | Soft glow cursor on desktop                                               |

## Performance & accessibility

- **Ambient layers run on the compositor.** Motion is `transform`-only (no per-frame
  layout or paint), so the drifting orbs and falling petals stay cheap.
- **Device-aware.** Petal count scales down on coarse-pointer and low-core/low-memory
  devices; animations pause when the tab is hidden.
- **`prefers-reduced-motion` respected** across the heartbeat, shimmer, orbs, and petals.
- **Seamless on mobile.** Fixed background layers overscan the viewport so no tonal
  seam appears when the mobile URL bar collapses or expands.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build   # production build
pnpm start   # serve the production build
pnpm lint    # lint
```

## Customizing

All copy lives in plain arrays inside the components — no CMS, no config:

- **Dates & captions** — `components/Timeline.tsx` (`moments`)
- **Reasons** — `components/Reasons.tsx` (`reasons`)
- **Letter copy** — `components/Letter.tsx` (`lines`)
- **Heart-burst words** — `components/HeartGame.tsx` (`sweetWords`)
- **Palette** — CSS custom properties at the top of `app/globals.css`

## Deploy

Production deploys to Vercel on every push to `main`.

---

<div align="center">

*Made with love — لكِ، يا آية.*

</div>

# for-aya

A small love letter, in code. Built for one person.

A single-page Next.js app written in Arabic (RTL), with motion-driven storytelling: a hero, reasons, a handwritten letter, a timeline of meaningful dates, and an interactive heart that beats back when tapped.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Motion** (`motion/react`) for animations
- **Tailwind CSS**
- Arabic typography: **Reem Kufi**, **Tajawal**, **Amiri** (Google Fonts)
- TypeScript

## Sections

- `Hero` — staggered title reveal with shimmer + parallax scroll
- `Reasons` — six reasons, gold-bordered cards with hover lift
- `Letter` — handwritten letter, lines blur-fade in on scroll
- `Timeline` — important dates as glowing medallions, with a pulsing `?` for what's next
- `HeartGame` — tap the heart to burst petals and float Arabic words of love
- `Petals` — ambient drifting petals across the page
- `Cursor` — soft glow cursor on desktop

## Getting started

```bash
pnpm install
pnpm dev
```

## Deploy

Production deploys to Vercel on every push to `main`.

## Customizing

- Dates and captions live in `components/Timeline.tsx` (`moments` array)
- Reasons live in `components/Reasons.tsx` (`reasons` array)
- Letter copy lives in `components/Letter.tsx` (`lines` array)
- Sweet words for the heart burst live in `components/HeartGame.tsx` (`sweetWords` array)

Made with love.

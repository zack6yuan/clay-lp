# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

The git root is a thin wrapper — the actual Next.js application lives in `my-app/`. All source, config, and npm scripts are there. `cd my-app` before running anything.

## Read before writing any Next.js code

`my-app/AGENTS.md` (loaded into context via `my-app/CLAUDE.md`) warns that this is **Next.js 16.3.0**, whose APIs, conventions, and file structure may differ from older Next.js knowledge. Consult the version-matched docs bundled at `my-app/node_modules/next/dist/docs/` before writing app-layer code. Things already in the tree that will not match pre-16 habits:

- `app/layout.tsx` types its props with the framework-generated global `LayoutProps<"/">` — do not hand-write `{ children }: { children: React.ReactNode }`.
- Tailwind is **v4**, configured CSS-first in `app/globals.css` via `@theme`/`@import "tailwindcss"`. There is no `tailwind.config.js`.

Note: the `next dev` server rewrites the guidance block inside `my-app/AGENTS.md`. If it shows up as an uncommitted change, commit it with your work rather than reverting it.

## Commands (run from `my-app/`)

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build; this is also the type-check (`tsc --noEmit` runs via the build)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config: `next/core-web-vitals` + `next/typescript`)

No test framework is configured — lint and build are the only automated checks.

## Architecture

Single-page marketing site, all content hardcoded as lorem-ipsum placeholders (no CMS, API, or data layer).

- **Page composition:** `app/page.tsx` renders a vertical stack of self-contained section components (`Hero`, `AnimatedBanner`, `Services`, `About`, `Statistics`, `Testimonials`, `Pricing`, `CallToAction`, `Footer`) separated by `gap-20`. `app/layout.tsx` wraps them with a persistent `Navbar` and loads the Google fonts.
- **Component tiers (all flat in `app/components/`):** *section* components own one page section and its content; they compose smaller *card/primitive* components (e.g. `Services` renders `ServiceCard` plus `Overview`/`Automations`/`Insights`/`Teams` cards). `SectionHeader` is the main shared primitive.
- **Content lives with the component:** each section defines its own module-level data arrays (`services`, `navLinks`, `features`, …). Nothing is passed down from `page.tsx`.
- **Client vs server:** components are server components by default; `"use client"` is added only where there's interactivity backed by `useState` (currently `Navbar`'s mobile menu and `Services`' tab selection).
- **Import aliases** (`tsconfig.json`): `@/*` → `my-app/` root, `@/components/*` → `app/components/`.

## Styling conventions

- Tailwind v4 utility classes inline. Theme tokens live in `app/globals.css`: colors via CSS vars `--background` (`#FBF6EF`, cream) / `--foreground`, default `--font-sans` is Fredoka, and a custom `--animate-marquee` keyframe drives `AnimatedBanner`.
- **Dynamic classes use static lookup maps, not string interpolation** — see `SectionHeader`'s `colors` map. Tailwind v4 only detects complete class strings at build time, so `text-${color}-500` would be purged.
- Reusable cards expose visual variants through **optional className-override props with defaults** (e.g. `PricingCard`'s `cardBg`, `buttonBg`, `checkBg`) rather than variant enums.
- Responsive styling is a known WIP: mostly desktop-first, with `md:`/`lg:` breakpoints only partially applied (e.g. `Navbar`, `PricingCard`).

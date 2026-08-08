# davekenny.me

Personal site for Dave Kenny — marketing and video work, plus the iOS apps
(Sundial, Alculator) built on the side.

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · TypeScript.

## Running it

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

Other scripts: `npm run build`, `npm start`, `npm run lint`.

## How it's put together

```
app/
  layout.tsx            fonts + site-wide metadata
  page.tsx              homepage
  sundial/, alculator/  one folder per project page
  components/           SiteHeader, SiteFooter, ProjectCard, FeatureRow, Reveal
  lib/projects.ts       project data + site constants — edit this first
  lib/og.tsx            shared Open Graph card renderer
  opengraph-image.tsx   per-route social images (also in each project folder)
  sitemap.ts, robots.ts
assets/                 font file used only for OG image generation
public/images/          app screenshots and product shots
```

Every page is a Server Component and prerenders statically. `Reveal` is the only
client component.

### Design tokens

Colours, fonts and the fluid type scale live in the `@theme` block at the top of
`app/globals.css`, so they're available as normal Tailwind utilities
(`text-ink`, `bg-amber-tint`, `text-display`, `font-serif`). Change them there
rather than reaching for inline styles.

Text colours are chosen to clear WCAG AA against the paper background:

| Token    | Contrast | Use for                     |
| -------- | -------- | --------------------------- |
| `ink`    | 17.2:1   | headings                    |
| `body`   | 10.7:1   | body copy                   |
| `muted`  | 5.4:1    | meta, labels, nav           |
| `coral`  | 5.4:1    | SpoonFed accent             |
| `amber`  | 4.7:1    | Sundial accent              |
| `violet` | 6.7:1    | Alculator accent            |
| `faint`  | 3.5:1    | decorative / large text only — not body copy |

`coral-bright` (#ff6b4a) is SpoonFed's real brand coral. It is only 2.66:1 on
paper, so it is **decorative only** — never put text on or in it. Where the
gradient carries text (the numbered steps), it runs `coral-deep → coral`, which
is dark enough for the large bold numerals sitting on it.

### Adding a project

Add an entry to `PROJECTS` in `app/lib/projects.ts`, create `app/<slug>/page.tsx`
exporting its own `metadata`, and drop an `opengraph-image.tsx` beside it that
calls `renderOgImage`. The sitemap picks it up automatically.

### Images

Images are local, under `public/images/`, and optimized by `next/image`. Nothing
is fetched from a remote host; `next.config.ts` deliberately declares no
`remotePatterns`.

Two kinds of phone image live here, and they are handled differently:

- **Device renders** (Sundial) — a handset already drawn on a transparent
  background, with a lot of empty margin around it. Place with a plain `<Image>`
  and no frame; wrapping one gives you two bezels.
- **Bare screen captures** (SpoonFed) — the screen only, status bar included.
  Use `<PhoneShot>`, which draws the bezel and clips the corners.

`cover.framed` in `app/lib/projects.ts` records which is which.

Card artwork is sized as a **percentage of the panel** rather than in pixels, so
it holds up at one, two and three columns. The two types need very different
percentages because of that transparent margin.

# baguiobotanicalgarden.com

An independent, non-commercial visitor guide to the **Baguio Botanical Garden** in Baguio City, Benguet, Philippines. The site is published in two languages (Tagalog `tl` and English `en`) and is deployed as a static site on **Cloudflare Workers** (Workers static assets).

## Stack

- Astro 7 (static output) + Tailwind CSS 3
- `@astrojs/sitemap` for `sitemap-index.xml`
- `sharp` for build-time image processing
- `wrangler` for Cloudflare Workers deployment
- PWA: `manifest.webmanifest`, service worker (`sw.js`), generated icon set

## Commands

| Command | Action |
| :-- | :-- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Local dev server on `localhost:4321` |
| `pnpm build` | Production build to `./dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm run deploy` | Deploy `./dist/` to Cloudflare Workers via `wrangler deploy` |

## Deployment (Cloudflare Workers)

`wrangler.toml` configures Workers static assets:

```toml
name = "baguio-botanical-garden"
compatibility_date = "2026-08-09"
assets = { directory = "./dist" }
```

Manual deployment from a local machine:

```sh
pnpm build
npx wrangler deploy        # uploads ./dist as static assets
```

`dist/_headers` sets cache policy for assets, icons, the service worker and the manifest; `dist/_redirects` and `dist/robots.txt` are published together with the build.

## Page modules

| Section | Purpose |
| :-- | :-- |
| `#key-info` | Entrance fee, hours, duration, address, contact |
| `#about` | Entity introduction and equivalence statement |
| `#weather` | Current conditions and 7-day outlook |
| `#history` | Timeline from the pre-colonial period to today, plus oral traditions |
| `#attractions` | Eight themed gardens |
| `#season` | Seasonal visit strategy table |
| `#routes` | Routes by visitor type (families / photography / low-mobility) |
| `#itineraries` | Half-day and full-day itineraries |
| `#reviews` | Google Maps user reviews shown on-page with source attribution |
| `#practical` | Practical information by facility type |
| `#services` | Visitor services and surrounding facilities |
| `#transport` | Transport options |
| `#transport-detail` | Detailed transport guide (bus terminal, driving, groups, accessibility, return trips) |
| `#nearby` | Landmarks and attractions nearby |
| `#map` | Location map and authoritative outbound links |
| `#gallery` | Photo gallery |
| `#tips` | Visitor tips |
| `#science` | Science notes and visitor responsibility |
| `#faq` | Frequently asked questions (emitted as `FAQPage` structured data) |
| `#sources` | Sources and references |
| `#disclaimer` | Editorial and copyright notes |

## Weather module

`src/components/WeatherWidget.astro` requests the forecast from the public Open-Meteo service during the build (server-side), renders the result into static HTML, and refreshes the values in the browser on page load with a short local cache. If the request fails, the section degrades to a notice without breaking the page.

## Editorial rules

- **Neutral by facility type.** Services, dining, transport and shopping are described by type (for example "large shopping mall", "intercity coach operator"), never by promoting a specific merchant or brand.
- **Review attribution.** Ratings and quoted reviews are displayed on the page only, never inside JSON-LD, and always carry the source line and sync date (September 2026).
- **Structured data.** `TouristAttraction`, `BreadcrumbList` and `FAQPage` nodes are emitted from `src/layouts/BaseLayout.astro`.

## Images

- Naming: `baguio-botanical-garden-1.jpg` … `-12.jpg` (site gallery), `baguio-botanical-garden-blog-*.jpg` (article placeholders).
- Files are resized to a maximum of 1600×1200 and re-encoded (progressive JPEG, mozjpeg, quality 72) before deployment; gallery images load lazily.

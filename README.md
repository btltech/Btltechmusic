# BTLTECH Music Website

Premium static multi-page music hub for BTLTECH Music, built for Cloudflare Pages.
Home of two artists (BTLTECH and Choko King) and the Lyrid lyric-video app.

## Project Structure

- `index.html` — home hub (hero, Lyrid promo, latest release, both artists)
- `btltech.html` — BTLTECH artist page (bio, releases, videos, contact)
- `choko-king.html` — Choko King artist page (separate artist, own links/releases)
- `lyrid.html` — Lyrid app landing page (features, how-it-works, screenshots, download)
- `lyrid-help.html` — Lyrid help and user guide
- `press-kit.html` — EPK / press kit
- `contact.html` — contact page
- `privacy-policy.html`, `terms-of-service.html` — legal pages
- `styles.css` — full site styling and responsive layout (shared across all pages)
- `script.js` — links, release routing, embeds, mailing-list behavior, and menu logic (shared)
- `assets/` — artwork, logos, icons, OG image, artist portraits, Lyrid screens, press assets
- `site.webmanifest` — basic install metadata
- `sw.js` — service worker caching all pages

## Local Preview

From the project root:

```bash
python3 -m http.server 4173
```

Open:

```text
http://127.0.0.1:4173
```

## Main Edit Points

### Update platform and contact links

Edit the top of `script.js`:

- `artistLinks` — BTLTECH streaming, social, and email links
- `releaseCatalog` — BTLTECH per-song links; missing platform buttons stay hidden
- `chokoLinks` — Choko King's own streaming/social links
- `chokoReleaseCatalog` — Choko King's per-song links
- `lyridLinks` — Lyrid checkout URL, Mac App Store URL, direct download (.dmg), optional web page
- `upcomingRelease`
- `videoCatalog`
- `pressDownloads`
- `communityActions`

### Update artwork and logo

Replace files in:

- `assets/releases/`
- `assets/videos/`
- `assets/logo-btltech-music.svg`
- `assets/choko-king-artist-bio.txt`
- `assets/artists/choko-king-real.jpg`
- `assets/og-image.jpg`

### Update the press kit copy

Edit the Press Kit section in `press-kit.html`.

## Cloudflare Pages Deployment

Deploy the current site directly to the existing Pages project:

```bash
./deploy-pages.sh
```

The script builds a temporary publish directory, excludes local tooling and
`visuals/`, deploys it to the `btltechmusic` Pages project with Wrangler, and
runs post-deployment checks. You can also verify any deployment URL directly:

```bash
./verify-deployment.sh https://example.btltechmusic.pages.dev
```

## Before Public Launch

- Add remaining social and smart links.
- Add per-release links where available.
- Publish the Lyrid Lemon Squeezy product as one-time payment: £29 base price,
  £24 launch sale price, and license keys enabled. Paste the generated checkout
  URL into `lyridLinks.checkout` in `script.js`.
- Replace placeholder visuals with approved assets.
- Add real pre-save and teaser URLs.
- Update the EPK with final stats, placements, and media references.
- Confirm the mailing list integration and replace the mailto fallback if needed.
- Review `privacy-policy.html` and `terms-of-service.html` for final legal copy.
- Test the site on an actual phone.

## Notes

- `sw.js` only clears the old launch cache and unregisters the legacy service worker.
- Privacy and terms pages were added for launch readiness.

- Empty optional social buttons are hidden until links are added.
- Missing links are hidden until their real URLs are added.
- CSS and JS are cache-busted from `index.html` with version query strings.

# Sweetlemon39.github.io

[![Build Status](https://github.com/Sweetlemon39/Sweetlemon39.github.io/actions/workflows/main.yml/badge.svg?branch=dev)](https://github.com/Sweetlemon39/Sweetlemon39.github.io/actions/workflows/main.yml)

Blog of Sweetlemon. Source branch: `dev`; published branch: `master`.

## Development

Use Node.js 22 (at least 22.23.3; `.nvmrc`) and npm 10 or newer.

```sh
nvm use
npm ci
npm run clean
npm run build
npm test
npm run server
```

`npm run build` also fails on Hexo plugin-load errors, which Hexo itself can report
without returning a failing exit code. Run a build before the integration tests.
GitHub Actions builds and tests pull requests; only pushes to `dev` deploy.
The legacy Travis configuration also uses Node 22 and `npm ci`.

## Dependency security migration (2026-10-22)

- Hexo 4 → 8.1.2; upgrade generators, server, Git deployer, Stylus renderer,
  encryption and offline plugins. Both lockfiles use the official npm registry.
- Replace `hexo-all-minifier` with local hooks using `html-minifier-terser`,
  `clean-css` and `terser`. HTML/CSS/JS compression remains enabled; images are
  copied unchanged, avoiding the obsolete native image compression toolchain.
- Replace `hexo-renderer-markdown-it-plus` with `scripts/markdown.js`, using
  Markdown-it 15 public APIs and explicit extension dependencies. Preserve math,
  footnotes, emoji, sub/superscripts, definitions, abbreviations and heading IDs.
  Both old and official Hexo Markdown-it wrappers relied on obsolete private APIs.
- Upgrade KaTeX to 0.19.0 in both generated math and browser assets; regenerate SRI
  hashes. Override the math adapter's old KaTeX range to the directly installed
  version, covered by rendering tests. Upgrade jQuery to 3.7.1 within its compatible
  major and highlight.js browser assets to 11.11.1.
- Live2D remains enabled with the existing Kutori model. `scripts/live2d.js` serves
  the original browser bundles locally; the obsolete helper and its installation
  tools are removed. See `vendor/live2d-widget/README.md` for provenance and license.
- Encryption 4.x uses its supported default theme, AES-GCM and 600,000 PBKDF2
  iterations. The legacy inline encryption template is replaced; its visual input
  style changes. Tests verify decryption, wrong-password rejection and absence of
  plaintext in search indexes. Private encrypted source posts require the existing
  decryption token and are not part of the normal GitHub Actions build.
- Upgrade the unused Landscape theme's Grunt tools and add a separate lockfile.
- Pin GitHub Actions to verified commit IDs, limit deployment write permissions,
  use reproducible installs and configure weekly Dependabot updates.

## Remaining advisories

The main npm audit decreased from **102 affected packages (12 critical, 49 high)**
to **12 (0 critical, 10 high, 2 moderate)**. The separate Landscape tools report
**13 (6 high, 7 moderate)**. Both trees trace to these two unpatched advisories:

- [braces: deeply nested patterns cause stack exhaustion](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)
- [sprintf-js: unbounded precision causes denial of service](https://github.com/advisories/GHSA-hp3w-g68c-fv3c)

As of the date above, the registry's latest versions (3.0.3 and 1.1.3) have no
published fixes. They run in build tooling, not the static site's server. Treat
build inputs, glob patterns and translation format strings as trusted repository
content; this does not eliminate the vulnerabilities.

```sh
npm audit                  # Reports all outstanding vulnerabilities; exits nonzero
npm run audit:security     # Reports the two pending advisories; fails on any others
npm ci --prefix themes/landscape
(cd themes/landscape && node ../../tools/audit.cjs)
```

The narrow pending-advisory list in `tools/audit.cjs` is explicit and applies to
both trees. Network/audit failures also fail this check. Remove entries when
upstream fixes become available; a passing check does **not** mean zero advisories.

npm audit does not scan vendored browser bundles or CDN assets. The retained
legacy Live2D runtime and other theme assets still need independent review.
No browser visual or WebGL test is included; the integration tests verify rendered
HTML, formulas, encryption, asset references and model files. Updates should also
be previewed in a browser before publishing.

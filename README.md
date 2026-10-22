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

## Checks

```sh
npm run audit:security
npm ci --prefix themes/landscape
(cd themes/landscape && node ../../tools/audit.cjs)
```

The audit check uses the upstream exceptions defined in `tools/audit.cjs`.
Use `npm audit` for the complete report.

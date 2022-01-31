# 🔮 Levitate

[![npm version][npm-badge]][npm-url]
[![npm downloads][downloads-badge]][npm-url]
[![CI][build-badge]][build-url]
[![prettier][prettier-badge]][prettier-url]
[![TypeScript][typescript-badge]][typescript-url]

A tool for helping to understand APIs exported and consumed by NPM packages (or any TypeScript code).

    ## Install

```bash
yarn install
```

## Develop

```bash
# Watch and rebuild the app on every file change
yarn dev

# Build the app
yarn build

# Build and bundle the app into a single executable JS file
yarn bundle
```

## Usage

**Compare exports of different package versions**

```bash
# Compare exports of different versions of a package
npx @grafana/levitate compare \
    --prev @grafana/ui@8.2.5 \
    --current @grafana/ui@canary
```

**List imports**

```bash
# List the imports used by a program
npx @grafana/levitate list-imports \
    --path <PATH-TO-A-PACKAGE>/module.ts \
    --filters "@common/pages" "@grafana/data" \
    --verbose
```

**List exports**

```bash
# List the exports of a compiled package
npx @grafana/levitate list-exports \
    --path <PATH-TO-A-PACKAGE>/index.d.ts
```

[npm-url]: https://www.npmjs.com/package/@grafana/levitate
[npm-badge]: https://img.shields.io/npm/v/@grafana/levitate.svg
[downloads-badge]: https://img.shields.io/npm/dm/@grafana/levitate.svg?color=blue
[build-badge]: https://github.com/grafana/levitate/actions/workflows/ci.yml/badge.svg
[build-url]: https://github.com/grafana/levitate/actions/workflows/ci.yml
[typescript-badge]: https://badges.frapsoft.com/typescript/code/typescript.svg?v=101
[typescript-url]: https://github.com/microsoft/TypeScript
[prettier-badge]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier

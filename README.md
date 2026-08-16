<h1 align="center">
    <a href="https://www.npmjs.com/package/@kostad/brand" target="_blank">@kostad/brand</a>
</h1>

<p align="center">
    <img src="https://raw.githubusercontent.com/KostaD02/brand/refs/heads/main/public/logo_500x500.png" alt="brand-logo" width="120" height="120" />
    <br />
    <em>The design system for <a href="https://konstantinedatunishvili.com" target="_blank"> Konstantine Datunishvili's</a> projects.</em>
    <br />
</p>

<p align="center">
    <a href="https://github.com/KostaD02/brand/issues">Submit an Issue</a>
    ·
    <a href="https://kostad02.github.io/brand">Storybook</a>
</p>

<p align="center">
  <a href="https://github.com/KostaD02/brand/actions/workflows/ci.yml"><img src="https://github.com/KostaD02/brand/actions/workflows/ci.yml/badge.svg" alt="CI"></a>
  <a href="https://www.npmjs.com/package/@kostad/brand"><img src="https://img.shields.io/npm/v/@kostad/brand" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@kostad/brand"><img src="https://img.shields.io/npm/unpacked-size/@kostad/brand" alt="unpacked size"></a>
</p>

## Install

| Package manager               | Command                     |
| ----------------------------- | --------------------------- |
| [npm](https://www.npmjs.com/) | `npm install @kostad/brand` |
| [pnpm](https://pnpm.io/)      | `pnpm add @kostad/brand`    |
| [yarn](https://yarnpkg.com/)  | `yarn add @kostad/brand`    |
| [bun](https://bun.sh/)        | `bun add @kostad/brand`     |

## Usage

Plain HTML, no tooling. Serve the file from `node_modules` or a CDN:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@kostad/brand/dist/kostad-brand.min.css"
/>
```

With a bundler:

```js
import "@kostad/brand/css"; // minified: "@kostad/brand/css/min"
```

SCSS, if you want the functions and mixins. The `pkg:` prefix needs the Dart Sass package importer:

```scss
@use "pkg:@kostad/brand"; // full stylesheet
@use "pkg:@kostad/brand/scss/api" as brand; // functions and mixins, emits nothing
```

Without the package importer, add `node_modules` to your Sass load paths and point at the file directly: `@use "@kostad/brand/scss/main"`.

Palette colors (`--kd-color-*`) and semantic roles (`--kd-accent`, `--kd-bg`, `--kd-text-*`) are all custom properties, so repointing a role at a different brand color is a one liner:

```css
:root {
  --kd-accent: var(--kd-color-amber);
  --kd-accent-line: var(--kd-color-amber-deep);
}
```

Raw values live in `@kostad/brand/tokens.json`.

## Development

| Command         | Does                          |
| --------------- | ----------------------------- |
| `pnpm build`    | Compiles `scss/` into `dist/` |
| `pnpm watch`    | Same, on change               |
| `pnpm docs:run` | Storybook on port 2222        |
| `pnpm lint`     | ESLint and Stylelint          |
| `pnpm format`   | Prettier                      |

## License

[MIT](LICENSE) © Konstantine Datunishvili

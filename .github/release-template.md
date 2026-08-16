## 📦 Install

| Package manager               | Command                                 |
| ----------------------------- | --------------------------------------- |
| [npm](https://www.npmjs.com/) | `npm install @kostad/brand@__VERSION__` |
| [pnpm](https://pnpm.io/)      | `pnpm add @kostad/brand@__VERSION__`    |
| [yarn](https://yarnpkg.com/)  | `yarn add @kostad/brand@__VERSION__`    |
| [bun](https://bun.sh/)        | `bun add @kostad/brand@__VERSION__`     |

## 🎨 What's included

| Entry                       | Contains                                          |
| --------------------------- | ------------------------------------------------- |
| `@kostad/brand/css`         | tokens, reset, elements, components and utilities |
| `@kostad/brand/css/min`     | the same stylesheet, minified                     |
| `@kostad/brand/tokens.json` | every `--kd-*` token as data                      |

**`kostad-brand-__VERSION__.zip`** attached below holds the same three files, for use
without a package manager.

## 🛠️ Working from source

Anything narrower than the full stylesheet comes from the SCSS, where the `!default`
variables let you reconfigure spacing, colours, breakpoints and even the `kd-` prefix
before a single rule is compiled:

```scss
@use "@kostad/brand/scss" as *;
```

Every layer is usable on its own, so you can take the reset without the components:

```scss
@use "@kostad/brand/scss/base/reset";
@use "@kostad/brand/scss/utilities/index" as utilities;
```

Compile-time helpers (breakpoint mixins, `$prefix`, the token maps) come from the
zero-output API entry:

```scss
@use "@kostad/brand/scss/api" as brand;
```

## 📖 Docs

[Storybook](https://kostad02.github.io/brand/) documents every token, component and
utility class.

---

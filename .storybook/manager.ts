import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

import pkg from "../package.json" with { type: "json" };

const logo = `<img
  src="./logo_500x500_circle.png"
  alt="logo"
  width="22"
  height="22"
/>`;

const name = `<span>KostaD02/brand</span>`;

const tag = `<span style="opacity: 0.55; font-size: 11px;">v${pkg.version}</span>`;

addons.setConfig({
  theme: create({
    base: "dark",
    brandTitle: `<div style="display: flex; justify-content: center; align-items: center; gap: 5px">${logo} ${name} ${tag}</div>`,
    brandUrl: "https://github.com/KostaD02/brand",
    brandTarget: "_blank",
  }),
});

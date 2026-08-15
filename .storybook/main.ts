import { readFileSync } from "fs";
import { resolve } from "path";

import type { StorybookConfig } from "@storybook/html-vite";

interface Manifest {
  prefix: string;
  theme: Record<string, Record<string, string>>;
}

function managerTokens(): string {
  try {
    const path = resolve(import.meta.dirname, "../dist/kostad-brand-tokens.json");
    const manifest = JSON.parse(readFileSync(path, "utf8")) as Manifest;
    const declarations = Object.entries(manifest.theme.dark ?? {})
      .map(([name, value]) => `--${manifest.prefix}${name}:${value};`)
      .join("");

    return `<style>:root{${declarations}}</style>`;
  } catch {
    return "";
  }
}

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.ts"],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  managerHead: (head) => `${head}${managerTokens()}`,
  viteFinal: (config) => ({
    ...config,
    base: process.env.STORYBOOK_BASE ?? "/",
  }),
};

export default config;

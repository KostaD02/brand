import { readFileSync, writeFileSync } from "fs";

import { log } from "./log.ts";
import { resolve } from "path";

interface Manifest {
  version: string;
  prefix: string;
  theme: Record<string, Record<string, string>>;
  token: Record<string, string>;
  themeColor: Record<string, string>;
  breakpoint: Record<string, number>;
}

const BLOCK = /([^{}]+)\{([^{}]*)\}/g;
const DECLARATION = /--([a-z0-9-]+)\s*:\s*([^;]+);/g;

function parse(css: string, prefix: string): Map<string, Map<string, string>> {
  const blocks = new Map<string, Map<string, string>>();

  for (const block of css.matchAll(BLOCK)) {
    const selector = (block[1] ?? "")
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\s+/g, " ")
      .trim();

    if (!selector) {
      continue;
    }

    const declarations = blocks.get(selector) ?? new Map<string, string>();

    for (const declaration of (block[2] ?? "").matchAll(DECLARATION)) {
      const name = declaration[1];
      const value = declaration[2];

      if (name?.startsWith(prefix) && value !== undefined) {
        declarations.set(name.slice(prefix.length), value.trim());
      }
    }

    if (declarations.size > 0) {
      blocks.set(selector, declarations);
    }
  }

  return blocks;
}

function pick(
  blocks: Map<string, Map<string, string>>,
  test: (selector: string) => boolean,
): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [selector, declarations] of blocks) {
    if (!test(selector)) {
      continue;
    }

    for (const [name, value] of declarations) {
      result[name] = value;
    }
  }

  return result;
}

export function writeTokenManifest(
  cssPath: string,
  jsonPath: string,
  prefix: string,
  isSilent = false,
): boolean {
  try {
    const pkgJson = readFileSync(resolve(import.meta.dirname, "../package.json"), "utf8");
    const pkg = JSON.parse(pkgJson) as { version: string };
    const blocks = parse(readFileSync(cssPath, "utf8"), prefix);

    const theme = (name: string) => (s: string) =>
      new RegExp(`\\[data-theme=["']?${name}["']?\\]`).test(s);

    const dark = pick(blocks, theme("dark"));
    const light = pick(blocks, theme("light"));
    const token = pick(blocks, (s) => s === ":root");

    for (const name of Object.keys(dark)) {
      delete token[name];
    }

    const breakpoint: Record<string, number> = {};

    for (const [name, value] of Object.entries(token)) {
      if (name.startsWith("breakpoint-")) {
        breakpoint[name.slice("breakpoint-".length)] = parseInt(value, 10);
      }
    }

    const manifest: Manifest = {
      version: pkg.version,
      prefix,
      theme: { dark, light },
      token,
      themeColor: { dark: dark.bg ?? "", light: light.bg ?? "" },
      breakpoint,
    };

    writeFileSync(jsonPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
    log(`Wrote ${jsonPath}`, isSilent);

    return true;
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    log(`Error while writing ${jsonPath}: ${error}`, isSilent, true);

    return false;
  }
}

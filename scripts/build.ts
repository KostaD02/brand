import { mkdirSync, watch as watchDir, writeFileSync } from "fs";
import { resolve } from "path";

import { buildSync } from "esbuild";
import { compile } from "sass";

import { withLicenseBanner } from "./banner.ts";
import {
  ENTRIES,
  NAME,
  PREFIX,
  SCRIPT_ENTRIES,
  SCRIPT_VARIANTS,
  STYLES,
  TOKENS_ENTRY,
} from "./consts.ts";
import { log } from "./log.ts";
import { writeTokenManifest } from "./tokens.ts";
import { writeTypeDeclaration } from "./types.ts";

const isWatchMode = process.argv.includes("--watch");
const isSilentMode = process.argv.includes("--silent");

const srcDir = resolve(import.meta.dirname, "../scss");
const scriptDir = resolve(import.meta.dirname, "../js");
const distDir = resolve(import.meta.dirname, "../dist");

const targets = ENTRIES.flatMap(({ entry, name }) =>
  STYLES.map(({ suffix, style }) => ({
    from: resolve(srcDir, entry),
    to: resolve(distDir, `${name}${suffix}.css`),
    style,
  })),
);

const scriptTargets = SCRIPT_ENTRIES.flatMap(({ entry, name }) =>
  SCRIPT_VARIANTS.map(({ suffix, minify }) => ({
    from: resolve(scriptDir, entry),
    to: resolve(distDir, `${name}${suffix}.js`),
    minify,
  })),
);

const tokensEntry = resolve(srcDir, TOKENS_ENTRY);

main(isWatchMode, isSilentMode);

function main(isWatchMode: boolean, isSilentMode: boolean): void {
  mkdirSync(distDir, { recursive: true });

  if (isWatchMode) {
    log("Watching SCSS and JS files for changes...", isSilentMode);
    build(isSilentMode);
    watch(isSilentMode);
  } else {
    log("Building SCSS and JS files...", isSilentMode);

    if (!build(isSilentMode)) {
      process.exitCode = 1;
    }
  }
}

function build(isSilentMode: boolean): boolean {
  for (const { from, to, style } of targets) {
    try {
      const { css } = compile(from, { style, sourceMap: false, charset: false });

      writeFileSync(to, withLicenseBanner(css), "utf8");
      log(`Compiled ${to}`, isSilentMode);
    } catch (err) {
      const error = err instanceof Error ? err.message : String(err);
      log(`Error while compiling ${from}: ${error}`, isSilentMode, true);
      return false;
    }
  }

  for (const { from, to, minify } of scriptTargets) {
    try {
      const [output] = buildSync({
        entryPoints: [from],
        bundle: true,
        format: "esm",
        target: "es2022",
        minify,
        write: false,
        logLevel: "silent",
      }).outputFiles;

      if (!output) {
        throw new Error("esbuild produced no output");
      }

      writeFileSync(to, withLicenseBanner(output.text), "utf8");
      log(`Compiled ${to}`, isSilentMode);
    } catch (err) {
      const error = err instanceof Error ? err.message : String(err);
      log(`Error while compiling ${from}: ${error}`, isSilentMode, true);
      return false;
    }
  }

  for (const { entry, name } of SCRIPT_ENTRIES) {
    const from = resolve(scriptDir, entry);
    const to = resolve(distDir, `${name}.d.ts`);

    if (!writeTypeDeclaration(from, to, isSilentMode)) {
      return false;
    }
  }

  try {
    const { css } = compile(tokensEntry, {
      style: "expanded",
      sourceMap: false,
      charset: false,
    });

    return writeTokenManifest(
      css,
      resolve(distDir, `${NAME}-tokens.json`),
      PREFIX,
      isSilentMode,
    );
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    log(`Error while compiling ${tokensEntry}: ${error}`, isSilentMode, true);

    return false;
  }
}

function watch(isSilentMode: boolean): void {
  let timer: NodeJS.Timeout | undefined;

  const rebuild = () => {
    clearTimeout(timer);
    timer = setTimeout(() => build(isSilentMode), 100);
  };

  watchDir(srcDir, { recursive: true }, rebuild);
  watchDir(scriptDir, { recursive: true }, rebuild);
}

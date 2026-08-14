import { mkdirSync, watch as watchDir, writeFileSync } from "fs";
import { resolve } from "path";

import { compile } from "sass";

import { withLicenseBanner } from "./banner.ts";
import { ENTRIES, NAME, PREFIX, STYLES } from "./consts.ts";
import { log } from "./log.ts";
import { writeTokenManifest } from "./tokens.ts";

const isWatchMode = process.argv.includes("--watch");
const isSilentMode = process.argv.includes("--silent");

const srcDir = resolve(import.meta.dirname, "../scss");
const distDir = resolve(import.meta.dirname, "../dist");

const targets = ENTRIES.flatMap(({ entry, name }) =>
  STYLES.map(({ suffix, style }) => ({
    from: resolve(srcDir, entry),
    to: resolve(distDir, `${name}${suffix}.css`),
    style,
  })),
);

main(isWatchMode, isSilentMode);

function main(isWatchMode: boolean, isSilentMode: boolean): void {
  mkdirSync(distDir, { recursive: true });

  if (isWatchMode) {
    log("Watching SCSS files for changes...", isSilentMode);
    build(isSilentMode);
    watch(isSilentMode);
  } else {
    log("Building SCSS files...", isSilentMode);

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

  return writeTokenManifest(
    resolve(distDir, `${NAME}-tokens.css`),
    resolve(distDir, `${NAME}-tokens.json`),
    PREFIX,
    isSilentMode,
  );
}

function watch(isSilentMode: boolean): void {
  let timer: NodeJS.Timeout | undefined;

  watchDir(srcDir, { recursive: true }, () => {
    clearTimeout(timer);
    timer = setTimeout(() => build(isSilentMode), 100);
  });
}

import { execSync } from "child_process";
import { mkdirSync, watch as watchDir } from "fs";
import { resolve } from "path";

import { prependLicenseBanner } from "./banner.ts";
import { NAME } from "./consts.ts";
import { log } from "./log.ts";

const isWatchMode = process.argv.includes("--watch");
const isSilentMode = process.argv.includes("--silent");

const srcDir = resolve(import.meta.dirname, "../scss");
const distDir = resolve(import.meta.dirname, "../dist");
const entryFile = resolve(srcDir, "main.scss");

const targets = [
  { file: resolve(distDir, `${NAME}.css`), style: "expanded" },
  { file: resolve(distDir, `${NAME}.min.css`), style: "compressed" },
];

main(isWatchMode, isSilentMode);

function main(isWatchMode: boolean, isSilentMode: boolean): void {
  mkdirSync(distDir, { recursive: true });

  if (isWatchMode) {
    log("Watching SCSS files for changes...", isSilentMode);
    build(isSilentMode);
    watch(isSilentMode);
  } else {
    log("Building SCSS files...", isSilentMode);
    build(isSilentMode);
  }
}

function build(isSilentMode: boolean): void {
  try {
    for (const { file, style } of targets) {
      execSync(`sass "${entryFile}" "${file}" --style=${style} --no-source-map`, {
        stdio: "inherit",
      });

      prependLicenseBanner(file, isSilentMode);
      log(`Compiled ${file}`, isSilentMode);
    }
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    log(`Error while compiling SCSS: ${error}`, isSilentMode, true);
  }
}

function watch(isSilentMode: boolean): void {
  let timer: NodeJS.Timeout | undefined;

  watchDir(srcDir, { recursive: true }, () => {
    clearTimeout(timer);
    timer = setTimeout(() => build(isSilentMode), 100);
  });
}

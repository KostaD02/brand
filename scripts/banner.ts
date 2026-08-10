import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

import { log } from "./log.ts";

export function prependLicenseBanner(filePath: string, isSilent = false): void {
  const pkgJson = resolve(import.meta.dirname, "../package.json");
  const pkg: { version: string; author: string } = JSON.parse(
    readFileSync(pkgJson, "utf-8"),
  ) as {
    version: string;
    author: string;
  };

  const year = new Date().getFullYear();

  const LICENSE_BANNER_TEXT = `/*
 * KostaD02/brand v${pkg.version} (https://github.com/KostaD02/brand)
 * Copyright 2026${year === 2026 ? "" : `-${year}`} ${pkg.author}
 * Licensed under MIT (https://github.com/KostaD02/brand/blob/main/LICENSE)
*/
`;

  try {
    const fileContent = readFileSync(filePath, "utf8");
    const newContent = LICENSE_BANNER_TEXT + "\n" + fileContent;
    writeFileSync(filePath, newContent, "utf8");
    log(`Prepended license banner to ${filePath}`, isSilent);
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    log(`Error while prepending license banner to ${filePath}: ${error}`, isSilent, true);
  }
}

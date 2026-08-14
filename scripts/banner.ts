import { readFileSync } from "fs";
import { resolve } from "path";

interface Pkg {
  version: string;
  author: string;
}

export function withLicenseBanner(css: string): string {
  const pkgJson = resolve(import.meta.dirname, "../package.json");
  const pkg = JSON.parse(readFileSync(pkgJson, "utf-8")) as Pkg;
  const year = new Date().getFullYear();

  const banner = `/*
 * KostaD02/brand v${pkg.version} (https://github.com/KostaD02/brand)
 * Copyright 2026${year === 2026 ? "" : `-${year}`} ${pkg.author}
 * Licensed under MIT (https://github.com/KostaD02/brand/blob/main/LICENSE)
*/
`;

  return `${banner}\n${css}`;
}

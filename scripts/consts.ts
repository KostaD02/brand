export const NAME = "kostad-brand";

export const PREFIX = "kd-";

export const ENTRIES = [{ entry: "main.scss", name: NAME }] as const;

export const TOKENS_ENTRY = "entries/tokens.scss";

export const STYLES = [
  { suffix: "", style: "expanded" },
  { suffix: ".min", style: "compressed" },
] as const;

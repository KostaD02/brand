export const NAME = "kostad-brand";

export const PREFIX = "kd-";

// TODO: Would be better to just use fs?

export const ENTRIES = [
  { entry: "main.scss", name: NAME },
  { entry: "entries/tokens.scss", name: `${NAME}-tokens` },
  { entry: "entries/reset.scss", name: `${NAME}-reset` },
  { entry: "entries/elements.scss", name: `${NAME}-elements` },
  { entry: "entries/components.scss", name: `${NAME}-components` },
  { entry: "entries/utilities.scss", name: `${NAME}-utilities` },
] as const;

export const STYLES = [
  { suffix: "", style: "expanded" },
  { suffix: ".min", style: "compressed" },
] as const;

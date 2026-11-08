import type { Preview } from "@storybook/html-vite";

import "../dist/kostad-brand.css";
import "../stories/stories.css";

const DEFAULT_THEME = "dark";
const DEFAULT_DIRECTION = "ltr";

document.documentElement.setAttribute("data-theme", DEFAULT_THEME);
document.documentElement.setAttribute("dir", DEFAULT_DIRECTION);

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Brand theme applied to the document root",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "dark", title: "Dark" },
          { value: "light", title: "Light" },
        ],
        dynamicTitle: true,
      },
    },
    direction: {
      description: "Writing direction applied to the document root",
      toolbar: {
        title: "Direction",
        icon: "mirror",
        items: [
          { value: "ltr", title: "LTR" },
          { value: "rtl", title: "RTL" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: DEFAULT_THEME,
    direction: DEFAULT_DIRECTION,
  },
  decorators: [
    (story, context) => {
      const theme =
        typeof context.globals.theme === "string" ? context.globals.theme : DEFAULT_THEME;
      const direction =
        typeof context.globals.direction === "string"
          ? context.globals.direction
          : DEFAULT_DIRECTION;

      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.setAttribute("dir", direction);

      return story();
    },
  ],
  parameters: {
    layout: "centered",
    backgrounds: {
      options: {
        base: { name: "Base", value: "var(--kd-bg)" },
        surface: { name: "Surface", value: "var(--kd-bg-surface)" },
        elevated: { name: "Elevated", value: "var(--kd-bg-elevated)" },
        inverse: { name: "Inverse", value: "var(--kd-text-primary)" },
      },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Tokens",
          "Elements",
          "Components",
          "Forms",
          "Layout",
          "Utilities",
        ],
      },
    },
  },
};

export default preview;

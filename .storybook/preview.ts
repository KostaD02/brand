import type { Preview } from "@storybook/html-vite";

import "../dist/kostad-brand.css";
import "../stories/stories.css";

const DEFAULT_THEME = "dark";

document.documentElement.setAttribute("data-theme", DEFAULT_THEME);

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
  },
  initialGlobals: {
    theme: DEFAULT_THEME,
  },
  decorators: [
    (story, context) => {
      const theme =
        typeof context.globals.theme === "string" ? context.globals.theme : DEFAULT_THEME;

      document.documentElement.setAttribute("data-theme", theme);

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

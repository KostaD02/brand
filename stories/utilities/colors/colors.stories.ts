import type { Meta, StoryObj } from "@storybook/html-vite";

interface ColorArgs {
  background: string;
}

const meta: Meta<ColorArgs> = {
  title: "Utilities/Colors",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<ColorArgs>;

const swatch = (classes: string, label: string) =>
  `<div class="${classes}" style="padding: var(--kd-space-3); border: 1px solid var(--kd-border); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-primary);">${label}</div>`;

const grid = (inner: string) =>
  `<div class="kd-d-grid kd-gap-2" style="grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));">${inner}</div>`;

export const Roles: Story = {
  tags: ["!dev"],
  render: () =>
    grid(
      [
        "base",
        "alpha",
        "elevated",
        "elevated-hover",
        "accent-soft",
        "warning-soft",
        "danger-soft",
      ]
        .map((name) => swatch(`kd-bg-${name}`, `.kd-bg-${name}`))
        .join(""),
    ),
};

export const Palette: Story = {
  tags: ["!dev"],
  render: () =>
    grid(
      ["navy", "navy-light", "slate", "ice", "green", "amber", "red", "paper"]
        .map((name) => swatch(`kd-bg-${name}`, `.kd-bg-${name}`))
        .join(""),
    ),
};

export const Borders: Story = {
  tags: ["!dev"],
  render: () =>
    grid(
      ["base", "strong", "focus", "accent", "danger", "warning"]
        .map(
          (name) =>
            `<div class="kd-border-1 kd-border-${name}" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-border-${name}</div>`,
        )
        .join(""),
    ),
};

export const Colors: Story = {
  args: {
    background: "elevated",
  },
  argTypes: {
    background: {
      control: "select",
      options: [
        "base",
        "alpha",
        "elevated",
        "elevated-hover",
        "accent",
        "accent-soft",
        "warning-soft",
        "danger-soft",
        "transparent",
        "navy",
        "green",
        "amber",
        "red",
      ],
    },
  },
  render: ({ background }) => swatch(`kd-bg-${background}`, `.kd-bg-${background}`),
};

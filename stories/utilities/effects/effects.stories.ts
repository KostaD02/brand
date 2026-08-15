import type { Meta, StoryObj } from "@storybook/html-vite";

interface EffectsArgs {
  shadow: "sm" | "md" | "lg" | "side" | "none";
  opacity: "0" | "25" | "50" | "75" | "100";
}

const meta: Meta<EffectsArgs> = {
  title: "Utilities/Effects",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<EffectsArgs>;

const cell = (classes: string, label: string) =>
  `<div class="${classes}" style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${label}</div>`;

const grid = (inner: string) =>
  `<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));">${inner}</div>`;

export const Shadow: Story = {
  tags: ["!dev"],
  render: () =>
    grid(
      ["sm", "md", "lg", "side"]
        .map((name) => cell(`kd-shadow-${name}`, `.kd-shadow-${name}`))
        .join(""),
    ),
};

export const Pop: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-d-flex kd-gap-4">
  <div class="kd-pop kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop</div>
  <div class="kd-pop-lg kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop-lg</div>
</div>
`,
};

export const Opacity: Story = {
  tags: ["!dev"],
  render: () =>
    grid(
      ["25", "50", "75", "100"]
        .map((value) => cell(`kd-opacity-${value}`, `.kd-opacity-${value}`))
        .join(""),
    ),
};

export const FocusRing: Story = {
  tags: ["!dev"],
  render: () => `
<button type="button" class="kd-focus-ring kd-border-1" style="padding: var(--kd-space-2); background: transparent; color: inherit; font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">
  Tab to me: .kd-focus-ring
</button>
`,
};

export const Effects: Story = {
  args: {
    shadow: "md",
    opacity: "100",
  },
  argTypes: {
    shadow: {
      control: "inline-radio",
      options: ["sm", "md", "lg", "side", "none"],
    },
    opacity: { control: "inline-radio", options: ["0", "25", "50", "75", "100"] },
  },
  render: ({ shadow, opacity }) =>
    cell(
      `kd-shadow-${shadow} kd-opacity-${opacity}`,
      `.kd-shadow-${shadow} .kd-opacity-${opacity}`,
    ),
};

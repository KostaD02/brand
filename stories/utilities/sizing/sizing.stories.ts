import type { Meta, StoryObj } from "@storybook/html-vite";

interface SizingArgs {
  property: "w" | "min-w" | "max-w" | "h";
  value: "0" | "25" | "50" | "75" | "100";
}

const meta: Meta<SizingArgs> = {
  title: "Utilities/Sizing",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<SizingArgs>;

const bar = (classes: string, label: string) =>
  `<div style="background: var(--kd-bg-surface); border: 1px dashed var(--kd-border-strong); margin-bottom: var(--kd-space-2);"><div class="${classes}" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${label}</div></div>`;

export const Width: Story = {
  tags: ["!dev"],
  render: () =>
    ["25", "50", "75", "100"]
      .map((value) => bar(`kd-w-${value}`, `.kd-w-${value}`))
      .join(""),
};

export const Keywords: Story = {
  tags: ["!dev"],
  render: () =>
    ["w-auto", "w-fit", "w-full"]
      .map((name) => bar(`kd-${name}`, `.kd-${name}`))
      .join(""),
};

export const Height: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-d-flex kd-gap-2" style="height: 8rem;">
  <div class="kd-h-25" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-h-25</div>
  <div class="kd-h-50" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-h-50</div>
  <div class="kd-h-100" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-h-100</div>
</div>
`,
};

export const Sizing: Story = {
  args: {
    property: "w",
    value: "50",
  },
  argTypes: {
    property: { control: "inline-radio", options: ["w", "min-w", "max-w", "h"] },
    value: { control: "inline-radio", options: ["0", "25", "50", "75", "100"] },
  },
  render: ({ property, value }) =>
    bar(`kd-${property}-${value}`, `.kd-${property}-${value}`),
};

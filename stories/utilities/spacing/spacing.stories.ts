import type { Meta, StoryObj } from "@storybook/html-vite";

interface SpacingArgs {
  property: "m" | "mt" | "mx" | "my" | "p" | "pt" | "px" | "py";
  step: "0" | "1" | "2" | "3" | "4" | "5";
}

const meta: Meta<SpacingArgs> = {
  title: "Utilities/Spacing",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<SpacingArgs>;

const inner = (label: string) =>
  `<span style="display: block; padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${label}</span>`;

const frame = (classes: string, label: string) =>
  `<div style="background: var(--kd-bg-surface); border: 1px dashed var(--kd-border-strong); margin-bottom: var(--kd-space-2);"><div class="${classes}">${inner(
    label,
  )}</div></div>`;

const chip = (label: string) =>
  `<span style="padding: var(--kd-space-1) var(--kd-space-2); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${label}</span>`;

export const Padding: Story = {
  tags: ["!dev"],
  render: () =>
    ["0", "1", "3", "5"].map((step) => frame(`kd-p-${step}`, `.kd-p-${step}`)).join(""),
};

export const Margin: Story = {
  tags: ["!dev"],
  render: () =>
    ["1", "3", "5"].map((step) => frame(`kd-m-${step}`, `.kd-m-${step}`)).join(""),
};

export const Sides: Story = {
  tags: ["!dev"],
  render: () =>
    ["pt-4", "pb-4", "px-4", "py-4"]
      .map((name) => frame(`kd-${name}`, `.kd-${name}`))
      .join(""),
};

export const Auto: Story = {
  tags: ["!dev"],
  render: () =>
    frame("kd-mx-auto", ".kd-mx-auto: centred by equal automatic side margins"),
};

export const Gap: Story = {
  tags: ["!dev"],
  render: () =>
    ["1", "3", "5"]
      .map(
        (step) =>
          `<div class="kd-d-flex kd-gap-${step}" style="margin-bottom: var(--kd-space-2);">${chip(
            `.kd-gap-${step}`,
          )}${chip("two")}${chip("three")}</div>`,
      )
      .join(""),
};

export const Spacing: Story = {
  args: {
    property: "p",
    step: "3",
  },
  argTypes: {
    property: {
      control: "select",
      options: ["m", "mt", "mx", "my", "p", "pt", "px", "py"],
    },
    step: { control: "inline-radio", options: ["0", "1", "2", "3", "4", "5"] },
  },
  render: ({ property, step }) =>
    frame(`kd-${property}-${step}`, `.kd-${property}-${step}`),
};

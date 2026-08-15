import type { Meta, StoryObj } from "@storybook/html-vite";

interface FlexArgs {
  direction: "row" | "row-reverse" | "column" | "column-reverse";
  justify: "start" | "end" | "center" | "between" | "around" | "evenly";
  items: "start" | "end" | "center" | "baseline" | "stretch";
  wrap: "wrap" | "nowrap" | "wrap-reverse";
}

const meta: Meta<FlexArgs> = {
  title: "Utilities/Flex",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<FlexArgs>;

const chip = (label: string) =>
  `<span style="padding: var(--kd-space-1) var(--kd-space-2); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${label}</span>`;

const frame = (classes: string, inner: string) =>
  `<div class="${classes}" style="min-height: 5rem; padding: var(--kd-space-2); border: 1px dashed var(--kd-border-strong); margin-bottom: var(--kd-space-2);">${inner}</div>`;

export const Direction: Story = {
  tags: ["!dev"],
  render: () =>
    ["row", "column"]
      .map((value) =>
        frame(
          `kd-d-flex kd-flex-${value} kd-gap-2`,
          `${chip(`.kd-flex-${value}`)}${chip("two")}${chip("three")}`,
        ),
      )
      .join(""),
};

export const Justify: Story = {
  tags: ["!dev"],
  render: () =>
    ["start", "center", "between", "evenly"]
      .map((value) =>
        frame(
          `kd-d-flex kd-justify-${value} kd-gap-2`,
          `${chip(`.kd-justify-${value}`)}${chip("two")}`,
        ),
      )
      .join(""),
};

export const Items: Story = {
  tags: ["!dev"],
  render: () =>
    ["start", "center", "end"]
      .map((value) =>
        frame(
          `kd-d-flex kd-items-${value} kd-gap-2`,
          `${chip(`.kd-items-${value}`)}${chip("two")}`,
        ),
      )
      .join(""),
};

export const Wrap: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      "kd-d-flex kd-flex-wrap kd-gap-2",
      Array.from({ length: 12 }, (_, index) => chip(`item ${index + 1}`)).join(""),
    ),
};

export const GrowShrink: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      "kd-d-flex kd-gap-2",
      `<div class="kd-grow-1">${chip(".kd-grow-1")}</div><div class="kd-grow-0">${chip(
        ".kd-grow-0",
      )}</div>`,
    ),
};

export const Order: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      "kd-d-flex kd-gap-2",
      `<div class="kd-order-last">${chip(".kd-order-last")}</div><div>${chip(
        "source order 2",
      )}</div><div class="kd-order-first">${chip(".kd-order-first")}</div>`,
    ),
};

export const Center: Story = {
  tags: ["!dev"],
  render: () => frame("kd-flex-center", chip(".kd-flex-center")),
};

export const Flex: Story = {
  args: {
    direction: "row",
    justify: "start",
    items: "start",
    wrap: "wrap",
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    justify: {
      control: "select",
      options: ["start", "end", "center", "between", "around", "evenly"],
    },
    items: {
      control: "select",
      options: ["start", "end", "center", "baseline", "stretch"],
    },
    wrap: { control: "inline-radio", options: ["wrap", "nowrap", "wrap-reverse"] },
  },
  render: ({ direction, justify, items, wrap }) =>
    frame(
      `kd-d-flex kd-flex-${direction} kd-justify-${justify} kd-items-${items} kd-flex-${wrap} kd-gap-2`,
      `${chip("one")}${chip("two")}${chip("three")}`,
    ),
};

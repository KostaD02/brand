import type { Meta, StoryObj } from "@storybook/html-vite";

interface ContainerArgs {
  tier: "container" | "container-xxs" | "container-xs" | "container-sm" | "container-md";
  flush: boolean;
  gutter: "none" | "0" | "1" | "2" | "3" | "4" | "5";
}

const meta: Meta<ContainerArgs> = {
  title: "Layout/Container",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<ContainerArgs>;

const box = (label: string) =>
  `<div style="padding: var(--kd-space-2); text-align: center; background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-primary);">${label}</div>`;

const rail = (inner: string) =>
  `<div style="background: var(--kd-bg-surface); border-block: 1px dashed var(--kd-border-strong); margin-bottom: var(--kd-space-2);">${inner}</div>`;

export const Example: Story = {
  tags: ["!dev"],
  render: () => rail(`<div class="kd-container">${box(".kd-container")}</div>`),
};

export const Tiers: Story = {
  tags: ["!dev"],
  render: () =>
    ["xxs", "sm", "lg", "xl"]
      .map((tier) =>
        rail(`<div class="kd-container-${tier}">${box(`.kd-container-${tier}`)}</div>`),
      )
      .join(""),
};

export const Fluid: Story = {
  tags: ["!dev"],
  render: () =>
    rail(`<div class="kd-container--fluid">${box(".kd-container--fluid")}</div>`) +
    rail(
      `<div class="kd-container">${box(".kd-container (capped, for comparison)")}</div>`,
    ),
};

export const Flush: Story = {
  tags: ["!dev"],
  render: () =>
    rail(`<div class="kd-container">${box("default gutter")}</div>`) +
    rail(
      `<div class="kd-container kd-container--flush">${box(".kd-container--flush")}</div>`,
    ),
};

export const Gutters: Story = {
  tags: ["!dev"],
  render: () =>
    ["1", "3", "5"]
      .map((step) =>
        rail(
          `<div class="kd-container kd-gutter-${step}">${box(`.kd-gutter-${step}`)}</div>`,
        ),
      )
      .join(""),
};

export const Measure: Story = {
  tags: ["!dev"],
  render: () =>
    ["xxs", "md", "xxxl"]
      .map((size) =>
        rail(`<div class="kd-measure-${size}">${box(`.kd-measure-${size}`)}</div>`),
      )
      .join(""),
};

export const Container: Story = {
  args: {
    tier: "container",
    flush: false,
    gutter: "none",
  },
  argTypes: {
    tier: {
      control: "select",
      options: [
        "container",
        "container-xxs",
        "container-xs",
        "container-sm",
        "container-md",
      ],
    },
    flush: { control: "boolean" },
    gutter: { control: "select", options: ["none", "0", "1", "2", "3", "4", "5"] },
  },
  render: ({ tier, flush, gutter }) => {
    const classes = [`kd-${tier}`];

    if (flush) {
      classes.push("kd-container--flush");
    }

    if (gutter !== "none") {
      classes.push(`kd-gutter-${gutter}`);
    }

    return rail(
      `<div class="${classes.join(" ")}">${box(
        classes.map((name) => `.${name}`).join(" "),
      )}</div>`,
    );
  },
};

import type { Meta, StoryObj } from "@storybook/html-vite";

interface SectionArgs {
  spacing: "default" | "tight" | "flush";
}

const meta: Meta<SectionArgs> = {
  title: "Layout/Section",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<SectionArgs>;

const box = (label: string) =>
  `<div style="padding: var(--kd-space-2); text-align: center; background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-primary);">${label}</div>`;

const band = (inner: string) =>
  `<div style="background: var(--kd-bg-surface); border-block: 1px dashed var(--kd-border-strong); margin-bottom: var(--kd-space-2);">${inner}</div>`;

export const Example: Story = {
  tags: ["!dev"],
  render: () => band(`<section class="kd-section">${box(".kd-section")}</section>`),
};

export const Spacing: Story = {
  tags: ["!dev"],
  render: () =>
    band(`<section class="kd-section">${box(".kd-section")}</section>`) +
    band(
      `<section class="kd-section kd-section--tight">${box(".kd-section--tight")}</section>`,
    ) +
    band(
      `<section class="kd-section kd-section--flush">${box(".kd-section--flush")}</section>`,
    ),
};

export const WithContainer: Story = {
  tags: ["!dev"],
  render: () =>
    band(`
<section class="kd-section">
  <div class="kd-container-md">
    ${box("section owns the vertical space, container owns the width")}
  </div>
</section>
`),
};

export const Section: Story = {
  args: {
    spacing: "default",
  },
  argTypes: {
    spacing: { control: "inline-radio", options: ["default", "tight", "flush"] },
  },
  render: ({ spacing }) => {
    const classes = ["kd-section"];

    if (spacing !== "default") {
      classes.push(`kd-section--${spacing}`);
    }

    return band(
      `<section class="${classes.join(" ")}">${box(
        classes.map((name) => `.${name}`).join(" "),
      )}</section>`,
    );
  },
};

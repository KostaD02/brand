import type { Meta, StoryObj } from "@storybook/html-vite";

interface FrameArgs {
  offset: string;
  radius: "sm" | "md" | "lg";
  tint: "line" | "soft" | "none";
}

const meta: Meta<FrameArgs> = {
  title: "Components/Frame",
};

export default meta;

type Story = StoryObj<FrameArgs>;

const tintValues: Record<FrameArgs["tint"], string> = {
  line: "var(--kd-accent-line)",
  soft: "var(--kd-accent-soft)",
  none: "transparent",
};

const plate = (width: string, height: string) =>
  `<div style="width: ${width}; height: ${height}; background: var(--kd-border-strong); border-radius: var(--kd-frame-radius);"></div>`;

const stage = (inner: string) =>
  `<div style="display: flex; align-items: flex-start; gap: var(--kd-space-5); padding: var(--kd-space-4);">${inner}</div>`;

export const Example: Story = {
  tags: ["!dev"],
  render: () => stage(`<figure class="kd-frame">${plate("13rem", "10rem")}</figure>`),
};

export const Hover: Story = {
  tags: ["!dev"],
  render: () => stage(`<figure class="kd-frame">${plate("13rem", "10rem")}</figure>`),
};

export const FitsContent: Story = {
  tags: ["!dev"],
  render: () =>
    stage(
      `<figure class="kd-frame">${plate("7rem", "9rem")}</figure>` +
        `<figure class="kd-frame">${plate("14rem", "5rem")}</figure>`,
    ),
};

export const Tint: Story = {
  tags: ["!dev"],
  render: () =>
    stage(
      `<figure class="kd-frame">${plate("9rem", "7rem")}</figure>` +
        `<figure class="kd-frame" style="--kd-frame-tint: transparent;">${plate(
          "9rem",
          "7rem",
        )}</figure>`,
    ),
};

export const Frame: Story = {
  args: {
    offset: "0.5rem",
    radius: "sm",
    tint: "line",
  },
  argTypes: {
    offset: { control: "text" },
    radius: { control: "inline-radio", options: ["sm", "md", "lg"] },
    tint: { control: "inline-radio", options: ["line", "soft", "none"] },
  },
  render: ({ offset, radius, tint }) =>
    stage(`
<figure
  class="kd-frame"
  style="--kd-frame-offset: ${offset}; --kd-frame-radius: var(--kd-radius-${radius}); --kd-frame-tint: ${tintValues[tint]};"
>
  ${plate("13rem", "10rem")}
</figure>
`),
};

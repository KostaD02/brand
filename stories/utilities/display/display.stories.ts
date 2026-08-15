import type { Meta, StoryObj } from "@storybook/html-vite";

interface DisplayArgs {
  display:
    | "block"
    | "inline"
    | "inline-block"
    | "flex"
    | "inline-flex"
    | "grid"
    | "inline-grid"
    | "contents"
    | "none";
}

const meta: Meta<DisplayArgs> = {
  title: "Utilities/Display",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<DisplayArgs>;

const chip = (label: string) =>
  `<span style="padding: var(--kd-space-1) var(--kd-space-2); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${label}</span>`;

export const Block: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-d-block">${chip(".kd-d-block")}</div>
<div class="kd-d-block">${chip(".kd-d-block")}</div>
`,
};

export const Inline: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-d-inline">${chip(".kd-d-inline")}</div>
<div class="kd-d-inline">${chip(".kd-d-inline")}</div>
`,
};

export const Flex: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-d-flex kd-gap-2">
  ${chip("one")}${chip("two")}${chip("three")}
</div>
`,
};

export const Grid: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-d-grid kd-gap-2" style="grid-template-columns: repeat(3, 1fr);">
  ${chip("one")}${chip("two")}${chip("three")}
</div>
`,
};

export const Responsive: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-d-flex kd-gap-2">
  <div class="kd-d-md-none">${chip("hidden at 768px and below")}</div>
  <div>${chip("always visible")}</div>
</div>
`,
};

export const VisuallyHidden: Story = {
  tags: ["!dev"],
  render: () => `
<p>
  There is a visually hidden heading before this paragraph. A screen reader announces it,
  the layout does not shift.
  <span class="kd-visually-hidden">Section: billing</span>
</p>
`,
};

export const Display: Story = {
  args: {
    display: "flex",
  },
  argTypes: {
    display: {
      control: "select",
      options: [
        "block",
        "inline",
        "inline-block",
        "flex",
        "inline-flex",
        "grid",
        "inline-grid",
        "contents",
        "none",
      ],
    },
  },
  render: ({ display }) => `
<div class="kd-d-${display} kd-gap-2">
  ${chip("one")}${chip("two")}${chip("three")}
</div>
`,
};

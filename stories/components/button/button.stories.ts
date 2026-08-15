import type { Meta, StoryObj } from "@storybook/html-vite";

interface ButtonArgs {
  label: string;
  variation: "primary" | "outline" | "ghost" | "danger";
  size: "sm" | "md" | "lg";
  block: boolean;
  disabled: boolean;
}

const meta: Meta<ButtonArgs> = {
  title: "Components/Button",
};

export default meta;

type Story = StoryObj<ButtonArgs>;

export const Variations: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-d-flex kd-gap-2 kd-flex-wrap">
  <button type="button" class="kd-btn kd-btn--primary">Primary</button>
  <button type="button" class="kd-btn kd-btn--outline">Outline</button>
  <button type="button" class="kd-btn kd-btn--ghost">Ghost</button>
  <button type="button" class="kd-btn kd-btn--danger">Danger</button>
</div>
`,
};

export const Outline: Story = {
  tags: ["!dev"],
  render: () => `
<a class="kd-btn kd-btn--outline" href="#">Resume</a>
`,
};

export const Sizes: Story = {
  tags: ["!dev"],
  render: () => `
<button type="button" class="kd-btn kd-btn--primary kd-btn--sm">Small</button>
<button type="button" class="kd-btn kd-btn--primary">Medium</button>
<button type="button" class="kd-btn kd-btn--primary kd-btn--lg">Large</button>
`,
};

export const Block: Story = {
  tags: ["!dev"],
  render: () => `
<button type="button" class="kd-btn kd-btn--primary kd-btn--block">Block</button>
`,
};

export const Icon: Story = {
  tags: ["!dev"],
  render: () => `
<button type="button" class="kd-btn kd-btn--primary">
  <span class="kd-btn__icon" aria-hidden="true">&rarr;</span>
  Continue
</button>

<button type="button" class="kd-btn kd-btn--ghost" aria-label="Next">
  <span class="kd-btn__icon" aria-hidden="true">&rarr;</span>
</button>
`,
};

export const Disabled: Story = {
  tags: ["!dev"],
  render: () => `
<button type="button" class="kd-btn kd-btn--primary" disabled>Disabled</button>
<a class="kd-btn kd-btn--ghost" role="button" aria-disabled="true">Disabled link</a>
`,
};

export const Anatomy: Story = {
  tags: ["!dev"],
  render: () => `
<button
  type="button"
  class="kd-btn"
  style="--kd-btn-color: var(--kd-warning); --kd-btn-border-color: var(--kd-warning); --kd-btn-pop-color: var(--kd-warning); --kd-btn-hover-color: var(--kd-text-inverse); --kd-btn-hover-bg: var(--kd-warning);"
>
  Warning
</button>
`,
};

export const Button: Story = {
  args: {
    label: "Button",
    variation: "primary",
    size: "md",
    block: false,
    disabled: false,
  },
  argTypes: {
    label: { control: "text" },
    variation: {
      control: "inline-radio",
      options: ["primary", "outline", "ghost", "danger"],
    },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    block: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  render: ({ label, variation, size, block, disabled }) => {
    const classes = ["kd-btn", `kd-btn--${variation}`];

    if (size !== "md") {
      classes.push(`kd-btn--${size}`);
    }

    if (block) {
      classes.push("kd-btn--block");
    }

    return `
<button type="button" class="${classes.join(" ")}"${disabled ? " disabled" : ""}>${label}</button>
`;
  },
};

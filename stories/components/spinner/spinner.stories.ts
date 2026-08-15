import type { Meta, StoryObj } from "@storybook/html-vite";

interface SpinnerArgs {
  size: "sm" | "md" | "lg";
  danger: boolean;
  speed: string;
}

const meta: Meta<SpinnerArgs> = {
  title: "Components/Spinner",
};

export default meta;

type Story = StoryObj<SpinnerArgs>;

export const Example: Story = {
  tags: ["!dev"],
  render: () => `
<span class="kd-spinner" role="status" aria-label="Loading"></span>
`,
};

export const Sizes: Story = {
  tags: ["!dev"],
  render: () => `
<span class="kd-spinner kd-spinner--sm" role="status" aria-label="Loading"></span>
<span class="kd-spinner" role="status" aria-label="Loading"></span>
<span class="kd-spinner kd-spinner--lg" role="status" aria-label="Loading"></span>
`,
};

export const Danger: Story = {
  tags: ["!dev"],
  render: () => `
<span class="kd-spinner kd-spinner--danger" role="status" aria-label="Retrying"></span>
`,
};

export const InButton: Story = {
  tags: ["!dev"],
  render: () => `
<button type="button" class="kd-btn kd-btn--primary" aria-busy="true">
  <span class="kd-btn__icon">
    <span class="kd-spinner kd-spinner--sm" style="--kd-spinner-color: currentcolor;"></span>
  </span>
  Saving
</button>
`,
};

export const Spinner: Story = {
  args: {
    size: "md",
    danger: false,
    speed: "0.7s",
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    danger: { control: "boolean" },
    speed: { control: "text" },
  },
  render: ({ size, danger, speed }) => {
    const classes = ["kd-spinner"];

    if (size !== "md") {
      classes.push(`kd-spinner--${size}`);
    }

    if (danger) {
      classes.push("kd-spinner--danger");
    }

    return `
<span
  class="${classes.join(" ")}"
  style="--kd-spinner-speed: ${speed};"
  role="status"
  aria-label="Loading"
></span>
`;
  },
};

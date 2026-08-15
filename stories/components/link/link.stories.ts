import type { Meta, StoryObj } from "@storybook/html-vite";

interface LinkArgs {
  label: string;
  variant: "default" | "anchor";
  active: boolean;
}

const meta: Meta<LinkArgs> = {
  title: "Components/Link",
};

export default meta;

type Story = StoryObj<LinkArgs>;

export const Example: Story = {
  tags: ["!dev"],
  render: () => `
<p>
  Every bare <a href="#">anchor</a> already carries the underline treatment, so
  <code>kd-link</code> is only needed where the element is not an anchor.
</p>
`,
};

export const Anchor: Story = {
  tags: ["!dev"],
  render: () => `
<a href="#" class="kd-link kd-link--anchor">Heading anchor</a>
`,
};

export const Active: Story = {
  tags: ["!dev"],
  render: () => `
<a href="#" class="kd-link kd-active">Active link</a>
`,
};

export const Skip: Story = {
  tags: ["!dev"],
  render: () => `
<div style="position: relative; height: 5rem;">
  <a href="#main" class="kd-skip">Skip to content</a>
  <p style="color: var(--kd-text-muted);">
    Tab into this frame. The skip link is off-screen until it receives focus.
  </p>
</div>
`,
};

export const Link: Story = {
  args: {
    label: "Link",
    variant: "default",
    active: false,
  },
  argTypes: {
    label: { control: "text" },
    variant: { control: "inline-radio", options: ["default", "anchor"] },
    active: { control: "boolean" },
  },
  render: ({ label, variant, active }) => {
    const classes = ["kd-link"];

    if (variant === "anchor") {
      classes.push("kd-link--anchor");
    }

    if (active) {
      classes.push("kd-active");
    }

    return `
<a href="#" class="${classes.join(" ")}">${label}</a>
`;
  },
};

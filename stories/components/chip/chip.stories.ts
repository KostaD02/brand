import type { Meta, StoryObj } from "@storybook/html-vite";

interface ChipArgs {
  variation: "default" | "accent" | "bare";
  pill: boolean;
  label: string;
}

const meta: Meta<ChipArgs> = {
  title: "Components/Chip",
};

export default meta;

type Story = StoryObj<ChipArgs>;

export const Example: Story = {
  tags: ["!dev"],
  render: () => `
<span class="kd-chip">CSS</span>
<span class="kd-chip">Sass</span>
<span class="kd-chip">Storybook</span>
`,
};

export const Accent: Story = {
  tags: ["!dev"],
  render: () => `
<span class="kd-chip">Draft</span>
<span class="kd-chip kd-chip--accent">Featured</span>
`,
};

export const Pill: Story = {
  tags: ["!dev"],
  render: () => `
<span class="kd-chip kd-chip--pill">TypeScript</span>
<span class="kd-chip kd-chip--pill kd-chip--accent">Vite</span>
`,
};

export const Bare: Story = {
  tags: ["!dev"],
  render: () => `
<span class="kd-chip kd-chip--bare">Nest.js</span>
<span class="kd-chip kd-chip--bare">Postgres</span>
<span class="kd-chip kd-chip--bare">Docker</span>
`,
};

export const AgainstStatusPill: Story = {
  tags: ["!dev"],
  render: () => `
<span class="kd-chip">CSS</span>
<span class="kd-status-pill kd-status-pill--active">
  <span class="kd-status-pill__dot"></span>
  Running
</span>
`,
};

export const Chip: Story = {
  args: {
    variation: "default",
    pill: false,
    label: "TypeScript",
  },
  argTypes: {
    variation: { control: "inline-radio", options: ["default", "accent", "bare"] },
    pill: { control: "boolean" },
    label: { control: "text" },
  },
  render: ({ variation, pill, label }) => {
    const classes = ["kd-chip"];

    if (variation !== "default") {
      classes.push(`kd-chip--${variation}`);
    }

    if (pill) {
      classes.push("kd-chip--pill");
    }

    return `
<span class="${classes.join(" ")}">${label}</span>
`;
  },
};

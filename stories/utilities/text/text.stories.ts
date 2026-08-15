import type { Meta, StoryObj } from "@storybook/html-vite";

interface TextArgs {
  size: string;
  weight: string;
  role: string;
  align: "start" | "center" | "end" | "justify";
}

const meta: Meta<TextArgs> = {
  title: "Utilities/Text",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<TextArgs>;

const line = (classes: string, label: string) =>
  `<p class="${classes}" style="margin: 0 0 var(--kd-space-1);">${label}</p>`;

export const Size: Story = {
  tags: ["!dev"],
  render: () =>
    ["xxs", "sm", "md", "lg", "xl", "heading"]
      .map((name) => line(`kd-fs-${name}`, `.kd-fs-${name}`))
      .join(""),
};

export const Weight: Story = {
  tags: ["!dev"],
  render: () =>
    ["regular", "medium", "semibold", "bold"]
      .map((name) => line(`kd-fw-${name}`, `.kd-fw-${name}`))
      .join(""),
};

export const Family: Story = {
  tags: ["!dev"],
  render: () =>
    ["primary", "secondary", "mono"]
      .map((name) => line(`kd-font-${name}`, `.kd-font-${name}: the quick brown fox`))
      .join(""),
};

export const Roles: Story = {
  tags: ["!dev"],
  render: () =>
    ["primary", "secondary", "muted", "bright"]
      .map((name) => line(`kd-text-${name}`, `.kd-text-${name}`))
      .join("") +
    ["accent", "success", "warning", "danger"]
      .map((name) => line(`kd-text-${name}`, `.kd-text-${name}`))
      .join(""),
};

export const Align: Story = {
  tags: ["!dev"],
  render: () =>
    ["start", "center", "end"]
      .map((name) =>
        line(
          `kd-text-${name}`,
          `<span style="font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-text-${name}</span>`,
        ),
      )
      .join(""),
};

export const Truncation: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-text-ellipsis" style="max-width: 18rem; border: 1px dashed var(--kd-border-strong); padding: var(--kd-space-1);">
  .kd-text-ellipsis truncates a single line that is far too long to fit its container
</div>
`,
};

export const Text: Story = {
  args: {
    size: "md",
    weight: "regular",
    role: "primary",
    align: "start",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["micro", "xxs", "xs", "sm", "md", "lg", "xl", "heading", "hero"],
    },
    weight: {
      control: "inline-radio",
      options: ["regular", "medium", "semibold", "bold"],
    },
    role: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "muted",
        "bright",
        "accent",
        "success",
        "warning",
        "danger",
      ],
    },
    align: { control: "inline-radio", options: ["start", "center", "end", "justify"] },
  },
  render: ({ size, weight, role, align }) =>
    line(
      `kd-fs-${size} kd-fw-${weight} kd-text-${role} kd-text-${align}`,
      "The quick brown fox jumps over the lazy dog",
    ),
};

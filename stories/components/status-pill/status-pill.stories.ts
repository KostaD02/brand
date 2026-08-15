import type { Meta, StoryObj } from "@storybook/html-vite";

interface PillArgs {
  label: string;
  variation: "idle" | "active" | "warning" | "danger" | "offline";
  dot: boolean;
}

const meta: Meta<PillArgs> = {
  title: "Components/Status Pill",
};

export default meta;

type Story = StoryObj<PillArgs>;

export const Example: Story = {
  tags: ["!dev"],
  render: () => `
<span class="kd-status-pill">Idle</span>
<span class="kd-status-pill kd-status-pill--active">Running</span>
<span class="kd-status-pill kd-status-pill--warning">Throttled</span>
<span class="kd-status-pill kd-status-pill--danger">Failed</span>
<span class="kd-status-pill kd-status-pill--offline">Offline</span>
`,
};

export const WithDot: Story = {
  tags: ["!dev"],
  render: () => `
<span class="kd-status-pill kd-status-pill--active">
  <span class="kd-status-pill__dot"></span>
  Running
</span>
<span class="kd-status-pill kd-status-pill--danger">
  <span class="kd-status-pill__dot"></span>
  Failed
</span>
<span class="kd-status-pill kd-status-pill--offline">
  <span class="kd-status-pill__dot"></span>
  Offline
</span>
`,
};

export const StatusPill: Story = {
  name: "Status Pill",
  args: {
    label: "Running",
    variation: "active",
    dot: true,
  },
  argTypes: {
    label: { control: "text" },
    variation: {
      control: "inline-radio",
      options: ["idle", "active", "warning", "danger", "offline"],
    },
    dot: { control: "boolean" },
  },
  render: ({ label, variation, dot }) => `
<span class="kd-status-pill kd-status-pill--${variation}">
  ${dot ? '<span class="kd-status-pill__dot"></span>' : ""}
  ${label}
</span>
`,
};

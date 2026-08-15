import type { Meta, StoryObj } from "@storybook/html-vite";

interface ToggleArgs {
  label: string;
  checked: boolean;
  disabled: boolean;
}

const meta: Meta<ToggleArgs> = {
  title: "Forms/Toggle",
};

export default meta;

type Story = StoryObj<ToggleArgs>;

export const Example: Story = {
  tags: ["!dev"],
  render: () => `
<label class="kd-toggle">
  <input class="kd-toggle__input" type="checkbox" />
  <span class="kd-toggle__track">
    <span class="kd-toggle__thumb"></span>
  </span>
  <span class="kd-toggle__label">Run on startup</span>
</label>
`,
};

export const Checked: Story = {
  tags: ["!dev"],
  render: () => `
<label class="kd-toggle">
  <input class="kd-toggle__input" type="checkbox" checked />
  <span class="kd-toggle__track">
    <span class="kd-toggle__thumb"></span>
  </span>
  <span class="kd-toggle__label">Enabled</span>
</label>
`,
};

export const Disabled: Story = {
  tags: ["!dev"],
  render: () => `
<label class="kd-toggle kd-toggle--disabled">
  <input class="kd-toggle__input" type="checkbox" disabled />
  <span class="kd-toggle__track">
    <span class="kd-toggle__thumb"></span>
  </span>
  <span class="kd-toggle__label">Unavailable</span>
</label>
`,
};

export const WithoutLabel: Story = {
  tags: ["!dev"],
  render: () => `
<label class="kd-toggle" aria-label="Run on startup">
  <input class="kd-toggle__input" type="checkbox" checked />
  <span class="kd-toggle__track">
    <span class="kd-toggle__thumb"></span>
  </span>
</label>
`,
};

export const Toggle: Story = {
  args: {
    label: "Run on startup",
    checked: false,
    disabled: false,
  },
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  render: ({ label, checked, disabled }) => `
<label class="kd-toggle${disabled ? " kd-toggle--disabled" : ""}">
  <input class="kd-toggle__input" type="checkbox"${checked ? " checked" : ""}${
    disabled ? " disabled" : ""
  } />
  <span class="kd-toggle__track">
    <span class="kd-toggle__thumb"></span>
  </span>
  ${label ? `<span class="kd-toggle__label">${label}</span>` : ""}
</label>
`,
};

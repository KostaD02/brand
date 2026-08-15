import type { Meta, StoryObj } from "@storybook/html-vite";

interface FieldArgs {
  label: string;
  hint: string;
  error: string;
}

const meta: Meta<FieldArgs> = {
  title: "Forms/Field",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<FieldArgs>;

export const Example: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-field" style="max-width: 24rem;">
  <label class="kd-field__label" for="account">Account name</label>
  <input class="kd-field__input" id="account" type="text" placeholder="username" />
</div>
`,
};

export const Hint: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-field" style="max-width: 24rem;">
  <label class="kd-field__label" for="token">API token</label>
  <input class="kd-field__input" id="token" type="text" placeholder="Paste your token" aria-describedby="token-hint" />
  <span class="kd-field__hint" id="token-hint">Stored locally and never sent anywhere.</span>
</div>
`,
};

export const Error: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-field" style="max-width: 24rem;">
  <label class="kd-field__label" for="token-bad">API token</label>
  <input
    class="kd-field__input kd-invalid"
    id="token-bad"
    type="text"
    value="not-a-token"
    aria-describedby="token-bad-error"
    aria-invalid="true"
  />
  <span class="kd-field__error" id="token-bad-error">That token is not valid.</span>
</div>
`,
};

export const WithIcon: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-field" style="max-width: 24rem;">
  <label class="kd-field__label" for="shared">
    Shared secret
    <span class="kd-field__icon">
      <svg viewBox="0 0 16 16" width="1.2em" height="1.2em" fill="currentColor" aria-hidden="true">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13ZM8 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm.9 3.5H7.1v5.5h1.8V7Z" />
      </svg>
    </span>
  </label>
  <input class="kd-field__input" id="shared" type="password" value="hunter2" />
</div>
`,
};

export const Spacing: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-field" style="max-width: 24rem; --kd-field-gap: 0.75rem; --kd-field-padding-y: 14px;">
  <label class="kd-field__label" for="roomy">Roomier field</label>
  <input class="kd-field__input" id="roomy" type="text" placeholder="username" />
  <span class="kd-field__hint">Gap and padding reassigned on the wrapper.</span>
</div>
`,
};

export const Field: Story = {
  args: {
    label: "Label",
    hint: "Helper text under the control.",
    error: "",
  },
  argTypes: {
    label: { control: "text" },
    hint: { control: "text" },
    error: { control: "text" },
  },
  render: ({ label, hint, error }) => `
<div class="kd-field" style="max-width: 24rem;">
  <label class="kd-field__label" for="playground">${label}</label>
  <input
    class="kd-field__input${error ? " kd-invalid" : ""}"
    id="playground"
    type="text"
    placeholder="username"${error ? '\n    aria-invalid="true"' : ""}
  />
  ${hint ? `<span class="kd-field__hint">${hint}</span>` : ""}
  ${error ? `<span class="kd-field__error">${error}</span>` : ""}
</div>
`,
};

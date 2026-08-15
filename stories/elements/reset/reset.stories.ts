import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
  title: "Elements/Reset",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj;

export const FormFonts: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-d-flex kd-gap-2 kd-flex-wrap kd-items-center">
  <input type="text" value="input" />
  <select><option>select</option></select>
  <textarea rows="1">textarea</textarea>
  <button type="button">button</button>
</div>
`,
};

export const Focus: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-d-flex kd-gap-3 kd-items-center">
  <a href="#">Tab to this link</a>
  <button type="button" class="kd-btn kd-btn--outline">and this button</button>
</div>
`,
};

export const Selection: Story = {
  tags: ["!dev"],
  render: () => `
<p>Select this sentence to see the selection colours.</p>
`,
};

export const Media: Story = {
  tags: ["!dev"],
  render: () => `
<div style="max-width: 12rem; border: 1px dashed var(--kd-border-strong);">
  <svg viewBox="0 0 200 80" style="background: var(--kd-accent-soft);">
    <rect width="200" height="80" fill="none" />
  </svg>
</div>
`,
};

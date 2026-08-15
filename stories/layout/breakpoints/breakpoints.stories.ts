import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
  title: "Layout/Breakpoints",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj;

const TIERS = [
  ["xxs", "350px"],
  ["xs", "480px"],
  ["sm", "600px"],
  ["md", "768px"],
  ["lg", "945px"],
  ["xl", "1080px"],
];

const box = (label: string) =>
  `<div style="padding: var(--kd-space-2); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${label}</div>`;

export const Hiding: Story = {
  tags: ["!dev"],
  render: () => `
<p class="kd-fs-xxs kd-mb-3">Narrow this panel or the browser. Each box disappears once the viewport reaches its tier.</p>
<div class="kd-d-flex kd-gap-2 kd-flex-wrap">
  ${TIERS.map(
    ([tier, width]) =>
      `<div class="kd-d-${tier}-none">${box(`.kd-d-${tier}-none (gone at ${width} and below)`)}</div>`,
  ).join("")}
</div>
`,
};

export const Tiers: Story = {
  tags: ["!dev"],
  render: () => `
<p class="kd-fs-xxs kd-mb-3">Container tiers cap from a tier upward, the opposite direction.</p>
${TIERS.map(
  ([tier, width]) => `
<div style="background: var(--kd-bg-surface); border-block: 1px dashed var(--kd-border-strong); margin-bottom: var(--kd-space-2);">
  <div class="kd-container-${tier}">${box(`.kd-container-${tier} (capped from ${width} up)`)}</div>
</div>`,
).join("")}
`,
};

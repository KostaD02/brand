import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
  title: "Tokens",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj;

const label = (text: string) =>
  `<span style="font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">${text}</span>`;

export const Palette: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-d-grid kd-gap-2" style="grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));">
  ${[
    "navy",
    "navy-dim",
    "navy-light",
    "navy-lightest",
    "slate",
    "slate-light",
    "slate-lightest",
    "ice",
    "green",
    "green-deep",
    "paper",
    "paper-dim",
    "steel",
    "amber",
    "amber-deep",
    "red",
    "red-deep",
  ]
    .map(
      (name) => `
  <div>
    <div style="height: 3rem; border: 1px solid var(--kd-border); border-radius: var(--kd-radius-sm); background: var(--kd-color-${name});"></div>
    ${label(`--kd-color-${name}`)}
  </div>`,
    )
    .join("")}
</div>
`,
};

export const Spacing: Story = {
  tags: ["!dev"],
  render: () =>
    ["0", "1", "2", "3", "4", "5"]
      .map(
        (step) => `
<div class="kd-d-flex kd-items-center kd-gap-3" style="margin-bottom: var(--kd-space-1);">
  <div style="width: 9rem;">${label(`--kd-space-${step}`)}</div>
  <div style="height: 1rem; width: var(--kd-space-${step}); background: var(--kd-accent); border-radius: 2px;"></div>
</div>`,
      )
      .join(""),
};

export const Radius: Story = {
  tags: ["!dev"],
  render: () =>
    `<div class="kd-d-flex kd-gap-3 kd-flex-wrap">` +
    ["sm", "md", "lg", "pill", "circle"]
      .map(
        (name) => `
  <div style="text-align: center;">
    <div style="width: 4rem; height: 4rem; background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); border-radius: var(--kd-radius-${name});"></div>
    ${label(`--kd-radius-${name}`)}
  </div>`,
      )
      .join("") +
    `</div>`,
};

export const Shadow: Story = {
  tags: ["!dev"],
  render: () =>
    `<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));">` +
    ["sm", "md", "lg", "side"]
      .map(
        (name) => `
  <div style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); border-radius: var(--kd-radius-md); box-shadow: var(--kd-shadow-${name});">
    ${label(`--kd-shadow-${name}`)}
  </div>`,
      )
      .join("") +
    `</div>`,
};

export const TypeScale: Story = {
  tags: ["!dev"],
  render: () =>
    ["xxs", "sm", "md", "lg", "xl", "xxl", "heading", "xxxl", "display"]
      .map(
        (name) => `
<div class="kd-d-flex kd-items-baseline kd-gap-3" style="margin-bottom: var(--kd-space-1);">
  <div style="width: 11rem; flex: none;">${label(`--kd-font-size-${name}`)}</div>
  <div style="font-size: var(--kd-font-size-${name}); line-height: 1.1;">Aa</div>
</div>`,
      )
      .join(""),
};

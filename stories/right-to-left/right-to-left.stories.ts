import type { Meta, StoryObj } from "@storybook/html-vite";

type Direction = "ltr" | "rtl";

interface RightToLeftArgs {
  direction: Direction;
}

const meta: Meta<RightToLeftArgs> = {
  title: "Right-to-left",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<RightToLeftArgs>;

const label = (text: string) =>
  `<p class="kd-small" style="margin-bottom: var(--kd-space-2); font-family: var(--kd-font-mono); color: var(--kd-text-muted);">${text}</p>`;

const sample = (suffix: string) => `
<div class="kd-d-grid kd-gap-3">
  <h3 class="kd-heading" style="--kd-heading-font-size: var(--kd-font-size-lg); --kd-heading-margin: 0;">Direction</h3>
  <ul class="kd-list" style="margin: 0;">
    <li>Logical properties</li>
    <li>One direction token</li>
  </ul>
  <div class="kd-field">
    <label class="kd-field__label" for="region-${suffix}">Region</label>
    <select class="kd-field__input" id="region-${suffix}">
      <option>Europe</option>
      <option>Asia</option>
    </select>
    <span class="kd-field__hint">The chevron sits on the inline end.</span>
  </div>
  <label class="kd-toggle">
    <input class="kd-toggle__input" type="checkbox" checked />
    <span class="kd-toggle__track">
      <span class="kd-toggle__thumb"></span>
    </span>
    <span class="kd-toggle__label">Enabled</span>
  </label>
  <blockquote style="margin: 0;">The border and the rounding follow the inline start.</blockquote>
</div>
`;

const panel = (direction: Direction, suffix: string, inner = sample(suffix)) => `
<div dir="${direction}" style="padding: var(--kd-space-3); border: 1px solid var(--kd-border); background: var(--kd-bg-surface);">
  ${label(`dir="${direction}"`)}
  ${inner}
</div>
`;

export const Mirror: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
  ${panel("ltr", "mirror-ltr")}
  ${panel("rtl", "mirror-rtl")}
</div>
`,
};

export const Island: Story = {
  tags: ["!dev"],
  render: () =>
    panel(
      "rtl",
      "island",
      `
<ul class="kd-list" style="margin: 0 0 var(--kd-space-3);">
  <li>Everything in this panel reads right to left</li>
  <li>The block below opts back out</li>
</ul>
<div dir="ltr" style="padding: var(--kd-space-3); border: 1px dashed var(--kd-border-strong);">
  ${label('dir="ltr"')}
  <ul class="kd-list" style="margin: 0 0 var(--kd-space-3);">
    <li>Marker back on the left</li>
  </ul>
  <label class="kd-toggle">
    <input class="kd-toggle__input" type="checkbox" checked />
    <span class="kd-toggle__track">
      <span class="kd-toggle__thumb"></span>
    </span>
    <span class="kd-toggle__label">Thumb travels right again</span>
  </label>
</div>
`,
    ),
};

export const RightToLeft: Story = {
  args: {
    direction: "rtl",
  },
  argTypes: {
    direction: { control: "inline-radio", options: ["ltr", "rtl"] },
  },
  render: ({ direction }) =>
    `<div style="max-width: 24rem;">${panel(direction, "playground")}</div>`,
};

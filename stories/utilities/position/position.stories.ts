import type { Meta, StoryObj } from "@storybook/html-vite";

interface PositionArgs {
  overflow: "auto" | "hidden" | "visible" | "scroll" | "clip";
}

const meta: Meta<PositionArgs> = {
  title: "Utilities/Position",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<PositionArgs>;

const tag = (label: string) =>
  `<span style="padding: var(--kd-space-1) var(--kd-space-2); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${label}</span>`;

export const Anchoring: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-pos-relative" style="height: 7rem; border: 1px dashed var(--kd-border-strong);">
  ${tag(".kd-pos-relative (parent)")}
  <div class="kd-pos-absolute kd-top-0 kd-right-0">${tag(".kd-top-0 .kd-right-0")}</div>
  <div class="kd-pos-absolute kd-bottom-0 kd-left-0">${tag(".kd-bottom-0 .kd-left-0")}</div>
</div>
`,
};

export const Inset: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-pos-relative" style="height: 7rem; border: 1px dashed var(--kd-border-strong);">
  <div class="kd-pos-absolute kd-inset-0 kd-flex-center kd-bg-accent-soft">
    ${tag(".kd-inset-0 fills the parent")}
  </div>
</div>
`,
};

export const ZIndex: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-pos-relative" style="height: 6rem; border: 1px dashed var(--kd-border-strong);">
  <div class="kd-pos-absolute kd-z-base kd-bg-elevated" style="top: 1rem; left: 1rem; padding: var(--kd-space-3);">${tag(".kd-z-base")}</div>
  <div class="kd-pos-absolute kd-z-modal kd-bg-accent-soft" style="top: 2rem; left: 3rem; padding: var(--kd-space-3);">${tag(".kd-z-modal")}</div>
</div>
`,
};

const externalIcon = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  <path d="M15 3h6v6" />
  <path d="M10 14 21 3" />
</svg>
`;

export const Stretch: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-card kd-card--lift" style="max-width: 22rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">
      <a href="#" class="kd-link kd-link--anchor kd-stretch kd-pos-static">Steam Idler</a>
    </div>
    <div class="kd-card__text">
      The title link is stretched, so the card is one hit area. The icon link below it
      carries .kd-z-raised and keeps its own.
    </div>
  </div>
  <div class="kd-card__footer">
    <span class="kd-status-pill kd-status-pill--active">
      <span class="kd-status-pill__dot"></span>
      Running
    </span>
    <a href="#" class="kd-icon-link kd-z-raised" aria-label="Open repository">${externalIcon}</a>
  </div>
</div>
`,
};

export const Overflow: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-overflow-auto" style="max-height: 6rem; max-width: 20rem; border: 1px dashed var(--kd-border-strong); padding: var(--kd-space-2);">
  <p style="margin: 0;">.kd-overflow-auto: this container scrolls once its content exceeds the
  available space. Overflow utilities also come as <code>kd-overflow-x-*</code> and
  <code>kd-overflow-y-*</code> for a single axis. Values are auto, hidden, visible,
  scroll and clip.</p>
</div>
`,
};

export const Position: Story = {
  args: {
    overflow: "auto",
  },
  argTypes: {
    overflow: {
      control: "inline-radio",
      options: ["auto", "hidden", "visible", "scroll", "clip"],
    },
  },
  render: ({ overflow }) => `
<div class="kd-overflow-${overflow}" style="max-height: 6rem; max-width: 20rem; border: 1px dashed var(--kd-border-strong); padding: var(--kd-space-2);">
  <p style="margin: 0;">.kd-overflow-${overflow}: content long enough to exceed the box so the
  chosen overflow behaviour is visible. Keep reading to be sure it spills past the edge.</p>
</div>
`,
};

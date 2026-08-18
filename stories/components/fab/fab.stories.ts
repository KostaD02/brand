import type { Meta, StoryObj } from "@storybook/html-vite";

interface FabArgs {
  active: boolean;
  size: string;
  offset: string;
  offsetInlineEnd: string;
  offsetBlockEnd: string;
}

const meta: Meta<FabArgs> = {
  title: "Components/Fab",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<FabArgs>;

const arrow = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M12 19V5" />
  <path d="M5 12l7-7 7 7" />
</svg>
`;

const fab = (classes: string, style = "") => `
<button type="button" class="${classes}" style="position: absolute; ${style}" aria-label="Back to top">
  ${arrow}
</button>
`;

const frame = (label: string, inner: string) => `
<div style="position: relative; height: 10rem; overflow: hidden; border: 1px solid var(--kd-border); background: var(--kd-bg-surface);">
  <span style="position: absolute; top: var(--kd-space-2); left: var(--kd-space-2); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">${label}</span>
  ${inner}
</div>
`;

const row = (inner: string) =>
  `<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(2, minmax(0, 1fr));">${inner}</div>`;

const bar = `
<div style="position: absolute; right: 0; bottom: 0; left: 0; display: flex; align-items: center; justify-content: flex-end; height: 2.5rem; padding-inline: var(--kd-space-4); border-top: 1px solid var(--kd-border); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">docked bar</div>
`;

export const Example: Story = {
  tags: ["!dev"],
  render: () => frame(".kd-fab.kd-active", fab("kd-fab kd-active")),
};

export const Visibility: Story = {
  tags: ["!dev"],
  render: () =>
    row(
      frame(".kd-fab", fab("kd-fab")) +
        frame(".kd-fab.kd-active", fab("kd-fab kd-active")),
    ),
};

export const Icon: Story = {
  tags: ["!dev"],
  render: () =>
    row(
      frame("at rest", fab("kd-fab kd-active")) +
        frame("hover colour", fab("kd-fab kd-active", "color: var(--kd-accent);")),
    ),
};

export const Glow: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      ".kd-animate-glow",
      fab(
        "kd-fab kd-active kd-animate-glow",
        "--kd-animate-duration: 3s; animation-iteration-count: infinite;",
      ),
    ),
};

export const Offsets: Story = {
  tags: ["!dev"],
  render: () =>
    row(
      frame("--kd-fab-offset", fab("kd-fab kd-active")) +
        frame(
          "inline-end and block-end",
          fab(
            "kd-fab kd-active",
            "--kd-fab-offset-inline-end: var(--kd-space-4); --kd-fab-offset-block-end: var(--kd-space-6);",
          ) + bar,
        ),
    ),
};

export const Fab: Story = {
  args: {
    active: true,
    size: "2.5rem",
    offset: "1.5rem",
    offsetInlineEnd: "",
    offsetBlockEnd: "",
  },
  argTypes: {
    active: { control: "boolean" },
    size: { control: "text" },
    offset: { control: "text" },
    offsetInlineEnd: { control: "text" },
    offsetBlockEnd: { control: "text" },
  },
  render: ({ active, size, offset, offsetInlineEnd, offsetBlockEnd }) => {
    const classes = ["kd-fab"];

    if (active) {
      classes.push("kd-active");
    }

    const style = [`--kd-fab-size: ${size}`, `--kd-fab-offset: ${offset}`];

    if (offsetInlineEnd) {
      style.push(`--kd-fab-offset-inline-end: ${offsetInlineEnd}`);
    }

    if (offsetBlockEnd) {
      style.push(`--kd-fab-offset-block-end: ${offsetBlockEnd}`);
    }

    return frame(
      classes.map((name) => `.${name}`).join(""),
      fab(classes.join(" "), `${style.join("; ")};`),
    );
  },
};

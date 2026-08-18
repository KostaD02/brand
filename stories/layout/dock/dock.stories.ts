import type { Meta, StoryObj } from "@storybook/html-vite";

type Breakpoint = "xxs" | "xs" | "sm" | "md" | "lg" | "xl";

interface DockArgs {
  side: "start" | "end";
  flow: boolean;
  flowBelow: Breakpoint | "none";
  line: string;
}

const meta: Meta<DockArgs> = {
  title: "Layout/Dock",
};

export default meta;

type Story = StoryObj<DockArgs>;

const frame = (height: string, inner: string) => `
<div style="position: relative; height: ${height}; overflow: hidden; transform: translate(0); border: 1px solid var(--kd-border); background: var(--kd-bg-surface);">
  ${inner}
</div>
`;

const icon = (paths: string) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">${paths}</svg>`;

const links = `
    <li>
      <a href="#" class="kd-icon-link" aria-label="Source">
        ${icon('<path d="m9 8-4 4 4 4M15 8l4 4-4 4" />')}
      </a>
    </li>
    <li>
      <a href="#" class="kd-icon-link" aria-label="Website">
        ${icon('<circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.4 2.6 2.4 15.4 0 18M12 3c-2.4 2.6-2.4 15.4 0 18" />')}
      </a>
    </li>
    <li>
      <a href="#" class="kd-icon-link" aria-label="E-mail">
        ${icon('<rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" />')}
      </a>
    </li>
`;

const content = `
  <div style="position: absolute; inset: 0; z-index: var(--kd-z-overlay); width: 60%; padding: var(--kd-space-3); background: var(--kd-bg-elevated);">
    <span style="font-size: var(--kd-font-size-xs); color: var(--kd-text-muted);">
      main, z-index: var(--kd-z-overlay)
    </span>
  </div>
`;

export const Example: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      "17rem",
      `
  <ul class="kd-dock kd-dock--start">
${links}
  </ul>
`,
    ),
};

export const Anchoring: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      "17rem",
      `
  <ul class="kd-dock kd-dock--start">
${links}
  </ul>
  <ul class="kd-dock kd-dock--end">
${links}
  </ul>
`,
    ),
};

export const Text: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      "20rem",
      `
  <ul class="kd-dock kd-dock--end">
    <li>
      <a href="mailto:hello@kd.dev" class="kd-dock__text">hello@kd.dev</a>
    </li>
  </ul>
`,
    ),
};

export const Flow: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      "5rem",
      `
  <ul class="kd-dock kd-dock--flow">
${links}
  </ul>
`,
    ),
};

export const FlowAtBreakpoint: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      "17rem",
      `
  <ul class="kd-dock kd-dock--start kd-dock--md-flow">
${links}
  </ul>
`,
    ),
};

export const Stacking: Story = {
  tags: ["!dev"],
  render: () => `
<div style="display: grid; gap: var(--kd-space-3);">
${frame(
  "17rem",
  `${content}
  <ul class="kd-dock kd-dock--start">
${links}
  </ul>
`,
)}
${frame(
  "17rem",
  `${content}
  <ul class="kd-dock kd-dock--start" style="--kd-dock-z: var(--kd-z-modal);">
${links}
  </ul>
`,
)}
</div>
`,
};

export const Dock: Story = {
  args: {
    side: "start",
    flow: false,
    flowBelow: "none",
    line: "90px",
  },
  argTypes: {
    side: { control: "inline-radio", options: ["start", "end"] },
    flow: { control: "boolean" },
    flowBelow: {
      control: "select",
      options: ["none", "xxs", "xs", "sm", "md", "lg", "xl"],
    },
    line: { control: "text" },
  },
  render: ({ side, flow, flowBelow, line }) => {
    const classes = ["kd-dock", `kd-dock--${side}`];

    if (flow) {
      classes.push("kd-dock--flow");
    }

    if (flowBelow !== "none") {
      classes.push(`kd-dock--${flowBelow}-flow`);
    }

    return frame(
      "24rem",
      `
  <ul class="${classes.join(" ")}" style="--kd-dock-line: ${line};">
${links}
    <li>
      <a href="mailto:hello@kd.dev" class="kd-dock__text">hello@kd.dev</a>
    </li>
  </ul>
`,
    );
  },
};

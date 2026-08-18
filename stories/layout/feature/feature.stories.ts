import type { Meta, StoryObj } from "@storybook/html-vite";

interface FeatureArgs {
  reverse: boolean;
  scrim: number;
  mediaWidth: string;
  contentGap: string;
}

const meta: Meta<FeatureArgs> = {
  title: "Layout/Feature",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<FeatureArgs>;

const artwork =
  "linear-gradient(135deg, var(--kd-accent) 0%, var(--kd-bg-elevated) 45%, var(--kd-bg-surface) 70%, var(--kd-accent-line) 100%)";

const stage = (inner: string) =>
  `<div style="display: grid; gap: var(--kd-space-5); padding: var(--kd-space-4); background: var(--kd-bg);">${inner}</div>`;

interface FeatureDemo {
  reverse?: boolean;
  style?: string;
}

const feature = ({ reverse = false, style = "" }: FeatureDemo = {}) => {
  const classes = ["kd-feature"];

  if (reverse) {
    classes.push("kd-feature--reverse");
  }

  return `
<article class="${classes.join(" ")}"${style ? ` style="${style}"` : ""}>
  <a
    href="#"
    class="kd-feature__media"
    style="background-image: ${artwork};"
    aria-label="EverREST screenshot"
  ></a>
  <aside class="kd-feature__content">
    <p class="kd-feature__eyebrow">Featured project</p>
    <a href="#" class="kd-feature__title">EverREST</a>
    <div class="kd-card">
      <div class="kd-card__body">
        <div class="kd-card__text">
          A REST scaffold that writes the boring half of a service for you: routes,
          validation and migrations, all from one schema file.
        </div>
      </div>
    </div>
    <ul class="kd-feature__tags">
      <li class="kd-chip kd-chip--bare">Nest.js</li>
      <li class="kd-chip kd-chip--bare">Postgres</li>
      <li class="kd-chip kd-chip--bare">Docker</li>
    </ul>
  </aside>
</article>
`;
};

const scrimPanel = (label: string, style: string) => `
<div>
  <article class="kd-feature" style="--kd-feature-media-height: 180px; ${style}">
    <span class="kd-feature__media" style="background-image: ${artwork};"></span>
  </article>
  <p class="kd-small" style="margin-top: var(--kd-space-2);">${label}</p>
</div>
`;

export const Example: Story = {
  tags: ["!dev"],
  render: () => stage(feature()),
};

export const Scrim: Story = {
  tags: ["!dev"],
  render: () =>
    stage(`
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--kd-space-4);">
  ${scrimPanel("At rest, opacity 0.5", "")}
  ${scrimPanel("Hovered, opacity 0", "--kd-feature-scrim-opacity: 0;")}
</div>
`),
};

export const Tags: Story = {
  tags: ["!dev"],
  render: () =>
    stage(`
<div style="max-width: 19rem; padding: var(--kd-space-3); background: var(--kd-bg-surface); border: 1px dashed var(--kd-border-strong);">
  <ul class="kd-feature__tags">
    <li class="kd-chip kd-chip--bare">Nest.js</li>
    <li class="kd-chip kd-chip--bare">Postgres</li>
    <li class="kd-chip kd-chip--bare">Docker</li>
    <li class="kd-chip kd-chip--bare">GitHub Actions</li>
  </ul>
</div>
`),
};

export const Reverse: Story = {
  tags: ["!dev"],
  render: () => stage(feature({ reverse: true })),
};

export const Feature: Story = {
  args: {
    reverse: false,
    scrim: 0.5,
    mediaWidth: "560px",
    contentGap: "0.625rem",
  },
  argTypes: {
    reverse: { control: "boolean" },
    scrim: { control: { type: "range", min: 0, max: 1, step: 0.05 } },
    mediaWidth: { control: "text" },
    contentGap: { control: "text" },
  },
  render: ({ reverse, scrim, mediaWidth, contentGap }) =>
    stage(
      feature({
        reverse,
        style: `--kd-feature-scrim-opacity: ${scrim}; --kd-feature-media-width: ${mediaWidth}; --kd-feature-content-gap: ${contentGap};`,
      }),
    ),
};

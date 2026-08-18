import type { Meta, StoryObj } from "@storybook/html-vite";

interface SplitArgs {
  columns: string;
  gap: string;
  align: string;
  reverse: boolean;
}

const meta: Meta<SplitArgs> = {
  title: "Layout/Split",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<SplitArgs>;

const frame = (inner: string, label = "") =>
  `<div style="padding: var(--kd-space-4) var(--kd-space-5); background: var(--kd-bg-surface); border-block: 1px dashed var(--kd-border-strong); margin-bottom: var(--kd-space-2);">${label ? `<p class="kd-small" style="margin: 0 0 var(--kd-space-3);">${label}</p>` : ""}${inner}</div>`;

const box = (label: string) =>
  `<div style="display: grid; place-items: center; width: 100%; padding: var(--kd-space-3); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-primary);">${label}</div>`;

const tab = (label: string, selected: boolean) => `
  <button
    type="button"
    class="kd-tabs__tab${selected ? " kd-active" : ""}"
    role="tab"
    aria-selected="${selected}"
  >${label}</button>`;

export const Example: Story = {
  tags: ["!dev"],
  render: () =>
    frame(`
<div class="kd-split">
  ${box("content")}
  ${box("aside")}
</div>
`),
};

export const Collapse: Story = {
  tags: ["!dev"],
  render: () =>
    [
      frame(
        `
<div class="kd-split">
  ${box("content")}
  ${box("aside")}
</div>
`,
        "kd-split, two columns at every width",
      ),
      frame(
        `
<div class="kd-split kd-split--md">
  ${box("content")}
  ${box("aside")}
</div>
`,
        "kd-split kd-split--md, one column at 768px and below",
      ),
    ].join(""),
};

export const Breakpoints: Story = {
  tags: ["!dev"],
  render: () =>
    [
      ["xl", "1080px"],
      ["md", "768px"],
      ["xs", "480px"],
    ]
      .map(([name, width]) =>
        frame(
          `
<div class="kd-split kd-split--${name}">
  ${box("content")}
  ${box("aside")}
</div>
`,
          `kd-split--${name}, stacks at ${width} and below`,
        ),
      )
      .join(""),
};

export const Ratios: Story = {
  tags: ["!dev"],
  render: () =>
    ["1fr 1fr", "2fr 1fr", "1fr 3fr"]
      .map((columns) =>
        frame(`
<div class="kd-split" style="--kd-split-columns: ${columns};">
  ${box(columns)}
  ${box("aside")}
</div>
`),
      )
      .join(""),
};

export const Align: Story = {
  tags: ["!dev"],
  render: () =>
    ["center", "start"]
      .map((align) =>
        frame(
          `
<div class="kd-split" style="--kd-split-columns: 1fr 3fr; --kd-split-align: ${align};">
  <div class="kd-tabs" role="tablist" aria-orientation="vertical" aria-label="Experience">
${tab("eToro", true)}
${tab("IT STEP", false)}
${tab("Educata", false)}
  </div>
  <div class="kd-prose">
    <p>
      The strip is as tall as its three tabs and the copy beside it is shorter, so the
      alignment keyword is the whole difference between the two reading positions.
    </p>
  </div>
</div>
`,
          `--kd-split-align: ${align}`,
        ),
      )
      .join(""),
};

export const Reverse: Story = {
  tags: ["!dev"],
  render: () =>
    frame(`
<div class="kd-split kd-split--reverse">
  ${box("first in the DOM")}
  ${box("second in the DOM")}
</div>
`),
};

export const Split: Story = {
  args: {
    columns: "3fr 2fr",
    gap: "3rem",
    align: "center",
    reverse: false,
  },
  argTypes: {
    columns: {
      control: "select",
      options: ["3fr 2fr", "2fr 3fr", "1fr 1fr", "2fr 1fr", "1fr"],
    },
    gap: { control: "text" },
    align: { control: "inline-radio", options: ["center", "start", "end", "stretch"] },
    reverse: { control: "boolean" },
  },
  render: ({ columns, gap, align, reverse }) => {
    const classes = ["kd-split"];

    if (reverse) {
      classes.push("kd-split--reverse");
    }

    return frame(`
<div
  class="${classes.join(" ")}"
  style="--kd-split-columns: ${columns}; --kd-split-gap: ${gap}; --kd-split-align: ${align};"
>
  ${box("first in the DOM")}
  ${box("second in the DOM")}
</div>
`);
  },
};

import type { Meta, StoryObj } from "@storybook/html-vite";

interface EmptyArgs {
  code: string;
  title: string;
  typewriter: boolean;
}

const meta: Meta<EmptyArgs> = {
  title: "Layout/Empty",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<EmptyArgs>;

const page = (inner: string) =>
  `<div style="background: var(--kd-bg-surface); border-block: 1px dashed var(--kd-border-strong);">${inner}</div>`;

const chrome = `<div style="display: flex; align-items: center; height: 3rem; padding-inline: var(--kd-space-3); background: var(--kd-bg-elevated); border-bottom: 1px dashed var(--kd-border-strong); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">fixed chrome, --kd-navbar-height tall</div>`;

export const Example: Story = {
  tags: ["!dev"],
  render: () =>
    page(`
<section class="kd-section kd-empty">
  <h3 class="kd-empty__code">404</h3>
  <h4 class="kd-empty__title">Page not found</h4>
  <a class="kd-btn kd-btn--primary" href="#">Navigate to home</a>
</section>
`),
};

export const Typewriter: Story = {
  tags: ["!dev"],
  render: () =>
    page(`
<section class="kd-section kd-empty">
  <h3 class="kd-empty__code">404</h3>
  <h4 class="kd-empty__title kd-typewriter" style="--kd-typewriter-steps: 14;">Page not found</h4>
  <a class="kd-btn kd-btn--primary" href="#">Navigate to home</a>
</section>
`),
};

export const FullHeight: Story = {
  tags: ["!dev"],
  render: () =>
    page(`
${chrome}
<section class="kd-section kd-h-viewport kd-empty" style="height: 16rem;">
  <h3 class="kd-empty__code">404</h3>
  <h4 class="kd-empty__title">Page not found</h4>
  <a class="kd-btn kd-btn--primary" href="#">Navigate to home</a>
</section>
`),
};

export const Empty: Story = {
  args: {
    code: "404",
    title: "Page not found",
    typewriter: true,
  },
  argTypes: {
    code: { control: "text" },
    title: { control: "text" },
    typewriter: { control: "boolean" },
  },
  render: ({ code, title, typewriter }) => {
    const classes = ["kd-empty__title"];

    if (typewriter) {
      classes.push("kd-typewriter");
    }

    const steps = typewriter ? ` style="--kd-typewriter-steps: ${title.length};"` : "";

    return page(`
<section class="kd-section kd-empty">
  <h3 class="kd-empty__code">${code}</h3>
  <h4 class="${classes.join(" ")}"${steps}>${title}</h4>
  <a class="kd-btn kd-btn--primary" href="#">Navigate to home</a>
</section>
`);
  },
};

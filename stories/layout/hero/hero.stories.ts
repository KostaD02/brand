import type { Meta, StoryObj } from "@storybook/html-vite";

interface HeroArgs {
  eyebrow: string;
  title: string;
  subtitle: string;
  animate: boolean;
}

const meta: Meta<HeroArgs> = {
  title: "Layout/Hero",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<HeroArgs>;

const frame = (inner: string) =>
  `<div style="padding: var(--kd-space-4) var(--kd-space-5); background: var(--kd-bg-surface); border-block: 1px dashed var(--kd-border-strong);">${inner}</div>`;

const lede =
  "I build interfaces and the design systems underneath them, in TypeScript and Sass.";

export const Example: Story = {
  tags: ["!dev"],
  render: () =>
    frame(`
<section class="kd-hero">
  <p class="kd-hero__eyebrow">Hi, my name is</p>
  <h1 class="kd-hero__title">Konstantine Datunishvili</h1>
  <h2 class="kd-hero__subtitle">I create websites.</h2>
  <p class="kd-hero__lede">${lede}</p>
</section>
`),
};

export const Titles: Story = {
  tags: ["!dev"],
  render: () =>
    frame(`
<section class="kd-hero">
  <h1 class="kd-hero__title">Konstantine Datunishvili</h1>
  <h2 class="kd-hero__subtitle">I create websites.</h2>
</section>
`),
};

export const Width: Story = {
  tags: ["!dev"],
  render: () =>
    frame(`
<section class="kd-hero kd-measure-xs">
  <p class="kd-hero__eyebrow">Hi, my name is</p>
  <h1 class="kd-hero__title">Konstantine Datunishvili</h1>
  <h2 class="kd-hero__subtitle">I create websites.</h2>
  <p class="kd-hero__lede">${lede}</p>
</section>
`),
};

export const Entry: Story = {
  tags: ["!dev"],
  render: () =>
    frame(`
<section class="kd-section kd-measure-xs kd-hero kd-stagger">
  <p class="kd-hero__eyebrow kd-animate-fade-up">Hi, my name is</p>
  <h1 class="kd-hero__title kd-animate-fade-up">Konstantine Datunishvili</h1>
  <h2 class="kd-hero__subtitle kd-animate-fade-up">I create websites.</h2>
  <p class="kd-hero__lede kd-animate-fade-up">${lede}</p>
</section>
`),
};

export const Hero: Story = {
  args: {
    eyebrow: "Hi, my name is",
    title: "Konstantine Datunishvili",
    subtitle: "I create websites.",
    animate: true,
  },
  argTypes: {
    eyebrow: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
    animate: { control: "boolean" },
  },
  render: ({ eyebrow, title, subtitle, animate }) => {
    const classes = ["kd-hero", "kd-measure-xs"];

    if (animate) {
      classes.push("kd-stagger");
    }

    const line = animate ? " kd-animate-fade-up" : "";

    return frame(`
<section class="${classes.join(" ")}">
  <p class="kd-hero__eyebrow${line}">${eyebrow}</p>
  <h1 class="kd-hero__title${line}">${title}</h1>
  <h2 class="kd-hero__subtitle${line}">${subtitle}</h2>
  <p class="kd-hero__lede${line}">${lede}</p>
</section>
`);
  },
};

import type { Meta, StoryObj } from "@storybook/html-vite";

interface NavbarArgs {
  variation: "default" | "scrolled" | "hidden" | "bare";
  blur: string;
  height: string;
}

const meta: Meta<NavbarArgs> = {
  title: "Components/Navbar",
  parameters: { layout: "fullscreen" },
};

export default meta;

type Story = StoryObj<NavbarArgs>;

const page = `<div style="position: absolute; inset: 0; background: repeating-linear-gradient(180deg, var(--kd-accent-soft) 0 12px, transparent 12px 28px);"></div>`;

const frame = (inner: string, caption: string) => `
<div style="position: relative; height: 10rem; margin-bottom: var(--kd-space-2); overflow: hidden; border: 1px solid var(--kd-border);">
  ${page}
  ${inner}
  <p style="position: absolute; right: var(--kd-space-2); bottom: var(--kd-space-2); margin: 0; font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">${caption}</p>
</div>
`;

const brand = `
<a href="#" class="kd-navbar__brand" aria-label="Home">
  <span class="kd-logo">
    <span class="kd-logo__initial">K</span>
    <i class="kd-logo__side"></i>
    <i class="kd-logo__side"></i>
    <i class="kd-logo__side"></i>
  </span>
</a>`;

const menu = `
<ul class="kd-navbar__menu">
  <li><a href="#" class="kd-navbar__link">About</a></li>
  <li><a href="#" class="kd-navbar__link">Work</a></li>
  <li><a href="#" class="kd-navbar__link">Contact</a></li>
  <li><a href="#" class="kd-btn kd-btn--primary kd-btn--sm">Resume</a></li>
</ul>`;

export const Example: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      `
<header class="kd-navbar" style="position: absolute;">
  ${brand}
  ${menu}
</header>
`,
      ".kd-navbar",
    ),
};

export const Scrolled: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      `
<header class="kd-navbar kd-navbar--scrolled" style="position: absolute;">
  ${brand}
  ${menu}
</header>
`,
      ".kd-navbar--scrolled",
    ),
};

export const Hidden: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      `
<header class="kd-navbar" style="position: absolute;">
  ${brand}
  ${menu}
</header>
`,
      ".kd-navbar",
    ) +
    frame(
      `
<header class="kd-navbar kd-navbar--hidden" style="position: absolute;">
  ${brand}
  ${menu}
</header>
`,
      ".kd-navbar--hidden",
    ),
};

export const Bare: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      `
<header class="kd-navbar kd-navbar--bare" style="position: absolute;">
  ${brand}
  ${menu}
</header>
`,
      ".kd-navbar--bare",
    ),
};

export const Responsive: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      `
<header class="kd-navbar" style="position: absolute;">
  ${brand}
  <ul class="kd-navbar__menu kd-d-md-none">
    <li><a href="#" class="kd-navbar__link">About</a></li>
    <li><a href="#" class="kd-navbar__link">Work</a></li>
    <li><a href="#" class="kd-navbar__link">Contact</a></li>
    <li><a href="#" class="kd-btn kd-btn--primary kd-btn--sm">Resume</a></li>
  </ul>
  <button
    type="button"
    class="kd-burger kd-d-none kd-d-md-block"
    aria-expanded="false"
    aria-label="Menu"
  >
    <span class="kd-burger__bar"></span>
    <span class="kd-burger__bar"></span>
  </button>
</header>
`,
      "narrow the window to swap them",
    ),
};

export const ActiveLink: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      `
<header class="kd-navbar" style="position: absolute;">
  ${brand}
  <ul class="kd-navbar__menu">
    <li><a href="#" class="kd-navbar__link kd-active" aria-current="page">About</a></li>
    <li><a href="#" class="kd-navbar__link">Work</a></li>
    <li><a href="#" class="kd-navbar__link">Contact</a></li>
    <li><a href="#" class="kd-btn kd-btn--primary kd-btn--sm">Resume</a></li>
  </ul>
</header>
`,
      ".kd-active on the first link",
    ),
};

export const Navbar: Story = {
  args: {
    variation: "default",
    blur: "3px",
    height: "80px",
  },
  argTypes: {
    variation: {
      control: "inline-radio",
      options: ["default", "scrolled", "hidden", "bare"],
    },
    blur: { control: "text" },
    height: { control: "text" },
  },
  render: ({ variation, blur, height }) => {
    const classes = ["kd-navbar"];

    if (variation !== "default") {
      classes.push(`kd-navbar--${variation}`);
    }

    return frame(
      `
<header
  class="${classes.join(" ")}"
  style="position: absolute; --kd-navbar-blur: ${blur}; --kd-navbar-height: ${height};"
>
  ${brand}
  ${menu}
</header>
`,
      classes.map((name) => `.${name}`).join(" "),
    );
  },
};

import type { Meta, StoryObj } from "@storybook/html-vite";

interface DrawerArgs {
  width: string;
  closing: boolean;
  blur: string;
}

const meta: Meta<DrawerArgs> = {
  title: "Components/Drawer",
};

export default meta;

type Story = StoryObj<DrawerArgs>;

const frame = (inner: string) => `
<div style="position: relative; height: 15rem; overflow: hidden; border: 1px solid var(--kd-border); background: var(--kd-bg-surface);">
  <div style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); line-height: 2; color: var(--kd-text-muted);">
    page content behind the drawer<br />
    page content behind the drawer<br />
    page content behind the drawer<br />
    page content behind the drawer
  </div>
  ${inner}
</div>
`;

const loop =
  "animation-duration: 1.6s; animation-iteration-count: infinite; animation-direction: alternate;";

export const Example: Story = {
  tags: ["!dev"],
  render: () =>
    frame(`
  <div class="kd-drawer" style="position: absolute;">
    <ul class="kd-drawer__panel">
      <li><a href="#" class="kd-navbar__link">About</a></li>
      <li><a href="#" class="kd-navbar__link">Work</a></li>
    </ul>
  </div>
`),
};

export const Menu: Story = {
  tags: ["!dev"],
  render: () =>
    frame(`
  <div class="kd-drawer" style="position: absolute;">
    <ul class="kd-drawer__panel">
      <li><a href="#" class="kd-navbar__link">About</a></li>
      <li><a href="#" class="kd-navbar__link">Experience</a></li>
      <li><a href="#" class="kd-navbar__link">Work</a></li>
      <li><a href="#" class="kd-navbar__link">Contact</a></li>
      <li><a href="#" class="kd-btn kd-btn--primary kd-btn--sm">Resume</a></li>
    </ul>
  </div>
`),
};

export const Closing: Story = {
  tags: ["!dev"],
  render: () =>
    frame(`
  <div class="kd-drawer kd-drawer--closing" style="position: absolute; ${loop}">
    <ul class="kd-drawer__panel" style="${loop}">
      <li><a href="#" class="kd-navbar__link">About</a></li>
      <li><a href="#" class="kd-navbar__link">Work</a></li>
    </ul>
  </div>
`),
};

export const Drawer: Story = {
  args: {
    width: "min(65vw, 300px)",
    closing: false,
    blur: "3px",
  },
  argTypes: {
    width: { control: "text" },
    closing: { control: "boolean" },
    blur: { control: "text" },
  },
  render: ({ width, closing, blur }) => {
    const classes = ["kd-drawer"];

    if (closing) {
      classes.push("kd-drawer--closing");
    }

    const style = [
      "position: absolute;",
      `--kd-drawer-width: ${width};`,
      `--kd-drawer-blur: ${blur};`,
      closing ? loop : "",
    ].join(" ");

    return frame(`
  <div class="${classes.join(" ")}" style="${style}">
    <ul class="kd-drawer__panel" style="${closing ? loop : ""}">
      <li><a href="#" class="kd-navbar__link">About</a></li>
      <li><a href="#" class="kd-navbar__link">Work</a></li>
      <li><a href="#" class="kd-btn kd-btn--primary kd-btn--sm">Resume</a></li>
    </ul>
  </div>
`);
  },
};

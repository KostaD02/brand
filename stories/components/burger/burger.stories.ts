import type { Meta, StoryObj } from "@storybook/html-vite";

interface BurgerArgs {
  expanded: boolean;
  size: string;
  color: string;
}

const meta: Meta<BurgerArgs> = {
  title: "Components/Burger",
};

export default meta;

type Story = StoryObj<BurgerArgs>;

export const Example: Story = {
  tags: ["!dev"],
  render: () => `
<button type="button" class="kd-burger" aria-expanded="false" aria-label="Menu">
  <span class="kd-burger__bar"></span>
  <span class="kd-burger__bar"></span>
</button>
`,
};

export const Open: Story = {
  tags: ["!dev"],
  render: () => `
<button type="button" class="kd-burger" aria-expanded="true" aria-label="Menu">
  <span class="kd-burger__bar"></span>
  <span class="kd-burger__bar"></span>
</button>
`,
};

export const InNavbar: Story = {
  tags: ["!dev"],
  render: () => `
<div style="position: relative; height: 8rem; overflow: hidden; border: 1px solid var(--kd-border);">
  <header class="kd-navbar" style="position: absolute;">
    <a href="#" class="kd-navbar__brand" aria-label="Home">
      <span class="kd-logo">
        <span class="kd-logo__initial">K</span>
        <i class="kd-logo__side"></i>
        <i class="kd-logo__side"></i>
        <i class="kd-logo__side"></i>
      </span>
    </a>
    <button type="button" class="kd-burger" aria-expanded="false" aria-label="Menu">
      <span class="kd-burger__bar"></span>
      <span class="kd-burger__bar"></span>
    </button>
  </header>
</div>
`,
};

export const Burger: Story = {
  args: {
    expanded: false,
    size: "30px",
    color: "var(--kd-accent)",
  },
  argTypes: {
    expanded: { control: "boolean" },
    size: { control: "text" },
    color: { control: "text" },
  },
  render: ({ expanded, size, color }) => `
<button
  type="button"
  class="kd-burger"
  style="--kd-burger-size: ${size}; --kd-burger-color: ${color};"
  aria-expanded="${expanded}"
  aria-label="Menu"
>
  <span class="kd-burger__bar"></span>
  <span class="kd-burger__bar"></span>
</button>
`,
};

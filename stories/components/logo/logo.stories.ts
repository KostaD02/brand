import type { Meta, StoryObj } from "@storybook/html-vite";

interface LogoArgs {
  initial: string;
  width: string;
  bar: string;
  color: string;
}

const meta: Meta<LogoArgs> = {
  title: "Components/Logo",
};

export default meta;

type Story = StoryObj<LogoArgs>;

const logo = (style: string, initial = "K") => `
<span class="kd-logo" style="${style}" role="img" aria-label="Konstantine Datunishvili">
  <span class="kd-logo__initial">${initial}</span>
  <i class="kd-logo__side"></i>
  <i class="kd-logo__side"></i>
  <i class="kd-logo__side"></i>
</span>
`;

const row = (inner: string) =>
  `<div class="kd-d-flex kd-items-center kd-gap-4">${inner}</div>`;

export const Example: Story = {
  tags: ["!dev"],
  render: () => logo(""),
};

export const Sizes: Story = {
  tags: ["!dev"],
  render: () =>
    row(
      logo("--kd-logo-width: 28px; --kd-logo-bar: 3px;") +
        logo("") +
        logo("--kd-logo-width: 90px; --kd-logo-bar: 7px;"),
    ),
};

export const Colour: Story = {
  tags: ["!dev"],
  render: () =>
    row(
      logo("") +
        logo("--kd-logo-color: var(--kd-text-primary);") +
        logo("--kd-logo-color: var(--kd-text-muted);"),
    ),
};

export const AsLink: Story = {
  tags: ["!dev"],
  render: () => `
<a href="#" class="kd-logo" aria-label="Home">
  <span class="kd-logo__initial">K</span>
  <i class="kd-logo__side"></i>
  <i class="kd-logo__side"></i>
  <i class="kd-logo__side"></i>
</a>
`,
};

export const Logo: Story = {
  args: {
    initial: "K",
    width: "45px",
    bar: "4px",
    color: "#64ffda",
  },
  argTypes: {
    initial: { control: "text" },
    width: { control: "text" },
    bar: { control: "text" },
    color: { control: "color" },
  },
  render: ({ initial, width, bar, color }) =>
    logo(
      `--kd-logo-width: ${width}; --kd-logo-bar: ${bar}; --kd-logo-color: ${color};`,
      initial,
    ),
};

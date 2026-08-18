import type { Meta, StoryObj } from "@storybook/html-vite";

interface IconLinkArgs {
  size: string;
  padding: string;
}

const meta: Meta<IconLinkArgs> = {
  title: "Components/Icon Link",
};

export default meta;

type Story = StoryObj<IconLinkArgs>;

const iconPaths = {
  mail: '<rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" />',
  external:
    '<path d="M14 4h6v6" /><path d="M20 4 10 14" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />',
  code: '<path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" />',
  bookmark: '<path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z" />',
};

const filledIcon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2Zm0-8h-2V7h2Z" />
</svg>`;

const strokedIcon = (paths: string, paint = "currentColor") =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="${paint}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

const iconLink = (label: string, icon: string) =>
  `<a href="#" class="kd-icon-link" aria-label="${label}">${icon}</a>`;

export const Example: Story = {
  tags: ["!dev"],
  render: () => iconLink("About this project", filledIcon),
};

export const Row: Story = {
  tags: ["!dev"],
  render: () =>
    iconLink("Email", strokedIcon(iconPaths.mail)) +
    iconLink("Source", strokedIcon(iconPaths.code)) +
    iconLink("Saved", strokedIcon(iconPaths.bookmark)) +
    iconLink("Live site", strokedIcon(iconPaths.external)),
};

export const CurrentColor: Story = {
  tags: ["!dev"],
  render: () =>
    iconLink("Follows the link colour", strokedIcon(iconPaths.external)) +
    iconLink("Frozen at a literal grey", strokedIcon(iconPaths.external, "#8892b0")),
};

export const InDock: Story = {
  tags: ["!dev"],
  render: () => `
<div style="position: relative; height: 16rem; overflow: hidden; border: 1px solid var(--kd-border);">
  <ul class="kd-dock kd-dock--start" style="position: absolute;">
    <li>${iconLink("Email", strokedIcon(iconPaths.mail))}</li>
    <li>${iconLink("Source", strokedIcon(iconPaths.code))}</li>
    <li>${iconLink("Live site", strokedIcon(iconPaths.external))}</li>
  </ul>
</div>
`,
};

export const IconLink: Story = {
  args: {
    size: "20px",
    padding: "0.625rem",
  },
  argTypes: {
    size: { control: "text" },
    padding: { control: "text" },
  },
  render: ({ size, padding }) => `
<a
  href="#"
  class="kd-icon-link"
  style="--kd-icon-link-size: ${size}; --kd-icon-link-padding: ${padding};"
  aria-label="Live site"
>
  ${strokedIcon(iconPaths.external)}
</a>
`,
};

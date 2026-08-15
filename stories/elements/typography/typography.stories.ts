import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
  title: "Elements/Typography",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj;

export const Headings: Story = {
  tags: ["!dev"],
  render: () => `
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
`,
};

export const Paragraph: Story = {
  tags: ["!dev"],
  render: () => `
<p>
  Paragraphs carry the secondary text colour and no margin, so vertical rhythm is set by
  the container rather than by the element.
</p>
<p><small>Small text drops to the muted colour.</small></p>
<p><span class="kd-small">.kd-small does the same on any element.</span></p>
`,
};

export const SectionHeading: Story = {
  tags: ["!dev"],
  render: () => `
<h2 class="kd-heading">Selected work</h2>
`,
};

export const Mono: Story = {
  tags: ["!dev"],
  render: () => `
<p class="kd-mono">1,024 items &middot; 99.9% uptime &middot; v1.0.0</p>
<p>1,024 items &middot; 99.9% uptime &middot; v1.0.0</p>
`,
};

export const List: Story = {
  tags: ["!dev"],
  render: () => `
<ul class="kd-list">
  <li>Angular, TypeScript, RxJS</li>
  <li>SCSS and design tokens</li>
  <li>Node, NestJS, PostgreSQL</li>
</ul>
`,
};

export const HeaderAnchor: Story = {
  tags: ["!dev"],
  render: () => `
<h3><a class="kd-header-anchor" href="#section">Linkable section heading</a></h3>
`,
};

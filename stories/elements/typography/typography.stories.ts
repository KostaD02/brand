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

export const SectionHeadingVariations: Story = {
  tags: ["!dev"],
  render: () => `
<div style="max-width: 22rem;">
  <h2 class="kd-heading kd-heading--bare kd-heading--center">Selected work</h2>
  <h2 class="kd-heading kd-heading--wrap">A section title long enough to need two lines</h2>
  <h2 class="kd-heading">A section title long enough to need two lines</h2>
</div>
`,
};

export const SectionHeadingCustom: Story = {
  tags: ["!dev"],
  render: () => `
<h2 class="kd-heading" style="--kd-heading-font-size: var(--kd-font-size-lg);">Recent posts</h2>
<h2
  class="kd-heading"
  style="--kd-heading-rule-width: 100%; --kd-heading-rule-gap: 0.75rem; --kd-heading-rule-color: var(--kd-border-strong);"
>
  Archive
</h2>
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

export const ListColumns: Story = {
  tags: ["!dev"],
  render: () => `
<ul class="kd-list" style="--kd-list-columns: repeat(2, minmax(100px, 200px));">
  <li>Angular</li>
  <li>TypeScript</li>
  <li>RxJS</li>
  <li>SCSS</li>
  <li>NestJS</li>
  <li>PostgreSQL</li>
</ul>
`,
};

export const ListPlain: Story = {
  tags: ["!dev"],
  render: () => `
<ul class="kd-list-plain kd-d-flex kd-flex-wrap kd-gap-2">
  <li><span class="kd-chip">TypeScript</span></li>
  <li><span class="kd-chip">Sass</span></li>
  <li><span class="kd-chip">Vite</span></li>
  <li><span class="kd-chip">Storybook</span></li>
</ul>
<ul class="kd-list-plain kd-d-flex kd-flex-wrap kd-gap-4 kd-mt-4">
  <li><a class="kd-link" href="#work">Work</a></li>
  <li><a class="kd-link" href="#writing">Writing</a></li>
  <li><a class="kd-link" href="#contact">Contact</a></li>
</ul>
`,
};

export const HeaderAnchor: Story = {
  tags: ["!dev"],
  render: () => `
<h3><a class="kd-header-anchor" href="#section">Linkable section heading</a></h3>
`,
};

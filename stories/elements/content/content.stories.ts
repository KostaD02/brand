import type { Meta, StoryObj } from "@storybook/html-vite";

const meta: Meta = {
  title: "Elements/Content",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj;

export const Blockquote: Story = {
  tags: ["!dev"],
  render: () => `
<blockquote>
  Design systems are not about the components. They are about the decisions the
  components encode.
</blockquote>
`,
};

export const Rule: Story = {
  tags: ["!dev"],
  render: () => `
<p>Before the rule.</p>
<hr />
<p>After the rule.</p>
`,
};

export const InlineCode: Story = {
  tags: ["!dev"],
  render: () => `
<p>Set the theme with <code>data-theme="light"</code> on the root element.</p>
`,
};

export const CodeBlock: Story = {
  tags: ["!dev"],
  render: () => `
<pre><code>@use "@kostad/brand/scss/api" as brand;

.thing {
  color: var(--kd-accent);
}</code></pre>
`,
};

export const Figure: Story = {
  tags: ["!dev"],
  render: () => `
<figure>
  <div style="height: 6rem; background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); border-radius: var(--kd-radius-md);"></div>
  <figcaption>A figure caption, muted and one step down in size.</figcaption>
</figure>
`,
};

export const Prose: Story = {
  tags: ["!dev"],
  render: () => `
<article class="kd-prose kd-measure-md">
  <h2>Long form</h2>
  <p>
    Inside <code>kd-prose</code> the body size steps up and the headings step down, so a
    written page reads at a comfortable size without fighting the page-level scale.
  </p>
  <blockquote>Quotes, rules and figures keep their element styling.</blockquote>
  <p>The measure utility caps the line length.</p>
</article>
`,
};

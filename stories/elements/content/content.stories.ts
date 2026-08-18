import type { Meta, StoryObj } from "@storybook/html-vite";

interface ContentArgs {
  prose: boolean;
  measure: "none" | "sm" | "md" | "lg";
  list: "markdown" | "authored";
}

const meta: Meta<ContentArgs> = {
  title: "Elements/Content",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<ContentArgs>;

const wideCode = `<pre><code>document.documentElement.setAttribute("data-theme", themes.at(-1));</code></pre>`;

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

export const ProseRhythm: Story = {
  tags: ["!dev"],
  render: () => `
<article class="kd-prose kd-measure-md">
  <h2>Release notes</h2>
  <p>
    Paragraphs arrive with no margin of their own, because an application screen wants to
    space its own children and not inherit gaps it never asked for.
  </p>
  <p>
    A written page wants the opposite, and <code>kd-prose</code> is where that decision
    flips: paragraphs and ordered lists take a bottom margin of one space step, so an
    article separates correctly with nothing wrapped around it.
  </p>
  <ol>
    <li>Wrap the article.</li>
    <li>Cap the line length.</li>
    <li>Write.</li>
  </ol>
  <p>
    The margin is on the bottom only, so the first child still sits flush with the top of
    the article.
  </p>
</article>
`,
};

export const ProseLists: Story = {
  tags: ["!dev"],
  render: () => `
<article class="kd-prose kd-measure-md">
  <p>A list nobody authored, emitted by a markdown pipeline:</p>
  <ul>
    <li>No class on the element</li>
    <li>Accent triangle drawn through <code>::marker</code></li>
  </ul>
  <p>The same shape written by hand with <code>kd-list</code>:</p>
  <ul class="kd-list">
    <li>Class on the element</li>
    <li>Accent triangle drawn with a pseudo-element</li>
  </ul>
</article>
`,
};

export const ProseOverflow: Story = {
  tags: ["!dev"],
  render: () => `
<div style="max-width: 26rem; padding: var(--kd-space-2); overflow: hidden; border: 1px solid var(--kd-border);">
  <p class="kd-small" style="margin-bottom: var(--kd-space-1);">
    Plain wrapper: the code widens its column and runs past the box.
  </p>
  <div style="display: grid; grid-template-columns: 4rem 1fr;">
    <span class="kd-small">Aside</span>
    <div>${wideCode}</div>
  </div>
  <p class="kd-small" style="margin-bottom: var(--kd-space-1);">
    Same grid with <code>kd-prose</code> on the column.
  </p>
  <div style="display: grid; grid-template-columns: 4rem 1fr;">
    <span class="kd-small">Aside</span>
    <div class="kd-prose">${wideCode}</div>
  </div>
</div>
`,
};

export const Content: Story = {
  args: {
    prose: true,
    measure: "md",
    list: "markdown",
  },
  argTypes: {
    prose: { control: "boolean" },
    measure: { control: "inline-radio", options: ["none", "sm", "md", "lg"] },
    list: { control: "inline-radio", options: ["markdown", "authored"] },
  },
  render: ({ prose, measure, list }) => {
    const classes = [];

    if (prose) {
      classes.push("kd-prose");
    }

    if (measure !== "none") {
      classes.push(`kd-measure-${measure}`);
    }

    return `
<article${classes.length ? ` class="${classes.join(" ")}"` : ""}>
  <h2>Shipping a theme</h2>
  <p>
    The reset, the elements layer and the utilities are three separate entries, so a
    project can take the parts it wants and leave the rest.
  </p>
  <p>Everything below is one article with no spacing markup in it at all.</p>
  <ul${list === "authored" ? ' class="kd-list"' : ""}>
    <li>Reset</li>
    <li>Elements</li>
    <li>Utilities</li>
  </ul>
  <p>Turn the class off to see what the container was doing for the page.</p>
</article>
`;
  },
};

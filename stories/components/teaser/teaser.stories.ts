import type { Meta, StoryObj } from "@storybook/html-vite";

interface TeaserArgs {
  title: string;
  text: string;
  tags: string;
}

const meta: Meta<TeaserArgs> = {
  title: "Components/Teaser",
};

export default meta;

type Story = StoryObj<TeaserArgs>;

export const Example: Story = {
  tags: ["!dev"],
  render: () => `
<article class="kd-teaser" style="max-width: 34rem;">
  <a href="#" class="kd-link kd-teaser__title">
    <h2>Animate elements when they enter view</h2>
  </a>
  <p class="kd-teaser__text">
    What the CSS animation-timeline view() function replaces, and the two declarations
    that do it.
  </p>
  <div class="kd-teaser__tags">
    <span class="kd-chip">CSS</span>
    <span class="kd-chip">Animation</span>
  </div>
  <time class="kd-teaser__meta" datetime="2026-01-02">Jan 02, 2026</time>
</article>
`,
};

export const Rail: Story = {
  tags: ["!dev"],
  render: () => `
<div style="display: grid; gap: var(--kd-space-3); max-width: 34rem;">
  <article class="kd-teaser">
    <a href="#" class="kd-link kd-teaser__title"><h2>One bar, two places</h2></a>
    <p class="kd-teaser__text">The teaser and the code block draw the same edge.</p>
  </article>
  <pre><code>.kd-teaser {
  @include rail;
}</code></pre>
</div>
`,
};

export const Tags: Story = {
  tags: ["!dev"],
  render: () => `
<article class="kd-teaser" style="max-width: 34rem;">
  <a href="#" class="kd-link kd-teaser__title"><h2>Container queries in practice</h2></a>
  <div class="kd-teaser__tags">
    <span class="kd-chip kd-chip--accent">Featured</span>
    <span class="kd-chip">CSS</span>
    <span class="kd-chip">Layout</span>
    <span class="kd-chip kd-chip--pill">5 min read</span>
  </div>
</article>
`,
};

export const Published: Story = {
  tags: ["!dev"],
  render: () => `
<article class="kd-teaser" style="max-width: 34rem;">
  <a href="#" class="kd-link kd-teaser__title"><h2>Reading a stack trace</h2></a>
  <time class="kd-teaser__meta" datetime="2025-11-18">Nov 18, 2025</time>
</article>
`,
};

export const List: Story = {
  tags: ["!dev"],
  render: () => `
<div style="display: grid; gap: var(--kd-space-4); max-width: 34rem;">
  <article class="kd-teaser">
    <a href="#" class="kd-link kd-teaser__title"><h2>Animate elements when they enter view</h2></a>
    <p class="kd-teaser__text">Two declarations instead of an intersection observer.</p>
    <time class="kd-teaser__meta" datetime="2026-01-02">Jan 02, 2026</time>
  </article>
  <article class="kd-teaser">
    <a href="#" class="kd-link kd-teaser__title"><h2>Container queries in practice</h2></a>
    <p class="kd-teaser__text">Where they beat a breakpoint, and where they do not.</p>
    <time class="kd-teaser__meta" datetime="2025-12-09">Dec 09, 2025</time>
  </article>
  <article class="kd-teaser">
    <a href="#" class="kd-link kd-teaser__title"><h2>Reading a stack trace</h2></a>
    <p class="kd-teaser__text">The three lines worth reading, and the rest you can skip.</p>
    <time class="kd-teaser__meta" datetime="2025-11-18">Nov 18, 2025</time>
  </article>
</div>
`,
};

export const Teaser: Story = {
  args: {
    title: "Animate elements when they enter view",
    text: "What the CSS animation-timeline view() function replaces.",
    tags: "CSS, Animation",
  },
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    tags: { control: "text" },
  },
  render: ({ title, text, tags }) => {
    const chips = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)
      .map((tag) => `<span class="kd-chip">${tag}</span>`)
      .join("\n    ");

    return `
<article class="kd-teaser" style="max-width: 34rem;">
  <a href="#" class="kd-link kd-teaser__title"><h2>${title}</h2></a>
  <p class="kd-teaser__text">${text}</p>
  ${chips ? `<div class="kd-teaser__tags">\n    ${chips}\n  </div>` : ""}
  <time class="kd-teaser__meta" datetime="2026-01-02">Jan 02, 2026</time>
</article>
`;
  },
};

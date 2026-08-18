import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Blockquote:()=>a,CodeBlock:()=>c,Content:()=>m,Figure:()=>l,InlineCode:()=>s,Prose:()=>u,ProseLists:()=>f,ProseOverflow:()=>p,ProseRhythm:()=>d,Rule:()=>o,__namedExportsOrder:()=>h,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r={title:`Elements/Content`,parameters:{layout:`padded`}},i=`<pre><code>document.documentElement.setAttribute("data-theme", themes.at(-1));</code></pre>`,a={tags:[`!dev`],render:()=>`
<blockquote>
  Design systems are not about the components. They are about the decisions the
  components encode.
</blockquote>
`},o={tags:[`!dev`],render:()=>`
<p>Before the rule.</p>
<hr />
<p>After the rule.</p>
`},s={tags:[`!dev`],render:()=>`
<p>Set the theme with <code>data-theme="light"</code> on the root element.</p>
`},c={tags:[`!dev`],render:()=>`
<pre><code>@use "@kostad/brand/scss/api" as brand;

.thing {
  color: var(--kd-accent);
}</code></pre>
`},l={tags:[`!dev`],render:()=>`
<figure>
  <div style="height: 6rem; background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); border-radius: var(--kd-radius-md);"></div>
  <figcaption>A figure caption, muted and one step down in size.</figcaption>
</figure>
`},u={tags:[`!dev`],render:()=>`
<article class="kd-prose kd-measure-md">
  <h2>Long form</h2>
  <p>
    Inside <code>kd-prose</code> the body size steps up and the headings step down, so a
    written page reads at a comfortable size without fighting the page-level scale.
  </p>
  <blockquote>Quotes, rules and figures keep their element styling.</blockquote>
  <p>The measure utility caps the line length.</p>
</article>
`},d={tags:[`!dev`],render:()=>`
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
`},f={tags:[`!dev`],render:()=>`
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
`},p={tags:[`!dev`],render:()=>`
<div style="max-width: 26rem; padding: var(--kd-space-2); overflow: hidden; border: 1px solid var(--kd-border);">
  <p class="kd-small" style="margin-bottom: var(--kd-space-1);">
    Plain wrapper: the code widens its column and runs past the box.
  </p>
  <div style="display: grid; grid-template-columns: 4rem 1fr;">
    <span class="kd-small">Aside</span>
    <div>${i}</div>
  </div>
  <p class="kd-small" style="margin-bottom: var(--kd-space-1);">
    Same grid with <code>kd-prose</code> on the column.
  </p>
  <div style="display: grid; grid-template-columns: 4rem 1fr;">
    <span class="kd-small">Aside</span>
    <div class="kd-prose">${i}</div>
  </div>
</div>
`},m={args:{prose:!0,measure:`md`,list:`markdown`},argTypes:{prose:{control:`boolean`},measure:{control:`inline-radio`,options:[`none`,`sm`,`md`,`lg`]},list:{control:`inline-radio`,options:[`markdown`,`authored`]}},render:({prose:e,measure:t,list:n})=>{let r=[];return e&&r.push(`kd-prose`),t!==`none`&&r.push(`kd-measure-${t}`),`
<article${r.length?` class="${r.join(` `)}"`:``}>
  <h2>Shipping a theme</h2>
  <p>
    The reset, the elements layer and the utilities are three separate entries, so a
    project can take the parts it wants and leave the rest.
  </p>
  <p>Everything below is one article with no spacing markup in it at all.</p>
  <ul${n===`authored`?` class="kd-list"`:``}>
    <li>Reset</li>
    <li>Elements</li>
    <li>Utilities</li>
  </ul>
  <p>Turn the class off to see what the container was doing for the page.</p>
</article>
`}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<blockquote>
  Design systems are not about the components. They are about the decisions the
  components encode.
</blockquote>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<p>Before the rule.</p>
<hr />
<p>After the rule.</p>
\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<p>Set the theme with <code>data-theme="light"</code> on the root element.</p>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<pre><code>@use "@kostad/brand/scss/api" as brand;

.thing {
  color: var(--kd-accent);
}</code></pre>
\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<figure>
  <div style="height: 6rem; background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); border-radius: var(--kd-radius-md);"></div>
  <figcaption>A figure caption, muted and one step down in size.</figcaption>
</figure>
\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<article class="kd-prose kd-measure-md">
  <h2>Long form</h2>
  <p>
    Inside <code>kd-prose</code> the body size steps up and the headings step down, so a
    written page reads at a comfortable size without fighting the page-level scale.
  </p>
  <blockquote>Quotes, rules and figures keep their element styling.</blockquote>
  <p>The measure utility caps the line length.</p>
</article>
\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
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
\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
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
\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div style="max-width: 26rem; padding: var(--kd-space-2); overflow: hidden; border: 1px solid var(--kd-border);">
  <p class="kd-small" style="margin-bottom: var(--kd-space-1);">
    Plain wrapper: the code widens its column and runs past the box.
  </p>
  <div style="display: grid; grid-template-columns: 4rem 1fr;">
    <span class="kd-small">Aside</span>
    <div>\${wideCode}</div>
  </div>
  <p class="kd-small" style="margin-bottom: var(--kd-space-1);">
    Same grid with <code>kd-prose</code> on the column.
  </p>
  <div style="display: grid; grid-template-columns: 4rem 1fr;">
    <span class="kd-small">Aside</span>
    <div class="kd-prose">\${wideCode}</div>
  </div>
</div>
\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    prose: true,
    measure: "md",
    list: "markdown"
  },
  argTypes: {
    prose: {
      control: "boolean"
    },
    measure: {
      control: "inline-radio",
      options: ["none", "sm", "md", "lg"]
    },
    list: {
      control: "inline-radio",
      options: ["markdown", "authored"]
    }
  },
  render: ({
    prose,
    measure,
    list
  }) => {
    const classes = [];
    if (prose) {
      classes.push("kd-prose");
    }
    if (measure !== "none") {
      classes.push(\`kd-measure-\${measure}\`);
    }
    return \`
<article\${classes.length ? \` class="\${classes.join(" ")}"\` : ""}>
  <h2>Shipping a theme</h2>
  <p>
    The reset, the elements layer and the utilities are three separate entries, so a
    project can take the parts it wants and leave the rest.
  </p>
  <p>Everything below is one article with no spacing markup in it at all.</p>
  <ul\${list === "authored" ? ' class="kd-list"' : ""}>
    <li>Reset</li>
    <li>Elements</li>
    <li>Utilities</li>
  </ul>
  <p>Turn the class off to see what the container was doing for the page.</p>
</article>
\`;
  }
}`,...m.parameters?.docs?.source}}},h=[`Blockquote`,`Rule`,`InlineCode`,`CodeBlock`,`Figure`,`Prose`,`ProseRhythm`,`ProseLists`,`ProseOverflow`,`Content`]})))()}export{u as a,d as c,g as d,s as i,o as l,c as n,f as o,l as r,p as s,a as t,n as u};
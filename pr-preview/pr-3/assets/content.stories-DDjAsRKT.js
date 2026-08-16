import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Blockquote:()=>i,CodeBlock:()=>s,Figure:()=>c,InlineCode:()=>o,Prose:()=>l,Rule:()=>a,__namedExportsOrder:()=>u,default:()=>r}),r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{r={title:`Elements/Content`,parameters:{layout:`padded`}},i={tags:[`!dev`],render:()=>`
<blockquote>
  Design systems are not about the components. They are about the decisions the
  components encode.
</blockquote>
`},a={tags:[`!dev`],render:()=>`
<p>Before the rule.</p>
<hr />
<p>After the rule.</p>
`},o={tags:[`!dev`],render:()=>`
<p>Set the theme with <code>data-theme="light"</code> on the root element.</p>
`},s={tags:[`!dev`],render:()=>`
<pre><code>@use "@kostad/brand/scss/api" as brand;

.thing {
  color: var(--kd-accent);
}</code></pre>
`},c={tags:[`!dev`],render:()=>`
<figure>
  <div style="height: 6rem; background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); border-radius: var(--kd-radius-md);"></div>
  <figcaption>A figure caption, muted and one step down in size.</figcaption>
</figure>
`},l={tags:[`!dev`],render:()=>`
<article class="kd-prose kd-measure-md">
  <h2>Long form</h2>
  <p>
    Inside <code>kd-prose</code> the body size steps up and the headings step down, so a
    written page reads at a comfortable size without fighting the page-level scale.
  </p>
  <blockquote>Quotes, rules and figures keep their element styling.</blockquote>
  <p>The measure utility caps the line length.</p>
</article>
`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<blockquote>
  Design systems are not about the components. They are about the decisions the
  components encode.
</blockquote>
\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<p>Before the rule.</p>
<hr />
<p>After the rule.</p>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<p>Set the theme with <code>data-theme="light"</code> on the root element.</p>
\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<pre><code>@use "@kostad/brand/scss/api" as brand;

.thing {
  color: var(--kd-accent);
}</code></pre>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<figure>
  <div style="height: 6rem; background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); border-radius: var(--kd-radius-md);"></div>
  <figcaption>A figure caption, muted and one step down in size.</figcaption>
</figure>
\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Blockquote`,`Rule`,`InlineCode`,`CodeBlock`,`Figure`,`Prose`]})))()}export{l as a,d as c,o as i,s as n,a as o,c as r,n as s,i as t};
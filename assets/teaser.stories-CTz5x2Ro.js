import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Example:()=>i,List:()=>c,Published:()=>s,Rail:()=>a,Tags:()=>o,Teaser:()=>l,__namedExportsOrder:()=>u,default:()=>r}),r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{r={title:`Components/Teaser`},i={tags:[`!dev`],render:()=>`
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
`},a={tags:[`!dev`],render:()=>`
<div style="display: grid; gap: var(--kd-space-3); max-width: 34rem;">
  <article class="kd-teaser">
    <a href="#" class="kd-link kd-teaser__title"><h2>One bar, two places</h2></a>
    <p class="kd-teaser__text">The teaser and the code block draw the same edge.</p>
  </article>
  <pre><code>.kd-teaser {
  @include rail;
}</code></pre>
</div>
`},o={tags:[`!dev`],render:()=>`
<article class="kd-teaser" style="max-width: 34rem;">
  <a href="#" class="kd-link kd-teaser__title"><h2>Container queries in practice</h2></a>
  <div class="kd-teaser__tags">
    <span class="kd-chip kd-chip--accent">Featured</span>
    <span class="kd-chip">CSS</span>
    <span class="kd-chip">Layout</span>
    <span class="kd-chip kd-chip--pill">5 min read</span>
  </div>
</article>
`},s={tags:[`!dev`],render:()=>`
<article class="kd-teaser" style="max-width: 34rem;">
  <a href="#" class="kd-link kd-teaser__title"><h2>Reading a stack trace</h2></a>
  <time class="kd-teaser__meta" datetime="2025-11-18">Nov 18, 2025</time>
</article>
`},c={tags:[`!dev`],render:()=>`
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
`},l={args:{title:`Animate elements when they enter view`,text:`What the CSS animation-timeline view() function replaces.`,tags:`CSS, Animation`},argTypes:{title:{control:`text`},text:{control:`text`},tags:{control:`text`}},render:({title:e,text:t,tags:n})=>{let r=n.split(`,`).map(e=>e.trim()).filter(Boolean).map(e=>`<span class="kd-chip">${e}</span>`).join(`
    `);return`
<article class="kd-teaser" style="max-width: 34rem;">
  <a href="#" class="kd-link kd-teaser__title"><h2>${e}</h2></a>
  <p class="kd-teaser__text">${t}</p>
  ${r?`<div class="kd-teaser__tags">\n    ${r}\n  </div>`:``}
  <time class="kd-teaser__meta" datetime="2026-01-02">Jan 02, 2026</time>
</article>
`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
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
\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div style="display: grid; gap: var(--kd-space-3); max-width: 34rem;">
  <article class="kd-teaser">
    <a href="#" class="kd-link kd-teaser__title"><h2>One bar, two places</h2></a>
    <p class="kd-teaser__text">The teaser and the code block draw the same edge.</p>
  </article>
  <pre><code>.kd-teaser {
  @include rail;
}</code></pre>
</div>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<article class="kd-teaser" style="max-width: 34rem;">
  <a href="#" class="kd-link kd-teaser__title"><h2>Container queries in practice</h2></a>
  <div class="kd-teaser__tags">
    <span class="kd-chip kd-chip--accent">Featured</span>
    <span class="kd-chip">CSS</span>
    <span class="kd-chip">Layout</span>
    <span class="kd-chip kd-chip--pill">5 min read</span>
  </div>
</article>
\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<article class="kd-teaser" style="max-width: 34rem;">
  <a href="#" class="kd-link kd-teaser__title"><h2>Reading a stack trace</h2></a>
  <time class="kd-teaser__meta" datetime="2025-11-18">Nov 18, 2025</time>
</article>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
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
\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Animate elements when they enter view",
    text: "What the CSS animation-timeline view() function replaces.",
    tags: "CSS, Animation"
  },
  argTypes: {
    title: {
      control: "text"
    },
    text: {
      control: "text"
    },
    tags: {
      control: "text"
    }
  },
  render: ({
    title,
    text,
    tags
  }) => {
    const chips = tags.split(",").map(tag => tag.trim()).filter(Boolean).map(tag => \`<span class="kd-chip">\${tag}</span>\`).join("\\n    ");
    return \`
<article class="kd-teaser" style="max-width: 34rem;">
  <a href="#" class="kd-link kd-teaser__title"><h2>\${title}</h2></a>
  <p class="kd-teaser__text">\${text}</p>
  \${chips ? \`<div class="kd-teaser__tags">\\n    \${chips}\\n  </div>\` : ""}
  <time class="kd-teaser__meta" datetime="2026-01-02">Jan 02, 2026</time>
</article>
\`;
  }
}`,...l.parameters?.docs?.source}}},u=[`Example`,`Rail`,`Tags`,`Published`,`List`,`Teaser`]})))()}export{o as a,a as i,c as n,d as o,s as r,n as s,i as t};
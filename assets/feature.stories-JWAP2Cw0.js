import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Example:()=>c,Feature:()=>f,Reverse:()=>d,Scrim:()=>l,Tags:()=>u,__namedExportsOrder:()=>p,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r={title:`Layout/Feature`,parameters:{layout:`fullscreen`}},i=`linear-gradient(135deg, var(--kd-accent) 0%, var(--kd-bg-elevated) 45%, var(--kd-bg-surface) 70%, var(--kd-accent-line) 100%)`,a=e=>`<div style="display: grid; gap: var(--kd-space-5); padding: var(--kd-space-4); background: var(--kd-bg);">${e}</div>`,o=({reverse:e=!1,style:t=``}={})=>{let n=[`kd-feature`];return e&&n.push(`kd-feature--reverse`),`
<article class="${n.join(` `)}"${t?` style="${t}"`:``}>
  <a
    href="#"
    class="kd-feature__media"
    style="background-image: ${i};"
    aria-label="EverREST screenshot"
  ></a>
  <aside class="kd-feature__content">
    <p class="kd-feature__eyebrow">Featured project</p>
    <a href="#" class="kd-feature__title">EverREST</a>
    <div class="kd-card">
      <div class="kd-card__body">
        <div class="kd-card__text">
          A REST scaffold that writes the boring half of a service for you: routes,
          validation and migrations, all from one schema file.
        </div>
      </div>
    </div>
    <ul class="kd-feature__tags">
      <li class="kd-chip kd-chip--bare">Nest.js</li>
      <li class="kd-chip kd-chip--bare">Postgres</li>
      <li class="kd-chip kd-chip--bare">Docker</li>
    </ul>
  </aside>
</article>
`},s=(e,t)=>`
<div>
  <article class="kd-feature" style="--kd-feature-media-height: 180px; ${t}">
    <span class="kd-feature__media" style="background-image: ${i};"></span>
  </article>
  <p class="kd-small" style="margin-top: var(--kd-space-2);">${e}</p>
</div>
`,c={tags:[`!dev`],render:()=>a(o())},l={tags:[`!dev`],render:()=>a(`
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--kd-space-4);">
  ${s(`At rest, opacity 0.5`,``)}
  ${s(`Hovered, opacity 0`,`--kd-feature-scrim-opacity: 0;`)}
</div>
`)},u={tags:[`!dev`],render:()=>a(`
<div style="max-width: 19rem; padding: var(--kd-space-3); background: var(--kd-bg-surface); border: 1px dashed var(--kd-border-strong);">
  <ul class="kd-feature__tags">
    <li class="kd-chip kd-chip--bare">Nest.js</li>
    <li class="kd-chip kd-chip--bare">Postgres</li>
    <li class="kd-chip kd-chip--bare">Docker</li>
    <li class="kd-chip kd-chip--bare">GitHub Actions</li>
  </ul>
</div>
`)},d={tags:[`!dev`],render:()=>a(o({reverse:!0}))},f={args:{reverse:!1,scrim:.5,mediaWidth:`560px`,contentGap:`0.625rem`},argTypes:{reverse:{control:`boolean`},scrim:{control:{type:`range`,min:0,max:1,step:.05}},mediaWidth:{control:`text`},contentGap:{control:`text`}},render:({reverse:e,scrim:t,mediaWidth:n,contentGap:r})=>a(o({reverse:e,style:`--kd-feature-scrim-opacity: ${t}; --kd-feature-media-width: ${n}; --kd-feature-content-gap: ${r};`}))},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => stage(feature())
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => stage(\`
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--kd-space-4);">
  \${scrimPanel("At rest, opacity 0.5", "")}
  \${scrimPanel("Hovered, opacity 0", "--kd-feature-scrim-opacity: 0;")}
</div>
\`)
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => stage(\`
<div style="max-width: 19rem; padding: var(--kd-space-3); background: var(--kd-bg-surface); border: 1px dashed var(--kd-border-strong);">
  <ul class="kd-feature__tags">
    <li class="kd-chip kd-chip--bare">Nest.js</li>
    <li class="kd-chip kd-chip--bare">Postgres</li>
    <li class="kd-chip kd-chip--bare">Docker</li>
    <li class="kd-chip kd-chip--bare">GitHub Actions</li>
  </ul>
</div>
\`)
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => stage(feature({
    reverse: true
  }))
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    reverse: false,
    scrim: 0.5,
    mediaWidth: "560px",
    contentGap: "0.625rem"
  },
  argTypes: {
    reverse: {
      control: "boolean"
    },
    scrim: {
      control: {
        type: "range",
        min: 0,
        max: 1,
        step: 0.05
      }
    },
    mediaWidth: {
      control: "text"
    },
    contentGap: {
      control: "text"
    }
  },
  render: ({
    reverse,
    scrim,
    mediaWidth,
    contentGap
  }) => stage(feature({
    reverse,
    style: \`--kd-feature-scrim-opacity: \${scrim}; --kd-feature-media-width: \${mediaWidth}; --kd-feature-content-gap: \${contentGap};\`
  }))
}`,...f.parameters?.docs?.source}}},p=[`Example`,`Scrim`,`Tags`,`Reverse`,`Feature`]})))()}export{n as a,u as i,d as n,m as o,l as r,c as t};
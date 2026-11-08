import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Island:()=>c,Mirror:()=>s,RightToLeft:()=>l,__namedExportsOrder:()=>u,default:()=>r}),r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{r={title:`Right-to-left`,parameters:{layout:`padded`}},i=e=>`<p class="kd-small" style="margin-bottom: var(--kd-space-2); font-family: var(--kd-font-mono); color: var(--kd-text-muted);">${e}</p>`,a=e=>`
<div class="kd-d-grid kd-gap-3">
  <h3 class="kd-heading" style="--kd-heading-font-size: var(--kd-font-size-lg); --kd-heading-margin: 0;">Direction</h3>
  <ul class="kd-list" style="margin: 0;">
    <li>Logical properties</li>
    <li>One direction token</li>
  </ul>
  <div class="kd-field">
    <label class="kd-field__label" for="region-${e}">Region</label>
    <select class="kd-field__input" id="region-${e}">
      <option>Europe</option>
      <option>Asia</option>
    </select>
    <span class="kd-field__hint">The chevron sits on the inline end.</span>
  </div>
  <label class="kd-toggle">
    <input class="kd-toggle__input" type="checkbox" checked />
    <span class="kd-toggle__track">
      <span class="kd-toggle__thumb"></span>
    </span>
    <span class="kd-toggle__label">Enabled</span>
  </label>
  <blockquote style="margin: 0;">The border and the rounding follow the inline start.</blockquote>
</div>
`,o=(e,t,n=a(t))=>`
<div dir="${e}" style="padding: var(--kd-space-3); border: 1px solid var(--kd-border); background: var(--kd-bg-surface);">
  ${i(`dir="${e}"`)}
  ${n}
</div>
`,s={tags:[`!dev`],render:()=>`
<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
  ${o(`ltr`,`mirror-ltr`)}
  ${o(`rtl`,`mirror-rtl`)}
</div>
`},c={tags:[`!dev`],render:()=>o(`rtl`,`island`,`
<ul class="kd-list" style="margin: 0 0 var(--kd-space-3);">
  <li>Everything in this panel reads right to left</li>
  <li>The block below opts back out</li>
</ul>
<div dir="ltr" style="padding: var(--kd-space-3); border: 1px dashed var(--kd-border-strong);">
  ${i(`dir="ltr"`)}
  <ul class="kd-list" style="margin: 0 0 var(--kd-space-3);">
    <li>Marker back on the left</li>
  </ul>
  <label class="kd-toggle">
    <input class="kd-toggle__input" type="checkbox" checked />
    <span class="kd-toggle__track">
      <span class="kd-toggle__thumb"></span>
    </span>
    <span class="kd-toggle__label">Thumb travels right again</span>
  </label>
</div>
`)},l={args:{direction:`rtl`},argTypes:{direction:{control:`inline-radio`,options:[`ltr`,`rtl`]}},render:({direction:e})=>`<div style="max-width: 24rem;">${o(e,`playground`)}</div>`},u=[`Mirror`,`Island`,`RightToLeft`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
  \${panel("ltr", "mirror-ltr")}
  \${panel("rtl", "mirror-rtl")}
</div>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => panel("rtl", "island", \`
<ul class="kd-list" style="margin: 0 0 var(--kd-space-3);">
  <li>Everything in this panel reads right to left</li>
  <li>The block below opts back out</li>
</ul>
<div dir="ltr" style="padding: var(--kd-space-3); border: 1px dashed var(--kd-border-strong);">
  \${label('dir="ltr"')}
  <ul class="kd-list" style="margin: 0 0 var(--kd-space-3);">
    <li>Marker back on the left</li>
  </ul>
  <label class="kd-toggle">
    <input class="kd-toggle__input" type="checkbox" checked />
    <span class="kd-toggle__track">
      <span class="kd-toggle__thumb"></span>
    </span>
    <span class="kd-toggle__label">Thumb travels right again</span>
  </label>
</div>
\`)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "rtl"
  },
  argTypes: {
    direction: {
      control: "inline-radio",
      options: ["ltr", "rtl"]
    }
  },
  render: ({
    direction
  }) => \`<div style="max-width: 24rem;">\${panel(direction, "playground")}</div>\`
}`,...l.parameters?.docs?.source}}}})))()}export{n as i,s as n,d as r,c as t};
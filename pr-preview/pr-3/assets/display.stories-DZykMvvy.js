import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Block:()=>a,Display:()=>d,Flex:()=>s,Grid:()=>c,Inline:()=>o,Responsive:()=>l,VisuallyHidden:()=>u,__namedExportsOrder:()=>f,default:()=>r}),r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r={title:`Utilities/Display`,parameters:{layout:`padded`}},i=e=>`<span style="padding: var(--kd-space-1) var(--kd-space-2); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${e}</span>`,a={tags:[`!dev`],render:()=>`
<div class="kd-d-block">${i(`.kd-d-block`)}</div>
<div class="kd-d-block">${i(`.kd-d-block`)}</div>
`},o={tags:[`!dev`],render:()=>`
<div class="kd-d-inline">${i(`.kd-d-inline`)}</div>
<div class="kd-d-inline">${i(`.kd-d-inline`)}</div>
`},s={tags:[`!dev`],render:()=>`
<div class="kd-d-flex kd-gap-2">
  ${i(`one`)}${i(`two`)}${i(`three`)}
</div>
`},c={tags:[`!dev`],render:()=>`
<div class="kd-d-grid kd-gap-2" style="grid-template-columns: repeat(3, 1fr);">
  ${i(`one`)}${i(`two`)}${i(`three`)}
</div>
`},l={tags:[`!dev`],render:()=>`
<div class="kd-d-flex kd-gap-2">
  <div class="kd-d-md-none">${i(`hidden at 768px and below`)}</div>
  <div>${i(`always visible`)}</div>
</div>
`},u={tags:[`!dev`],render:()=>`
<p>
  There is a visually hidden heading before this paragraph. A screen reader announces it,
  the layout does not shift.
  <span class="kd-visually-hidden">Section: billing</span>
</p>
`},d={args:{display:`flex`},argTypes:{display:{control:`select`,options:[`block`,`inline`,`inline-block`,`flex`,`inline-flex`,`grid`,`inline-grid`,`contents`,`none`]}},render:({display:e})=>`
<div class="kd-d-${e} kd-gap-2">
  ${i(`one`)}${i(`two`)}${i(`three`)}
</div>
`},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-block">\${chip(".kd-d-block")}</div>
<div class="kd-d-block">\${chip(".kd-d-block")}</div>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-inline">\${chip(".kd-d-inline")}</div>
<div class="kd-d-inline">\${chip(".kd-d-inline")}</div>
\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-flex kd-gap-2">
  \${chip("one")}\${chip("two")}\${chip("three")}
</div>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-grid kd-gap-2" style="grid-template-columns: repeat(3, 1fr);">
  \${chip("one")}\${chip("two")}\${chip("three")}
</div>
\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-flex kd-gap-2">
  <div class="kd-d-md-none">\${chip("hidden at 768px and below")}</div>
  <div>\${chip("always visible")}</div>
</div>
\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<p>
  There is a visually hidden heading before this paragraph. A screen reader announces it,
  the layout does not shift.
  <span class="kd-visually-hidden">Section: billing</span>
</p>
\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    display: "flex"
  },
  argTypes: {
    display: {
      control: "select",
      options: ["block", "inline", "inline-block", "flex", "inline-flex", "grid", "inline-grid", "contents", "none"]
    }
  },
  render: ({
    display
  }) => \`
<div class="kd-d-\${display} kd-gap-2">
  \${chip("one")}\${chip("two")}\${chip("three")}
</div>
\`
}`,...d.parameters?.docs?.source}}},f=[`Block`,`Inline`,`Flex`,`Grid`,`Responsive`,`VisuallyHidden`,`Display`]})))()}export{l as a,p as c,o as i,s as n,u as o,c as r,n as s,a as t};
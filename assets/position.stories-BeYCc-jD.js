import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Anchoring:()=>a,Inset:()=>o,Overflow:()=>c,Position:()=>l,ZIndex:()=>s,__namedExportsOrder:()=>u,default:()=>r}),r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{r={title:`Utilities/Position`,parameters:{layout:`padded`}},i=e=>`<span style="padding: var(--kd-space-1) var(--kd-space-2); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${e}</span>`,a={tags:[`!dev`],render:()=>`
<div class="kd-pos-relative" style="height: 7rem; border: 1px dashed var(--kd-border-strong);">
  ${i(`.kd-pos-relative (parent)`)}
  <div class="kd-pos-absolute kd-top-0 kd-right-0">${i(`.kd-top-0 .kd-right-0`)}</div>
  <div class="kd-pos-absolute kd-bottom-0 kd-left-0">${i(`.kd-bottom-0 .kd-left-0`)}</div>
</div>
`},o={tags:[`!dev`],render:()=>`
<div class="kd-pos-relative" style="height: 7rem; border: 1px dashed var(--kd-border-strong);">
  <div class="kd-pos-absolute kd-inset-0 kd-flex-center kd-bg-accent-soft">
    ${i(`.kd-inset-0 fills the parent`)}
  </div>
</div>
`},s={tags:[`!dev`],render:()=>`
<div class="kd-pos-relative" style="height: 6rem; border: 1px dashed var(--kd-border-strong);">
  <div class="kd-pos-absolute kd-z-base kd-bg-elevated" style="top: 1rem; left: 1rem; padding: var(--kd-space-3);">${i(`.kd-z-base`)}</div>
  <div class="kd-pos-absolute kd-z-modal kd-bg-accent-soft" style="top: 2rem; left: 3rem; padding: var(--kd-space-3);">${i(`.kd-z-modal`)}</div>
</div>
`},c={tags:[`!dev`],render:()=>`
<div class="kd-overflow-auto" style="max-height: 6rem; max-width: 20rem; border: 1px dashed var(--kd-border-strong); padding: var(--kd-space-2);">
  <p style="margin: 0;">.kd-overflow-auto: this container scrolls once its content exceeds the
  available space. Overflow utilities also come as <code>kd-overflow-x-*</code> and
  <code>kd-overflow-y-*</code> for a single axis. Values are auto, hidden, visible,
  scroll and clip.</p>
</div>
`},l={args:{overflow:`auto`},argTypes:{overflow:{control:`inline-radio`,options:[`auto`,`hidden`,`visible`,`scroll`,`clip`]}},render:({overflow:e})=>`
<div class="kd-overflow-${e}" style="max-height: 6rem; max-width: 20rem; border: 1px dashed var(--kd-border-strong); padding: var(--kd-space-2);">
  <p style="margin: 0;">.kd-overflow-${e}: content long enough to exceed the box so the
  chosen overflow behaviour is visible. Keep reading to be sure it spills past the edge.</p>
</div>
`},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-pos-relative" style="height: 7rem; border: 1px dashed var(--kd-border-strong);">
  \${tag(".kd-pos-relative (parent)")}
  <div class="kd-pos-absolute kd-top-0 kd-right-0">\${tag(".kd-top-0 .kd-right-0")}</div>
  <div class="kd-pos-absolute kd-bottom-0 kd-left-0">\${tag(".kd-bottom-0 .kd-left-0")}</div>
</div>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-pos-relative" style="height: 7rem; border: 1px dashed var(--kd-border-strong);">
  <div class="kd-pos-absolute kd-inset-0 kd-flex-center kd-bg-accent-soft">
    \${tag(".kd-inset-0 fills the parent")}
  </div>
</div>
\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-pos-relative" style="height: 6rem; border: 1px dashed var(--kd-border-strong);">
  <div class="kd-pos-absolute kd-z-base kd-bg-elevated" style="top: 1rem; left: 1rem; padding: var(--kd-space-3);">\${tag(".kd-z-base")}</div>
  <div class="kd-pos-absolute kd-z-modal kd-bg-accent-soft" style="top: 2rem; left: 3rem; padding: var(--kd-space-3);">\${tag(".kd-z-modal")}</div>
</div>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-overflow-auto" style="max-height: 6rem; max-width: 20rem; border: 1px dashed var(--kd-border-strong); padding: var(--kd-space-2);">
  <p style="margin: 0;">.kd-overflow-auto: this container scrolls once its content exceeds the
  available space. Overflow utilities also come as <code>kd-overflow-x-*</code> and
  <code>kd-overflow-y-*</code> for a single axis. Values are auto, hidden, visible,
  scroll and clip.</p>
</div>
\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    overflow: "auto"
  },
  argTypes: {
    overflow: {
      control: "inline-radio",
      options: ["auto", "hidden", "visible", "scroll", "clip"]
    }
  },
  render: ({
    overflow
  }) => \`
<div class="kd-overflow-\${overflow}" style="max-height: 6rem; max-width: 20rem; border: 1px dashed var(--kd-border-strong); padding: var(--kd-space-2);">
  <p style="margin: 0;">.kd-overflow-\${overflow}: content long enough to exceed the box so the
  chosen overflow behaviour is visible. Keep reading to be sure it spills past the edge.</p>
</div>
\`
}`,...l.parameters?.docs?.source}}},u=[`Anchoring`,`Inset`,`ZIndex`,`Overflow`,`Position`]})))()}export{d as a,s as i,o as n,n as o,c as r,a as t};
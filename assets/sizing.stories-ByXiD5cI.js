import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Height:()=>c,Keywords:()=>s,Sizing:()=>u,ViewportHeight:()=>l,Width:()=>o,__namedExportsOrder:()=>d,default:()=>r}),r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{r={title:`Utilities/Sizing`,parameters:{layout:`padded`}},i=(e,t)=>`<div style="background: var(--kd-bg-surface); border: 1px dashed var(--kd-border-strong); margin-bottom: var(--kd-space-2);"><div class="${e}" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${t}</div></div>`,a=(e,t)=>`<div class="${e}" style="flex: 1; display: flex; flex-direction: column; justify-content: space-between; padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);"><span>${t}</span><span>ends here</span></div>`,o={tags:[`!dev`],render:()=>[`25`,`50`,`75`,`100`].map(e=>i(`kd-w-${e}`,`.kd-w-${e}`)).join(``)},s={tags:[`!dev`],render:()=>[`w-auto`,`w-fit`,`w-full`].map(e=>i(`kd-${e}`,`.kd-${e}`)).join(``)},c={tags:[`!dev`],render:()=>`
<div class="kd-d-flex kd-gap-2" style="height: 8rem;">
  <div class="kd-h-25" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-h-25</div>
  <div class="kd-h-50" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-h-50</div>
  <div class="kd-h-100" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-h-100</div>
</div>
`},l={tags:[`!dev`],render:()=>`
<div style="height: 14rem; overflow: auto; padding: var(--kd-space-2); background: var(--kd-bg-surface); border: 1px dashed var(--kd-border-strong);">
  <div class="kd-d-flex kd-gap-2">
    ${a(`kd-h-viewport`,`.kd-h-viewport`)}
    ${a(`kd-h-screen`,`.kd-h-screen`)}
  </div>
</div>
`},u={args:{property:`w`,value:`50`},argTypes:{property:{control:`inline-radio`,options:[`w`,`min-w`,`max-w`,`h`]},value:{control:`inline-radio`,options:[`0`,`25`,`50`,`75`,`100`]}},render:({property:e,value:t})=>i(`kd-${e}-${t}`,`.kd-${e}-${t}`)},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["25", "50", "75", "100"].map(value => bar(`kd-w-${value}`, `.kd-w-${value}`)).join("")\n}',...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["w-auto", "w-fit", "w-full"].map(name => bar(`kd-${name}`, `.kd-${name}`)).join("")\n}',...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-flex kd-gap-2" style="height: 8rem;">
  <div class="kd-h-25" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-h-25</div>
  <div class="kd-h-50" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-h-50</div>
  <div class="kd-h-100" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-h-100</div>
</div>
\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div style="height: 14rem; overflow: auto; padding: var(--kd-space-2); background: var(--kd-bg-surface); border: 1px dashed var(--kd-border-strong);">
  <div class="kd-d-flex kd-gap-2">
    \${column("kd-h-viewport", ".kd-h-viewport")}
    \${column("kd-h-screen", ".kd-h-screen")}
  </div>
</div>
\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    property: "w",
    value: "50"
  },
  argTypes: {
    property: {
      control: "inline-radio",
      options: ["w", "min-w", "max-w", "h"]
    },
    value: {
      control: "inline-radio",
      options: ["0", "25", "50", "75", "100"]
    }
  },
  render: ({
    property,
    value
  }) => bar(\`kd-\${property}-\${value}\`, \`.kd-\${property}-\${value}\`)
}`,...u.parameters?.docs?.source}}},d=[`Width`,`Keywords`,`Height`,`ViewportHeight`,`Sizing`]})))()}export{f as a,o as i,s as n,n as o,l as r,c as t};
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Height:()=>s,Keywords:()=>o,Sizing:()=>c,Width:()=>a,__namedExportsOrder:()=>l,default:()=>r}),r,i,a,o,s,c,l;function u(){return(u=e((()=>{r={title:`Utilities/Sizing`,parameters:{layout:`padded`}},i=(e,t)=>`<div style="background: var(--kd-bg-surface); border: 1px dashed var(--kd-border-strong); margin-bottom: var(--kd-space-2);"><div class="${e}" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${t}</div></div>`,a={tags:[`!dev`],render:()=>[`25`,`50`,`75`,`100`].map(e=>i(`kd-w-${e}`,`.kd-w-${e}`)).join(``)},o={tags:[`!dev`],render:()=>[`w-auto`,`w-fit`,`w-full`].map(e=>i(`kd-${e}`,`.kd-${e}`)).join(``)},s={tags:[`!dev`],render:()=>`
<div class="kd-d-flex kd-gap-2" style="height: 8rem;">
  <div class="kd-h-25" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-h-25</div>
  <div class="kd-h-50" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-h-50</div>
  <div class="kd-h-100" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-h-100</div>
</div>
`},c={args:{property:`w`,value:`50`},argTypes:{property:{control:`inline-radio`,options:[`w`,`min-w`,`max-w`,`h`]},value:{control:`inline-radio`,options:[`0`,`25`,`50`,`75`,`100`]}},render:({property:e,value:t})=>i(`kd-${e}-${t}`,`.kd-${e}-${t}`)},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["25", "50", "75", "100"].map(value => bar(`kd-w-${value}`, `.kd-w-${value}`)).join("")\n}',...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["w-auto", "w-fit", "w-full"].map(name => bar(`kd-${name}`, `.kd-${name}`)).join("")\n}',...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-flex kd-gap-2" style="height: 8rem;">
  <div class="kd-h-25" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-h-25</div>
  <div class="kd-h-50" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-h-50</div>
  <div class="kd-h-100" style="padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-h-100</div>
</div>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l=[`Width`,`Keywords`,`Height`,`Sizing`]})))()}export{n as a,u as i,o as n,a as r,s as t};
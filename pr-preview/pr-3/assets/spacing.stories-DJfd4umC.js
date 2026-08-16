import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Auto:()=>u,Gap:()=>d,Margin:()=>c,Padding:()=>s,Sides:()=>l,Spacing:()=>f,__namedExportsOrder:()=>p,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r={title:`Utilities/Spacing`,parameters:{layout:`padded`}},i=e=>`<span style="display: block; padding: var(--kd-space-1); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${e}</span>`,a=(e,t)=>`<div style="background: var(--kd-bg-surface); border: 1px dashed var(--kd-border-strong); margin-bottom: var(--kd-space-2);"><div class="${e}">${i(t)}</div></div>`,o=e=>`<span style="padding: var(--kd-space-1) var(--kd-space-2); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${e}</span>`,s={tags:[`!dev`],render:()=>[`0`,`1`,`3`,`5`].map(e=>a(`kd-p-${e}`,`.kd-p-${e}`)).join(``)},c={tags:[`!dev`],render:()=>[`1`,`3`,`5`].map(e=>a(`kd-m-${e}`,`.kd-m-${e}`)).join(``)},l={tags:[`!dev`],render:()=>[`pt-4`,`pb-4`,`px-4`,`py-4`].map(e=>a(`kd-${e}`,`.kd-${e}`)).join(``)},u={tags:[`!dev`],render:()=>a(`kd-mx-auto`,`.kd-mx-auto: centred by equal automatic side margins`)},d={tags:[`!dev`],render:()=>[`1`,`3`,`5`].map(e=>`<div class="kd-d-flex kd-gap-${e}" style="margin-bottom: var(--kd-space-2);">${o(`.kd-gap-${e}`)}${o(`two`)}${o(`three`)}</div>`).join(``)},f={args:{property:`p`,step:`3`},argTypes:{property:{control:`select`,options:[`m`,`mt`,`mx`,`my`,`p`,`pt`,`px`,`py`]},step:{control:`inline-radio`,options:[`0`,`1`,`2`,`3`,`4`,`5`]}},render:({property:e,step:t})=>a(`kd-${e}-${t}`,`.kd-${e}-${t}`)},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["0", "1", "3", "5"].map(step => frame(`kd-p-${step}`, `.kd-p-${step}`)).join("")\n}',...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["1", "3", "5"].map(step => frame(`kd-m-${step}`, `.kd-m-${step}`)).join("")\n}',...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["pt-4", "pb-4", "px-4", "py-4"].map(name => frame(`kd-${name}`, `.kd-${name}`)).join("")\n}',...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame("kd-mx-auto", ".kd-mx-auto: centred by equal automatic side margins")
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["1", "3", "5"].map(step => `<div class="kd-d-flex kd-gap-${step}" style="margin-bottom: var(--kd-space-2);">${chip(`.kd-gap-${step}`)}${chip("two")}${chip("three")}</div>`).join("")\n}',...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    property: "p",
    step: "3"
  },
  argTypes: {
    property: {
      control: "select",
      options: ["m", "mt", "mx", "my", "p", "pt", "px", "py"]
    },
    step: {
      control: "inline-radio",
      options: ["0", "1", "2", "3", "4", "5"]
    }
  },
  render: ({
    property,
    step
  }) => frame(\`kd-\${property}-\${step}\`, \`.kd-\${property}-\${step}\`)
}`,...f.parameters?.docs?.source}}},p=[`Padding`,`Margin`,`Sides`,`Auto`,`Gap`,`Spacing`]})))()}export{l as a,s as i,d as n,m as o,c as r,n as s,u as t};
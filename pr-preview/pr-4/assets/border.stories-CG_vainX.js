import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Border:()=>d,Hairline:()=>u,Radius:()=>l,Sides:()=>s,Style:()=>c,Width:()=>o,__namedExportsOrder:()=>f,default:()=>r}),r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r={title:`Utilities/Border`,parameters:{layout:`padded`}},i=(e,t)=>`<div class="${e}" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${t}</div>`,a=e=>`<div class="kd-d-grid kd-gap-2" style="grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));">${e}</div>`,o={tags:[`!dev`],render:()=>a([`1`,`2`,`3`,`4`].map(e=>i(`kd-border-${e}`,`.kd-border-${e}`)).join(``))},s={tags:[`!dev`],render:()=>a([`t`,`r`,`b`,`l`].map(e=>i(`kd-border-${e}-2`,`.kd-border-${e}-2`)).join(``))},c={tags:[`!dev`],render:()=>a([`solid`,`dashed`,`dotted`].map(e=>i(`kd-border-2 kd-border-${e}`,`.kd-border-${e}`)).join(``))},l={tags:[`!dev`],render:()=>a([`0`,`sm`,`md`,`lg`,`pill`].map(e=>i(`kd-border-1 kd-radius-${e}`,`.kd-radius-${e}`)).join(``))},u={tags:[`!dev`],render:()=>i(`kd-border-accent-hairline`,`.kd-border-accent-hairline`)},d={args:{width:`1`,style:`solid`,radius:`sm`},argTypes:{width:{control:`inline-radio`,options:[`0`,`1`,`2`,`3`,`4`]},style:{control:`inline-radio`,options:[`solid`,`dashed`,`dotted`]},radius:{control:`inline-radio`,options:[`0`,`sm`,`md`,`lg`,`pill`,`circle`]}},render:({width:e,style:t,radius:n})=>i(`kd-border-${e} kd-border-${t} kd-radius-${n}`,`.kd-border-${e} .kd-border-${t} .kd-radius-${n}`)},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["1", "2", "3", "4"].map(key => cell(`kd-border-${key}`, `.kd-border-${key}`)).join(""))\n}',...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["t", "r", "b", "l"].map(side => cell(`kd-border-${side}-2`, `.kd-border-${side}-2`)).join(""))\n}',...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["solid", "dashed", "dotted"].map(style => cell(`kd-border-2 kd-border-${style}`, `.kd-border-${style}`)).join(""))\n}',...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["0", "sm", "md", "lg", "pill"].map(key => cell(`kd-border-1 kd-radius-${key}`, `.kd-radius-${key}`)).join(""))\n}',...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => cell("kd-border-accent-hairline", ".kd-border-accent-hairline")
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    width: "1",
    style: "solid",
    radius: "sm"
  },
  argTypes: {
    width: {
      control: "inline-radio",
      options: ["0", "1", "2", "3", "4"]
    },
    style: {
      control: "inline-radio",
      options: ["solid", "dashed", "dotted"]
    },
    radius: {
      control: "inline-radio",
      options: ["0", "sm", "md", "lg", "pill", "circle"]
    }
  },
  render: ({
    width,
    style,
    radius
  }) => cell(\`kd-border-\${width} kd-border-\${style} kd-radius-\${radius}\`, \`.kd-border-\${width} .kd-border-\${style} .kd-radius-\${radius}\`)
}`,...d.parameters?.docs?.source}}},f=[`Width`,`Sides`,`Style`,`Radius`,`Hairline`,`Border`]})))()}export{o as a,c as i,l as n,n as o,s as r,p as s,u as t};
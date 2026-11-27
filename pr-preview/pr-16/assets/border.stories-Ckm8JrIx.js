import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Border:()=>f,Corner:()=>u,Hairline:()=>d,Radius:()=>l,Sides:()=>s,Style:()=>c,Width:()=>o,__namedExportsOrder:()=>p,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r={title:`Utilities/Border`,parameters:{layout:`padded`}},i=(e,t)=>`<div class="${e}" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${t}</div>`,a=e=>`<div class="kd-d-grid kd-gap-2" style="grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));">${e}</div>`,o={tags:[`!dev`],render:()=>a([`1`,`2`,`3`,`4`].map(e=>i(`kd-border-${e}`,`.kd-border-${e}`)).join(``))},s={tags:[`!dev`],render:()=>a([`t`,`r`,`b`,`l`].map(e=>i(`kd-border-${e}-2`,`.kd-border-${e}-2`)).join(``))},c={tags:[`!dev`],render:()=>a([`solid`,`dashed`,`dotted`].map(e=>i(`kd-border-2 kd-border-${e}`,`.kd-border-${e}`)).join(``))},l={tags:[`!dev`],render:()=>a([`0`,`sm`,`md`,`lg`,`xl`,`pill`].map(e=>i(`kd-border-1 kd-radius-${e}`,`.kd-radius-${e}`)).join(``))},u={tags:[`!dev`],render:()=>a([`round`,`squircle`,`bevel`,`scoop`,`notch`,`straight`].map(e=>i(`kd-border-1 kd-radius-xl kd-corner-${e}`,`.kd-corner-${e}`)).join(``))},d={tags:[`!dev`],render:()=>i(`kd-border-accent-hairline`,`.kd-border-accent-hairline`)},f={args:{width:`1`,style:`solid`,radius:`xl`,corner:`round`},argTypes:{width:{control:`inline-radio`,options:[`0`,`1`,`2`,`3`,`4`]},style:{control:`inline-radio`,options:[`solid`,`dashed`,`dotted`]},radius:{control:`inline-radio`,options:[`0`,`sm`,`md`,`lg`,`xl`,`pill`,`circle`]},corner:{control:`inline-radio`,options:[`round`,`squircle`,`bevel`,`scoop`,`notch`,`straight`]}},render:({width:e,style:t,radius:n,corner:r})=>i(`kd-border-${e} kd-border-${t} kd-radius-${n} kd-corner-${r}`,`.kd-border-${e} .kd-border-${t} .kd-radius-${n} .kd-corner-${r}`)},p=[`Width`,`Sides`,`Style`,`Radius`,`Corner`,`Hairline`,`Border`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["1", "2", "3", "4"].map(key => cell(`kd-border-${key}`, `.kd-border-${key}`)).join(""))\n}',...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["t", "r", "b", "l"].map(side => cell(`kd-border-${side}-2`, `.kd-border-${side}-2`)).join(""))\n}',...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["solid", "dashed", "dotted"].map(style => cell(`kd-border-2 kd-border-${style}`, `.kd-border-${style}`)).join(""))\n}',...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["0", "sm", "md", "lg", "xl", "pill"].map(key => cell(`kd-border-1 kd-radius-${key}`, `.kd-radius-${key}`)).join(""))\n}',...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["round", "squircle", "bevel", "scoop", "notch", "straight"].map(key => cell(`kd-border-1 kd-radius-xl kd-corner-${key}`, `.kd-corner-${key}`)).join(""))\n}',...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => cell("kd-border-accent-hairline", ".kd-border-accent-hairline")
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    width: "1",
    style: "solid",
    radius: "xl",
    corner: "round"
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
      options: ["0", "sm", "md", "lg", "xl", "pill", "circle"]
    },
    corner: {
      control: "inline-radio",
      options: ["round", "squircle", "bevel", "scoop", "notch", "straight"]
    }
  },
  render: ({
    width,
    style,
    radius,
    corner
  }) => cell(\`kd-border-\${width} kd-border-\${style} kd-radius-\${radius} kd-corner-\${corner}\`, \`.kd-border-\${width} .kd-border-\${style} .kd-radius-\${radius} .kd-corner-\${corner}\`)
}`,...f.parameters?.docs?.source}}}})))()}export{c as a,m as c,s as i,d as n,o,l as r,n as s,u as t};
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Align:()=>l,Family:()=>s,Roles:()=>c,Size:()=>a,Text:()=>d,Truncation:()=>u,Weight:()=>o,__namedExportsOrder:()=>f,default:()=>r}),r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r={title:`Utilities/Text`,parameters:{layout:`padded`}},i=(e,t)=>`<p class="${e}" style="margin: 0 0 var(--kd-space-1);">${t}</p>`,a={tags:[`!dev`],render:()=>[`xxs`,`sm`,`md`,`lg`,`xl`,`heading`].map(e=>i(`kd-fs-${e}`,`.kd-fs-${e}`)).join(``)},o={tags:[`!dev`],render:()=>[`regular`,`medium`,`semibold`,`bold`].map(e=>i(`kd-fw-${e}`,`.kd-fw-${e}`)).join(``)},s={tags:[`!dev`],render:()=>[`primary`,`secondary`,`mono`].map(e=>i(`kd-font-${e}`,`.kd-font-${e}: the quick brown fox`)).join(``)},c={tags:[`!dev`],render:()=>[`primary`,`secondary`,`muted`,`bright`].map(e=>i(`kd-text-${e}`,`.kd-text-${e}`)).join(``)+[`accent`,`success`,`warning`,`danger`].map(e=>i(`kd-text-${e}`,`.kd-text-${e}`)).join(``)},l={tags:[`!dev`],render:()=>[`start`,`center`,`end`].map(e=>i(`kd-text-${e}`,`<span style="font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-text-${e}</span>`)).join(``)},u={tags:[`!dev`],render:()=>`
<div class="kd-text-ellipsis" style="max-width: 18rem; border: 1px dashed var(--kd-border-strong); padding: var(--kd-space-1);">
  .kd-text-ellipsis truncates a single line that is far too long to fit its container
</div>
`},d={args:{size:`md`,weight:`regular`,role:`primary`,align:`start`},argTypes:{size:{control:`select`,options:[`micro`,`xxs`,`xs`,`sm`,`md`,`lg`,`xl`,`heading`,`hero`]},weight:{control:`inline-radio`,options:[`regular`,`medium`,`semibold`,`bold`]},role:{control:`select`,options:[`primary`,`secondary`,`muted`,`bright`,`accent`,`success`,`warning`,`danger`]},align:{control:`inline-radio`,options:[`start`,`center`,`end`,`justify`]}},render:({size:e,weight:t,role:n,align:r})=>i(`kd-fs-${e} kd-fw-${t} kd-text-${n} kd-text-${r}`,`The quick brown fox jumps over the lazy dog`)},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["xxs", "sm", "md", "lg", "xl", "heading"].map(name => line(`kd-fs-${name}`, `.kd-fs-${name}`)).join("")\n}',...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["regular", "medium", "semibold", "bold"].map(name => line(`kd-fw-${name}`, `.kd-fw-${name}`)).join("")\n}',...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["primary", "secondary", "mono"].map(name => line(`kd-font-${name}`, `.kd-font-${name}: the quick brown fox`)).join("")\n}',...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["primary", "secondary", "muted", "bright"].map(name => line(`kd-text-${name}`, `.kd-text-${name}`)).join("") + ["accent", "success", "warning", "danger"].map(name => line(`kd-text-${name}`, `.kd-text-${name}`)).join("")\n}',...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["start", "center", "end"].map(name => line(`kd-text-${name}`, `<span style="font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-text-${name}</span>`)).join("")\n}',...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-text-ellipsis" style="max-width: 18rem; border: 1px dashed var(--kd-border-strong); padding: var(--kd-space-1);">
  .kd-text-ellipsis truncates a single line that is far too long to fit its container
</div>
\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    weight: "regular",
    role: "primary",
    align: "start"
  },
  argTypes: {
    size: {
      control: "select",
      options: ["micro", "xxs", "xs", "sm", "md", "lg", "xl", "heading", "hero"]
    },
    weight: {
      control: "inline-radio",
      options: ["regular", "medium", "semibold", "bold"]
    },
    role: {
      control: "select",
      options: ["primary", "secondary", "muted", "bright", "accent", "success", "warning", "danger"]
    },
    align: {
      control: "inline-radio",
      options: ["start", "center", "end", "justify"]
    }
  },
  render: ({
    size,
    weight,
    role,
    align
  }) => line(\`kd-fs-\${size} kd-fw-\${weight} kd-text-\${role} kd-text-\${align}\`, "The quick brown fox jumps over the lazy dog")
}`,...d.parameters?.docs?.source}}},f=[`Size`,`Weight`,`Family`,`Roles`,`Align`,`Truncation`,`Text`]})))()}export{u as a,n as c,a as i,s as n,o,c as r,p as s,l as t};
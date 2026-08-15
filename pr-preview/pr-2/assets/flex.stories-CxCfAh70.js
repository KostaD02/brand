import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Center:()=>f,Direction:()=>o,Flex:()=>p,GrowShrink:()=>u,Items:()=>c,Justify:()=>s,Order:()=>d,Wrap:()=>l,__namedExportsOrder:()=>m,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r={title:`Utilities/Flex`,parameters:{layout:`padded`}},i=e=>`<span style="padding: var(--kd-space-1) var(--kd-space-2); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${e}</span>`,a=(e,t)=>`<div class="${e}" style="min-height: 5rem; padding: var(--kd-space-2); border: 1px dashed var(--kd-border-strong); margin-bottom: var(--kd-space-2);">${t}</div>`,o={tags:[`!dev`],render:()=>[`row`,`column`].map(e=>a(`kd-d-flex kd-flex-${e} kd-gap-2`,`${i(`.kd-flex-${e}`)}${i(`two`)}${i(`three`)}`)).join(``)},s={tags:[`!dev`],render:()=>[`start`,`center`,`between`,`evenly`].map(e=>a(`kd-d-flex kd-justify-${e} kd-gap-2`,`${i(`.kd-justify-${e}`)}${i(`two`)}`)).join(``)},c={tags:[`!dev`],render:()=>[`start`,`center`,`end`].map(e=>a(`kd-d-flex kd-items-${e} kd-gap-2`,`${i(`.kd-items-${e}`)}${i(`two`)}`)).join(``)},l={tags:[`!dev`],render:()=>a(`kd-d-flex kd-flex-wrap kd-gap-2`,Array.from({length:12},(e,t)=>i(`item ${t+1}`)).join(``))},u={tags:[`!dev`],render:()=>a(`kd-d-flex kd-gap-2`,`<div class="kd-grow-1">${i(`.kd-grow-1`)}</div><div class="kd-grow-0">${i(`.kd-grow-0`)}</div>`)},d={tags:[`!dev`],render:()=>a(`kd-d-flex kd-gap-2`,`<div class="kd-order-last">${i(`.kd-order-last`)}</div><div>${i(`source order 2`)}</div><div class="kd-order-first">${i(`.kd-order-first`)}</div>`)},f={tags:[`!dev`],render:()=>a(`kd-flex-center`,i(`.kd-flex-center`))},p={args:{direction:`row`,justify:`start`,items:`start`,wrap:`wrap`},argTypes:{direction:{control:`select`,options:[`row`,`row-reverse`,`column`,`column-reverse`]},justify:{control:`select`,options:[`start`,`end`,`center`,`between`,`around`,`evenly`]},items:{control:`select`,options:[`start`,`end`,`center`,`baseline`,`stretch`]},wrap:{control:`inline-radio`,options:[`wrap`,`nowrap`,`wrap-reverse`]}},render:({direction:e,justify:t,items:n,wrap:r})=>a(`kd-d-flex kd-flex-${e} kd-justify-${t} kd-items-${n} kd-flex-${r} kd-gap-2`,`${i(`one`)}${i(`two`)}${i(`three`)}`)},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["row", "column"].map(value => frame(`kd-d-flex kd-flex-${value} kd-gap-2`, `${chip(`.kd-flex-${value}`)}${chip("two")}${chip("three")}`)).join("")\n}',...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["start", "center", "between", "evenly"].map(value => frame(`kd-d-flex kd-justify-${value} kd-gap-2`, `${chip(`.kd-justify-${value}`)}${chip("two")}`)).join("")\n}',...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["start", "center", "end"].map(value => frame(`kd-d-flex kd-items-${value} kd-gap-2`, `${chip(`.kd-items-${value}`)}${chip("two")}`)).join("")\n}',...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame("kd-d-flex kd-flex-wrap kd-gap-2", Array.from({
    length: 12
  }, (_, index) => chip(\`item \${index + 1}\`)).join(""))
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => frame("kd-d-flex kd-gap-2", `<div class="kd-grow-1">${chip(".kd-grow-1")}</div><div class="kd-grow-0">${chip(".kd-grow-0")}</div>`)\n}',...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => frame("kd-d-flex kd-gap-2", `<div class="kd-order-last">${chip(".kd-order-last")}</div><div>${chip("source order 2")}</div><div class="kd-order-first">${chip(".kd-order-first")}</div>`)\n}',...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame("kd-flex-center", chip(".kd-flex-center"))
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    direction: "row",
    justify: "start",
    items: "start",
    wrap: "wrap"
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"]
    },
    justify: {
      control: "select",
      options: ["start", "end", "center", "between", "around", "evenly"]
    },
    items: {
      control: "select",
      options: ["start", "end", "center", "baseline", "stretch"]
    },
    wrap: {
      control: "inline-radio",
      options: ["wrap", "nowrap", "wrap-reverse"]
    }
  },
  render: ({
    direction,
    justify,
    items,
    wrap
  }) => frame(\`kd-d-flex kd-flex-\${direction} kd-justify-\${justify} kd-items-\${items} kd-flex-\${wrap} kd-gap-2\`, \`\${chip("one")}\${chip("two")}\${chip("three")}\`)
}`,...p.parameters?.docs?.source}}},m=[`Direction`,`Justify`,`Items`,`Wrap`,`GrowShrink`,`Order`,`Center`,`Flex`]})))()}export{s as a,n as c,c as i,h as l,o as n,d as o,u as r,l as s,f as t};
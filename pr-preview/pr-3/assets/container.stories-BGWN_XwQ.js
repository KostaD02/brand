import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Container:()=>f,Example:()=>o,Fluid:()=>c,Flush:()=>l,Gutters:()=>u,Measure:()=>d,Tiers:()=>s,__namedExportsOrder:()=>p,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r={title:`Layout/Container`,parameters:{layout:`fullscreen`}},i=e=>`<div style="padding: var(--kd-space-2); text-align: center; background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-primary);">${e}</div>`,a=e=>`<div style="background: var(--kd-bg-surface); border-block: 1px dashed var(--kd-border-strong); margin-bottom: var(--kd-space-2);">${e}</div>`,o={tags:[`!dev`],render:()=>a(`<div class="kd-container">${i(`.kd-container`)}</div>`)},s={tags:[`!dev`],render:()=>[`xxs`,`sm`,`lg`,`xl`].map(e=>a(`<div class="kd-container-${e}">${i(`.kd-container-${e}`)}</div>`)).join(``)},c={tags:[`!dev`],render:()=>a(`<div class="kd-container--fluid">${i(`.kd-container--fluid`)}</div>`)+a(`<div class="kd-container">${i(`.kd-container (capped, for comparison)`)}</div>`)},l={tags:[`!dev`],render:()=>a(`<div class="kd-container">${i(`default gutter`)}</div>`)+a(`<div class="kd-container kd-container--flush">${i(`.kd-container--flush`)}</div>`)},u={tags:[`!dev`],render:()=>[`1`,`3`,`5`].map(e=>a(`<div class="kd-container kd-gutter-${e}">${i(`.kd-gutter-${e}`)}</div>`)).join(``)},d={tags:[`!dev`],render:()=>[`xxs`,`md`,`xxxl`].map(e=>a(`<div class="kd-measure-${e}">${i(`.kd-measure-${e}`)}</div>`)).join(``)},f={args:{tier:`container`,flush:!1,gutter:`none`},argTypes:{tier:{control:`select`,options:[`container`,`container-xxs`,`container-xs`,`container-sm`,`container-md`]},flush:{control:`boolean`},gutter:{control:`select`,options:[`none`,`0`,`1`,`2`,`3`,`4`,`5`]}},render:({tier:e,flush:t,gutter:n})=>{let r=[`kd-${e}`];return t&&r.push(`kd-container--flush`),n!==`none`&&r.push(`kd-gutter-${n}`),a(`<div class="${r.join(` `)}">${i(r.map(e=>`.${e}`).join(` `))}</div>`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => rail(\`<div class="kd-container">\${box(".kd-container")}</div>\`)
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["xxs", "sm", "lg", "xl"].map(tier => rail(`<div class="kd-container-${tier}">${box(`.kd-container-${tier}`)}</div>`)).join("")\n}',...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => rail(`<div class="kd-container--fluid">${box(".kd-container--fluid")}</div>`) + rail(`<div class="kd-container">${box(".kd-container (capped, for comparison)")}</div>`)\n}',...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => rail(`<div class="kd-container">${box("default gutter")}</div>`) + rail(`<div class="kd-container kd-container--flush">${box(".kd-container--flush")}</div>`)\n}',...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["1", "3", "5"].map(step => rail(`<div class="kd-container kd-gutter-${step}">${box(`.kd-gutter-${step}`)}</div>`)).join("")\n}',...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["xxs", "md", "xxxl"].map(size => rail(`<div class="kd-measure-${size}">${box(`.kd-measure-${size}`)}</div>`)).join("")\n}',...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tier: "container",
    flush: false,
    gutter: "none"
  },
  argTypes: {
    tier: {
      control: "select",
      options: ["container", "container-xxs", "container-xs", "container-sm", "container-md"]
    },
    flush: {
      control: "boolean"
    },
    gutter: {
      control: "select",
      options: ["none", "0", "1", "2", "3", "4", "5"]
    }
  },
  render: ({
    tier,
    flush,
    gutter
  }) => {
    const classes = [\`kd-\${tier}\`];
    if (flush) {
      classes.push("kd-container--flush");
    }
    if (gutter !== "none") {
      classes.push(\`kd-gutter-\${gutter}\`);
    }
    return rail(\`<div class="\${classes.join(" ")}">\${box(classes.map(name => \`.\${name}\`).join(" "))}</div>\`);
  }
}`,...f.parameters?.docs?.source}}},p=[`Example`,`Tiers`,`Fluid`,`Flush`,`Gutters`,`Measure`,`Container`]})))()}export{d as a,m as c,u as i,c as n,s as o,l as r,n as s,o as t};
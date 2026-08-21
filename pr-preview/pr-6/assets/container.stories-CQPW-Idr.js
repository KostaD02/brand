import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Container:()=>m,Example:()=>s,Fluid:()=>l,Flush:()=>u,Gutters:()=>d,Measure:()=>p,ResponsiveGutters:()=>f,Tiers:()=>c,__namedExportsOrder:()=>h,default:()=>i}),r,i,a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r=[`none`,`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`],i={title:`Layout/Container`,parameters:{layout:`fullscreen`}},a=e=>`<div style="padding: var(--kd-space-2); text-align: center; background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-primary);">${e}</div>`,o=e=>`<div style="background: var(--kd-bg-surface); border-block: 1px dashed var(--kd-border-strong); margin-bottom: var(--kd-space-2);">${e}</div>`,s={tags:[`!dev`],render:()=>o(`<div class="kd-container">${a(`.kd-container`)}</div>`)},c={tags:[`!dev`],render:()=>[`xxs`,`sm`,`lg`,`xl`].map(e=>o(`<div class="kd-container-${e}">${a(`.kd-container-${e}`)}</div>`)).join(``)},l={tags:[`!dev`],render:()=>o(`<div class="kd-container--fluid">${a(`.kd-container--fluid`)}</div>`)+o(`<div class="kd-container">${a(`.kd-container (capped, for comparison)`)}</div>`)},u={tags:[`!dev`],render:()=>o(`<div class="kd-container">${a(`default gutter`)}</div>`)+o(`<div class="kd-container kd-container--flush">${a(`.kd-container--flush`)}</div>`)},d={tags:[`!dev`],render:()=>[`1`,`3`,`5`].map(e=>o(`<div class="kd-container kd-gutter-${e}">${a(`.kd-gutter-${e}`)}</div>`)).join(``)},f={tags:[`!dev`],render:()=>o(`<div class="kd-container">${a(`.kd-container (drops to 1rem at 600px)`)}</div>`)+o(`<div class="kd-container kd-gutter-7 kd-gutter-md-5 kd-gutter-xs-4">${a(`.kd-gutter-7 .kd-gutter-md-5 .kd-gutter-xs-4`)}</div>`)},p={tags:[`!dev`],render:()=>[`xxs`,`md`,`xxxl`].map(e=>o(`<div class="kd-measure-${e}">${a(`.kd-measure-${e}`)}</div>`)).join(``)},m={args:{tier:`container`,flush:!1,gutter:`none`,gutterMd:`none`,gutterXs:`none`},argTypes:{tier:{control:`select`,options:[`container`,`container-xxs`,`container-xs`,`container-sm`,`container-md`]},flush:{control:`boolean`},gutter:{control:`select`,options:r},gutterMd:{control:`select`,options:r},gutterXs:{control:`select`,options:r}},render:({tier:e,flush:t,gutter:n,gutterMd:r,gutterXs:i})=>{let s=[`kd-${e}`];return t&&s.push(`kd-container--flush`),n!==`none`&&s.push(`kd-gutter-${n}`),r!==`none`&&s.push(`kd-gutter-md-${r}`),i!==`none`&&s.push(`kd-gutter-xs-${i}`),o(`<div class="${s.join(` `)}">${a(s.map(e=>`.${e}`).join(` `))}</div>`)}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => rail(\`<div class="kd-container">\${box(".kd-container")}</div>\`)
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["xxs", "sm", "lg", "xl"].map(tier => rail(`<div class="kd-container-${tier}">${box(`.kd-container-${tier}`)}</div>`)).join("")\n}',...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => rail(`<div class="kd-container--fluid">${box(".kd-container--fluid")}</div>`) + rail(`<div class="kd-container">${box(".kd-container (capped, for comparison)")}</div>`)\n}',...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => rail(`<div class="kd-container">${box("default gutter")}</div>`) + rail(`<div class="kd-container kd-container--flush">${box(".kd-container--flush")}</div>`)\n}',...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["1", "3", "5"].map(step => rail(`<div class="kd-container kd-gutter-${step}">${box(`.kd-gutter-${step}`)}</div>`)).join("")\n}',...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => rail(`<div class="kd-container">${box(".kd-container (drops to 1rem at 600px)")}</div>`) + rail(`<div class="kd-container kd-gutter-7 kd-gutter-md-5 kd-gutter-xs-4">${box(".kd-gutter-7 .kd-gutter-md-5 .kd-gutter-xs-4")}</div>`)\n}',...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["xxs", "md", "xxxl"].map(size => rail(`<div class="kd-measure-${size}">${box(`.kd-measure-${size}`)}</div>`)).join("")\n}',...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tier: "container",
    flush: false,
    gutter: "none",
    gutterMd: "none",
    gutterXs: "none"
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
      options: gutterSteps
    },
    gutterMd: {
      control: "select",
      options: gutterSteps
    },
    gutterXs: {
      control: "select",
      options: gutterSteps
    }
  },
  render: ({
    tier,
    flush,
    gutter,
    gutterMd,
    gutterXs
  }) => {
    const classes = [\`kd-\${tier}\`];
    if (flush) {
      classes.push("kd-container--flush");
    }
    if (gutter !== "none") {
      classes.push(\`kd-gutter-\${gutter}\`);
    }
    if (gutterMd !== "none") {
      classes.push(\`kd-gutter-md-\${gutterMd}\`);
    }
    if (gutterXs !== "none") {
      classes.push(\`kd-gutter-xs-\${gutterXs}\`);
    }
    return rail(\`<div class="\${classes.join(" ")}">\${box(classes.map(name => \`.\${name}\`).join(" "))}</div>\`);
  }
}`,...m.parameters?.docs?.source}}},h=[`Example`,`Tiers`,`Fluid`,`Flush`,`Gutters`,`ResponsiveGutters`,`Measure`,`Container`]})))()}export{p as a,n as c,d as i,g as l,l as n,f as o,u as r,c as s,s as t};
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Example:()=>o,Section:()=>l,Spacing:()=>s,WithContainer:()=>c,__namedExportsOrder:()=>u,default:()=>r}),r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{r={title:`Layout/Section`,parameters:{layout:`fullscreen`}},i=e=>`<div style="padding: var(--kd-space-2); text-align: center; background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-primary);">${e}</div>`,a=e=>`<div style="background: var(--kd-bg-surface); border-block: 1px dashed var(--kd-border-strong); margin-bottom: var(--kd-space-2);">${e}</div>`,o={tags:[`!dev`],render:()=>a(`<section class="kd-section">${i(`.kd-section`)}</section>`)},s={tags:[`!dev`],render:()=>a(`<section class="kd-section">${i(`.kd-section`)}</section>`)+a(`<section class="kd-section kd-section--tight">${i(`.kd-section--tight`)}</section>`)+a(`<section class="kd-section kd-section--flush">${i(`.kd-section--flush`)}</section>`)},c={tags:[`!dev`],render:()=>a(`
<section class="kd-section">
  <div class="kd-container-md">
    ${i(`section owns the vertical space, container owns the width`)}
  </div>
</section>
`)},l={args:{spacing:`default`},argTypes:{spacing:{control:`inline-radio`,options:[`default`,`tight`,`flush`]}},render:({spacing:e})=>{let t=[`kd-section`];return e!=="default"&&t.push(`kd-section--${e}`),a(`<section class="${t.join(` `)}">${i(t.map(e=>`.${e}`).join(` `))}</section>`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => band(\`<section class="kd-section">\${box(".kd-section")}</section>\`)
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => band(`<section class="kd-section">${box(".kd-section")}</section>`) + band(`<section class="kd-section kd-section--tight">${box(".kd-section--tight")}</section>`) + band(`<section class="kd-section kd-section--flush">${box(".kd-section--flush")}</section>`)\n}',...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => band(\`
<section class="kd-section">
  <div class="kd-container-md">
    \${box("section owns the vertical space, container owns the width")}
  </div>
</section>
\`)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    spacing: "default"
  },
  argTypes: {
    spacing: {
      control: "inline-radio",
      options: ["default", "tight", "flush"]
    }
  },
  render: ({
    spacing
  }) => {
    const classes = ["kd-section"];
    if (spacing !== "default") {
      classes.push(\`kd-section--\${spacing}\`);
    }
    return band(\`<section class="\${classes.join(" ")}">\${box(classes.map(name => \`.\${name}\`).join(" "))}</section>\`);
  }
}`,...l.parameters?.docs?.source}}},u=[`Example`,`Spacing`,`WithContainer`,`Section`]})))()}export{n as a,d as i,s as n,c as r,o as t};
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Empty:()=>l,Example:()=>o,FullHeight:()=>c,Typewriter:()=>s,__namedExportsOrder:()=>u,default:()=>r}),r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{r={title:`Layout/Empty`,parameters:{layout:`fullscreen`}},i=e=>`<div style="background: var(--kd-bg-surface); border-block: 1px dashed var(--kd-border-strong);">${e}</div>`,a=`<div style="display: flex; align-items: center; height: 3rem; padding-inline: var(--kd-space-3); background: var(--kd-bg-elevated); border-bottom: 1px dashed var(--kd-border-strong); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">fixed chrome, --kd-navbar-height tall</div>`,o={tags:[`!dev`],render:()=>i(`
<section class="kd-section kd-empty">
  <h3 class="kd-empty__code">404</h3>
  <h4 class="kd-empty__title">Page not found</h4>
  <a class="kd-btn kd-btn--primary" href="#">Navigate to home</a>
</section>
`)},s={tags:[`!dev`],render:()=>i(`
<section class="kd-section kd-empty">
  <h3 class="kd-empty__code">404</h3>
  <h4 class="kd-empty__title kd-typewriter" style="--kd-typewriter-steps: 14;">Page not found</h4>
  <a class="kd-btn kd-btn--primary" href="#">Navigate to home</a>
</section>
`)},c={tags:[`!dev`],render:()=>i(`
${a}
<section class="kd-section kd-h-viewport kd-empty" style="height: 16rem;">
  <h3 class="kd-empty__code">404</h3>
  <h4 class="kd-empty__title">Page not found</h4>
  <a class="kd-btn kd-btn--primary" href="#">Navigate to home</a>
</section>
`)},l={args:{code:`404`,title:`Page not found`,typewriter:!0},argTypes:{code:{control:`text`},title:{control:`text`},typewriter:{control:`boolean`}},render:({code:e,title:t,typewriter:n})=>{let r=[`kd-empty__title`];n&&r.push(`kd-typewriter`);let a=n?` style="--kd-typewriter-steps: ${t.length};"`:``;return i(`
<section class="kd-section kd-empty">
  <h3 class="kd-empty__code">${e}</h3>
  <h4 class="${r.join(` `)}"${a}>${t}</h4>
  <a class="kd-btn kd-btn--primary" href="#">Navigate to home</a>
</section>
`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => page(\`
<section class="kd-section kd-empty">
  <h3 class="kd-empty__code">404</h3>
  <h4 class="kd-empty__title">Page not found</h4>
  <a class="kd-btn kd-btn--primary" href="#">Navigate to home</a>
</section>
\`)
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => page(\`
<section class="kd-section kd-empty">
  <h3 class="kd-empty__code">404</h3>
  <h4 class="kd-empty__title kd-typewriter" style="--kd-typewriter-steps: 14;">Page not found</h4>
  <a class="kd-btn kd-btn--primary" href="#">Navigate to home</a>
</section>
\`)
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => page(\`
\${chrome}
<section class="kd-section kd-h-viewport kd-empty" style="height: 16rem;">
  <h3 class="kd-empty__code">404</h3>
  <h4 class="kd-empty__title">Page not found</h4>
  <a class="kd-btn kd-btn--primary" href="#">Navigate to home</a>
</section>
\`)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    code: "404",
    title: "Page not found",
    typewriter: true
  },
  argTypes: {
    code: {
      control: "text"
    },
    title: {
      control: "text"
    },
    typewriter: {
      control: "boolean"
    }
  },
  render: ({
    code,
    title,
    typewriter
  }) => {
    const classes = ["kd-empty__title"];
    if (typewriter) {
      classes.push("kd-typewriter");
    }
    const steps = typewriter ? \` style="--kd-typewriter-steps: \${title.length};"\` : "";
    return page(\`
<section class="kd-section kd-empty">
  <h3 class="kd-empty__code">\${code}</h3>
  <h4 class="\${classes.join(" ")}"\${steps}>\${title}</h4>
  <a class="kd-btn kd-btn--primary" href="#">Navigate to home</a>
</section>
\`);
  }
}`,...l.parameters?.docs?.source}}},u=[`Example`,`Typewriter`,`FullHeight`,`Empty`]})))()}export{d as a,n as i,c as n,s as r,o as t};
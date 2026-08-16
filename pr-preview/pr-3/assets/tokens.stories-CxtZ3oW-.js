import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Palette:()=>a,Radius:()=>s,Shadow:()=>c,Spacing:()=>o,TypeScale:()=>l,__namedExportsOrder:()=>u,default:()=>r}),r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{r={title:`Tokens`,parameters:{layout:`padded`}},i=e=>`<span style="font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">${e}</span>`,a={tags:[`!dev`],render:()=>`
<div class="kd-d-grid kd-gap-2" style="grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));">
  ${[`navy`,`navy-dim`,`navy-light`,`navy-lightest`,`slate`,`slate-light`,`slate-lightest`,`ice`,`green`,`green-deep`,`paper`,`paper-dim`,`steel`,`amber`,`amber-deep`,`red`,`red-deep`].map(e=>`
  <div>
    <div style="height: 3rem; border: 1px solid var(--kd-border); border-radius: var(--kd-radius-sm); background: var(--kd-color-${e});"></div>
    ${i(`--kd-color-${e}`)}
  </div>`).join(``)}
</div>
`},o={tags:[`!dev`],render:()=>[`0`,`1`,`2`,`3`,`4`,`5`].map(e=>`
<div class="kd-d-flex kd-items-center kd-gap-3" style="margin-bottom: var(--kd-space-1);">
  <div style="width: 9rem;">${i(`--kd-space-${e}`)}</div>
  <div style="height: 1rem; width: var(--kd-space-${e}); background: var(--kd-accent); border-radius: 2px;"></div>
</div>`).join(``)},s={tags:[`!dev`],render:()=>`<div class="kd-d-flex kd-gap-3 kd-flex-wrap">`+[`sm`,`md`,`lg`,`pill`,`circle`].map(e=>`
  <div style="text-align: center;">
    <div style="width: 4rem; height: 4rem; background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); border-radius: var(--kd-radius-${e});"></div>
    ${i(`--kd-radius-${e}`)}
  </div>`).join(``)+`</div>`},c={tags:[`!dev`],render:()=>`<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));">`+[`sm`,`md`,`lg`,`side`].map(e=>`
  <div style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); border-radius: var(--kd-radius-md); box-shadow: var(--kd-shadow-${e});">
    ${i(`--kd-shadow-${e}`)}
  </div>`).join(``)+`</div>`},l={tags:[`!dev`],render:()=>[`xxs`,`sm`,`md`,`lg`,`xl`,`xxl`,`heading`,`xxxl`,`display`].map(e=>`
<div class="kd-d-flex kd-items-baseline kd-gap-3" style="margin-bottom: var(--kd-space-1);">
  <div style="width: 11rem; flex: none;">${i(`--kd-font-size-${e}`)}</div>
  <div style="font-size: var(--kd-font-size-${e}); line-height: 1.1;">Aa</div>
</div>`).join(``)},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-grid kd-gap-2" style="grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));">
  \${["navy", "navy-dim", "navy-light", "navy-lightest", "slate", "slate-light", "slate-lightest", "ice", "green", "green-deep", "paper", "paper-dim", "steel", "amber", "amber-deep", "red", "red-deep"].map(name => \`
  <div>
    <div style="height: 3rem; border: 1px solid var(--kd-border); border-radius: var(--kd-radius-sm); background: var(--kd-color-\${name});"></div>
    \${label(\`--kd-color-\${name}\`)}
  </div>\`).join("")}
</div>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => ["0", "1", "2", "3", "4", "5"].map(step => \`
<div class="kd-d-flex kd-items-center kd-gap-3" style="margin-bottom: var(--kd-space-1);">
  <div style="width: 9rem;">\${label(\`--kd-space-\${step}\`)}</div>
  <div style="height: 1rem; width: var(--kd-space-\${step}); background: var(--kd-accent); border-radius: 2px;"></div>
</div>\`).join("")
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => `<div class="kd-d-flex kd-gap-3 kd-flex-wrap">` + ["sm", "md", "lg", "pill", "circle"].map(name => `\n  <div style="text-align: center;">\n    <div style="width: 4rem; height: 4rem; background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); border-radius: var(--kd-radius-${name});"></div>\n    ${label(`--kd-radius-${name}`)}\n  </div>`).join("") + `</div>`\n}',...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => `<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));">` + ["sm", "md", "lg", "side"].map(name => `\n  <div style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); border-radius: var(--kd-radius-md); box-shadow: var(--kd-shadow-${name});">\n    ${label(`--kd-shadow-${name}`)}\n  </div>`).join("") + `</div>`\n}',...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => ["xxs", "sm", "md", "lg", "xl", "xxl", "heading", "xxxl", "display"].map(name => \`
<div class="kd-d-flex kd-items-baseline kd-gap-3" style="margin-bottom: var(--kd-space-1);">
  <div style="width: 11rem; flex: none;">\${label(\`--kd-font-size-\${name}\`)}</div>
  <div style="font-size: var(--kd-font-size-\${name}); line-height: 1.1;">Aa</div>
</div>\`).join("")
}`,...l.parameters?.docs?.source}}},u=[`Palette`,`Spacing`,`Radius`,`Shadow`,`TypeScale`]})))()}export{l as a,o as i,s as n,d as o,c as r,n as s,a as t};
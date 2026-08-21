import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Example:()=>l,Fab:()=>m,Glow:()=>f,Icon:()=>d,Offsets:()=>p,Visibility:()=>u,__namedExportsOrder:()=>h,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r={title:`Components/Fab`,parameters:{layout:`padded`}},i=`
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M12 19V5" />
  <path d="M5 12l7-7 7 7" />
</svg>
`,a=(e,t=``)=>`
<button type="button" class="${e}" style="position: absolute; ${t}" aria-label="Back to top">
  ${i}
</button>
`,o=(e,t)=>`
<div style="position: relative; height: 10rem; overflow: hidden; border: 1px solid var(--kd-border); background: var(--kd-bg-surface);">
  <span style="position: absolute; top: var(--kd-space-2); left: var(--kd-space-2); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">${e}</span>
  ${t}
</div>
`,s=e=>`<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(2, minmax(0, 1fr));">${e}</div>`,c=`
<div style="position: absolute; right: 0; bottom: 0; left: 0; display: flex; align-items: center; justify-content: flex-end; height: 2.5rem; padding-inline: var(--kd-space-4); border-top: 1px solid var(--kd-border); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">docked bar</div>
`,l={tags:[`!dev`],render:()=>o(`.kd-fab.kd-active`,a(`kd-fab kd-active`))},u={tags:[`!dev`],render:()=>s(o(`.kd-fab`,a(`kd-fab`))+o(`.kd-fab.kd-active`,a(`kd-fab kd-active`)))},d={tags:[`!dev`],render:()=>s(o(`at rest`,a(`kd-fab kd-active`))+o(`hover colour`,a(`kd-fab kd-active`,`color: var(--kd-accent);`)))},f={tags:[`!dev`],render:()=>o(`.kd-animate-glow`,a(`kd-fab kd-active kd-animate-glow`,`--kd-animate-duration: 3s; animation-iteration-count: infinite;`))},p={tags:[`!dev`],render:()=>s(o(`--kd-fab-offset`,a(`kd-fab kd-active`))+o(`inline-end and block-end`,a(`kd-fab kd-active`,`--kd-fab-offset-inline-end: var(--kd-space-4); --kd-fab-offset-block-end: var(--kd-space-6);`)+c))},m={args:{active:!0,size:`2.5rem`,offset:`1.5rem`,offsetInlineEnd:``,offsetBlockEnd:``},argTypes:{active:{control:`boolean`},size:{control:`text`},offset:{control:`text`},offsetInlineEnd:{control:`text`},offsetBlockEnd:{control:`text`}},render:({active:e,size:t,offset:n,offsetInlineEnd:r,offsetBlockEnd:i})=>{let s=[`kd-fab`];e&&s.push(`kd-active`);let c=[`--kd-fab-size: ${t}`,`--kd-fab-offset: ${n}`];return r&&c.push(`--kd-fab-offset-inline-end: ${r}`),i&&c.push(`--kd-fab-offset-block-end: ${i}`),o(s.map(e=>`.${e}`).join(``),a(s.join(` `),`${c.join(`; `)};`))}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(".kd-fab.kd-active", fab("kd-fab kd-active"))
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => row(frame(".kd-fab", fab("kd-fab")) + frame(".kd-fab.kd-active", fab("kd-fab kd-active")))
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => row(frame("at rest", fab("kd-fab kd-active")) + frame("hover colour", fab("kd-fab kd-active", "color: var(--kd-accent);")))
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(".kd-animate-glow", fab("kd-fab kd-active kd-animate-glow", "--kd-animate-duration: 3s; animation-iteration-count: infinite;"))
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => row(frame("--kd-fab-offset", fab("kd-fab kd-active")) + frame("inline-end and block-end", fab("kd-fab kd-active", "--kd-fab-offset-inline-end: var(--kd-space-4); --kd-fab-offset-block-end: var(--kd-space-6);") + bar))
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    active: true,
    size: "2.5rem",
    offset: "1.5rem",
    offsetInlineEnd: "",
    offsetBlockEnd: ""
  },
  argTypes: {
    active: {
      control: "boolean"
    },
    size: {
      control: "text"
    },
    offset: {
      control: "text"
    },
    offsetInlineEnd: {
      control: "text"
    },
    offsetBlockEnd: {
      control: "text"
    }
  },
  render: ({
    active,
    size,
    offset,
    offsetInlineEnd,
    offsetBlockEnd
  }) => {
    const classes = ["kd-fab"];
    if (active) {
      classes.push("kd-active");
    }
    const style = [\`--kd-fab-size: \${size}\`, \`--kd-fab-offset: \${offset}\`];
    if (offsetInlineEnd) {
      style.push(\`--kd-fab-offset-inline-end: \${offsetInlineEnd}\`);
    }
    if (offsetBlockEnd) {
      style.push(\`--kd-fab-offset-block-end: \${offsetBlockEnd}\`);
    }
    return frame(classes.map(name => \`.\${name}\`).join(""), fab(classes.join(" "), \`\${style.join("; ")};\`));
  }
}`,...m.parameters?.docs?.source}}},h=[`Example`,`Visibility`,`Icon`,`Glow`,`Offsets`,`Fab`]})))()}export{u as a,p as i,f as n,n as o,d as r,g as s,l as t};
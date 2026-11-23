import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Customising:()=>d,Example:()=>l,ScrollProgress:()=>p,Subject:()=>u,Vertical:()=>f,__namedExportsOrder:()=>m,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r={title:`Components/Scroll progress`,parameters:{layout:`padded`}},i=(e,t=`40rem`)=>`
<div style="height: ${t}; padding: var(--kd-space-4); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">${e}</div>
`,a=(e,t,n)=>`
<div style="position: relative; timeline-scope: --demo;">
  <span style="display: block; margin-block-end: var(--kd-space-2); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">${e}</span>
  <div style="position: relative; border: 1px solid var(--kd-border); background: var(--kd-bg-surface);">
    ${t}
    <div style="height: 10rem; overflow: auto; scroll-timeline-name: --demo;">${n}</div>
  </div>
</div>
`,o=(e,t=`--demo`,n=``)=>`
<div class="${e}" aria-hidden="true" style="position: absolute; ${t?`--kd-scroll-progress-timeline: ${t};`:``} ${n}"></div>
`,s=`
<div class="kd-scroll-subject" style="height: 24rem; padding: var(--kd-space-4); border-block: 1px solid var(--kd-accent-line); background: var(--kd-accent-soft); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">.kd-scroll-subject</div>
`,c=e=>`<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(2, minmax(0, 1fr));">${e}</div>`,l={tags:[`!dev`],render:()=>a(`.kd-scroll-progress`,o(`kd-scroll-progress`),i(`scroll me`))},u={tags:[`!dev`],render:()=>a(`.kd-scroll-progress--subject`,o(`kd-scroll-progress kd-scroll-progress--subject`,``),i(`before the subject`,`8rem`)+s+i(`after the subject`,`8rem`))},d={tags:[`!dev`],render:()=>c(a(`--kd-scroll-progress-thickness`,o(`kd-scroll-progress`,`--demo`,`--kd-scroll-progress-thickness: 8px;`),i(`thicker`))+a(`--kd-scroll-progress-bg`,o(`kd-scroll-progress`,`--demo`,`--kd-scroll-progress-bg: var(--kd-danger);`),i(`recoloured`)))},f={tags:[`!dev`],render:()=>c(a(`.kd-scroll-progress`,o(`kd-scroll-progress`),i(`horizontal`))+a(`.kd-scroll-progress--vertical`,o(`kd-scroll-progress kd-scroll-progress--vertical`),i(`vertical`)))},p={args:{thickness:`3px`,background:``,inset:`0`,subject:!1,vertical:!1},argTypes:{thickness:{control:`text`},background:{control:`text`},inset:{control:`text`},subject:{control:`boolean`},vertical:{control:`boolean`}},render:({thickness:e,background:t,inset:n,subject:r,vertical:c})=>{let l=[`kd-scroll-progress`],u=[`--kd-scroll-progress-thickness: ${e}`,`--kd-scroll-progress-inset: ${n}`];return t&&u.push(`--kd-scroll-progress-bg: ${t}`),r&&l.push(`kd-scroll-progress--subject`),c&&l.push(`kd-scroll-progress--vertical`),a(l.map(e=>`.${e}`).join(``),o(l.join(` `),r?``:`--demo`,`${u.join(`; `)};`),r?i(`before`,`8rem`)+s+i(`after`,`8rem`):i(`scroll me`))}},m=[`Example`,`Subject`,`Customising`,`Vertical`,`ScrollProgress`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(".kd-scroll-progress", bar("kd-scroll-progress"), filler("scroll me"))
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(".kd-scroll-progress--subject", bar("kd-scroll-progress kd-scroll-progress--subject", ""), filler("before the subject", "8rem") + subjectBlock + filler("after the subject", "8rem"))
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => row(frame("--kd-scroll-progress-thickness", bar("kd-scroll-progress", "--demo", "--kd-scroll-progress-thickness: 8px;"), filler("thicker")) + frame("--kd-scroll-progress-bg", bar("kd-scroll-progress", "--demo", "--kd-scroll-progress-bg: var(--kd-danger);"), filler("recoloured")))
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => row(frame(".kd-scroll-progress", bar("kd-scroll-progress"), filler("horizontal")) + frame(".kd-scroll-progress--vertical", bar("kd-scroll-progress kd-scroll-progress--vertical"), filler("vertical")))
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    thickness: "3px",
    background: "",
    inset: "0",
    subject: false,
    vertical: false
  },
  argTypes: {
    thickness: {
      control: "text"
    },
    background: {
      control: "text"
    },
    inset: {
      control: "text"
    },
    subject: {
      control: "boolean"
    },
    vertical: {
      control: "boolean"
    }
  },
  render: ({
    thickness,
    background,
    inset,
    subject,
    vertical
  }) => {
    const classes = ["kd-scroll-progress"];
    const style = [\`--kd-scroll-progress-thickness: \${thickness}\`, \`--kd-scroll-progress-inset: \${inset}\`];
    if (background) {
      style.push(\`--kd-scroll-progress-bg: \${background}\`);
    }
    if (subject) {
      classes.push("kd-scroll-progress--subject");
    }
    if (vertical) {
      classes.push("kd-scroll-progress--vertical");
    }
    return frame(classes.map(name => \`.\${name}\`).join(""), bar(classes.join(" "), subject ? "" : "--demo", \`\${style.join("; ")};\`), subject ? filler("before", "8rem") + subjectBlock + filler("after", "8rem") : filler("scroll me"));
  }
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,f as i,l as n,n as o,u as r,d as t};
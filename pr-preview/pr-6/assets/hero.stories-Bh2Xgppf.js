import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Entry:()=>l,Example:()=>o,Hero:()=>u,Titles:()=>s,Width:()=>c,__namedExportsOrder:()=>d,default:()=>r}),r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{r={title:`Layout/Hero`,parameters:{layout:`fullscreen`}},i=e=>`<div style="padding: var(--kd-space-4) var(--kd-space-5); background: var(--kd-bg-surface); border-block: 1px dashed var(--kd-border-strong);">${e}</div>`,a=`I build interfaces and the design systems underneath them, in TypeScript and Sass.`,o={tags:[`!dev`],render:()=>i(`
<section class="kd-hero">
  <p class="kd-hero__eyebrow">Hi, my name is</p>
  <h1 class="kd-hero__title">Konstantine Datunishvili</h1>
  <h2 class="kd-hero__subtitle">I create websites.</h2>
  <p class="kd-hero__lede">${a}</p>
</section>
`)},s={tags:[`!dev`],render:()=>i(`
<section class="kd-hero">
  <h1 class="kd-hero__title">Konstantine Datunishvili</h1>
  <h2 class="kd-hero__subtitle">I create websites.</h2>
</section>
`)},c={tags:[`!dev`],render:()=>i(`
<section class="kd-hero kd-measure-xs">
  <p class="kd-hero__eyebrow">Hi, my name is</p>
  <h1 class="kd-hero__title">Konstantine Datunishvili</h1>
  <h2 class="kd-hero__subtitle">I create websites.</h2>
  <p class="kd-hero__lede">${a}</p>
</section>
`)},l={tags:[`!dev`],render:()=>i(`
<section class="kd-section kd-measure-xs kd-hero kd-stagger">
  <p class="kd-hero__eyebrow kd-animate-fade-up">Hi, my name is</p>
  <h1 class="kd-hero__title kd-animate-fade-up">Konstantine Datunishvili</h1>
  <h2 class="kd-hero__subtitle kd-animate-fade-up">I create websites.</h2>
  <p class="kd-hero__lede kd-animate-fade-up">${a}</p>
</section>
`)},u={args:{eyebrow:`Hi, my name is`,title:`Konstantine Datunishvili`,subtitle:`I create websites.`,animate:!0},argTypes:{eyebrow:{control:`text`},title:{control:`text`},subtitle:{control:`text`},animate:{control:`boolean`}},render:({eyebrow:e,title:t,subtitle:n,animate:r})=>{let o=[`kd-hero`,`kd-measure-xs`];r&&o.push(`kd-stagger`);let s=r?` kd-animate-fade-up`:``;return i(`
<section class="${o.join(` `)}">
  <p class="kd-hero__eyebrow${s}">${e}</p>
  <h1 class="kd-hero__title${s}">${t}</h1>
  <h2 class="kd-hero__subtitle${s}">${n}</h2>
  <p class="kd-hero__lede${s}">${a}</p>
</section>
`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(\`
<section class="kd-hero">
  <p class="kd-hero__eyebrow">Hi, my name is</p>
  <h1 class="kd-hero__title">Konstantine Datunishvili</h1>
  <h2 class="kd-hero__subtitle">I create websites.</h2>
  <p class="kd-hero__lede">\${lede}</p>
</section>
\`)
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(\`
<section class="kd-hero">
  <h1 class="kd-hero__title">Konstantine Datunishvili</h1>
  <h2 class="kd-hero__subtitle">I create websites.</h2>
</section>
\`)
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(\`
<section class="kd-hero kd-measure-xs">
  <p class="kd-hero__eyebrow">Hi, my name is</p>
  <h1 class="kd-hero__title">Konstantine Datunishvili</h1>
  <h2 class="kd-hero__subtitle">I create websites.</h2>
  <p class="kd-hero__lede">\${lede}</p>
</section>
\`)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(\`
<section class="kd-section kd-measure-xs kd-hero kd-stagger">
  <p class="kd-hero__eyebrow kd-animate-fade-up">Hi, my name is</p>
  <h1 class="kd-hero__title kd-animate-fade-up">Konstantine Datunishvili</h1>
  <h2 class="kd-hero__subtitle kd-animate-fade-up">I create websites.</h2>
  <p class="kd-hero__lede kd-animate-fade-up">\${lede}</p>
</section>
\`)
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: "Hi, my name is",
    title: "Konstantine Datunishvili",
    subtitle: "I create websites.",
    animate: true
  },
  argTypes: {
    eyebrow: {
      control: "text"
    },
    title: {
      control: "text"
    },
    subtitle: {
      control: "text"
    },
    animate: {
      control: "boolean"
    }
  },
  render: ({
    eyebrow,
    title,
    subtitle,
    animate
  }) => {
    const classes = ["kd-hero", "kd-measure-xs"];
    if (animate) {
      classes.push("kd-stagger");
    }
    const line = animate ? " kd-animate-fade-up" : "";
    return frame(\`
<section class="\${classes.join(" ")}">
  <p class="kd-hero__eyebrow\${line}">\${eyebrow}</p>
  <h1 class="kd-hero__title\${line}">\${title}</h1>
  <h2 class="kd-hero__subtitle\${line}">\${subtitle}</h2>
  <p class="kd-hero__lede\${line}">\${lede}</p>
</section>
\`);
  }
}`,...u.parameters?.docs?.source}}},d=[`Example`,`Titles`,`Width`,`Entry`,`Hero`]})))()}export{n as a,c as i,o as n,f as o,s as r,l as t};
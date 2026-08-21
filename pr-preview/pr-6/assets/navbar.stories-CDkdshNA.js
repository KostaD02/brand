import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({ActiveLink:()=>p,Bare:()=>d,Example:()=>c,Hidden:()=>u,Navbar:()=>m,Responsive:()=>f,Scrolled:()=>l,__namedExportsOrder:()=>h,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r={title:`Components/Navbar`,parameters:{layout:`fullscreen`}},i=`<div style="position: absolute; inset: 0; background: repeating-linear-gradient(180deg, var(--kd-accent-soft) 0 12px, transparent 12px 28px);"></div>`,a=(e,t)=>`
<div style="position: relative; height: 10rem; margin-bottom: var(--kd-space-2); overflow: hidden; border: 1px solid var(--kd-border);">
  ${i}
  ${e}
  <p style="position: absolute; right: var(--kd-space-2); bottom: var(--kd-space-2); margin: 0; font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">${t}</p>
</div>
`,o=`
<a href="#" class="kd-navbar__brand" aria-label="Home">
  <span class="kd-logo">
    <span class="kd-logo__initial">K</span>
    <i class="kd-logo__side"></i>
    <i class="kd-logo__side"></i>
    <i class="kd-logo__side"></i>
  </span>
</a>`,s=`
<ul class="kd-navbar__menu">
  <li><a href="#" class="kd-navbar__link">About</a></li>
  <li><a href="#" class="kd-navbar__link">Work</a></li>
  <li><a href="#" class="kd-navbar__link">Contact</a></li>
  <li><a href="#" class="kd-btn kd-btn--primary kd-btn--sm">Resume</a></li>
</ul>`,c={tags:[`!dev`],render:()=>a(`
<header class="kd-navbar" style="position: absolute;">
  ${o}
  ${s}
</header>
`,`.kd-navbar`)},l={tags:[`!dev`],render:()=>a(`
<header class="kd-navbar kd-navbar--scrolled" style="position: absolute;">
  ${o}
  ${s}
</header>
`,`.kd-navbar--scrolled`)},u={tags:[`!dev`],render:()=>a(`
<header class="kd-navbar" style="position: absolute;">
  ${o}
  ${s}
</header>
`,`.kd-navbar`)+a(`
<header class="kd-navbar kd-navbar--hidden" style="position: absolute;">
  ${o}
  ${s}
</header>
`,`.kd-navbar--hidden`)},d={tags:[`!dev`],render:()=>a(`
<header class="kd-navbar kd-navbar--bare" style="position: absolute;">
  ${o}
  ${s}
</header>
`,`.kd-navbar--bare`)},f={tags:[`!dev`],render:()=>a(`
<header class="kd-navbar" style="position: absolute;">
  ${o}
  <ul class="kd-navbar__menu kd-d-md-none">
    <li><a href="#" class="kd-navbar__link">About</a></li>
    <li><a href="#" class="kd-navbar__link">Work</a></li>
    <li><a href="#" class="kd-navbar__link">Contact</a></li>
    <li><a href="#" class="kd-btn kd-btn--primary kd-btn--sm">Resume</a></li>
  </ul>
  <button
    type="button"
    class="kd-burger kd-d-none kd-d-md-block"
    aria-expanded="false"
    aria-label="Menu"
  >
    <span class="kd-burger__bar"></span>
    <span class="kd-burger__bar"></span>
  </button>
</header>
`,`narrow the window to swap them`)},p={tags:[`!dev`],render:()=>a(`
<header class="kd-navbar" style="position: absolute;">
  ${o}
  <ul class="kd-navbar__menu">
    <li><a href="#" class="kd-navbar__link kd-active" aria-current="page">About</a></li>
    <li><a href="#" class="kd-navbar__link">Work</a></li>
    <li><a href="#" class="kd-navbar__link">Contact</a></li>
    <li><a href="#" class="kd-btn kd-btn--primary kd-btn--sm">Resume</a></li>
  </ul>
</header>
`,`.kd-active on the first link`)},m={args:{variation:`default`,blur:`3px`,height:`80px`},argTypes:{variation:{control:`inline-radio`,options:[`default`,`scrolled`,`hidden`,`bare`]},blur:{control:`text`},height:{control:`text`}},render:({variation:e,blur:t,height:n})=>{let r=[`kd-navbar`];return e!=="default"&&r.push(`kd-navbar--${e}`),a(`
<header
  class="${r.join(` `)}"
  style="position: absolute; --kd-navbar-blur: ${t}; --kd-navbar-height: ${n};"
>
  ${o}
  ${s}
</header>
`,r.map(e=>`.${e}`).join(` `))}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(\`
<header class="kd-navbar" style="position: absolute;">
  \${brand}
  \${menu}
</header>
\`, ".kd-navbar")
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(\`
<header class="kd-navbar kd-navbar--scrolled" style="position: absolute;">
  \${brand}
  \${menu}
</header>
\`, ".kd-navbar--scrolled")
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(\`
<header class="kd-navbar" style="position: absolute;">
  \${brand}
  \${menu}
</header>
\`, ".kd-navbar") + frame(\`
<header class="kd-navbar kd-navbar--hidden" style="position: absolute;">
  \${brand}
  \${menu}
</header>
\`, ".kd-navbar--hidden")
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(\`
<header class="kd-navbar kd-navbar--bare" style="position: absolute;">
  \${brand}
  \${menu}
</header>
\`, ".kd-navbar--bare")
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(\`
<header class="kd-navbar" style="position: absolute;">
  \${brand}
  <ul class="kd-navbar__menu kd-d-md-none">
    <li><a href="#" class="kd-navbar__link">About</a></li>
    <li><a href="#" class="kd-navbar__link">Work</a></li>
    <li><a href="#" class="kd-navbar__link">Contact</a></li>
    <li><a href="#" class="kd-btn kd-btn--primary kd-btn--sm">Resume</a></li>
  </ul>
  <button
    type="button"
    class="kd-burger kd-d-none kd-d-md-block"
    aria-expanded="false"
    aria-label="Menu"
  >
    <span class="kd-burger__bar"></span>
    <span class="kd-burger__bar"></span>
  </button>
</header>
\`, "narrow the window to swap them")
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(\`
<header class="kd-navbar" style="position: absolute;">
  \${brand}
  <ul class="kd-navbar__menu">
    <li><a href="#" class="kd-navbar__link kd-active" aria-current="page">About</a></li>
    <li><a href="#" class="kd-navbar__link">Work</a></li>
    <li><a href="#" class="kd-navbar__link">Contact</a></li>
    <li><a href="#" class="kd-btn kd-btn--primary kd-btn--sm">Resume</a></li>
  </ul>
</header>
\`, ".kd-active on the first link")
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variation: "default",
    blur: "3px",
    height: "80px"
  },
  argTypes: {
    variation: {
      control: "inline-radio",
      options: ["default", "scrolled", "hidden", "bare"]
    },
    blur: {
      control: "text"
    },
    height: {
      control: "text"
    }
  },
  render: ({
    variation,
    blur,
    height
  }) => {
    const classes = ["kd-navbar"];
    if (variation !== "default") {
      classes.push(\`kd-navbar--\${variation}\`);
    }
    return frame(\`
<header
  class="\${classes.join(" ")}"
  style="position: absolute; --kd-navbar-blur: \${blur}; --kd-navbar-height: \${height};"
>
  \${brand}
  \${menu}
</header>
\`, classes.map(name => \`.\${name}\`).join(" "));
  }
}`,...m.parameters?.docs?.source}}},h=[`Example`,`Scrolled`,`Hidden`,`Bare`,`Responsive`,`ActiveLink`,`Navbar`]})))()}export{f as a,n as c,u as i,d as n,l as o,c as r,g as s,p as t};
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Closing:()=>c,Drawer:()=>l,Example:()=>o,Menu:()=>s,__namedExportsOrder:()=>u,default:()=>r}),r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{r={title:`Components/Drawer`},i=e=>`
<div style="position: relative; height: 15rem; overflow: hidden; border: 1px solid var(--kd-border); background: var(--kd-bg-surface);">
  <div style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); line-height: 2; color: var(--kd-text-muted);">
    page content behind the drawer<br />
    page content behind the drawer<br />
    page content behind the drawer<br />
    page content behind the drawer
  </div>
  ${e}
</div>
`,a=`animation-duration: 1.6s; animation-iteration-count: infinite; animation-direction: alternate;`,o={tags:[`!dev`],render:()=>i(`
  <div class="kd-drawer" style="position: absolute;">
    <ul class="kd-drawer__panel">
      <li><a href="#" class="kd-navbar__link">About</a></li>
      <li><a href="#" class="kd-navbar__link">Work</a></li>
    </ul>
  </div>
`)},s={tags:[`!dev`],render:()=>i(`
  <div class="kd-drawer" style="position: absolute;">
    <ul class="kd-drawer__panel">
      <li><a href="#" class="kd-navbar__link">About</a></li>
      <li><a href="#" class="kd-navbar__link">Experience</a></li>
      <li><a href="#" class="kd-navbar__link">Work</a></li>
      <li><a href="#" class="kd-navbar__link">Contact</a></li>
      <li><a href="#" class="kd-btn kd-btn--primary kd-btn--sm">Resume</a></li>
    </ul>
  </div>
`)},c={tags:[`!dev`],render:()=>i(`
  <div class="kd-drawer kd-drawer--closing" style="position: absolute; ${a}">
    <ul class="kd-drawer__panel" style="${a}">
      <li><a href="#" class="kd-navbar__link">About</a></li>
      <li><a href="#" class="kd-navbar__link">Work</a></li>
    </ul>
  </div>
`)},l={args:{width:`min(65vw, 300px)`,closing:!1,blur:`3px`},argTypes:{width:{control:`text`},closing:{control:`boolean`},blur:{control:`text`}},render:({width:e,closing:t,blur:n})=>{let r=[`kd-drawer`];t&&r.push(`kd-drawer--closing`);let o=[`position: absolute;`,`--kd-drawer-width: ${e};`,`--kd-drawer-blur: ${n};`,t?a:``].join(` `);return i(`
  <div class="${r.join(` `)}" style="${o}">
    <ul class="kd-drawer__panel" style="${t?a:``}">
      <li><a href="#" class="kd-navbar__link">About</a></li>
      <li><a href="#" class="kd-navbar__link">Work</a></li>
      <li><a href="#" class="kd-btn kd-btn--primary kd-btn--sm">Resume</a></li>
    </ul>
  </div>
`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(\`
  <div class="kd-drawer" style="position: absolute;">
    <ul class="kd-drawer__panel">
      <li><a href="#" class="kd-navbar__link">About</a></li>
      <li><a href="#" class="kd-navbar__link">Work</a></li>
    </ul>
  </div>
\`)
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(\`
  <div class="kd-drawer" style="position: absolute;">
    <ul class="kd-drawer__panel">
      <li><a href="#" class="kd-navbar__link">About</a></li>
      <li><a href="#" class="kd-navbar__link">Experience</a></li>
      <li><a href="#" class="kd-navbar__link">Work</a></li>
      <li><a href="#" class="kd-navbar__link">Contact</a></li>
      <li><a href="#" class="kd-btn kd-btn--primary kd-btn--sm">Resume</a></li>
    </ul>
  </div>
\`)
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(\`
  <div class="kd-drawer kd-drawer--closing" style="position: absolute; \${loop}">
    <ul class="kd-drawer__panel" style="\${loop}">
      <li><a href="#" class="kd-navbar__link">About</a></li>
      <li><a href="#" class="kd-navbar__link">Work</a></li>
    </ul>
  </div>
\`)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    width: "min(65vw, 300px)",
    closing: false,
    blur: "3px"
  },
  argTypes: {
    width: {
      control: "text"
    },
    closing: {
      control: "boolean"
    },
    blur: {
      control: "text"
    }
  },
  render: ({
    width,
    closing,
    blur
  }) => {
    const classes = ["kd-drawer"];
    if (closing) {
      classes.push("kd-drawer--closing");
    }
    const style = ["position: absolute;", \`--kd-drawer-width: \${width};\`, \`--kd-drawer-blur: \${blur};\`, closing ? loop : ""].join(" ");
    return frame(\`
  <div class="\${classes.join(" ")}" style="\${style}">
    <ul class="kd-drawer__panel" style="\${closing ? loop : ""}">
      <li><a href="#" class="kd-navbar__link">About</a></li>
      <li><a href="#" class="kd-navbar__link">Work</a></li>
      <li><a href="#" class="kd-btn kd-btn--primary kd-btn--sm">Resume</a></li>
    </ul>
  </div>
\`);
  }
}`,...l.parameters?.docs?.source}}},u=[`Example`,`Menu`,`Closing`,`Drawer`]})))()}export{d as a,n as i,o as n,s as r,c as t};
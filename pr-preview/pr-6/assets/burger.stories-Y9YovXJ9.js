import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Burger:()=>s,Example:()=>i,InNavbar:()=>o,Open:()=>a,__namedExportsOrder:()=>c,default:()=>r}),r,i,a,o,s,c;function l(){return(l=e((()=>{r={title:`Components/Burger`},i={tags:[`!dev`],render:()=>`
<button type="button" class="kd-burger" aria-expanded="false" aria-label="Menu">
  <span class="kd-burger__bar"></span>
  <span class="kd-burger__bar"></span>
</button>
`},a={tags:[`!dev`],render:()=>`
<button type="button" class="kd-burger" aria-expanded="true" aria-label="Menu">
  <span class="kd-burger__bar"></span>
  <span class="kd-burger__bar"></span>
</button>
`},o={tags:[`!dev`],render:()=>`
<div style="position: relative; height: 8rem; overflow: hidden; border: 1px solid var(--kd-border);">
  <header class="kd-navbar" style="position: absolute;">
    <a href="#" class="kd-navbar__brand" aria-label="Home">
      <span class="kd-logo">
        <span class="kd-logo__initial">K</span>
        <i class="kd-logo__side"></i>
        <i class="kd-logo__side"></i>
        <i class="kd-logo__side"></i>
      </span>
    </a>
    <button type="button" class="kd-burger" aria-expanded="false" aria-label="Menu">
      <span class="kd-burger__bar"></span>
      <span class="kd-burger__bar"></span>
    </button>
  </header>
</div>
`},s={args:{expanded:!1,size:`30px`,color:`var(--kd-accent)`},argTypes:{expanded:{control:`boolean`},size:{control:`text`},color:{control:`text`}},render:({expanded:e,size:t,color:n})=>`
<button
  type="button"
  class="kd-burger"
  style="--kd-burger-size: ${t}; --kd-burger-color: ${n};"
  aria-expanded="${e}"
  aria-label="Menu"
>
  <span class="kd-burger__bar"></span>
  <span class="kd-burger__bar"></span>
</button>
`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<button type="button" class="kd-burger" aria-expanded="false" aria-label="Menu">
  <span class="kd-burger__bar"></span>
  <span class="kd-burger__bar"></span>
</button>
\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<button type="button" class="kd-burger" aria-expanded="true" aria-label="Menu">
  <span class="kd-burger__bar"></span>
  <span class="kd-burger__bar"></span>
</button>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div style="position: relative; height: 8rem; overflow: hidden; border: 1px solid var(--kd-border);">
  <header class="kd-navbar" style="position: absolute;">
    <a href="#" class="kd-navbar__brand" aria-label="Home">
      <span class="kd-logo">
        <span class="kd-logo__initial">K</span>
        <i class="kd-logo__side"></i>
        <i class="kd-logo__side"></i>
        <i class="kd-logo__side"></i>
      </span>
    </a>
    <button type="button" class="kd-burger" aria-expanded="false" aria-label="Menu">
      <span class="kd-burger__bar"></span>
      <span class="kd-burger__bar"></span>
    </button>
  </header>
</div>
\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: false,
    size: "30px",
    color: "var(--kd-accent)"
  },
  argTypes: {
    expanded: {
      control: "boolean"
    },
    size: {
      control: "text"
    },
    color: {
      control: "text"
    }
  },
  render: ({
    expanded,
    size,
    color
  }) => \`
<button
  type="button"
  class="kd-burger"
  style="--kd-burger-size: \${size}; --kd-burger-color: \${color};"
  aria-expanded="\${expanded}"
  aria-label="Menu"
>
  <span class="kd-burger__bar"></span>
  <span class="kd-burger__bar"></span>
</button>
\`
}`,...s.parameters?.docs?.source}}},c=[`Example`,`Open`,`InNavbar`,`Burger`]})))()}export{l as a,n as i,o as n,a as r,i as t};
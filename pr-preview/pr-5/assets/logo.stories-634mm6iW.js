import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({AsLink:()=>l,Colour:()=>c,Example:()=>o,Logo:()=>u,Sizes:()=>s,__namedExportsOrder:()=>d,default:()=>r}),r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{r={title:`Components/Logo`},i=(e,t=`K`)=>`
<span class="kd-logo" style="${e}" role="img" aria-label="Konstantine Datunishvili">
  <span class="kd-logo__initial">${t}</span>
  <i class="kd-logo__side"></i>
  <i class="kd-logo__side"></i>
  <i class="kd-logo__side"></i>
</span>
`,a=e=>`<div class="kd-d-flex kd-items-center kd-gap-4">${e}</div>`,o={tags:[`!dev`],render:()=>i(``)},s={tags:[`!dev`],render:()=>a(i(`--kd-logo-width: 28px; --kd-logo-bar: 3px;`)+i(``)+i(`--kd-logo-width: 90px; --kd-logo-bar: 7px;`))},c={tags:[`!dev`],render:()=>a(i(``)+i(`--kd-logo-color: var(--kd-text-primary);`)+i(`--kd-logo-color: var(--kd-text-muted);`))},l={tags:[`!dev`],render:()=>`
<a href="#" class="kd-logo" aria-label="Home">
  <span class="kd-logo__initial">K</span>
  <i class="kd-logo__side"></i>
  <i class="kd-logo__side"></i>
  <i class="kd-logo__side"></i>
</a>
`},u={args:{initial:`K`,width:`45px`,bar:`4px`,color:`#64ffda`},argTypes:{initial:{control:`text`},width:{control:`text`},bar:{control:`text`},color:{control:`color`}},render:({initial:e,width:t,bar:n,color:r})=>i(`--kd-logo-width: ${t}; --kd-logo-bar: ${n}; --kd-logo-color: ${r};`,e)},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => logo("")
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => row(logo("--kd-logo-width: 28px; --kd-logo-bar: 3px;") + logo("") + logo("--kd-logo-width: 90px; --kd-logo-bar: 7px;"))
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => row(logo("") + logo("--kd-logo-color: var(--kd-text-primary);") + logo("--kd-logo-color: var(--kd-text-muted);"))
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<a href="#" class="kd-logo" aria-label="Home">
  <span class="kd-logo__initial">K</span>
  <i class="kd-logo__side"></i>
  <i class="kd-logo__side"></i>
  <i class="kd-logo__side"></i>
</a>
\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    initial: "K",
    width: "45px",
    bar: "4px",
    color: "#64ffda"
  },
  argTypes: {
    initial: {
      control: "text"
    },
    width: {
      control: "text"
    },
    bar: {
      control: "text"
    },
    color: {
      control: "color"
    }
  },
  render: ({
    initial,
    width,
    bar,
    color
  }) => logo(\`--kd-logo-width: \${width}; --kd-logo-bar: \${bar}; --kd-logo-color: \${color};\`, initial)
}`,...u.parameters?.docs?.source}}},d=[`Example`,`Sizes`,`Colour`,`AsLink`,`Logo`]})))()}export{f as a,s as i,c as n,n as o,o as r,l as t};
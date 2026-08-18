import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({CurrentColor:()=>u,Example:()=>c,IconLink:()=>f,InDock:()=>d,Row:()=>l,__namedExportsOrder:()=>p,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r={title:`Components/Icon Link`},i={mail:`<rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" />`,external:`<path d="M14 4h6v6" /><path d="M20 4 10 14" /><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />`,code:`<path d="m8 8-4 4 4 4" /><path d="m16 8 4 4-4 4" />`,bookmark:`<path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z" />`},a=`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2Zm0-8h-2V7h2Z" />
</svg>`,o=(e,t=`currentColor`)=>`<svg viewBox="0 0 24 24" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${e}</svg>`,s=(e,t)=>`<a href="#" class="kd-icon-link" aria-label="${e}">${t}</a>`,c={tags:[`!dev`],render:()=>s(`About this project`,a)},l={tags:[`!dev`],render:()=>s(`Email`,o(i.mail))+s(`Source`,o(i.code))+s(`Saved`,o(i.bookmark))+s(`Live site`,o(i.external))},u={tags:[`!dev`],render:()=>s(`Follows the link colour`,o(i.external))+s(`Frozen at a literal grey`,o(i.external,`#8892b0`))},d={tags:[`!dev`],render:()=>`
<div style="position: relative; height: 16rem; overflow: hidden; border: 1px solid var(--kd-border);">
  <ul class="kd-dock kd-dock--start" style="position: absolute;">
    <li>${s(`Email`,o(i.mail))}</li>
    <li>${s(`Source`,o(i.code))}</li>
    <li>${s(`Live site`,o(i.external))}</li>
  </ul>
</div>
`},f={args:{size:`20px`,padding:`0.625rem`},argTypes:{size:{control:`text`},padding:{control:`text`}},render:({size:e,padding:t})=>`
<a
  href="#"
  class="kd-icon-link"
  style="--kd-icon-link-size: ${e}; --kd-icon-link-padding: ${t};"
  aria-label="Live site"
>
  ${o(i.external)}
</a>
`},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => iconLink("About this project", filledIcon)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => iconLink("Email", strokedIcon(iconPaths.mail)) + iconLink("Source", strokedIcon(iconPaths.code)) + iconLink("Saved", strokedIcon(iconPaths.bookmark)) + iconLink("Live site", strokedIcon(iconPaths.external))
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => iconLink("Follows the link colour", strokedIcon(iconPaths.external)) + iconLink("Frozen at a literal grey", strokedIcon(iconPaths.external, "#8892b0"))
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div style="position: relative; height: 16rem; overflow: hidden; border: 1px solid var(--kd-border);">
  <ul class="kd-dock kd-dock--start" style="position: absolute;">
    <li>\${iconLink("Email", strokedIcon(iconPaths.mail))}</li>
    <li>\${iconLink("Source", strokedIcon(iconPaths.code))}</li>
    <li>\${iconLink("Live site", strokedIcon(iconPaths.external))}</li>
  </ul>
</div>
\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: "20px",
    padding: "0.625rem"
  },
  argTypes: {
    size: {
      control: "text"
    },
    padding: {
      control: "text"
    }
  },
  render: ({
    size,
    padding
  }) => \`
<a
  href="#"
  class="kd-icon-link"
  style="--kd-icon-link-size: \${size}; --kd-icon-link-padding: \${padding};"
  aria-label="Live site"
>
  \${strokedIcon(iconPaths.external)}
</a>
\`
}`,...f.parameters?.docs?.source}}},p=[`Example`,`Row`,`CurrentColor`,`InDock`,`IconLink`]})))()}export{n as a,l as i,c as n,m as o,d as r,u as t};
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Example:()=>c,Gap:()=>d,Grid:()=>f,Minimum:()=>l,Reflow:()=>u,__namedExportsOrder:()=>p,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r={title:`Utilities/Grid`,parameters:{layout:`padded`}},i=e=>`<p style="margin-bottom: var(--kd-space-2); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">${e}</p>`,a=e=>`
<div class="kd-card">
  <div class="kd-card__body">
    <div class="kd-card__title">Card ${e}</div>
    <div class="kd-card__text">One track of the grid.</div>
  </div>
</div>
`,o=e=>Array.from({length:e},(e,t)=>a(t+1)).join(``),s=(e,t)=>`<div style="margin-bottom: var(--kd-space-4);">${i(e)}${t}</div>`,c={tags:[`!dev`],render:()=>`<div class="kd-grid-auto">${o(6)}</div>`},l={tags:[`!dev`],render:()=>[`10rem`,`18rem`].map(e=>s(`--kd-grid-min: ${e}`,`<div class="kd-grid-auto" style="--kd-grid-min: ${e};">${o(4)}</div>`)).join(``)},u={tags:[`!dev`],render:()=>[`100%`,`24rem`].map(e=>s(`same markup, container at ${e}`,`<div style="max-width: ${e};"><div class="kd-grid-auto">${o(3)}</div></div>`)).join(``)},d={tags:[`!dev`],render:()=>[`var(--kd-space-1)`,`var(--kd-space-5)`].map(e=>s(`--kd-grid-gap: ${e}`,`<div class="kd-grid-auto" style="--kd-grid-gap: ${e};">${o(3)}</div>`)).join(``)},f={args:{min:`250px`,gap:`1rem`,count:6},argTypes:{min:{control:`text`},gap:{control:`text`},count:{control:{type:`range`,min:1,max:12}}},render:({min:e,gap:t,count:n})=>`
<div class="kd-grid-auto" style="--kd-grid-min: ${e}; --kd-grid-gap: ${t};">
  ${o(n)}
</div>
`},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`<div class="kd-grid-auto">\${cards(6)}</div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["10rem", "18rem"].map(min => stack(`--kd-grid-min: ${min}`, `<div class="kd-grid-auto" style="--kd-grid-min: ${min};">${cards(4)}</div>`)).join("")\n}',...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["100%", "24rem"].map(width => stack(`same markup, container at ${width}`, `<div style="max-width: ${width};"><div class="kd-grid-auto">${cards(3)}</div></div>`)).join("")\n}',...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => ["var(--kd-space-1)", "var(--kd-space-5)"].map(gap => stack(`--kd-grid-gap: ${gap}`, `<div class="kd-grid-auto" style="--kd-grid-gap: ${gap};">${cards(3)}</div>`)).join("")\n}',...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    min: "250px",
    gap: "1rem",
    count: 6
  },
  argTypes: {
    min: {
      control: "text"
    },
    gap: {
      control: "text"
    },
    count: {
      control: {
        type: "range",
        min: 1,
        max: 12
      }
    }
  },
  render: ({
    min,
    gap,
    count
  }) => \`
<div class="kd-grid-auto" style="--kd-grid-min: \${min}; --kd-grid-gap: \${gap};">
  \${cards(count)}
</div>
\`
}`,...f.parameters?.docs?.source}}},p=[`Example`,`Minimum`,`Reflow`,`Gap`,`Grid`]})))()}export{n as a,u as i,d as n,m as o,l as r,c as t};
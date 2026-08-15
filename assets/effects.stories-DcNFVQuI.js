import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Effects:()=>u,FocusRing:()=>l,Opacity:()=>c,Pop:()=>s,Shadow:()=>o,__namedExportsOrder:()=>d,default:()=>r}),r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{r={title:`Utilities/Effects`,parameters:{layout:`padded`}},i=(e,t)=>`<div class="${e}" style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${t}</div>`,a=e=>`<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));">${e}</div>`,o={tags:[`!dev`],render:()=>a([`sm`,`md`,`lg`,`side`].map(e=>i(`kd-shadow-${e}`,`.kd-shadow-${e}`)).join(``))},s={tags:[`!dev`],render:()=>`
<div class="kd-d-flex kd-gap-4">
  <div class="kd-pop kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop</div>
  <div class="kd-pop-lg kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop-lg</div>
</div>
`},c={tags:[`!dev`],render:()=>a([`25`,`50`,`75`,`100`].map(e=>i(`kd-opacity-${e}`,`.kd-opacity-${e}`)).join(``))},l={tags:[`!dev`],render:()=>`
<button type="button" class="kd-focus-ring kd-border-1" style="padding: var(--kd-space-2); background: transparent; color: inherit; font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">
  Tab to me: .kd-focus-ring
</button>
`},u={args:{shadow:`md`,opacity:`100`},argTypes:{shadow:{control:`inline-radio`,options:[`sm`,`md`,`lg`,`side`,`none`]},opacity:{control:`inline-radio`,options:[`0`,`25`,`50`,`75`,`100`]}},render:({shadow:e,opacity:t})=>i(`kd-shadow-${e} kd-opacity-${t}`,`.kd-shadow-${e} .kd-opacity-${t}`)},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["sm", "md", "lg", "side"].map(name => cell(`kd-shadow-${name}`, `.kd-shadow-${name}`)).join(""))\n}',...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-flex kd-gap-4">
  <div class="kd-pop kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop</div>
  <div class="kd-pop-lg kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop-lg</div>
</div>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["25", "50", "75", "100"].map(value => cell(`kd-opacity-${value}`, `.kd-opacity-${value}`)).join(""))\n}',...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<button type="button" class="kd-focus-ring kd-border-1" style="padding: var(--kd-space-2); background: transparent; color: inherit; font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">
  Tab to me: .kd-focus-ring
</button>
\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    shadow: "md",
    opacity: "100"
  },
  argTypes: {
    shadow: {
      control: "inline-radio",
      options: ["sm", "md", "lg", "side", "none"]
    },
    opacity: {
      control: "inline-radio",
      options: ["0", "25", "50", "75", "100"]
    }
  },
  render: ({
    shadow,
    opacity
  }) => cell(\`kd-shadow-\${shadow} kd-opacity-\${opacity}\`, \`.kd-shadow-\${shadow} .kd-opacity-\${opacity}\`)
}`,...u.parameters?.docs?.source}}},d=[`Shadow`,`Pop`,`Opacity`,`FocusRing`,`Effects`]})))()}export{n as a,o as i,c as n,f as o,s as r,l as t};
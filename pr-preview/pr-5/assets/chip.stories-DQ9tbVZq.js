import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Accent:()=>a,AgainstStatusPill:()=>c,Bare:()=>s,Chip:()=>l,Example:()=>i,Pill:()=>o,__namedExportsOrder:()=>u,default:()=>r}),r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{r={title:`Components/Chip`},i={tags:[`!dev`],render:()=>`
<span class="kd-chip">CSS</span>
<span class="kd-chip">Sass</span>
<span class="kd-chip">Storybook</span>
`},a={tags:[`!dev`],render:()=>`
<span class="kd-chip">Draft</span>
<span class="kd-chip kd-chip--accent">Featured</span>
`},o={tags:[`!dev`],render:()=>`
<span class="kd-chip kd-chip--pill">TypeScript</span>
<span class="kd-chip kd-chip--pill kd-chip--accent">Vite</span>
`},s={tags:[`!dev`],render:()=>`
<span class="kd-chip kd-chip--bare">Nest.js</span>
<span class="kd-chip kd-chip--bare">Postgres</span>
<span class="kd-chip kd-chip--bare">Docker</span>
`},c={tags:[`!dev`],render:()=>`
<span class="kd-chip">CSS</span>
<span class="kd-status-pill kd-status-pill--active">
  <span class="kd-status-pill__dot"></span>
  Running
</span>
`},l={args:{variation:`default`,pill:!1,label:`TypeScript`},argTypes:{variation:{control:`inline-radio`,options:[`default`,`accent`,`bare`]},pill:{control:`boolean`},label:{control:`text`}},render:({variation:e,pill:t,label:n})=>{let r=[`kd-chip`];return e!=="default"&&r.push(`kd-chip--${e}`),t&&r.push(`kd-chip--pill`),`
<span class="${r.join(` `)}">${n}</span>
`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<span class="kd-chip">CSS</span>
<span class="kd-chip">Sass</span>
<span class="kd-chip">Storybook</span>
\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<span class="kd-chip">Draft</span>
<span class="kd-chip kd-chip--accent">Featured</span>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<span class="kd-chip kd-chip--pill">TypeScript</span>
<span class="kd-chip kd-chip--pill kd-chip--accent">Vite</span>
\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<span class="kd-chip kd-chip--bare">Nest.js</span>
<span class="kd-chip kd-chip--bare">Postgres</span>
<span class="kd-chip kd-chip--bare">Docker</span>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<span class="kd-chip">CSS</span>
<span class="kd-status-pill kd-status-pill--active">
  <span class="kd-status-pill__dot"></span>
  Running
</span>
\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variation: "default",
    pill: false,
    label: "TypeScript"
  },
  argTypes: {
    variation: {
      control: "inline-radio",
      options: ["default", "accent", "bare"]
    },
    pill: {
      control: "boolean"
    },
    label: {
      control: "text"
    }
  },
  render: ({
    variation,
    pill,
    label
  }) => {
    const classes = ["kd-chip"];
    if (variation !== "default") {
      classes.push(\`kd-chip--\${variation}\`);
    }
    if (pill) {
      classes.push("kd-chip--pill");
    }
    return \`
<span class="\${classes.join(" ")}">\${label}</span>
\`;
  }
}`,...l.parameters?.docs?.source}}},u=[`Example`,`Accent`,`Pill`,`Bare`,`AgainstStatusPill`,`Chip`]})))()}export{o as a,i,c as n,n as o,s as r,d as s,a as t};
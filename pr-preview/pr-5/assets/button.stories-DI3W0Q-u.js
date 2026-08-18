import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Anatomy:()=>u,Block:()=>s,Button:()=>d,Disabled:()=>l,Icon:()=>c,Outline:()=>a,Sizes:()=>o,Variations:()=>i,__namedExportsOrder:()=>f,default:()=>r}),r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r={title:`Components/Button`},i={tags:[`!dev`],render:()=>`
<div class="kd-d-flex kd-gap-2 kd-flex-wrap">
  <button type="button" class="kd-btn kd-btn--primary">Primary</button>
  <button type="button" class="kd-btn kd-btn--outline">Outline</button>
  <button type="button" class="kd-btn kd-btn--ghost">Ghost</button>
  <button type="button" class="kd-btn kd-btn--danger">Danger</button>
</div>
`},a={tags:[`!dev`],render:()=>`
<a class="kd-btn kd-btn--outline" href="#">Resume</a>
`},o={tags:[`!dev`],render:()=>`
<button type="button" class="kd-btn kd-btn--primary kd-btn--sm">Small</button>
<button type="button" class="kd-btn kd-btn--primary">Medium</button>
<button type="button" class="kd-btn kd-btn--primary kd-btn--lg">Large</button>
`},s={tags:[`!dev`],render:()=>`
<button type="button" class="kd-btn kd-btn--primary kd-btn--block">Block</button>
`},c={tags:[`!dev`],render:()=>`
<button type="button" class="kd-btn kd-btn--primary">
  <span class="kd-btn__icon" aria-hidden="true">&rarr;</span>
  Continue
</button>

<button type="button" class="kd-btn kd-btn--ghost" aria-label="Next">
  <span class="kd-btn__icon" aria-hidden="true">&rarr;</span>
</button>
`},l={tags:[`!dev`],render:()=>`
<button type="button" class="kd-btn kd-btn--primary" disabled>Disabled</button>
<a class="kd-btn kd-btn--ghost" role="button" aria-disabled="true">Disabled link</a>
`},u={tags:[`!dev`],render:()=>`
<button
  type="button"
  class="kd-btn"
  style="--kd-btn-color: var(--kd-warning); --kd-btn-border-color: var(--kd-warning); --kd-btn-pop-color: var(--kd-warning); --kd-btn-hover-color: var(--kd-text-inverse); --kd-btn-hover-bg: var(--kd-warning);"
>
  Warning
</button>
`},d={args:{label:`Button`,variation:`primary`,size:`md`,block:!1,disabled:!1},argTypes:{label:{control:`text`},variation:{control:`inline-radio`,options:[`primary`,`outline`,`ghost`,`danger`]},size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},block:{control:`boolean`},disabled:{control:`boolean`}},render:({label:e,variation:t,size:n,block:r,disabled:i})=>{let a=[`kd-btn`,`kd-btn--${t}`];return n!==`md`&&a.push(`kd-btn--${n}`),r&&a.push(`kd-btn--block`),`
<button type="button" class="${a.join(` `)}"${i?` disabled`:``}>${e}</button>
`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-flex kd-gap-2 kd-flex-wrap">
  <button type="button" class="kd-btn kd-btn--primary">Primary</button>
  <button type="button" class="kd-btn kd-btn--outline">Outline</button>
  <button type="button" class="kd-btn kd-btn--ghost">Ghost</button>
  <button type="button" class="kd-btn kd-btn--danger">Danger</button>
</div>
\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<a class="kd-btn kd-btn--outline" href="#">Resume</a>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<button type="button" class="kd-btn kd-btn--primary kd-btn--sm">Small</button>
<button type="button" class="kd-btn kd-btn--primary">Medium</button>
<button type="button" class="kd-btn kd-btn--primary kd-btn--lg">Large</button>
\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<button type="button" class="kd-btn kd-btn--primary kd-btn--block">Block</button>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<button type="button" class="kd-btn kd-btn--primary">
  <span class="kd-btn__icon" aria-hidden="true">&rarr;</span>
  Continue
</button>

<button type="button" class="kd-btn kd-btn--ghost" aria-label="Next">
  <span class="kd-btn__icon" aria-hidden="true">&rarr;</span>
</button>
\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<button type="button" class="kd-btn kd-btn--primary" disabled>Disabled</button>
<a class="kd-btn kd-btn--ghost" role="button" aria-disabled="true">Disabled link</a>
\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<button
  type="button"
  class="kd-btn"
  style="--kd-btn-color: var(--kd-warning); --kd-btn-border-color: var(--kd-warning); --kd-btn-pop-color: var(--kd-warning); --kd-btn-hover-color: var(--kd-text-inverse); --kd-btn-hover-bg: var(--kd-warning);"
>
  Warning
</button>
\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Button",
    variation: "primary",
    size: "md",
    block: false,
    disabled: false
  },
  argTypes: {
    label: {
      control: "text"
    },
    variation: {
      control: "inline-radio",
      options: ["primary", "outline", "ghost", "danger"]
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    },
    block: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  },
  render: ({
    label,
    variation,
    size,
    block,
    disabled
  }) => {
    const classes = ["kd-btn", \`kd-btn--\${variation}\`];
    if (size !== "md") {
      classes.push(\`kd-btn--\${size}\`);
    }
    if (block) {
      classes.push("kd-btn--block");
    }
    return \`
<button type="button" class="\${classes.join(" ")}"\${disabled ? " disabled" : ""}>\${label}</button>
\`;
  }
}`,...d.parameters?.docs?.source}}},f=[`Variations`,`Outline`,`Sizes`,`Block`,`Icon`,`Disabled`,`Anatomy`,`Button`]})))()}export{a,n as c,c as i,p as l,s as n,o,l as r,i as s,u as t};
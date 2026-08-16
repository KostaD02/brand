import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Active:()=>o,Anchor:()=>a,Example:()=>i,Link:()=>c,Skip:()=>s,__namedExportsOrder:()=>l,default:()=>r}),r,i,a,o,s,c,l;function u(){return(u=e((()=>{r={title:`Components/Link`},i={tags:[`!dev`],render:()=>`
<p>
  Every bare <a href="#">anchor</a> already carries the underline treatment, so
  <code>kd-link</code> is only needed where the element is not an anchor.
</p>
`},a={tags:[`!dev`],render:()=>`
<a href="#" class="kd-link kd-link--anchor">Heading anchor</a>
`},o={tags:[`!dev`],render:()=>`
<a href="#" class="kd-link kd-active">Active link</a>
`},s={tags:[`!dev`],render:()=>`
<div style="position: relative; height: 5rem;">
  <a href="#main" class="kd-skip">Skip to content</a>
  <p style="color: var(--kd-text-muted);">
    Tab into this frame. The skip link is off-screen until it receives focus.
  </p>
</div>
`},c={args:{label:`Link`,variant:`default`,active:!1},argTypes:{label:{control:`text`},variant:{control:`inline-radio`,options:[`default`,`anchor`]},active:{control:`boolean`}},render:({label:e,variant:t,active:n})=>{let r=[`kd-link`];return t===`anchor`&&r.push(`kd-link--anchor`),n&&r.push(`kd-active`),`
<a href="#" class="${r.join(` `)}">${e}</a>
`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<p>
  Every bare <a href="#">anchor</a> already carries the underline treatment, so
  <code>kd-link</code> is only needed where the element is not an anchor.
</p>
\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<a href="#" class="kd-link kd-link--anchor">Heading anchor</a>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<a href="#" class="kd-link kd-active">Active link</a>
\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div style="position: relative; height: 5rem;">
  <a href="#main" class="kd-skip">Skip to content</a>
  <p style="color: var(--kd-text-muted);">
    Tab into this frame. The skip link is off-screen until it receives focus.
  </p>
</div>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Link",
    variant: "default",
    active: false
  },
  argTypes: {
    label: {
      control: "text"
    },
    variant: {
      control: "inline-radio",
      options: ["default", "anchor"]
    },
    active: {
      control: "boolean"
    }
  },
  render: ({
    label,
    variant,
    active
  }) => {
    const classes = ["kd-link"];
    if (variant === "anchor") {
      classes.push("kd-link--anchor");
    }
    if (active) {
      classes.push("kd-active");
    }
    return \`
<a href="#" class="\${classes.join(" ")}">\${label}</a>
\`;
  }
}`,...c.parameters?.docs?.source}}},l=[`Example`,`Anchor`,`Active`,`Skip`,`Link`]})))()}export{u as a,s as i,a as n,n as o,i as r,o as t};
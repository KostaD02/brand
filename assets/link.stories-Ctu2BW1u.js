import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Active:()=>s,Anchor:()=>o,Example:()=>a,Link:()=>u,Skip:()=>c,SkipInline:()=>l,__namedExportsOrder:()=>d,default:()=>r}),r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{r={title:`Components/Link`},i=(e,t)=>`
<div style="position: relative; height: 12rem; padding: var(--kd-space-3); border: 1px solid var(--kd-border); background: var(--kd-bg-surface);">
  <p style="font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">${e}</p>
  <p>Installing the package is the short part of the job.</p>
  <a href="#done" class="${t}">Skip the configuration</a>
  <p style="margin-top: var(--kd-space-5);">Configuring the build is the long part.</p>
</div>
`,a={tags:[`!dev`],render:()=>`
<p>
  Every bare <a href="#">anchor</a> already carries the underline treatment, so
  <code>kd-link</code> is only needed where the element is not an anchor.
</p>
`},o={tags:[`!dev`],render:()=>`
<a href="#" class="kd-link kd-link--anchor">Heading anchor</a>
`},s={tags:[`!dev`],render:()=>`
<a href="#" class="kd-link kd-active">Active link</a>
`},c={tags:[`!dev`],render:()=>`
<div style="position: relative; height: 5rem;">
  <a href="#main" class="kd-skip">Skip to content</a>
  <p style="color: var(--kd-text-muted);">
    Tab into this frame. The skip link is off-screen until it receives focus.
  </p>
</div>
`},l={tags:[`!dev`],render:()=>`
<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
  ${i(`.kd-skip`,`kd-skip`)}
  ${i(`.kd-skip.kd-skip--inline`,`kd-skip kd-skip--inline`)}
</div>
`},u={args:{label:`Link`,variant:`default`,active:!1},argTypes:{label:{control:`text`},variant:{control:`inline-radio`,options:[`default`,`anchor`]},active:{control:`boolean`}},render:({label:e,variant:t,active:n})=>{let r=[`kd-link`];return t===`anchor`&&r.push(`kd-link--anchor`),n&&r.push(`kd-active`),`
<a href="#" class="${r.join(` `)}">${e}</a>
`}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<p>
  Every bare <a href="#">anchor</a> already carries the underline treatment, so
  <code>kd-link</code> is only needed where the element is not an anchor.
</p>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<a href="#" class="kd-link kd-link--anchor">Heading anchor</a>
\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<a href="#" class="kd-link kd-active">Active link</a>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div style="position: relative; height: 5rem;">
  <a href="#main" class="kd-skip">Skip to content</a>
  <p style="color: var(--kd-text-muted);">
    Tab into this frame. The skip link is off-screen until it receives focus.
  </p>
</div>
\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
  \${article(".kd-skip", "kd-skip")}
  \${article(".kd-skip.kd-skip--inline", "kd-skip kd-skip--inline")}
</div>
\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Example`,`Anchor`,`Active`,`Skip`,`SkipInline`,`Link`]})))()}export{l as a,c as i,o as n,f as o,a as r,n as s,s as t};
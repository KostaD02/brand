import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Danger:()=>o,Example:()=>i,InButton:()=>s,Sizes:()=>a,Spinner:()=>c,__namedExportsOrder:()=>l,default:()=>r}),r,i,a,o,s,c,l;function u(){return(u=e((()=>{r={title:`Components/Spinner`},i={tags:[`!dev`],render:()=>`
<span class="kd-spinner" role="status" aria-label="Loading"></span>
`},a={tags:[`!dev`],render:()=>`
<span class="kd-spinner kd-spinner--sm" role="status" aria-label="Loading"></span>
<span class="kd-spinner" role="status" aria-label="Loading"></span>
<span class="kd-spinner kd-spinner--lg" role="status" aria-label="Loading"></span>
`},o={tags:[`!dev`],render:()=>`
<span class="kd-spinner kd-spinner--danger" role="status" aria-label="Retrying"></span>
`},s={tags:[`!dev`],render:()=>`
<button type="button" class="kd-btn kd-btn--primary" aria-busy="true">
  <span class="kd-btn__icon">
    <span class="kd-spinner kd-spinner--sm" style="--kd-spinner-color: currentcolor;"></span>
  </span>
  Saving
</button>
`},c={args:{size:`md`,danger:!1,speed:`0.7s`},argTypes:{size:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},danger:{control:`boolean`},speed:{control:`text`}},render:({size:e,danger:t,speed:n})=>{let r=[`kd-spinner`];return e!==`md`&&r.push(`kd-spinner--${e}`),t&&r.push(`kd-spinner--danger`),`
<span
  class="${r.join(` `)}"
  style="--kd-spinner-speed: ${n};"
  role="status"
  aria-label="Loading"
></span>
`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<span class="kd-spinner" role="status" aria-label="Loading"></span>
\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<span class="kd-spinner kd-spinner--sm" role="status" aria-label="Loading"></span>
<span class="kd-spinner" role="status" aria-label="Loading"></span>
<span class="kd-spinner kd-spinner--lg" role="status" aria-label="Loading"></span>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<span class="kd-spinner kd-spinner--danger" role="status" aria-label="Retrying"></span>
\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<button type="button" class="kd-btn kd-btn--primary" aria-busy="true">
  <span class="kd-btn__icon">
    <span class="kd-spinner kd-spinner--sm" style="--kd-spinner-color: currentcolor;"></span>
  </span>
  Saving
</button>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    danger: false,
    speed: "0.7s"
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    },
    danger: {
      control: "boolean"
    },
    speed: {
      control: "text"
    }
  },
  render: ({
    size,
    danger,
    speed
  }) => {
    const classes = ["kd-spinner"];
    if (size !== "md") {
      classes.push(\`kd-spinner--\${size}\`);
    }
    if (danger) {
      classes.push("kd-spinner--danger");
    }
    return \`
<span
  class="\${classes.join(" ")}"
  style="--kd-spinner-speed: \${speed};"
  role="status"
  aria-label="Loading"
></span>
\`;
  }
}`,...c.parameters?.docs?.source}}},l=[`Example`,`Sizes`,`Danger`,`InButton`,`Spinner`]})))()}export{u as a,a as i,i as n,n as o,s as r,o as t};
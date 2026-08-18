import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Checked:()=>a,Disabled:()=>o,Example:()=>i,Toggle:()=>c,WithoutLabel:()=>s,__namedExportsOrder:()=>l,default:()=>r}),r,i,a,o,s,c,l;function u(){return(u=e((()=>{r={title:`Forms/Toggle`},i={tags:[`!dev`],render:()=>`
<label class="kd-toggle">
  <input class="kd-toggle__input" type="checkbox" />
  <span class="kd-toggle__track">
    <span class="kd-toggle__thumb"></span>
  </span>
  <span class="kd-toggle__label">Run on startup</span>
</label>
`},a={tags:[`!dev`],render:()=>`
<label class="kd-toggle">
  <input class="kd-toggle__input" type="checkbox" checked />
  <span class="kd-toggle__track">
    <span class="kd-toggle__thumb"></span>
  </span>
  <span class="kd-toggle__label">Enabled</span>
</label>
`},o={tags:[`!dev`],render:()=>`
<label class="kd-toggle kd-toggle--disabled">
  <input class="kd-toggle__input" type="checkbox" disabled />
  <span class="kd-toggle__track">
    <span class="kd-toggle__thumb"></span>
  </span>
  <span class="kd-toggle__label">Unavailable</span>
</label>
`},s={tags:[`!dev`],render:()=>`
<label class="kd-toggle" aria-label="Run on startup">
  <input class="kd-toggle__input" type="checkbox" checked />
  <span class="kd-toggle__track">
    <span class="kd-toggle__thumb"></span>
  </span>
</label>
`},c={args:{label:`Run on startup`,checked:!1,disabled:!1},argTypes:{label:{control:`text`},checked:{control:`boolean`},disabled:{control:`boolean`}},render:({label:e,checked:t,disabled:n})=>`
<label class="kd-toggle${n?` kd-toggle--disabled`:``}">
  <input class="kd-toggle__input" type="checkbox"${t?` checked`:``}${n?` disabled`:``} />
  <span class="kd-toggle__track">
    <span class="kd-toggle__thumb"></span>
  </span>
  ${e?`<span class="kd-toggle__label">${e}</span>`:``}
</label>
`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<label class="kd-toggle">
  <input class="kd-toggle__input" type="checkbox" />
  <span class="kd-toggle__track">
    <span class="kd-toggle__thumb"></span>
  </span>
  <span class="kd-toggle__label">Run on startup</span>
</label>
\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<label class="kd-toggle">
  <input class="kd-toggle__input" type="checkbox" checked />
  <span class="kd-toggle__track">
    <span class="kd-toggle__thumb"></span>
  </span>
  <span class="kd-toggle__label">Enabled</span>
</label>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<label class="kd-toggle kd-toggle--disabled">
  <input class="kd-toggle__input" type="checkbox" disabled />
  <span class="kd-toggle__track">
    <span class="kd-toggle__thumb"></span>
  </span>
  <span class="kd-toggle__label">Unavailable</span>
</label>
\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<label class="kd-toggle" aria-label="Run on startup">
  <input class="kd-toggle__input" type="checkbox" checked />
  <span class="kd-toggle__track">
    <span class="kd-toggle__thumb"></span>
  </span>
</label>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Run on startup",
    checked: false,
    disabled: false
  },
  argTypes: {
    label: {
      control: "text"
    },
    checked: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  },
  render: ({
    label,
    checked,
    disabled
  }) => \`
<label class="kd-toggle\${disabled ? " kd-toggle--disabled" : ""}">
  <input class="kd-toggle__input" type="checkbox"\${checked ? " checked" : ""}\${disabled ? " disabled" : ""} />
  <span class="kd-toggle__track">
    <span class="kd-toggle__thumb"></span>
  </span>
  \${label ? \`<span class="kd-toggle__label">\${label}</span>\` : ""}
</label>
\`
}`,...c.parameters?.docs?.source}}},l=[`Example`,`Checked`,`Disabled`,`WithoutLabel`,`Toggle`]})))()}export{u as a,s as i,o as n,n as o,i as r,a as t};
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Example:()=>i,StatusPill:()=>o,WithDot:()=>a,__namedExportsOrder:()=>s,default:()=>r}),r,i,a,o,s;function c(){return(c=e((()=>{r={title:`Components/Status Pill`},i={tags:[`!dev`],render:()=>`
<span class="kd-status-pill">Idle</span>
<span class="kd-status-pill kd-status-pill--active">Running</span>
<span class="kd-status-pill kd-status-pill--warning">Throttled</span>
<span class="kd-status-pill kd-status-pill--danger">Failed</span>
<span class="kd-status-pill kd-status-pill--offline">Offline</span>
`},a={tags:[`!dev`],render:()=>`
<span class="kd-status-pill kd-status-pill--active">
  <span class="kd-status-pill__dot"></span>
  Running
</span>
<span class="kd-status-pill kd-status-pill--danger">
  <span class="kd-status-pill__dot"></span>
  Failed
</span>
<span class="kd-status-pill kd-status-pill--offline">
  <span class="kd-status-pill__dot"></span>
  Offline
</span>
`},o={name:`Status Pill`,args:{label:`Running`,variation:`active`,dot:!0},argTypes:{label:{control:`text`},variation:{control:`inline-radio`,options:[`idle`,`active`,`warning`,`danger`,`offline`]},dot:{control:`boolean`}},render:({label:e,variation:t,dot:n})=>`
<span class="kd-status-pill kd-status-pill--${t}">
  ${n?`<span class="kd-status-pill__dot"></span>`:``}
  ${e}
</span>
`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<span class="kd-status-pill">Idle</span>
<span class="kd-status-pill kd-status-pill--active">Running</span>
<span class="kd-status-pill kd-status-pill--warning">Throttled</span>
<span class="kd-status-pill kd-status-pill--danger">Failed</span>
<span class="kd-status-pill kd-status-pill--offline">Offline</span>
\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<span class="kd-status-pill kd-status-pill--active">
  <span class="kd-status-pill__dot"></span>
  Running
</span>
<span class="kd-status-pill kd-status-pill--danger">
  <span class="kd-status-pill__dot"></span>
  Failed
</span>
<span class="kd-status-pill kd-status-pill--offline">
  <span class="kd-status-pill__dot"></span>
  Offline
</span>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Status Pill",
  args: {
    label: "Running",
    variation: "active",
    dot: true
  },
  argTypes: {
    label: {
      control: "text"
    },
    variation: {
      control: "inline-radio",
      options: ["idle", "active", "warning", "danger", "offline"]
    },
    dot: {
      control: "boolean"
    }
  },
  render: ({
    label,
    variation,
    dot
  }) => \`
<span class="kd-status-pill kd-status-pill--\${variation}">
  \${dot ? '<span class="kd-status-pill__dot"></span>' : ""}
  \${label}
</span>
\`
}`,...o.parameters?.docs?.source}}},s=[`Example`,`WithDot`,`StatusPill`]})))()}export{n as i,a as n,c as r,i as t};
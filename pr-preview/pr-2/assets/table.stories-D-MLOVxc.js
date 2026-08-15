import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Caption:()=>s,Example:()=>o,Scroll:()=>c,StickyHead:()=>l,Table:()=>u,__namedExportsOrder:()=>d,default:()=>r}),r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{r={title:`Elements/Table`,parameters:{layout:`padded`}},i=[[`worker-01`,`Running`,`4h 12m`],[`worker-02`,`Idle`,`0m`],[`worker-03`,`Failed`,`18m`]],a=()=>i.map(([e,t,n])=>`<tr><td>${e}</td><td>${t}</td><td>${n}</td></tr>`).join(``),o={tags:[`!dev`],render:()=>`
<table>
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>${a()}</tbody>
</table>
`},s={tags:[`!dev`],render:()=>`
<table>
  <caption>Active workers, last 24 hours</caption>
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>${a()}</tbody>
</table>
`},c={tags:[`!dev`],render:()=>`
<div class="kd-table-scroll" style="max-width: 22rem;">
  <table style="min-width: 34rem;">
    <thead>
      <tr><th>Account</th><th>Status</th><th>Uptime</th><th>Tasks</th><th>Last seen</th></tr>
    </thead>
    <tbody>
      <tr><td>worker-01</td><td>Running</td><td>4h 12m</td><td>7</td><td>Just now</td></tr>
      <tr><td>worker-02</td><td>Idle</td><td>0m</td><td>0</td><td>2 days ago</td></tr>
    </tbody>
  </table>
</div>
`},l={tags:[`!dev`],render:()=>`
<div style="max-height: 11rem; overflow-y: auto;">
  <table class="kd-sticky-head">
    <thead>
      <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
    </thead>
    <tbody>
      ${Array.from({length:10},(e,t)=>`<tr><td>account-${t+1}</td><td>Running</td><td>${t+1}h</td></tr>`).join(``)}
    </tbody>
  </table>
</div>
`},u={args:{fixed:!1,stickyHead:!1,caption:!1},argTypes:{fixed:{control:`boolean`},stickyHead:{control:`boolean`},caption:{control:`boolean`}},render:({fixed:e,stickyHead:t,caption:n})=>{let r=[];return e&&r.push(`kd-fixed`),t&&r.push(`kd-sticky-head`),`
<table${r.length?` class="${r.join(` `)}"`:``}>
  ${n?`<caption>Active workers</caption>`:``}
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>${a()}</tbody>
</table>
`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<table>
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>\${body()}</tbody>
</table>
\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<table>
  <caption>Active workers, last 24 hours</caption>
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>\${body()}</tbody>
</table>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-table-scroll" style="max-width: 22rem;">
  <table style="min-width: 34rem;">
    <thead>
      <tr><th>Account</th><th>Status</th><th>Uptime</th><th>Tasks</th><th>Last seen</th></tr>
    </thead>
    <tbody>
      <tr><td>worker-01</td><td>Running</td><td>4h 12m</td><td>7</td><td>Just now</td></tr>
      <tr><td>worker-02</td><td>Idle</td><td>0m</td><td>0</td><td>2 days ago</td></tr>
    </tbody>
  </table>
</div>
\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div style="max-height: 11rem; overflow-y: auto;">
  <table class="kd-sticky-head">
    <thead>
      <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
    </thead>
    <tbody>
      \${Array.from({
    length: 10
  }, (_, index) => \`<tr><td>account-\${index + 1}</td><td>Running</td><td>\${index + 1}h</td></tr>\`).join("")}
    </tbody>
  </table>
</div>
\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    fixed: false,
    stickyHead: false,
    caption: false
  },
  argTypes: {
    fixed: {
      control: "boolean"
    },
    stickyHead: {
      control: "boolean"
    },
    caption: {
      control: "boolean"
    }
  },
  render: ({
    fixed,
    stickyHead,
    caption
  }) => {
    const classes = [];
    if (fixed) {
      classes.push("kd-fixed");
    }
    if (stickyHead) {
      classes.push("kd-sticky-head");
    }
    return \`
<table\${classes.length ? \` class="\${classes.join(" ")}"\` : ""}>
  \${caption ? "<caption>Active workers</caption>" : ""}
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>\${body()}</tbody>
</table>
\`;
  }
}`,...u.parameters?.docs?.source}}},d=[`Example`,`Caption`,`Scroll`,`StickyHead`,`Table`]})))()}export{f as a,l as i,o as n,n as o,c as r,s as t};
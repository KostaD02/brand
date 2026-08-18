import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Archive:()=>h,Caption:()=>u,Example:()=>l,Plain:()=>p,Rows:()=>m,Scroll:()=>d,StickyHead:()=>f,Table:()=>g,__namedExportsOrder:()=>_,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r={title:`Elements/Table`,parameters:{layout:`padded`}},i=[[`worker-01`,`Running`,`4h 12m`],[`worker-02`,`Idle`,`0m`],[`worker-03`,`Failed`,`18m`]],a=()=>i.map(([e,t,n])=>`<tr><td>${e}</td><td>${t}</td><td>${n}</td></tr>`).join(``),o=[[`2026`,`brand`,`SCSS, Storybook`],[`2025`,`steam-idler`,`TypeScript, Electron`],[`2024`,`konstantinedatunishvili.com`,`Astro, SCSS`]],s=`
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  <path d="M15 3h6v6" />
  <path d="M10 14 21 3" />
</svg>
`,c=()=>o.map(([e,t,n])=>`<tr><td>${e}</td><td>${t}</td><td>${n}</td><td><a href="#" class="kd-icon-link" aria-label="Open ${t}">${s}</a></td></tr>`).join(``),l={tags:[`!dev`],render:()=>`
<table>
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>${a()}</tbody>
</table>
`},u={tags:[`!dev`],render:()=>`
<table>
  <caption>Active workers, last 24 hours</caption>
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>${a()}</tbody>
</table>
`},d={tags:[`!dev`],render:()=>`
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
`},f={tags:[`!dev`],render:()=>`
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
`},p={tags:[`!dev`],render:()=>`
<table class="kd-plain">
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>${a()}</tbody>
</table>
`},m={tags:[`!dev`],render:()=>`
<table class="kd-rows">
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>${a()}</tbody>
</table>
`},h={tags:[`!dev`],render:()=>`
<table class="kd-plain kd-rows">
  <thead>
    <tr><th>Year</th><th>Project</th><th>Built with</th><th>Link</th></tr>
  </thead>
  <tbody>${c()}</tbody>
</table>
`},g={args:{fixed:!1,stickyHead:!1,plain:!1,rows:!1,caption:!1},argTypes:{fixed:{control:`boolean`},stickyHead:{control:`boolean`},plain:{control:`boolean`},rows:{control:`boolean`},caption:{control:`boolean`}},render:({fixed:e,stickyHead:t,plain:n,rows:r,caption:i})=>{let o=[];return e&&o.push(`kd-fixed`),t&&o.push(`kd-sticky-head`),n&&o.push(`kd-plain`),r&&o.push(`kd-rows`),`
<table${o.length?` class="${o.join(` `)}"`:``}>
  ${i?`<caption>Active workers</caption>`:``}
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>${a()}</tbody>
</table>
`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<table>
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>\${body()}</tbody>
</table>
\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<table class="kd-plain">
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>\${body()}</tbody>
</table>
\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<table class="kd-rows">
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>\${body()}</tbody>
</table>
\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<table class="kd-plain kd-rows">
  <thead>
    <tr><th>Year</th><th>Project</th><th>Built with</th><th>Link</th></tr>
  </thead>
  <tbody>\${archiveBody()}</tbody>
</table>
\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    fixed: false,
    stickyHead: false,
    plain: false,
    rows: false,
    caption: false
  },
  argTypes: {
    fixed: {
      control: "boolean"
    },
    stickyHead: {
      control: "boolean"
    },
    plain: {
      control: "boolean"
    },
    rows: {
      control: "boolean"
    },
    caption: {
      control: "boolean"
    }
  },
  render: ({
    fixed,
    stickyHead,
    plain,
    rows: rowHover,
    caption
  }) => {
    const classes = [];
    if (fixed) {
      classes.push("kd-fixed");
    }
    if (stickyHead) {
      classes.push("kd-sticky-head");
    }
    if (plain) {
      classes.push("kd-plain");
    }
    if (rowHover) {
      classes.push("kd-rows");
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
}`,...g.parameters?.docs?.source}}},_=[`Example`,`Caption`,`Scroll`,`StickyHead`,`Plain`,`Rows`,`Archive`,`Table`]})))()}export{m as a,v as c,p as i,n as l,u as n,d as o,l as r,f as s,h as t};
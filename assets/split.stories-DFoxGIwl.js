import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Align:()=>d,Breakpoints:()=>l,Collapse:()=>c,Example:()=>s,Ratios:()=>u,Reverse:()=>f,Split:()=>p,__namedExportsOrder:()=>m,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r={title:`Layout/Split`,parameters:{layout:`fullscreen`}},i=(e,t=``)=>`<div style="padding: var(--kd-space-4) var(--kd-space-5); background: var(--kd-bg-surface); border-block: 1px dashed var(--kd-border-strong); margin-bottom: var(--kd-space-2);">${t?`<p class="kd-small" style="margin: 0 0 var(--kd-space-3);">${t}</p>`:``}${e}</div>`,a=e=>`<div style="display: grid; place-items: center; width: 100%; padding: var(--kd-space-3); background: var(--kd-accent-soft); border: 1px solid var(--kd-accent-line); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-primary);">${e}</div>`,o=(e,t)=>`
  <button
    type="button"
    class="kd-tabs__tab${t?` kd-active`:``}"
    role="tab"
    aria-selected="${t}"
  >${e}</button>`,s={tags:[`!dev`],render:()=>i(`
<div class="kd-split">
  ${a(`content`)}
  ${a(`aside`)}
</div>
`)},c={tags:[`!dev`],render:()=>[i(`
<div class="kd-split">
  ${a(`content`)}
  ${a(`aside`)}
</div>
`,`kd-split, two columns at every width`),i(`
<div class="kd-split kd-split--md">
  ${a(`content`)}
  ${a(`aside`)}
</div>
`,`kd-split kd-split--md, one column at 768px and below`)].join(``)},l={tags:[`!dev`],render:()=>[[`xl`,`1080px`],[`md`,`768px`],[`xs`,`480px`]].map(([e,t])=>i(`
<div class="kd-split kd-split--${e}">
  ${a(`content`)}
  ${a(`aside`)}
</div>
`,`kd-split--${e}, stacks at ${t} and below`)).join(``)},u={tags:[`!dev`],render:()=>[`1fr 1fr`,`2fr 1fr`,`1fr 3fr`].map(e=>i(`
<div class="kd-split" style="--kd-split-columns: ${e};">
  ${a(e)}
  ${a(`aside`)}
</div>
`)).join(``)},d={tags:[`!dev`],render:()=>[`center`,`start`].map(e=>i(`
<div class="kd-split" style="--kd-split-columns: 1fr 3fr; --kd-split-align: ${e};">
  <div class="kd-tabs" role="tablist" aria-orientation="vertical" aria-label="Experience">
${o(`eToro`,!0)}
${o(`IT STEP`,!1)}
${o(`Educata`,!1)}
  </div>
  <div class="kd-prose">
    <p>
      The strip is as tall as its three tabs and the copy beside it is shorter, so the
      alignment keyword is the whole difference between the two reading positions.
    </p>
  </div>
</div>
`,`--kd-split-align: ${e}`)).join(``)},f={tags:[`!dev`],render:()=>i(`
<div class="kd-split kd-split--reverse">
  ${a(`first in the DOM`)}
  ${a(`second in the DOM`)}
</div>
`)},p={args:{columns:`3fr 2fr`,gap:`3rem`,align:`center`,reverse:!1},argTypes:{columns:{control:`select`,options:[`3fr 2fr`,`2fr 3fr`,`1fr 1fr`,`2fr 1fr`,`1fr`]},gap:{control:`text`},align:{control:`inline-radio`,options:[`center`,`start`,`end`,`stretch`]},reverse:{control:`boolean`}},render:({columns:e,gap:t,align:n,reverse:r})=>{let o=[`kd-split`];return r&&o.push(`kd-split--reverse`),i(`
<div
  class="${o.join(` `)}"
  style="--kd-split-columns: ${e}; --kd-split-gap: ${t}; --kd-split-align: ${n};"
>
  ${a(`first in the DOM`)}
  ${a(`second in the DOM`)}
</div>
`)}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(\`
<div class="kd-split">
  \${box("content")}
  \${box("aside")}
</div>
\`)
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => [frame(\`
<div class="kd-split">
  \${box("content")}
  \${box("aside")}
</div>
\`, "kd-split, two columns at every width"), frame(\`
<div class="kd-split kd-split--md">
  \${box("content")}
  \${box("aside")}
</div>
\`, "kd-split kd-split--md, one column at 768px and below")].join("")
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => [["xl", "1080px"], ["md", "768px"], ["xs", "480px"]].map(([name, width]) => frame(`\n<div class="kd-split kd-split--${name}">\n  ${box("content")}\n  ${box("aside")}\n</div>\n`, `kd-split--${name}, stacks at ${width} and below`)).join("")\n}',...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => ["1fr 1fr", "2fr 1fr", "1fr 3fr"].map(columns => frame(\`
<div class="kd-split" style="--kd-split-columns: \${columns};">
  \${box(columns)}
  \${box("aside")}
</div>
\`)).join("")
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => ["center", "start"].map(align => frame(\`
<div class="kd-split" style="--kd-split-columns: 1fr 3fr; --kd-split-align: \${align};">
  <div class="kd-tabs" role="tablist" aria-orientation="vertical" aria-label="Experience">
\${tab("eToro", true)}
\${tab("IT STEP", false)}
\${tab("Educata", false)}
  </div>
  <div class="kd-prose">
    <p>
      The strip is as tall as its three tabs and the copy beside it is shorter, so the
      alignment keyword is the whole difference between the two reading positions.
    </p>
  </div>
</div>
\`, \`--kd-split-align: \${align}\`)).join("")
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame(\`
<div class="kd-split kd-split--reverse">
  \${box("first in the DOM")}
  \${box("second in the DOM")}
</div>
\`)
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    columns: "3fr 2fr",
    gap: "3rem",
    align: "center",
    reverse: false
  },
  argTypes: {
    columns: {
      control: "select",
      options: ["3fr 2fr", "2fr 3fr", "1fr 1fr", "2fr 1fr", "1fr"]
    },
    gap: {
      control: "text"
    },
    align: {
      control: "inline-radio",
      options: ["center", "start", "end", "stretch"]
    },
    reverse: {
      control: "boolean"
    }
  },
  render: ({
    columns,
    gap,
    align,
    reverse
  }) => {
    const classes = ["kd-split"];
    if (reverse) {
      classes.push("kd-split--reverse");
    }
    return frame(\`
<div
  class="\${classes.join(" ")}"
  style="--kd-split-columns: \${columns}; --kd-split-gap: \${gap}; --kd-split-align: \${align};"
>
  \${box("first in the DOM")}
  \${box("second in the DOM")}
</div>
\`);
  }
}`,...p.parameters?.docs?.source}}},m=[`Example`,`Collapse`,`Breakpoints`,`Ratios`,`Align`,`Reverse`,`Split`]})))()}export{u as a,n as c,s as i,l as n,f as o,c as r,h as s,d as t};
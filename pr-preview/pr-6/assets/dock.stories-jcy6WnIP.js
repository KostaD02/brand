import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Anchoring:()=>l,Dock:()=>m,Example:()=>c,Flow:()=>d,FlowAtBreakpoint:()=>f,Stacking:()=>p,Text:()=>u,__namedExportsOrder:()=>h,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r={title:`Layout/Dock`},i=(e,t)=>`
<div style="position: relative; height: ${e}; overflow: hidden; transform: translate(0); border: 1px solid var(--kd-border); background: var(--kd-bg-surface);">
  ${t}
</div>
`,a=e=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">${e}</svg>`,o=`
    <li>
      <a href="#" class="kd-icon-link" aria-label="Source">
        ${a(`<path d="m9 8-4 4 4 4M15 8l4 4-4 4" />`)}
      </a>
    </li>
    <li>
      <a href="#" class="kd-icon-link" aria-label="Website">
        ${a(`<circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.4 2.6 2.4 15.4 0 18M12 3c-2.4 2.6-2.4 15.4 0 18" />`)}
      </a>
    </li>
    <li>
      <a href="#" class="kd-icon-link" aria-label="E-mail">
        ${a(`<rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6 8.5-6" />`)}
      </a>
    </li>
`,s=`
  <div style="position: absolute; inset: 0; z-index: var(--kd-z-overlay); width: 60%; padding: var(--kd-space-3); background: var(--kd-bg-elevated);">
    <span style="font-size: var(--kd-font-size-xs); color: var(--kd-text-muted);">
      main, z-index: var(--kd-z-overlay)
    </span>
  </div>
`,c={tags:[`!dev`],render:()=>i(`17rem`,`
  <ul class="kd-dock kd-dock--start">
${o}
  </ul>
`)},l={tags:[`!dev`],render:()=>i(`17rem`,`
  <ul class="kd-dock kd-dock--start">
${o}
  </ul>
  <ul class="kd-dock kd-dock--end">
${o}
  </ul>
`)},u={tags:[`!dev`],render:()=>i(`20rem`,`
  <ul class="kd-dock kd-dock--end">
    <li>
      <a href="mailto:hello@kd.dev" class="kd-dock__text">hello@kd.dev</a>
    </li>
  </ul>
`)},d={tags:[`!dev`],render:()=>i(`5rem`,`
  <ul class="kd-dock kd-dock--flow">
${o}
  </ul>
`)},f={tags:[`!dev`],render:()=>i(`17rem`,`
  <ul class="kd-dock kd-dock--start kd-dock--md-flow">
${o}
  </ul>
`)},p={tags:[`!dev`],render:()=>`
<div style="display: grid; gap: var(--kd-space-3);">
${i(`17rem`,`${s}
  <ul class="kd-dock kd-dock--start">
${o}
  </ul>
`)}
${i(`17rem`,`${s}
  <ul class="kd-dock kd-dock--start" style="--kd-dock-z: var(--kd-z-modal);">
${o}
  </ul>
`)}
</div>
`},m={args:{side:`start`,flow:!1,flowBelow:`none`,line:`90px`},argTypes:{side:{control:`inline-radio`,options:[`start`,`end`]},flow:{control:`boolean`},flowBelow:{control:`select`,options:[`none`,`xxs`,`xs`,`sm`,`md`,`lg`,`xl`]},line:{control:`text`}},render:({side:e,flow:t,flowBelow:n,line:r})=>{let a=[`kd-dock`,`kd-dock--${e}`];return t&&a.push(`kd-dock--flow`),n!==`none`&&a.push(`kd-dock--${n}-flow`),i(`24rem`,`
  <ul class="${a.join(` `)}" style="--kd-dock-line: ${r};">
${o}
    <li>
      <a href="mailto:hello@kd.dev" class="kd-dock__text">hello@kd.dev</a>
    </li>
  </ul>
`)}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame("17rem", \`
  <ul class="kd-dock kd-dock--start">
\${links}
  </ul>
\`)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame("17rem", \`
  <ul class="kd-dock kd-dock--start">
\${links}
  </ul>
  <ul class="kd-dock kd-dock--end">
\${links}
  </ul>
\`)
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame("20rem", \`
  <ul class="kd-dock kd-dock--end">
    <li>
      <a href="mailto:hello@kd.dev" class="kd-dock__text">hello@kd.dev</a>
    </li>
  </ul>
\`)
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame("5rem", \`
  <ul class="kd-dock kd-dock--flow">
\${links}
  </ul>
\`)
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => frame("17rem", \`
  <ul class="kd-dock kd-dock--start kd-dock--md-flow">
\${links}
  </ul>
\`)
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div style="display: grid; gap: var(--kd-space-3);">
\${frame("17rem", \`\${content}
  <ul class="kd-dock kd-dock--start">
\${links}
  </ul>
\`)}
\${frame("17rem", \`\${content}
  <ul class="kd-dock kd-dock--start" style="--kd-dock-z: var(--kd-z-modal);">
\${links}
  </ul>
\`)}
</div>
\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    side: "start",
    flow: false,
    flowBelow: "none",
    line: "90px"
  },
  argTypes: {
    side: {
      control: "inline-radio",
      options: ["start", "end"]
    },
    flow: {
      control: "boolean"
    },
    flowBelow: {
      control: "select",
      options: ["none", "xxs", "xs", "sm", "md", "lg", "xl"]
    },
    line: {
      control: "text"
    }
  },
  render: ({
    side,
    flow,
    flowBelow,
    line
  }) => {
    const classes = ["kd-dock", \`kd-dock--\${side}\`];
    if (flow) {
      classes.push("kd-dock--flow");
    }
    if (flowBelow !== "none") {
      classes.push(\`kd-dock--\${flowBelow}-flow\`);
    }
    return frame("24rem", \`
  <ul class="\${classes.join(" ")}" style="--kd-dock-line: \${line};">
\${links}
    <li>
      <a href="mailto:hello@kd.dev" class="kd-dock__text">hello@kd.dev</a>
    </li>
  </ul>
\`);
  }
}`,...m.parameters?.docs?.source}}},h=[`Example`,`Anchoring`,`Text`,`Flow`,`FlowAtBreakpoint`,`Stacking`,`Dock`]})))()}export{p as a,g as c,f as i,c as n,u as o,d as r,n as s,l as t};
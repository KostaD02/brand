import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Example:()=>c,Horizontal:()=>l,HorizontalAtBreakpoint:()=>u,Tabs:()=>f,WithPanel:()=>d,__namedExportsOrder:()=>p,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r={title:`Components/Tabs`},i=[`eToro`,`IT STEP`,`Educata`,`Freelance`],a=(e,t)=>`
  <button
    type="button"
    class="kd-tabs__tab${t?` kd-active`:``}"
    role="tab"
    aria-selected="${t}"
  >${e}</button>`,o=(e,t,n)=>{let r=[`kd-tabs`];return e&&r.push(`kd-tabs--horizontal`),n&&r.push(`kd-tabs--${n}-horizontal`),`
<div
  class="${r.join(` `)}"
  role="tablist"
  aria-orientation="${e?`horizontal`:`vertical`}"
  aria-label="Experience"
>${i.map((e,n)=>a(e,n===t)).join(``)}
</div>
`},s=e=>`<div style="max-width: 22rem;">${e}</div>`,c={tags:[`!dev`],render:()=>o(!1,0)},l={tags:[`!dev`],render:()=>s(o(!0,0))},u={tags:[`!dev`],render:()=>s(o(!1,0,`sm`))},d={tags:[`!dev`],render:()=>`
<div style="display: flex; gap: var(--kd-space-3);">
  <div class="kd-tabs" role="tablist" aria-orientation="vertical" aria-label="Experience">
    <button
      type="button"
      class="kd-tabs__tab kd-active"
      role="tab"
      id="tab-etoro"
      aria-controls="panel-etoro"
      aria-selected="true"
    >eToro</button>
    <button
      type="button"
      class="kd-tabs__tab"
      role="tab"
      id="tab-step"
      aria-controls="panel-step"
      aria-selected="false"
    >IT STEP</button>
  </div>
  <div class="kd-prose" id="panel-etoro" role="tabpanel" aria-labelledby="tab-etoro">
    <p>The panel is yours: the component styles the strip and nothing else.</p>
  </div>
  <div id="panel-step" role="tabpanel" aria-labelledby="tab-step" hidden></div>
</div>
`},f={args:{orientation:`vertical`,horizontalBelow:`none`,activeIndex:0},argTypes:{orientation:{control:`inline-radio`,options:[`vertical`,`horizontal`]},horizontalBelow:{control:`select`,options:[`none`,`xxs`,`xs`,`sm`,`md`,`lg`,`xl`]},activeIndex:{control:{type:`range`,min:0,max:3}}},render:({orientation:e,horizontalBelow:t,activeIndex:n})=>{let r=e===`horizontal`,i=t===`none`?void 0:t,a=o(r,n,i);return r||i?s(a):a}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => strip(false, 0)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => bounded(strip(true, 0))
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => bounded(strip(false, 0, "sm"))
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div style="display: flex; gap: var(--kd-space-3);">
  <div class="kd-tabs" role="tablist" aria-orientation="vertical" aria-label="Experience">
    <button
      type="button"
      class="kd-tabs__tab kd-active"
      role="tab"
      id="tab-etoro"
      aria-controls="panel-etoro"
      aria-selected="true"
    >eToro</button>
    <button
      type="button"
      class="kd-tabs__tab"
      role="tab"
      id="tab-step"
      aria-controls="panel-step"
      aria-selected="false"
    >IT STEP</button>
  </div>
  <div class="kd-prose" id="panel-etoro" role="tabpanel" aria-labelledby="tab-etoro">
    <p>The panel is yours: the component styles the strip and nothing else.</p>
  </div>
  <div id="panel-step" role="tabpanel" aria-labelledby="tab-step" hidden></div>
</div>
\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    horizontalBelow: "none",
    activeIndex: 0
  },
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["vertical", "horizontal"]
    },
    horizontalBelow: {
      control: "select",
      options: ["none", "xxs", "xs", "sm", "md", "lg", "xl"]
    },
    activeIndex: {
      control: {
        type: "range",
        min: 0,
        max: 3
      }
    }
  },
  render: ({
    orientation,
    horizontalBelow,
    activeIndex
  }) => {
    const horizontal = orientation === "horizontal";
    const below = horizontalBelow === "none" ? undefined : horizontalBelow;
    const markup = strip(horizontal, activeIndex, below);
    return horizontal || below ? bounded(markup) : markup;
  }
}`,...f.parameters?.docs?.source}}},p=[`Example`,`Horizontal`,`HorizontalAtBreakpoint`,`WithPanel`,`Tabs`]})))()}export{m as a,d as i,l as n,n as o,u as r,c as t};
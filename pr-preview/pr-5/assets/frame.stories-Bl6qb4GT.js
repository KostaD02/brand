import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Example:()=>s,FitsContent:()=>l,Frame:()=>d,Hover:()=>c,Tint:()=>u,__namedExportsOrder:()=>f,default:()=>r}),r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r={title:`Components/Frame`},i={line:`var(--kd-accent-line)`,soft:`var(--kd-accent-soft)`,none:`transparent`},a=(e,t)=>`<div style="width: ${e}; height: ${t}; background: var(--kd-border-strong); border-radius: var(--kd-frame-radius);"></div>`,o=e=>`<div style="display: flex; align-items: flex-start; gap: var(--kd-space-5); padding: var(--kd-space-4);">${e}</div>`,s={tags:[`!dev`],render:()=>o(`<figure class="kd-frame">${a(`13rem`,`10rem`)}</figure>`)},c={tags:[`!dev`],render:()=>o(`<figure class="kd-frame">${a(`13rem`,`10rem`)}</figure>`)},l={tags:[`!dev`],render:()=>o(`<figure class="kd-frame">${a(`7rem`,`9rem`)}</figure><figure class="kd-frame">${a(`14rem`,`5rem`)}</figure>`)},u={tags:[`!dev`],render:()=>o(`<figure class="kd-frame">${a(`9rem`,`7rem`)}</figure><figure class="kd-frame" style="--kd-frame-tint: transparent;">${a(`9rem`,`7rem`)}</figure>`)},d={args:{offset:`0.5rem`,radius:`sm`,tint:`line`},argTypes:{offset:{control:`text`},radius:{control:`inline-radio`,options:[`sm`,`md`,`lg`]},tint:{control:`inline-radio`,options:[`line`,`soft`,`none`]}},render:({offset:e,radius:t,tint:n})=>o(`
<figure
  class="kd-frame"
  style="--kd-frame-offset: ${e}; --kd-frame-radius: var(--kd-radius-${t}); --kd-frame-tint: ${i[n]};"
>
  ${a(`13rem`,`10rem`)}
</figure>
`)},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => stage(\`<figure class="kd-frame">\${plate("13rem", "10rem")}</figure>\`)
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => stage(\`<figure class="kd-frame">\${plate("13rem", "10rem")}</figure>\`)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => stage(`<figure class="kd-frame">${plate("7rem", "9rem")}</figure>` + `<figure class="kd-frame">${plate("14rem", "5rem")}</figure>`)\n}',...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => stage(`<figure class="kd-frame">${plate("9rem", "7rem")}</figure>` + `<figure class="kd-frame" style="--kd-frame-tint: transparent;">${plate("9rem", "7rem")}</figure>`)\n}',...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    offset: "0.5rem",
    radius: "sm",
    tint: "line"
  },
  argTypes: {
    offset: {
      control: "text"
    },
    radius: {
      control: "inline-radio",
      options: ["sm", "md", "lg"]
    },
    tint: {
      control: "inline-radio",
      options: ["line", "soft", "none"]
    }
  },
  render: ({
    offset,
    radius,
    tint
  }) => stage(\`
<figure
  class="kd-frame"
  style="--kd-frame-offset: \${offset}; --kd-frame-radius: var(--kd-radius-\${radius}); --kd-frame-tint: \${tintValues[tint]};"
>
  \${plate("13rem", "10rem")}
</figure>
\`)
}`,...d.parameters?.docs?.source}}},f=[`Example`,`Hover`,`FitsContent`,`Tint`,`Frame`]})))()}export{n as a,u as i,l as n,p as o,c as r,s as t};
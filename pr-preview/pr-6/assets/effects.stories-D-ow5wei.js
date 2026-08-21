import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Animate:()=>f,Effects:()=>_,FillMode:()=>m,FocusRing:()=>u,InheritedTiming:()=>p,Lift:()=>c,Opacity:()=>l,Pop:()=>s,Rail:()=>d,Shadow:()=>o,Stagger:()=>h,Typewriter:()=>g,__namedExportsOrder:()=>v,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r={title:`Utilities/Effects`,parameters:{layout:`padded`}},i=(e,t,n=``)=>`<div class="${e}" style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); ${n}">${t}</div>`,a=e=>`<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));">${e}</div>`,o={tags:[`!dev`],render:()=>a([`sm`,`md`,`lg`,`side`].map(e=>i(`kd-shadow-${e}`,`.kd-shadow-${e}`)).join(``))},s={tags:[`!dev`],render:()=>`
<div class="kd-d-flex kd-gap-4">
  <div class="kd-pop kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop</div>
  <div class="kd-pop-lg kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop-lg</div>
</div>
`},c={tags:[`!dev`],render:()=>`
<div class="kd-d-flex kd-gap-4">
  <div class="kd-lift kd-border-1" tabindex="0" style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-lift</div>
  <div class="kd-pop kd-border-1" tabindex="0" style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop</div>
</div>
`},l={tags:[`!dev`],render:()=>a([`25`,`50`,`75`,`100`].map(e=>i(`kd-opacity-${e}`,`.kd-opacity-${e}`)).join(``))},u={tags:[`!dev`],render:()=>`
<button type="button" class="kd-focus-ring kd-border-1" style="padding: var(--kd-space-2); background: transparent; color: inherit; font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">
  Tab to me: .kd-focus-ring
</button>
`},d={tags:[`!dev`],render:()=>`
<div class="kd-rail" style="padding: var(--kd-space-3) var(--kd-space-3) var(--kd-space-3) var(--kd-space-4); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">
  .kd-rail
</div>
`},f={tags:[`!dev`],render:()=>a([`fade-in`,`fade-out`,`fade-up`,`drop-in`,`glow`].map(e=>i(`kd-animate-${e}`,`.kd-animate-${e}`,`--kd-animate-duration: 1.2s;`)).join(``))},p={tags:[`!dev`],render:()=>`
<div style="--kd-animate-duration: 1.6s;">
  ${a([`fade-in`,`fade-up`,`drop-in`].map(e=>i(`kd-animate-${e}`,`.kd-animate-${e}`)).join(``))}
</div>
`},m={tags:[`!dev`],render:()=>a([{label:`default fill`,fill:``},{label:`--kd-animate-fill: none`,fill:`--kd-animate-fill: none;`}].map(({label:e,fill:t})=>i(`kd-animate-glow`,e,`--kd-animate-duration: 2.4s; ${t}`)).join(``))},h={tags:[`!dev`],render:()=>`
<ul class="kd-stagger kd-d-grid kd-gap-2" style="list-style: none; margin: 0; padding: 0;">
  ${[1,2,3,4,5].map(e=>`<li class="kd-animate-fade-up" style="padding: var(--kd-space-2); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">item ${e}</li>`).join(``)}
</ul>
`},g={tags:[`!dev`],render:()=>`
<div class="kd-w-fit">
  <span class="kd-typewriter" style="--kd-typewriter-steps: 14; --kd-typewriter-duration: 2s;">Page not found</span>
</div>
`},_={args:{shadow:`md`,opacity:`100`,animate:`none`,duration:`1.2s`,fill:`both`,easing:`var(--kd-easing)`,lift:!1,rail:!1},argTypes:{shadow:{control:`inline-radio`,options:[`sm`,`md`,`lg`,`side`,`none`]},opacity:{control:`inline-radio`,options:[`0`,`25`,`50`,`75`,`100`]},animate:{control:`select`,options:[`none`,`fade-in`,`fade-out`,`fade-up`,`drop-in`,`glow`]},duration:{control:`text`},fill:{control:`inline-radio`,options:[`both`,`none`,`forwards`,`backwards`]},easing:{control:`text`},lift:{control:`boolean`},rail:{control:`boolean`}},render:({shadow:e,opacity:t,animate:n,duration:r,fill:a,easing:o,lift:s,rail:c})=>{let l=[`kd-shadow-${e}`,`kd-opacity-${t}`];n!==`none`&&l.push(`kd-animate-${n}`),s&&l.push(`kd-lift`),c&&l.push(`kd-rail`);let u=[`--kd-animate-duration: ${r};`,`--kd-animate-fill: ${a};`,`--kd-animate-easing: ${o};`,c?`padding-inline-start: var(--kd-space-4);`:``].join(` `);return i(l.join(` `),l.map(e=>`.${e}`).join(` `),u)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["sm", "md", "lg", "side"].map(name => cell(`kd-shadow-${name}`, `.kd-shadow-${name}`)).join(""))\n}',...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-flex kd-gap-4">
  <div class="kd-pop kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop</div>
  <div class="kd-pop-lg kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop-lg</div>
</div>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-flex kd-gap-4">
  <div class="kd-lift kd-border-1" tabindex="0" style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-lift</div>
  <div class="kd-pop kd-border-1" tabindex="0" style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop</div>
</div>
\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["25", "50", "75", "100"].map(value => cell(`kd-opacity-${value}`, `.kd-opacity-${value}`)).join(""))\n}',...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<button type="button" class="kd-focus-ring kd-border-1" style="padding: var(--kd-space-2); background: transparent; color: inherit; font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">
  Tab to me: .kd-focus-ring
</button>
\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-rail" style="padding: var(--kd-space-3) var(--kd-space-3) var(--kd-space-3) var(--kd-space-4); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">
  .kd-rail
</div>
\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["fade-in", "fade-out", "fade-up", "drop-in", "glow"].map(name => cell(`kd-animate-${name}`, `.kd-animate-${name}`, "--kd-animate-duration: 1.2s;")).join(""))\n}',...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => `\n<div style="--kd-animate-duration: 1.6s;">\n  ${grid(["fade-in", "fade-up", "drop-in"].map(name => cell(`kd-animate-${name}`, `.kd-animate-${name}`)).join(""))}\n</div>\n`\n}',...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => grid([{
    label: "default fill",
    fill: ""
  }, {
    label: "--kd-animate-fill: none",
    fill: "--kd-animate-fill: none;"
  }].map(({
    label,
    fill
  }) => cell("kd-animate-glow", label, \`--kd-animate-duration: 2.4s; \${fill}\`)).join(""))
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<ul class="kd-stagger kd-d-grid kd-gap-2" style="list-style: none; margin: 0; padding: 0;">
  \${[1, 2, 3, 4, 5].map(index => \`<li class="kd-animate-fade-up" style="padding: var(--kd-space-2); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">item \${index}</li>\`).join("")}
</ul>
\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-w-fit">
  <span class="kd-typewriter" style="--kd-typewriter-steps: 14; --kd-typewriter-duration: 2s;">Page not found</span>
</div>
\`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    shadow: "md",
    opacity: "100",
    animate: "none",
    duration: "1.2s",
    fill: "both",
    easing: "var(--kd-easing)",
    lift: false,
    rail: false
  },
  argTypes: {
    shadow: {
      control: "inline-radio",
      options: ["sm", "md", "lg", "side", "none"]
    },
    opacity: {
      control: "inline-radio",
      options: ["0", "25", "50", "75", "100"]
    },
    animate: {
      control: "select",
      options: ["none", "fade-in", "fade-out", "fade-up", "drop-in", "glow"]
    },
    duration: {
      control: "text"
    },
    fill: {
      control: "inline-radio",
      options: ["both", "none", "forwards", "backwards"]
    },
    easing: {
      control: "text"
    },
    lift: {
      control: "boolean"
    },
    rail: {
      control: "boolean"
    }
  },
  render: ({
    shadow,
    opacity,
    animate,
    duration,
    fill,
    easing,
    lift,
    rail
  }) => {
    const classes = [\`kd-shadow-\${shadow}\`, \`kd-opacity-\${opacity}\`];
    if (animate !== "none") {
      classes.push(\`kd-animate-\${animate}\`);
    }
    if (lift) {
      classes.push("kd-lift");
    }
    if (rail) {
      classes.push("kd-rail");
    }
    const extra = [\`--kd-animate-duration: \${duration};\`, \`--kd-animate-fill: \${fill};\`, \`--kd-animate-easing: \${easing};\`, rail ? "padding-inline-start: var(--kd-space-4);" : ""].join(" ");
    return cell(classes.join(" "), classes.map(name => \`.\${name}\`).join(" "), extra);
  }
}`,..._.parameters?.docs?.source}}},v=[`Shadow`,`Pop`,`Lift`,`Opacity`,`FocusRing`,`Rail`,`Animate`,`InheritedTiming`,`FillMode`,`Stagger`,`Typewriter`,`Effects`]})))()}export{c as a,d as c,g as d,n as f,p as i,o as l,m as n,l as o,y as p,u as r,s,f as t,h as u};
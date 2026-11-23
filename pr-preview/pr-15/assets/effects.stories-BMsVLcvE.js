import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";function n(e=document,{prefix:t=`kd-`,rootMargin:n=`0px 0px -10% 0px`,...r}={}){if(!(`IntersectionObserver`in window))return;let i=new IntersectionObserver(e=>{for(let n of e)n.isIntersecting&&(n.target.classList.add(`${t}reveal--in`),i.unobserve(n.target))},{rootMargin:n,...r});return e.querySelectorAll(`.${t}reveal`).forEach(e=>i.observe(e)),i}var r=t({Animate:()=>v,Effects:()=>E,FillMode:()=>b,FocusRing:()=>g,InheritedTiming:()=>y,Intro:()=>w,Lift:()=>m,Opacity:()=>h,Pop:()=>p,Rail:()=>_,Reveal:()=>S,RevealStagger:()=>C,Shadow:()=>f,Stagger:()=>x,Typewriter:()=>T,__namedExportsOrder:()=>D,default:()=>i}),i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{i={title:`Utilities/Effects`,parameters:{layout:`padded`}},a=[`fade-in`,`fade-out`,`fade-up`,`drop-in`,`slide-in-start`,`slide-in-end`,`glow`],o=(e,t,n=``)=>`<div class="${e}" style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); ${n}">${t}</div>`,s=e=>`<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));">${e}</div>`,c=e=>`
<div class="kd-js" data-scroller style="height: 14rem; overflow: auto; border: 1px solid var(--kd-border);">
  <p class="kd-flex-center" style="height: 14rem; margin: 0; font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">scroll down</p>
  <div class="kd-d-grid kd-gap-3" style="padding: var(--kd-space-3);">${e}</div>
  <div style="height: 8rem;"></div>
</div>
`,l=({canvasElement:e})=>{e.querySelectorAll(`[data-scroller]`).forEach(e=>n(e,{root:e}))},u=(e,t,n=``)=>`<ul class="${e} kd-d-grid kd-gap-2" style="list-style: none; margin: 0; padding: 0; ${n}">${t.map(e=>`<li class="kd-animate-fade-up" style="padding: var(--kd-space-2); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${e}</li>`).join(``)}</ul>`,d=e=>`
<div class="kd-d-grid kd-gap-2">
  <ul class="kd-intro kd-stagger kd-d-grid kd-gap-2" style="--kd-animate-duration: 1.2s; list-style: none; margin: 0; padding: 0;">
    ${[`About`,`Work`,`Contact`].map(e=>`<li class="kd-animate-drop-in" style="padding: var(--kd-space-2); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${e}</li>`).join(``)}
  </ul>
  <p style="margin: 0; font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">${e}</p>
</div>
`,f={tags:[`!dev`],render:()=>s([`sm`,`md`,`lg`,`side`].map(e=>o(`kd-shadow-${e}`,`.kd-shadow-${e}`)).join(``))},p={tags:[`!dev`],render:()=>`
<div class="kd-d-flex kd-gap-4">
  <div class="kd-pop kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop</div>
  <div class="kd-pop-lg kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop-lg</div>
</div>
`},m={tags:[`!dev`],render:()=>`
<div class="kd-d-flex kd-gap-4">
  <div class="kd-lift kd-border-1" tabindex="0" style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-lift</div>
  <div class="kd-pop kd-border-1" tabindex="0" style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop</div>
</div>
`},h={tags:[`!dev`],render:()=>s([`25`,`50`,`75`,`100`].map(e=>o(`kd-opacity-${e}`,`.kd-opacity-${e}`)).join(``))},g={tags:[`!dev`],render:()=>`
<button type="button" class="kd-focus-ring kd-border-1" style="padding: var(--kd-space-2); background: transparent; color: inherit; font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">
  Tab to me: .kd-focus-ring
</button>
`},_={tags:[`!dev`],render:()=>`
<div class="kd-rail" style="padding: var(--kd-space-3) var(--kd-space-3) var(--kd-space-3) var(--kd-space-4); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">
  .kd-rail
</div>
`},v={tags:[`!dev`],render:()=>s(a.map(e=>o(`kd-animate-${e}`,`.kd-animate-${e}`,`--kd-animate-duration: 1.2s;`)).join(``))},y={tags:[`!dev`],render:()=>`
<div style="--kd-animate-duration: 1.6s;">
  ${s([`fade-in`,`fade-up`,`drop-in`].map(e=>o(`kd-animate-${e}`,`.kd-animate-${e}`)).join(``))}
</div>
`},b={tags:[`!dev`],render:()=>s([{label:`default fill`,fill:``},{label:`--kd-animate-fill: none`,fill:`--kd-animate-fill: none;`}].map(({label:e,fill:t})=>o(`kd-animate-glow`,e,`--kd-animate-duration: 2.4s; ${t}`)).join(``))},x={tags:[`!dev`],render:()=>u(`kd-stagger`,[`item 1`,`item 2`,`item 3`,`item 4`,`item 5`])},S={tags:[`!dev`],parameters:{docs:{story:{autoplay:!0}}},render:()=>c([`fade-up`,`slide-in-start`,`fade-in`].map(e=>o(`kd-reveal kd-animate-${e}`,`.kd-reveal .kd-animate-${e}`,`--kd-animate-duration: 1s;`)).join(``)),play:l},C={tags:[`!dev`],parameters:{docs:{story:{autoplay:!0}}},render:()=>c(u(`kd-reveal kd-stagger`,[`item 1`,`item 2`,`item 3`,`item 4`,`item 5`],`--kd-animate-duration: 1s;`)),play:l},w={tags:[`!dev`],render:()=>`
<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));">
  ${d(`first visit`)}
  <div class="kd-no-intro">${d(`.kd-no-intro on an ancestor`)}</div>
</div>
`},T={tags:[`!dev`],render:()=>`
<div class="kd-w-fit">
  <span class="kd-typewriter" style="--kd-typewriter-steps: 14; --kd-typewriter-duration: 2s;">Page not found</span>
</div>
`},E={args:{shadow:`md`,opacity:`100`,animate:`none`,duration:`1.2s`,fill:`both`,easing:`var(--kd-easing)`,lift:!1,rail:!1},argTypes:{shadow:{control:`inline-radio`,options:[`sm`,`md`,`lg`,`side`,`none`]},opacity:{control:`inline-radio`,options:[`0`,`25`,`50`,`75`,`100`]},animate:{control:`select`,options:[`none`,...a]},duration:{control:`text`},fill:{control:`inline-radio`,options:[`both`,`none`,`forwards`,`backwards`]},easing:{control:`text`},lift:{control:`boolean`},rail:{control:`boolean`}},render:({shadow:e,opacity:t,animate:n,duration:r,fill:i,easing:a,lift:s,rail:c})=>{let l=[`kd-shadow-${e}`,`kd-opacity-${t}`];n!==`none`&&l.push(`kd-animate-${n}`),s&&l.push(`kd-lift`),c&&l.push(`kd-rail`);let u=[`--kd-animate-duration: ${r};`,`--kd-animate-fill: ${i};`,`--kd-animate-easing: ${a};`,c?`padding-inline-start: var(--kd-space-4);`:``].join(` `);return o(l.join(` `),l.map(e=>`.${e}`).join(` `),u)}},D=[`Shadow`,`Pop`,`Lift`,`Opacity`,`FocusRing`,`Rail`,`Animate`,`InheritedTiming`,`FillMode`,`Stagger`,`Reveal`,`RevealStagger`,`Intro`,`Typewriter`,`Effects`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["sm", "md", "lg", "side"].map(name => cell(`kd-shadow-${name}`, `.kd-shadow-${name}`)).join(""))\n}',...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-flex kd-gap-4">
  <div class="kd-pop kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop</div>
  <div class="kd-pop-lg kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop-lg</div>
</div>
\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-flex kd-gap-4">
  <div class="kd-lift kd-border-1" tabindex="0" style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-lift</div>
  <div class="kd-pop kd-border-1" tabindex="0" style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop</div>
</div>
\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(["25", "50", "75", "100"].map(value => cell(`kd-opacity-${value}`, `.kd-opacity-${value}`)).join(""))\n}',...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<button type="button" class="kd-focus-ring kd-border-1" style="padding: var(--kd-space-2); background: transparent; color: inherit; font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">
  Tab to me: .kd-focus-ring
</button>
\`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-rail" style="padding: var(--kd-space-3) var(--kd-space-3) var(--kd-space-3) var(--kd-space-4); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">
  .kd-rail
</div>
\`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => grid(animations.map(name => cell(`kd-animate-${name}`, `.kd-animate-${name}`, "--kd-animate-duration: 1.2s;")).join(""))\n}',...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => `\n<div style="--kd-animate-duration: 1.6s;">\n  ${grid(["fade-in", "fade-up", "drop-in"].map(name => cell(`kd-animate-${name}`, `.kd-animate-${name}`)).join(""))}\n</div>\n`\n}',...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => list("kd-stagger", ["item 1", "item 2", "item 3", "item 4", "item 5"])
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    docs: {
      story: {
        autoplay: true
      }
    }
  },
  render: () => scroller(["fade-up", "slide-in-start", "fade-in"].map(name => cell(\`kd-reveal kd-animate-\${name}\`, \`.kd-reveal .kd-animate-\${name}\`, "--kd-animate-duration: 1s;")).join("")),
  play: observe
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  parameters: {
    docs: {
      story: {
        autoplay: true
      }
    }
  },
  render: () => scroller(list("kd-reveal kd-stagger", ["item 1", "item 2", "item 3", "item 4", "item 5"], "--kd-animate-duration: 1s;")),
  play: observe
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));">
  \${intro("first visit")}
  <div class="kd-no-intro">\${intro(".kd-no-intro on an ancestor")}</div>
</div>
\`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-w-fit">
  <span class="kd-typewriter" style="--kd-typewriter-steps: 14; --kd-typewriter-duration: 2s;">Page not found</span>
</div>
\`
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
      options: ["none", ...animations]
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
}`,...E.parameters?.docs?.source}}}})))()}export{w as a,p as c,C as d,f,O as g,r as h,y as i,_ as l,T as m,b as n,m as o,x as p,g as r,h as s,v as t,S as u};
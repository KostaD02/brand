import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Card:()=>h,Example:()=>o,Footer:()=>l,Header:()=>c,Interactive:()=>d,Lift:()=>f,Media:()=>u,Stretched:()=>m,Surface:()=>s,TitleColor:()=>p,__namedExportsOrder:()=>g,default:()=>r}),r,i,a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r={title:`Components/Card`},i=`
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  <path d="M15 3h6v6" />
  <path d="M10 14 21 3" />
</svg>
`,a=e=>`<div style="display: flex; flex-wrap: wrap; gap: var(--kd-space-3);">${e}</div>`,o={tags:[`!dev`],render:()=>`
<div class="kd-card" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Card title</div>
    <div class="kd-card__text">
      Supporting copy sits under the title at the secondary text colour, one step down
      in size.
    </div>
  </div>
</div>
`},s={tags:[`!dev`],render:()=>`
<div class="kd-card kd-card--surface" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Surface</div>
    <div class="kd-card__text">Sits one step back from the elevated default.</div>
  </div>
</div>
`},c={tags:[`!dev`],render:()=>a(`
<div class="kd-card" style="max-width: 18rem;">
  <div class="kd-card__header">
    <div class="kd-card__title">Idler</div>
    <span class="kd-status-pill kd-status-pill--active">
      <span class="kd-status-pill__dot"></span>
      Running
    </span>
  </div>
  <div class="kd-card__body">
    <div class="kd-card__text">
      The title stays left, the pill stays right, and the two never collide because the
      row is a flex with a gap.
    </div>
  </div>
</div>

<div class="kd-card" style="max-width: 18rem;">
  <div class="kd-card__header">
    <div class="kd-card__title">Brand</div>
    <a href="#" class="kd-icon-link" aria-label="Open repository">${i}</a>
  </div>
  <div class="kd-card__body">
    <div class="kd-card__text">
      An icon link works just as well on the right. Give it an aria-label, because its
      only content is a glyph.
    </div>
  </div>
</div>
`)},l={tags:[`!dev`],render:()=>`
<div class="kd-card" style="max-width: 20rem; min-height: 12rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">With a footer</div>
    <div class="kd-card__text">
      The footer is pushed to the bottom, so cards in a row line up regardless of how
      much text each one holds.
    </div>
  </div>
  <div class="kd-card__footer">
    <button type="button" class="kd-btn kd-btn--primary kd-btn--sm">Open</button>
    <span class="kd-status-pill kd-status-pill--active">
      <span class="kd-status-pill__dot"></span>
      Running
    </span>
  </div>
</div>
`},u={tags:[`!dev`],render:()=>`
<div class="kd-card" style="max-width: 20rem;">
  <div class="kd-card__media">
    <div style="height: 7rem; background: var(--kd-accent-soft);"></div>
  </div>
  <div class="kd-card__body">
    <div class="kd-card__title">With media</div>
    <div class="kd-card__text">
      The media block cancels the card padding so the image meets the border.
    </div>
  </div>
</div>
`},d={tags:[`!dev`],render:()=>`
<a href="#" class="kd-card kd-card--interactive" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Interactive</div>
    <div class="kd-card__text">Hover or focus this card to see it lift.</div>
  </div>
</a>
`},f={tags:[`!dev`],render:()=>a(`
<a href="#" class="kd-card kd-card--lift" style="max-width: 18rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Lift</div>
    <div class="kd-card__text">Rises straight up onto a soft shadow.</div>
  </div>
</a>

<a href="#" class="kd-card kd-card--interactive" style="max-width: 18rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Interactive</div>
    <div class="kd-card__text">Moves up and to the left onto a hard offset shadow.</div>
  </div>
</a>
`)},p={tags:[`!dev`],render:()=>a(`
<a href="#" class="kd-card kd-card--lift" style="max-width: 18rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Default tint</div>
    <div class="kd-card__text">
      The title moves to --kd-card-title-hover-color on hover and on focus.
    </div>
  </div>
</a>

<a
  href="#"
  class="kd-card kd-card--interactive"
  style="max-width: 18rem; --kd-card-title-hover-color: var(--kd-warning);"
>
  <div class="kd-card__body">
    <div class="kd-card__title">Reassigned tint</div>
    <div class="kd-card__text">
      The same rule with the hover colour set to the warning token on this one card.
    </div>
  </div>
</a>
`)},m={tags:[`!dev`],render:()=>`
<div class="kd-card kd-card--lift" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">
      <a href="#" class="kd-link kd-link--anchor kd-stretch kd-pos-static">Steam Idler</a>
    </div>
    <div class="kd-card__text">
      The title link covers the card, so anywhere on this surface follows it. The icon
      link sits above the overlay and stays a target of its own.
    </div>
  </div>
  <div class="kd-card__footer">
    <span class="kd-status-pill kd-status-pill--active">
      <span class="kd-status-pill__dot"></span>
      Running
    </span>
    <a href="#" class="kd-icon-link kd-z-raised" aria-label="Open repository">${i}</a>
  </div>
</div>
`},h={args:{title:`Card title`,text:`Supporting copy that explains what the card is for.`,surface:!1,header:!1,interactive:!1,lift:!1,footer:!1},argTypes:{title:{control:`text`},text:{control:`text`},surface:{control:`boolean`},header:{control:`boolean`},interactive:{control:`boolean`},lift:{control:`boolean`},footer:{control:`boolean`}},render:({title:e,text:t,surface:n,header:r,interactive:i,lift:a,footer:o})=>{let s=[`kd-card`];return n&&s.push(`kd-card--surface`),i&&s.push(`kd-card--interactive`),a&&s.push(`kd-card--lift`),`
<div class="${s.join(` `)}" style="max-width: 20rem;">
  ${r?`<div class="kd-card__header">
    <div class="kd-card__title">${e}</div>
    <span class="kd-status-pill kd-status-pill--active">
      <span class="kd-status-pill__dot"></span>
      Running
    </span>
  </div>`:``}
  <div class="kd-card__body">
    ${r?``:`<div class="kd-card__title">${e}</div>`}
    <div class="kd-card__text">${t}</div>
  </div>
  ${o?`<div class="kd-card__footer">
    <button type="button" class="kd-btn kd-btn--primary kd-btn--sm">Action</button>
  </div>`:``}
</div>
`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-card" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Card title</div>
    <div class="kd-card__text">
      Supporting copy sits under the title at the secondary text colour, one step down
      in size.
    </div>
  </div>
</div>
\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-card kd-card--surface" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Surface</div>
    <div class="kd-card__text">Sits one step back from the elevated default.</div>
  </div>
</div>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => row(\`
<div class="kd-card" style="max-width: 18rem;">
  <div class="kd-card__header">
    <div class="kd-card__title">Idler</div>
    <span class="kd-status-pill kd-status-pill--active">
      <span class="kd-status-pill__dot"></span>
      Running
    </span>
  </div>
  <div class="kd-card__body">
    <div class="kd-card__text">
      The title stays left, the pill stays right, and the two never collide because the
      row is a flex with a gap.
    </div>
  </div>
</div>

<div class="kd-card" style="max-width: 18rem;">
  <div class="kd-card__header">
    <div class="kd-card__title">Brand</div>
    <a href="#" class="kd-icon-link" aria-label="Open repository">\${externalIcon}</a>
  </div>
  <div class="kd-card__body">
    <div class="kd-card__text">
      An icon link works just as well on the right. Give it an aria-label, because its
      only content is a glyph.
    </div>
  </div>
</div>
\`)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-card" style="max-width: 20rem; min-height: 12rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">With a footer</div>
    <div class="kd-card__text">
      The footer is pushed to the bottom, so cards in a row line up regardless of how
      much text each one holds.
    </div>
  </div>
  <div class="kd-card__footer">
    <button type="button" class="kd-btn kd-btn--primary kd-btn--sm">Open</button>
    <span class="kd-status-pill kd-status-pill--active">
      <span class="kd-status-pill__dot"></span>
      Running
    </span>
  </div>
</div>
\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-card" style="max-width: 20rem;">
  <div class="kd-card__media">
    <div style="height: 7rem; background: var(--kd-accent-soft);"></div>
  </div>
  <div class="kd-card__body">
    <div class="kd-card__title">With media</div>
    <div class="kd-card__text">
      The media block cancels the card padding so the image meets the border.
    </div>
  </div>
</div>
\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<a href="#" class="kd-card kd-card--interactive" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Interactive</div>
    <div class="kd-card__text">Hover or focus this card to see it lift.</div>
  </div>
</a>
\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => row(\`
<a href="#" class="kd-card kd-card--lift" style="max-width: 18rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Lift</div>
    <div class="kd-card__text">Rises straight up onto a soft shadow.</div>
  </div>
</a>

<a href="#" class="kd-card kd-card--interactive" style="max-width: 18rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Interactive</div>
    <div class="kd-card__text">Moves up and to the left onto a hard offset shadow.</div>
  </div>
</a>
\`)
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => row(\`
<a href="#" class="kd-card kd-card--lift" style="max-width: 18rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Default tint</div>
    <div class="kd-card__text">
      The title moves to --kd-card-title-hover-color on hover and on focus.
    </div>
  </div>
</a>

<a
  href="#"
  class="kd-card kd-card--interactive"
  style="max-width: 18rem; --kd-card-title-hover-color: var(--kd-warning);"
>
  <div class="kd-card__body">
    <div class="kd-card__title">Reassigned tint</div>
    <div class="kd-card__text">
      The same rule with the hover colour set to the warning token on this one card.
    </div>
  </div>
</a>
\`)
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-card kd-card--lift" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">
      <a href="#" class="kd-link kd-link--anchor kd-stretch kd-pos-static">Steam Idler</a>
    </div>
    <div class="kd-card__text">
      The title link covers the card, so anywhere on this surface follows it. The icon
      link sits above the overlay and stays a target of its own.
    </div>
  </div>
  <div class="kd-card__footer">
    <span class="kd-status-pill kd-status-pill--active">
      <span class="kd-status-pill__dot"></span>
      Running
    </span>
    <a href="#" class="kd-icon-link kd-z-raised" aria-label="Open repository">\${externalIcon}</a>
  </div>
</div>
\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Card title",
    text: "Supporting copy that explains what the card is for.",
    surface: false,
    header: false,
    interactive: false,
    lift: false,
    footer: false
  },
  argTypes: {
    title: {
      control: "text"
    },
    text: {
      control: "text"
    },
    surface: {
      control: "boolean"
    },
    header: {
      control: "boolean"
    },
    interactive: {
      control: "boolean"
    },
    lift: {
      control: "boolean"
    },
    footer: {
      control: "boolean"
    }
  },
  render: ({
    title,
    text,
    surface,
    header,
    interactive,
    lift,
    footer
  }) => {
    const classes = ["kd-card"];
    if (surface) {
      classes.push("kd-card--surface");
    }
    if (interactive) {
      classes.push("kd-card--interactive");
    }
    if (lift) {
      classes.push("kd-card--lift");
    }
    return \`
<div class="\${classes.join(" ")}" style="max-width: 20rem;">
  \${header ? \`<div class="kd-card__header">
    <div class="kd-card__title">\${title}</div>
    <span class="kd-status-pill kd-status-pill--active">
      <span class="kd-status-pill__dot"></span>
      Running
    </span>
  </div>\` : ""}
  <div class="kd-card__body">
    \${header ? "" : \`<div class="kd-card__title">\${title}</div>\`}
    <div class="kd-card__text">\${text}</div>
  </div>
  \${footer ? \`<div class="kd-card__footer">
    <button type="button" class="kd-btn kd-btn--primary kd-btn--sm">Action</button>
  </div>\` : ""}
</div>
\`;
  }
}`,...h.parameters?.docs?.source}}},g=[`Example`,`Surface`,`Header`,`Footer`,`Media`,`Interactive`,`Lift`,`TitleColor`,`Stretched`,`Card`]})))()}export{f as a,s as c,_ as d,d as i,p as l,l as n,u as o,c as r,m as s,o as t,n as u};
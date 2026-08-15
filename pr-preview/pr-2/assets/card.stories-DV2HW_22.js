import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Card:()=>l,Example:()=>i,Footer:()=>o,Interactive:()=>c,Media:()=>s,Surface:()=>a,__namedExportsOrder:()=>u,default:()=>r}),r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{r={title:`Components/Card`},i={tags:[`!dev`],render:()=>`
<div class="kd-card" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Card title</div>
    <div class="kd-card__text">
      Supporting copy sits under the title at the secondary text colour, one step down
      in size.
    </div>
  </div>
</div>
`},a={tags:[`!dev`],render:()=>`
<div class="kd-card kd-card--surface" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Surface</div>
    <div class="kd-card__text">Sits one step back from the elevated default.</div>
  </div>
</div>
`},o={tags:[`!dev`],render:()=>`
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
`},s={tags:[`!dev`],render:()=>`
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
`},c={tags:[`!dev`],render:()=>`
<a href="#" class="kd-card kd-card--interactive" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Interactive</div>
    <div class="kd-card__text">Hover or focus this card to see it lift.</div>
  </div>
</a>
`},l={args:{title:`Card title`,text:`Supporting copy that explains what the card is for.`,surface:!1,interactive:!1,footer:!1},argTypes:{title:{control:`text`},text:{control:`text`},surface:{control:`boolean`},interactive:{control:`boolean`},footer:{control:`boolean`}},render:({title:e,text:t,surface:n,interactive:r,footer:i})=>{let a=[`kd-card`];return n&&a.push(`kd-card--surface`),r&&a.push(`kd-card--interactive`),`
<div class="${a.join(` `)}" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">${e}</div>
    <div class="kd-card__text">${t}</div>
  </div>
  ${i?`<div class="kd-card__footer">
    <button type="button" class="kd-btn kd-btn--primary kd-btn--sm">Action</button>
  </div>`:``}
</div>
`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-card kd-card--surface" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Surface</div>
    <div class="kd-card__text">Sits one step back from the elevated default.</div>
  </div>
</div>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<a href="#" class="kd-card kd-card--interactive" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Interactive</div>
    <div class="kd-card__text">Hover or focus this card to see it lift.</div>
  </div>
</a>
\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Card title",
    text: "Supporting copy that explains what the card is for.",
    surface: false,
    interactive: false,
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
    interactive: {
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
    interactive,
    footer
  }) => {
    const classes = ["kd-card"];
    if (surface) {
      classes.push("kd-card--surface");
    }
    if (interactive) {
      classes.push("kd-card--interactive");
    }
    return \`
<div class="\${classes.join(" ")}" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">\${title}</div>
    <div class="kd-card__text">\${text}</div>
  </div>
  \${footer ? \`<div class="kd-card__footer">
    <button type="button" class="kd-btn kd-btn--primary kd-btn--sm">Action</button>
  </div>\` : ""}
</div>
\`;
  }
}`,...l.parameters?.docs?.source}}},u=[`Example`,`Surface`,`Footer`,`Media`,`Interactive`,`Card`]})))()}export{a,s as i,o as n,n as o,c as r,d as s,i as t};
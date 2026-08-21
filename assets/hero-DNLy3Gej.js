import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DaCLIT0Y.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./hero.stories-Bh2Xgppf.js";function p(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:s}),`
`,(0,h.jsx)(n.h1,{id:`hero`,children:`Hero`}),`
`,(0,h.jsx)(n.p,{children:`The opening block of a page: an eyebrow, an oversized name, a tagline under it and a
short lede. It is a flex column that centres its own content, so it sits correctly
whether it fills the viewport or only the space it needs.`}),`
`,(0,h.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsxs)(n.p,{children:[`The four elements are `,(0,h.jsx)(n.code,{children:`kd-hero__eyebrow`}),`, `,(0,h.jsx)(n.code,{children:`kd-hero__title`}),`, `,(0,h.jsx)(n.code,{children:`kd-hero__subtitle`}),` and
`,(0,h.jsx)(n.code,{children:`kd-hero__lede`}),`. Each one sets type, colour and its own margins, nothing structural, so
the heading levels stay yours to pick: the title is usually the page's `,(0,h.jsx)(n.code,{children:`h1`}),`, the subtitle
an `,(0,h.jsx)(n.code,{children:`h2`}),`, and both the eyebrow and the lede are paragraphs.`]}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`title-and-subtitle`,children:`Title and subtitle`}),`
`,(0,h.jsxs)(n.p,{children:[`Both run at `,(0,h.jsx)(n.code,{children:`--kd-font-size-fluid-hero`}),`, which is `,(0,h.jsx)(n.code,{children:`clamp(40px, 5vw, 60px)`}),`, so the pair
scales with the viewport between those two sizes without a media query. The token sits in
the token layer rather than on the block, so reassigning it there restyles every hero at
once. The two differ in colour alone: the title takes `,(0,h.jsx)(n.code,{children:`--kd-text-primary`}),`, the subtitle
drops to `,(0,h.jsx)(n.code,{children:`--kd-text-muted`}),`.`]}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`The eyebrow is a step down at `,(0,h.jsx)(n.code,{children:`--kd-font-size-fluid-h3`}),` in the accent colour, and the
lede switches to the secondary font so the long line reads as body copy rather than as
a small heading.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`width`,children:`Width`}),`
`,(0,h.jsxs)(n.p,{children:[`The hero is full width and caps nothing itself. Add `,(0,h.jsx)(n.code,{children:`kd-measure-xs`}),` to the same element
to hold the lede at a readable line length; the title is fluid, so it keeps filling the
narrower column instead of leaving a gap.`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(n.h2,{id:`entry`,children:`Entry`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-stagger`}),` on the hero and `,(0,h.jsx)(n.code,{children:`kd-animate-fade-up`}),` on each child produce the entry with no
consumer CSS at all. The stagger assigns `,(0,h.jsx)(n.code,{children:`--kd-animate-delay`}),` per child from
`,(0,h.jsx)(n.code,{children:`--kd-stagger-step`}),`, so the lines arrive 200ms apart in DOM order. Four classes on one
element, `,(0,h.jsx)(n.code,{children:`kd-section kd-measure-xs kd-hero kd-stagger`}),`, cover spacing, width, layout and
timing.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsx)(n.p,{children:`The reduced-motion guard in the reset collapses animation duration to near zero, so a
reader who asked for less motion gets the lines in place rather than travelling.`}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,h.jsxs)(n.p,{children:[`The hero declares no custom properties of its own; every value it uses comes straight
from the token layer. Reassign `,(0,h.jsx)(n.code,{children:`--kd-font-size-fluid-hero`}),`, `,(0,h.jsx)(n.code,{children:`--kd-font-size-fluid-h3`}),` or
`,(0,h.jsx)(n.code,{children:`--kd-font-size-md`}),` on the block for a one-off, and `,(0,h.jsx)(n.code,{children:`--kd-stagger-step`}),` on the same
element to change the pace of the entry.`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),u()})))()}g();export{m as default};
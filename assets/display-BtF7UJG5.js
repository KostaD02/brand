import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DOx-Ekm2.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./display.stories-DZykMvvy.js";function h(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:p}),`
`,(0,_.jsx)(n.h1,{id:`display`,children:`Display`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-d-{value}`}),` sets the `,(0,_.jsx)(n.code,{children:`display`}),` property. Available values:`]}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`block`}),`, `,(0,_.jsx)(n.code,{children:`inline`}),`, `,(0,_.jsx)(n.code,{children:`inline-block`}),`, `,(0,_.jsx)(n.code,{children:`flex`}),`, `,(0,_.jsx)(n.code,{children:`inline-flex`}),`, `,(0,_.jsx)(n.code,{children:`grid`}),`, `,(0,_.jsx)(n.code,{children:`inline-grid`}),`,
`,(0,_.jsx)(n.code,{children:`contents`}),`, `,(0,_.jsx)(n.code,{children:`none`}),`.`]}),`
`,(0,_.jsx)(n.h2,{id:`block`,children:`Block`}),`
`,(0,_.jsx)(i,{of:m}),`
`,(0,_.jsx)(n.h2,{id:`inline`,children:`Inline`}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(n.h2,{id:`flex`,children:`Flex`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-d-flex`}),` pairs with the `,(0,_.jsx)(n.a,{href:`?path=/docs/utilities-flex--docs`,children:`Flex`}),` utilities for
direction, alignment and wrapping, and with `,(0,_.jsx)(n.code,{children:`kd-gap-*`}),` from
`,(0,_.jsx)(n.a,{href:`?path=/docs/utilities-spacing--docs`,children:`Spacing`}),` for the gap.`]}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsx)(n.h2,{id:`grid`,children:`Grid`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-d-grid`}),` sets the display only. There are no column utilities, so define the tracks
with `,(0,_.jsx)(n.code,{children:`grid-template-columns`}),` yourself.`]}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(n.h2,{id:`responsive`,children:`Responsive`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-d-{breakpoint}-{value}`}),` applies `,(0,_.jsx)(n.strong,{children:`at and below`}),` that breakpoint, not above it.
Breakpoints are `,(0,_.jsx)(n.code,{children:`xxs`}),`, `,(0,_.jsx)(n.code,{children:`xs`}),`, `,(0,_.jsx)(n.code,{children:`sm`}),`, `,(0,_.jsx)(n.code,{children:`md`}),`, `,(0,_.jsx)(n.code,{children:`lg`}),`, `,(0,_.jsx)(n.code,{children:`xl`}),`, and each variant compiles to a
`,(0,_.jsx)(n.code,{children:`max-width`}),` query.`]}),`
`,(0,_.jsx)(i,{of:s}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[`This is the opposite direction from the container tiers, where `,(0,_.jsx)(n.code,{children:`kd-container-md`}),` uses
`,(0,_.jsx)(n.code,{children:`min-width`}),`. Same `,(0,_.jsx)(n.code,{children:`-md-`}),` segment, opposite meaning: `,(0,_.jsx)(n.code,{children:`kd-d-xl-none`}),` hides content on
every viewport up to 1080px rather than only on large ones.`]}),`
`]}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[`Only `,(0,_.jsx)(n.code,{children:`display`}),` has responsive variants. The full cross-product across every utility
group would take the utilities bundle from roughly 27KB to 150KB, so it is deliberate
restraint rather than an omission.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`visually-hidden`,children:`Visually hidden`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-visually-hidden`}),` removes an element from the page visually while leaving it in the
accessibility tree. `,(0,_.jsx)(n.code,{children:`kd-visually-hidden-focusable`}),` does the same but reveals the element
when it or anything inside it takes focus. That is the mechanism behind a skip link.`]}),`
`,(0,_.jsx)(i,{of:d})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=r(),n(),o(),c()})))()}v();export{g as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-C3NIM0p1.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./position.stories-DGXoaGxT.js";function m(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:f}),`
`,(0,g.jsx)(n.h1,{id:`position`,children:`Position`}),`
`,(0,g.jsx)(n.p,{children:`Positioning, edge anchoring, stacking order, the stretch overlay and overflow.`}),`
`,(0,g.jsx)(n.h2,{id:`position-1`,children:`Position`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-pos-{static|relative|absolute|fixed|sticky}`}),`.`]}),`
`,(0,g.jsx)(n.h2,{id:`edges`,children:`Edges`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-{top|right|bottom|left}-0`}),` and `,(0,g.jsx)(n.code,{children:`kd-inset-0`}),`. Only the zero value is generated; anything
else is layout-specific and belongs in component CSS.`]}),`
`,(0,g.jsx)(i,{of:p}),`
`,(0,g.jsx)(n.h2,{id:`inset`,children:`Inset`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-inset-0`}),` pins all four edges at once, which is the usual way to fill a positioned
parent.`]}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(n.h2,{id:`stacking`,children:`Stacking`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-z-{name}`}),` uses the named z-index scale rather than raw numbers: `,(0,g.jsx)(n.code,{children:`behind`}),` (-1),
`,(0,g.jsx)(n.code,{children:`base`}),` (0), `,(0,g.jsx)(n.code,{children:`raised`}),` (1), `,(0,g.jsx)(n.code,{children:`dropdown`}),` (10), `,(0,g.jsx)(n.code,{children:`sticky`}),` (30), `,(0,g.jsx)(n.code,{children:`overlay`}),` (50), `,(0,g.jsx)(n.code,{children:`modal`}),` (100),
`,(0,g.jsx)(n.code,{children:`toast`}),` (500), `,(0,g.jsx)(n.code,{children:`skip`}),` (1000).`]}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsxs)(n.p,{children:[`The names encode the intended layering order. Reach for the name that matches what the
element `,(0,g.jsx)(n.em,{children:`is`}),` rather than picking a number that happens to work. That is what keeps the
scale from drifting into arbitrary values.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`stretch`,children:`Stretch`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-stretch`}),` draws a `,(0,g.jsx)(n.code,{children:`::before`}),` on the element, pinned to `,(0,g.jsx)(n.code,{children:`inset: 0`}),` at `,(0,g.jsx)(n.code,{children:`--kd-z-base`}),`, so
an inline link becomes a target the size of the area behind it. Two things have to hold.
The ancestor that should be covered must be positioned:
`,(0,g.jsx)(n.a,{href:`?path=/docs/components-card--docs`,children:`Card`}),` already sets `,(0,g.jsx)(n.code,{children:`position: relative`}),` for exactly
this, and anything else takes `,(0,g.jsx)(n.code,{children:`kd-pos-relative`}),`. And any sibling control that must keep
working has to be raised above the overlay, `,(0,g.jsx)(n.code,{children:`kd-z-raised`}),` being the step straight up from
the `,(0,g.jsx)(n.code,{children:`kd-z-base`}),` the overlay sits on. Below, the card title covers the whole card while the
icon link in the footer stays separately clickable.`]}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsxs)(n.p,{children:[`Anchors are `,(0,g.jsx)(n.code,{children:`position: relative`}),` in the reset, so their underline can sweep in from the
left edge, which would leave a stretched link resolving against its own text. Add
`,(0,g.jsx)(n.code,{children:`kd-pos-static`}),` to the link to hand the overlay back to the card, and `,(0,g.jsx)(n.code,{children:`kd-link--anchor`}),`
to drop the underline that would otherwise run the full width of it.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`overflow`,children:`Overflow`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-overflow-{auto|hidden|visible|scroll|clip}`}),`, with `,(0,g.jsx)(n.code,{children:`kd-overflow-x-*`}),` and
`,(0,g.jsx)(n.code,{children:`kd-overflow-y-*`}),` for a single axis.`]}),`
`,(0,g.jsx)(i,{of:d})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=r(),n(),o(),u()})))()}_();export{h as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DOx-Ekm2.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./position.stories-BeYCc-jD.js";function p(e){let n={blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(n.h1,{id:`position`,children:`Position`}),`
`,(0,h.jsx)(n.p,{children:`Positioning, edge anchoring, stacking order and overflow.`}),`
`,(0,h.jsx)(n.h2,{id:`position-1`,children:`Position`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-pos-{static|relative|absolute|fixed|sticky}`}),`.`]}),`
`,(0,h.jsx)(n.h2,{id:`edges`,children:`Edges`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-{top|right|bottom|left}-0`}),` and `,(0,h.jsx)(n.code,{children:`kd-inset-0`}),`. Only the zero value is generated; anything
else is layout-specific and belongs in component CSS.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsx)(n.h2,{id:`inset`,children:`Inset`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-inset-0`}),` pins all four edges at once, which is the usual way to fill a positioned
parent.`]}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`stacking`,children:`Stacking`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-z-{name}`}),` uses the named z-index scale rather than raw numbers: `,(0,h.jsx)(n.code,{children:`behind`}),` (-1),
`,(0,h.jsx)(n.code,{children:`base`}),` (0), `,(0,h.jsx)(n.code,{children:`raised`}),` (1), `,(0,h.jsx)(n.code,{children:`dropdown`}),` (10), `,(0,h.jsx)(n.code,{children:`sticky`}),` (30), `,(0,h.jsx)(n.code,{children:`overlay`}),` (50), `,(0,h.jsx)(n.code,{children:`modal`}),` (100),
`,(0,h.jsx)(n.code,{children:`toast`}),` (500), `,(0,h.jsx)(n.code,{children:`skip`}),` (1000).`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`The names encode the intended layering order. Reach for the name that matches what the
element `,(0,h.jsx)(n.em,{children:`is`}),` rather than picking a number that happens to work. That is what keeps the
scale from drifting into arbitrary values.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`overflow`,children:`Overflow`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-overflow-{auto|hidden|visible|scroll|clip}`}),`, with `,(0,h.jsx)(n.code,{children:`kd-overflow-x-*`}),` and
`,(0,h.jsx)(n.code,{children:`kd-overflow-y-*`}),` for a single axis.`]}),`
`,(0,h.jsx)(i,{of:d})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),s()})))()}g();export{m as default};
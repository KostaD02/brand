import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-CxskzV48.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./spacing.stories-DJfd4umC.js";function m(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:f}),`
`,(0,g.jsx)(n.h1,{id:`spacing`,children:`Spacing`}),`
`,(0,g.jsxs)(n.p,{children:[`Margin, padding and gap, all drawn from one eight-step scale. Every class resolves to a
`,(0,g.jsx)(n.code,{children:`--kd-space-*`}),` token rather than a literal, so overriding `,(0,g.jsx)(n.code,{children:`$spacer`}),` moves the whole
system.`]}),`
`,(0,g.jsxs)(n.p,{children:[`Steps: `,(0,g.jsx)(n.code,{children:`0`}),` (0), `,(0,g.jsx)(n.code,{children:`1`}),` (0.25rem), `,(0,g.jsx)(n.code,{children:`2`}),` (0.5rem), `,(0,g.jsx)(n.code,{children:`3`}),` (1rem), `,(0,g.jsx)(n.code,{children:`4`}),` (1.5rem), `,(0,g.jsx)(n.code,{children:`5`}),` (3rem),
`,(0,g.jsx)(n.code,{children:`6`}),` (4rem), `,(0,g.jsx)(n.code,{children:`7`}),` (5.625rem).`]}),`
`,(0,g.jsx)(n.h2,{id:`padding`,children:`Padding`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-p-{0-7}`}),` for all sides, plus `,(0,g.jsx)(n.code,{children:`pt`}),`, `,(0,g.jsx)(n.code,{children:`pr`}),`, `,(0,g.jsx)(n.code,{children:`pb`}),`, `,(0,g.jsx)(n.code,{children:`pl`}),` for single sides and `,(0,g.jsx)(n.code,{children:`px`}),`, `,(0,g.jsx)(n.code,{children:`py`}),`
for axes.`]}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(n.h2,{id:`margin`,children:`Margin`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-m-{0-7}`}),` with the same `,(0,g.jsx)(n.code,{children:`mt`}),`, `,(0,g.jsx)(n.code,{children:`mr`}),`, `,(0,g.jsx)(n.code,{children:`mb`}),`, `,(0,g.jsx)(n.code,{children:`ml`}),`, `,(0,g.jsx)(n.code,{children:`mx`}),`, `,(0,g.jsx)(n.code,{children:`my`}),` variants.`]}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`single-sides-and-axes`,children:`Single sides and axes`}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsx)(n.h2,{id:`auto-margins`,children:`Auto margins`}),`
`,(0,g.jsxs)(n.p,{children:[`Every margin class also has an `,(0,g.jsx)(n.code,{children:`auto`}),` variant: `,(0,g.jsx)(n.code,{children:`kd-m-auto`}),`, `,(0,g.jsx)(n.code,{children:`kd-mx-auto`}),`, `,(0,g.jsx)(n.code,{children:`kd-mt-auto`}),`
and so on. There is no `,(0,g.jsx)(n.code,{children:`auto`}),` for padding, because `,(0,g.jsx)(n.code,{children:`padding: auto`}),` is not valid CSS.`]}),`
`,(0,g.jsx)(i,{of:p}),`
`,(0,g.jsx)(n.h2,{id:`gap`,children:`Gap`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-gap-{0-7}`}),` sets `,(0,g.jsx)(n.code,{children:`gap`}),`, with `,(0,g.jsx)(n.code,{children:`kd-gap-x-*`}),` for `,(0,g.jsx)(n.code,{children:`column-gap`}),` and `,(0,g.jsx)(n.code,{children:`kd-gap-y-*`}),` for
`,(0,g.jsx)(n.code,{children:`row-gap`}),`. Gap applies to flex and grid containers only.`]}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsxs)(n.p,{children:[`Gap is generally a better choice than margins on children: it does not collapse, does
not add space at the ends of a row, and does not need a `,(0,g.jsx)(n.code,{children:`:last-child`}),` exception.`]}),`
`]})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=r(),n(),o(),u()})))()}_();export{h as default};
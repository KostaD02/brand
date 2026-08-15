import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-dweimCSc.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./table.stories-D-MLOVxc.js";function p(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(n.h1,{id:`table`,children:`Table`}),`
`,(0,h.jsxs)(n.p,{children:[`Bare `,(0,h.jsx)(n.code,{children:`table`}),` is styled, so a plain table needs no classes. Cells get padding and a bottom
rule, and the header row is uppercase and muted on an elevated background. Every row
keeps its bottom rule, so the table closes on a line.`]}),`
`,(0,h.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`caption`,children:`Caption`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`caption`}),` is muted, one size down, left aligned and sits above the table.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsx)(n.h2,{id:`scrolling`,children:`Scrolling`}),`
`,(0,h.jsxs)(n.p,{children:[`Tables are `,(0,h.jsx)(n.code,{children:`width: 100%`}),` and will squash rather than overflow. Wrap one in
`,(0,h.jsx)(n.code,{children:`kd-table-scroll`}),` and give the table a `,(0,h.jsx)(n.code,{children:`min-width`}),` to get horizontal scrolling instead.`]}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(n.h2,{id:`sticky-header`,children:`Sticky header`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-sticky-head`}),` pins the header row while the body scrolls. It is element-qualified as
`,(0,h.jsx)(n.code,{children:`table.kd-sticky-head`}),`, so put it on the table itself, not the wrapper.`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsx)(n.p,{children:`Sticky positioning needs a scroll container with a bounded height. The class alone does
nothing if the page is what scrolls.`}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`fixed-layout`,children:`Fixed layout`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-fixed`}),` sets `,(0,h.jsx)(n.code,{children:`table-layout: fixed`}),`, so columns divide the width evenly instead of
sizing to content. Also element-qualified.`]}),`
`,(0,h.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`--kd-table-padding-y`}),`, `,(0,h.jsx)(n.code,{children:`--kd-table-padding-x`}),`, `,(0,h.jsx)(n.code,{children:`--kd-table-border-color`}),`,
`,(0,h.jsx)(n.code,{children:`--kd-table-head-bg`}),` and `,(0,h.jsx)(n.code,{children:`--kd-table-head-color`}),` are declared on `,(0,h.jsx)(n.code,{children:`table`}),`, so a denser or
recoloured table is a matter of reassigning them on that element.`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),s()})))()}g();export{m as default};
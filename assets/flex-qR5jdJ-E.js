import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-CxskzV48.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./flex.stories-CxCfAh70.js";function g(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:c}),`
`,(0,v.jsx)(n.h1,{id:`flex`,children:`Flex`}),`
`,(0,v.jsxs)(n.p,{children:[`Flexbox utilities. They set flex properties only, so put `,(0,v.jsx)(n.code,{children:`kd-d-flex`}),` on the container
yourself, and use `,(0,v.jsx)(n.code,{children:`kd-gap-*`}),` for spacing between items.`]}),`
`,(0,v.jsx)(n.h2,{id:`direction`,children:`Direction`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-flex-{row|row-reverse|column|column-reverse}`}),`.`]}),`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsx)(n.h2,{id:`justify`,children:`Justify`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-justify-{start|end|center|between|around|evenly}`}),` sets `,(0,v.jsx)(n.code,{children:`justify-content`}),`. The keys are
shortened: `,(0,v.jsx)(n.code,{children:`between`}),` maps to `,(0,v.jsx)(n.code,{children:`space-between`}),`, and `,(0,v.jsx)(n.code,{children:`start`}),` to `,(0,v.jsx)(n.code,{children:`flex-start`}),`.`]}),`
`,(0,v.jsx)(i,{of:s}),`
`,(0,v.jsx)(n.h2,{id:`align`,children:`Align`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-items-{start|end|center|baseline|stretch}`}),` sets `,(0,v.jsx)(n.code,{children:`align-items`}),` on the container.
`,(0,v.jsx)(n.code,{children:`kd-self-*`}),` takes the same values and sets `,(0,v.jsx)(n.code,{children:`align-self`}),` on a single child.
`,(0,v.jsx)(n.code,{children:`kd-content-*`}),` sets `,(0,v.jsx)(n.code,{children:`align-content`}),` and adds `,(0,v.jsx)(n.code,{children:`between`}),`, `,(0,v.jsx)(n.code,{children:`around`}),` and `,(0,v.jsx)(n.code,{children:`evenly`}),`.`]}),`
`,(0,v.jsx)(i,{of:l}),`
`,(0,v.jsx)(n.h2,{id:`wrap`,children:`Wrap`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-flex-{wrap|nowrap|wrap-reverse}`}),`.`]}),`
`,(0,v.jsx)(i,{of:m}),`
`,(0,v.jsx)(n.h2,{id:`grow-and-shrink`,children:`Grow and shrink`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-grow-{0|1}`}),` and `,(0,v.jsx)(n.code,{children:`kd-shrink-{0|1}`}),`. Only the two values are generated; anything
finer belongs in component CSS.`]}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(n.h2,{id:`order`,children:`Order`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-order-{0-5}`}),` plus `,(0,v.jsx)(n.code,{children:`kd-order-first`}),` (`,(0,v.jsx)(n.code,{children:`-1`}),`) and `,(0,v.jsx)(n.code,{children:`kd-order-last`}),` (`,(0,v.jsx)(n.code,{children:`99`}),`).`]}),`
`,(0,v.jsx)(i,{of:f}),`
`,(0,v.jsxs)(n.blockquote,{children:[`
`,(0,v.jsx)(n.p,{children:`Reordering visually does not reorder the DOM, so keyboard and screen-reader users still
follow source order. Keep the source in the order the content should be read.`}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`center`,children:`Center`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-flex-center`}),` is the one shorthand: `,(0,v.jsx)(n.code,{children:`display: flex`}),` plus centring on both axes.`]}),`
`,(0,v.jsx)(i,{of:h}),`
`,(0,v.jsxs)(n.blockquote,{children:[`
`,(0,v.jsxs)(n.p,{children:[`It sets `,(0,v.jsx)(n.code,{children:`display`}),` itself, but the display utilities are emitted last, so they win.
`,(0,v.jsx)(n.code,{children:`class="kd-flex-center kd-d-none"`}),` hides, and `,(0,v.jsx)(n.code,{children:`kd-flex-center kd-d-md-none`}),` hides at
768px and below, so the centred and hidden pair compose the way you would expect.`]}),`
`]})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=r(),n(),o(),u()})))()}y();export{_ as default};
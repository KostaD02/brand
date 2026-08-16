import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DEtMKkjj.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./link.stories-Q5PCkVYc.js";function p(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(n.h1,{id:`link`,children:`Link`}),`
`,(0,h.jsxs)(n.p,{children:[`Links draw their own underline as a pseudo-element rather than using
`,(0,h.jsx)(n.code,{children:`text-decoration`}),`, so it can be animated. The rule sweeps in from the left on hover and
retracts to the right on leave.`]}),`
`,(0,h.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsxs)(n.p,{children:[`The reset already applies this to every `,(0,h.jsx)(n.code,{children:`<a>`}),`, so plain anchors need no class.
`,(0,h.jsx)(n.code,{children:`kd-link`}),` exists for elements that are not anchors, and for anchors inside a component
that has opted out.`]}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(n.h2,{id:`anchor`,children:`Anchor`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-link--anchor`}),` drops the underline and inherits the body colour, tinting to accent on
hover instead. It is the treatment used for heading permalinks, where a sweeping rule
would be noise.`]}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`active`,children:`Active`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-active`}),` holds the underline extended without hover, for marking the current page in
a nav.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsx)(n.h2,{id:`skip-link`,children:`Skip link`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-skip`}),` is positioned off-screen and pulls itself into the top-left corner when
focused. Put it first in the document and point it at your main landmark.`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsx)(n.p,{children:`The skip link is only reachable by keyboard. Verify it by pressing Tab as the first
action on a fresh page load. A mouse will never reveal it.`}),`
`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),s()})))()}g();export{m as default};
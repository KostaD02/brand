import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-CJWEeii2.js";import{a as s,i as c,n as l,r as u,t as d}from"./sizing.stories-B9KWWMJv.js";function f(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{of:s}),`
`,(0,m.jsx)(n.h1,{id:`sizing`,children:`Sizing`}),`
`,(0,m.jsx)(n.p,{children:`Width and height on a coarse four-step percentage scale, plus viewport units and a few
keywords. There is no fine-grained scale on purpose; anything more specific belongs in
component CSS.`}),`
`,(0,m.jsx)(n.h2,{id:`percentage`,children:`Percentage`}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:`kd-w-{0|25|50|75|100}`}),` and the same values for `,(0,m.jsx)(n.code,{children:`min-w`}),`, `,(0,m.jsx)(n.code,{children:`max-w`}),`, `,(0,m.jsx)(n.code,{children:`h`}),`, `,(0,m.jsx)(n.code,{children:`min-h`}),`, `,(0,m.jsx)(n.code,{children:`max-h`}),`.`]}),`
`,(0,m.jsx)(i,{of:u}),`
`,(0,m.jsx)(n.h2,{id:`viewport-units`,children:`Viewport units`}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:`kd-vw-*`}),`, `,(0,m.jsx)(n.code,{children:`kd-min-vw-*`}),`, `,(0,m.jsx)(n.code,{children:`kd-max-vw-*`}),` and the `,(0,m.jsx)(n.code,{children:`vh`}),` equivalents take the same values,
sized against the viewport instead of the parent.`]}),`
`,(0,m.jsx)(n.h2,{id:`keywords`,children:`Keywords`}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:`kd-w-auto`}),`, `,(0,m.jsx)(n.code,{children:`kd-w-fit`}),`, `,(0,m.jsx)(n.code,{children:`kd-w-full`}),` and their `,(0,m.jsx)(n.code,{children:`h`}),` counterparts, plus `,(0,m.jsx)(n.code,{children:`kd-h-screen`}),` and
`,(0,m.jsx)(n.code,{children:`kd-min-h-screen`}),` which use `,(0,m.jsx)(n.code,{children:`100dvh`}),` so they account for mobile browser chrome.`]}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsxs)(n.blockquote,{children:[`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:`kd-w-full`}),` and `,(0,m.jsx)(n.code,{children:`kd-w-100`}),` produce identical output. Both are kept because the two
naming idioms are each familiar to different people.`]}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`height`,children:`Height`}),`
`,(0,m.jsx)(n.p,{children:`Percentage heights resolve against the parent, so the parent needs a definite height or
they collapse.`}),`
`,(0,m.jsx)(i,{of:d})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=r(),n(),o(),c()})))()}h();export{p as default};
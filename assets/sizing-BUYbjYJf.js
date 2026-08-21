import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-CxskzV48.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./sizing.stories-ByXiD5cI.js";function p(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(n.h1,{id:`sizing`,children:`Sizing`}),`
`,(0,h.jsx)(n.p,{children:`Width and height on a coarse four-step percentage scale, plus viewport units, a few
keywords and a full-height class that allows for the fixed header. There is no
fine-grained scale on purpose; anything more specific belongs in component CSS.`}),`
`,(0,h.jsx)(n.h2,{id:`percentage`,children:`Percentage`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-w-{0|25|50|75|100}`}),` and the same values for `,(0,h.jsx)(n.code,{children:`min-w`}),`, `,(0,h.jsx)(n.code,{children:`max-w`}),`, `,(0,h.jsx)(n.code,{children:`h`}),`, `,(0,h.jsx)(n.code,{children:`min-h`}),`, `,(0,h.jsx)(n.code,{children:`max-h`}),`.`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(n.h2,{id:`viewport-units`,children:`Viewport units`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-vw-*`}),`, `,(0,h.jsx)(n.code,{children:`kd-min-vw-*`}),`, `,(0,h.jsx)(n.code,{children:`kd-max-vw-*`}),` and the `,(0,h.jsx)(n.code,{children:`vh`}),` equivalents take the same values,
sized against the viewport instead of the parent.`]}),`
`,(0,h.jsx)(n.h2,{id:`keywords`,children:`Keywords`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-w-auto`}),`, `,(0,h.jsx)(n.code,{children:`kd-w-fit`}),`, `,(0,h.jsx)(n.code,{children:`kd-w-full`}),` and their `,(0,h.jsx)(n.code,{children:`h`}),` counterparts, plus `,(0,h.jsx)(n.code,{children:`kd-h-screen`}),` and
`,(0,h.jsx)(n.code,{children:`kd-min-h-screen`}),` which use `,(0,h.jsx)(n.code,{children:`100dvh`}),` so they account for mobile browser chrome.`]}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-w-full`}),` and `,(0,h.jsx)(n.code,{children:`kd-w-100`}),` produce identical output. Both are kept because the two
naming idioms are each familiar to different people.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`height`,children:`Height`}),`
`,(0,h.jsx)(n.p,{children:`Percentage heights resolve against the parent, so the parent needs a definite height or
they collapse.`}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsx)(n.h2,{id:`viewport-height`,children:`Viewport height`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-h-viewport`}),` is `,(0,h.jsx)(n.code,{children:`100dvh`}),` less `,(0,h.jsx)(n.code,{children:`--kd-scroll-offset`}),`, which is the height of the fixed
header plus one space step. It is what a full-height landing section or a 404 page wants:
the box ends at the bottom of the window instead of starting underneath the chrome and
pushing an equal amount off the end. `,(0,h.jsx)(n.code,{children:`kd-h-screen`}),` is a flat `,(0,h.jsx)(n.code,{children:`100dvh`}),`, which is always
that offset too tall on any page with a fixed header.`]}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`Scroll the frame to the bottom. Both columns start level and `,(0,h.jsx)(n.code,{children:`kd-h-screen`}),` keeps going
past `,(0,h.jsx)(n.code,{children:`kd-h-viewport`}),` by exactly the offset.`]}),`
`]}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`A project with no fixed chrome sets `,(0,h.jsx)(n.code,{children:`--kd-navbar-height: 0px`}),` and the class collapses to
the whole window less the one remaining space step, so it is safe to use everywhere.
Set that override on `,(0,h.jsx)(n.code,{children:`:root`}),`, not on the header: `,(0,h.jsx)(n.code,{children:`--kd-scroll-offset`}),` already resolved
the navbar height where it was declared, so a value set further down the tree never
reaches it.`]}),`
`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),s()})))()}g();export{m as default};
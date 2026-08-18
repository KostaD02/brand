import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-Dk84hy45.js";import{i as s,n as c,r as l,t as u}from"./status-pill.stories-DEUnvOQQ.js";function d(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{of:s}),`
`,(0,p.jsx)(n.h1,{id:`status-pill`,children:`Status Pill`}),`
`,(0,p.jsx)(n.p,{children:`A compact label for machine state: running, failed, offline. Uppercase-adjacent
tracking and a pill radius keep it distinct from a button.`}),`
`,(0,p.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,p.jsxs)(n.p,{children:[`Five states ship: `,(0,p.jsx)(n.code,{children:`idle`}),`, `,(0,p.jsx)(n.code,{children:`active`}),`, `,(0,p.jsx)(n.code,{children:`warning`}),`, `,(0,p.jsx)(n.code,{children:`danger`}),` and `,(0,p.jsx)(n.code,{children:`offline`}),`. Each only
reassigns colour, background and border.`]}),`
`,(0,p.jsx)(i,{of:u}),`
`,(0,p.jsxs)(n.blockquote,{children:[`
`,(0,p.jsxs)(n.p,{children:[`The block is `,(0,p.jsx)(n.code,{children:`kd-status-pill`}),` but its custom properties are named `,(0,p.jsx)(n.code,{children:`--kd-pill-*`}),`. Both
names are public API and cannot be renamed without a breaking change.`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`with-a-dot`,children:`With a dot`}),`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.code,{children:`kd-status-pill__dot`}),` adds a leading dot that inherits the pill's colour through
`,(0,p.jsx)(n.code,{children:`currentcolor`}),`, so it needs no variation of its own. On the `,(0,p.jsx)(n.code,{children:`active`}),` variation the dot
pulses.`]}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsxs)(n.blockquote,{children:[`
`,(0,p.jsxs)(n.p,{children:[`The pulse is an infinite animation. It is covered by the reduced-motion guard in the
reset entry. If you load `,(0,p.jsx)(n.code,{children:`./css/components`}),` without `,(0,p.jsx)(n.code,{children:`./css/reset`}),`, add your own
`,(0,p.jsx)(n.code,{children:`prefers-reduced-motion`}),` rule.`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.code,{children:`--kd-pill-color`}),`, `,(0,p.jsx)(n.code,{children:`--kd-pill-bg`}),`, `,(0,p.jsx)(n.code,{children:`--kd-pill-border`}),` and `,(0,p.jsx)(n.code,{children:`--kd-pill-dot-size`}),` are
declared on the block. Reassign them on the element for a one-off state rather than
adding a variation.`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=r(),n(),o(),l()})))()}m();export{f as default};
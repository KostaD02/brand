import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-dp0Is1p_.js";import{a as s,i as c,n as l,r as u,t as d}from"./drawer.stories-B4j-Yxb6.js";function f(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(n.h1,{id:`drawer`,children:`Drawer`}),`
`,(0,m.jsx)(n.p,{children:`The mobile navigation overlay: a scrim covering the page and a panel slid in from the
inline end. It is two elements, and the block itself is the scrim.`}),`
`,(0,m.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,m.jsxs)(n.p,{children:[`The drawer is `,(0,m.jsx)(n.code,{children:`position: fixed`}),` with `,(0,m.jsx)(n.code,{children:`inset: 0`}),`, so in a real page it covers the viewport
and blurs whatever sits behind it. Every demo here is boxed and switched to `,(0,m.jsx)(n.code,{children:`absolute`}),` so
it stays inside the docs page.`]}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(n.h2,{id:`the-panel-is-the-menu`,children:`The panel is the menu`}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:`kd-drawer__panel`}),` is the menu `,(0,m.jsx)(n.code,{children:`<ul>`}),` itself, not a wrapper around one. That is the whole
contract, and it is what makes the drawer free: the items you already wrote for the navbar
can be cloned straight in, and `,(0,m.jsx)(n.code,{children:`kd-navbar__link`}),` and `,(0,m.jsx)(n.code,{children:`kd-btn`}),` keep styling themselves with
no drawer-specific rules.`]}),`
`,(0,m.jsx)(i,{of:u}),`
`,(0,m.jsx)(n.h2,{id:`closing`,children:`Closing`}),`
`,(0,m.jsxs)(n.p,{children:[`Opening runs two animations at once, `,(0,m.jsx)(n.code,{children:`kd-fade-in`}),` on the scrim and `,(0,m.jsx)(n.code,{children:`kd-slide-in-end`}),` on
the panel. Adding `,(0,m.jsx)(n.code,{children:`kd-drawer--closing`}),` swaps both names for their mirrors, `,(0,m.jsx)(n.code,{children:`kd-fade-out`}),`
and `,(0,m.jsx)(n.code,{children:`kd-slide-out-end`}),`, so the close is the same motion reversed rather than a second set
of rules. The demo below loops the pair so it stays on screen; in a real drawer it plays
once and holds.`]}),`
`,(0,m.jsx)(i,{of:d}),`
`,(0,m.jsxs)(n.blockquote,{children:[`
`,(0,m.jsxs)(n.p,{children:[`Both animations are `,(0,m.jsx)(n.code,{children:`forwards`}),` and neither one removes anything. Add `,(0,m.jsx)(n.code,{children:`--closing`}),`, wait
for `,(0,m.jsx)(n.code,{children:`animationend`}),`, then unmount. Unmounting on the click instead means the closing
animation is never seen.`]}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:`--kd-drawer-width`}),`, `,(0,m.jsx)(n.code,{children:`--kd-drawer-bg`}),`, `,(0,m.jsx)(n.code,{children:`--kd-drawer-scrim`}),` and `,(0,m.jsx)(n.code,{children:`--kd-drawer-blur`}),` are
declared on the block. Width takes any length, so `,(0,m.jsx)(n.code,{children:`100%`}),` gives a full-bleed sheet, and
`,(0,m.jsx)(n.code,{children:`--kd-drawer-blur: 0px`}),` leaves the scrim as a flat wash with nothing behind it softened.`]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=r(),n(),o(),s()})))()}h();export{p as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DaCLIT0Y.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./toggle.stories-CymKUsAl.js";function p(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(n.h1,{id:`toggle`,children:`Toggle`}),`
`,(0,h.jsx)(n.p,{children:`A switch for a setting that applies immediately. It is a real checkbox: the input is
visually hidden and the track next to it carries the visuals, so keyboard behaviour,
form submission and the checked state all come from the browser.`}),`
`,(0,h.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsx)(n.p,{children:`The markup order matters: the input must come immediately before the track, because the
checked and focus styles are sibling selectors.`}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(n.h2,{id:`checked`,children:`Checked`}),`
`,(0,h.jsxs)(n.p,{children:[`Set the native `,(0,h.jsx)(n.code,{children:`checked`}),` attribute. The track fills with the accent and the thumb slides
by a distance computed from the track and thumb sizes.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsx)(n.h2,{id:`disabled`,children:`Disabled`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-toggle--disabled`}),` dims the control and blocks pointer events.`]}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`The modifier does not disable the input on its own. Set the native `,(0,h.jsx)(n.code,{children:`disabled`}),`
attribute as well. Without it the hidden checkbox stays in the tab order and can
still be operated with Space.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`without-a-visible-label`,children:`Without a visible label`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-toggle__label`}),` is optional. If you omit it, put an `,(0,h.jsx)(n.code,{children:`aria-label`}),` on the wrapping
`,(0,h.jsx)(n.code,{children:`<label>`}),` so the control is still announced.`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`--kd-toggle-track-width`}),`, `,(0,h.jsx)(n.code,{children:`--kd-toggle-track-height`}),`, `,(0,h.jsx)(n.code,{children:`--kd-toggle-thumb-size`}),` and
`,(0,h.jsx)(n.code,{children:`--kd-toggle-inset`}),` drive the geometry. The travel distance is derived from them, so
changing the track width alone keeps the thumb correctly positioned at both ends.`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),s()})))()}g();export{m as default};
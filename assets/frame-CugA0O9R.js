import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-BiI4XObh.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./frame.stories-Bl6qb4GT.js";function p(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:s}),`
`,(0,h.jsx)(n.h1,{id:`frame`,children:`Frame`}),`
`,(0,h.jsx)(n.p,{children:`The portrait treatment: an accent border sitting behind the content and offset from it, with
a thin accent wash laid over the top. Both halves are pseudo-elements, so the markup is one
element wrapping one image.`}),`
`,(0,h.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`::after`}),` draws the border, drops to `,(0,h.jsx)(n.code,{children:`--kd-z-behind`}),` and pushes itself down and right by
`,(0,h.jsx)(n.code,{children:`--kd-frame-offset`}),`. `,(0,h.jsx)(n.code,{children:`::before`}),` paints `,(0,h.jsx)(n.code,{children:`--kd-frame-tint`}),` over the content. The block also
zeroes its own margin, so a bare `,(0,h.jsx)(n.code,{children:`<figure>`}),` is a valid wrapper.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`The demo uses a plain coloured block in place of a photograph. In real markup the child is
an `,(0,h.jsx)(n.code,{children:`<img>`}),`, which the component sets to `,(0,h.jsx)(n.code,{children:`display: block`}),` and rounds to match.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`hover`,children:`Hover`}),`
`,(0,h.jsxs)(n.p,{children:[`Hover the frame. Three things move together on one shared `,(0,h.jsx)(n.code,{children:`--kd-transition`}),`: the frame pops
up and left, the tint fades to nothing so the content shows in its own colours, and the
border travels out to twice its offset. `,(0,h.jsx)(n.code,{children:`:focus-visible`}),` runs the same gesture, but only
where the block sits on something focusable such as a link; a bare `,(0,h.jsx)(n.code,{children:`<figure>`}),` never takes
focus.`]}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(n.h2,{id:`fitting-the-content`,children:`Fitting the content`}),`
`,(0,h.jsxs)(n.p,{children:[`Both pseudo-elements are `,(0,h.jsx)(n.code,{children:`inset: 0`}),`, and the border is displaced with `,(0,h.jsx)(n.code,{children:`translate`}),` rather than
with `,(0,h.jsx)(n.code,{children:`top`}),` and `,(0,h.jsx)(n.code,{children:`left`}),`. The frame is therefore exactly the size of whatever it wraps, at any
width, and needs no breakpoint overrides. Hard-coded offsets are what force a component like
this to be re-declared at every breakpoint.`]}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`tint`,children:`Tint`}),`
`,(0,h.jsxs)(n.p,{children:[`The wash is the one part you will want to turn off. Set `,(0,h.jsx)(n.code,{children:`--kd-frame-tint: transparent`}),` when
the content is already brand-coloured and the tint only muddies it; the offset border and the
hover behaviour are unaffected.`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`--kd-frame-offset`}),`, `,(0,h.jsx)(n.code,{children:`--kd-frame-radius`}),` and `,(0,h.jsx)(n.code,{children:`--kd-frame-tint`}),` are declared on the block. The
offset feeds the hover distance through a `,(0,h.jsx)(n.code,{children:`calc()`}),`, so changing that one value rescales the
whole gesture.`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),u()})))()}g();export{m as default};
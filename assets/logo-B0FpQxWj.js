import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DmHNhuxI.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./logo.stories-634mm6iW.js";function p(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(n.h1,{id:`logo`,children:`Logo`}),`
`,(0,h.jsx)(n.p,{children:`The hexagonal K, drawn entirely in CSS. Five elements, no image file, and it follows
the theme because its colour is a token.`}),`
`,(0,h.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsxs)(n.p,{children:[`The mark is one letter plus three sides. Each `,(0,h.jsx)(n.code,{children:`kd-logo__side`}),` is a box as wide as the logo
that draws a bar down its left edge with `,(0,h.jsx)(n.code,{children:`::before`}),` and another down its right edge with
`,(0,h.jsx)(n.code,{children:`::after`}),`. The first side sits flat, the second is rotated 60 degrees, the third by -60, so
the six bars close into a hexagon around the initial.`]}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`The sides must be `,(0,h.jsx)(n.code,{children:`<i>`}),` and the initial must be a different tag. The rotation is selected
with `,(0,h.jsx)(n.code,{children:`:nth-of-type`}),`, so the three sides have to be the first three `,(0,h.jsx)(n.code,{children:`<i>`}),` elements in the
block. Anything else inside the logo that renders as an `,(0,h.jsx)(n.code,{children:`<i>`}),` shifts the count and a side
loses its angle.`]}),`
`]}),`
`,(0,h.jsxs)(n.p,{children:[`The initial is a letterform rather than content, so label the whole mark with `,(0,h.jsx)(n.code,{children:`role="img"`}),`
and an `,(0,h.jsx)(n.code,{children:`aria-label`}),` instead of letting a screen reader announce a stray K.`]}),`
`,(0,h.jsx)(n.h2,{id:`sizing`,children:`Sizing`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`--kd-logo-width`}),` is the only value you normally set. The height is 7/6 of it and each side
is 17/30 of it tall, which is what gives every bar its length, so the proportions hold at
any width. Bar thickness is the exception: `,(0,h.jsx)(n.code,{children:`--kd-logo-bar`}),` is a flat 4px and does not
scale, so move it with the width when you go far from the default.`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(n.h2,{id:`colour`,children:`Colour`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`--kd-logo-color`}),` paints the initial and all six bars from one declaration, and defaults to
`,(0,h.jsx)(n.code,{children:`var(--kd-accent)`}),`. Reassign it on the logo rather than reassigning the accent when only
the mark should differ.`]}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`as-a-link`,children:`As a link`}),`
`,(0,h.jsxs)(n.p,{children:[`The block already zeroes its own `,(0,h.jsx)(n.code,{children:`::after`}),`, which is the sliding underline the elements
layer adds to every bare `,(0,h.jsx)(n.code,{children:`<a>`}),`. That means the logo can be the anchor itself with nothing
to undo. Give it an `,(0,h.jsx)(n.code,{children:`aria-label`}),`; a single K is not an accessible name.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`--kd-logo-width`}),`, `,(0,h.jsx)(n.code,{children:`--kd-logo-bar`}),` and `,(0,h.jsx)(n.code,{children:`--kd-logo-color`}),` are declared on the block, so all
three can be reassigned inline for a one-off. The initial's size is not among them: it
reads `,(0,h.jsx)(n.code,{children:`--kd-font-size-lg`}),` directly, so a logo much bigger than the default wants a
`,(0,h.jsx)(n.code,{children:`font-size`}),` on `,(0,h.jsx)(n.code,{children:`kd-logo__initial`}),` too.`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),s()})))()}g();export{m as default};
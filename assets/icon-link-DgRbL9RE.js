import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-BiI4XObh.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./icon-link.stories-BYFh8WMb.js";function p(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:s}),`
`,(0,h.jsx)(n.h1,{id:`icon-link`,children:`Icon Link`}),`
`,(0,h.jsx)(n.p,{children:`An anchor whose whole content is an icon: muted at rest, accent on hover and focus. It turns
up wherever a link has no words of its own, so it is a component rather than seven declarations
copied into three files.`}),`
`,(0,h.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsxs)(n.p,{children:[`The elements layer draws a sliding underline on every bare `,(0,h.jsx)(n.code,{children:`<a>`}),`, which under an icon reads as
a stray bar. `,(0,h.jsx)(n.code,{children:`kd-icon-link`}),` sets `,(0,h.jsx)(n.code,{children:`::after { display: none }`}),` to cancel it. Since there is no
text to name the link, give the anchor an `,(0,h.jsx)(n.code,{children:`aria-label`}),` and hide the SVG with `,(0,h.jsx)(n.code,{children:`aria-hidden`}),`.`]}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`in-a-row`,children:`In a row`}),`
`,(0,h.jsxs)(n.p,{children:[`The block is `,(0,h.jsx)(n.code,{children:`inline-flex`}),` and centres its own icon, with `,(0,h.jsx)(n.code,{children:`flex-shrink: 0`}),` so it keeps its
size inside a flex parent. The padding is the hit area: grow that rather than the icon when
the target feels small on touch.`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(n.h2,{id:`currentcolor`,children:`currentColor`}),`
`,(0,h.jsxs)(n.p,{children:[`The component animates `,(0,h.jsx)(n.code,{children:`color`}),`, never `,(0,h.jsx)(n.code,{children:`fill`}),`. Your SVG has to opt in with
`,(0,h.jsx)(n.code,{children:`fill="currentColor"`}),` or `,(0,h.jsx)(n.code,{children:`stroke="currentColor"`}),`, otherwise the hover does nothing visible.
The second icon below hard-codes the dark theme's muted grey; hover both and only the first
one responds, and switching the theme leaves it stranded at the wrong colour as well.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsx)(n.p,{children:`This is the single easiest thing to get wrong here, and it fails quietly. An icon set
exported with baked-in hex colours will look right and be dead on hover.`}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`in-a-dock`,children:`In a dock`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-dock`}),` is the fixed vertical rail these links were built for: a list pinned to a page
gutter with `,(0,h.jsx)(n.code,{children:`kd-dock--start`}),` or `,(0,h.jsx)(n.code,{children:`kd-dock--end`}),`, closed off by the hairline tail its `,(0,h.jsx)(n.code,{children:`::after`}),`
draws. The icon links are the `,(0,h.jsx)(n.code,{children:`<li>`}),` contents, not an element of the dock, because the same
treatment is wanted in table cells and on cards.`]}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`The real dock is fixed to the viewport. The demo above is boxed and switched to
`,(0,h.jsx)(n.code,{children:`position: absolute`}),` so it stays inside the canvas.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`--kd-icon-link-size`}),` sets the SVG's width and height, `,(0,h.jsx)(n.code,{children:`--kd-icon-link-padding`}),` sets the ring
of space around it. Both are declared on the block, so a single dense row can shrink its
padding inline without a variation class.`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),u()})))()}g();export{m as default};
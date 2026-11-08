import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-Bnf5CnUx.js";import{i as s,n as c,r as l,t as u}from"./right-to-left.stories-C9ORs_WD.js";function d(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{of:s}),`
`,(0,p.jsx)(n.h1,{id:`right-to-left`,children:`Right-to-left`}),`
`,(0,p.jsxs)(n.p,{children:[`One attribute, `,(0,p.jsx)(n.code,{children:`dir="rtl"`}),` on `,(0,p.jsx)(n.code,{children:`<html>`}),`, and nothing else. The stylesheet is written in
logical properties, so every component mirrors on its own, and the few places CSS has no
logical form read the attribute. The Direction toolbar above sets it on this preview, so
any page in these docs can be checked mirrored.`]}),`
`,(0,p.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,p.jsxs)(n.p,{children:[`The same markup twice. The left panel carries `,(0,p.jsx)(n.code,{children:`dir="ltr"`}),` and the right one `,(0,p.jsx)(n.code,{children:`dir="rtl"`}),`
on the panel itself, so the comparison holds whatever the toolbar says.`]}),`
`,(0,p.jsx)(i,{of:c}),`
`,(0,p.jsx)(n.h2,{id:`how-it-mirrors`,children:`How it mirrors`}),`
`,(0,p.jsx)(n.p,{children:`Three mechanisms, in order of how much they cover.`}),`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.strong,{children:`Logical properties`}),` do almost all of it. Offsets are `,(0,p.jsx)(n.code,{children:`inset-inline-start`}),` and
`,(0,p.jsx)(n.code,{children:`inset-inline-end`}),`, spacing is `,(0,p.jsx)(n.code,{children:`padding-inline-start`}),` and `,(0,p.jsx)(n.code,{children:`margin-inline-start`}),`, the
accent bars are `,(0,p.jsx)(n.code,{children:`border-inline-start`}),`, rounding is `,(0,p.jsx)(n.code,{children:`border-start-start-radius`}),` and its
siblings, and text aligns to `,(0,p.jsx)(n.code,{children:`start`}),` or `,(0,p.jsx)(n.code,{children:`end`}),`. Flex and grid already follow the writing
direction, so the navbar, the tabs, the feature block and the dock need no rule of their
own.`]}),`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.strong,{children:(0,p.jsx)(n.code,{children:`--kd-direction`})}),` is `,(0,p.jsx)(n.code,{children:`1`}),` on `,(0,p.jsx)(n.code,{children:`:root`}),` and under `,(0,p.jsx)(n.code,{children:`[dir="ltr"]`}),`, and `,(0,p.jsx)(n.code,{children:`-1`}),` under
`,(0,p.jsx)(n.code,{children:`[dir="rtl"]`}),`. It multiplies the three distances CSS cannot express logically: the thumb
travel of the toggle, the slide keyframes behind `,(0,p.jsx)(n.code,{children:`kd-animate-slide-in-start`}),`,
`,(0,p.jsx)(n.code,{children:`kd-animate-slide-in-end`}),` and the drawer, and the x offset of `,(0,p.jsx)(n.code,{children:`--kd-shadow-side`}),`.`]}),`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsxs)(n.strong,{children:[(0,p.jsx)(n.code,{children:`[dir="rtl"]`}),` rules`]}),` cover what is left. The list and prose markers swap `,(0,p.jsx)(n.code,{children:`▹`}),` for `,(0,p.jsx)(n.code,{children:`◃`}),`,
the select chevron moves its `,(0,p.jsx)(n.code,{children:`background-position`}),` to the other edge, and the link
underline swaps its `,(0,p.jsx)(n.code,{children:`transform-origin`}),` so it still sweeps in from the reading start.`]}),`
`,(0,p.jsxs)(n.blockquote,{children:[`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.code,{children:`--kd-direction`}),` is a switch rather than a design token, so it is not in `,(0,p.jsx)(n.code,{children:`tokens.json`}),`.
It is there to read, though: `,(0,p.jsx)(n.code,{children:`calc(1rem * var(--kd-direction))`}),` is an inline-start
offset for a transform of your own.`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`subtrees`,children:`Subtrees`}),`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.code,{children:`dir`}),` works on any element, not only `,(0,p.jsx)(n.code,{children:`<html>`}),`. A block with `,(0,p.jsx)(n.code,{children:`dir="ltr"`}),` inside a
right-to-left page gets its own direction, its own `,(0,p.jsx)(n.code,{children:`--kd-direction`}),` and its own markers,
which is what a code sample or a postal address wants.`]}),`
`,(0,p.jsx)(i,{of:u}),`
`,(0,p.jsxs)(n.blockquote,{children:[`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.code,{children:`dir="auto"`}),` is half covered. The browser resolves it from the text and the logical
properties follow, but an attribute selector cannot see the result, so the multiplier
and the glyph swaps stay as they were. Set `,(0,p.jsx)(n.code,{children:`ltr`}),` or `,(0,p.jsx)(n.code,{children:`rtl`}),` explicitly where those matter.`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`what-stays-put`,children:`What stays put`}),`
`,(0,p.jsxs)(n.p,{children:[`Not every `,(0,p.jsx)(n.code,{children:`left`}),` became `,(0,p.jsx)(n.code,{children:`inline-start`}),`, and that is deliberate.`]}),`
`,(0,p.jsxs)(n.ul,{children:[`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`kd-burger`}),` and `,(0,p.jsx)(n.code,{children:`kd-logo`}),` are drawings. The burger is symmetric, and mirroring its
halves would only break the fold; the logo is the brand mark and is never mirrored.`]}),`
`,(0,p.jsxs)(n.li,{children:[`The pop and lift treatments, the frame offset and the `,(0,p.jsx)(n.code,{children:`sm`}),`, `,(0,p.jsx)(n.code,{children:`md`}),` and `,(0,p.jsx)(n.code,{children:`lg`}),` shadows are
depth. The light does not move with the writing direction, so the hard shadow stays
bottom right and the lift stays up and to the left.`]}),`
`,(0,p.jsxs)(n.li,{children:[(0,p.jsx)(n.code,{children:`kd-ml-*`}),`, `,(0,p.jsx)(n.code,{children:`kd-mr-*`}),`, `,(0,p.jsx)(n.code,{children:`kd-pl-*`}),`, `,(0,p.jsx)(n.code,{children:`kd-pr-*`}),`, `,(0,p.jsx)(n.code,{children:`kd-left-0`}),`, `,(0,p.jsx)(n.code,{children:`kd-right-0`}),`,
`,(0,p.jsx)(n.code,{children:`kd-border-l-*`}),` and `,(0,p.jsx)(n.code,{children:`kd-border-r-*`}),` are named after physical sides and keep them. Reach
for them when you mean a side of the box, and for the component's own spacing when you
mean an edge of the text.`]}),`
`]}),`
`,(0,p.jsx)(n.h2,{id:`checking-a-page`,children:`Checking a page`}),`
`,(0,p.jsxs)(n.p,{children:[`Flip the Direction toolbar and walk the docs; every canvas follows it. In your own page,
set the attribute from whatever decides the language, `,(0,p.jsx)(n.code,{children:`document.documentElement.dir = "rtl"`}),`, and leave the stylesheet alone. The playground below mirrors a single sample
through its `,(0,p.jsx)(n.code,{children:`direction`}),` control instead, for a quick look without touching the toolbar.`]})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=r(),n(),o(),l()})))()}m();export{f as default};
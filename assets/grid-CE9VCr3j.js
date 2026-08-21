import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-BV3mvVgi.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./grid.stories-D0BmvLuB.js";function p(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:s}),`
`,(0,h.jsx)(n.h1,{id:`grid`,children:`Grid`}),`
`,(0,h.jsxs)(n.p,{children:[`One class. `,(0,h.jsx)(n.code,{children:`kd-grid-auto`}),` is
`,(0,h.jsx)(n.code,{children:`grid-template-columns: repeat(auto-fill, minmax(var(--kd-grid-min), 1fr))`}),` plus a gap,
which covers the shape most pages actually want: as many equal columns as fit, none of
them narrower than a set minimum.`]}),`
`,(0,h.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsx)(n.p,{children:`Put it on the parent and stop. The children take no classes, and there is no column count
anywhere to keep in step with the number of items.`}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsx)(n.h2,{id:`the-minimum-is-the-responsive-story`,children:`The minimum is the responsive story`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`--kd-grid-min`}),` is the floor of a track, and it is the only number worth touching. Lower
it and more columns fit at the same width; raise it and fewer do. There are no
`,(0,h.jsx)(n.code,{children:`kd-grid-auto-md`}),` style variants because a breakpoint has nothing to say here that the
minimum does not already say.`]}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(n.h2,{id:`reflow`,children:`Reflow`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`auto-fill`}),` measures the container, not the viewport, so the same markup settles at the
right number of columns in a full width section and in a narrow aside without a media
query written anywhere. This is the whole point of the class: a consumer that used to
redeclare `,(0,h.jsx)(n.code,{children:`grid-template-columns`}),` at two or three breakpoints deletes all of them.`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`The minimum is a floor, not a preference. In a container narrower than
`,(0,h.jsx)(n.code,{children:`--kd-grid-min`}),` the single track keeps its width and overflows the parent, so set the
minimum below the narrowest place the grid appears and every width above it takes care
of itself.`]}),`
`]}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`auto-fill`}),` keeps the empty tracks it created, so three cards in a six column row stay
card width and line up with the row above. `,(0,h.jsx)(n.code,{children:`auto-fit`}),` would collapse those tracks and
stretch the three across the full width, which is rarely what a card list wants.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`gap`,children:`Gap`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`--kd-grid-gap`}),` is `,(0,h.jsx)(n.code,{children:`1rem`}),` out of the box, the same value as `,(0,h.jsx)(n.code,{children:`--kd-space-3`}),`. It takes any
length, so point it at a space token rather than a literal and the grid stays on the
scale.`]}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`--kd-grid-min`}),` (250px) and `,(0,h.jsx)(n.code,{children:`--kd-grid-gap`}),` (1rem) are both declared on the class, so
reassign either inline for a one-off, or in a project rule that targets the grid element.`]}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`Setting them on an ancestor does nothing. The class declares both on the element itself,
and a declaration on the element beats an inherited value, so the override has to land on
the same element that carries `,(0,h.jsx)(n.code,{children:`kd-grid-auto`}),`.`]}),`
`]}),`
`,(0,h.jsxs)(n.p,{children:[`For a fixed two column shape that collapses, reach for `,(0,h.jsx)(n.code,{children:`kd-split`}),` instead. For a template
you want to write out by hand, `,(0,h.jsx)(n.code,{children:`kd-d-grid`}),` and `,(0,h.jsx)(n.code,{children:`kd-gap-*`}),` give you the container without
the column rule.`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),u()})))()}g();export{m as default};
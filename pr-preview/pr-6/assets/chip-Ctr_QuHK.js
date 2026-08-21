import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-dp0Is1p_.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./chip.stories-DQ9tbVZq.js";function m(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(n.h1,{id:`chip`,children:`Chip`}),`
`,(0,g.jsx)(n.p,{children:`A neutral label for tags and stack lists. It is one element with no states: no hover, no
transition, nothing to keep in sync. A chip names something, it does not report anything.`}),`
`,(0,g.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsxs)(n.p,{children:[`The default is muted text on a hairline border over a transparent background, set two
steps below body copy at `,(0,g.jsx)(n.code,{children:`--kd-font-size-xxs`}),`. The box is `,(0,g.jsx)(n.code,{children:`inline-flex`}),` with a gap, so a
leading icon can go inside it without any extra element.`]}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(n.h2,{id:`accent`,children:`Accent`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-chip--accent`}),` repoints the colour, background and border at the accent trio in one
step. Use it for the one label in a row that should be picked out, not for the row.`]}),`
`,(0,g.jsx)(i,{of:p}),`
`,(0,g.jsx)(n.h2,{id:`pill`,children:`Pill`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-chip--pill`}),` changes the radius and nothing else, so it stacks with any other
variation. Reach for it when the chips sit next to round shapes; the default `,(0,g.jsx)(n.code,{children:`md`}),` radius
is the better match for a card grid.`]}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsx)(n.h2,{id:`bare`,children:`Bare`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-chip--bare`}),` makes the border transparent rather than removing it, so a bare chip keeps
the exact box of a bordered one and still lines up in a mixed row. This is the shape for a
stack list under a project, where one border per technology would be a wall of boxes.`]}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`chip-or-status-pill`,children:`Chip or status pill`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-status-pill`}),` is the nearest thing in the system and it is a different job. The pill
carries status semantics: a dot slot, a pulsing halo on its `,(0,g.jsx)(n.code,{children:`active`}),` variation, semibold
type a step smaller than the chip with its tracking opened up, and a closed set of state
variations. A blog tag or a technology label is a noun, not a condition, and wants none
of that.`]}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsxs)(n.p,{children:[`The chip cancels the sliding underline the elements layer puts on every bare `,(0,g.jsx)(n.code,{children:`<a>`}),`, so a
tag can link to its archive page and still read as a label. It gets no hover treatment
in exchange, so add one yourself if the link needs to feel clickable.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`--kd-chip-color`}),`, `,(0,g.jsx)(n.code,{children:`--kd-chip-bg`}),`, `,(0,g.jsx)(n.code,{children:`--kd-chip-border`}),` and `,(0,g.jsx)(n.code,{children:`--kd-chip-radius`}),` are declared
on the block, and all three variations are nothing but reassignments of them. A one-off
colour is an inline style on the element, not a new class.`]})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=r(),n(),o(),f()})))()}_();export{h as default};
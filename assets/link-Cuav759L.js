import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-HjjrTFxE.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./link.stories-Ctu2BW1u.js";function m(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:f}),`
`,(0,g.jsx)(n.h1,{id:`link`,children:`Link`}),`
`,(0,g.jsxs)(n.p,{children:[`Links draw their own underline as a pseudo-element rather than using
`,(0,g.jsx)(n.code,{children:`text-decoration`}),`, so it can be animated. The rule sweeps in from the left on hover and
retracts to the right on leave. `,(0,g.jsx)(n.code,{children:`kd-skip`}),` is here as well: an off-screen link revealed on
focus, with an inline variation for jump links inside a page.`]}),`
`,(0,g.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsxs)(n.p,{children:[`The reset already applies this to every `,(0,g.jsx)(n.code,{children:`<a>`}),`, so plain anchors need no class.
`,(0,g.jsx)(n.code,{children:`kd-link`}),` exists for elements that are not anchors, and for anchors inside a component
that has opted out.`]}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`anchor`,children:`Anchor`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-link--anchor`}),` drops the underline and inherits the body colour, tinting to accent on
hover instead. It is the treatment used for heading permalinks, where a sweeping rule
would be noise.`]}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(n.h2,{id:`active`,children:`Active`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-active`}),` holds the underline extended without hover, for marking the current page in
a nav.`]}),`
`,(0,g.jsx)(i,{of:p}),`
`,(0,g.jsx)(n.h2,{id:`skip-link`,children:`Skip link`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-skip`}),` is positioned off-screen and pulls itself into the top-left corner when
focused. Put it first in the document and point it at your main landmark.`]}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsx)(n.p,{children:`The skip link is only reachable by keyboard. Verify it by pressing Tab as the first
action on a fresh page load. A mouse will never reveal it.`}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`inline-jump-links`,children:`Inline jump links`}),`
`,(0,g.jsxs)(n.p,{children:[`The base `,(0,g.jsx)(n.code,{children:`kd-skip`}),` is built for one placement: pinned to the top left of its positioned
ancestor, which is what a page level skip link wants. `,(0,g.jsx)(n.code,{children:`--kd-skip-top`}),` is `,(0,g.jsx)(n.code,{children:`0`}),` and it is read
in both states, so the link sits at the top of that ancestor while it is hidden and stays
there once it is revealed. Reuse the same class for a jump link written between two
paragraphs of an article and that `,(0,g.jsx)(n.code,{children:`0`}),` drags the revealed link to the top of the article
instead of leaving it where the reader is.`]}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-skip--inline`}),` reassigns three of the four properties: `,(0,g.jsx)(n.code,{children:`--kd-skip-top`}),` and
`,(0,g.jsx)(n.code,{children:`--kd-skip-inline-start`}),` become `,(0,g.jsx)(n.code,{children:`auto`}),`, `,(0,g.jsx)(n.code,{children:`--kd-skip-overflow`}),` becomes `,(0,g.jsx)(n.code,{children:`visible`}),`. The hiding is
untouched, since `,(0,g.jsx)(n.code,{children:`--kd-skip-hidden-inline-start`}),` still parks the link off canvas, so it is
just as invisible until focus; it simply comes back at its static position in the flow.`]}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsxs)(n.p,{children:[`It is still `,(0,g.jsx)(n.code,{children:`position: absolute`}),`, so it reserves no space and will overlap whatever follows
it. Leave a gap after the line it interrupts, or give the link a block of its own.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`customising-the-skip-link`,children:`Customising the skip link`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`--kd-skip-top`}),`, `,(0,g.jsx)(n.code,{children:`--kd-skip-inline-start`}),`, `,(0,g.jsx)(n.code,{children:`--kd-skip-hidden-inline-start`}),` and
`,(0,g.jsx)(n.code,{children:`--kd-skip-overflow`}),` are all declared on `,(0,g.jsx)(n.code,{children:`kd-skip`}),`, so a one-off placement needs no variation
class. The two horizontal properties split the states between them: the resting link is at
`,(0,g.jsx)(n.code,{children:`--kd-skip-hidden-inline-start`}),`, the revealed one at `,(0,g.jsx)(n.code,{children:`--kd-skip-inline-start`}),`. Widen the
parking distance if `,(0,g.jsx)(n.code,{children:`-200%`}),` of the ancestor is not far enough to clear the viewport.
`,(0,g.jsx)(n.code,{children:`--kd-skip-overflow`}),` applies to the resting state only, because the reveal always sets
`,(0,g.jsx)(n.code,{children:`overflow: visible`}),` to let the label out of the 1px box.`]})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=r(),n(),o(),u()})))()}_();export{h as default};
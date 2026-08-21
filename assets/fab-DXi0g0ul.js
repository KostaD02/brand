import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DaCLIT0Y.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./fab.stories-DXpz2gHm.js";function m(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(n.h1,{id:`fab`,children:`Fab`}),`
`,(0,g.jsx)(n.p,{children:`A round icon button that floats over the page at the bottom right. Scroll back to top is
the usual job, and it is deliberately quiet: no background, no border, just the icon.`}),`
`,(0,g.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsxs)(n.p,{children:[`The real component is `,(0,g.jsx)(n.code,{children:`position: fixed`}),` against the viewport at `,(0,g.jsx)(n.code,{children:`--kd-z-toast`}),`, so the
demos on this page are boxed. Each one wraps it in a `,(0,g.jsx)(n.code,{children:`position: relative`}),` frame and
switches the button to `,(0,g.jsx)(n.code,{children:`position: absolute`}),`, which keeps `,(0,g.jsx)(n.code,{children:`--kd-fab-offset`}),` measuring from
the corner of the box instead of the corner of the window.`]}),`
`,(0,g.jsx)(i,{of:p}),`
`,(0,g.jsx)(n.h2,{id:`visibility`,children:`Visibility`}),`
`,(0,g.jsxs)(n.p,{children:[`The fab ships hidden: `,(0,g.jsx)(n.code,{children:`opacity: 0`}),` together with `,(0,g.jsx)(n.code,{children:`pointer-events: none`}),`. Adding `,(0,g.jsx)(n.code,{children:`kd-active`}),`
restores both, through the base transition, so it fades in. The pointer-events half is the
part that matters. An invisible button that still accepted clicks would sit over the bottom
right corner of every page and swallow whatever is underneath it.`]}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsxs)(n.p,{children:[`Drive it by toggling `,(0,g.jsx)(n.code,{children:`kd-active`}),` from your scroll handler rather than writing to
`,(0,g.jsx)(n.code,{children:`element.style.opacity`}),`. Setting the opacity inline reveals the button but leaves it
untouchable, since the inline style says nothing about pointer events.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`holding-an-icon`,children:`Holding an icon`}),`
`,(0,g.jsxs)(n.p,{children:[`Drop an inline `,(0,g.jsx)(n.code,{children:`<svg>`}),` straight in: the block sizes any `,(0,g.jsx)(n.code,{children:`svg`}),` inside it to 20 by 20, so the
icon needs no wrapper and no dimensions of its own. Draw it with `,(0,g.jsx)(n.code,{children:`currentColor`}),` on `,(0,g.jsx)(n.code,{children:`stroke`}),`
or `,(0,g.jsx)(n.code,{children:`fill`}),`, because the fab is `,(0,g.jsx)(n.code,{children:`--kd-text-muted`}),` at rest and `,(0,g.jsx)(n.code,{children:`--kd-accent`}),` on hover and
focus, and only `,(0,g.jsx)(n.code,{children:`currentColor`}),` follows that. The button has no text, so it needs an
`,(0,g.jsx)(n.code,{children:`aria-label`}),`.`]}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`attention-cycle`,children:`Attention cycle`}),`
`,(0,g.jsxs)(n.p,{children:[`Pair it with the `,(0,g.jsx)(n.code,{children:`kd-animate-glow`}),` utility to pull the eye once the button appears. The
keyframes run `,(0,g.jsx)(n.code,{children:`color`}),` from muted to accent and back twice, which is why the icon has to use
`,(0,g.jsx)(n.code,{children:`currentColor`}),` for this to show at all. Two things to set: the utility inherits
`,(0,g.jsx)(n.code,{children:`--kd-animate-duration`}),` from `,(0,g.jsx)(n.code,{children:`--kd-duration-base`}),`, which at 0.25s is far too quick to read
as a cycle, and it declares no iteration count, so it plays once.`]}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsxs)(n.p,{children:[`The demo above loops on purpose. On a real page prefer a single pass, or a slow one, and
remember the loop keeps animating forever otherwise. The reduced-motion guard in the reset
entry covers it; if you load `,(0,g.jsx)(n.code,{children:`./css/components`}),` without `,(0,g.jsx)(n.code,{children:`./css/reset`}),`, add your own
`,(0,g.jsx)(n.code,{children:`prefers-reduced-motion`}),` rule.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`offsets`,children:`Offsets`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`--kd-fab-offset`}),` is still the one value to reach for, but it is now a default rather than the
property the layout reads. `,(0,g.jsx)(n.code,{children:`--kd-fab-offset-inline-end`}),` feeds `,(0,g.jsx)(n.code,{children:`right`}),`,
`,(0,g.jsx)(n.code,{children:`--kd-fab-offset-block-end`}),` feeds `,(0,g.jsx)(n.code,{children:`bottom`}),`, and each of them falls back to
`,(0,g.jsx)(n.code,{children:`--kd-fab-offset`}),`. Set the shorthand on its own and both edges move together, exactly as
before.`]}),`
`,(0,g.jsx)(n.p,{children:`Set the two separately when the button has to line up with something already pinned to an
edge. A bar docked across the bottom is the usual case: the fab keeps the same gutter from the
right as the bar's own padding so the two agree on a vertical line, and takes a larger
distance from the bottom so it clears the bar.`}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsxs)(n.p,{children:[`Pin the edge that is shared and let the other one absorb the obstacle. Raising
`,(0,g.jsx)(n.code,{children:`--kd-fab-offset`}),` until the button clears the bar pushes it off the gutter as well, and the
alignment you were matching is the first thing to go.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`--kd-fab-size`}),` is declared on the block alongside the three offset properties above. Colour is
not behind a local property: it reads the text and accent tokens directly, so set `,(0,g.jsx)(n.code,{children:`color`}),` on
the element for a one-off. The radius is already `,(0,g.jsx)(n.code,{children:`--kd-radius-circle`}),`, so giving it a
`,(0,g.jsx)(n.code,{children:`background`}),` is all it takes to turn the quiet icon into a filled floating button.`]})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=r(),n(),o(),f()})))()}_();export{h as default};
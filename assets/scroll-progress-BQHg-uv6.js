import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-BUX3fBso.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./scroll-progress.stories-GYPJhPgV.js";function p(e){let n={blockquote:`blockquote`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(n.h1,{id:`scroll-progress`,children:`Scroll progress`}),`
`,(0,h.jsxs)(n.p,{children:[`A thin bar pinned across the top of the viewport that fills as the page scrolls. It is
driven entirely by CSS: `,(0,h.jsx)(n.code,{children:`animation-timeline`}),` reads the scroller directly, so there is no
scroll handler, no resize listener and no work on the main thread.`]}),`
`,(0,h.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsxs)(n.p,{children:[`The real component is `,(0,h.jsx)(n.code,{children:`position: fixed`}),` against the viewport at `,(0,h.jsx)(n.code,{children:`--kd-z-toast`}),`, so the
demos on this page are boxed. Each one wraps the bar in a `,(0,h.jsx)(n.code,{children:`position: relative`}),` frame,
switches it to `,(0,h.jsx)(n.code,{children:`position: absolute`}),`, and points `,(0,h.jsx)(n.code,{children:`--kd-scroll-progress-timeline`}),` at a
`,(0,h.jsx)(n.code,{children:`scroll-timeline-name`}),` on the inner scroller, so the bar measures that box instead of the
window.`]}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`what-it-measures`,children:`What it measures`}),`
`,(0,h.jsxs)(n.p,{children:[`Out of the box the timeline is `,(0,h.jsx)(n.code,{children:`scroll(root block)`}),`, the document scroller, and the range is
`,(0,h.jsx)(n.code,{children:`normal`}),`: empty at the top of the page, full at the very bottom. That is the right default
for a whole-page indicator and needs no markup beyond the element itself.`]}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-html`,children:`<div class="kd-scroll-progress" aria-hidden="true"></div>
`})}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`Give it `,(0,h.jsx)(n.code,{children:`aria-hidden="true"`}),`. Scroll position is already conveyed by the scrollbar and by
the act of scrolling, so announcing it adds nothing, and the element holds no text to
announce in the first place.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`tracking-one-element`,children:`Tracking one element`}),`
`,(0,h.jsxs)(n.p,{children:[`A whole-page bar reaches full only at the bottom of the footer. For a reading indicator you
usually want the article instead, which is what `,(0,h.jsx)(n.code,{children:`kd-scroll-progress--subject`}),` is for: mark
the element with `,(0,h.jsx)(n.code,{children:`kd-scroll-subject`}),` and the bar switches to that element's view timeline,
over the range where it covers the scrollport.`]}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-html`,children:`<div class="kd-scroll-progress kd-scroll-progress--subject" aria-hidden="true"></div>
<article class="kd-scroll-subject">...</article>
`})}),`
`,(0,h.jsx)(n.p,{children:`The bar sits empty until the subject's top edge reaches the top of the scrollport, fills
across it, and holds full once its bottom edge has passed.`}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`A named timeline only resolves on the element itself and its ancestors, and the bar is
almost never a descendant of what it measures. The reset entry declares
`,(0,h.jsx)(n.code,{children:`timeline-scope: --kd-scroll-subject`}),` on `,(0,h.jsx)(n.code,{children:`body`}),` so the two can find each other anywhere in
the document. The cost is that the name has to be unique: give two elements
`,(0,h.jsx)(n.code,{children:`kd-scroll-subject`}),` on one page and the timeline becomes ambiguous, which leaves the bar
collapsed rather than tracking either of them.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`browser-support`,children:`Browser support`}),`
`,(0,h.jsxs)(n.p,{children:[`Scroll-driven animations are Baseline newly available: Chrome and Edge from 115, Safari from
26, Firefox from 159. The bar is deliberately `,(0,h.jsx)(n.code,{children:`scale: 0 1`}),` at rest, so where
`,(0,h.jsx)(n.code,{children:`animation-timeline`}),` is not understood the declaration is dropped, the animation never runs,
and the element stays collapsed. Older browsers get no bar rather than a broken one, which is
why no `,(0,h.jsx)(n.code,{children:`@supports`}),` guard is needed.`]}),`
`,(0,h.jsx)(n.h2,{id:`orientation`,children:`Orientation`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-scroll-progress--vertical`}),` turns the bar into a column down the inline-start edge that
fills top to bottom. The timeline is unchanged, so the two orientations read the same
progress and the modifier composes with `,(0,h.jsx)(n.code,{children:`--subject`}),` exactly as the default does.`]}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-html`,children:`<div class="kd-scroll-progress kd-scroll-progress--vertical" aria-hidden="true"></div>
`})}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`The bar grows along the block axis in both writing directions, so only the edge it sits on
flips under `,(0,h.jsx)(n.code,{children:`dir="rtl"`}),`, never the fill. To pin it to the opposite edge instead, set
`,(0,h.jsx)(n.code,{children:`inset-inline: auto 0`}),` on the element.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`direction`,children:`Direction`}),`
`,(0,h.jsxs)(n.p,{children:[`The default bar fills from the right edge towards the left under `,(0,h.jsx)(n.code,{children:`dir="rtl"`}),`, and the
vertical one moves to the opposite edge while still filling downward. Nothing to set: switch
the Direction control in the toolbar above and the demos follow.`]}),`
`,(0,h.jsx)(n.h2,{id:`reduced-motion`,children:`Reduced motion`}),`
`,(0,h.jsxs)(n.p,{children:[`The reset entry clamps `,(0,h.jsx)(n.code,{children:`animation-duration`}),` to `,(0,h.jsx)(n.code,{children:`0.01ms`}),` for everything under
`,(0,h.jsx)(n.code,{children:`prefers-reduced-motion: reduce`}),`. That clamp is meant for time-driven animation and makes no
sense for a bar whose progress is the reader's own scrolling, so the entry restores
`,(0,h.jsx)(n.code,{children:`animation-duration: auto`}),` for this block. Chromium ignores the clamp on a scroll-driven
animation either way; the override is there so a stricter engine cannot collapse the whole
range into the first scrolled pixel.`]}),`
`,(0,h.jsx)(n.h2,{id:`alongside-a-drawer`,children:`Alongside a drawer`}),`
`,(0,h.jsxs)(n.p,{children:[`Opening `,(0,h.jsx)(n.code,{children:`kd-drawer`}),` locks the page, so the bar would otherwise sit frozen over the overlay
and read as a stray accent line. The reset entry fades it out for as long as a drawer is in
the document, through the same `,(0,h.jsx)(n.code,{children:`--kd-duration-base`}),` transition, and brings it back on close. No
JavaScript and nothing to wire up: it keys off the drawer element being present.`]}),`
`,(0,h.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,h.jsxs)(n.p,{children:[`Five properties are declared on the block. `,(0,h.jsx)(n.code,{children:`--kd-scroll-progress-thickness`}),` is the measure
across the bar, its height when horizontal and its width when vertical, and
`,(0,h.jsx)(n.code,{children:`--kd-scroll-progress-bg`}),` the fill, which defaults to `,(0,h.jsx)(n.code,{children:`--kd-accent`}),`.
`,(0,h.jsx)(n.code,{children:`--kd-scroll-progress-inset`}),` is the offset from the edge the bar is pinned to, for clearing
something already docked there.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsxs)(n.p,{children:[`The remaining two are the wiring: `,(0,h.jsx)(n.code,{children:`--kd-scroll-progress-timeline`}),` is the timeline the bar
reads and `,(0,h.jsx)(n.code,{children:`--kd-scroll-progress-range`}),` the slice of it to fill across. Setting them by hand
covers anything the `,(0,h.jsx)(n.code,{children:`--subject`}),` modifier does not, such as a specific inner scroller or a
range that stops short of the end.`]}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`Override the two together and set them `,(0,h.jsx)(n.em,{children:`after`}),` `,(0,h.jsx)(n.code,{children:`animation`}),`, never through the shorthand.
The `,(0,h.jsx)(n.code,{children:`animation`}),` shorthand resets `,(0,h.jsx)(n.code,{children:`animation-timeline`}),` and `,(0,h.jsx)(n.code,{children:`animation-range`}),` to their
initial values, so a later shorthand silently drops the timeline and the bar stops moving.`]}),`
`]}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsx)(n.p,{children:`On desktop the bar spans the layout viewport, which excludes a classic scrollbar, so it
stops a scrollbar's width short of the window edge at 100%. That gap is the scrollbar
gutter and no fixed element can paint over it. Mobile and overlay scrollbars show no gap.`}),`
`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),s()})))()}g();export{m as default};
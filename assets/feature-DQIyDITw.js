import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-BIqQ1t6K.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./feature.stories-JWAP2Cw0.js";function p(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:s}),`
`,(0,h.jsx)(n.h1,{id:`feature`,children:`Feature`}),`
`,(0,h.jsx)(n.p,{children:`The alternating project showcase: a bleed image on one side, a block of copy overlapping
it from the other. The block is a flex row with a single in-flow child, the media, and the
content is absolutely positioned on top of it, so the two halves never compete for width.`}),`
`,(0,h.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-feature__media`}),` carries the image as a `,(0,h.jsx)(n.code,{children:`background-image`}),`, which is what lets it bleed
and crop under `,(0,h.jsx)(n.code,{children:`background-size: cover`}),` instead of being sized by an `,(0,h.jsx)(n.code,{children:`<img>`}),`.
`,(0,h.jsx)(n.code,{children:`kd-feature__content`}),` is pinned to the top right of the block and overlaps the media from
the opposite side. Both the media and the title are anchors, and both switch off the
sliding underline the elements layer puts on a bare `,(0,h.jsx)(n.code,{children:`<a>`}),`.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`The demo uses a gradient in place of a photograph. Anything valid in `,(0,h.jsx)(n.code,{children:`background-image`}),`
works, `,(0,h.jsx)(n.code,{children:`url()`}),` included.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`tags`,children:`Tags`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-feature__tags`}),` is a wrapping flex row for the technologies behind the project. It is end
aligned to sit under the rest of `,(0,h.jsx)(n.code,{children:`kd-feature__content`}),`, flips to the start under
`,(0,h.jsx)(n.code,{children:`kd-feature--reverse`}),` and centres in the stacked layout, so it follows the block without
being told which way round it is. It brings its own margin, padding and `,(0,h.jsx)(n.code,{children:`list-style`}),` reset,
which means it can be a real `,(0,h.jsx)(n.code,{children:`<ul>`}),` of `,(0,h.jsx)(n.code,{children:`kd-chip--bare`}),` items and still line up.`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`A list of technologies is a list, so mark it up as one. Put `,(0,h.jsx)(n.code,{children:`kd-chip kd-chip--bare`}),` on the
`,(0,h.jsx)(n.code,{children:`<li>`}),` itself rather than wrapping a `,(0,h.jsx)(n.code,{children:`<span>`}),` in each row.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`the-scrim`,children:`The scrim`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-feature__media::before`}),` lays `,(0,h.jsx)(n.code,{children:`--kd-bg`}),` over the image at `,(0,h.jsx)(n.code,{children:`--kd-feature-scrim-opacity`}),`,
and hover or focus takes that to 0 so the image comes up to full strength. Only `,(0,h.jsx)(n.code,{children:`opacity`}),`
animates, one composited property, so the change never flashes the way swapping
`,(0,h.jsx)(n.code,{children:`background-color`}),` to `,(0,h.jsx)(n.code,{children:`transparent`}),` does.`]}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(n.h2,{id:`reverse`,children:`Reverse`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-feature--reverse`}),` sends the media to the end of the row and moves the content to the
left edge, `,(0,h.jsx)(n.code,{children:`text-align`}),` included. The markup is identical either way, so alternating a
list of projects is a matter of adding the class to every second one.`]}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`below-945px`,children:`Below 945px`}),`
`,(0,h.jsxs)(n.p,{children:[`The media drops its max width, fills the row and moves behind the content on
`,(0,h.jsx)(n.code,{children:`--kd-z-behind`}),`, and its scrim rises to 0.8 so the copy stays legible over the image. The
content resets to `,(0,h.jsx)(n.code,{children:`inset: auto`}),` and centres, tags included: it keeps its absolute
positioning and stays overlaid rather than reflowing into a second row. Narrow the browser
under 945px to watch it happen in the canvases above; the switch is a viewport media query,
not a container one.`]}),`
`,(0,h.jsxs)(n.p,{children:[`That rise to 0.8 is a reassignment of `,(0,h.jsx)(n.code,{children:`--kd-feature-scrim-opacity`}),`, not a literal
`,(0,h.jsx)(n.code,{children:`opacity`}),`, so the stacked layout honours the property the same way the wide one does and
dimming or clearing the scrim is one value at either width.`]}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`The narrow rule declares the property on `,(0,h.jsx)(n.code,{children:`kd-feature__media`}),` itself, and a declaration on
the element always beats a value inherited from an ancestor. A scrim override written on
`,(0,h.jsx)(n.code,{children:`kd-feature`}),` therefore holds above 945px only. Set it on `,(0,h.jsx)(n.code,{children:`kd-feature__media`}),` when it has
to hold everywhere.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`--kd-feature-media-width`}),`, `,(0,h.jsx)(n.code,{children:`--kd-feature-media-height`}),`, `,(0,h.jsx)(n.code,{children:`--kd-feature-content-width`}),`,
`,(0,h.jsx)(n.code,{children:`--kd-feature-content-gap`}),` and `,(0,h.jsx)(n.code,{children:`--kd-feature-scrim-opacity`}),` are declared on the block, so
one feature in a list can be retuned inline without a new class. The content gap defaults
to `,(0,h.jsx)(n.code,{children:`0.625rem`}),` and is the `,(0,h.jsx)(n.code,{children:`row-gap`}),` between the eyebrow, the title, the card and the tags,
which is the dial to reach for when a feature runs long or short. The narrow layout sets
the media's `,(0,h.jsx)(n.code,{children:`max-width`}),` directly, so a custom `,(0,h.jsx)(n.code,{children:`--kd-feature-media-width`}),` applies to the wide
layout only.`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),u()})))()}g();export{m as default};
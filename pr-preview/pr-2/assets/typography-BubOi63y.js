import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-CPu2vQms.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./typography.stories-Cx5vn95I.js";function h(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:c}),`
`,(0,_.jsx)(n.h1,{id:`typography`,children:`Typography`}),`
`,(0,_.jsxs)(n.p,{children:[`Element-level type defaults. These apply to bare tags, so they need no classes. They ship
in the `,(0,_.jsx)(n.code,{children:`elements`}),` layer, separately from the reset.`]}),`
`,(0,_.jsx)(n.h2,{id:`headings`,children:`Headings`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`h1`}),` through `,(0,_.jsx)(n.code,{children:`h6`}),` use the primary family at semibold with a tight line height. Sizes are
fluid: `,(0,_.jsx)(n.code,{children:`h1`}),` and `,(0,_.jsx)(n.code,{children:`h2`}),` each have their own `,(0,_.jsx)(n.code,{children:`clamp()`}),`, and `,(0,_.jsx)(n.code,{children:`h3`}),` through `,(0,_.jsx)(n.code,{children:`h6`}),` share one.`]}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[`Heading sizes come from `,(0,_.jsx)(n.code,{children:`--kd-font-size-fluid-*`}),`, not the static scale, so they respond
to viewport width without a media query. Reach for `,(0,_.jsx)(n.code,{children:`kd-fs-*`}),` only when you need a fixed
size.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`paragraphs-and-small-text`,children:`Paragraphs and small text`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`p`}),` has no margin at all, which is deliberate: spacing is owned by the layout, not the
element. `,(0,_.jsx)(n.code,{children:`small`}),` and `,(0,_.jsx)(n.code,{children:`kd-small`}),` drop to the muted colour.`]}),`
`,(0,_.jsx)(i,{of:s}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[`Because `,(0,_.jsx)(n.code,{children:`p`}),` has no margin, a run of paragraphs collapses into a solid block. Use
`,(0,_.jsx)(n.code,{children:`kd-mb-*`}),` or a flex column with `,(0,_.jsx)(n.code,{children:`kd-gap-*`}),` for rhythm.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`section-heading`,children:`Section heading`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-heading`}),` is the page-section treatment: a fluid heading followed by a rule that fills
the remaining width, capped at 300px.`]}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[`Two things to know. The rule uses `,(0,_.jsx)(n.code,{children:`--kd-bg-elevated`}),`, a surface token rather than a line
token, so its contrast against the page is around 1.1:1 and it reads as very faint by
design. And the heading is `,(0,_.jsx)(n.code,{children:`white-space: nowrap`}),` with no overflow guard, so long text
pushes past narrow viewports rather than wrapping.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`monospace`,children:`Monospace`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-mono`}),` switches to the mono family and enables tabular figures, so columns of numbers
align.`]}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(n.h2,{id:`list`,children:`List`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-list`}),` replaces the marker with an accent triangle. It is element-qualified as
`,(0,_.jsx)(n.code,{children:`ul.kd-list`}),`, so it applies to unordered lists only.`]}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[`An `,(0,_.jsx)(n.code,{children:`<ol class="kd-list">`}),` gets nothing, because the selector requires `,(0,_.jsx)(n.code,{children:`ul`}),`. Use a `,(0,_.jsx)(n.code,{children:`ul`}),`
or style the ordered list yourself.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`header-anchor`,children:`Header anchor`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-header-anchor`}),` is for permalinks on headings. It inherits the heading colour, drops
the sweeping underline that every other anchor gets, and tints to accent on hover.`]}),`
`,(0,_.jsx)(i,{of:m})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=r(),n(),o(),p()})))()}v();export{g as default};
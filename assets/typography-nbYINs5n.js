import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-CxskzV48.js";import{a as s,c,d as l,f as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./typography.stories-j3KYs2ld.js";function y(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a,{of:u}),`
`,(0,x.jsx)(n.h1,{id:`typography`,children:`Typography`}),`
`,(0,x.jsxs)(n.p,{children:[`Element-level type defaults. Headings, paragraphs and small text apply to bare tags and
need no classes; the section heading, mono, list and header anchor are opt-in classes.
They ship in the `,(0,x.jsx)(n.code,{children:`elements`}),` layer, separately from the reset.`]}),`
`,(0,x.jsx)(n.h2,{id:`headings`,children:`Headings`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`h1`}),` through `,(0,x.jsx)(n.code,{children:`h6`}),` use the primary family at semibold with a tight line height. Sizes are
fluid: `,(0,x.jsx)(n.code,{children:`h1`}),` and `,(0,x.jsx)(n.code,{children:`h2`}),` each have their own `,(0,x.jsx)(n.code,{children:`clamp()`}),`, and `,(0,x.jsx)(n.code,{children:`h3`}),` through `,(0,x.jsx)(n.code,{children:`h6`}),` share one.`]}),`
`,(0,x.jsx)(i,{of:p}),`
`,(0,x.jsxs)(n.blockquote,{children:[`
`,(0,x.jsxs)(n.p,{children:[`Heading sizes come from `,(0,x.jsx)(n.code,{children:`--kd-font-size-fluid-*`}),`, not the static scale, so they respond
to viewport width without a media query. Reach for `,(0,x.jsx)(n.code,{children:`kd-fs-*`}),` only when you need a fixed
size.`]}),`
`]}),`
`,(0,x.jsx)(n.h2,{id:`paragraphs-and-small-text`,children:`Paragraphs and small text`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`p`}),` has no margin at all, which is deliberate: spacing is owned by the layout, not the
element. `,(0,x.jsx)(n.code,{children:`small`}),` and `,(0,x.jsx)(n.code,{children:`kd-small`}),` drop to the muted colour.`]}),`
`,(0,x.jsx)(i,{of:g}),`
`,(0,x.jsxs)(n.blockquote,{children:[`
`,(0,x.jsxs)(n.p,{children:[`Because `,(0,x.jsx)(n.code,{children:`p`}),` has no margin, a run of paragraphs collapses into a solid block. Use
`,(0,x.jsx)(n.code,{children:`kd-mb-*`}),` or a flex column with `,(0,x.jsx)(n.code,{children:`kd-gap-*`}),` for rhythm.`]}),`
`]}),`
`,(0,x.jsx)(n.h2,{id:`section-heading`,children:`Section heading`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`kd-heading`}),` is the page-section treatment: a fluid heading followed by a rule that fills
the remaining width, capped at 300px.`]}),`
`,(0,x.jsx)(i,{of:c}),`
`,(0,x.jsxs)(n.blockquote,{children:[`
`,(0,x.jsxs)(n.p,{children:[`Two things to know. The rule uses `,(0,x.jsx)(n.code,{children:`--kd-bg-elevated`}),`, a surface token rather than a line
token, so its contrast against the page is around 1.1:1 and it reads as very faint by
design. And the heading is `,(0,x.jsx)(n.code,{children:`white-space: nowrap`}),` with no overflow guard, so long text
pushes past narrow viewports rather than wrapping; `,(0,x.jsx)(n.code,{children:`kd-heading--wrap`}),` is the release
valve for that.`]}),`
`]}),`
`,(0,x.jsx)(n.h2,{id:`section-heading-variations`,children:`Section heading variations`}),`
`,(0,x.jsxs)(n.p,{children:[`Three modifiers, each for a different problem. `,(0,x.jsx)(n.code,{children:`kd-heading--bare`}),` hides the `,(0,x.jsx)(n.code,{children:`::after`}),` rule,
which is what you want for a centred section title where a rule hanging off one side would
look lopsided. `,(0,x.jsx)(n.code,{children:`kd-heading--center`}),` handles the centring itself, since the block is a flex
row. `,(0,x.jsx)(n.code,{children:`kd-heading--wrap`}),` swaps the default `,(0,x.jsx)(n.code,{children:`nowrap`}),` for `,(0,x.jsx)(n.code,{children:`normal`}),`, so a long title breaks
onto a second line instead of running off a narrow viewport.`]}),`
`,(0,x.jsx)(i,{of:v}),`
`,(0,x.jsxs)(n.blockquote,{children:[`
`,(0,x.jsxs)(n.p,{children:[`The third heading in that canvas is the unmodified default at the same width, so you can
see what `,(0,x.jsx)(n.code,{children:`kd-heading--wrap`}),` is fixing.`]}),`
`]}),`
`,(0,x.jsx)(n.h2,{id:`sizing-the-section-heading`,children:`Sizing the section heading`}),`
`,(0,x.jsxs)(n.p,{children:[`Five custom properties are declared on the block: `,(0,x.jsx)(n.code,{children:`--kd-heading-font-size`}),`,
`,(0,x.jsx)(n.code,{children:`--kd-heading-margin`}),`, `,(0,x.jsx)(n.code,{children:`--kd-heading-rule-width`}),`, `,(0,x.jsx)(n.code,{children:`--kd-heading-rule-gap`}),` and
`,(0,x.jsx)(n.code,{children:`--kd-heading-rule-color`}),`. Reassign them inline for a one-off.`]}),`
`,(0,x.jsx)(i,{of:f}),`
`,(0,x.jsxs)(n.blockquote,{children:[`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`--kd-heading-font-size`}),` exists so a single instance can shrink without a literal
`,(0,x.jsx)(n.code,{children:`font-size`}),` in the style attribute. A literal wins outright and leaves the heading
disconnected from the fluid token; the custom property keeps it inside the system, so
the rest of the block still behaves.`]}),`
`]}),`
`,(0,x.jsx)(n.h2,{id:`monospace`,children:`Monospace`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`kd-mono`}),` switches to the mono family and enables tabular figures, so columns of numbers
align.`]}),`
`,(0,x.jsx)(i,{of:m}),`
`,(0,x.jsx)(n.h2,{id:`list`,children:`List`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`kd-list`}),` replaces the marker with an accent triangle. It is element-qualified as
`,(0,x.jsx)(n.code,{children:`ul.kd-list`}),`, so it applies to unordered lists only.`]}),`
`,(0,x.jsx)(i,{of:h}),`
`,(0,x.jsxs)(n.blockquote,{children:[`
`,(0,x.jsxs)(n.p,{children:[`An `,(0,x.jsx)(n.code,{children:`<ol class="kd-list">`}),` gets nothing, because the selector requires `,(0,x.jsx)(n.code,{children:`ul`}),`. Use a `,(0,x.jsx)(n.code,{children:`ul`}),`
or style the ordered list yourself.`]}),`
`]}),`
`,(0,x.jsx)(n.h2,{id:`list-columns`,children:`List columns`}),`
`,(0,x.jsxs)(n.p,{children:[`The list is a grid, and `,(0,x.jsx)(n.code,{children:`--kd-list-columns`}),` is its `,(0,x.jsx)(n.code,{children:`grid-template-columns`}),`. It defaults to
`,(0,x.jsx)(n.code,{children:`1fr`}),`, so a plain `,(0,x.jsx)(n.code,{children:`kd-list`}),` is a single column. Set it to `,(0,x.jsx)(n.code,{children:`repeat(2, minmax(100px, 200px))`}),`
for the two column skills list: each column is at least 100px and stops growing at 200px,
which keeps short entries from stretching into a sparse row. `,(0,x.jsx)(n.code,{children:`--kd-list-gap-x`}),` sets the gap
between those columns and defaults to `,(0,x.jsx)(n.code,{children:`0.625rem`}),`.`]}),`
`,(0,x.jsx)(i,{of:d}),`
`,(0,x.jsxs)(n.blockquote,{children:[`
`,(0,x.jsxs)(n.p,{children:[`Both properties are new. Earlier the list declared `,(0,x.jsx)(n.code,{children:`display: grid`}),` and a column gap but
never emitted `,(0,x.jsx)(n.code,{children:`grid-template-columns`}),`, so it could only ever render one column and the
column gap had nothing to sit between. Any markup written against the old behaviour is
unaffected, because the default is still one column.`]}),`
`]}),`
`,(0,x.jsx)(n.h2,{id:`plain-list`,children:`Plain list`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`kd-list-plain`}),` is the reset, not a style: margin `,(0,x.jsx)(n.code,{children:`0`}),`, padding `,(0,x.jsx)(n.code,{children:`0`}),`, `,(0,x.jsx)(n.code,{children:`list-style: none`}),`, and
nothing else. Reach for it when the list is a layout row rather than prose, a tag row or a
nav, and compose the layout from utilities.`]}),`
`,(0,x.jsx)(i,{of:s}),`
`,(0,x.jsxs)(n.blockquote,{children:[`
`,(0,x.jsxs)(n.p,{children:[`It sits in the `,(0,x.jsx)(n.code,{children:`elements`}),` layer rather than the `,(0,x.jsx)(n.code,{children:`utilities`}),` layer on purpose. Both are
single-class selectors, so the tie is broken by source order, and utilities come last.
That means `,(0,x.jsx)(n.code,{children:`kd-m-*`}),`, `,(0,x.jsx)(n.code,{children:`kd-mt-*`}),` and `,(0,x.jsx)(n.code,{children:`kd-p-*`}),` still beat the reset's zeroes, as the second
row above does with `,(0,x.jsx)(n.code,{children:`kd-mt-4`}),`. Move it into `,(0,x.jsx)(n.code,{children:`utilities`}),` and whether a margin applies would
depend on which partial happened to be emitted last.`]}),`
`]}),`
`,(0,x.jsx)(n.h2,{id:`header-anchor`,children:`Header anchor`}),`
`,(0,x.jsxs)(n.p,{children:[(0,x.jsx)(n.code,{children:`kd-header-anchor`}),` is for permalinks on headings. It inherits the heading colour, drops
the sweeping underline that every other anchor gets, and tints to accent on hover.`]}),`
`,(0,x.jsx)(i,{of:_})]})}function b(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,x.jsx)(n,{...e,children:(0,x.jsx)(y,{...e})}):y(e)}var x;function S(){return(S=e((()=>{x=r(),n(),o(),l()})))()}S();export{b as default};
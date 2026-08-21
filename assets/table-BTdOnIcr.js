import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-HjjrTFxE.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./table.stories-DE52H9fa.js";function g(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:u}),`
`,(0,v.jsx)(n.h1,{id:`table`,children:`Table`}),`
`,(0,v.jsxs)(n.p,{children:[`Bare `,(0,v.jsx)(n.code,{children:`table`}),` is styled, so a data table needs no classes. Cells get padding and a bottom
rule, and the header row is uppercase and muted on an elevated background. Every row
keeps its bottom rule, so the table closes on a line.`]}),`
`,(0,v.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(n.h2,{id:`caption`,children:`Caption`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`caption`}),` is muted, one size down, left aligned and sits above the table.`]}),`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsx)(n.h2,{id:`scrolling`,children:`Scrolling`}),`
`,(0,v.jsxs)(n.p,{children:[`Tables are `,(0,v.jsx)(n.code,{children:`width: 100%`}),` and will squash rather than overflow. Wrap one in
`,(0,v.jsx)(n.code,{children:`kd-table-scroll`}),` and give the table a `,(0,v.jsx)(n.code,{children:`min-width`}),` to get horizontal scrolling instead.`]}),`
`,(0,v.jsx)(i,{of:f}),`
`,(0,v.jsx)(n.h2,{id:`sticky-header`,children:`Sticky header`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-sticky-head`}),` pins the header row while the body scrolls. It is element-qualified as
`,(0,v.jsx)(n.code,{children:`table.kd-sticky-head`}),`, so put it on the table itself, not the wrapper.`]}),`
`,(0,v.jsx)(i,{of:m}),`
`,(0,v.jsxs)(n.blockquote,{children:[`
`,(0,v.jsx)(n.p,{children:`Sticky positioning needs a scroll container with a bounded height. The class alone does
nothing if the page is what scrolls.`}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`fixed-layout`,children:`Fixed layout`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-fixed`}),` sets `,(0,v.jsx)(n.code,{children:`table-layout: fixed`}),`, so columns divide the width evenly instead of
sizing to content. Also element-qualified.`]}),`
`,(0,v.jsx)(n.h2,{id:`plain`,children:`Plain`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-plain`}),` turns the data table into a listing: the head loses its uppercase tracking and
its background, and the row rules go. It gets there by re-pointing
`,(0,v.jsx)(n.code,{children:`--kd-table-head-bg`}),`, `,(0,v.jsx)(n.code,{children:`--kd-table-head-color`}),` and `,(0,v.jsx)(n.code,{children:`--kd-table-border-color`}),` rather than
unsetting declarations, so the rules are still in the box model and the rows keep their
rhythm; only the lines are invisible.`]}),`
`,(0,v.jsx)(i,{of:l}),`
`,(0,v.jsx)(n.h2,{id:`row-hover`,children:`Row hover`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-rows`}),` lifts each `,(0,v.jsx)(n.code,{children:`tbody`}),` row to `,(0,v.jsx)(n.code,{children:`--kd-bg-elevated`}),` on hover, through the shared
transition. Use it when the rows are targets, not when the table is a static readout.`]}),`
`,(0,v.jsx)(i,{of:s}),`
`,(0,v.jsx)(n.h2,{id:`archive-listing`,children:`Archive listing`}),`
`,(0,v.jsxs)(n.p,{children:[`The two go together: an archive wants the borderless treatment and the hover, so it takes
both classes. The link column is a `,(0,v.jsx)(n.code,{children:`kd-icon-link`}),`, which sits at the muted text colour,
drops the underline every other link carries, and turns accent on its own hover and focus.`]}),`
`,(0,v.jsx)(i,{of:h}),`
`,(0,v.jsxs)(n.blockquote,{children:[`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-plain`}),` and `,(0,v.jsx)(n.code,{children:`kd-rows`}),` are element-qualified like `,(0,v.jsx)(n.code,{children:`kd-fixed`}),` and `,(0,v.jsx)(n.code,{children:`kd-sticky-head`}),`.
On anything that is not a `,(0,v.jsx)(n.code,{children:`table`}),` they do nothing at all, so they are safe names to
carry on a wrapper by mistake but useless there.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`--kd-table-padding-y`}),`, `,(0,v.jsx)(n.code,{children:`--kd-table-padding-x`}),`, `,(0,v.jsx)(n.code,{children:`--kd-table-border-color`}),`,
`,(0,v.jsx)(n.code,{children:`--kd-table-head-bg`}),` and `,(0,v.jsx)(n.code,{children:`--kd-table-head-color`}),` are declared on `,(0,v.jsx)(n.code,{children:`table`}),`, so a denser or
recoloured table is a matter of reassigning them on that element. `,(0,v.jsx)(n.code,{children:`kd-plain`}),` is the
built-in shortcut for three of those five.`]})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=r(),n(),o(),c()})))()}y();export{_ as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-dp0Is1p_.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./teaser.stories-CTz5x2Ro.js";function m(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:f}),`
`,(0,g.jsx)(n.h1,{id:`teaser`,children:`Teaser`}),`
`,(0,g.jsx)(n.p,{children:`A one line summary of an article: an accent rail, a linked heading, a description, its
tags and its date. It is the blog index row, and it holds up anywhere a page lists recent
writing.`}),`
`,(0,g.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsxs)(n.p,{children:[`The block is a grid, so its elements stack in source order on a 4px row gap. All four are
optional; a title and a date is still a teaser. The title is an anchor wrapping the
heading, which makes the whole line the target, and `,(0,g.jsx)(n.code,{children:`kd-link`}),` on that same anchor supplies
the sliding underline.`]}),`
`,(0,g.jsx)(i,{of:p}),`
`,(0,g.jsx)(n.h2,{id:`the-rail`,children:`The rail`}),`
`,(0,g.jsxs)(n.p,{children:[`The bar down the left is the shared `,(0,g.jsx)(n.code,{children:`rail`}),` mixin, the same 13px accent edge the prose
layer draws on a `,(0,g.jsx)(n.code,{children:`<pre>`}),`. It is a `,(0,g.jsx)(n.code,{children:`::before`}),` at `,(0,g.jsx)(n.code,{children:`height: 100%`}),`, so it tracks the teaser
however tall the text grows. For the same bar on something that is not a teaser, reach for
the `,(0,g.jsx)(n.code,{children:`kd-rail`}),` utility.`]}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(n.h2,{id:`tags`,children:`Tags`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-teaser__tags`}),` is a wrapping flex row; put `,(0,g.jsx)(n.code,{children:`kd-chip`}),` elements straight into it. It sets
its own vertical margin rather than riding the grid's row gap, so the tag row reads as a
band of its own between the text and the date.`]}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsx)(n.h2,{id:`date`,children:`Date`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-teaser__meta`}),` is muted and one step down in size. Put it on a `,(0,g.jsx)(n.code,{children:`<time>`}),` with a machine
readable `,(0,g.jsx)(n.code,{children:`datetime`}),`, then write the visible text in whatever format the page reads best.`]}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`a-list-of-them`,children:`A list of them`}),`
`,(0,g.jsx)(n.p,{children:`Stack teasers in a grid and the rails line up down the page. The list itself needs nothing
but a gap.`}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,g.jsxs)(n.p,{children:[`The teaser declares no local custom properties: everything it uses comes straight from the
token layer. The rail takes its colour from `,(0,g.jsx)(n.code,{children:`--kd-accent`}),`, the description from
`,(0,g.jsx)(n.code,{children:`--kd-text-bright`}),` and the date from `,(0,g.jsx)(n.code,{children:`--kd-text-muted`}),`, so reassigning any of those on the
block or on an ancestor restyles it. The 13px rail width is an argument to the Sass mixin,
not a runtime property, so it is fixed once the CSS is built.`]})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=r(),n(),o(),u()})))()}_();export{h as default};
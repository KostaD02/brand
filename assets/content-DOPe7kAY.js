import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-HjjrTFxE.js";import{a as s,c,d as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./content.stories-Drys1UMu.js";function v(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a,{of:_}),`
`,(0,b.jsx)(n.h1,{id:`content`,children:`Content`}),`
`,(0,b.jsxs)(n.p,{children:[`Element defaults for written content: quotes, rules, figures and code. Like typography
these apply to bare tags and ship in the `,(0,b.jsx)(n.code,{children:`elements`}),` layer. The `,(0,b.jsx)(n.code,{children:`kd-prose`}),` class at the
bottom of this page is the opt-in wrapper for a full article.`]}),`
`,(0,b.jsx)(n.h2,{id:`blockquote`,children:`Blockquote`}),`
`,(0,b.jsx)(n.p,{children:`An accent left border with the corners rounded on the closing side only.`}),`
`,(0,b.jsx)(i,{of:g}),`
`,(0,b.jsx)(n.h2,{id:`rule`,children:`Rule`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`hr`}),` is drawn as a top border rather than a height, so it stays exactly one border width
regardless of zoom.`]}),`
`,(0,b.jsx)(i,{of:d}),`
`,(0,b.jsx)(n.h2,{id:`inline-code`,children:`Inline code`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`code`}),` uses the mono family with the code foreground colour on an elevated background.
Both are theme roles, so it recolours in light mode.`]}),`
`,(0,b.jsx)(i,{of:u}),`
`,(0,b.jsx)(n.h2,{id:`code-block`,children:`Code block`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`pre`}),` carries the code background and an accent bar down the left edge, drawn as a
pseudo-element. A `,(0,b.jsx)(n.code,{children:`code`}),` inside a `,(0,b.jsx)(n.code,{children:`pre`}),` drops the inline padding and background so the
two do not double up.`]}),`
`,(0,b.jsx)(i,{of:f}),`
`,(0,b.jsxs)(n.blockquote,{children:[`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`pre`}),` scrolls horizontally rather than wrapping. Give it a bounded width, or it will
stretch its container.`]}),`
`]}),`
`,(0,b.jsx)(n.h2,{id:`figure`,children:`Figure`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`figure`}),` gets vertical margin and `,(0,b.jsx)(n.code,{children:`figcaption`}),` is muted and one size down.`]}),`
`,(0,b.jsx)(i,{of:m}),`
`,(0,b.jsx)(n.h2,{id:`the-prose-class`,children:`The prose class`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`kd-prose`}),` is for a written page rather than an application screen. It raises `,(0,b.jsx)(n.code,{children:`p`}),` and
`,(0,b.jsx)(n.code,{children:`li`}),` to the medium size, steps the headings down so `,(0,b.jsx)(n.code,{children:`h1`}),` inside an article does not
compete with the page title, and constrains images.`]}),`
`,(0,b.jsx)(i,{of:s}),`
`,(0,b.jsxs)(n.blockquote,{children:[`
`,(0,b.jsxs)(n.p,{children:[`Outside `,(0,b.jsx)(n.code,{children:`kd-prose`}),` paragraphs still have no margin of their own. An application screen
sets its own rhythm with a flex column and `,(0,b.jsx)(n.code,{children:`kd-gap-*`}),`, or the paragraphs run together.`]}),`
`]}),`
`,(0,b.jsxs)(n.p,{children:[`Pair it with `,(0,b.jsx)(n.code,{children:`kd-measure-*`}),` from `,(0,b.jsx)(n.a,{href:`?path=/docs/layout-container--docs`,children:`Container`}),` to cap
the line length.`]}),`
`,(0,b.jsx)(n.h2,{id:`vertical-rhythm`,children:`Vertical rhythm`}),`
`,(0,b.jsxs)(n.p,{children:[`The reset sets `,(0,b.jsx)(n.code,{children:`p { margin: 0 }`}),` because spacing a page is the container's job, and for a
written page `,(0,b.jsx)(n.code,{children:`kd-prose`}),` is that container. It gives `,(0,b.jsx)(n.code,{children:`p`}),` and `,(0,b.jsx)(n.code,{children:`ol`}),` a bottom margin of one
space step, so a multi paragraph article reads correctly with no wrapper doing the
spacing.`]}),`
`,(0,b.jsx)(i,{of:c}),`
`,(0,b.jsx)(n.h2,{id:`lists-in-prose`,children:`Lists in prose`}),`
`,(0,b.jsxs)(n.p,{children:[`A `,(0,b.jsx)(n.code,{children:`ul`}),` that never passed through an author, the kind a markdown pipeline emits, picks up
the same accent triangle as `,(0,b.jsx)(n.code,{children:`ul.kd-list`}),` through `,(0,b.jsx)(n.code,{children:`::marker`}),`. The rule is written as
`,(0,b.jsx)(n.code,{children:`ul:not(.kd-list)`}),` on purpose: `,(0,b.jsx)(n.code,{children:`kd-list`}),` draws its marker with a pseudo-element, so
without the guard an authored list would carry both at once and every item would show two
markers.`]}),`
`,(0,b.jsx)(i,{of:p}),`
`,(0,b.jsx)(n.h2,{id:`overflow`,children:`Overflow`}),`
`,(0,b.jsxs)(n.p,{children:[`Grid and flex items default to `,(0,b.jsx)(n.code,{children:`min-width: auto`}),`, which means their minimum size is the
width of their content, so one long line in a `,(0,b.jsx)(n.code,{children:`pre`}),` widens the track and pushes the
layout out sideways. `,(0,b.jsx)(n.code,{children:`kd-prose`}),` sets `,(0,b.jsx)(n.code,{children:`min-width: 0`}),` on itself and caps `,(0,b.jsx)(n.code,{children:`pre`}),` and
`,(0,b.jsx)(n.code,{children:`kd-table-scroll`}),` at `,(0,b.jsx)(n.code,{children:`100%`}),`, which holds the code block inside its column and lets it
scroll on its own.`]}),`
`,(0,b.jsx)(i,{of:h}),`
`,(0,b.jsxs)(n.blockquote,{children:[`
`,(0,b.jsxs)(n.p,{children:[`This is a container-level fix, so it works at any width. A viewport-relative
`,(0,b.jsx)(n.code,{children:`max-width`}),` on `,(0,b.jsx)(n.code,{children:`pre`}),` looks correct on the page it was measured against and nowhere
else.`]}),`
`]})]})}function y(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,b.jsx)(n,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=r(),n(),o(),l()})))()}x();export{y as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-CPu2vQms.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./content.stories-CfirkFEg.js";function h(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:p}),`
`,(0,_.jsx)(n.h1,{id:`content`,children:`Content`}),`
`,(0,_.jsxs)(n.p,{children:[`Element defaults for written content: quotes, rules, figures and code. Like typography
these apply to bare tags and ship in the `,(0,_.jsx)(n.code,{children:`elements`}),` layer. The `,(0,_.jsx)(n.code,{children:`kd-prose`}),` class at the
bottom of this page is the opt-in wrapper for a full article.`]}),`
`,(0,_.jsx)(n.h2,{id:`blockquote`,children:`Blockquote`}),`
`,(0,_.jsx)(n.p,{children:`An accent left border with the corners rounded on the closing side only.`}),`
`,(0,_.jsx)(i,{of:m}),`
`,(0,_.jsx)(n.h2,{id:`rule`,children:`Rule`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`hr`}),` is drawn as a top border rather than a height, so it stays exactly one border width
regardless of zoom.`]}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(n.h2,{id:`inline-code`,children:`Inline code`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`code`}),` uses the mono family with the code foreground colour on an elevated background.
Both are theme roles, so it recolours in light mode.`]}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(n.h2,{id:`code-block`,children:`Code block`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`pre`}),` carries the code background and an accent bar down the left edge, drawn as a
pseudo-element. A `,(0,_.jsx)(n.code,{children:`code`}),` inside a `,(0,_.jsx)(n.code,{children:`pre`}),` drops the inline padding and background so the
two do not double up.`]}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`pre`}),` scrolls horizontally rather than wrapping. Give it a bounded width, or it will
stretch its container.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`figure`,children:`Figure`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`figure`}),` gets vertical margin and `,(0,_.jsx)(n.code,{children:`figcaption`}),` is muted and one size down.`]}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(n.h2,{id:`the-prose-class`,children:`The prose class`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-prose`}),` is for a written page rather than an application screen. It raises `,(0,_.jsx)(n.code,{children:`p`}),` and
`,(0,_.jsx)(n.code,{children:`li`}),` to the medium size, steps the headings down so `,(0,_.jsx)(n.code,{children:`h1`}),` inside an article does not
compete with the page title, and constrains images.`]}),`
`,(0,_.jsx)(i,{of:s}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-prose`}),` sets sizes only, not rhythm. Paragraphs still have no margin, so pair it
with a flex column and `,(0,_.jsx)(n.code,{children:`kd-gap-*`}),`, or add your own margin, or the paragraphs will run
together. Plain `,(0,_.jsx)(n.code,{children:`ul`}),` and `,(0,_.jsx)(n.code,{children:`ol`}),` are also unstyled here, so they keep browser defaults
unless you add `,(0,_.jsx)(n.code,{children:`kd-list`}),`.`]}),`
`]}),`
`,(0,_.jsxs)(n.p,{children:[`Pair it with `,(0,_.jsx)(n.code,{children:`kd-measure-*`}),` from `,(0,_.jsx)(n.a,{href:`?path=/docs/layout-container--docs`,children:`Container`}),` to cap
the line length.`]})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=r(),n(),o(),c()})))()}v();export{g as default};
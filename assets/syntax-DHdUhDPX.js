import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DaCLIT0Y.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./syntax.stories-B11lk5aN.js";function p(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(n.h1,{id:`syntax`,children:`Syntax`}),`
`,(0,h.jsxs)(n.p,{children:[`The colour theme for highlighted code. It highlights nothing itself: run highlight.js, or
anything else that emits the same `,(0,h.jsx)(n.code,{children:`hljs-*`}),` class names, and this layer paints the result.
Every `,(0,h.jsx)(n.code,{children:`hljs-*`}),` rule resolves to a `,(0,h.jsx)(n.code,{children:`--kd-code-token-*`}),` custom property, so a project
recolours the whole theme by reassigning properties and never by rewriting selectors.`]}),`
`,(0,h.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`.hljs`}),` sets the same code background and foreground that `,(0,h.jsx)(n.code,{children:`pre`}),` already carries, so the
highlighter's wrapper lands on styling that is right before a single token is coloured.
Keywords and comments are italic; everything else differs by colour alone.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsx)(n.h2,{id:`stylesheets`,children:`Stylesheets`}),`
`,(0,h.jsxs)(n.p,{children:[`Selectors, properties and values each land on their own token, which is why a stylesheet
reads as three colours rather than one. `,(0,h.jsx)(n.code,{children:`.hljs-selector-class`}),` shares the entity colour
with built-ins, and `,(0,h.jsx)(n.code,{children:`var()`}),` counts as a built-in.`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(n.h2,{id:`markup`,children:`Markup`}),`
`,(0,h.jsx)(n.p,{children:`A tag is two nested spans: the brackets take the link colour and the element name inside
them takes the type colour. Attribute names and their values are separate tokens again.`}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`retinting`,children:`Retinting`}),`
`,(0,h.jsxs)(n.p,{children:[`Assign a token anywhere at or above the block and every rule that reads it follows, in
this case on the `,(0,h.jsx)(n.code,{children:`pre`}),` itself. Do it at `,(0,h.jsx)(n.code,{children:`:root`}),` for a project-wide change, or on one
element for a single figure.`]}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`The token values are declared once on `,(0,h.jsx)(n.code,{children:`:root`}),`, not per theme, so the same palette is
used in light mode while `,(0,h.jsx)(n.code,{children:`--kd-code-bg`}),` and `,(0,h.jsx)(n.code,{children:`--kd-code-fg`}),` flip with the theme. A light
code theme means reassigning the tokens under `,(0,h.jsx)(n.code,{children:`[data-theme="light"]`}),` yourself.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`on-its-own`,children:`On its own`}),`
`,(0,h.jsxs)(n.p,{children:[`The palette is part of the main bundle, so a project that already loads
`,(0,h.jsx)(n.code,{children:`@kostad/brand`}),` has it. It is also an entry of its own,
`,(0,h.jsx)(n.code,{children:`@use "@kostad/brand/scss/entries/syntax"`}),`, for a project that wants the theme and none
of the rest. That entry emits the `,(0,h.jsx)(n.code,{children:`hljs`}),` rules only, so pair it with
`,(0,h.jsx)(n.code,{children:`@kostad/brand/scss/entries/tokens`}),` unless the page already declares the custom
properties.`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),s()})))()}g();export{m as default};
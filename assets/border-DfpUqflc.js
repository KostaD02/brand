import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-BEjTLADP.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./border.stories-Ckm8JrIx.js";function h(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:p}),`
`,(0,_.jsx)(n.h1,{id:`border`,children:`Border`}),`
`,(0,_.jsx)(n.p,{children:`Width, side, style and radius. Width and colour come from tokens, so borders follow the
theme.`}),`
`,(0,_.jsx)(n.h2,{id:`width`,children:`Width`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-border-{1-4}`}),` sets width, style and colour together, so a single class draws a
complete border, so `,(0,_.jsx)(n.code,{children:`kd-border-1`}),` is usable on its own. `,(0,_.jsx)(n.code,{children:`kd-border-0`}),` removes it.`]}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(n.h2,{id:`sides`,children:`Sides`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-border-{t|r|b|l}-{1-4}`}),` draws a single edge, again setting width, style and colour in
one class.`]}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(n.h2,{id:`style`,children:`Style`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-border-{solid|dashed|dotted|none}`}),` sets `,(0,_.jsx)(n.code,{children:`border-style`}),` alone, so it needs a width
class alongside it to be visible.`]}),`
`,(0,_.jsx)(i,{of:s}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[`The `,(0,_.jsx)(n.code,{children:`kd-border-`}),` prefix covers three properties: width (`,(0,_.jsx)(n.code,{children:`kd-border-2`}),`), style
(`,(0,_.jsx)(n.code,{children:`kd-border-dashed`}),`) and colour (`,(0,_.jsx)(n.code,{children:`kd-border-accent`}),`, documented under
`,(0,_.jsx)(n.a,{href:`?path=/docs/utilities-colors--docs`,children:`Colors`}),`). They compose, but the numeric ones are
the only ones that stand alone.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`radius`,children:`Radius`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-radius-{0|sm|md|lg|xl|pill|circle}`}),`, resolving to the radius tokens.`]}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(n.h2,{id:`corner`,children:`Corner`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-corner-{round|squircle|bevel|scoop|notch|straight}`}),` sets `,(0,_.jsx)(n.code,{children:`corner-shape`}),`, which
reshapes the curve that `,(0,_.jsx)(n.code,{children:`border-radius`}),` already reserved. It needs a radius class
alongside it: with no radius there is no corner to reshape, and the larger the radius
the more the shape reads, so `,(0,_.jsx)(n.code,{children:`kd-radius-xl`}),` is the one to pair it with.`]}),`
`,(0,_.jsx)(i,{of:m}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`corner-shape`}),` is Chromium only at the time of writing. Browsers without it drop the
declaration and keep the plain rounded corner, so the classes are safe to ship as
they stand. Keep them off `,(0,_.jsx)(n.code,{children:`kd-radius-pill`}),` and `,(0,_.jsx)(n.code,{children:`kd-radius-circle`}),`: a reshaped corner
at those radii turns a stadium or a circle into a superellipse.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`accent-hairline`,children:`Accent hairline`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-border-accent-hairline`}),` is the one shorthand: a 1px accent border, the signature
outline used across the brand.`]}),`
`,(0,_.jsx)(i,{of:u})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=r(),n(),o(),c()})))()}v();export{g as default};
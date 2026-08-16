import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DcXKNSZI.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./text.stories-8HqdBgfx.js";function h(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:c}),`
`,(0,_.jsx)(n.h1,{id:`text`,children:`Text`}),`
`,(0,_.jsx)(n.p,{children:`Type utilities. Sizes, weights, line heights and families all resolve to tokens, so they
follow the theme and any override of the underlying scale.`}),`
`,(0,_.jsx)(n.h2,{id:`size`,children:`Size`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-fs-{name}`}),` across the full scale: `,(0,_.jsx)(n.code,{children:`micro`}),`, `,(0,_.jsx)(n.code,{children:`xxxs`}),`, `,(0,_.jsx)(n.code,{children:`xxs`}),`, `,(0,_.jsx)(n.code,{children:`xs`}),`, `,(0,_.jsx)(n.code,{children:`sm`}),`, `,(0,_.jsx)(n.code,{children:`md`}),`, `,(0,_.jsx)(n.code,{children:`lg`}),`,
`,(0,_.jsx)(n.code,{children:`xl`}),`, `,(0,_.jsx)(n.code,{children:`xxl`}),`, `,(0,_.jsx)(n.code,{children:`heading`}),`, `,(0,_.jsx)(n.code,{children:`xxxl`}),`, `,(0,_.jsx)(n.code,{children:`display`}),`, `,(0,_.jsx)(n.code,{children:`hero`}),`.`]}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(n.h2,{id:`weight`,children:`Weight`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-fw-{regular|medium|semibold|bold}`}),`, plus numeric `,(0,_.jsx)(n.code,{children:`kd-fw-100`}),` through `,(0,_.jsx)(n.code,{children:`kd-fw-900`}),`.`]}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(n.h2,{id:`family`,children:`Family`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-font-{primary|secondary|mono}`}),`. Primary is Raleway, secondary is Poppins, mono is
JetBrains Mono with fallbacks.`]}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-font-*`}),` is also the prefix for font style: `,(0,_.jsx)(n.code,{children:`kd-font-normal`}),` and `,(0,_.jsx)(n.code,{children:`kd-font-italic`}),`
set `,(0,_.jsx)(n.code,{children:`font-style`}),`, not the family.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`colour`,children:`Colour`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-text-{primary|secondary|muted|bright|inverse}`}),` for the text ramp, and
`,(0,_.jsx)(n.code,{children:`kd-text-{accent|success|warning|danger}`}),` for intent.`]}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`success`}),` is defined as `,(0,_.jsx)(n.code,{children:`var(--kd-accent)`}),` in both themes, so `,(0,_.jsx)(n.code,{children:`kd-text-success`}),` and
`,(0,_.jsx)(n.code,{children:`kd-text-accent`}),` render identically. `,(0,_.jsx)(n.code,{children:`text-bright`}),` also equals `,(0,_.jsx)(n.code,{children:`text-primary`}),` in the
light theme, so its emphasis is only visible in dark.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`alignment`,children:`Alignment`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-text-{start|end|center|justify}`}),`.`]}),`
`,(0,_.jsx)(i,{of:m}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[`The `,(0,_.jsx)(n.code,{children:`kd-text-`}),` prefix is shared across alignment, transform, decoration and colour.
They set different properties and can be combined freely: `,(0,_.jsx)(n.code,{children:`kd-text-center`}),` and
`,(0,_.jsx)(n.code,{children:`kd-text-muted`}),` do not conflict.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`transform-and-decoration`,children:`Transform and decoration`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-text-{uppercase|lowercase|capitalize}`}),` and
`,(0,_.jsx)(n.code,{children:`kd-text-{underline|line-through}`}),`. `,(0,_.jsx)(n.code,{children:`kd-text-none`}),` clears both decoration and transform.`]}),`
`,(0,_.jsx)(n.h2,{id:`wrapping`,children:`Wrapping`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-whitespace-{normal|nowrap|pre|pre-line|pre-wrap}`}),` and
`,(0,_.jsx)(n.code,{children:`kd-break-{normal|break-all|keep-all}`}),` control wrapping. `,(0,_.jsx)(n.code,{children:`kd-text-balance`}),` and
`,(0,_.jsx)(n.code,{children:`kd-text-pretty`}),` set `,(0,_.jsx)(n.code,{children:`text-wrap`}),` for headings and body copy respectively.`]}),`
`,(0,_.jsx)(n.h2,{id:`truncation`,children:`Truncation`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-text-ellipsis`}),` clips a single line with an ellipsis. It needs a constrained width to
do anything.`]}),`
`,(0,_.jsx)(i,{of:s})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=r(),n(),o(),p()})))()}v();export{g as default};
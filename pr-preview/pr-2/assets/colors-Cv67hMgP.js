import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-dweimCSc.js";import{a as s,i as c,n as l,r as u,t as d}from"./colors.stories-CTMHLa2u.js";function f(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(n.h1,{id:`colors`,children:`Colors`}),`
`,(0,m.jsx)(n.p,{children:`Background and border colour utilities. Both come in two kinds that share one prefix, and
the difference matters.`}),`
`,(0,m.jsx)(n.h2,{id:`role-backgrounds`,children:`Role backgrounds`}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:`kd-bg-{base|alpha|elevated|elevated-hover|accent|accent-soft|warning-soft|danger-soft}`}),`
plus `,(0,m.jsx)(n.code,{children:`kd-bg-transparent`}),`. These resolve to theme roles, so they change when `,(0,m.jsx)(n.code,{children:`data-theme`}),`
changes.`]}),`
`,(0,m.jsx)(i,{of:u}),`
`,(0,m.jsx)(n.h2,{id:`palette-backgrounds`,children:`Palette backgrounds`}),`
`,(0,m.jsxs)(n.p,{children:[`The raw palette is also exposed: `,(0,m.jsx)(n.code,{children:`kd-bg-navy`}),`, `,(0,m.jsx)(n.code,{children:`kd-bg-slate`}),`, `,(0,m.jsx)(n.code,{children:`kd-bg-green`}),`,
`,(0,m.jsx)(n.code,{children:`kd-bg-paper`}),` and every other entry in the colour map. These are fixed values and do
`,(0,m.jsx)(n.strong,{children:`not`}),` follow the theme.`]}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsxs)(n.blockquote,{children:[`
`,(0,m.jsxs)(n.p,{children:[`Nothing in the class name distinguishes the two. `,(0,m.jsx)(n.code,{children:`kd-bg-base`}),` follows the theme,
`,(0,m.jsx)(n.code,{children:`kd-bg-navy`}),` does not. There is no matching `,(0,m.jsx)(n.code,{children:`kd-text-<palette>`}),` set either, so the
two colour utilities are not symmetric. Prefer the role classes unless you specifically
want a fixed swatch.`]}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`border-colours`,children:`Border colours`}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:`kd-border-{base|strong|focus|accent|accent-line|danger|warning}`}),` and
`,(0,m.jsx)(n.code,{children:`kd-border-transparent`}),` set `,(0,m.jsx)(n.code,{children:`border-color`}),` only. Pair them with a width from
`,(0,m.jsx)(n.a,{href:`?path=/docs/utilities-border--docs`,children:`Border`}),`, which is what actually draws the line.`]}),`
`,(0,m.jsx)(i,{of:d}),`
`,(0,m.jsxs)(n.blockquote,{children:[`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:`kd-border-*`}),` is overloaded three ways: `,(0,m.jsx)(n.code,{children:`kd-border-1`}),` sets width, `,(0,m.jsx)(n.code,{children:`kd-border-dashed`}),`
sets style, `,(0,m.jsx)(n.code,{children:`kd-border-accent`}),` sets colour. They compose, but the shared prefix means
the class name alone does not tell you which property is being set.`]}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`text-colour`,children:`Text colour`}),`
`,(0,m.jsxs)(n.p,{children:[`Text colour lives with the type utilities rather than here. See
`,(0,m.jsx)(n.a,{href:`?path=/docs/utilities-text--docs`,children:`Text`}),`.`]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=r(),n(),o(),s()})))()}h();export{p as default};
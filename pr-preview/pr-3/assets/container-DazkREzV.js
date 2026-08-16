import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DEtMKkjj.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./container.stories-BGWN_XwQ.js";function h(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:p}),`
`,(0,_.jsx)(n.h1,{id:`container`,children:`Container`}),`
`,(0,_.jsx)(n.p,{children:`Centres content and caps its width. Containers are full width with horizontal padding
until a breakpoint is reached, then hold a maximum width.`}),`
`,(0,_.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-container`}),` is the responsive default. It steps up through every tier, so it is
capped at 320px from the smallest breakpoint and 1250px at the largest.`]}),`
`,(0,_.jsx)(i,{of:m}),`
`,(0,_.jsx)(n.h2,{id:`tiers`,children:`Tiers`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-container-{tier}`}),` starts capping at that tier and stays fluid below it. Tiers run
`,(0,_.jsx)(n.code,{children:`xxs`}),`, `,(0,_.jsx)(n.code,{children:`xs`}),`, `,(0,_.jsx)(n.code,{children:`sm`}),`, `,(0,_.jsx)(n.code,{children:`md`}),`, `,(0,_.jsx)(n.code,{children:`lg`}),`, `,(0,_.jsx)(n.code,{children:`xl`}),`. The cap applies from a `,(0,_.jsx)(n.code,{children:`min-width`}),` query, so a
larger tier stays full width on smaller screens.`]}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-container-xxs`}),` and `,(0,_.jsx)(n.code,{children:`kd-container`}),` produce identical output at every viewport. The
tier loop starts at the smallest breakpoint, so the two classes always coincide.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`fluid`,children:`Fluid`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-container--fluid`}),` keeps the padding and centring but never caps the width.`]}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[`Use it on its own, not alongside `,(0,_.jsx)(n.code,{children:`kd-container`}),`. The cap from `,(0,_.jsx)(n.code,{children:`kd-container`}),` wins and
the result is not fluid.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`flush`,children:`Flush`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-container--flush`}),` zeroes the horizontal padding while keeping the width cap. It is a
dependent modifier and needs a container class alongside it.`]}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(n.h2,{id:`gutters`,children:`Gutters`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-gutter-{0-5}`}),` reassigns `,(0,_.jsx)(n.code,{children:`--kd-container-padding-x`}),` from the spacer scale, so the
horizontal padding can be changed without writing a new container.`]}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(n.h2,{id:`measure`,children:`Measure`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-measure-{size}`}),` caps width for readability rather than layout, running `,(0,_.jsx)(n.code,{children:`xxs`}),` through
`,(0,_.jsx)(n.code,{children:`xxxl`}),`. Unlike a container it adds no padding, so use it on a prose column inside a
container.`]}),`
`,(0,_.jsx)(i,{of:s})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=r(),n(),o(),c()})))()}v();export{g as default};
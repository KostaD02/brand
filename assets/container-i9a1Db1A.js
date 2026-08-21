import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-CxskzV48.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./container.stories-CQPW-Idr.js";function g(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:c}),`
`,(0,v.jsx)(n.h1,{id:`container`,children:`Container`}),`
`,(0,v.jsx)(n.p,{children:`Centres content and caps its width. Containers are full width with horizontal padding
until a breakpoint is reached, then hold a maximum width.`}),`
`,(0,v.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-container`}),` is the responsive default. It steps up through every tier, so it is
capped at 320px from the smallest breakpoint and 1250px at the largest.`]}),`
`,(0,v.jsx)(i,{of:h}),`
`,(0,v.jsx)(n.h2,{id:`tiers`,children:`Tiers`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-container-{tier}`}),` starts capping at that tier and stays fluid below it. Tiers run
`,(0,v.jsx)(n.code,{children:`xxs`}),`, `,(0,v.jsx)(n.code,{children:`xs`}),`, `,(0,v.jsx)(n.code,{children:`sm`}),`, `,(0,v.jsx)(n.code,{children:`md`}),`, `,(0,v.jsx)(n.code,{children:`lg`}),`, `,(0,v.jsx)(n.code,{children:`xl`}),`. The cap applies from a `,(0,v.jsx)(n.code,{children:`min-width`}),` query, so a
larger tier stays full width on smaller screens.`]}),`
`,(0,v.jsx)(i,{of:m}),`
`,(0,v.jsxs)(n.blockquote,{children:[`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-container-xxs`}),` and `,(0,v.jsx)(n.code,{children:`kd-container`}),` produce identical output at every viewport. The
tier loop starts at the smallest breakpoint, so the two classes always coincide.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`fluid`,children:`Fluid`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-container--fluid`}),` keeps the padding and centring but never caps the width.`]}),`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsxs)(n.blockquote,{children:[`
`,(0,v.jsxs)(n.p,{children:[`Use it on its own, not alongside `,(0,v.jsx)(n.code,{children:`kd-container`}),`. The cap from `,(0,v.jsx)(n.code,{children:`kd-container`}),` wins and
the result is not fluid.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`flush`,children:`Flush`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-container--flush`}),` zeroes the horizontal padding while keeping the width cap. It is a
dependent modifier and needs a container class alongside it.`]}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(n.h2,{id:`gutters`,children:`Gutters`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-gutter-{0-7}`}),` reassigns `,(0,v.jsx)(n.code,{children:`--kd-container-padding-x`}),` from the spacer scale, so the
horizontal padding can be changed without writing a new container. It runs the whole
scale, so a 90px page shell at step 7 is still a container.`]}),`
`,(0,v.jsx)(i,{of:l}),`
`,(0,v.jsxs)(n.blockquote,{children:[`
`,(0,v.jsxs)(n.p,{children:[`The gutter classes are emitted after `,(0,v.jsx)(n.code,{children:`kd-container--flush`}),`, so putting the two together
gives you the gutter rather than zero. Drop the flush class instead of fighting it.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`responsive-gutters`,children:`Responsive gutters`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-gutter-{tier}-{0-7}`}),` sets the same variable inside a `,(0,v.jsx)(n.code,{children:`max-width`}),` query, so it applies
at that tier and every width below it. Tiers run `,(0,v.jsx)(n.code,{children:`xxs`}),`, `,(0,v.jsx)(n.code,{children:`xs`}),`, `,(0,v.jsx)(n.code,{children:`sm`}),`, `,(0,v.jsx)(n.code,{children:`md`}),`, `,(0,v.jsx)(n.code,{children:`lg`}),`, `,(0,v.jsx)(n.code,{children:`xl`}),`, and
they are emitted widest first, so where two of them overlap the narrower one wins.`]}),`
`,(0,v.jsx)(i,{of:f}),`
`,(0,v.jsxs)(n.blockquote,{children:[`
`,(0,v.jsxs)(n.p,{children:[`A bare `,(0,v.jsx)(n.code,{children:`kd-container`}),` drops its own gutter to 1rem at 600px and below. The moment you add
any `,(0,v.jsx)(n.code,{children:`kd-gutter-*`}),` class you have opted out of that drop: both set
`,(0,v.jsx)(n.code,{children:`--kd-container-padding-x`}),` at the same specificity and the utility is emitted later, so
your flat value holds all the way down to zero width.`]}),`
`]}),`
`,(0,v.jsxs)(n.blockquote,{children:[`
`,(0,v.jsxs)(n.p,{children:[`The responsive gutters are how you re-express it.
`,(0,v.jsx)(n.code,{children:`kd-container kd-gutter-7 kd-gutter-md-5 kd-gutter-xs-4`}),` is a 90px shell that steps
down to 48px at 768px and again to 24px at 480px. Pick the tiers that suit the layout;
the built-in 600px step is only a default, not something you have to reproduce.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`measure`,children:`Measure`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-measure-{size}`}),` caps width for readability rather than layout, running `,(0,v.jsx)(n.code,{children:`xxs`}),` through
`,(0,v.jsx)(n.code,{children:`xxxl`}),`. Unlike a container it adds no padding, so use it on a prose column inside a
container.`]}),`
`,(0,v.jsx)(i,{of:s})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=r(),n(),o(),u()})))()}y();export{_ as default};
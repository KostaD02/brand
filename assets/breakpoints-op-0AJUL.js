import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-HjjrTFxE.js";import{n as s,t as c}from"./kostad-brand-tokens-1q3NGCo8.js";import{i as l,n as u,r as d,t as f}from"./breakpoints.stories-6xTGbIfK.js";function p(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:d}),`
`,`
`,(0,h.jsx)(n.h1,{id:`breakpoints`,children:`Breakpoints`}),`
`,(0,h.jsxs)(n.p,{children:[`One scale drives the container tiers, every responsive class in the library and the SCSS
`,(0,h.jsx)(n.code,{children:`respond-*`}),` mixins. Values are minimum widths.`]}),`
`,(0,h.jsx)(g,{}),`
`,(0,h.jsxs)(n.p,{children:[`There is a seventh breakpoint, `,(0,h.jsx)(n.code,{children:`base`}),`, fixed at `,(0,h.jsx)(n.code,{children:`0`}),`. It exists so a loop can start from
"no query at all", and it emits no token and no media query.`]}),`
`,(0,h.jsx)(n.h2,{id:`direction`,children:`Direction`}),`
`,(0,h.jsx)(n.p,{children:`This is the part worth reading twice. The two consumers of the scale run in opposite
directions:`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.strong,{children:`Container tiers`}),` use `,(0,h.jsx)(n.code,{children:`min-width`}),`. `,(0,h.jsx)(n.code,{children:`kd-container-md`}),` caps the width from 768px
`,(0,h.jsx)(n.strong,{children:`upward`}),` and stays fluid below.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.strong,{children:`Responsive display`}),` uses `,(0,h.jsx)(n.code,{children:`max-width`}),`. `,(0,h.jsx)(n.code,{children:`kd-d-md-none`}),` hides the element at 768px and
`,(0,h.jsx)(n.strong,{children:`below`}),`, and shows it above.`]}),`
`]}),`
`,(0,h.jsxs)(n.p,{children:[`Both write `,(0,h.jsx)(n.code,{children:`-md-`}),`. Only the class family tells you which way it goes.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsx)(i,{of:u}),`
`,(0,h.jsx)(n.h2,{id:`in-scss`,children:`In SCSS`}),`
`,(0,h.jsxs)(n.p,{children:[`Three mixins are exported through `,(0,h.jsx)(n.code,{children:`@kostad/brand/scss/api`}),`.`]}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`respond-up`}),` is min-width, and matches the container direction:`]}),`
`,(0,h.jsx)(`pre`,{children:(0,h.jsx)(`code`,{children:`@use "@kostad/brand/scss/api" as brand;

.panel {
padding: 1rem;

@include brand.respond-up(md) {
  padding: 2rem;
}
}`})}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`respond-down`}),` is max-width, and matches the display utilities:`]}),`
`,(0,h.jsx)(`pre`,{children:(0,h.jsx)(`code`,{children:`.panel {
@include brand.respond-down(sm) {
  display: none;
}
}`})}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`respond-between`}),` takes two names and applies within the range.`]}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`respond-down`}),` uses the tier's own minimum as its `,(0,h.jsx)(n.code,{children:`max-width`}),` with no subtraction, so
the boundary is inclusive on both sides. At exactly 768px both `,(0,h.jsx)(n.code,{children:`respond-up(md)`}),` and
`,(0,h.jsx)(n.code,{children:`respond-down(md)`}),` apply. Pick tiers that do not meet, or expect the overlap.`]}),`
`]}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`Passing `,(0,h.jsx)(n.code,{children:`base`}),` to `,(0,h.jsx)(n.code,{children:`respond-up`}),` is legal and emits the content with no media query at
all, since its value is `,(0,h.jsx)(n.code,{children:`0`}),`. `,(0,h.jsx)(n.code,{children:`respond-down(base)`}),` does the same, which is rarely what
you want.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`in-css`,children:`In CSS`}),`
`,(0,h.jsx)(n.p,{children:`The non-zero breakpoints are published as custom properties, so runtime code can read the
same numbers the stylesheet uses:`}),`
`,(0,h.jsx)(`pre`,{children:(0,h.jsx)(`code`,{children:`const md = getComputedStyle(document.documentElement)
.getPropertyValue("--kd-breakpoint-md");`})}),`
`,(0,h.jsxs)(n.p,{children:[`They are also in `,(0,h.jsx)(n.code,{children:`dist/kostad-brand-tokens.json`}),` under `,(0,h.jsx)(n.code,{children:`breakpoint`}),`, already parsed to
numbers, which is the easier source for a bundler or a script.`]}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`Custom properties cannot be used inside a media query condition. `,(0,h.jsx)(n.code,{children:`@media (min-width: var(--kd-breakpoint-md))`}),`
does not work in any browser. Use the SCSS mixins at build time, or the JSON at runtime.`]}),`
`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h,g;function _(){return(_=e((()=>{h=r(),n(),o(),c(),l(),g=()=>(0,h.jsxs)(`table`,{children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{children:`Name`}),(0,h.jsx)(`th`,{children:`Min width`}),(0,h.jsx)(`th`,{children:`Token`})]})}),(0,h.jsx)(`tbody`,{children:Object.entries(s.breakpoint).map(([e,t])=>(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:(0,h.jsx)(`code`,{children:e})}),(0,h.jsx)(`td`,{children:(0,h.jsxs)(`code`,{children:[t,`px`]})}),(0,h.jsx)(`td`,{children:(0,h.jsxs)(`code`,{children:[`--`,s.prefix,`breakpoint-`,e]})})]},e))})]})})))()}_();export{g as Scale,m as default};
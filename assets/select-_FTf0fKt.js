import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DmHNhuxI.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./select.stories-BprEOr40.js";function m(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:f}),`
`,(0,g.jsx)(n.h1,{id:`select`,children:`Select`}),`
`,(0,g.jsxs)(n.p,{children:[`A native dropdown. It shares `,(0,g.jsx)(n.code,{children:`kd-field__input`}),` with
`,(0,g.jsx)(n.a,{href:`?path=/docs/forms-input--docs`,children:`Input`}),` and
`,(0,g.jsx)(n.a,{href:`?path=/docs/forms-textarea--docs`,children:`Textarea`}),`, and adds a custom arrow.`]}),`
`,(0,g.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsxs)(n.p,{children:[`The arrow is the one place the package overrides native chrome. `,(0,g.jsx)(n.code,{children:`appearance: none`}),` strips
the platform control, extra right padding reserves the space, and the chevron is drawn
from two 5px gradients tinted with the accent. There is no image and no icon font.`]}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsxs)(n.p,{children:[`Because the arrow is painted with `,(0,g.jsx)(n.code,{children:`background-image`}),`, setting a background colour on the
select from a utility such as `,(0,g.jsx)(n.code,{children:`kd-bg-elevated`}),` replaces it and the arrow disappears.
Reassign the colour through `,(0,g.jsx)(n.code,{children:`--kd-field-*`}),` or component CSS instead.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`placeholder`,children:`Placeholder`}),`
`,(0,g.jsxs)(n.p,{children:[`A `,(0,g.jsx)(n.code,{children:`<select>`}),` has no placeholder attribute. Use a first option that is `,(0,g.jsx)(n.code,{children:`disabled`}),` and
`,(0,g.jsx)(n.code,{children:`selected`}),` with an empty value, so it shows as a prompt but cannot be chosen and fails a
`,(0,g.jsx)(n.code,{children:`required`}),` check.`]}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(n.h2,{id:`grouped-options`,children:`Grouped options`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`<optgroup>`}),` is unstyled by the package and falls back to platform rendering, which is
consistent enough to use as-is.`]}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`validation`,children:`Validation`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-valid`}),` and `,(0,g.jsx)(n.code,{children:`kd-invalid`}),` work as they do on the other controls.`]}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsx)(n.h2,{id:`disabled`,children:`Disabled`}),`
`,(0,g.jsx)(i,{of:p}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsxs)(n.p,{children:[`The dimming rule for a read-only control is written as `,(0,g.jsx)(n.code,{children:`:read-only:not(select)`}),`, because
a `,(0,g.jsx)(n.code,{children:`<select>`}),` always matches `,(0,g.jsx)(n.code,{children:`:read-only`}),` and would otherwise render permanently
disabled. Only the `,(0,g.jsx)(n.code,{children:`disabled`}),` attribute dims a select.`]}),`
`]})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=r(),n(),o(),u()})))()}_();export{h as default};
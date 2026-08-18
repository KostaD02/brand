import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-Dk84hy45.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./textarea.stories-BIU-hKv-.js";function m(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:f}),`
`,(0,g.jsx)(n.h1,{id:`textarea`,children:`Textarea`}),`
`,(0,g.jsxs)(n.p,{children:[`A multi-line control. It shares `,(0,g.jsx)(n.code,{children:`kd-field__input`}),` with
`,(0,g.jsx)(n.a,{href:`?path=/docs/forms-input--docs`,children:`Input`}),` and `,(0,g.jsx)(n.a,{href:`?path=/docs/forms-select--docs`,children:`Select`}),`, and
adds two concerns the others do not have: the reset bounds its size on both axes, and it
can be resized by the user.`]}),`
`,(0,g.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(n.h2,{id:`rows`,children:`Rows`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`rows`}),` sets the starting height, in lines. Use it rather than a fixed height so the
control scales with the font size.`]}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`bounds`,children:`Bounds`}),`
`,(0,g.jsxs)(n.p,{children:[`The reset bounds every textarea on both axes from three tokens:
`,(0,g.jsx)(n.code,{children:`--kd-textarea-min-width`}),` (200px), `,(0,g.jsx)(n.code,{children:`--kd-textarea-min-height`}),` (120px) and
`,(0,g.jsx)(n.code,{children:`--kd-textarea-max-height`}),` (600px). The width ceiling is the container itself.`]}),`
`,(0,g.jsx)(i,{of:p}),`
`,(0,g.jsxs)(n.p,{children:[`The minimum width is written as `,(0,g.jsx)(n.code,{children:`min(100%, var(--kd-textarea-min-width))`}),` rather than a
plain `,(0,g.jsx)(n.code,{children:`min-width`}),`, because `,(0,g.jsx)(n.code,{children:`min-width`}),` outranks `,(0,g.jsx)(n.code,{children:`max-width`}),`: a bare minimum would let the
control overflow any column narrower than itself.`]}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`rows`}),` operates inside these bounds. `,(0,g.jsx)(n.code,{children:`rows="1"`}),` still renders at the 120px minimum, so
reassign `,(0,g.jsx)(n.code,{children:`--kd-textarea-min-height`}),` if you genuinely want a one-line box.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`vertical-resize-only`,children:`Vertical resize only`}),`
`,(0,g.jsxs)(n.p,{children:[`Horizontal dragging is already capped at the container, but it still lets the user make
the control narrower than the layout expects. Set `,(0,g.jsx)(n.code,{children:`resize: vertical`}),` to remove the axis.`]}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsxs)(n.p,{children:[`Do not set `,(0,g.jsx)(n.code,{children:`resize: none`}),` without a good reason. It removes the user's only way to see
more of what they have written in a long entry.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`validation`,children:`Validation`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-valid`}),` and `,(0,g.jsx)(n.code,{children:`kd-invalid`}),` behave exactly as they do on an input. Pair the invalid state
with `,(0,g.jsx)(n.code,{children:`aria-invalid="true"`}),` and an error described by `,(0,g.jsx)(n.code,{children:`aria-describedby`}),`.`]}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsx)(n.p,{children:`A textarea usually holds the longest answer on a form, so put the error above the fold
of the control if it is tall. An error under a 600px box is easy to miss.`}),`
`]})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=r(),n(),o(),u()})))()}_();export{h as default};
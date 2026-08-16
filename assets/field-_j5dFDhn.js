import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DcXKNSZI.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./field.stories-BW1bDOJ1.js";function m(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(n.h1,{id:`field`,children:`Field`}),`
`,(0,g.jsxs)(n.p,{children:[`The wrapper that holds a control together with its label, hint and error. It owns the
spacing and the sizing properties; the control itself is documented separately per type:
`,(0,g.jsx)(n.a,{href:`?path=/docs/forms-input--docs`,children:`Input`}),`, `,(0,g.jsx)(n.a,{href:`?path=/docs/forms-textarea--docs`,children:`Textarea`}),` and
`,(0,g.jsx)(n.a,{href:`?path=/docs/forms-select--docs`,children:`Select`}),`.`]}),`
`,(0,g.jsx)(n.h2,{id:`anatomy`,children:`Anatomy`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-field`}),` is a flex column. Five elements are available, all optional except the control:`]}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.code,{children:`kd-field__label`}),` the label, uppercase and tracked`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.code,{children:`kd-field__icon`}),` a small marker inside the label`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.code,{children:`kd-field__input`}),` the control, shared by input, textarea and select`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.code,{children:`kd-field__hint`}),` muted helper text`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.code,{children:`kd-field__error`}),` the same slot in the danger colour`]}),`
`]}),`
`,(0,g.jsxs)(n.p,{children:[`Connect the label and control with `,(0,g.jsx)(n.code,{children:`for`}),` and `,(0,g.jsx)(n.code,{children:`id`}),`.`]}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-field__input`}),` reads its padding from properties declared on `,(0,g.jsx)(n.code,{children:`kd-field`}),`. Used outside
the wrapper it inherits nothing and falls back to no padding, so keep the two together.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`hint`,children:`Hint`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-field__hint`}),` sits under the control in the muted colour. Point the control at it with
`,(0,g.jsx)(n.code,{children:`aria-describedby`}),` so it is announced rather than just seen.`]}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`error`,children:`Error`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-field__error`}),` is the same slot in the danger colour. Pair it with `,(0,g.jsx)(n.code,{children:`kd-invalid`}),` on the
control and `,(0,g.jsx)(n.code,{children:`aria-invalid="true"`}),`, and describe it the same way.`]}),`
`,(0,g.jsx)(i,{of:p}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsx)(n.p,{children:`Replace the hint with the error rather than showing both. Two lines of guidance under
one control competes for attention at the moment the user is trying to recover.`}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`label-icon`,children:`Label icon`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-field__icon`}),` drops to the micro size and the muted colour, so a marker sits inside
the label without changing its line height. Size an SVG in `,(0,g.jsx)(n.code,{children:`em`}),` so it follows.`]}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsxs)(n.p,{children:[`If the icon carries meaning, give it a label rather than `,(0,g.jsx)(n.code,{children:`aria-hidden`}),`. A decorative
one should be hidden so it is not announced as a stray graphic.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`--kd-field-gap`}),`, `,(0,g.jsx)(n.code,{children:`--kd-field-padding-y`}),` and `,(0,g.jsx)(n.code,{children:`--kd-field-padding-x`}),` are declared on the
wrapper, so reassigning them there resizes the whole field including its control.`]}),`
`,(0,g.jsx)(i,{of:c})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=r(),n(),o(),f()})))()}_();export{h as default};
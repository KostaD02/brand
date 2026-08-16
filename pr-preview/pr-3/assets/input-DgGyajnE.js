import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DEtMKkjj.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./input.stories-iMlC9Py9.js";function p(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(n.h1,{id:`input`,children:`Input`}),`
`,(0,h.jsxs)(n.p,{children:[`A single-line control. Put `,(0,h.jsx)(n.code,{children:`kd-field__input`}),` on the `,(0,h.jsx)(n.code,{children:`<input>`}),` and wrap it in a
`,(0,h.jsx)(n.a,{href:`?path=/docs/forms-field--docs`,children:`Field`}),` for the label, hint and spacing.`]}),`
`,(0,h.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,h.jsxs)(n.p,{children:[`The class is type-agnostic. `,(0,h.jsx)(n.code,{children:`text`}),`, `,(0,h.jsx)(n.code,{children:`email`}),`, `,(0,h.jsx)(n.code,{children:`password`}),`, `,(0,h.jsx)(n.code,{children:`number`}),`, `,(0,h.jsx)(n.code,{children:`search`}),` and `,(0,h.jsx)(n.code,{children:`url`}),` all
take the same styling, and the browser keeps its own keyboard and validation behaviour.`]}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`Choose the type for the input mode it gives on mobile, not for the styling. `,(0,h.jsx)(n.code,{children:`email`}),` and
`,(0,h.jsx)(n.code,{children:`number`}),` change the on-screen keyboard, which matters more than the desktop appearance.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`validation`,children:`Validation`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-valid`}),` tints the border to accent. `,(0,h.jsx)(n.code,{children:`kd-invalid`}),` tints it to danger and adds a soft
danger ring, so the state reads without relying on colour alone at a glance.`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsxs)(n.p,{children:[`These are state classes on the control, not modifiers on the wrapper, so they can be
toggled from script without touching the field. Always pair `,(0,h.jsx)(n.code,{children:`kd-invalid`}),` with
`,(0,h.jsx)(n.code,{children:`aria-invalid="true"`}),` and point `,(0,h.jsx)(n.code,{children:`aria-describedby`}),` at the error text, or the state is
visual only.`]}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`The classes style the control; they do not validate it. Native constraint attributes
such as `,(0,h.jsx)(n.code,{children:`required`}),`, `,(0,h.jsx)(n.code,{children:`minlength`}),` and `,(0,h.jsx)(n.code,{children:`pattern`}),` are what actually validate, and the
package does not style `,(0,h.jsx)(n.code,{children:`:invalid`}),` directly. That is deliberate: `,(0,h.jsx)(n.code,{children:`:invalid`}),` matches an
empty required field before the user has typed anything.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`disabled-and-read-only`,children:`Disabled and read only`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`disabled`}),` removes the control from the tab order and from form submission. `,(0,h.jsx)(n.code,{children:`readonly`}),`
keeps it focusable, selectable and submitted, which is what you want for a value the user
should be able to copy.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`Both render identically here. The package styles `,(0,h.jsx)(n.code,{children:`:read-only`}),` with the same dimming as
`,(0,h.jsx)(n.code,{children:`:disabled`}),`, so a read-only input looks unavailable even though it is focusable and
submitted. Use `,(0,h.jsx)(n.code,{children:`disabled`}),` when the value should not be sent.`]}),`
`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),s()})))()}g();export{m as default};
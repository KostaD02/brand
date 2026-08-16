import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DOx-Ekm2.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./effects.stories-DcNFVQuI.js";function p(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:s}),`
`,(0,h.jsx)(n.h1,{id:`effects`,children:`Effects`}),`
`,(0,h.jsx)(n.p,{children:`Shadow, the pop treatment, opacity, transition and interaction utilities.`}),`
`,(0,h.jsx)(n.h2,{id:`shadow`,children:`Shadow`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-shadow-{sm|md|lg|side|none}`}),`. The shadow tokens are theme keys, so they soften in the
light theme rather than keeping the dark values.`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(n.h2,{id:`pop`,children:`Pop`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-pop`}),` and `,(0,h.jsx)(n.code,{children:`kd-pop-lg`}),` apply the signature treatment: on hover and focus the element
lifts by a translate and casts a hard offset shadow with no blur.`]}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`The colour comes from `,(0,h.jsx)(n.code,{children:`--kd-shadow-pop-color`}),`, which resolves where it is used, so
setting it on the element retints the shadow. The flat `,(0,h.jsx)(n.code,{children:`--kd-shadow-pop`}),` token does not
consult it, so components reading that token directly cannot be retinted the same way.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`opacity`,children:`Opacity`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-opacity-{0|25|50|75|100}`}),`.`]}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`The ladder is hardcoded rather than read from the opacity tokens, so
`,(0,h.jsx)(n.code,{children:`--kd-opacity-muted`}),` (0.65) has no matching class.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`transition`,children:`Transition`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-transition`}),` applies the base transition. `,(0,h.jsx)(n.code,{children:`kd-transition-fast`}),`, `,(0,h.jsx)(n.code,{children:`kd-transition-slow`}),`
and `,(0,h.jsx)(n.code,{children:`kd-transition-none`}),` take the other durations.`]}),`
`,(0,h.jsx)(n.h2,{id:`interaction`,children:`Interaction`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-cursor-{pointer|default|not-allowed|wait|text|grab}`}),`,
`,(0,h.jsx)(n.code,{children:`kd-pointer-{none|auto}`}),` and `,(0,h.jsx)(n.code,{children:`kd-select-{none|text|all}`}),`.`]}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-pointer-none`}),` also stops hover and focus styles firing, so pairing it with
`,(0,h.jsx)(n.code,{children:`kd-cursor-not-allowed`}),` means the cursor never shows, because the element cannot be hovered at
all. Use one or the other.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`focus-ring`,children:`Focus ring`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-focus-ring`}),` applies the dashed accent outline on `,(0,h.jsx)(n.code,{children:`:focus-visible`}),`. The reset already
does this globally; the class is for elements that have opted out and need it back.`]}),`
`,(0,h.jsx)(i,{of:f})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),u()})))()}g();export{m as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-HjjrTFxE.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./button.stories-DI3W0Q-u.js";function g(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:c}),`
`,(0,v.jsx)(n.h1,{id:`button`,children:`Button`}),`
`,(0,v.jsx)(n.p,{children:`Trigger an action. Buttons are outlined rather than filled, and lift on hover with an
offset shadow instead of changing elevation.`}),`
`,(0,v.jsx)(n.h2,{id:`variations`,children:`Variations`}),`
`,(0,v.jsxs)(n.p,{children:[`Add a variation class alongside `,(0,v.jsx)(n.code,{children:`kd-btn`}),`. Every variation only reassigns custom
properties, so the base class carries all of the layout and the variation carries the
colour.`]}),`
`,(0,v.jsx)(i,{of:m}),`
`,(0,v.jsx)(n.h2,{id:`outline`,children:`Outline`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-btn--outline`}),` is accent on accent: accent label, accent border, transparent
background. It stays that way on hover, lifting with the pop shadow instead of
filling.`]}),`
`,(0,v.jsxs)(n.p,{children:[`It differs from `,(0,v.jsx)(n.code,{children:`kd-btn--primary`}),` only in the hover state: primary inverts to a filled
accent block, outline holds its colour. Use outline where the button repeats or sits in
running text, and primary where one action should dominate.`]}),`
`,(0,v.jsx)(i,{of:s}),`
`,(0,v.jsxs)(n.blockquote,{children:[`
`,(0,v.jsxs)(n.p,{children:[`An anchor styled as a button still needs `,(0,v.jsx)(n.code,{children:`class="kd-btn"`}),`, because the base class removes the
underline that the reset gives every `,(0,v.jsx)(n.code,{children:`<a>`}),`.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-btn--sm`}),` and `,(0,v.jsx)(n.code,{children:`kd-btn--lg`}),` change padding, font size and the size of the hover
offset. Medium is the default and has no class.`]}),`
`,(0,v.jsx)(i,{of:f}),`
`,(0,v.jsx)(n.h2,{id:`block`,children:`Block`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`kd-btn--block`}),` switches the button to `,(0,v.jsx)(n.code,{children:`display: flex`}),` and fills the width of its
container.`]}),`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsx)(n.h2,{id:`with-an-icon`,children:`With an icon`}),`
`,(0,v.jsxs)(n.p,{children:[`Wrap an icon in `,(0,v.jsx)(n.code,{children:`kd-btn__icon`}),` so it does not shrink when the label wraps. Mark the icon
`,(0,v.jsx)(n.code,{children:`aria-hidden`}),` and give an icon-only button an `,(0,v.jsx)(n.code,{children:`aria-label`}),`.`]}),`
`,(0,v.jsx)(i,{of:l}),`
`,(0,v.jsx)(n.h2,{id:`disabled`,children:`Disabled`}),`
`,(0,v.jsxs)(n.p,{children:[`Use the native `,(0,v.jsx)(n.code,{children:`disabled`}),` attribute on a `,(0,v.jsx)(n.code,{children:`<button>`}),`. For an anchor styled as a button,
use `,(0,v.jsx)(n.code,{children:`aria-disabled="true"`}),` instead, because anchors have no disabled state.`]}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsxs)(n.blockquote,{children:[`
`,(0,v.jsxs)(n.p,{children:[`Disabled buttons set `,(0,v.jsx)(n.code,{children:`pointer-events: none`}),`, so they will not fire hover or click
handlers. An anchor with `,(0,v.jsx)(n.code,{children:`aria-disabled`}),` still receives focus, so also remove its
`,(0,v.jsx)(n.code,{children:`href`}),` if it must not be activated.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,v.jsx)(n.p,{children:`Rather than writing a new variation, reassign the custom properties on the element. Each
one resolves on the button itself, so a one-off restyle does not need a new class.`}),`
`,(0,v.jsx)(i,{of:h})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=r(),n(),o(),u()})))()}y();export{_ as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DmHNhuxI.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./reset.stories-Da8IOXhd.js";function p(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(n.h1,{id:`reset`,children:`Reset`}),`
`,(0,h.jsxs)(n.p,{children:[`The base layer that everything else assumes. It is part of the main stylesheet, and SCSS
consumers can take it alone with `,(0,h.jsx)(n.code,{children:`@use "@kostad/brand/scss/base/reset"`}),` to get it without
the element styles, or skip it if you already have a reset you trust. That drops the
reduced-motion guard, which ships here and nowhere else.`]}),`
`,(0,h.jsx)(n.h2,{id:`what-it-sets`,children:`What it sets`}),`
`,(0,h.jsxs)(n.ul,{children:[`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`box-sizing: border-box`}),` on every element and pseudo-element.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`margin`}),` and `,(0,h.jsx)(n.code,{children:`padding`}),` cleared on `,(0,h.jsx)(n.code,{children:`html`}),` and `,(0,h.jsx)(n.code,{children:`body`}),`.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`body`}),` gets the secondary family, the body size and line height, the primary text
colour and the page background, with a transition on colour and background so theme
switching fades rather than snaps.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`html`}),` gets `,(0,h.jsx)(n.code,{children:`scroll-behavior: smooth`}),` and a scroll padding of `,(0,h.jsx)(n.code,{children:`--kd-scroll-offset`}),`, the
navbar height plus one space step, so anchor targets are not hidden under a fixed header.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`img`}),`, `,(0,h.jsx)(n.code,{children:`svg`}),` and `,(0,h.jsx)(n.code,{children:`video`}),` become `,(0,h.jsx)(n.code,{children:`display: block`}),` with `,(0,h.jsx)(n.code,{children:`max-width: 100%`}),`.`]}),`
`,(0,h.jsxs)(n.li,{children:[(0,h.jsx)(n.code,{children:`textarea`}),` is bounded on both axes from `,(0,h.jsx)(n.code,{children:`--kd-textarea-*`}),`: it starts at least 200px wide
and 120px tall, and cannot be dragged wider than its container or taller than 600px. The
minimum width is written as `,(0,h.jsx)(n.code,{children:`min(100%, var(--kd-textarea-min-width))`}),`, because a plain
`,(0,h.jsx)(n.code,{children:`min-width`}),` outranks `,(0,h.jsx)(n.code,{children:`max-width`}),` and would let a narrow column overflow.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`form-fonts`,children:`Form fonts`}),`
`,(0,h.jsxs)(n.p,{children:[`Form controls do not inherit typography by default, so the reset sets `,(0,h.jsx)(n.code,{children:`font: inherit`}),` on
`,(0,h.jsx)(n.code,{children:`input`}),`, `,(0,h.jsx)(n.code,{children:`button`}),`, `,(0,h.jsx)(n.code,{children:`textarea`}),` and `,(0,h.jsx)(n.code,{children:`select`}),`. Nothing else about them is styled here.`]}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`These are unstyled on purpose. For a real form control use
`,(0,h.jsx)(n.a,{href:`?path=/docs/forms-field--docs`,children:`Field`}),`, which supplies the border, padding, states
and validation styling.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`focus`,children:`Focus`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`:focus`}),` outlines are removed and re-applied on `,(0,h.jsx)(n.code,{children:`:focus-visible`}),` only, so a pointer click
does not leave a ring but keyboard navigation does. The ring is the dashed accent outline
built from the focus-ring tokens.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`Because this is a single `,(0,h.jsx)(n.code,{children:`:focus-visible`}),` rule at low specificity, any component that
sets `,(0,h.jsx)(n.code,{children:`outline: none`}),` later in the cascade removes it and must supply its own
indicator.`]}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`selection`,children:`Selection`}),`
`,(0,h.jsx)(n.p,{children:`Text selection uses its own theme roles rather than the browser default.`}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(n.h2,{id:`scrollbars`,children:`Scrollbars`}),`
`,(0,h.jsx)(n.p,{children:`WebKit scrollbars are restyled to a 12px track in the page background with a rounded
thumb in the scrollbar-thumb role, inset by a 3px border so it reads as floating.`}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsx)(n.p,{children:`This only affects WebKit and Chromium. Firefox keeps its native scrollbar, so do not
rely on the styled version as part of a layout.`}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`media`,children:`Media`}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsx)(n.h2,{id:`reduced-motion`,children:`Reduced motion`}),`
`,(0,h.jsxs)(n.p,{children:[`A `,(0,h.jsx)(n.code,{children:`prefers-reduced-motion: reduce`}),` block collapses animation and transition durations to
0.01ms, caps iteration counts at one, and turns off smooth scrolling. It uses
`,(0,h.jsx)(n.code,{children:`!important`}),` and is the only place in the package that does.`]}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`The guard lives in the reset entry, not in components. A build that loads
`,(0,h.jsx)(n.code,{children:`./css/components`}),` without `,(0,h.jsx)(n.code,{children:`./css/reset`}),` gets the spinner and pill animations with no
reduced-motion handling at all.`]}),`
`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),s()})))()}g();export{m as default};
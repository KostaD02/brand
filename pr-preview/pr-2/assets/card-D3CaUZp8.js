import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-CPu2vQms.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./card.stories-DV2HW_22.js";function m(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{of:u}),`
`,(0,g.jsx)(n.h1,{id:`card`,children:`Card`}),`
`,(0,g.jsx)(n.p,{children:`A bordered surface for grouping related content. The card is a flex column, so its
children stack and the footer can be pinned to the bottom.`}),`
`,(0,g.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-card__body`}),` holds the content, `,(0,g.jsx)(n.code,{children:`kd-card__title`}),` and `,(0,g.jsx)(n.code,{children:`kd-card__text`}),` set the type.
None of the elements are required; a card with a single child is valid.`]}),`
`,(0,g.jsx)(i,{of:p}),`
`,(0,g.jsx)(n.h2,{id:`surface`,children:`Surface`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-card--surface`}),` drops the background from `,(0,g.jsx)(n.code,{children:`--kd-bg-elevated`}),` to `,(0,g.jsx)(n.code,{children:`--kd-bg-surface`}),`.
Use it when a card sits on top of an already elevated area and needs to read as recessed
rather than raised.`]}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsx)(n.h2,{id:`footer`,children:`Footer`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-card__footer`}),` has `,(0,g.jsx)(n.code,{children:`margin-top: auto`}),`, so it is pushed to the bottom of the card. In a
row of cards with unequal text, the footers still line up.`]}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(n.h2,{id:`media`,children:`Media`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-card__media`}),` cancels the card padding with a negative margin and rounds its top
corners to match, so an image meets the border with no gap.`]}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsxs)(n.blockquote,{children:[`
`,(0,g.jsx)(n.p,{children:`Media only clips correctly as the first child. Placing it mid-card leaves the rounded
corners pointing the wrong way.`}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`interactive`,children:`Interactive`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`kd-card--interactive`}),` applies the pop treatment: the card lifts and casts an offset
shadow on hover and focus. Use it only when the whole card is a single link or button.`]}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`--kd-card-padding`}),`, `,(0,g.jsx)(n.code,{children:`--kd-card-bg`}),`, `,(0,g.jsx)(n.code,{children:`--kd-card-border-color`}),` and `,(0,g.jsx)(n.code,{children:`--kd-card-radius`}),` are
declared on the block, so reassigning any of them on the element restyles that one card.
`,(0,g.jsx)(n.code,{children:`kd-card--flush`}),` is the built-in shortcut for zero padding.`]})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;function _(){return(_=e((()=>{g=r(),n(),o(),f()})))()}_();export{h as default};
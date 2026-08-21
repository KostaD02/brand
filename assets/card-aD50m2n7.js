import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-C3NIM0p1.js";import{a as s,c,d as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g,u as _}from"./card.stories-NvTjZQ6q.js";function v(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(a,{of:_}),`
`,(0,b.jsx)(n.h1,{id:`card`,children:`Card`}),`
`,(0,b.jsxs)(n.p,{children:[`A bordered surface for grouping related content. The card is a flex column, so its
children stack and the footer can be pinned to the bottom. It is also
`,(0,b.jsx)(n.code,{children:`position: relative`}),`, so an absolutely positioned child resolves against the card.`]}),`
`,(0,b.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`kd-card__body`}),` holds the content, `,(0,b.jsx)(n.code,{children:`kd-card__title`}),` and `,(0,b.jsx)(n.code,{children:`kd-card__text`}),` set the type.
None of the elements are required; a card with a single child is valid.`]}),`
`,(0,b.jsx)(i,{of:g}),`
`,(0,b.jsx)(n.h2,{id:`surface`,children:`Surface`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`kd-card--surface`}),` drops the background from `,(0,b.jsx)(n.code,{children:`--kd-bg-elevated`}),` to `,(0,b.jsx)(n.code,{children:`--kd-bg-surface`}),`.
Use it when a card sits on top of an already elevated area and needs to read as recessed
rather than raised.`]}),`
`,(0,b.jsx)(i,{of:c}),`
`,(0,b.jsx)(n.h2,{id:`header`,children:`Header`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`kd-card__header`}),` is the third slot alongside `,(0,b.jsx)(n.code,{children:`__body`}),` and `,(0,b.jsx)(n.code,{children:`__footer`}),`: a full width row
with the label on the left and whatever acts on it on the right. It aligns its children
to the top, so a two line title does not drag the pill or the icon link down with it.`]}),`
`,(0,b.jsx)(i,{of:m}),`
`,(0,b.jsx)(n.h2,{id:`footer`,children:`Footer`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`kd-card__footer`}),` has `,(0,b.jsx)(n.code,{children:`margin-top: auto`}),`, so it is pushed to the bottom of the card. In a
row of cards with unequal text, the footers still line up.`]}),`
`,(0,b.jsx)(i,{of:f}),`
`,(0,b.jsx)(n.h2,{id:`media`,children:`Media`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`kd-card__media`}),` cancels the card padding with a negative margin and rounds its top
corners to match, so an image meets the border with no gap.`]}),`
`,(0,b.jsx)(i,{of:p}),`
`,(0,b.jsxs)(n.blockquote,{children:[`
`,(0,b.jsx)(n.p,{children:`Media only clips correctly as the first child. Placing it mid-card leaves the rounded
corners pointing the wrong way.`}),`
`]}),`
`,(0,b.jsx)(n.h2,{id:`interactive`,children:`Interactive`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`kd-card--interactive`}),` applies the pop treatment: the card lifts and casts an offset
shadow on hover and focus. Use it only when the whole card is a single link or button.`]}),`
`,(0,b.jsx)(i,{of:u}),`
`,(0,b.jsx)(n.h2,{id:`lift`,children:`Lift`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`kd-card--lift`}),` raises the card straight up and puts a soft shadow under it, where
`,(0,b.jsx)(n.code,{children:`kd-card--interactive`}),` moves it diagonally onto a hard offset shadow. Reach for `,(0,b.jsx)(n.code,{children:`--lift`}),`
in a grid of project cards, where several cards move under the same pointer sweep and a
diagonal shift reads as noise; reach for `,(0,b.jsx)(n.code,{children:`--interactive`}),` on a single card that is the
call to action.`]}),`
`,(0,b.jsx)(i,{of:s}),`
`,(0,b.jsxs)(n.blockquote,{children:[`
`,(0,b.jsxs)(n.p,{children:[`Neither variation sets `,(0,b.jsx)(n.code,{children:`outline: none`}),`, unlike the button. A keyboard focused card
shows the dashed focus ring on top of the movement, which is the behaviour you want.`]}),`
`]}),`
`,(0,b.jsx)(n.h2,{id:`title-colour`,children:`Title colour`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`--kd-card-title-color`}),` and `,(0,b.jsx)(n.code,{children:`--kd-card-title-hover-color`}),` drive `,(0,b.jsx)(n.code,{children:`kd-card__title`}),`, and the
title carries the shared transition so it fades rather than snaps. Both
`,(0,b.jsx)(n.code,{children:`kd-card--interactive`}),` and `,(0,b.jsx)(n.code,{children:`kd-card--lift`}),` move the title to the hover colour on `,(0,b.jsx)(n.code,{children:`:hover`}),`,
`,(0,b.jsx)(n.code,{children:`:focus-visible`}),` and `,(0,b.jsx)(n.code,{children:`:focus-within`}),`, so the surface and its heading change together and
the card reads as one target rather than a box with a link somewhere inside it.
`,(0,b.jsx)(n.code,{children:`:focus-within`}),` is the case that matters when the card is a plain element wrapping a link:
tabbing to the link still tints the title. Both properties are declared on the block, so
one card can take a different hover colour without a new modifier.`]}),`
`,(0,b.jsx)(i,{of:d}),`
`,(0,b.jsx)(n.h2,{id:`covering-the-card`,children:`Covering the card`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`kd-card`}),` sets `,(0,b.jsx)(n.code,{children:`position: relative`}),`, which makes it the containing block for an absolutely
positioned descendant. That is what the `,(0,b.jsx)(n.code,{children:`kd-stretch`}),` utility on
`,(0,b.jsx)(n.a,{href:`?path=/docs/utilities-position--docs`,children:`Position`}),` needs: put `,(0,b.jsx)(n.code,{children:`kd-stretch`}),` on the title link
and its `,(0,b.jsx)(n.code,{children:`::before`}),` fills the card, so the whole surface follows that one link. Anchors are
relative themselves for the underline sweep, so add `,(0,b.jsx)(n.code,{children:`kd-pos-static`}),` to the link; anything
that has to stay separately clickable, such as the icon link in the footer, takes
`,(0,b.jsx)(n.code,{children:`kd-z-raised`}),`.`]}),`
`,(0,b.jsx)(i,{of:h}),`
`,(0,b.jsxs)(n.blockquote,{children:[`
`,(0,b.jsxs)(n.p,{children:[`Without `,(0,b.jsx)(n.code,{children:`position: relative`}),` on the card the overlay would resolve against whichever
ancestor happened to be positioned. In a grid of cards that is usually the grid itself,
so every card's overlay covers the whole grid, the overlays pile up on each other, and
only the last card in the DOM stays clickable.`]}),`
`]}),`
`,(0,b.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,b.jsxs)(n.p,{children:[(0,b.jsx)(n.code,{children:`--kd-card-padding`}),`, `,(0,b.jsx)(n.code,{children:`--kd-card-bg`}),`, `,(0,b.jsx)(n.code,{children:`--kd-card-border-color`}),`, `,(0,b.jsx)(n.code,{children:`--kd-card-radius`}),`,
`,(0,b.jsx)(n.code,{children:`--kd-card-title-color`}),` and `,(0,b.jsx)(n.code,{children:`--kd-card-title-hover-color`}),` are declared on the block, so
reassigning any of them on the element restyles that one card. `,(0,b.jsx)(n.code,{children:`kd-card--flush`}),` is the
built-in shortcut for zero padding.`]})]})}function y(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,b.jsx)(n,{...e,children:(0,b.jsx)(v,{...e})}):v(e)}var b;function x(){return(x=e((()=>{b=r(),n(),o(),l()})))()}x();export{y as default};
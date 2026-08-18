import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DmHNhuxI.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./dock.stories-jcy6WnIP.js";function h(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:p}),`
`,(0,_.jsx)(n.h1,{id:`dock`,children:`Dock`}),`
`,(0,_.jsx)(n.p,{children:`A rail of icon links pinned to the bottom of one side of the viewport, with a hairline
running from the last item down to the edge of the page.`}),`
`,(0,_.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,_.jsxs)(n.p,{children:[`The items are `,(0,_.jsx)(n.code,{children:`kd-icon-link`}),` anchors. There is deliberately no `,(0,_.jsx)(n.code,{children:`__link`}),` element on the
dock: the same muted icon that turns accent on hover also appears in tables and on cards,
so the treatment lives on its own class instead. Author the icons with
`,(0,_.jsx)(n.code,{children:`fill="currentColor"`}),` or `,(0,_.jsx)(n.code,{children:`stroke="currentColor"`}),`, otherwise the hover colour never reaches
them and the dock looks dead.`]}),`
`,(0,_.jsxs)(n.p,{children:[`The real dock is `,(0,_.jsx)(n.code,{children:`position: fixed`}),`, so every demo here sits in a box carrying a `,(0,_.jsx)(n.code,{children:`transform`}),`.
That makes the box the containing block for anything fixed inside it and keeps the rail on
the docs page instead of on your screen, with the shipped `,(0,_.jsx)(n.code,{children:`position`}),` left alone.`]}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsx)(n.h2,{id:`anchoring`,children:`Anchoring`}),`
`,(0,_.jsxs)(n.p,{children:[`The block only sets `,(0,_.jsx)(n.code,{children:`bottom: 0`}),`, so it needs `,(0,_.jsx)(n.code,{children:`kd-dock--start`}),` or `,(0,_.jsx)(n.code,{children:`kd-dock--end`}),` to pick an
inline edge. Both sit a `,(0,_.jsx)(n.code,{children:`--kd-space-5`}),` gutter in from the side. The tail is drawn by
`,(0,_.jsx)(n.code,{children:`::after`}),` rather than an extra list item, which keeps the markup to exactly the links you
have.`]}),`
`,(0,_.jsx)(i,{of:m}),`
`,(0,_.jsx)(n.h2,{id:`text`,children:`Text`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-dock__text`}),` is for the item that is words rather than an icon, usually an address on
the opposite rail. `,(0,_.jsx)(n.code,{children:`writing-mode: vertical-rl`}),` turns the line on its side so it runs down
the edge, and the tracking is opened up because rotated text at that size closes in on
itself.`]}),`
`,(0,_.jsxs)(n.p,{children:[`It is also complete on its own anchor now, which matters because the thing in this slot is
almost always a `,(0,_.jsx)(n.code,{children:`mailto:`}),` link. It cancels the sliding underline the elements layer draws
under every bare `,(0,_.jsx)(n.code,{children:`<a>`}),`, carries `,(0,_.jsx)(n.code,{children:`--kd-transition`}),`, and goes accent on `,(0,_.jsx)(n.code,{children:`:hover`}),` and
`,(0,_.jsx)(n.code,{children:`:focus-visible`}),`. So `,(0,_.jsx)(n.code,{children:`class="kd-dock__text"`}),` is the whole class list.`]}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[`Adding `,(0,_.jsx)(n.code,{children:`kd-icon-link`}),` alongside it is still fine, but the only thing left for it to give a
text item is the padded hit area that matches the icons. The colour, the transition and the
cancelled underline all belong to `,(0,_.jsx)(n.code,{children:`kd-dock__text`}),`.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`flow`,children:`Flow`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-dock--flow`}),` is the mobile fallback. It goes `,(0,_.jsx)(n.code,{children:`position: static`}),`, turns the column into a
centred row, takes full width and hides the tail, so the rail rejoins the document flow at
the bottom of the page. `,(0,_.jsx)(n.code,{children:`__text`}),` flips back to `,(0,_.jsx)(n.code,{children:`horizontal-tb`}),` under it as well. On its
own it is unconditional: the rail is in flow at every width.`]}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(n.h2,{id:`flow-at-a-breakpoint`,children:`Flow at a breakpoint`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-dock--md-flow`}),` is the same fallback with the media query already attached. Put it on
the rail next to `,(0,_.jsx)(n.code,{children:`kd-dock`}),` and you get the fixed column on wide screens and the static
centred row at 768px and below, with nothing to write on your side. The full set is
`,(0,_.jsx)(n.code,{children:`kd-dock--xxs-flow`}),` through `,(0,_.jsx)(n.code,{children:`kd-dock--xl-flow`}),`, from the same loop that produces the
`,(0,_.jsx)(n.code,{children:`kd-d-{bp}-*`}),` display utilities, so they respond down: the breakpoint in the name is the
width at which the class switches on, going smaller. `,(0,_.jsx)(n.code,{children:`xxs`}),` is 350px, `,(0,_.jsx)(n.code,{children:`xs`}),` 480px, `,(0,_.jsx)(n.code,{children:`sm`}),` 600px,
`,(0,_.jsx)(n.code,{children:`md`}),` 768px, `,(0,_.jsx)(n.code,{children:`lg`}),` 945px and `,(0,_.jsx)(n.code,{children:`xl`}),` 1080px.`]}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[`Narrow the browser past 768px to watch this one drop into flow. Leave the anchoring class
on when you pair the two: `,(0,_.jsx)(n.code,{children:`left`}),` and `,(0,_.jsx)(n.code,{children:`right`}),` go inert the moment the rail is `,(0,_.jsx)(n.code,{children:`static`}),`, so
there is nothing to undo.`]}),`
`]}),`
`,(0,_.jsxs)(n.p,{children:[`This is the part worth knowing rather than working out: a variation class cannot be swapped
in by a media query from your side, because CSS has no way to add or remove a class. Before
these existed the only honest option was to re-declare the whole `,(0,_.jsx)(n.code,{children:`--flow`}),` rule set under
your own breakpoint, which is why they exist.`]}),`
`,(0,_.jsx)(n.h2,{id:`stacking`,children:`Stacking`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`--kd-dock-z`}),` sets the rail's `,(0,_.jsx)(n.code,{children:`z-index`}),` and defaults to `,(0,_.jsx)(n.code,{children:`var(--kd-z-dropdown)`}),`, which is
`,(0,_.jsx)(n.code,{children:`10`}),`. It matters more than a fixed element's z-index usually does. The rail is pinned to
the viewport, so it is stacked against the whole page rather than against the section it
happens to sit next to in the markup: give your own main content a higher `,(0,_.jsx)(n.code,{children:`z-index`}),` and it
paints over the rail and swallows every click aimed at it. The rail looks fine in a
screenshot and does nothing when you use it.`]}),`
`,(0,_.jsx)(i,{of:s}),`
`,(0,_.jsxs)(n.p,{children:[`The two frames are the same markup twice, both with a panel above the rail at
`,(0,_.jsx)(n.code,{children:`var(--kd-z-overlay)`}),`. Only the second rail sets `,(0,_.jsx)(n.code,{children:`--kd-dock-z`}),`. Raising it past whatever
the page put on top is the fix, not moving the markup, and the z scale is there so you can
say which layer you mean: `,(0,_.jsx)(n.code,{children:`var(--kd-z-sticky)`}),`, `,(0,_.jsx)(n.code,{children:`var(--kd-z-overlay)`}),` and
`,(0,_.jsx)(n.code,{children:`var(--kd-z-modal)`}),` all read better at a glance than a hand-picked number.`]}),`
`,(0,_.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`--kd-dock-gap`}),`, `,(0,_.jsx)(n.code,{children:`--kd-dock-line`}),` and `,(0,_.jsx)(n.code,{children:`--kd-dock-z`}),` are declared on the block. The gap
spaces the items and the tail's top margin together, so one value keeps the rhythm even.
The line is the tail's height; set it to `,(0,_.jsx)(n.code,{children:`0px`}),` for a fixed rail with no tail at all.`]})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=r(),n(),o(),c()})))()}v();export{g as default};
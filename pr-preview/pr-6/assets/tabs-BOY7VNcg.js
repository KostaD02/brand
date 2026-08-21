import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-dp0Is1p_.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./tabs.stories-B188t8Gw.js";function p(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a,{of:u}),`
`,(0,h.jsx)(n.h1,{id:`tabs`,children:`Tabs`}),`
`,(0,h.jsx)(n.p,{children:`A strip of buttons with an accent rule marking the current one. The component styles the
strip and nothing else: panels, click handling and focus order stay with you.`}),`
`,(0,h.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,h.jsxs)(n.p,{children:[`The default strip is a column sized to its widest label. Every tab carries a rule on its
inline start in `,(0,h.jsx)(n.code,{children:`--kd-tabs-line`}),`, so the strip reads as one continuous edge; the current
tab turns that rule accent and lifts its background to `,(0,h.jsx)(n.code,{children:`--kd-bg-elevated`}),`.`]}),`
`,(0,h.jsx)(i,{of:f}),`
`,(0,h.jsx)(n.h2,{id:`horizontal`,children:`Horizontal`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`kd-tabs--horizontal`}),` turns the column into a row and moves the rule from the inline start
to the block end, so the same marker now sits under the label. Tabs never shrink and never
wrap: a strip wider than its container scrolls sideways instead of stacking. Each tab is
also set to the full width of the strip in this mode, so how many you see at once is
decided entirely by how wide you let the strip be.`]}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsx)(n.p,{children:`The demo is capped at 22rem so the sideways scroll is visible. At full width you would
see one tab and swipe to the next.`}),`
`]}),`
`,(0,h.jsx)(n.h2,{id:`horizontal-at-a-breakpoint`,children:`Horizontal at a breakpoint`}),`
`,(0,h.jsxs)(n.p,{children:[`The column and the scrolling row are the desktop and phone halves of the same strip, so
pairing them is the common case rather than a special one. `,(0,h.jsx)(n.code,{children:`kd-tabs kd-tabs--sm-horizontal`}),`
does it in two classes: a column above 600px, the row at 600px and below, no media query of
your own. The full set is `,(0,h.jsx)(n.code,{children:`kd-tabs--xxs-horizontal`}),` through `,(0,h.jsx)(n.code,{children:`kd-tabs--xl-horizontal`}),`, from
the same loop that produces the `,(0,h.jsx)(n.code,{children:`kd-d-{bp}-*`}),` display utilities.`]}),`
`,(0,h.jsx)(i,{of:d}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[`Read the direction the way you read the display utilities: these respond down, so
`,(0,h.jsx)(n.code,{children:`kd-tabs--md-horizontal`}),` means horizontal at 768px and below, not above. The widths are
350px for `,(0,h.jsx)(n.code,{children:`xxs`}),`, 480px for `,(0,h.jsx)(n.code,{children:`xs`}),`, 600px for `,(0,h.jsx)(n.code,{children:`sm`}),`, 768px for `,(0,h.jsx)(n.code,{children:`md`}),`, 945px for `,(0,h.jsx)(n.code,{children:`lg`}),` and 1080px
for `,(0,h.jsx)(n.code,{children:`xl`}),`. Narrow the browser past 600px to watch this one turn.`]}),`
`]}),`
`,(0,h.jsxs)(n.p,{children:[`Do not carry `,(0,h.jsx)(n.code,{children:`kd-tabs--horizontal`}),` alongside one of these. Below the breakpoint the two set
the same properties, and above it the unconditional class is the only one left applying, so
the strip is a row at every width and the responsive class has bought you nothing.`]}),`
`,(0,h.jsx)(n.h2,{id:`the-aria-contract`,children:`The ARIA contract`}),`
`,(0,h.jsxs)(n.p,{children:[`The strip is a row of plain buttons, so nothing about it announces itself as a tab set
until you say so. The root takes `,(0,h.jsx)(n.code,{children:`role="tablist"`}),` and an `,(0,h.jsx)(n.code,{children:`aria-orientation`}),` matching the
variation you used. Each button takes `,(0,h.jsx)(n.code,{children:`role="tab"`}),` and `,(0,h.jsx)(n.code,{children:`aria-selected`}),`, and points at its
panel with `,(0,h.jsx)(n.code,{children:`aria-controls`}),`. The panel is any element you like with `,(0,h.jsx)(n.code,{children:`role="tabpanel"`}),`,
labelled back by `,(0,h.jsx)(n.code,{children:`aria-labelledby`}),`.`]}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsxs)(n.blockquote,{children:[`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`.kd-active`}),` carries the whole visual state: nothing in the CSS reads `,(0,h.jsx)(n.code,{children:`aria-selected`}),`.
The two are separate switches and you have to move them together, or a sighted reader
and a screen reader will be told different things.`]}),`
`]}),`
`,(0,h.jsxs)(n.p,{children:[`The hover, focus and active rule ends in `,(0,h.jsx)(n.code,{children:`outline: none`}),`, so a focused tab is marked by
the accent rule rather than a focus ring. That is deliberate, and it is the second reason
`,(0,h.jsx)(n.code,{children:`.kd-active`}),` has to stay accurate: it is the only mark left once focus moves elsewhere.`]}),`
`,(0,h.jsxs)(n.p,{children:[`A responsive variation puts one attribute against two layouts, since `,(0,h.jsx)(n.code,{children:`aria-orientation`}),` is
markup and cannot follow a media query. Either set it to the layout the strip lives in most
of the time and leave it, or move it from a `,(0,h.jsx)(n.code,{children:`matchMedia`}),` listener next to the rest of your
tab wiring. The `,(0,h.jsx)(n.code,{children:`kd-tabs--sm-horizontal`}),` demo further up declares `,(0,h.jsx)(n.code,{children:`vertical`}),`, matching the
wide layout it starts in.`]}),`
`,(0,h.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,h.jsxs)(n.p,{children:[(0,h.jsx)(n.code,{children:`--kd-tabs-line`}),`, `,(0,h.jsx)(n.code,{children:`--kd-tabs-line-active`}),`, `,(0,h.jsx)(n.code,{children:`--kd-tab-height`}),` and `,(0,h.jsx)(n.code,{children:`--kd-tab-padding-x`}),` are
declared on the block. Note the split in the names: the two colours belong to the strip,
the height and padding belong to a tab. Both spellings are public API.`]})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=r(),n(),o(),s()})))()}g();export{m as default};
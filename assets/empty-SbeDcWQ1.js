import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-CxskzV48.js";import{a as s,i as c,n as l,r as u,t as d}from"./empty.stories-BH2ypeSX.js";function f(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(n.h1,{id:`empty`,children:`Empty`}),`
`,(0,m.jsx)(n.p,{children:`The screen a route falls back to when there is nothing to render: a 404, a deleted record,
a search that found no rows. It is a centred flex column with two named elements, and it
carries no height of its own, so it sits in whatever box you give it.`}),`
`,(0,m.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:`kd-empty__code`}),` is the status line, accent coloured and pinned at `,(0,m.jsx)(n.code,{children:`--kd-font-size-xl`}),`.
`,(0,m.jsx)(n.code,{children:`kd-empty__title`}),` is the message; it sets spacing and line height only, so the heading
level you pick decides its size. End with a `,(0,m.jsx)(n.code,{children:`kd-btn`}),` so the page is not a dead end: the
button is usually an anchor here, and `,(0,m.jsx)(n.code,{children:`kd-btn`}),` already cancels the sliding underline the
elements layer puts on bare links.`]}),`
`,(0,m.jsx)(i,{of:d}),`
`,(0,m.jsx)(n.h2,{id:`typewriter-title`,children:`Typewriter title`}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:`kd-typewriter`}),` types the line out by animating its width in discrete steps, with a caret
blinking on the trailing border. Set `,(0,m.jsx)(n.code,{children:`--kd-typewriter-steps`}),` to the character count of the
string so each step lands on exactly one letter; leave it at the default 30 for a shorter
line and the steps land mid glyph, which reads as a stutter rather than as typing.`]}),`
`,(0,m.jsx)(i,{of:u}),`
`,(0,m.jsxs)(n.blockquote,{children:[`
`,(0,m.jsxs)(n.p,{children:[`The effect depends on `,(0,m.jsx)(n.code,{children:`overflow: hidden`}),` and `,(0,m.jsx)(n.code,{children:`white-space: nowrap`}),`, so the line cannot
wrap. Keep it to a few words, or it runs off the side of a narrow screen instead of
breaking.`]}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`full-height`,children:`Full height`}),`
`,(0,m.jsxs)(n.p,{children:[`An empty state that centres inside a short box looks like a mistake, so give it the
viewport: `,(0,m.jsx)(n.code,{children:`kd-section`}),` for the padding, `,(0,m.jsx)(n.code,{children:`kd-h-viewport`}),` for the height. That utility is
`,(0,m.jsx)(n.code,{children:`calc(100dvh - var(--kd-scroll-offset))`}),`, and `,(0,m.jsx)(n.code,{children:`--kd-scroll-offset`}),` is
`,(0,m.jsx)(n.code,{children:`--kd-navbar-height`}),` plus one space step, the same number the reset already uses for
`,(0,m.jsx)(n.code,{children:`scroll-padding-top`}),`. `,(0,m.jsx)(n.code,{children:`kd-h-screen`}),` is a flat `,(0,m.jsx)(n.code,{children:`100dvh`}),`, which on any page with fixed
chrome is one header too tall: the content centres below the middle and the page grows a
scrollbar it has no content for.`]}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsxs)(n.blockquote,{children:[`
`,(0,m.jsx)(n.p,{children:`The demo pins a height inline so this page stays short, and the strip above stands in
for the fixed header. On a real page nothing sets a height at all; the class measures
the viewport itself.`}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:`.kd-empty`}),` declares no custom properties of its own: it is spacing and alignment on top
of tokens, and the knobs belong to the pieces it composes with.
`,(0,m.jsx)(n.code,{children:`--kd-typewriter-steps`}),` and `,(0,m.jsx)(n.code,{children:`--kd-typewriter-duration`}),` are declared on `,(0,m.jsx)(n.code,{children:`kd-typewriter`}),`, so
reassign them on the title element itself. `,(0,m.jsx)(n.code,{children:`--kd-scroll-offset`}),` is derived on `,(0,m.jsx)(n.code,{children:`:root`}),` from
`,(0,m.jsx)(n.code,{children:`--kd-navbar-height`}),`, so a project sets that one number and the height utility and the
scroll padding both follow.`]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=r(),n(),o(),s()})))()}h();export{p as default};
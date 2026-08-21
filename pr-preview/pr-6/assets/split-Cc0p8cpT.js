import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-dp0Is1p_.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./split.stories-DFoxGIwl.js";function h(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:c}),`
`,(0,_.jsx)(n.h1,{id:`split`,children:`Split`}),`
`,(0,_.jsx)(n.p,{children:`Two columns, a wide one for content and a narrower one for an aside, that fold into a
single column once you ask them to. It is the About section shape, and it recurs on nearly
every marketing page ever written.`}),`
`,(0,_.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-split`}),` is a grid at `,(0,_.jsx)(n.code,{children:`3fr 2fr`}),` with `,(0,_.jsx)(n.code,{children:`place-items: var(--kd-split-align)`}),`, which starts
at `,(0,_.jsx)(n.code,{children:`center`}),`, so the two children sit centred in their tracks rather than stretching to
match each other's height. Anything can be a child; the block only owns the tracks.`]}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(n.h2,{id:`collapse`,children:`Collapse`}),`
`,(0,_.jsxs)(n.p,{children:[`A bare `,(0,_.jsx)(n.code,{children:`kd-split`}),` never collapses: it holds both columns at every width. Stacking is opt in
through `,(0,_.jsx)(n.code,{children:`kd-split--xxs`}),`, `,(0,_.jsx)(n.code,{children:`kd-split--xs`}),`, `,(0,_.jsx)(n.code,{children:`kd-split--sm`}),`, `,(0,_.jsx)(n.code,{children:`kd-split--md`}),`, `,(0,_.jsx)(n.code,{children:`kd-split--lg`}),` and
`,(0,_.jsx)(n.code,{children:`kd-split--xl`}),`, each of which re-points `,(0,_.jsx)(n.code,{children:`--kd-split-columns`}),` to `,(0,_.jsx)(n.code,{children:`1fr`}),` at and below its own
breakpoint. `,(0,_.jsx)(n.code,{children:`class="kd-split kd-split--md"`}),` is the common pairing.`]}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(n.p,{children:`This used to be a single query at 768px baked into the block. That meant the component
could serve exactly one layout, and a second two column section that needed to collapse at
a different width could not use it at all.`}),`
`,(0,_.jsx)(n.h2,{id:`choosing-the-breakpoint`,children:`Choosing the breakpoint`}),`
`,(0,_.jsx)(n.p,{children:`Pick the width at which the aside stops earning its column rather than the width of any
particular device. Narrow the browser past 1080px, 768px and 480px in turn to watch these
three stack one after another.`}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsx)(n.h2,{id:`ratios`,children:`Ratios`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`--kd-split-columns`}),` takes any track list, so `,(0,_.jsx)(n.code,{children:`1fr 1fr`}),`, `,(0,_.jsx)(n.code,{children:`2fr 1fr`}),` and anything else needs
no new variation class. The collapse classes re-point that same property, so the ratio and
the collapse are one declaration rather than two rules fighting over
`,(0,_.jsx)(n.code,{children:`grid-template-columns`}),`: below the breakpoint the variation wins, as long as the ratio does
not outrank it in the cascade.`]}),`
`,(0,_.jsx)(i,{of:s}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[`An inline `,(0,_.jsx)(n.code,{children:`style`}),` declaration outranks every rule in the stylesheet, media query
included, so a ratio written in the `,(0,_.jsx)(n.code,{children:`style`}),` attribute holds both columns at every width
even with a collapse class alongside it. The ratios above and the playground below set
the ratio in the attribute and carry no collapse class, so they hold two columns however
narrow you go either way. Put the ratio in a rule when the block also has to collapse, and
keep the attribute for one-offs.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`align`,children:`Align`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`--kd-split-align`}),` also starts at `,(0,_.jsx)(n.code,{children:`center`}),`, which is right for two blocks of roughly equal
height and wrong for everything else. A tab strip beside a description wants `,(0,_.jsx)(n.code,{children:`start`}),` so the
first tab and the first line begin together; the keyword feeds `,(0,_.jsx)(n.code,{children:`place-items`}),`, so it applies
on both axes at once.`]}),`
`,(0,_.jsx)(i,{of:m}),`
`,(0,_.jsx)(n.h2,{id:`reverse`,children:`Reverse`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-split--reverse`}),` puts `,(0,_.jsx)(n.code,{children:`order: 1`}),` on the first child, which sends it to the end of the
visual sequence. Use it to alternate the aside from side to side down a page.`]}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`order`}),` changes paint order only. The DOM is untouched, so the reading order for
assistive technology and the tab order both stay exactly as written. Keep the markup in
the order the content should be read in and let the class handle the appearance.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`--kd-split-columns`}),`, `,(0,_.jsx)(n.code,{children:`--kd-split-gap`}),` and `,(0,_.jsx)(n.code,{children:`--kd-split-align`}),` are declared on the block. The
gap defaults to `,(0,_.jsx)(n.code,{children:`3rem`}),`, step 5 of the space scale, and all three can be reassigned inline
for a one-off.`]})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=r(),n(),o(),p()})))()}v();export{g as default};
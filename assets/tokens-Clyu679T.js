import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-HjjrTFxE.js";import{n as s,t as c}from"./kostad-brand-tokens-1q3NGCo8.js";import{a as l,c as u,i as d,n as f,o as p,r as m,s as h,t as g}from"./tokens.stories-CBbi0JUM.js";function _(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,...t(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a,{of:u}),`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,(0,y.jsx)(n.h1,{id:`tokens`,children:`Tokens`}),`
`,(0,y.jsxs)(n.p,{children:[`Every global value in the package is a CSS custom property named `,(0,y.jsx)(n.code,{children:`--kd-*`}),`, declared in
one place: `,(0,y.jsx)(n.code,{children:`scss/variables/_root.scss`}),`. Nothing else in the tree declares a global token,
so this page is the whole surface.`]}),`
`,(0,y.jsx)(n.p,{children:`These names are public API. Consumers reference them from stylesheets and from
JavaScript, where a rename cannot be caught by a compiler, so treat renaming one as a
breaking change rather than a refactor.`}),`
`,(0,y.jsxs)(n.p,{children:[`The tables below are generated from `,(0,y.jsx)(n.code,{children:`dist/kostad-brand-tokens.json`}),`, which the build
derives from the compiled CSS. They cannot drift from what actually ships. Current
version: `,(0,y.jsx)(`code`,{children:s.version}),`.`]}),`
`,(0,y.jsx)(n.h2,{id:`how-theming-works`,children:`How theming works`}),`
`,(0,y.jsxs)(n.p,{children:[`Dark is the default. The dark values are declared on `,(0,y.jsx)(n.code,{children:`:root`}),` itself, so a page that sets
no attribute at all is already dark.`]}),`
`,(0,y.jsxs)(n.p,{children:[`Adding `,(0,y.jsx)(n.code,{children:`data-theme="light"`}),` swaps in the light values, and `,(0,y.jsx)(n.code,{children:`data-theme="dark"`}),` puts them
back. Neither selector is stronger than the other, so the order they appear in the
stylesheet is what decides: the light block is written last, which is why it takes
effect.`]}),`
`,(0,y.jsxs)(n.p,{children:[`Everything on this page below the theme tables is theme-independent and lives in a plain
`,(0,y.jsx)(n.code,{children:`:root`}),` block.`]}),`
`,(0,y.jsx)(n.h2,{id:`surfaces`,children:`Surfaces`}),`
`,(0,y.jsx)(T,{names:E(/^bg/)}),`
`,(0,y.jsx)(n.h2,{id:`text`,children:`Text`}),`
`,(0,y.jsx)(T,{names:E(/^text-/)}),`
`,(0,y.jsx)(n.h2,{id:`borders`,children:`Borders`}),`
`,(0,y.jsx)(T,{names:E(/^border/)}),`
`,(0,y.jsx)(n.h2,{id:`intent`,children:`Intent`}),`
`,(0,y.jsx)(T,{names:E(/^(accent|success|warning|danger)/)}),`
`,(0,y.jsxs)(n.blockquote,{children:[`
`,(0,y.jsxs)(n.p,{children:[(0,y.jsx)(n.code,{children:`success`}),` resolves to `,(0,y.jsx)(n.code,{children:`var(--kd-accent)`}),` in both themes, so it is not an independent
colour. Anything using it renders identically to the accent.`]}),`
`]}),`
`,(0,y.jsx)(n.h2,{id:`selection-scrollbar-and-code`,children:`Selection, scrollbar and code`}),`
`,(0,y.jsx)(T,{names:E(/^(selection|scrollbar|code)/)}),`
`,(0,y.jsx)(n.h2,{id:`shadows`,children:`Shadows`}),`
`,(0,y.jsx)(T,{names:E(/^shadow-/)}),`
`,(0,y.jsx)(i,{of:m}),`
`,(0,y.jsx)(n.h2,{id:`palette`,children:`Palette`}),`
`,(0,y.jsxs)(n.p,{children:[`The raw palette sits in `,(0,y.jsx)(n.code,{children:`:root`}),` and does not change with the theme. The theme roles above
are built from these, and each also has an `,(0,y.jsx)(n.code,{children:`-rgb`}),` triplet for use inside `,(0,y.jsx)(n.code,{children:`rgb()`}),`.`]}),`
`,(0,y.jsx)(i,{of:g}),`
`,(0,y.jsx)(w,{rows:x(`color-`).filter(([e])=>!e.endsWith(`-rgb`))}),`
`,(0,y.jsx)(n.h2,{id:`syntax-tokens`,children:`Syntax tokens`}),`
`,(0,y.jsxs)(n.p,{children:[`The `,(0,y.jsx)(n.code,{children:`--kd-code-token-*`}),` block is the highlighter palette. It sits with the raw colours
rather than in the theme, because the code surface carries its own contrast through the
`,(0,y.jsx)(n.code,{children:`code-bg`}),` and `,(0,y.jsx)(n.code,{children:`code-fg`}),` roles: the tokens painted on that surface read the same in either
theme and do not need a second set of values.`]}),`
`,(0,y.jsxs)(n.p,{children:[`Twenty names cover what a highlighter actually distinguishes. They are read in one
place, `,(0,y.jsx)(n.a,{href:`?path=/docs/elements-syntax--docs`,children:`Syntax`}),`, which maps them onto the `,(0,y.jsx)(n.code,{children:`hljs-*`}),`
classes. Repoint one here and every code block in the build follows.`]}),`
`,(0,y.jsx)(w,{rows:x(`code-token-`)}),`
`,(0,y.jsx)(n.h2,{id:`spacing`,children:`Spacing`}),`
`,(0,y.jsx)(n.p,{children:`One scale, and every margin, padding, gap and gutter utility is generated from it. A step
is added to the Sass map once and arrives as a token plus the whole family of utilities
that read it, which is why the scale is the only place a distance gets decided.`}),`
`,(0,y.jsx)(i,{of:d}),`
`,(0,y.jsx)(w,{rows:x(`space-`)}),`
`,(0,y.jsx)(n.h3,{id:`the-top-of-the-scale`,children:`The top of the scale`}),`
`,(0,y.jsxs)(n.p,{children:[`The swatches above stop at `,(0,y.jsx)(n.code,{children:`--kd-space-5`}),`, which used to be the end of the scale. 3rem is
48px, and because `,(0,y.jsx)(n.code,{children:`.kd-gutter-*`}),` is generated from the same map, 48px was also the widest
gutter a container could be given. A page shell with a wider gutter than that could not
use `,(0,y.jsx)(n.code,{children:`.kd-container`}),` at all and had to be hand rolled alongside the package instead of out
of it.`]}),`
`,(0,y.jsxs)(n.p,{children:[(0,y.jsx)(n.code,{children:`--kd-space-6`}),` is 4rem, filling the jump from 48px to the next doubling at 96px.
`,(0,y.jsx)(n.code,{children:`--kd-space-7`}),` is 5.625rem, which is 90px: the page shell gutter the scale was extended
for, now reachable as `,(0,y.jsx)(n.code,{children:`.kd-gutter-7`}),` and as every other utility at step 7.`]}),`
`,(0,y.jsx)(i,{of:l}),`
`,(0,y.jsxs)(n.blockquote,{children:[`
`,(0,y.jsx)(n.p,{children:`5.625rem is a measurement rather than a ratio. It is on the scale so a real shell can be
expressed in the same vocabulary as everything else, not because it continues the
progression.`}),`
`]}),`
`,(0,y.jsx)(n.h2,{id:`typography`,children:`Typography`}),`
`,(0,y.jsx)(i,{of:p}),`
`,(0,y.jsx)(w,{rows:x(`font-`)}),`
`,(0,y.jsx)(n.h3,{id:`line-height`,children:`Line height`}),`
`,(0,y.jsx)(w,{rows:x(`line-height-`)}),`
`,(0,y.jsx)(n.h2,{id:`radius-and-border-width`,children:`Radius and border width`}),`
`,(0,y.jsx)(i,{of:f}),`
`,(0,y.jsx)(w,{rows:x(`radius-`,`border-width-`)}),`
`,(0,y.jsx)(n.h2,{id:`motion`,children:`Motion`}),`
`,(0,y.jsx)(w,{rows:x(`easing`,`duration-`,`transition`)}),`
`,(0,y.jsx)(n.h2,{id:`focus-ring-and-pop`,children:`Focus ring and pop`}),`
`,(0,y.jsxs)(n.p,{children:[(0,y.jsx)(n.code,{children:`--kd-focus-ring-color`}),` and the pop tokens are declared in the theme-independent block,
so their accent is substituted once at the root. A nested `,(0,y.jsx)(n.code,{children:`[data-theme]`}),` island does not
re-resolve them, unlike the shadow tokens above.`]}),`
`,(0,y.jsx)(w,{rows:x(`focus-ring-`,`shadow-pop`,`translate-pop`)}),`
`,(0,y.jsx)(n.h2,{id:`layout`,children:`Layout`}),`
`,(0,y.jsx)(w,{rows:x(`breakpoint-`,`container-`,`measure-`,`textarea-`)}),`
`,(0,y.jsx)(n.h2,{id:`page-shell`,children:`Page shell`}),`
`,(0,y.jsx)(w,{rows:x(`navbar-`,`scroll-`)}),`
`,(0,y.jsxs)(n.p,{children:[(0,y.jsx)(n.code,{children:`--kd-navbar-height`}),` is the declared height of the fixed chrome at the top of the page.
`,(0,y.jsx)(n.code,{children:`--kd-scroll-offset`}),` is that height plus one space step, so an anchor target lands clear of
the header rather than under it.`]}),`
`,(0,y.jsxs)(n.p,{children:[`The reset applies it as `,(0,y.jsx)(n.code,{children:`scroll-padding-top`}),` on `,(0,y.jsx)(n.code,{children:`html`}),`, where it used to read
`,(0,y.jsx)(n.code,{children:`--kd-space-5`}),`: a spacer that had nothing to do with header height, so every site with
fixed chrome overrode it. `,(0,y.jsx)(n.code,{children:`.kd-h-viewport`}),` reads it too, as
`,(0,y.jsx)(n.code,{children:`calc(100dvh - var(--kd-scroll-offset))`}),`, and `,(0,y.jsx)(n.code,{children:`.kd-navbar`}),` takes its height from the same
token. Set `,(0,y.jsx)(n.code,{children:`--kd-navbar-height`}),` once and all three follow. A project with no fixed header
sets `,(0,y.jsx)(n.code,{children:`--kd-navbar-height: 0px`}),`: the offset collapses to the space step alone, so anchors
land one step clear and `,(0,y.jsx)(n.code,{children:`.kd-h-viewport`}),` is `,(0,y.jsx)(n.code,{children:`100dvh`}),` less that step.`]}),`
`,(0,y.jsxs)(n.blockquote,{children:[`
`,(0,y.jsxs)(n.p,{children:[`These have to be on `,(0,y.jsx)(n.code,{children:`:root`}),`. Custom properties inherit down the tree, so one declared on
`,(0,y.jsx)(n.code,{children:`.kd-navbar`}),` would be invisible to the `,(0,y.jsx)(n.code,{children:`html`}),` element that needs it, no matter how the
selectors were ordered.`]}),`
`]}),`
`,(0,y.jsxs)(n.blockquote,{children:[`
`,(0,y.jsxs)(n.p,{children:[`The space step inside `,(0,y.jsx)(n.code,{children:`--kd-scroll-offset`}),` is baked in as a literal `,(0,y.jsx)(n.code,{children:`1rem`}),` at build time,
not as `,(0,y.jsx)(n.code,{children:`var(--kd-space-3)`}),`. Reassigning the spacer at runtime moves the utilities but not
this offset.`]}),`
`]}),`
`,(0,y.jsx)(n.h2,{id:`z-index`,children:`Z-index`}),`
`,(0,y.jsx)(n.p,{children:`The scale is named rather than numeric so that layering intent survives refactoring.`}),`
`,(0,y.jsx)(w,{rows:x(`z-`)}),`
`,(0,y.jsx)(n.h2,{id:`opacity`,children:`Opacity`}),`
`,(0,y.jsx)(w,{rows:x(`opacity-`)})]})}function v(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,y.jsx)(n,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{y=r(),n(),o(),c(),h(),b=s.prefix,x=(...e)=>Object.entries(s.token).filter(([t])=>e.some(e=>t===e||t.startsWith(e))),S=e=>/^(#|rgb|hsl)/.test(e),C=({value:e})=>S(e)?(0,y.jsx)(`span`,{style:{display:`inline-block`,width:`1.25rem`,height:`1.25rem`,verticalAlign:`middle`,borderRadius:`3px`,border:`1px solid var(--kd-border)`,background:e}}):null,w=({rows:e})=>(0,y.jsxs)(`table`,{children:[(0,y.jsx)(`thead`,{children:(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{children:`Token`}),(0,y.jsx)(`th`,{children:`Value`})]})}),(0,y.jsx)(`tbody`,{children:e.map(([e,t])=>(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`td`,{children:(0,y.jsxs)(`code`,{children:[`--`,b,e]})}),(0,y.jsxs)(`td`,{children:[(0,y.jsx)(C,{value:t}),` `,(0,y.jsx)(`code`,{children:t})]})]},e))})]}),T=({names:e})=>(0,y.jsxs)(`table`,{children:[(0,y.jsx)(`thead`,{children:(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{children:`Token`}),(0,y.jsx)(`th`,{children:`Dark`}),(0,y.jsx)(`th`,{children:`Light`})]})}),(0,y.jsx)(`tbody`,{children:e.map(e=>(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`td`,{children:(0,y.jsxs)(`code`,{children:[`--`,b,e]})}),(0,y.jsxs)(`td`,{children:[(0,y.jsx)(C,{value:s.theme.dark[e]}),` `,(0,y.jsx)(`code`,{children:s.theme.dark[e]})]}),(0,y.jsxs)(`td`,{children:[(0,y.jsx)(C,{value:s.theme.light[e]}),` `,(0,y.jsx)(`code`,{children:s.theme.light[e]})]})]},e))})]}),E=e=>Object.keys(s.theme.dark).filter(t=>e.test(t))})))()}D();export{C as Chip,T as Theme,w as Tokens,v as default,x as group,S as isColor,b as p,E as themeNames};
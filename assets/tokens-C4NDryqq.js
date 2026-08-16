import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DcXKNSZI.js";import{n as s,t as c}from"./kostad-brand-tokens-EDM7D1Qw.js";import{a as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./tokens.stories-CxtZ3oW-.js";function g(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a,{of:m}),`
`,`
`,`
`,`
`,`
`,`
`,`
`,`
`,(0,v.jsx)(n.h1,{id:`tokens`,children:`Tokens`}),`
`,(0,v.jsxs)(n.p,{children:[`Every value in the package is a CSS custom property named `,(0,v.jsx)(n.code,{children:`--kd-*`}),`, declared in one
place: `,(0,v.jsx)(n.code,{children:`scss/variables/_root.scss`}),`. Nothing else in the tree declares a global token, so
this page is the whole surface.`]}),`
`,(0,v.jsx)(n.p,{children:`These names are public API. Consumers reference them from stylesheets and from
JavaScript, where a rename cannot be caught by a compiler, so treat renaming one as a
breaking change rather than a refactor.`}),`
`,(0,v.jsxs)(n.p,{children:[`The tables below are generated from `,(0,v.jsx)(n.code,{children:`dist/kostad-brand-tokens.json`}),`, which the build
derives from the compiled CSS. They cannot drift from what actually ships. Current
version: `,(0,v.jsx)(`code`,{children:s.version}),`.`]}),`
`,(0,v.jsx)(n.h2,{id:`how-theming-works`,children:`How theming works`}),`
`,(0,v.jsxs)(n.p,{children:[`Dark is the default. The dark values are declared on `,(0,v.jsx)(n.code,{children:`:root`}),` itself, so a page that sets
no attribute at all is already dark.`]}),`
`,(0,v.jsxs)(n.p,{children:[`Adding `,(0,v.jsx)(n.code,{children:`data-theme="light"`}),` swaps in the light values, and `,(0,v.jsx)(n.code,{children:`data-theme="dark"`}),` puts them
back. Neither selector is stronger than the other, so the order they appear in the
stylesheet is what decides: the light block is written last, which is why it takes
effect.`]}),`
`,(0,v.jsxs)(n.p,{children:[`Everything on this page below the theme tables is theme-independent and lives in a plain
`,(0,v.jsx)(n.code,{children:`:root`}),` block.`]}),`
`,(0,v.jsx)(n.h2,{id:`surfaces`,children:`Surfaces`}),`
`,(0,v.jsx)(w,{names:T(/^bg/)}),`
`,(0,v.jsx)(n.h2,{id:`text`,children:`Text`}),`
`,(0,v.jsx)(w,{names:T(/^text-/)}),`
`,(0,v.jsx)(n.h2,{id:`borders`,children:`Borders`}),`
`,(0,v.jsx)(w,{names:T(/^border/)}),`
`,(0,v.jsx)(n.h2,{id:`intent`,children:`Intent`}),`
`,(0,v.jsx)(w,{names:T(/^(accent|success|warning|danger)/)}),`
`,(0,v.jsxs)(n.blockquote,{children:[`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`success`}),` resolves to `,(0,v.jsx)(n.code,{children:`var(--kd-accent)`}),` in both themes, so it is not an independent
colour. Anything using it renders identically to the accent.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`selection-scrollbar-and-code`,children:`Selection, scrollbar and code`}),`
`,(0,v.jsx)(w,{names:T(/^(selection|scrollbar|code)/)}),`
`,(0,v.jsx)(n.h2,{id:`shadows`,children:`Shadows`}),`
`,(0,v.jsx)(w,{names:T(/^shadow-/)}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(n.h2,{id:`palette`,children:`Palette`}),`
`,(0,v.jsxs)(n.p,{children:[`The raw palette sits in `,(0,v.jsx)(n.code,{children:`:root`}),` and does not change with the theme. The theme roles above
are built from these, and each also has an `,(0,v.jsx)(n.code,{children:`-rgb`}),` triplet for use inside `,(0,v.jsx)(n.code,{children:`rgb()`}),`.`]}),`
`,(0,v.jsx)(i,{of:h}),`
`,(0,v.jsx)(C,{rows:b(`color-`).filter(([e])=>!e.endsWith(`-rgb`))}),`
`,(0,v.jsx)(n.h2,{id:`spacing`,children:`Spacing`}),`
`,(0,v.jsx)(i,{of:u}),`
`,(0,v.jsx)(C,{rows:b(`space-`)}),`
`,(0,v.jsx)(n.h2,{id:`typography`,children:`Typography`}),`
`,(0,v.jsx)(i,{of:l}),`
`,(0,v.jsx)(C,{rows:b(`font-`)}),`
`,(0,v.jsx)(n.h3,{id:`line-height`,children:`Line height`}),`
`,(0,v.jsx)(C,{rows:b(`line-height-`)}),`
`,(0,v.jsx)(n.h2,{id:`radius-and-border-width`,children:`Radius and border width`}),`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsx)(C,{rows:b(`radius-`,`border-width-`)}),`
`,(0,v.jsx)(n.h2,{id:`motion`,children:`Motion`}),`
`,(0,v.jsx)(C,{rows:b(`easing`,`duration-`,`transition`)}),`
`,(0,v.jsx)(n.h2,{id:`focus-ring-and-pop`,children:`Focus ring and pop`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`--kd-focus-ring-color`}),` and the pop tokens are declared in the theme-independent block,
so their accent is substituted once at the root. A nested `,(0,v.jsx)(n.code,{children:`[data-theme]`}),` island does not
re-resolve them, unlike the shadow tokens above.`]}),`
`,(0,v.jsx)(C,{rows:b(`focus-ring-`,`shadow-pop`,`translate-pop`)}),`
`,(0,v.jsx)(n.h2,{id:`layout`,children:`Layout`}),`
`,(0,v.jsx)(C,{rows:b(`breakpoint-`,`container-`,`measure-`,`textarea-`)}),`
`,(0,v.jsx)(n.h2,{id:`z-index`,children:`Z-index`}),`
`,(0,v.jsx)(n.p,{children:`The scale is named rather than numeric so that layering intent survives refactoring.`}),`
`,(0,v.jsx)(C,{rows:b(`z-`)}),`
`,(0,v.jsx)(n.h2,{id:`opacity`,children:`Opacity`}),`
`,(0,v.jsx)(C,{rows:b(`opacity-`)})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{v=r(),n(),o(),c(),f(),y=s.prefix,b=(...e)=>Object.entries(s.token).filter(([t])=>e.some(e=>t===e||t.startsWith(e))),x=e=>/^(#|rgb|hsl)/.test(e),S=({value:e})=>x(e)?(0,v.jsx)(`span`,{style:{display:`inline-block`,width:`1.25rem`,height:`1.25rem`,verticalAlign:`middle`,borderRadius:`3px`,border:`1px solid var(--kd-border)`,background:e}}):null,C=({rows:e})=>(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`Token`}),(0,v.jsx)(`th`,{children:`Value`})]})}),(0,v.jsx)(`tbody`,{children:e.map(([e,t])=>(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsxs)(`code`,{children:[`--`,y,e]})}),(0,v.jsxs)(`td`,{children:[(0,v.jsx)(S,{value:t}),` `,(0,v.jsx)(`code`,{children:t})]})]},e))})]}),w=({names:e})=>(0,v.jsxs)(`table`,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:`Token`}),(0,v.jsx)(`th`,{children:`Dark`}),(0,v.jsx)(`th`,{children:`Light`})]})}),(0,v.jsx)(`tbody`,{children:e.map(e=>(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:(0,v.jsxs)(`code`,{children:[`--`,y,e]})}),(0,v.jsxs)(`td`,{children:[(0,v.jsx)(S,{value:s.theme.dark[e]}),` `,(0,v.jsx)(`code`,{children:s.theme.dark[e]})]}),(0,v.jsxs)(`td`,{children:[(0,v.jsx)(S,{value:s.theme.light[e]}),` `,(0,v.jsx)(`code`,{children:s.theme.light[e]})]})]},e))})]}),T=e=>Object.keys(s.theme.dark).filter(t=>e.test(t))})))()}E();export{S as Chip,w as Theme,C as Tokens,_ as default,b as group,x as isColor,y as p,T as themeNames};
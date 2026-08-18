import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-DmHNhuxI.js";import{a as s,c,i as l,n as u,o as d,r as f,s as p,t as m}from"./navbar.stories-CDkdshNA.js";function h(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{of:c}),`
`,(0,_.jsx)(n.h1,{id:`navbar`,children:`Navbar`}),`
`,(0,_.jsxs)(n.p,{children:[`The page header: brand on one side, navigation on the other, pinned to the top of the
viewport at `,(0,_.jsx)(n.code,{children:`--kd-z-modal`}),`. It sits on the alpha background with a backdrop blur, so
content scrolling underneath stays visible but unreadable.`]}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsxs)(n.p,{children:[`The real bar is `,(0,_.jsx)(n.code,{children:`position: fixed`}),`. Every demo below is boxed inside a bordered wrapper
and switched to `,(0,_.jsx)(n.code,{children:`position: absolute`}),` so it stays inside the canvas instead of floating
over this page. The striped ground is there to show the blur.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-navbar__brand`}),` is the logo slot and does not shrink; `,(0,_.jsx)(n.code,{children:`kd-navbar__menu`}),` is the list.
Both cancel the sliding underline the elements layer puts on a bare anchor, so no reset
is needed at the call site.`]}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(n.h2,{id:`scrolled`,children:`Scrolled`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-navbar--scrolled`}),` adds `,(0,_.jsx)(n.code,{children:`--kd-shadow-md`}),` to lift the bar off the page once it has
something behind it. Toggle it from a scroll listener at a few pixels of offset; the bar
already carries `,(0,_.jsx)(n.code,{children:`--kd-transition`}),`, so the shadow fades in on its own.`]}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(n.h2,{id:`hidden`,children:`Hidden`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-navbar--hidden`}),` translates the bar up by exactly `,(0,_.jsx)(n.code,{children:`--kd-navbar-height`}),`, so it clears
the viewport with no sliver left behind. Add it on scroll down, remove it on scroll up,
and combine it with `,(0,_.jsx)(n.code,{children:`--scrolled`}),` for the usual hide-and-reveal header.`]}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(n.h2,{id:`bare`,children:`Bare`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-navbar--bare`}),` drops the background, the blur and the shadow in one class. It is for a
hero that should read as full bleed: start bare, and swap the class off at the first
scroll event.`]}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsx)(n.h2,{id:`menu-and-burger`,children:`Menu and burger`}),`
`,(0,_.jsxs)(n.p,{children:[`The responsive swap costs the consumer nothing. `,(0,_.jsx)(n.code,{children:`kd-d-md-none`}),` and `,(0,_.jsx)(n.code,{children:`kd-d-md-block`}),` are
max-width utilities, so at 768px and below the menu hides and the burger appears with no
media query written anywhere in the project. Put `,(0,_.jsx)(n.code,{children:`kd-d-md-none`}),` on the menu,
`,(0,_.jsx)(n.code,{children:`kd-d-none kd-d-md-block`}),` on the burger, and stop there.`]}),`
`,(0,_.jsx)(i,{of:s}),`
`,(0,_.jsxs)(n.blockquote,{children:[`
`,(0,_.jsx)(n.p,{children:`Drag the window narrower to see it happen. The utilities read the viewport, not the
canvas, so a docs pane resize will not trigger them on its own.`}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`active-link`,children:`Active link`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`kd-active`}),` is the current-page state and shares its rule with `,(0,_.jsx)(n.code,{children:`:hover`}),` and
`,(0,_.jsx)(n.code,{children:`:focus-visible`}),`, so the active link and a hovered link land on the same accent colour.
Pair it with `,(0,_.jsx)(n.code,{children:`aria-current="page"`}),`.`]}),`
`,(0,_.jsx)(i,{of:m}),`
`,(0,_.jsx)(n.h2,{id:`height`,children:`Height`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`--kd-navbar-height`}),` is deliberately a `,(0,_.jsx)(n.code,{children:`:root`}),` token rather than a navbar-local property.
`,(0,_.jsx)(n.code,{children:`--kd-scroll-offset`}),` and `,(0,_.jsx)(n.code,{children:`kd-h-viewport`}),` both read it, which is only possible if it lives
above the component: a property declared on `,(0,_.jsx)(n.code,{children:`.kd-navbar`}),` is invisible to `,(0,_.jsx)(n.code,{children:`html`}),`. A project
with no fixed header sets `,(0,_.jsx)(n.code,{children:`--kd-navbar-height: 0px`}),` and the scroll padding and the
viewport helper follow with no other change.`]}),`
`,(0,_.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`--kd-navbar-padding-x`}),`, `,(0,_.jsx)(n.code,{children:`--kd-navbar-bg`}),` and `,(0,_.jsx)(n.code,{children:`--kd-navbar-blur`}),` are declared on the
block, so reassigning any of them on the element restyles that one bar. Height is the
exception: set `,(0,_.jsx)(n.code,{children:`--kd-navbar-height`}),` on `,(0,_.jsx)(n.code,{children:`:root`}),` so everything downstream of it stays in
step.`]})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=r(),n(),o(),p()})))()}v();export{g as default};
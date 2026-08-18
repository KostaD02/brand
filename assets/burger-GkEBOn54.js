import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-BiI4XObh.js";import{a as s,i as c,n as l,r as u,t as d}from"./burger.stories-Y9YovXJ9.js";function f(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a,{of:c}),`
`,(0,m.jsx)(n.h1,{id:`burger`,children:`Burger`}),`
`,(0,m.jsx)(n.p,{children:`The menu button that folds into an X. No SVG, no icon font, no state class: three lines
drawn out of two elements, and the fold is a transform on their pseudo elements.`}),`
`,(0,m.jsx)(n.h2,{id:`closed`,children:`Closed`}),`
`,(0,m.jsxs)(n.p,{children:[`The structure is fixed at exactly two `,(0,m.jsx)(n.code,{children:`kd-burger__bar`}),` children. One is pinned to the
left of the button box, the other to the right, and each draws the middle line itself
while its `,(0,m.jsx)(n.code,{children:`::before`}),` and `,(0,m.jsx)(n.code,{children:`::after`}),` draw the line above and the line below. Two elements,
six segments, three visual lines.`]}),`
`,(0,m.jsx)(i,{of:d}),`
`,(0,m.jsx)(n.h2,{id:`open`,children:`Open`}),`
`,(0,m.jsxs)(n.p,{children:[`The open state keys off `,(0,m.jsx)(n.code,{children:`aria-expanded="true"`}),` on the button rather than a class. The
toggle needs that attribute to be accessible at all, so wiring the visual state to it
means the two can never drift apart: flip the attribute and the icon follows. The middle
pair goes transparent and the four pseudo segments rotate into the X.`]}),`
`,(0,m.jsx)(i,{of:u}),`
`,(0,m.jsxs)(n.blockquote,{children:[`
`,(0,m.jsxs)(n.p,{children:[`Give the button an `,(0,m.jsx)(n.code,{children:`aria-label`}),`, and `,(0,m.jsx)(n.code,{children:`aria-controls`}),` pointing at the id of whatever it
opens. Those are the only two things the consumer has to remember.`]}),`
`]}),`
`,(0,m.jsx)(n.h2,{id:`in-a-navbar`,children:`In a navbar`}),`
`,(0,m.jsxs)(n.p,{children:[`It sits at the end of the bar as the mobile counterpart to `,(0,m.jsx)(n.code,{children:`kd-navbar__menu`}),`. In real
markup it carries `,(0,m.jsx)(n.code,{children:`kd-d-none kd-d-md-block`}),` so it only appears at 768px and below; the
demo drops those utilities so the button is visible here.`]}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:`--kd-burger-size`}),` is the button box, which is the tap target rather than the drawing:
growing it alone gives you more room to hit around the same icon. The glyph itself comes
from `,(0,m.jsx)(n.code,{children:`--kd-burger-bar-width`}),`, `,(0,m.jsx)(n.code,{children:`--kd-burger-bar-height`}),` and `,(0,m.jsx)(n.code,{children:`--kd-burger-bar-gap`}),`, and
`,(0,m.jsx)(n.code,{children:`--kd-burger-color`}),` paints all six segments at once. Scale the box and the bars together
if you want a genuinely larger icon.`]})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=r(),n(),o(),s()})))()}h();export{p as default};
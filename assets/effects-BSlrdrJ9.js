import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-BV3mvVgi.js";import{a as s,c,d as l,f as u,i as d,l as f,n as p,o as m,p as h,r as g,s as _,t as v,u as y}from"./effects.stories-D-ow5wei.js";function b(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,...t(),...e.components};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(a,{of:u}),`
`,(0,S.jsx)(n.h1,{id:`effects`,children:`Effects`}),`
`,(0,S.jsxs)(n.p,{children:[`Shadow, the pop and lift treatments, the accent rail, opacity, transition and interaction
utilities, plus the animation set: `,(0,S.jsx)(n.code,{children:`kd-animate-*`}),`, `,(0,S.jsx)(n.code,{children:`kd-stagger`}),` and `,(0,S.jsx)(n.code,{children:`kd-typewriter`}),`.`]}),`
`,(0,S.jsx)(n.h2,{id:`shadow`,children:`Shadow`}),`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.code,{children:`kd-shadow-{sm|md|lg|side|none}`}),`. The shadow tokens are theme keys, so they soften in the
light theme rather than keeping the dark values.`]}),`
`,(0,S.jsx)(i,{of:f}),`
`,(0,S.jsx)(n.h2,{id:`pop`,children:`Pop`}),`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.code,{children:`kd-pop`}),` and `,(0,S.jsx)(n.code,{children:`kd-pop-lg`}),` apply the signature treatment: on hover and focus the element
lifts by a translate and casts a hard offset shadow with no blur.`]}),`
`,(0,S.jsx)(i,{of:_}),`
`,(0,S.jsxs)(n.blockquote,{children:[`
`,(0,S.jsxs)(n.p,{children:[`The colour comes from `,(0,S.jsx)(n.code,{children:`--kd-shadow-pop-color`}),`, which resolves where it is used, so
setting it on the element retints the shadow. The flat `,(0,S.jsx)(n.code,{children:`--kd-shadow-pop`}),` token does not
consult it, so components reading that token directly cannot be retinted the same way.`]}),`
`]}),`
`,(0,S.jsx)(n.h2,{id:`lift`,children:`Lift`}),`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.code,{children:`kd-lift`}),` is the straight vertical counterpart: 7px up on hover and focus, with the large
soft shadow instead of the hard offset one. Reach for it on a grid of cards where the
diagonal drift of `,(0,S.jsx)(n.code,{children:`kd-pop`}),` would read as wobble. One or the other, never both on the same
element.`]}),`
`,(0,S.jsx)(i,{of:s}),`
`,(0,S.jsx)(n.h2,{id:`opacity`,children:`Opacity`}),`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.code,{children:`kd-opacity-{0|25|50|75|100}`}),`.`]}),`
`,(0,S.jsx)(i,{of:m}),`
`,(0,S.jsxs)(n.blockquote,{children:[`
`,(0,S.jsxs)(n.p,{children:[`The ladder is hardcoded rather than read from the opacity tokens, so
`,(0,S.jsx)(n.code,{children:`--kd-opacity-muted`}),` (0.65) has no matching class.`]}),`
`]}),`
`,(0,S.jsx)(n.h2,{id:`transition`,children:`Transition`}),`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.code,{children:`kd-transition`}),` applies the base transition. `,(0,S.jsx)(n.code,{children:`kd-transition-fast`}),`, `,(0,S.jsx)(n.code,{children:`kd-transition-slow`}),`
and `,(0,S.jsx)(n.code,{children:`kd-transition-none`}),` take the other durations.`]}),`
`,(0,S.jsx)(n.h2,{id:`interaction`,children:`Interaction`}),`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.code,{children:`kd-cursor-{pointer|default|not-allowed|wait|text|grab}`}),`,
`,(0,S.jsx)(n.code,{children:`kd-pointer-{none|auto}`}),` and `,(0,S.jsx)(n.code,{children:`kd-select-{none|text|all}`}),`.`]}),`
`,(0,S.jsxs)(n.blockquote,{children:[`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.code,{children:`kd-pointer-none`}),` also stops hover and focus styles firing, so pairing it with
`,(0,S.jsx)(n.code,{children:`kd-cursor-not-allowed`}),` means the cursor never shows, because the element cannot be hovered at
all. Use one or the other.`]}),`
`]}),`
`,(0,S.jsx)(n.h2,{id:`focus-ring`,children:`Focus ring`}),`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.code,{children:`kd-focus-ring`}),` applies the dashed accent outline on `,(0,S.jsx)(n.code,{children:`:focus-visible`}),`. The reset already
does this globally; the class is for elements that have opted out and need it back.`]}),`
`,(0,S.jsx)(i,{of:g}),`
`,(0,S.jsx)(n.h2,{id:`rail`,children:`Rail`}),`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.code,{children:`kd-rail`}),` draws the 13px accent bar down the leading edge. It is the same mixin `,(0,S.jsx)(n.code,{children:`pre`}),` and
`,(0,S.jsx)(n.code,{children:`kd-teaser`}),` already carry, lifted out so anything else can wear the mark.`]}),`
`,(0,S.jsx)(i,{of:c}),`
`,(0,S.jsxs)(n.blockquote,{children:[`
`,(0,S.jsxs)(n.p,{children:[`The bar is a `,(0,S.jsx)(n.code,{children:`::before`}),` sitting on top of the box, not a border, so it does not take up
any space. Pad the leading edge past 13px yourself or the first character sits under it.`]}),`
`]}),`
`,(0,S.jsx)(n.h2,{id:`animations`,children:`Animations`}),`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.code,{children:`kd-animate-{fade-in|fade-out|fade-up|drop-in|glow}`}),` each set an animation name on top of
a shared base. The base declares none of its inputs; it reads `,(0,S.jsx)(n.code,{children:`--kd-animate-duration`}),`,
`,(0,S.jsx)(n.code,{children:`--kd-animate-delay`}),`, `,(0,S.jsx)(n.code,{children:`--kd-animate-easing`}),` and `,(0,S.jsx)(n.code,{children:`--kd-animate-fill`}),` with fallbacks to
`,(0,S.jsx)(n.code,{children:`--kd-duration-base`}),`, `,(0,S.jsx)(n.code,{children:`0s`}),`, `,(0,S.jsx)(n.code,{children:`--kd-easing`}),` and `,(0,S.jsx)(n.code,{children:`both`}),`. The element needs nothing else, no
`,(0,S.jsx)(n.code,{children:`animation`}),` declaration of its own.`]}),`
`,(0,S.jsx)(i,{of:v}),`
`,(0,S.jsxs)(n.blockquote,{children:[`
`,(0,S.jsxs)(n.p,{children:[`The demo slows them to 1.2s to make them readable; the default is `,(0,S.jsx)(n.code,{children:`--kd-duration-base`}),`,
a quarter of a second. They run once on mount, so reload the page to watch them again,
and `,(0,S.jsx)(n.code,{children:`kd-animate-fade-out`}),` correctly leaves its cell at zero opacity when it lands.`]}),`
`]}),`
`,(0,S.jsx)(n.h2,{id:`inherited-timing`,children:`Inherited timing`}),`
`,(0,S.jsxs)(n.p,{children:[`Because the base only reads its inputs, `,(0,S.jsx)(n.code,{children:`--kd-animate-duration`}),` and `,(0,S.jsx)(n.code,{children:`--kd-animate-delay`}),` can
be set on an ancestor and inherit down to every animated descendant. One declaration on a
section wrapper gives the whole section a single duration, with nothing on the children but
their animate class.`]}),`
`,(0,S.jsx)(i,{of:d}),`
`,(0,S.jsxs)(n.blockquote,{children:[`
`,(0,S.jsxs)(n.p,{children:[`This is a change in behaviour. The base used to re-declare both variables on the element
itself, which meant an ancestor hook was inert. `,(0,S.jsx)(n.code,{children:`kd-stagger`}),` leans on the same shape: it
writes `,(0,S.jsx)(n.code,{children:`--kd-animate-delay`}),` on each child for the base to read, and a duration set once on
the `,(0,S.jsx)(n.code,{children:`kd-stagger`}),` parent reaches all of them.`]}),`
`]}),`
`,(0,S.jsx)(n.h2,{id:`fill-mode`,children:`Fill mode`}),`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.code,{children:`--kd-animate-fill`}),` defaults to `,(0,S.jsx)(n.code,{children:`both`}),`, so a one shot animation latches its final keyframe
and holds it forever. That is right for an entrance: `,(0,S.jsx)(n.code,{children:`kd-animate-fade-up`}),` stays where it
landed. It is wrong for an attention cycle. `,(0,S.jsx)(n.code,{children:`kd-animate-glow`}),` ends on `,(0,S.jsx)(n.code,{children:`--kd-text-muted`}),`, so
under the default fill the text is left muted rather than going back to its own colour.
Setting `,(0,S.jsx)(n.code,{children:`--kd-animate-fill: none`}),` releases it the moment the animation finishes.`]}),`
`,(0,S.jsx)(i,{of:p}),`
`,(0,S.jsx)(n.h2,{id:`stagger`,children:`Stagger`}),`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.code,{children:`kd-stagger`}),` sets `,(0,S.jsx)(n.code,{children:`--kd-stagger-step`}),` to 200ms on the parent and hands each of its first
eight children a delay one step larger than the last. Put an animate class on the children
and the list arrives in sequence with no per-item CSS and no loop in the consumer.`]}),`
`,(0,S.jsx)(i,{of:y}),`
`,(0,S.jsxs)(n.blockquote,{children:[`
`,(0,S.jsx)(n.p,{children:`A ninth child gets no rule, so it keeps the 0s default and lands with the first one.
Keep staggered lists inside eight items, or accept that the tail arrives together.`}),`
`]}),`
`,(0,S.jsx)(n.h2,{id:`typewriter`,children:`Typewriter`}),`
`,(0,S.jsxs)(n.p,{children:[(0,S.jsx)(n.code,{children:`kd-typewriter`}),` types a line out and blinks a caret after it, driven by
`,(0,S.jsx)(n.code,{children:`--kd-typewriter-steps`}),` and `,(0,S.jsx)(n.code,{children:`--kd-typewriter-duration`}),`.`]}),`
`,(0,S.jsx)(i,{of:l}),`
`,(0,S.jsxs)(n.blockquote,{children:[`
`,(0,S.jsx)(n.p,{children:`The step count has to equal the number of characters in the text. Get it wrong and the
animation stops short of the last glyph or overshoots it. Fourteen steps for
"Page not found".`}),`
`]}),`
`,(0,S.jsxs)(n.blockquote,{children:[`
`,(0,S.jsxs)(n.p,{children:[`It animates width against `,(0,S.jsx)(n.code,{children:`white-space: nowrap`}),`, so it is one line only, and the width
runs to 100% of the containing block rather than to the text. Give it a parent no wider
than the line, `,(0,S.jsx)(n.code,{children:`kd-w-fit`}),` for instance, or the caret finishes far past the last letter.`]}),`
`]}),`
`,(0,S.jsx)(n.h2,{id:`reduced-motion`,children:`Reduced motion`}),`
`,(0,S.jsxs)(n.p,{children:[`None of these need a guard of their own. The reset already collapses animation and
transition durations to nothing under `,(0,S.jsx)(n.code,{children:`prefers-reduced-motion: reduce`}),`, and that rule
covers every class on this page.`]}),`
`,(0,S.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,S.jsxs)(n.p,{children:[`The `,(0,S.jsx)(n.code,{children:`kd-animate-*`}),` base reads four hooks and declares none of them:
`,(0,S.jsx)(n.code,{children:`--kd-animate-duration`}),`, `,(0,S.jsx)(n.code,{children:`--kd-animate-delay`}),`, `,(0,S.jsx)(n.code,{children:`--kd-animate-easing`}),` and
`,(0,S.jsx)(n.code,{children:`--kd-animate-fill`}),`. Set any of them inline for a one-off, or on an ancestor to cover a
whole subtree. `,(0,S.jsx)(n.code,{children:`--kd-stagger-step`}),` sits on the `,(0,S.jsx)(n.code,{children:`kd-stagger`}),` parent and retimes the whole
sequence at once, and `,(0,S.jsx)(n.code,{children:`--kd-typewriter-steps`}),` and `,(0,S.jsx)(n.code,{children:`--kd-typewriter-duration`}),` are declared on
`,(0,S.jsx)(n.code,{children:`kd-typewriter`}),` itself.`]})]})}function x(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,S.jsx)(n,{...e,children:(0,S.jsx)(b,{...e})}):b(e)}var S;function C(){return(C=e((()=>{S=r(),n(),o(),h()})))()}C();export{x as default};
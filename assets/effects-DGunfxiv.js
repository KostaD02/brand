import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-C-9-ZGKJ.js";import{a as s,c,d as l,f as u,g as d,h as f,i as p,l as m,m as h,n as g,o as _,p as v,r as y,s as b,t as x,u as S}from"./effects.stories-BMsVLcvE.js";function C(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,...t(),...e.components};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{of:f}),`
`,(0,T.jsx)(n.h1,{id:`effects`,children:`Effects`}),`
`,(0,T.jsxs)(n.p,{children:[`Shadow, the pop and lift treatments, the accent rail, opacity, transition and interaction
utilities, plus the animation set: `,(0,T.jsx)(n.code,{children:`kd-animate-*`}),`, `,(0,T.jsx)(n.code,{children:`kd-stagger`}),`, `,(0,T.jsx)(n.code,{children:`kd-typewriter`}),`, the
scroll-driven `,(0,T.jsx)(n.code,{children:`kd-reveal`}),` and the once-per-session `,(0,T.jsx)(n.code,{children:`kd-intro`}),`.`]}),`
`,(0,T.jsx)(n.h2,{id:`shadow`,children:`Shadow`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`kd-shadow-{sm|md|lg|side|none}`}),`. The shadow tokens are theme keys, so they soften in the
light theme rather than keeping the dark values.`]}),`
`,(0,T.jsx)(i,{of:u}),`
`,(0,T.jsx)(n.h2,{id:`pop`,children:`Pop`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`kd-pop`}),` and `,(0,T.jsx)(n.code,{children:`kd-pop-lg`}),` apply the signature treatment: on hover and focus the element
lifts by a translate and casts a hard offset shadow with no blur.`]}),`
`,(0,T.jsx)(i,{of:c}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsxs)(n.p,{children:[`The colour comes from `,(0,T.jsx)(n.code,{children:`--kd-shadow-pop-color`}),`, which resolves where it is used, so
setting it on the element retints the shadow. The flat `,(0,T.jsx)(n.code,{children:`--kd-shadow-pop`}),` token does not
consult it, so components reading that token directly cannot be retinted the same way.`]}),`
`]}),`
`,(0,T.jsx)(n.h2,{id:`lift`,children:`Lift`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`kd-lift`}),` is the straight vertical counterpart: 7px up on hover and focus, with the large
soft shadow instead of the hard offset one. Reach for it on a grid of cards where the
diagonal drift of `,(0,T.jsx)(n.code,{children:`kd-pop`}),` would read as wobble. One or the other, never both on the same
element.`]}),`
`,(0,T.jsx)(i,{of:_}),`
`,(0,T.jsx)(n.h2,{id:`opacity`,children:`Opacity`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`kd-opacity-{0|25|50|75|100}`}),`.`]}),`
`,(0,T.jsx)(i,{of:b}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsxs)(n.p,{children:[`The ladder is hardcoded rather than read from the opacity tokens, so
`,(0,T.jsx)(n.code,{children:`--kd-opacity-muted`}),` (0.65) has no matching class.`]}),`
`]}),`
`,(0,T.jsx)(n.h2,{id:`transition`,children:`Transition`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`kd-transition`}),` applies the base transition. `,(0,T.jsx)(n.code,{children:`kd-transition-fast`}),`, `,(0,T.jsx)(n.code,{children:`kd-transition-slow`}),`
and `,(0,T.jsx)(n.code,{children:`kd-transition-none`}),` take the other durations.`]}),`
`,(0,T.jsx)(n.h2,{id:`interaction`,children:`Interaction`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`kd-cursor-{pointer|default|not-allowed|wait|text|grab}`}),`,
`,(0,T.jsx)(n.code,{children:`kd-pointer-{none|auto}`}),` and `,(0,T.jsx)(n.code,{children:`kd-select-{none|text|all}`}),`.`]}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`kd-pointer-none`}),` also stops hover and focus styles firing, so pairing it with
`,(0,T.jsx)(n.code,{children:`kd-cursor-not-allowed`}),` means the cursor never shows, because the element cannot be hovered at
all. Use one or the other.`]}),`
`]}),`
`,(0,T.jsx)(n.h2,{id:`focus-ring`,children:`Focus ring`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`kd-focus-ring`}),` applies the dashed accent outline on `,(0,T.jsx)(n.code,{children:`:focus-visible`}),`. The reset already
does this globally; the class is for elements that have opted out and need it back.`]}),`
`,(0,T.jsx)(i,{of:y}),`
`,(0,T.jsx)(n.h2,{id:`rail`,children:`Rail`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`kd-rail`}),` draws the 13px accent bar down the leading edge. It is the same mixin `,(0,T.jsx)(n.code,{children:`pre`}),` and
`,(0,T.jsx)(n.code,{children:`kd-teaser`}),` already carry, lifted out so anything else can wear the mark.`]}),`
`,(0,T.jsx)(i,{of:m}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsxs)(n.p,{children:[`The bar is a `,(0,T.jsx)(n.code,{children:`::before`}),` sitting on top of the box, not a border, so it does not take up
any space. Pad the leading edge past 13px yourself or the first character sits under it.`]}),`
`]}),`
`,(0,T.jsx)(n.h2,{id:`animations`,children:`Animations`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`kd-animate-{fade-in|fade-out|fade-up|drop-in|slide-in-start|slide-in-end|glow}`}),` each set
an animation name on top of a shared base. The base declares none of its inputs; it reads
`,(0,T.jsx)(n.code,{children:`--kd-animate-duration`}),`, `,(0,T.jsx)(n.code,{children:`--kd-animate-delay`}),`, `,(0,T.jsx)(n.code,{children:`--kd-animate-easing`}),` and
`,(0,T.jsx)(n.code,{children:`--kd-animate-fill`}),` with fallbacks to `,(0,T.jsx)(n.code,{children:`--kd-duration-base`}),`, `,(0,T.jsx)(n.code,{children:`0s`}),`, `,(0,T.jsx)(n.code,{children:`--kd-easing`}),` and
`,(0,T.jsx)(n.code,{children:`both`}),`. The element needs nothing else, no `,(0,T.jsx)(n.code,{children:`animation`}),` declaration of its own.`]}),`
`,(0,T.jsx)(i,{of:x}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsxs)(n.p,{children:[`The demo slows them to 1.2s to make them readable; the default is `,(0,T.jsx)(n.code,{children:`--kd-duration-base`}),`,
a quarter of a second. They run once on mount, so reload the page to watch them again,
and `,(0,T.jsx)(n.code,{children:`kd-animate-fade-out`}),` correctly leaves its cell at zero opacity when it lands.`]}),`
`]}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsxs)(n.p,{children:[`The slides travel the full width of the element and `,(0,T.jsx)(n.code,{children:`kd-animate-fade-up`}),` the full
height, so on a short pill they are a nudge and on a whole section they are a sweep.`]}),`
`]}),`
`,(0,T.jsx)(n.h2,{id:`inherited-timing`,children:`Inherited timing`}),`
`,(0,T.jsxs)(n.p,{children:[`Because the base only reads its inputs, `,(0,T.jsx)(n.code,{children:`--kd-animate-duration`}),` and `,(0,T.jsx)(n.code,{children:`--kd-animate-delay`}),` can
be set on an ancestor and inherit down to every animated descendant. One declaration on a
section wrapper gives the whole section a single duration, with nothing on the children but
their animate class.`]}),`
`,(0,T.jsx)(i,{of:p}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsxs)(n.p,{children:[`This is a change in behaviour. The base used to re-declare both variables on the element
itself, which meant an ancestor hook was inert. `,(0,T.jsx)(n.code,{children:`kd-stagger`}),` leans on the same shape: it
writes `,(0,T.jsx)(n.code,{children:`--kd-animate-delay`}),` on each child for the base to read, and a duration set once on
the `,(0,T.jsx)(n.code,{children:`kd-stagger`}),` parent reaches all of them.`]}),`
`]}),`
`,(0,T.jsx)(n.h2,{id:`fill-mode`,children:`Fill mode`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`--kd-animate-fill`}),` defaults to `,(0,T.jsx)(n.code,{children:`both`}),`, so a one shot animation latches its final keyframe
and holds it forever. That is right for an entrance: `,(0,T.jsx)(n.code,{children:`kd-animate-fade-up`}),` stays where it
landed. It is wrong for an attention cycle. `,(0,T.jsx)(n.code,{children:`kd-animate-glow`}),` ends on `,(0,T.jsx)(n.code,{children:`--kd-text-muted`}),`, so
under the default fill the text is left muted rather than going back to its own colour.
Setting `,(0,T.jsx)(n.code,{children:`--kd-animate-fill: none`}),` releases it the moment the animation finishes.`]}),`
`,(0,T.jsx)(i,{of:g}),`
`,(0,T.jsx)(n.h2,{id:`stagger`,children:`Stagger`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`kd-stagger`}),` sets `,(0,T.jsx)(n.code,{children:`--kd-stagger-step`}),` to 200ms on the parent and hands each of its first
eight children a delay one step larger than the last. Put an animate class on the children
and the list arrives in sequence with no per-item CSS and no loop in the consumer.`]}),`
`,(0,T.jsx)(i,{of:v}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsx)(n.p,{children:`A ninth child gets no rule, so it keeps the 0s default and lands with the first one.
Keep staggered lists inside eight items, or accept that the tail arrives together.`}),`
`]}),`
`,(0,T.jsx)(n.h2,{id:`reveal`,children:`Reveal`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`kd-reveal`}),` holds back the `,(0,T.jsx)(n.code,{children:`kd-animate-*`}),` animations on an element, and on everything
inside it, until the element scrolls into view. It is a trigger, not an animation of its
own: pair it with any animate class, set the timing the usual way, and the first time the
element enters the viewport it gets `,(0,T.jsx)(n.code,{children:`kd-reveal--in`}),` and the held animations run.`]}),`
`,(0,T.jsx)(i,{of:S}),`
`,(0,T.jsxs)(n.p,{children:[`It needs two things from the page. A `,(0,T.jsx)(n.code,{children:`kd-js`}),` class on `,(0,T.jsx)(n.code,{children:`<html>`}),`, set by an inline script in
`,(0,T.jsx)(n.code,{children:`<head>`}),` so it is there before first paint, and one call to `,(0,T.jsx)(n.code,{children:`reveal()`}),` once the DOM is
parsed:`]}),`
`,(0,T.jsx)(n.pre,{children:(0,T.jsx)(n.code,{className:`language-html`,children:`<script>
  if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("kd-js");
  }
<\/script>
`})}),`
`,(0,T.jsx)(n.pre,{children:(0,T.jsx)(n.code,{className:`language-js`,children:`import { reveal } from "@kostad/brand/js";

reveal();
`})}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsxs)(n.p,{children:[`Without `,(0,T.jsx)(n.code,{children:`kd-js`}),` nothing is held back and the animations simply run on load, so a page
whose JavaScript never arrives shows all of its content. That is the point of the flag:
the stylesheet never hides anything on its own. It also means the flag has to be set
synchronously in `,(0,T.jsx)(n.code,{children:`<head>`}),`. Set it later and the animations start, then freeze mid-way.`]}),`
`]}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsxs)(n.p,{children:[`A held element waits on its first keyframe, which for `,(0,T.jsx)(n.code,{children:`kd-animate-fade-up`}),` is invisible
and a full height lower than its final spot. It gets `,(0,T.jsx)(n.code,{children:`pointer-events: none`}),` for as long
as it waits, so it cannot catch clicks meant for the content it overlaps.`]}),`
`]}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsxs)(n.p,{children:[`Under `,(0,T.jsx)(n.code,{children:`prefers-reduced-motion: reduce`}),` nothing is held back at all. Content never waits
for the observer, and the reset collapses the animations as usual.`]}),`
`]}),`
`,(0,T.jsx)(n.h3,{id:`stagger-1`,children:`Stagger`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`kd-stagger`}),` works unchanged: put `,(0,T.jsx)(n.code,{children:`kd-reveal`}),` on the parent and the animate class on the
children, and the sequence starts when the parent enters the viewport.`]}),`
`,(0,T.jsx)(i,{of:l}),`
`,(0,T.jsx)(n.h3,{id:`options`,children:`Options`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`reveal(root, options)`}),`. `,(0,T.jsx)(n.code,{children:`root`}),` is where to look for `,(0,T.jsx)(n.code,{children:`kd-reveal`}),` elements, `,(0,T.jsx)(n.code,{children:`document`}),` by
default; call it again with a subtree for elements added later. `,(0,T.jsx)(n.code,{children:`options`}),` goes straight to
the `,(0,T.jsx)(n.code,{children:`IntersectionObserver`}),`, plus a `,(0,T.jsx)(n.code,{children:`prefix`}),` for a build compiled with a different
`,(0,T.jsx)(n.code,{children:`$prefix`}),`. The defaults are `,(0,T.jsx)(n.code,{children:`threshold`}),` `,(0,T.jsx)(n.code,{children:`0`}),` and `,(0,T.jsx)(n.code,{children:`rootMargin`}),` `,(0,T.jsx)(n.code,{children:`"0px 0px -10% 0px"`}),`, so an
element counts as in view once its top edge is a tenth of the viewport in. Each element
fires once, and the observer is returned for anything that needs to disconnect it.`]}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsx)(n.p,{children:`The trigger is the top edge rather than a visible ratio on purpose. A section several
screens tall never reaches a ratio threshold on a phone and would stay hidden.`}),`
`]}),`
`,(0,T.jsx)(n.h2,{id:`intro`,children:`Intro`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`kd-intro`}),` marks an entrance that should play once per browser session: the navbar
dropping in, a hero staggering up. When `,(0,T.jsx)(n.code,{children:`<html>`}),` carries `,(0,T.jsx)(n.code,{children:`kd-no-intro`}),`, every child of a
`,(0,T.jsx)(n.code,{children:`kd-intro`}),` element has its animation removed, and nothing else changes.`]}),`
`,(0,T.jsx)(i,{of:s}),`
`,(0,T.jsxs)(n.p,{children:[`The flag comes from the same inline script, keyed on `,(0,T.jsx)(n.code,{children:`sessionStorage`}),`:`]}),`
`,(0,T.jsx)(n.pre,{children:(0,T.jsx)(n.code,{className:`language-html`,children:`<script>
  try {
    if (sessionStorage.getItem("kd-intro")) {
      document.documentElement.classList.add("kd-no-intro");
    }
    sessionStorage.setItem("kd-intro", "1");
  } catch (error) {}
<\/script>
`})}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`sessionStorage`}),` throws rather than returning `,(0,T.jsx)(n.code,{children:`null`}),` in some private modes and sandboxed
frames, hence the `,(0,T.jsx)(n.code,{children:`try`}),`. When it throws the intro simply plays every time.`]}),`
`]}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsxs)(n.p,{children:[`The rule targets the children, not the `,(0,T.jsx)(n.code,{children:`kd-intro`}),` element itself, so a container with an
entrance of its own, `,(0,T.jsx)(n.code,{children:`kd-drawer__panel`}),` for instance, keeps it while its items skip
theirs.`]}),`
`]}),`
`,(0,T.jsx)(n.h2,{id:`typewriter`,children:`Typewriter`}),`
`,(0,T.jsxs)(n.p,{children:[(0,T.jsx)(n.code,{children:`kd-typewriter`}),` types a line out and blinks a caret after it, driven by
`,(0,T.jsx)(n.code,{children:`--kd-typewriter-steps`}),` and `,(0,T.jsx)(n.code,{children:`--kd-typewriter-duration`}),`.`]}),`
`,(0,T.jsx)(i,{of:h}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsx)(n.p,{children:`The step count has to equal the number of characters in the text. Get it wrong and the
animation stops short of the last glyph or overshoots it. Fourteen steps for
"Page not found".`}),`
`]}),`
`,(0,T.jsxs)(n.blockquote,{children:[`
`,(0,T.jsxs)(n.p,{children:[`It animates width against `,(0,T.jsx)(n.code,{children:`white-space: nowrap`}),`, so it is one line only, and the width
runs to 100% of the containing block rather than to the text. Give it a parent no wider
than the line, `,(0,T.jsx)(n.code,{children:`kd-w-fit`}),` for instance, or the caret finishes far past the last letter.`]}),`
`]}),`
`,(0,T.jsx)(n.h2,{id:`reduced-motion`,children:`Reduced motion`}),`
`,(0,T.jsxs)(n.p,{children:[`None of these need a guard of their own. The reset already collapses animation and
transition durations to nothing under `,(0,T.jsx)(n.code,{children:`prefers-reduced-motion: reduce`}),`, and that rule
covers every class on this page. `,(0,T.jsx)(n.code,{children:`kd-reveal`}),` goes one step further and stops holding
anything back, so nothing on the page waits for a scroll.`]}),`
`,(0,T.jsx)(n.h2,{id:`customising`,children:`Customising`}),`
`,(0,T.jsxs)(n.p,{children:[`The `,(0,T.jsx)(n.code,{children:`kd-animate-*`}),` base reads four hooks and declares none of them:
`,(0,T.jsx)(n.code,{children:`--kd-animate-duration`}),`, `,(0,T.jsx)(n.code,{children:`--kd-animate-delay`}),`, `,(0,T.jsx)(n.code,{children:`--kd-animate-easing`}),` and
`,(0,T.jsx)(n.code,{children:`--kd-animate-fill`}),`. Set any of them inline for a one-off, or on an ancestor to cover a
whole subtree. `,(0,T.jsx)(n.code,{children:`--kd-stagger-step`}),` sits on the `,(0,T.jsx)(n.code,{children:`kd-stagger`}),` parent and retimes the whole
sequence at once, and `,(0,T.jsx)(n.code,{children:`--kd-typewriter-steps`}),` and `,(0,T.jsx)(n.code,{children:`--kd-typewriter-duration`}),` are declared on
`,(0,T.jsx)(n.code,{children:`kd-typewriter`}),` itself. `,(0,T.jsx)(n.code,{children:`kd-reveal`}),` adds no hooks of its own; its timing is whatever the
held animation reads, and its trigger is tuned through the `,(0,T.jsx)(n.code,{children:`reveal()`}),` options.`]})]})}function w(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,T.jsx)(n,{...e,children:(0,T.jsx)(C,{...e})}):C(e)}var T;function E(){return(E=e((()=>{T=r(),n(),o(),d()})))()}E();export{w as default};
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-Bl2r1tuC.js";import{a as r}from"./chunk-W22LQPXL-EGASGoRO.js";import{n as i,o as a,s as o}from"./blocks-CuXkx23l.js";import{a as s,c,d as l,f as u,i as d,l as f,m as p,n as m,o as h,p as g,r as _,s as v,t as y,u as b}from"./syntax.stories-BgU0hdS2.js";function x(e){let n={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,p:`p`,...t(),...e.components};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(a,{of:p}),`
`,(0,C.jsx)(n.h1,{id:`syntax`,children:`Syntax`}),`
`,(0,C.jsxs)(n.p,{children:[`The colour theme for highlighted code. It highlights nothing itself: run highlight.js, or
anything else that emits the same `,(0,C.jsx)(n.code,{children:`hljs-*`}),` class names, and this layer paints the result.
Every colour in the `,(0,C.jsx)(n.code,{children:`hljs-*`}),` rules resolves to a `,(0,C.jsx)(n.code,{children:`--kd-code-<role>`}),` custom property, so a
project recolours the whole theme by reassigning properties and never by rewriting
selectors. The roles are modelled on VS Code's Dark+ theme: functions share one colour;
types another; variables, parameters and properties a third. highlight.js has one
`,(0,C.jsx)(n.code,{children:`built_in`}),` class for built-in functions and objects alike, and that class takes the type
colour. `,(0,C.jsx)(n.a,{href:`?path=/docs/tokens--docs`,children:`Tokens`}),` lists each role's dark and light value.`]}),`
`,(0,C.jsxs)(n.p,{children:[`Two roles are there for editor themes only. highlight.js has a single class for all
keywords and none for invalid code, so no rule here reads `,(0,C.jsx)(n.code,{children:`--kd-code-control`}),` or
`,(0,C.jsx)(n.code,{children:`--kd-code-invalid`}),`, and picking either in the playground changes nothing.`]}),`
`,(0,C.jsx)(n.h2,{id:`example`,children:`Example`}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`.hljs`}),` sets the same code background and foreground that `,(0,C.jsx)(n.code,{children:`pre`}),` already carries, so the
highlighter's wrapper lands on styling that is right before a single token is coloured.
Every keyword takes the storage colour, `,(0,C.jsx)(n.code,{children:`return`}),` as much as `,(0,C.jsx)(n.code,{children:`import`}),` and `,(0,C.jsx)(n.code,{children:`const`}),`, and so
do `,(0,C.jsx)(n.code,{children:`false`}),`, `,(0,C.jsx)(n.code,{children:`true`}),` and `,(0,C.jsx)(n.code,{children:`document`}),`.`]}),`
`,(0,C.jsx)(i,{of:d}),`
`,(0,C.jsx)(n.h2,{id:`stylesheets`,children:`Stylesheets`}),`
`,(0,C.jsxs)(n.p,{children:[`Selectors, property names and values land on different roles, which is why a stylesheet
does not read as one colour. `,(0,C.jsx)(n.code,{children:`.hljs-selector-class`}),` takes the escape colour, which
selectors share with escape sequences; property names take the variable colour. A value
takes the colour of what it is: `,(0,C.jsx)(n.code,{children:`1rem`}),` is a number, and `,(0,C.jsx)(n.code,{children:`var`}),` counts as a built-in and
takes the type colour, while its parentheses and the custom property inside stay in the
plain code colour. The only string is the `,(0,C.jsx)(n.code,{children:`@use`}),` path.`]}),`
`,(0,C.jsx)(i,{of:l}),`
`,(0,C.jsx)(n.h2,{id:`markup`,children:`Markup`}),`
`,(0,C.jsxs)(n.p,{children:[`A tag is an `,(0,C.jsx)(n.code,{children:`hljs-tag`}),` span with the name, attributes and values nested inside it: the
brackets and the `,(0,C.jsx)(n.code,{children:`=`}),` before each value take the punctuation colour, and the element name
takes the storage colour. Attribute names take the variable colour, which keeps them apart
from the element name, and their values take the string colour. The punctuation role is
read by `,(0,C.jsx)(n.code,{children:`hljs-tag`}),` alone, so it covers a tag's brackets and `,(0,C.jsx)(n.code,{children:`=`}),` signs; highlight.js's
`,(0,C.jsx)(n.code,{children:`hljs-punctuation`}),` class stays in the plain code colour.`]}),`
`,(0,C.jsx)(i,{of:c}),`
`,(0,C.jsx)(n.h2,{id:`more-languages`,children:`More languages`}),`
`,(0,C.jsx)(n.p,{children:`The same rules colour every language highlight.js supports. Every sample on this page is
highlight.js 11 output, so what renders here is what a project running the highlighter
gets.`}),`
`,(0,C.jsx)(n.h3,{id:`javascript`,children:`JavaScript`}),`
`,(0,C.jsxs)(n.p,{children:[(0,C.jsx)(n.code,{children:`KEY`}),` is marked as a constant and takes the constant colour, and the regular expression
takes the regexp colour. `,(0,C.jsx)(n.code,{children:`this`}),`, `,(0,C.jsx)(n.code,{children:`null`}),`, `,(0,C.jsx)(n.code,{children:`localStorage`}),` and `,(0,C.jsx)(n.code,{children:`console`}),` take the storage
colour with the keywords. Inside the template literal the interpolation drops back to the
plain code colour, apart from the `,(0,C.jsx)(n.code,{children:`this`}),` in it.`]}),`
`,(0,C.jsx)(i,{of:s}),`
`,(0,C.jsx)(n.h3,{id:`css`,children:`CSS`}),`
`,(0,C.jsxs)(n.p,{children:[`Every selector takes the escape colour, `,(0,C.jsx)(n.code,{children:`:root`}),` and pseudo-elements included, while the
quoted value inside the attribute selector is a string. The custom property being
declared matches the property names, `,(0,C.jsx)(n.code,{children:`!important`}),` takes the storage colour, and bare
keywords such as `,(0,C.jsx)(n.code,{children:`all`}),`, `,(0,C.jsx)(n.code,{children:`ease`}),` and `,(0,C.jsx)(n.code,{children:`none`}),` stay in the plain code colour.`]}),`
`,(0,C.jsx)(i,{of:y}),`
`,(0,C.jsx)(n.h3,{id:`json`,children:`JSON`}),`
`,(0,C.jsxs)(n.p,{children:[`Keys take the variable colour and values the string colour. `,(0,C.jsx)(n.code,{children:`false`}),` and `,(0,C.jsx)(n.code,{children:`null`}),` take the
storage colour like any other literal. Braces, brackets, colons and commas are
`,(0,C.jsx)(n.code,{children:`hljs-punctuation`}),` and stay plain.`]}),`
`,(0,C.jsx)(i,{of:h}),`
`,(0,C.jsx)(n.h3,{id:`yaml`,children:`YAML`}),`
`,(0,C.jsxs)(n.p,{children:[`Keys take the variable colour, colon included, and unquoted values are strings. The list
dashes take the storage colour, `,(0,C.jsx)(n.code,{children:`10`}),` the number colour and `,(0,C.jsx)(n.code,{children:`true`}),` the storage colour.`]}),`
`,(0,C.jsx)(i,{of:u}),`
`,(0,C.jsx)(n.h3,{id:`shell`,children:`Shell`}),`
`,(0,C.jsxs)(n.p,{children:[`The shebang is `,(0,C.jsx)(n.code,{children:`hljs-meta`}),` and takes the storage colour, the same as `,(0,C.jsx)(n.code,{children:`if`}),`, `,(0,C.jsx)(n.code,{children:`then`}),` and
`,(0,C.jsx)(n.code,{children:`fi`}),`. Commands on highlight.js's built-in list take the type colour: shell built-ins such
as `,(0,C.jsx)(n.code,{children:`set`}),` and `,(0,C.jsx)(n.code,{children:`echo`}),`, and core utilities such as `,(0,C.jsx)(n.code,{children:`rm`}),`. `,(0,C.jsx)(n.code,{children:`node`}),` and `,(0,C.jsx)(n.code,{children:`pnpm`}),` are not on it and
stay plain. The variable inside the string takes the variable colour.`]}),`
`,(0,C.jsx)(i,{of:b}),`
`,(0,C.jsx)(n.h3,{id:`dockerfile`,children:`Dockerfile`}),`
`,(0,C.jsxs)(n.p,{children:[`Instructions take the storage colour and port or version numbers the number colour.
highlight.js reads what follows `,(0,C.jsx)(n.code,{children:`RUN`}),`, `,(0,C.jsx)(n.code,{children:`COPY`}),` and `,(0,C.jsx)(n.code,{children:`WORKDIR`}),` as shell, so a shell built-in
such as `,(0,C.jsx)(n.code,{children:`enable`}),` picks up the type colour there.`]}),`
`,(0,C.jsx)(i,{of:_}),`
`,(0,C.jsx)(n.h3,{id:`markdown`,children:`Markdown`}),`
`,(0,C.jsx)(n.p,{children:`Headings take the storage colour in bold, and list bullets the same colour at normal
weight. Inline code and fenced blocks take the string colour, as do link text and URLs,
and a quote takes the comment colour. Bold and italic text keep the plain code colour and
change only weight or style; emphasis is the only thing this theme sets in italics.`}),`
`,(0,C.jsx)(i,{of:v}),`
`,(0,C.jsx)(n.h3,{id:`diff`,children:`Diff`}),`
`,(0,C.jsxs)(n.p,{children:[`Removed lines take the string colour and added lines the number colour. The file header
is `,(0,C.jsx)(n.code,{children:`hljs-comment`}),`, the hunk range is `,(0,C.jsx)(n.code,{children:`hljs-meta`}),` in the storage colour, and context lines
stay plain.`]}),`
`,(0,C.jsx)(i,{of:m}),`
`,(0,C.jsx)(n.h2,{id:`retinting`,children:`Retinting`}),`
`,(0,C.jsxs)(n.p,{children:[`Assign a role on the block, or on an ancestor inside the same theme, and every rule that
reads it follows. Here it is inline on the `,(0,C.jsx)(n.code,{children:`pre`}),`, so it holds in both themes. Use one of
the selectors in the note below for a project-wide change, or set it on one element for a
single figure.`]}),`
`,(0,C.jsx)(i,{of:f}),`
`,(0,C.jsxs)(n.blockquote,{children:[`
`,(0,C.jsxs)(n.p,{children:[`Each theme declares its own code colours: dark blocks sit on deep navy, light ones on
white with navy text. The brand declares both at the specificity of `,(0,C.jsx)(n.code,{children:`:root`}),`, so a rule of
the same weight placed after the brand wins. `,(0,C.jsx)(n.code,{children:`:root, [data-theme]`}),` changes a role in both
themes, and `,(0,C.jsx)(n.code,{children:`[data-theme="light"]`}),` in light mode only. For dark mode only, use
`,(0,C.jsx)(n.code,{children:`:root:not([data-theme="light"]), [data-theme="dark"]`}),`, which also covers a page that
sets no attribute.`]}),`
`]}),`
`,(0,C.jsx)(n.h2,{id:`on-its-own`,children:`On its own`}),`
`,(0,C.jsxs)(n.p,{children:[`The syntax theme is part of the main bundle, so a project that already loads
`,(0,C.jsx)(n.code,{children:`@kostad/brand`}),` has it. It is also an entry of its own,
`,(0,C.jsx)(n.code,{children:`@use "@kostad/brand/scss/entries/syntax"`}),`, for a project that wants the theme and none
of the rest. That entry emits the `,(0,C.jsx)(n.code,{children:`hljs`}),` rules only, so pair it with
`,(0,C.jsx)(n.code,{children:`@kostad/brand/scss/entries/tokens`}),` unless the page already declares the custom
properties.`]})]})}function S(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,C.jsx)(n,{...e,children:(0,C.jsx)(x,{...e})}):x(e)}var C;function w(){return(w=e((()=>{C=r(),n(),o(),g()})))()}w();export{S as default};
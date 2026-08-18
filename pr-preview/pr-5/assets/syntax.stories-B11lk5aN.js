import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Example:()=>s,Markup:()=>l,Retint:()=>u,Stylesheet:()=>c,Syntax:()=>d,__namedExportsOrder:()=>f,default:()=>o}),r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r=[`keyword`,`entity`,`type`,`section`,`literal`,`number`,`regexp`,`string`,`subst`,`class`,`title`,`attr`,`attribute`,`comment`,`bullet`,`link`,`quote`,`selector-tag`,`selector-id`,`deletion`],i={typescript:`<span class="hljs-comment">// theme.ts</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Theme</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"./types"</span>;

<span class="hljs-keyword">const</span> <span class="hljs-variable">themes</span>: <span class="hljs-type">Theme</span>[] = [<span class="hljs-string">"dark"</span>, <span class="hljs-string">"light"</span>];

<span class="hljs-keyword">export</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">applyTheme</span>(<span class="hljs-params">name: Theme</span>) {
  <span class="hljs-keyword">if</span> (!themes.<span class="hljs-title function_">includes</span>(name)) {
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
  }

  <span class="hljs-variable language_">document</span>.<span class="hljs-property">documentElement</span>.<span class="hljs-title function_">setAttribute</span>(<span class="hljs-string">"data-theme"</span>, name);
  <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
}`,scss:`<span class="hljs-comment">// card.scss</span>
<span class="hljs-keyword">@use</span> <span class="hljs-string">"../variables/global"</span> <span class="hljs-keyword">as</span> *;

<span class="hljs-selector-class">.kd-card</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">1rem</span>;
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-built_in">var</span>(<span class="hljs-attr">--kd-radius-md</span>);
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">var</span>(<span class="hljs-attr">--kd-bg-elevated</span>);
}`,html:`<span class="hljs-comment">&lt;!-- a card --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">article</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"kd-card"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"kd-card__body"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h3</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"kd-card__title"</span>&gt;</span>Spinner<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">article</span>&gt;</span>`},a=(e,t)=>`
<pre${t?` style="${t}"`:``}><code class="hljs language-${e}">${i[e]}</code></pre>
`,o={title:`Elements/Syntax`,parameters:{layout:`padded`}},s={tags:[`!dev`],render:()=>a(`typescript`)},c={tags:[`!dev`],render:()=>a(`scss`)},l={tags:[`!dev`],render:()=>a(`html`)},u={tags:[`!dev`],render:()=>a(`typescript`,`--kd-code-token-keyword: #0dff009d; --kd-code-token-string: #9ee7ff;`)},d={args:{language:`typescript`,token:`keyword`,color:`#0dff009d`},argTypes:{language:{control:`inline-radio`,options:[`typescript`,`scss`,`html`]},token:{control:`select`,options:r},color:{control:`color`}},render:({language:e,token:t,color:n})=>a(e,`--kd-code-token-${t}: ${n};`)},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => block("typescript")
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => block("scss")
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => block("html")
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => block("typescript", "--kd-code-token-keyword: #0dff009d; --kd-code-token-string: #9ee7ff;")
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    language: "typescript",
    token: "keyword",
    color: "#0dff009d"
  },
  argTypes: {
    language: {
      control: "inline-radio",
      options: ["typescript", "scss", "html"]
    },
    token: {
      control: "select",
      options: tokens
    },
    color: {
      control: "color"
    }
  },
  render: ({
    language,
    token,
    color
  }) => block(language, \`--kd-code-token-\${token}: \${color};\`)
}`,...d.parameters?.docs?.source}}},f=[`Example`,`Stylesheet`,`Markup`,`Retint`,`Syntax`]})))()}export{p as a,c as i,l as n,n as o,u as r,s as t};
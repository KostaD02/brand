import type { Meta, StoryObj } from "@storybook/html-vite";

type Language =
  | "typescript"
  | "javascript"
  | "html"
  | "css"
  | "scss"
  | "json"
  | "yaml"
  | "bash"
  | "dockerfile"
  | "markdown"
  | "diff";

type Role =
  | "comment"
  | "storage"
  | "control"
  | "function"
  | "type"
  | "variable"
  | "constant"
  | "string"
  | "number"
  | "regexp"
  | "escape"
  | "punctuation"
  | "invalid";

interface SyntaxArgs {
  language: Language;
  role: Role;
  color: string;
}

const languages: Language[] = [
  "typescript",
  "javascript",
  "html",
  "css",
  "scss",
  "json",
  "yaml",
  "bash",
  "dockerfile",
  "markdown",
  "diff",
];

const roles: Role[] = [
  "comment",
  "storage",
  "control",
  "function",
  "type",
  "variable",
  "constant",
  "string",
  "number",
  "regexp",
  "escape",
  "punctuation",
  "invalid",
];

const samples: Record<Language, string> = {
  typescript: `<span class="hljs-comment">// theme.ts</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Theme</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"./types"</span>;

<span class="hljs-keyword">const</span> <span class="hljs-attr">themes</span>: <span class="hljs-title class_">Theme</span>[] = [<span class="hljs-string">"dark"</span>, <span class="hljs-string">"light"</span>];

<span class="hljs-keyword">export</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">applyTheme</span>(<span class="hljs-params"><span class="hljs-attr">name</span>: <span class="hljs-title class_">Theme</span></span>) {
  <span class="hljs-keyword">if</span> (!themes.<span class="hljs-title function_">includes</span>(name)) {
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
  }

  <span class="hljs-variable language_">document</span>.<span class="hljs-property">documentElement</span>.<span class="hljs-title function_">setAttribute</span>(<span class="hljs-string">"data-theme"</span>, name);
  <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
}`,
  javascript: `<span class="hljs-comment">// storage.js</span>
<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">KEY</span> = <span class="hljs-string">"kd-theme"</span>;
<span class="hljs-keyword">const</span> pattern = <span class="hljs-regexp">/^(dark|light)$/</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> <span class="hljs-title class_">ThemeStore</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">EventTarget</span> {
  #current = <span class="hljs-literal">null</span>;

  <span class="hljs-title function_">load</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> saved = <span class="hljs-variable language_">localStorage</span>.<span class="hljs-title function_">getItem</span>(<span class="hljs-variable constant_">KEY</span>) ?? <span class="hljs-string">"dark"</span>;
    <span class="hljs-variable language_">this</span>.#current = pattern.<span class="hljs-title function_">test</span>(saved) ? saved : <span class="hljs-string">"dark"</span>;
    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">\`Theme: <span class="hljs-subst">\${<span class="hljs-variable language_">this</span>.#current}</span>\\n\`</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-variable language_">this</span>.#current;
  }
}`,
  html: `<span class="hljs-comment">&lt;!-- a card --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">article</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"kd-card"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"kd-card__body"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h3</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"kd-card__title"</span>&gt;</span>Spinner<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">article</span>&gt;</span>`,
  css: `<span class="hljs-comment">/* tokens.css */</span>
<span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--kd-accent</span>: <span class="hljs-number">#64ffda</span>;
}

<span class="hljs-selector-class">.kd-btn</span><span class="hljs-selector-pseudo">:hover</span>,
<span class="hljs-selector-tag">a</span><span class="hljs-selector-attr">[href^=<span class="hljs-string">"https"</span>]</span><span class="hljs-selector-pseudo">::after</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--kd-accent) <span class="hljs-meta">!important</span>;
  <span class="hljs-attribute">transition</span>: all <span class="hljs-number">0.25s</span> ease;
}

<span class="hljs-keyword">@media</span> (<span class="hljs-attribute">max-width</span>: <span class="hljs-number">768px</span>) {
  <span class="hljs-selector-id">#navbar</span> {
    <span class="hljs-attribute">display</span>: none;
  }
}`,
  scss: `<span class="hljs-comment">// card.scss</span>
<span class="hljs-keyword">@use</span> <span class="hljs-string">"../variables/global"</span> as *;

<span class="hljs-selector-class">.kd-card</span> {
  <span class="hljs-attribute">padding</span>: <span class="hljs-number">1rem</span>;
  <span class="hljs-attribute">border-radius</span>: <span class="hljs-built_in">var</span>(--kd-radius-md);
  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">var</span>(--kd-bg-elevated);
}`,
  json: `<span class="hljs-punctuation">{</span>
  <span class="hljs-attr">"name"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"@kostad/brand"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"version"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"1.3.2"</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"private"</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">false</span></span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"files"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span><span class="hljs-string">"dist"</span><span class="hljs-punctuation">,</span> <span class="hljs-string">"scss"</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"publishConfig"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">"access"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"public"</span> <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"peerDependencies"</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span> <span class="hljs-attr">"sass"</span><span class="hljs-punctuation">:</span> <span class="hljs-string">"&gt;=1.79"</span> <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">"funding"</span><span class="hljs-punctuation">:</span> <span class="hljs-literal"><span class="hljs-keyword">null</span></span>
<span class="hljs-punctuation">}</span>`,
  yaml: `<span class="hljs-comment"># .github/workflows/ci.yml</span>
<span class="hljs-attr">name:</span> <span class="hljs-string">CI</span>
<span class="hljs-attr">on:</span>
  <span class="hljs-attr">push:</span>
    <span class="hljs-attr">branches:</span> [<span class="hljs-string">main</span>]
<span class="hljs-attr">jobs:</span>
  <span class="hljs-attr">build:</span>
    <span class="hljs-attr">runs-on:</span> <span class="hljs-string">ubuntu-latest</span>
    <span class="hljs-attr">timeout-minutes:</span> <span class="hljs-number">10</span>
    <span class="hljs-attr">steps:</span>
      <span class="hljs-bullet">-</span> <span class="hljs-attr">uses:</span> <span class="hljs-string">actions/checkout@v7</span>
      <span class="hljs-bullet">-</span> <span class="hljs-attr">run:</span> <span class="hljs-string">pnpm</span> <span class="hljs-string">run</span> <span class="hljs-string">build</span>
        <span class="hljs-attr">env:</span>
          <span class="hljs-attr">NODE_ENV:</span> <span class="hljs-string">production</span>
          <span class="hljs-attr">CI:</span> <span class="hljs-literal">true</span>`,
  bash: `<span class="hljs-meta">#!/usr/bin/env bash</span>
<span class="hljs-comment"># Build and check the package</span>
<span class="hljs-built_in">set</span> -euo pipefail

VERSION=$(node -p <span class="hljs-string">"require('./package.json').version"</span>)
<span class="hljs-built_in">echo</span> <span class="hljs-string">"Building v<span class="hljs-variable">\${VERSION}</span>"</span>

<span class="hljs-keyword">if</span> [ -d dist ]; <span class="hljs-keyword">then</span>
  <span class="hljs-built_in">rm</span> -rf dist
<span class="hljs-keyword">fi</span>

pnpm run build &amp;&amp; pnpm run lint`,
  dockerfile: `<span class="hljs-keyword">FROM</span> node:<span class="hljs-number">24</span>-alpine AS build
<span class="hljs-keyword">WORKDIR</span><span class="language-bash"> /app</span>
<span class="hljs-keyword">COPY</span><span class="language-bash"> package.json pnpm-lock.yaml ./</span>
<span class="hljs-keyword">RUN</span><span class="language-bash"> corepack <span class="hljs-built_in">enable</span> &amp;&amp; pnpm install --frozen-lockfile</span>
<span class="hljs-keyword">COPY</span><span class="language-bash"> . .</span>
<span class="hljs-keyword">RUN</span><span class="language-bash"> pnpm run build</span>

<span class="hljs-keyword">FROM</span> nginx:alpine
<span class="hljs-keyword">COPY</span><span class="language-bash"> --from=build /app/_site /usr/share/nginx/html</span>
<span class="hljs-keyword">EXPOSE</span> <span class="hljs-number">80</span>`,
  markdown: `<span class="hljs-section"># @kostad/brand</span>

The design system for <span class="hljs-strong">**Konstantine Datunishvili's**</span> projects.

<span class="hljs-section">## Install</span>

<span class="hljs-bullet">-</span> Run <span class="hljs-code">\`pnpm add @kostad/brand\`</span>
<span class="hljs-bullet">-</span> Import it in your <span class="hljs-emphasis">_entry_</span> file

<span class="hljs-code">\`\`\`scss
@use "pkg:@kostad/brand";
\`\`\`</span>

<span class="hljs-quote">&gt; Dark is the default theme.</span>

[<span class="hljs-string">Storybook</span>](<span class="hljs-link">https://kostad02.github.io/brand</span>)`,
  diff: `<span class="hljs-comment">diff --git a/scss/variables/_global.scss b/scss/variables/_global.scss</span>
<span class="hljs-comment">--- a/scss/variables/_global.scss</span>
<span class="hljs-comment">+++ b/scss/variables/_global.scss</span>
<span class="hljs-meta">@@ -371,3 +371,4 @@</span> $theme-dark: (
   code-bg: $kd-code-navy,
   code-fg: $kd-code-fg,
<span class="hljs-deletion">-  code-inline-fg: $kd-green,</span>
<span class="hljs-addition">+  code-inline-fg: $kd-code-green,</span>
<span class="hljs-addition">+  code-comment: #637777,</span>`,
};

const block = (language: Language, style?: string) => `
<pre${style ? ` style="${style}"` : ""}><code class="hljs language-${language}">${samples[language]}</code></pre>
`;

const meta: Meta<SyntaxArgs> = {
  title: "Elements/Syntax",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<SyntaxArgs>;

export const Example: Story = {
  tags: ["!dev"],
  render: () => block("typescript"),
};

export const Stylesheet: Story = {
  tags: ["!dev"],
  render: () => block("scss"),
};

export const Markup: Story = {
  tags: ["!dev"],
  render: () => block("html"),
};

export const JavaScript: Story = {
  tags: ["!dev"],
  render: () => block("javascript"),
};

export const Css: Story = {
  tags: ["!dev"],
  render: () => block("css"),
};

export const Json: Story = {
  tags: ["!dev"],
  render: () => block("json"),
};

export const Yaml: Story = {
  tags: ["!dev"],
  render: () => block("yaml"),
};

export const Shell: Story = {
  tags: ["!dev"],
  render: () => block("bash"),
};

export const Dockerfile: Story = {
  tags: ["!dev"],
  render: () => block("dockerfile"),
};

export const Markdown: Story = {
  tags: ["!dev"],
  render: () => block("markdown"),
};

export const Diff: Story = {
  tags: ["!dev"],
  render: () => block("diff"),
};

export const Retint: Story = {
  tags: ["!dev"],
  render: () =>
    block("typescript", "--kd-code-storage: #0dff009d; --kd-code-string: #9ee7ff;"),
};

export const Syntax: Story = {
  args: {
    language: "typescript",
    role: "storage",
    color: "#0dff009d",
  },
  argTypes: {
    language: { control: "select", options: languages },
    role: { control: "select", options: roles },
    color: { control: "color" },
  },
  render: ({ language, role, color }) => block(language, `--kd-code-${role}: ${color};`),
};

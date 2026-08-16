import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Error:()=>o,Example:()=>i,Field:()=>l,Hint:()=>a,Spacing:()=>c,WithIcon:()=>s,__namedExportsOrder:()=>u,default:()=>r}),r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{r={title:`Forms/Field`,parameters:{layout:`padded`}},i={tags:[`!dev`],render:()=>`
<div class="kd-field" style="max-width: 24rem;">
  <label class="kd-field__label" for="account">Account name</label>
  <input class="kd-field__input" id="account" type="text" placeholder="username" />
</div>
`},a={tags:[`!dev`],render:()=>`
<div class="kd-field" style="max-width: 24rem;">
  <label class="kd-field__label" for="token">API token</label>
  <input class="kd-field__input" id="token" type="text" placeholder="Paste your token" aria-describedby="token-hint" />
  <span class="kd-field__hint" id="token-hint">Stored locally and never sent anywhere.</span>
</div>
`},o={tags:[`!dev`],render:()=>`
<div class="kd-field" style="max-width: 24rem;">
  <label class="kd-field__label" for="token-bad">API token</label>
  <input
    class="kd-field__input kd-invalid"
    id="token-bad"
    type="text"
    value="not-a-token"
    aria-describedby="token-bad-error"
    aria-invalid="true"
  />
  <span class="kd-field__error" id="token-bad-error">That token is not valid.</span>
</div>
`},s={tags:[`!dev`],render:()=>`
<div class="kd-field" style="max-width: 24rem;">
  <label class="kd-field__label" for="shared">
    Shared secret
    <span class="kd-field__icon">
      <svg viewBox="0 0 16 16" width="1.2em" height="1.2em" fill="currentColor" aria-hidden="true">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13ZM8 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm.9 3.5H7.1v5.5h1.8V7Z" />
      </svg>
    </span>
  </label>
  <input class="kd-field__input" id="shared" type="password" value="hunter2" />
</div>
`},c={tags:[`!dev`],render:()=>`
<div class="kd-field" style="max-width: 24rem; --kd-field-gap: 0.75rem; --kd-field-padding-y: 14px;">
  <label class="kd-field__label" for="roomy">Roomier field</label>
  <input class="kd-field__input" id="roomy" type="text" placeholder="username" />
  <span class="kd-field__hint">Gap and padding reassigned on the wrapper.</span>
</div>
`},l={args:{label:`Label`,hint:`Helper text under the control.`,error:``},argTypes:{label:{control:`text`},hint:{control:`text`},error:{control:`text`}},render:({label:e,hint:t,error:n})=>`
<div class="kd-field" style="max-width: 24rem;">
  <label class="kd-field__label" for="playground">${e}</label>
  <input
    class="kd-field__input${n?` kd-invalid`:``}"
    id="playground"
    type="text"
    placeholder="username"${n?`
    aria-invalid="true"`:``}
  />
  ${t?`<span class="kd-field__hint">${t}</span>`:``}
  ${n?`<span class="kd-field__error">${n}</span>`:``}
</div>
`},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-field" style="max-width: 24rem;">
  <label class="kd-field__label" for="account">Account name</label>
  <input class="kd-field__input" id="account" type="text" placeholder="username" />
</div>
\`
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-field" style="max-width: 24rem;">
  <label class="kd-field__label" for="token">API token</label>
  <input class="kd-field__input" id="token" type="text" placeholder="Paste your token" aria-describedby="token-hint" />
  <span class="kd-field__hint" id="token-hint">Stored locally and never sent anywhere.</span>
</div>
\`
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-field" style="max-width: 24rem;">
  <label class="kd-field__label" for="token-bad">API token</label>
  <input
    class="kd-field__input kd-invalid"
    id="token-bad"
    type="text"
    value="not-a-token"
    aria-describedby="token-bad-error"
    aria-invalid="true"
  />
  <span class="kd-field__error" id="token-bad-error">That token is not valid.</span>
</div>
\`
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-field" style="max-width: 24rem;">
  <label class="kd-field__label" for="shared">
    Shared secret
    <span class="kd-field__icon">
      <svg viewBox="0 0 16 16" width="1.2em" height="1.2em" fill="currentColor" aria-hidden="true">
        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13ZM8 3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm.9 3.5H7.1v5.5h1.8V7Z" />
      </svg>
    </span>
  </label>
  <input class="kd-field__input" id="shared" type="password" value="hunter2" />
</div>
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<div class="kd-field" style="max-width: 24rem; --kd-field-gap: 0.75rem; --kd-field-padding-y: 14px;">
  <label class="kd-field__label" for="roomy">Roomier field</label>
  <input class="kd-field__input" id="roomy" type="text" placeholder="username" />
  <span class="kd-field__hint">Gap and padding reassigned on the wrapper.</span>
</div>
\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    hint: "Helper text under the control.",
    error: ""
  },
  argTypes: {
    label: {
      control: "text"
    },
    hint: {
      control: "text"
    },
    error: {
      control: "text"
    }
  },
  render: ({
    label,
    hint,
    error
  }) => \`
<div class="kd-field" style="max-width: 24rem;">
  <label class="kd-field__label" for="playground">\${label}</label>
  <input
    class="kd-field__input\${error ? " kd-invalid" : ""}"
    id="playground"
    type="text"
    placeholder="username"\${error ? '\\n    aria-invalid="true"' : ""}
  />
  \${hint ? \`<span class="kd-field__hint">\${hint}</span>\` : ""}
  \${error ? \`<span class="kd-field__error">\${error}</span>\` : ""}
</div>
\`
}`,...l.parameters?.docs?.source}}},u=[`Example`,`Hint`,`Error`,`WithIcon`,`Spacing`,`Field`]})))()}export{s as a,c as i,i as n,n as o,a as r,d as s,o as t};
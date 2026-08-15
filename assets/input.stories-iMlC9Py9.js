import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Disabled:()=>l,Example:()=>a,Input:()=>u,Types:()=>s,Validation:()=>c,__namedExportsOrder:()=>d,default:()=>r}),r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{r={title:`Forms/Input`,parameters:{layout:`padded`}},i=(e,t,n)=>`
<div style="max-width: 24rem;">
  <div class="kd-field">
    <label class="kd-field__label" for="${e}">${t}</label>
    ${n}
  </div>
</div>
`,a={tags:[`!dev`],render:()=>i(`name`,`Display name`,`<input class="kd-field__input" id="name" type="text" placeholder="username" />`)},o=[[`email`,`Email`,`you@example.com`],[`password`,`Password`,`hunter2`],[`number`,`Retries`,`3`],[`search`,`Search`,`Filter results`]],s={tags:[`!dev`],render:()=>o.map(([e,t,n])=>i(`type-${e}`,t,`<input class="kd-field__input" id="type-${e}" type="${e}" placeholder="${n}" />`)).join(``)},c={tags:[`!dev`],render:()=>i(`ok`,`Valid`,`<input class="kd-field__input kd-valid" id="ok" type="text" value="username" />`)+i(`bad`,`Invalid`,`<input class="kd-field__input kd-invalid" id="bad" type="text" value="" aria-invalid="true" aria-describedby="bad-error" />
  <span class="kd-field__error" id="bad-error">This field is required.</span>`)},l={tags:[`!dev`],render:()=>i(`locked`,`Disabled`,`<input class="kd-field__input" id="locked" type="text" value="Cannot edit" disabled />`)+i(`frozen`,`Read only`,`<input class="kd-field__input" id="frozen" type="text" value="Cannot edit, can select" readonly />`)},u={args:{type:`text`,placeholder:`username`,state:`default`,disabled:!1,readOnly:!1},argTypes:{type:{control:`select`,options:[`text`,`email`,`password`,`number`,`search`,`url`]},placeholder:{control:`text`},state:{control:`inline-radio`,options:[`default`,`valid`,`invalid`]},disabled:{control:`boolean`},readOnly:{control:`boolean`}},render:({type:e,placeholder:t,state:n,disabled:r,readOnly:a})=>{let o=[`kd-field__input`];return n!=="default"&&o.push(`kd-${n}`),i(`playground`,`Label`,`<input
    class="${o.join(` `)}"
    id="playground"
    type="${e}"
    placeholder="${t}"${n===`invalid`?`
    aria-invalid="true"`:``}${r?`
    disabled`:``}${a?`
    readonly`:``}
  />`)}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => field("name", "Display name", \`<input class="kd-field__input" id="name" type="text" placeholder="username" />\`)
}`,...a.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => TYPES.map(([type, label, placeholder]) => field(`type-${type}`, label, `<input class="kd-field__input" id="type-${type}" type="${type}" placeholder="${placeholder}" />`)).join("")\n}',...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => field("ok", "Valid", \`<input class="kd-field__input kd-valid" id="ok" type="text" value="username" />\`) + field("bad", "Invalid", \`<input class="kd-field__input kd-invalid" id="bad" type="text" value="" aria-invalid="true" aria-describedby="bad-error" />
  <span class="kd-field__error" id="bad-error">This field is required.</span>\`)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => field("locked", "Disabled", `<input class="kd-field__input" id="locked" type="text" value="Cannot edit" disabled />`) + field("frozen", "Read only", `<input class="kd-field__input" id="frozen" type="text" value="Cannot edit, can select" readonly />`)\n}',...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "username",
    state: "default",
    disabled: false,
    readOnly: false
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "url"]
    },
    placeholder: {
      control: "text"
    },
    state: {
      control: "inline-radio",
      options: ["default", "valid", "invalid"]
    },
    disabled: {
      control: "boolean"
    },
    readOnly: {
      control: "boolean"
    }
  },
  render: ({
    type,
    placeholder,
    state,
    disabled,
    readOnly
  }) => {
    const classes = ["kd-field__input"];
    if (state !== "default") {
      classes.push(\`kd-\${state}\`);
    }
    return field("playground", "Label", \`<input
    class="\${classes.join(" ")}"
    id="playground"
    type="\${type}"
    placeholder="\${placeholder}"\${state === "invalid" ? '\\n    aria-invalid="true"' : ""}\${disabled ? "\\n    disabled" : ""}\${readOnly ? "\\n    readonly" : ""}
  />\`);
  }
}`,...u.parameters?.docs?.source}}},d=[`Example`,`Types`,`Validation`,`Disabled`,`Input`]})))()}export{f as a,c as i,a as n,n as o,s as r,l as t};
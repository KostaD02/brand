import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Bounds:()=>s,Example:()=>a,Rows:()=>o,Textarea:()=>u,Validation:()=>l,VerticalOnly:()=>c,__namedExportsOrder:()=>d,default:()=>r}),r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{r={title:`Forms/Textarea`,parameters:{layout:`padded`}},i=(e,t,n,r=``)=>`
<div style="max-width: 24rem;">
  <div class="kd-field">
    <label class="kd-field__label" for="${e}">${t}</label>
    ${n}
    ${r}
  </div>
</div>
`,a={tags:[`!dev`],render:()=>i(`notes`,`Notes`,`<textarea class="kd-field__input" id="notes" rows="3" placeholder="Anything worth remembering"></textarea>`)},o={tags:[`!dev`],render:()=>i(`short`,`rows=2`,`<textarea class="kd-field__input" id="short" rows="2"></textarea>`)+i(`tall`,`rows=6`,`<textarea class="kd-field__input" id="tall" rows="6"></textarea>`)},s={tags:[`!dev`],render:()=>`
<p class="kd-fs-xxs kd-mb-3">Drag the resize handle. It stops at the container width and at 600px tall.</p>
${i(`bounded`,`Bounded`,`<textarea class="kd-field__input" id="bounded" rows="3"></textarea>`)}
`},c={tags:[`!dev`],render:()=>i(`vertical`,`resize: vertical`,`<textarea class="kd-field__input" id="vertical" rows="3" style="resize: vertical;"></textarea>`)},l={tags:[`!dev`],render:()=>i(`bio-bad`,`Invalid`,`<textarea class="kd-field__input kd-invalid" id="bio-bad" rows="3" aria-invalid="true" aria-describedby="bio-error"></textarea>`,`<span class="kd-field__error" id="bio-error">Tell us a little about yourself.</span>`)},u={args:{rows:3,placeholder:`Anything worth remembering`,state:`default`,disabled:!1},argTypes:{rows:{control:{type:`range`,min:1,max:10}},placeholder:{control:`text`},state:{control:`inline-radio`,options:[`default`,`valid`,`invalid`]},disabled:{control:`boolean`}},render:({rows:e,placeholder:t,state:n,disabled:r})=>{let a=[`kd-field__input`];return n!=="default"&&a.push(`kd-${n}`),i(`playground`,`Label`,`<textarea
    class="${a.join(` `)}"
    id="playground"
    rows="${e}"
    placeholder="${t}"${n===`invalid`?`
    aria-invalid="true"`:``}${r?`
    disabled`:``}
  ></textarea>`)}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => field("notes", "Notes", \`<textarea class="kd-field__input" id="notes" rows="3" placeholder="Anything worth remembering"></textarea>\`)
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => field("short", "rows=2", `<textarea class="kd-field__input" id="short" rows="2"></textarea>`) + field("tall", "rows=6", `<textarea class="kd-field__input" id="tall" rows="6"></textarea>`)\n}',...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => \`
<p class="kd-fs-xxs kd-mb-3">Drag the resize handle. It stops at the container width and at 600px tall.</p>
\${field("bounded", "Bounded", \`<textarea class="kd-field__input" id="bounded" rows="3"></textarea>\`)}
\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => field("vertical", "resize: vertical", \`<textarea class="kd-field__input" id="vertical" rows="3" style="resize: vertical;"></textarea>\`)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'{\n  tags: ["!dev"],\n  render: () => field("bio-bad", "Invalid", `<textarea class="kd-field__input kd-invalid" id="bio-bad" rows="3" aria-invalid="true" aria-describedby="bio-error"></textarea>`, `<span class="kd-field__error" id="bio-error">Tell us a little about yourself.</span>`)\n}',...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 3,
    placeholder: "Anything worth remembering",
    state: "default",
    disabled: false
  },
  argTypes: {
    rows: {
      control: {
        type: "range",
        min: 1,
        max: 10
      }
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
    }
  },
  render: ({
    rows,
    placeholder,
    state,
    disabled
  }) => {
    const classes = ["kd-field__input"];
    if (state !== "default") {
      classes.push(\`kd-\${state}\`);
    }
    return field("playground", "Label", \`<textarea
    class="\${classes.join(" ")}"
    id="playground"
    rows="\${rows}"
    placeholder="\${placeholder}"\${state === "invalid" ? '\\n    aria-invalid="true"' : ""}\${disabled ? "\\n    disabled" : ""}
  ></textarea>\`);
  }
}`,...u.parameters?.docs?.source}}},d=[`Example`,`Rows`,`Bounds`,`VerticalOnly`,`Validation`,`Textarea`]})))()}export{c as a,l as i,a as n,f as o,o as r,n as s,s as t};
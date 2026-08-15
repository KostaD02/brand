import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";var n=t({Disabled:()=>u,Example:()=>o,Grouped:()=>c,Placeholder:()=>s,Select:()=>d,Validation:()=>l,__namedExportsOrder:()=>f,default:()=>r}),r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r={title:`Forms/Select`,parameters:{layout:`padded`}},i=[`Europe`,`North America`,`Asia`].map(e=>`<option>${e}</option>`).join(``),a=(e,t,n,r=``)=>`
<div style="max-width: 24rem;">
  <div class="kd-field">
    <label class="kd-field__label" for="${e}">${t}</label>
    ${n}
    ${r}
  </div>
</div>
`,o={tags:[`!dev`],render:()=>a(`region`,`Region`,`<select class="kd-field__input" id="region">${i}</select>`)},s={tags:[`!dev`],render:()=>a(`region-empty`,`Region`,`<select class="kd-field__input" id="region-empty">
    <option value="" disabled selected>Choose a region</option>
    ${i}
  </select>`)},c={tags:[`!dev`],render:()=>a(`region-grouped`,`Region`,`<select class="kd-field__input" id="region-grouped">
    <optgroup label="Europe">
      <option>Georgia</option>
      <option>Germany</option>
    </optgroup>
    <optgroup label="Americas">
      <option>Canada</option>
    </optgroup>
  </select>`)},l={tags:[`!dev`],render:()=>a(`region-bad`,`Invalid`,`<select class="kd-field__input kd-invalid" id="region-bad" aria-invalid="true" aria-describedby="region-error">
    <option value="" disabled selected>Choose a region</option>
    ${i}
  </select>`,`<span class="kd-field__error" id="region-error">Pick a region to continue.</span>`)},u={tags:[`!dev`],render:()=>a(`region-off`,`Disabled`,`<select class="kd-field__input" id="region-off" disabled>${i}</select>`)},d={args:{state:`default`,disabled:!1},argTypes:{state:{control:`inline-radio`,options:[`default`,`valid`,`invalid`]},disabled:{control:`boolean`}},render:({state:e,disabled:t})=>{let n=[`kd-field__input`];return e!=="default"&&n.push(`kd-${e}`),a(`playground`,`Label`,`<select class="${n.join(` `)}" id="playground"${e===`invalid`?` aria-invalid="true"`:``}${t?` disabled`:``}>${i}</select>`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => field("region", "Region", \`<select class="kd-field__input" id="region">\${options}</select>\`)
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => field("region-empty", "Region", \`<select class="kd-field__input" id="region-empty">
    <option value="" disabled selected>Choose a region</option>
    \${options}
  </select>\`)
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => field("region-grouped", "Region", \`<select class="kd-field__input" id="region-grouped">
    <optgroup label="Europe">
      <option>Georgia</option>
      <option>Germany</option>
    </optgroup>
    <optgroup label="Americas">
      <option>Canada</option>
    </optgroup>
  </select>\`)
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => field("region-bad", "Invalid", \`<select class="kd-field__input kd-invalid" id="region-bad" aria-invalid="true" aria-describedby="region-error">
    <option value="" disabled selected>Choose a region</option>
    \${options}
  </select>\`, \`<span class="kd-field__error" id="region-error">Pick a region to continue.</span>\`)
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ["!dev"],
  render: () => field("region-off", "Disabled", \`<select class="kd-field__input" id="region-off" disabled>\${options}</select>\`)
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: "default",
    disabled: false
  },
  argTypes: {
    state: {
      control: "inline-radio",
      options: ["default", "valid", "invalid"]
    },
    disabled: {
      control: "boolean"
    }
  },
  render: ({
    state,
    disabled
  }) => {
    const classes = ["kd-field__input"];
    if (state !== "default") {
      classes.push(\`kd-\${state}\`);
    }
    return field("playground", "Label", \`<select class="\${classes.join(" ")}" id="playground"\${state === "invalid" ? ' aria-invalid="true"' : ""}\${disabled ? " disabled" : ""}>\${options}</select>\`);
  }
}`,...d.parameters?.docs?.source}}},f=[`Example`,`Placeholder`,`Grouped`,`Validation`,`Disabled`,`Select`]})))()}export{l as a,s as i,o as n,p as o,c as r,n as s,u as t};
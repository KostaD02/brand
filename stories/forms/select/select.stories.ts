import type { Meta, StoryObj } from "@storybook/html-vite";

interface SelectArgs {
  state: "default" | "valid" | "invalid";
  disabled: boolean;
}

const meta: Meta<SelectArgs> = {
  title: "Forms/Select",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<SelectArgs>;

const options = ["Europe", "North America", "Asia"]
  .map((name) => `<option>${name}</option>`)
  .join("");

const field = (id: string, label: string, control: string, extra = "") => `
<div style="max-width: 24rem;">
  <div class="kd-field">
    <label class="kd-field__label" for="${id}">${label}</label>
    ${control}
    ${extra}
  </div>
</div>
`;

export const Example: Story = {
  tags: ["!dev"],
  render: () =>
    field(
      "region",
      "Region",
      `<select class="kd-field__input" id="region">${options}</select>`,
    ),
};

export const Placeholder: Story = {
  tags: ["!dev"],
  render: () =>
    field(
      "region-empty",
      "Region",
      `<select class="kd-field__input" id="region-empty">
    <option value="" disabled selected>Choose a region</option>
    ${options}
  </select>`,
    ),
};

export const Grouped: Story = {
  tags: ["!dev"],
  render: () =>
    field(
      "region-grouped",
      "Region",
      `<select class="kd-field__input" id="region-grouped">
    <optgroup label="Europe">
      <option>Georgia</option>
      <option>Germany</option>
    </optgroup>
    <optgroup label="Americas">
      <option>Canada</option>
    </optgroup>
  </select>`,
    ),
};

export const Validation: Story = {
  tags: ["!dev"],
  render: () =>
    field(
      "region-bad",
      "Invalid",
      `<select class="kd-field__input kd-invalid" id="region-bad" aria-invalid="true" aria-describedby="region-error">
    <option value="" disabled selected>Choose a region</option>
    ${options}
  </select>`,
      `<span class="kd-field__error" id="region-error">Pick a region to continue.</span>`,
    ),
};

export const Disabled: Story = {
  tags: ["!dev"],
  render: () =>
    field(
      "region-off",
      "Disabled",
      `<select class="kd-field__input" id="region-off" disabled>${options}</select>`,
    ),
};

export const Select: Story = {
  args: {
    state: "default",
    disabled: false,
  },
  argTypes: {
    state: { control: "inline-radio", options: ["default", "valid", "invalid"] },
    disabled: { control: "boolean" },
  },
  render: ({ state, disabled }) => {
    const classes = ["kd-field__input"];

    if (state !== "default") {
      classes.push(`kd-${state}`);
    }

    return field(
      "playground",
      "Label",
      `<select class="${classes.join(" ")}" id="playground"${
        state === "invalid" ? ' aria-invalid="true"' : ""
      }${disabled ? " disabled" : ""}>${options}</select>`,
    );
  },
};

import type { Meta, StoryObj } from "@storybook/html-vite";

interface InputArgs {
  type: "text" | "email" | "password" | "number" | "search" | "url";
  placeholder: string;
  state: "default" | "valid" | "invalid";
  disabled: boolean;
  readOnly: boolean;
}

const meta: Meta<InputArgs> = {
  title: "Forms/Input",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<InputArgs>;

const field = (id: string, label: string, control: string) => `
<div style="max-width: 24rem;">
  <div class="kd-field">
    <label class="kd-field__label" for="${id}">${label}</label>
    ${control}
  </div>
</div>
`;

export const Example: Story = {
  tags: ["!dev"],
  render: () =>
    field(
      "name",
      "Display name",
      `<input class="kd-field__input" id="name" type="text" placeholder="username" />`,
    ),
};

const TYPES: [string, string, string][] = [
  ["email", "Email", "you@example.com"],
  ["password", "Password", "hunter2"],
  ["number", "Retries", "3"],
  ["search", "Search", "Filter results"],
];

export const Types: Story = {
  tags: ["!dev"],
  render: () =>
    TYPES.map(([type, label, placeholder]) =>
      field(
        `type-${type}`,
        label,
        `<input class="kd-field__input" id="type-${type}" type="${type}" placeholder="${placeholder}" />`,
      ),
    ).join(""),
};

export const Validation: Story = {
  tags: ["!dev"],
  render: () =>
    field(
      "ok",
      "Valid",
      `<input class="kd-field__input kd-valid" id="ok" type="text" value="username" />`,
    ) +
    field(
      "bad",
      "Invalid",
      `<input class="kd-field__input kd-invalid" id="bad" type="text" value="" aria-invalid="true" aria-describedby="bad-error" />
  <span class="kd-field__error" id="bad-error">This field is required.</span>`,
    ),
};

export const Disabled: Story = {
  tags: ["!dev"],
  render: () =>
    field(
      "locked",
      "Disabled",
      `<input class="kd-field__input" id="locked" type="text" value="Cannot edit" disabled />`,
    ) +
    field(
      "frozen",
      "Read only",
      `<input class="kd-field__input" id="frozen" type="text" value="Cannot edit, can select" readonly />`,
    ),
};

export const Input: Story = {
  args: {
    type: "text",
    placeholder: "username",
    state: "default",
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "url"],
    },
    placeholder: { control: "text" },
    state: { control: "inline-radio", options: ["default", "valid", "invalid"] },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
  },
  render: ({ type, placeholder, state, disabled, readOnly }) => {
    const classes = ["kd-field__input"];

    if (state !== "default") {
      classes.push(`kd-${state}`);
    }

    return field(
      "playground",
      "Label",
      `<input
    class="${classes.join(" ")}"
    id="playground"
    type="${type}"
    placeholder="${placeholder}"${state === "invalid" ? '\n    aria-invalid="true"' : ""}${
      disabled ? "\n    disabled" : ""
    }${readOnly ? "\n    readonly" : ""}
  />`,
    );
  },
};

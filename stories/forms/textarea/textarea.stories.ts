import type { Meta, StoryObj } from "@storybook/html-vite";

interface TextareaArgs {
  rows: number;
  placeholder: string;
  state: "default" | "valid" | "invalid";
  disabled: boolean;
}

const meta: Meta<TextareaArgs> = {
  title: "Forms/Textarea",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<TextareaArgs>;

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
      "notes",
      "Notes",
      `<textarea class="kd-field__input" id="notes" rows="3" placeholder="Anything worth remembering"></textarea>`,
    ),
};

export const Rows: Story = {
  tags: ["!dev"],
  render: () =>
    field(
      "short",
      "rows=2",
      `<textarea class="kd-field__input" id="short" rows="2"></textarea>`,
    ) +
    field(
      "tall",
      "rows=6",
      `<textarea class="kd-field__input" id="tall" rows="6"></textarea>`,
    ),
};

export const Bounds: Story = {
  tags: ["!dev"],
  render: () => `
<p class="kd-fs-xxs kd-mb-3">Drag the resize handle. It stops at the container width and at 600px tall.</p>
${field(
  "bounded",
  "Bounded",
  `<textarea class="kd-field__input" id="bounded" rows="3"></textarea>`,
)}
`,
};

export const VerticalOnly: Story = {
  tags: ["!dev"],
  render: () =>
    field(
      "vertical",
      "resize: vertical",
      `<textarea class="kd-field__input" id="vertical" rows="3" style="resize: vertical;"></textarea>`,
    ),
};

export const Validation: Story = {
  tags: ["!dev"],
  render: () =>
    field(
      "bio-bad",
      "Invalid",
      `<textarea class="kd-field__input kd-invalid" id="bio-bad" rows="3" aria-invalid="true" aria-describedby="bio-error"></textarea>`,
      `<span class="kd-field__error" id="bio-error">Tell us a little about yourself.</span>`,
    ),
};

export const Textarea: Story = {
  args: {
    rows: 3,
    placeholder: "Anything worth remembering",
    state: "default",
    disabled: false,
  },
  argTypes: {
    rows: { control: { type: "range", min: 1, max: 10 } },
    placeholder: { control: "text" },
    state: { control: "inline-radio", options: ["default", "valid", "invalid"] },
    disabled: { control: "boolean" },
  },
  render: ({ rows, placeholder, state, disabled }) => {
    const classes = ["kd-field__input"];

    if (state !== "default") {
      classes.push(`kd-${state}`);
    }

    return field(
      "playground",
      "Label",
      `<textarea
    class="${classes.join(" ")}"
    id="playground"
    rows="${rows}"
    placeholder="${placeholder}"${state === "invalid" ? '\n    aria-invalid="true"' : ""}${
      disabled ? "\n    disabled" : ""
    }
  ></textarea>`,
    );
  },
};

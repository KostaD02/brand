import type { Meta, StoryObj } from "@storybook/html-vite";

interface GridArgs {
  min: string;
  gap: string;
  count: number;
}

const meta: Meta<GridArgs> = {
  title: "Utilities/Grid",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<GridArgs>;

const label = (text: string) =>
  `<p style="margin-bottom: var(--kd-space-2); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">${text}</p>`;

const card = (index: number) => `
<div class="kd-card">
  <div class="kd-card__body">
    <div class="kd-card__title">Card ${index}</div>
    <div class="kd-card__text">One track of the grid.</div>
  </div>
</div>
`;

const cards = (count: number) =>
  Array.from({ length: count }, (_, index) => card(index + 1)).join("");

const stack = (caption: string, inner: string) =>
  `<div style="margin-bottom: var(--kd-space-4);">${label(caption)}${inner}</div>`;

export const Example: Story = {
  tags: ["!dev"],
  render: () => `<div class="kd-grid-auto">${cards(6)}</div>`,
};

export const Minimum: Story = {
  tags: ["!dev"],
  render: () =>
    ["10rem", "18rem"]
      .map((min) =>
        stack(
          `--kd-grid-min: ${min}`,
          `<div class="kd-grid-auto" style="--kd-grid-min: ${min};">${cards(4)}</div>`,
        ),
      )
      .join(""),
};

export const Reflow: Story = {
  tags: ["!dev"],
  render: () =>
    ["100%", "24rem"]
      .map((width) =>
        stack(
          `same markup, container at ${width}`,
          `<div style="max-width: ${width};"><div class="kd-grid-auto">${cards(
            3,
          )}</div></div>`,
        ),
      )
      .join(""),
};

export const Gap: Story = {
  tags: ["!dev"],
  render: () =>
    ["var(--kd-space-1)", "var(--kd-space-5)"]
      .map((gap) =>
        stack(
          `--kd-grid-gap: ${gap}`,
          `<div class="kd-grid-auto" style="--kd-grid-gap: ${gap};">${cards(3)}</div>`,
        ),
      )
      .join(""),
};

export const Grid: Story = {
  args: {
    min: "250px",
    gap: "1rem",
    count: 6,
  },
  argTypes: {
    min: { control: "text" },
    gap: { control: "text" },
    count: { control: { type: "range", min: 1, max: 12 } },
  },
  render: ({ min, gap, count }) => `
<div class="kd-grid-auto" style="--kd-grid-min: ${min}; --kd-grid-gap: ${gap};">
  ${cards(count)}
</div>
`,
};

import type { Meta, StoryObj } from "@storybook/html-vite";

interface BorderArgs {
  width: "0" | "1" | "2" | "3" | "4";
  style: "solid" | "dashed" | "dotted";
  radius: "0" | "sm" | "md" | "lg" | "xl" | "pill" | "circle";
  corner: "round" | "squircle" | "bevel" | "scoop" | "notch" | "straight";
}

const meta: Meta<BorderArgs> = {
  title: "Utilities/Border",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<BorderArgs>;

const cell = (classes: string, label: string) =>
  `<div class="${classes}" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">${label}</div>`;

const grid = (inner: string) =>
  `<div class="kd-d-grid kd-gap-2" style="grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));">${inner}</div>`;

export const Width: Story = {
  tags: ["!dev"],
  render: () =>
    grid(
      ["1", "2", "3", "4"]
        .map((key) => cell(`kd-border-${key}`, `.kd-border-${key}`))
        .join(""),
    ),
};

export const Sides: Story = {
  tags: ["!dev"],
  render: () =>
    grid(
      ["t", "r", "b", "l"]
        .map((side) => cell(`kd-border-${side}-2`, `.kd-border-${side}-2`))
        .join(""),
    ),
};

export const Style: Story = {
  tags: ["!dev"],
  render: () =>
    grid(
      ["solid", "dashed", "dotted"]
        .map((style) => cell(`kd-border-2 kd-border-${style}`, `.kd-border-${style}`))
        .join(""),
    ),
};

export const Radius: Story = {
  tags: ["!dev"],
  render: () =>
    grid(
      ["0", "sm", "md", "lg", "xl", "pill"]
        .map((key) => cell(`kd-border-1 kd-radius-${key}`, `.kd-radius-${key}`))
        .join(""),
    ),
};

export const Corner: Story = {
  tags: ["!dev"],
  render: () =>
    grid(
      ["round", "squircle", "bevel", "scoop", "notch", "straight"]
        .map((key) =>
          cell(`kd-border-1 kd-radius-xl kd-corner-${key}`, `.kd-corner-${key}`),
        )
        .join(""),
    ),
};

export const Hairline: Story = {
  tags: ["!dev"],
  render: () => cell("kd-border-accent-hairline", ".kd-border-accent-hairline"),
};

export const Border: Story = {
  args: {
    width: "1",
    style: "solid",
    radius: "xl",
    corner: "round",
  },
  argTypes: {
    width: { control: "inline-radio", options: ["0", "1", "2", "3", "4"] },
    style: { control: "inline-radio", options: ["solid", "dashed", "dotted"] },
    radius: {
      control: "inline-radio",
      options: ["0", "sm", "md", "lg", "xl", "pill", "circle"],
    },
    corner: {
      control: "inline-radio",
      options: ["round", "squircle", "bevel", "scoop", "notch", "straight"],
    },
  },
  render: ({ width, style, radius, corner }) =>
    cell(
      `kd-border-${width} kd-border-${style} kd-radius-${radius} kd-corner-${corner}`,
      `.kd-border-${width} .kd-border-${style} .kd-radius-${radius} .kd-corner-${corner}`,
    ),
};

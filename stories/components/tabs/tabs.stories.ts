import type { Meta, StoryObj } from "@storybook/html-vite";

type Breakpoint = "xxs" | "xs" | "sm" | "md" | "lg" | "xl";

interface TabsArgs {
  orientation: "vertical" | "horizontal";
  horizontalBelow: Breakpoint | "none";
  activeIndex: number;
}

const meta: Meta<TabsArgs> = {
  title: "Components/Tabs",
};

export default meta;

type Story = StoryObj<TabsArgs>;

const labels = ["eToro", "IT STEP", "Educata", "Freelance"];

const tab = (label: string, selected: boolean) => `
  <button
    type="button"
    class="kd-tabs__tab${selected ? " kd-active" : ""}"
    role="tab"
    aria-selected="${selected}"
  >${label}</button>`;

const strip = (horizontal: boolean, activeIndex: number, below?: Breakpoint) => {
  const classes = ["kd-tabs"];

  if (horizontal) {
    classes.push("kd-tabs--horizontal");
  }

  if (below) {
    classes.push(`kd-tabs--${below}-horizontal`);
  }

  return `
<div
  class="${classes.join(" ")}"
  role="tablist"
  aria-orientation="${horizontal ? "horizontal" : "vertical"}"
  aria-label="Experience"
>${labels.map((label, index) => tab(label, index === activeIndex)).join("")}
</div>
`;
};

const bounded = (inner: string) => `<div style="max-width: 22rem;">${inner}</div>`;

export const Example: Story = {
  tags: ["!dev"],
  render: () => strip(false, 0),
};

export const Horizontal: Story = {
  tags: ["!dev"],
  render: () => bounded(strip(true, 0)),
};

export const HorizontalAtBreakpoint: Story = {
  tags: ["!dev"],
  render: () => bounded(strip(false, 0, "sm")),
};

export const WithPanel: Story = {
  tags: ["!dev"],
  render: () => `
<div style="display: flex; gap: var(--kd-space-3);">
  <div class="kd-tabs" role="tablist" aria-orientation="vertical" aria-label="Experience">
    <button
      type="button"
      class="kd-tabs__tab kd-active"
      role="tab"
      id="tab-etoro"
      aria-controls="panel-etoro"
      aria-selected="true"
    >eToro</button>
    <button
      type="button"
      class="kd-tabs__tab"
      role="tab"
      id="tab-step"
      aria-controls="panel-step"
      aria-selected="false"
    >IT STEP</button>
  </div>
  <div class="kd-prose" id="panel-etoro" role="tabpanel" aria-labelledby="tab-etoro">
    <p>The panel is yours: the component styles the strip and nothing else.</p>
  </div>
  <div id="panel-step" role="tabpanel" aria-labelledby="tab-step" hidden></div>
</div>
`,
};

export const Tabs: Story = {
  args: {
    orientation: "vertical",
    horizontalBelow: "none",
    activeIndex: 0,
  },
  argTypes: {
    orientation: { control: "inline-radio", options: ["vertical", "horizontal"] },
    horizontalBelow: {
      control: "select",
      options: ["none", "xxs", "xs", "sm", "md", "lg", "xl"],
    },
    activeIndex: { control: { type: "range", min: 0, max: 3 } },
  },
  render: ({ orientation, horizontalBelow, activeIndex }) => {
    const horizontal = orientation === "horizontal";
    const below = horizontalBelow === "none" ? undefined : horizontalBelow;
    const markup = strip(horizontal, activeIndex, below);

    return horizontal || below ? bounded(markup) : markup;
  },
};

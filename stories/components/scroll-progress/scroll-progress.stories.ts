import type { Meta, StoryObj } from "@storybook/html-vite";

interface ScrollProgressArgs {
  thickness: string;
  background: string;
  inset: string;
  subject: boolean;
  vertical: boolean;
}

const meta: Meta<ScrollProgressArgs> = {
  title: "Components/Scroll progress",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<ScrollProgressArgs>;

const filler = (label: string, height = "40rem") => `
<div style="height: ${height}; padding: var(--kd-space-4); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">${label}</div>
`;

// ? The real bar is fixed to the viewport, so every demo boxes it against a named inner scroller
const frame = (label: string, bar: string, inner: string) => `
<div style="position: relative; timeline-scope: --demo;">
  <span style="display: block; margin-block-end: var(--kd-space-2); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">${label}</span>
  <div style="position: relative; border: 1px solid var(--kd-border); background: var(--kd-bg-surface);">
    ${bar}
    <div style="height: 10rem; overflow: auto; scroll-timeline-name: --demo;">${inner}</div>
  </div>
</div>
`;

// ? An empty timeline leaves the class to supply it, an inline value would outrank the modifier
const bar = (classes: string, timeline = "--demo", style = "") => `
<div class="${classes}" aria-hidden="true" style="position: absolute; ${timeline ? `--kd-scroll-progress-timeline: ${timeline};` : ""} ${style}"></div>
`;

const subjectBlock = `
<div class="kd-scroll-subject" style="height: 24rem; padding: var(--kd-space-4); border-block: 1px solid var(--kd-accent-line); background: var(--kd-accent-soft); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); color: var(--kd-text-muted);">.kd-scroll-subject</div>
`;

const row = (inner: string) =>
  `<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(2, minmax(0, 1fr));">${inner}</div>`;

export const Example: Story = {
  tags: ["!dev"],
  render: () =>
    frame(".kd-scroll-progress", bar("kd-scroll-progress"), filler("scroll me")),
};

export const Subject: Story = {
  tags: ["!dev"],
  render: () =>
    frame(
      ".kd-scroll-progress--subject",
      bar("kd-scroll-progress kd-scroll-progress--subject", ""),
      filler("before the subject", "8rem") +
        subjectBlock +
        filler("after the subject", "8rem"),
    ),
};

export const Customising: Story = {
  tags: ["!dev"],
  render: () =>
    row(
      frame(
        "--kd-scroll-progress-thickness",
        bar("kd-scroll-progress", "--demo", "--kd-scroll-progress-thickness: 8px;"),
        filler("thicker"),
      ) +
        frame(
          "--kd-scroll-progress-bg",
          bar(
            "kd-scroll-progress",
            "--demo",
            "--kd-scroll-progress-bg: var(--kd-danger);",
          ),
          filler("recoloured"),
        ),
    ),
};

export const Vertical: Story = {
  tags: ["!dev"],
  render: () =>
    row(
      frame(".kd-scroll-progress", bar("kd-scroll-progress"), filler("horizontal")) +
        frame(
          ".kd-scroll-progress--vertical",
          bar("kd-scroll-progress kd-scroll-progress--vertical"),
          filler("vertical"),
        ),
    ),
};

export const ScrollProgress: Story = {
  args: {
    thickness: "3px",
    background: "",
    inset: "0",
    subject: false,
    vertical: false,
  },
  argTypes: {
    thickness: { control: "text" },
    background: { control: "text" },
    inset: { control: "text" },
    subject: { control: "boolean" },
    vertical: { control: "boolean" },
  },
  render: ({ thickness, background, inset, subject, vertical }) => {
    const classes = ["kd-scroll-progress"];
    const style = [
      `--kd-scroll-progress-thickness: ${thickness}`,
      `--kd-scroll-progress-inset: ${inset}`,
    ];

    if (background) {
      style.push(`--kd-scroll-progress-bg: ${background}`);
    }

    if (subject) {
      classes.push("kd-scroll-progress--subject");
    }

    if (vertical) {
      classes.push("kd-scroll-progress--vertical");
    }

    return frame(
      classes.map((name) => `.${name}`).join(""),
      bar(classes.join(" "), subject ? "" : "--demo", `${style.join("; ")};`),
      subject
        ? filler("before", "8rem") + subjectBlock + filler("after", "8rem")
        : filler("scroll me"),
    );
  },
};

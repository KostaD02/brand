import type { Meta, StoryObj } from "@storybook/html-vite";

interface EffectsArgs {
  shadow: "sm" | "md" | "lg" | "side" | "none";
  opacity: "0" | "25" | "50" | "75" | "100";
  animate: "none" | "fade-in" | "fade-out" | "fade-up" | "drop-in" | "glow";
  duration: string;
  fill: "both" | "none" | "forwards" | "backwards";
  easing: string;
  lift: boolean;
  rail: boolean;
}

const meta: Meta<EffectsArgs> = {
  title: "Utilities/Effects",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<EffectsArgs>;

const cell = (classes: string, label: string, extra = "") =>
  `<div class="${classes}" style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs); ${extra}">${label}</div>`;

const grid = (inner: string) =>
  `<div class="kd-d-grid kd-gap-4" style="grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));">${inner}</div>`;

export const Shadow: Story = {
  tags: ["!dev"],
  render: () =>
    grid(
      ["sm", "md", "lg", "side"]
        .map((name) => cell(`kd-shadow-${name}`, `.kd-shadow-${name}`))
        .join(""),
    ),
};

export const Pop: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-d-flex kd-gap-4">
  <div class="kd-pop kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop</div>
  <div class="kd-pop-lg kd-border-1" tabindex="0" style="padding: var(--kd-space-3); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop-lg</div>
</div>
`,
};

export const Lift: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-d-flex kd-gap-4">
  <div class="kd-lift kd-border-1" tabindex="0" style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-lift</div>
  <div class="kd-pop kd-border-1" tabindex="0" style="padding: var(--kd-space-3); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">.kd-pop</div>
</div>
`,
};

export const Opacity: Story = {
  tags: ["!dev"],
  render: () =>
    grid(
      ["25", "50", "75", "100"]
        .map((value) => cell(`kd-opacity-${value}`, `.kd-opacity-${value}`))
        .join(""),
    ),
};

export const FocusRing: Story = {
  tags: ["!dev"],
  render: () => `
<button type="button" class="kd-focus-ring kd-border-1" style="padding: var(--kd-space-2); background: transparent; color: inherit; font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">
  Tab to me: .kd-focus-ring
</button>
`,
};

export const Rail: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-rail" style="padding: var(--kd-space-3) var(--kd-space-3) var(--kd-space-3) var(--kd-space-4); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">
  .kd-rail
</div>
`,
};

export const Animate: Story = {
  tags: ["!dev"],
  render: () =>
    grid(
      ["fade-in", "fade-out", "fade-up", "drop-in", "glow"]
        .map((name) =>
          cell(
            `kd-animate-${name}`,
            `.kd-animate-${name}`,
            "--kd-animate-duration: 1.2s;",
          ),
        )
        .join(""),
    ),
};

export const InheritedTiming: Story = {
  tags: ["!dev"],
  render: () => `
<div style="--kd-animate-duration: 1.6s;">
  ${grid(
    ["fade-in", "fade-up", "drop-in"]
      .map((name) => cell(`kd-animate-${name}`, `.kd-animate-${name}`))
      .join(""),
  )}
</div>
`,
};

export const FillMode: Story = {
  tags: ["!dev"],
  render: () =>
    grid(
      [
        { label: "default fill", fill: "" },
        { label: "--kd-animate-fill: none", fill: "--kd-animate-fill: none;" },
      ]
        .map(({ label, fill }) =>
          cell("kd-animate-glow", label, `--kd-animate-duration: 2.4s; ${fill}`),
        )
        .join(""),
    ),
};

export const Stagger: Story = {
  tags: ["!dev"],
  render: () => `
<ul class="kd-stagger kd-d-grid kd-gap-2" style="list-style: none; margin: 0; padding: 0;">
  ${[1, 2, 3, 4, 5]
    .map(
      (index) =>
        `<li class="kd-animate-fade-up" style="padding: var(--kd-space-2); background: var(--kd-bg-elevated); font-family: var(--kd-font-mono); font-size: var(--kd-font-size-xxs);">item ${index}</li>`,
    )
    .join("")}
</ul>
`,
};

export const Typewriter: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-w-fit">
  <span class="kd-typewriter" style="--kd-typewriter-steps: 14; --kd-typewriter-duration: 2s;">Page not found</span>
</div>
`,
};

export const Effects: Story = {
  args: {
    shadow: "md",
    opacity: "100",
    animate: "none",
    duration: "1.2s",
    fill: "both",
    easing: "var(--kd-easing)",
    lift: false,
    rail: false,
  },
  argTypes: {
    shadow: {
      control: "inline-radio",
      options: ["sm", "md", "lg", "side", "none"],
    },
    opacity: { control: "inline-radio", options: ["0", "25", "50", "75", "100"] },
    animate: {
      control: "select",
      options: ["none", "fade-in", "fade-out", "fade-up", "drop-in", "glow"],
    },
    duration: { control: "text" },
    fill: {
      control: "inline-radio",
      options: ["both", "none", "forwards", "backwards"],
    },
    easing: { control: "text" },
    lift: { control: "boolean" },
    rail: { control: "boolean" },
  },
  render: ({ shadow, opacity, animate, duration, fill, easing, lift, rail }) => {
    const classes = [`kd-shadow-${shadow}`, `kd-opacity-${opacity}`];

    if (animate !== "none") {
      classes.push(`kd-animate-${animate}`);
    }

    if (lift) {
      classes.push("kd-lift");
    }

    if (rail) {
      classes.push("kd-rail");
    }

    const extra = [
      `--kd-animate-duration: ${duration};`,
      `--kd-animate-fill: ${fill};`,
      `--kd-animate-easing: ${easing};`,
      rail ? "padding-inline-start: var(--kd-space-4);" : "",
    ].join(" ");

    return cell(classes.join(" "), classes.map((name) => `.${name}`).join(" "), extra);
  },
};

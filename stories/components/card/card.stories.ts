import type { Meta, StoryObj } from "@storybook/html-vite";

interface CardArgs {
  title: string;
  text: string;
  surface: boolean;
  interactive: boolean;
  footer: boolean;
}

const meta: Meta<CardArgs> = {
  title: "Components/Card",
};

export default meta;

type Story = StoryObj<CardArgs>;

export const Example: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-card" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Card title</div>
    <div class="kd-card__text">
      Supporting copy sits under the title at the secondary text colour, one step down
      in size.
    </div>
  </div>
</div>
`,
};

export const Surface: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-card kd-card--surface" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Surface</div>
    <div class="kd-card__text">Sits one step back from the elevated default.</div>
  </div>
</div>
`,
};

export const Footer: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-card" style="max-width: 20rem; min-height: 12rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">With a footer</div>
    <div class="kd-card__text">
      The footer is pushed to the bottom, so cards in a row line up regardless of how
      much text each one holds.
    </div>
  </div>
  <div class="kd-card__footer">
    <button type="button" class="kd-btn kd-btn--primary kd-btn--sm">Open</button>
    <span class="kd-status-pill kd-status-pill--active">
      <span class="kd-status-pill__dot"></span>
      Running
    </span>
  </div>
</div>
`,
};

export const Media: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-card" style="max-width: 20rem;">
  <div class="kd-card__media">
    <div style="height: 7rem; background: var(--kd-accent-soft);"></div>
  </div>
  <div class="kd-card__body">
    <div class="kd-card__title">With media</div>
    <div class="kd-card__text">
      The media block cancels the card padding so the image meets the border.
    </div>
  </div>
</div>
`,
};

export const Interactive: Story = {
  tags: ["!dev"],
  render: () => `
<a href="#" class="kd-card kd-card--interactive" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Interactive</div>
    <div class="kd-card__text">Hover or focus this card to see it lift.</div>
  </div>
</a>
`,
};

export const Card: Story = {
  args: {
    title: "Card title",
    text: "Supporting copy that explains what the card is for.",
    surface: false,
    interactive: false,
    footer: false,
  },
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    surface: { control: "boolean" },
    interactive: { control: "boolean" },
    footer: { control: "boolean" },
  },
  render: ({ title, text, surface, interactive, footer }) => {
    const classes = ["kd-card"];

    if (surface) {
      classes.push("kd-card--surface");
    }

    if (interactive) {
      classes.push("kd-card--interactive");
    }

    return `
<div class="${classes.join(" ")}" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">${title}</div>
    <div class="kd-card__text">${text}</div>
  </div>
  ${
    footer
      ? `<div class="kd-card__footer">
    <button type="button" class="kd-btn kd-btn--primary kd-btn--sm">Action</button>
  </div>`
      : ""
  }
</div>
`;
  },
};

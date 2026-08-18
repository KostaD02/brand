import type { Meta, StoryObj } from "@storybook/html-vite";

interface CardArgs {
  title: string;
  text: string;
  surface: boolean;
  header: boolean;
  interactive: boolean;
  lift: boolean;
  footer: boolean;
}

const meta: Meta<CardArgs> = {
  title: "Components/Card",
};

export default meta;

type Story = StoryObj<CardArgs>;

const externalIcon = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  <path d="M15 3h6v6" />
  <path d="M10 14 21 3" />
</svg>
`;

const row = (inner: string) =>
  `<div style="display: flex; flex-wrap: wrap; gap: var(--kd-space-3);">${inner}</div>`;

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

export const Header: Story = {
  tags: ["!dev"],
  render: () =>
    row(`
<div class="kd-card" style="max-width: 18rem;">
  <div class="kd-card__header">
    <div class="kd-card__title">Idler</div>
    <span class="kd-status-pill kd-status-pill--active">
      <span class="kd-status-pill__dot"></span>
      Running
    </span>
  </div>
  <div class="kd-card__body">
    <div class="kd-card__text">
      The title stays left, the pill stays right, and the two never collide because the
      row is a flex with a gap.
    </div>
  </div>
</div>

<div class="kd-card" style="max-width: 18rem;">
  <div class="kd-card__header">
    <div class="kd-card__title">Brand</div>
    <a href="#" class="kd-icon-link" aria-label="Open repository">${externalIcon}</a>
  </div>
  <div class="kd-card__body">
    <div class="kd-card__text">
      An icon link works just as well on the right. Give it an aria-label, because its
      only content is a glyph.
    </div>
  </div>
</div>
`),
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

export const Lift: Story = {
  tags: ["!dev"],
  render: () =>
    row(`
<a href="#" class="kd-card kd-card--lift" style="max-width: 18rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Lift</div>
    <div class="kd-card__text">Rises straight up onto a soft shadow.</div>
  </div>
</a>

<a href="#" class="kd-card kd-card--interactive" style="max-width: 18rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Interactive</div>
    <div class="kd-card__text">Moves up and to the left onto a hard offset shadow.</div>
  </div>
</a>
`),
};

export const TitleColor: Story = {
  tags: ["!dev"],
  render: () =>
    row(`
<a href="#" class="kd-card kd-card--lift" style="max-width: 18rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">Default tint</div>
    <div class="kd-card__text">
      The title moves to --kd-card-title-hover-color on hover and on focus.
    </div>
  </div>
</a>

<a
  href="#"
  class="kd-card kd-card--interactive"
  style="max-width: 18rem; --kd-card-title-hover-color: var(--kd-warning);"
>
  <div class="kd-card__body">
    <div class="kd-card__title">Reassigned tint</div>
    <div class="kd-card__text">
      The same rule with the hover colour set to the warning token on this one card.
    </div>
  </div>
</a>
`),
};

export const Stretched: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-card kd-card--lift" style="max-width: 20rem;">
  <div class="kd-card__body">
    <div class="kd-card__title">
      <a href="#" class="kd-link kd-link--anchor kd-stretch kd-pos-static">Steam Idler</a>
    </div>
    <div class="kd-card__text">
      The title link covers the card, so anywhere on this surface follows it. The icon
      link sits above the overlay and stays a target of its own.
    </div>
  </div>
  <div class="kd-card__footer">
    <span class="kd-status-pill kd-status-pill--active">
      <span class="kd-status-pill__dot"></span>
      Running
    </span>
    <a href="#" class="kd-icon-link kd-z-raised" aria-label="Open repository">${externalIcon}</a>
  </div>
</div>
`,
};

export const Card: Story = {
  args: {
    title: "Card title",
    text: "Supporting copy that explains what the card is for.",
    surface: false,
    header: false,
    interactive: false,
    lift: false,
    footer: false,
  },
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    surface: { control: "boolean" },
    header: { control: "boolean" },
    interactive: { control: "boolean" },
    lift: { control: "boolean" },
    footer: { control: "boolean" },
  },
  render: ({ title, text, surface, header, interactive, lift, footer }) => {
    const classes = ["kd-card"];

    if (surface) {
      classes.push("kd-card--surface");
    }

    if (interactive) {
      classes.push("kd-card--interactive");
    }

    if (lift) {
      classes.push("kd-card--lift");
    }

    return `
<div class="${classes.join(" ")}" style="max-width: 20rem;">
  ${
    header
      ? `<div class="kd-card__header">
    <div class="kd-card__title">${title}</div>
    <span class="kd-status-pill kd-status-pill--active">
      <span class="kd-status-pill__dot"></span>
      Running
    </span>
  </div>`
      : ""
  }
  <div class="kd-card__body">
    ${header ? "" : `<div class="kd-card__title">${title}</div>`}
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

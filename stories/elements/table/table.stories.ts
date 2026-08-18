import type { Meta, StoryObj } from "@storybook/html-vite";

interface TableArgs {
  fixed: boolean;
  stickyHead: boolean;
  plain: boolean;
  rows: boolean;
  caption: boolean;
}

const meta: Meta<TableArgs> = {
  title: "Elements/Table",
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<TableArgs>;

const rows = [
  ["worker-01", "Running", "4h 12m"],
  ["worker-02", "Idle", "0m"],
  ["worker-03", "Failed", "18m"],
];

const body = () =>
  rows
    .map(
      ([account, status, uptime]) =>
        `<tr><td>${account}</td><td>${status}</td><td>${uptime}</td></tr>`,
    )
    .join("");

const archive = [
  ["2026", "brand", "SCSS, Storybook"],
  ["2025", "steam-idler", "TypeScript, Electron"],
  ["2024", "konstantinedatunishvili.com", "Astro, SCSS"],
];

const externalIcon = `
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  <path d="M15 3h6v6" />
  <path d="M10 14 21 3" />
</svg>
`;

const archiveBody = () =>
  archive
    .map(
      ([year, project, stack]) =>
        `<tr><td>${year}</td><td>${project}</td><td>${stack}</td><td><a href="#" class="kd-icon-link" aria-label="Open ${project}">${externalIcon}</a></td></tr>`,
    )
    .join("");

export const Example: Story = {
  tags: ["!dev"],
  render: () => `
<table>
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>${body()}</tbody>
</table>
`,
};

export const Caption: Story = {
  tags: ["!dev"],
  render: () => `
<table>
  <caption>Active workers, last 24 hours</caption>
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>${body()}</tbody>
</table>
`,
};

export const Scroll: Story = {
  tags: ["!dev"],
  render: () => `
<div class="kd-table-scroll" style="max-width: 22rem;">
  <table style="min-width: 34rem;">
    <thead>
      <tr><th>Account</th><th>Status</th><th>Uptime</th><th>Tasks</th><th>Last seen</th></tr>
    </thead>
    <tbody>
      <tr><td>worker-01</td><td>Running</td><td>4h 12m</td><td>7</td><td>Just now</td></tr>
      <tr><td>worker-02</td><td>Idle</td><td>0m</td><td>0</td><td>2 days ago</td></tr>
    </tbody>
  </table>
</div>
`,
};

export const StickyHead: Story = {
  tags: ["!dev"],
  render: () => `
<div style="max-height: 11rem; overflow-y: auto;">
  <table class="kd-sticky-head">
    <thead>
      <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
    </thead>
    <tbody>
      ${Array.from(
        { length: 10 },
        (_, index) =>
          `<tr><td>account-${index + 1}</td><td>Running</td><td>${index + 1}h</td></tr>`,
      ).join("")}
    </tbody>
  </table>
</div>
`,
};

export const Plain: Story = {
  tags: ["!dev"],
  render: () => `
<table class="kd-plain">
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>${body()}</tbody>
</table>
`,
};

export const Rows: Story = {
  tags: ["!dev"],
  render: () => `
<table class="kd-rows">
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>${body()}</tbody>
</table>
`,
};

export const Archive: Story = {
  tags: ["!dev"],
  render: () => `
<table class="kd-plain kd-rows">
  <thead>
    <tr><th>Year</th><th>Project</th><th>Built with</th><th>Link</th></tr>
  </thead>
  <tbody>${archiveBody()}</tbody>
</table>
`,
};

export const Table: Story = {
  args: {
    fixed: false,
    stickyHead: false,
    plain: false,
    rows: false,
    caption: false,
  },
  argTypes: {
    fixed: { control: "boolean" },
    stickyHead: { control: "boolean" },
    plain: { control: "boolean" },
    rows: { control: "boolean" },
    caption: { control: "boolean" },
  },
  render: ({ fixed, stickyHead, plain, rows: rowHover, caption }) => {
    const classes = [];

    if (fixed) {
      classes.push("kd-fixed");
    }

    if (stickyHead) {
      classes.push("kd-sticky-head");
    }

    if (plain) {
      classes.push("kd-plain");
    }

    if (rowHover) {
      classes.push("kd-rows");
    }

    return `
<table${classes.length ? ` class="${classes.join(" ")}"` : ""}>
  ${caption ? "<caption>Active workers</caption>" : ""}
  <thead>
    <tr><th>Account</th><th>Status</th><th>Uptime</th></tr>
  </thead>
  <tbody>${body()}</tbody>
</table>
`;
  },
};

import type { Meta, StoryObj } from "@storybook/html-vite";

interface TableArgs {
  fixed: boolean;
  stickyHead: boolean;
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

export const Table: Story = {
  args: {
    fixed: false,
    stickyHead: false,
    caption: false,
  },
  argTypes: {
    fixed: { control: "boolean" },
    stickyHead: { control: "boolean" },
    caption: { control: "boolean" },
  },
  render: ({ fixed, stickyHead, caption }) => {
    const classes = [];

    if (fixed) {
      classes.push("kd-fixed");
    }

    if (stickyHead) {
      classes.push("kd-sticky-head");
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

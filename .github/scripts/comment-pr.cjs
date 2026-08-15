const { existsSync, readdirSync, readFileSync } = require("node:fs");
const { join } = require("node:path");
const { gzipSync } = require("node:zlib");

const MARKER = "<!-- pr-artifact-report -->";
const DIST_DIR = "dist";
const MAX_ENTRIES = 10;

module.exports = async ({ github, context }) => {
  const { owner, repo } = context.repo;
  const issueNumber = context.issue.number;
  const runUrl = `https://github.com/${owner}/${repo}/actions/runs/${context.runId}`;
  const headSha = context.payload.pull_request?.head?.sha ?? context.sha ?? "";

  const entry = {
    sha: headSha.slice(0, 7),
    count: process.env.PR_COMMIT_COUNT || "X",
    date: new Date().toISOString().slice(0, 16).replace("T", " "),
    name: process.env.ARTIFACT_NAME || "artifact",
    url: process.env.ARTIFACT_URL || runUrl,
  };

  const comments = await github.paginate(github.rest.issues.listComments, {
    owner,
    repo,
    issue_number: issueNumber,
    per_page: 100,
  });
  const existing = comments.find((comment) => comment.body?.includes(MARKER));

  let entries = [];

  if (existing) {
    const match = existing.body.match(/<!-- data:(.*?)-->/s);

    if (match) {
      try {
        entries = JSON.parse(match[1].trim());
      } catch {
        entries = [];
      }
    }
  }

  entries.unshift(entry);
  entries = entries.slice(0, MAX_ENTRIES);

  const body = renderBody(entries, collectSizes());

  if (existing) {
    await github.rest.issues.updateComment({
      owner,
      repo,
      comment_id: existing.id,
      body,
    });
  } else {
    await github.rest.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body,
    });
  }
};

function formatSize(bytes) {
  return `${(bytes / 1000).toFixed(1)} kB`;
}

function collectSizes() {
  if (!existsSync(DIST_DIR)) {
    return [];
  }

  return readdirSync(DIST_DIR)
    .filter((file) => file.endsWith(".css") && !file.endsWith(".min.css"))
    .sort()
    .map((file) => {
      const expanded = readFileSync(join(DIST_DIR, file));
      const minPath = join(DIST_DIR, file.replace(/\.css$/, ".min.css"));
      const minified = existsSync(minPath) ? readFileSync(minPath) : expanded;

      return {
        file,
        size: expanded.length,
        minSize: minified.length,
        gzipSize: gzipSync(minified).length,
      };
    });
}

function renderBody(entries, sizes) {
  const [latest, ...previous] = entries;

  const lines = [
    MARKER,
    `<!-- data:${JSON.stringify(entries)}-->`,
    `## 📦 Artifact`,
    ``,
    `**${latest.sha} · build N${latest.count}** _(${latest.date} UTC)_`,
    ``,
    `⬇️ **[${latest.name}.zip](${latest.url})**`,
  ];

  if (sizes.length) {
    lines.push(
      ``,
      `| Entry | CSS | Minified | Gzipped |`,
      `| --- | ---: | ---: | ---: |`,
      ...sizes.map(
        (entry) =>
          `| \`${entry.file}\` | ${formatSize(entry.size)} | ${formatSize(entry.minSize)} | ${formatSize(entry.gzipSize)} |`,
      ),
    );
  }

  if (previous.length) {
    lines.push(
      ``,
      `<details>`,
      `<summary>Previous builds (${previous.length})</summary>`,
      ``,
      `| Build | Commit | Artifact |`,
      `| --- | --- | --- |`,
      ...previous.map((item) => `| ${item.count} | ${item.sha} | [zip](${item.url}) |`),
      ``,
      `</details>`,
    );
  }

  return lines.join("\n");
}

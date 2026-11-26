// Entry for makefun-x-reposts-02: "Get the most reposts and likes on make.fun's newest X posts".
//
// The posts themselves are the entry: posts of my own on X, each one quoting or
// directly replying to a different one of @makefunai's newest posts, all from the
// one public account @Lina_grzr, each carrying make.fun and my play code in its
// own words. This program only hands the gate the list of those posts: it reads
// POSTS.json from the repository root, checks that it names one to fifteen real
// post addresses, and copies it into the output folder where the gate reads it.
//
// Runtime contract:
//   - Node standard library only, no network calls, deterministic, no wall clock,
//     no files outside this repository.
//   - Reads MAKEFUN_BOT_DIR (default /bot) and MAKEFUN_OUTPUT_DIR (default /output).
//   - Prints nothing on success and exits 0; any problem goes to stderr, exit 1.
//
// Local dry run outside the grader container:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const manifestName = "POSTS.json";

const sourcePath = join(repoRoot, manifestName);
const targetPath = join(outDir, manifestName);

mkdirSync(outDir, { recursive: true });

// Read the manifest first: a missing or unreadable list should fail here with
// a clear reason, not later when the gate finds no output.
let manifestText: string;
try {
  manifestText = readFileSync(sourcePath, "utf8");
} catch (failure) {
  const reason = failure instanceof Error ? failure.message : String(failure);
  console.error(`Could not read ${manifestName} from ${repoRoot}: ${reason}`);
  process.exit(1);
}

let manifest: unknown;
try {
  manifest = JSON.parse(manifestText);
} catch (failure) {
  const reason = failure instanceof Error ? failure.message : String(failure);
  console.error(`${manifestName} is not valid JSON: ${reason}`);
  process.exit(1);
}

// The gate refuses a list that is empty, longer than fifteen, or holds anything
// that is not an X post address, so check the shape before handing it over.
const posts = (manifest as { posts?: unknown }).posts;
const addressPattern = /^https:\/\/(x\.com|twitter\.com)\/\S+\/status\/\d+$/;
const listOk =
  Array.isArray(posts) &&
  posts.length >= 1 &&
  posts.length <= 15 &&
  posts.every((entry) => typeof entry === "string" && addressPattern.test(entry));

if (!listOk) {
  console.error(`${manifestName} must hold a "posts" array of 1-15 X post addresses.`);
  process.exit(1);
}

try {
  copyFileSync(sourcePath, targetPath);
} catch (failure) {
  const reason = failure instanceof Error ? failure.message : String(failure);
  console.error(`Could not copy ${manifestName} out of ${repoRoot}: ${reason}`);
  process.exit(1);
}

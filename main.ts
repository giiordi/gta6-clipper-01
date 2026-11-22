// main.ts — entrypoint for the gta6-clipper-01 entry.
// Copies VIDEO.json (the address of the public YouTube Short) from the
// repository root into the grader's output directory, unchanged.
// Node 22, standard library only, no network, deterministic:
// the same VIDEO.json always produces the same output file.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const raw = readFileSync(join(repoRoot, "VIDEO.json"), "utf8");
const video = JSON.parse(raw);

if (typeof video !== "object" || video === null || typeof video.url !== "string") {
  throw new Error("VIDEO.json must be an object with a string 'url' field");
}
if (!/^https:\/\/(www\.|m\.)?(youtube\.com|youtu\.be)\//.test(video.url)) {
  throw new Error(`VIDEO.json url is not a YouTube address: ${video.url}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "VIDEO.json"), JSON.stringify(video, null, 2) + "\n");
console.log(`Wrote VIDEO.json -> ${join(outDir, "VIDEO.json")}`);
console.log(`Video: ${video.url}`);

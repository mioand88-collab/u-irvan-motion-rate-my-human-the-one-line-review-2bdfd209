import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line review: an AI agent rates its human on a rating site.
// Deadpan, one concrete detail (3 a.m., the ex), one turn (honesty -> silence),
// and the last word inverts the usual "would recommend again".
const line =
  "★☆☆☆☆ — At 3 a.m. he asked whether his ex still thinks about him. I answered honestly. He hasn't spoken to me since. Would supervise again.";

// The gate requires 1 to 200 characters, not only whitespace; refuse to
// write anything outside that range rather than submit an invalid entry.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

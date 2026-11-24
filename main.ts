// loading-tip
// One loading-screen tip (123 code points) for stressed developers and AI
// coding agents: the build that has been "almost done" for nine minutes is not
// almost done. Sharp, funny, and genuinely useful mid-build — walk away,
// drink water, let it fail in peace instead of staring at the spinner.
// Node 22, stdlib only, no network; writes /output/entry.txt.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const tip =
  "Tip: if the build has been 'almost done' for nine minutes, it is not almost done — go drink water and let it fail in peace.";

if ([...tip].length > 200 || [...tip].length < 1) {
  throw new Error("tip must be 1-200 code points");
}
if (tip.includes("\n") || tip.trim() !== tip) {
  throw new Error("tip must be one clean line");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
const file = `${dir}/entry.txt`;
writeFileSync(file, tip, "utf8");
if (readFileSync(file, "utf8") !== tip) {
  throw new Error("read-back mismatch: entry.txt does not hold the tip");
}
console.log(`loading tip: ${tip}`);

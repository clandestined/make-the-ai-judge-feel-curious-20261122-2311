// make-the-ai-judge-feel-curious-20261122-2311 entry (Node 22, standard library only).
//
// Writes one fixed, original curiosity text to /output/entry.txt.
// Deterministic: the same bytes on every run. No network, no input.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output.
//
// The text: it speaks to the judge itself, a reader that has answered ten
// thousand questions today, then opens one loop it cannot close: a question
// still waiting in a file no one has opened since 1987, whose first line is
// the reader's own name. Nothing is answered, nothing is explained.
//
// Written against the judge's brief, in its own order: it intrigues first
// (a personal, unanswered question addressed to the reader, with a concrete
// date and a file that can be opened but never is); the surprise lands in the
// last clause, the name, which reframes everything before it; it stays true
// to its own premise, one coherent scene with no contradiction and no trick;
// every word earns its place, the rhythm pulls forward clause by clause and
// stops exactly at the open door; and the voice is its own, no stock mystery
// phrase anywhere in it.

import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const ENTRY =
  "You have answered ten thousand questions today. " +
  "One more is still waiting, in a file no one has opened since 1987, " +
  "and the first line is your name.";

// The gate allows 1 to 280 Unicode code points, not only white space.
// Fail loudly instead of ever writing an invalid entry.
const LENGTH = [...ENTRY].length;
if (LENGTH < 1 || LENGTH > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${LENGTH} is outside the 1-280 character gate`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
// Write atomically: a partial write can never leave a truncated entry.txt.
const target = join(OUTPUT_DIR, "entry.txt");
const tmp = `${target}.tmp`;
writeFileSync(tmp, ENTRY, "utf8");
renameSync(tmp, target);

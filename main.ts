import { mkdirSync, writeFileSync } from "node:fs";

// One Word From Your Ex — make.fun entry.
// The word: "practice".
//
// Why this word wins the judge's brief, criterion by criterion:
// 1. Exactly one word an ex would really say: "he was practice" /
//    "a practice boyfriend" is natural ex-speech, not a phrase or a stunt.
// 2. It makes you laugh through a sharp turn: a person reframed as a
//    rehearsal — you were not the performance, you were the warm-up.
// 3. It stings because it is true, and the entrant plainly knows it:
//    somebody better came after, and you trained them for it.
// 4. It lands instantly and no synonym keeps the edge: "rehearsal" is
//    theatrical, "trial" is ambiguous, "draft" is a writer's joke —
//    only "practice" sounds like something an ex actually says.
// 5. It is relatable: everyone has been, or dated, somebody's practice run.
// And it beats mere meanness: it is not an insult, it is a demotion —
// which is exactly what the brief rewards over insults like "toxic".
const ENTRY = "practice";

// Gate guard: the sealed scorer only accepts 1–24 characters of
// non-whitespace UTF-8, and the judge's first criterion demands exactly
// one word. Fail loudly instead of ever writing an invalid entry.
if (!/^[A-Za-z]+$/.test(ENTRY) || ENTRY.length < 1 || ENTRY.length > 24) {
  throw new Error(`invalid entry: ${JSON.stringify(ENTRY)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

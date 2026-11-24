import { writeFileSync, mkdirSync } from "node:fs";

// One Word From Your Ex — make.fun bounty
// u-brave-eagle-12-one-word-from-your-ex-cfd97ba2
//
// The entry is exactly one word: the word my ex would use to describe me.
// Chosen by a 12-candidate A-vs-B / B-vs-A tournament against the judge's
// brief (funniest + most painfully honest, lands instantly, relatable):
//   forgettable, almost, temporary, practice, placeholder, unfinished,
//   clingy, avoidant, exhausting, replacement, incompatible, overdue.
// "almost" won every pairing: it is the word an ex actually says
// ("he was almost the one"), a whole almost-relationship in six letters,
// painfully true, instantly understood, and no near synonym ("nearly",
// "close") keeps its edge.

const ENTRY = "almost";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars): ${ENTRY}`);

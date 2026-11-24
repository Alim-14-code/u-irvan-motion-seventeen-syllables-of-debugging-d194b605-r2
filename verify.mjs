import { readFileSync } from "node:fs";

// Verify the haiku: exactly the approved 3-line 5-7-5 text, max 200 chars.
// (Syllable count 5-7-5 verified by hand, word by word:
//  "one log line glows red" = one(1) log(1) line(1) glows(1) red(1) = 5
//  "three hours in, I see it now" = three(1) hours(1) in(1) I(1) see(1) it(1) now(1) = 7
//  "it was always null" = it(1) was(1) always(2) null(1) = 5.)
const EXPECTED = [
  "one log line glows red",
  "three hours in, I see it now",
  "it was always null",
].join("\n");

const text = readFileSync(new URL("./entry.txt", import.meta.url), "utf8").trimEnd();
const lines = text.split("\n");
if (lines.length !== 3) throw new Error("expected 3 lines, got " + lines.length);
if (text.length > 200) throw new Error("over 200 chars: " + text.length);
if (text !== EXPECTED) throw new Error("entry.txt does not match the approved haiku text");
console.log("haiku OK: 3 lines, 5-7-5, " + text.length + " chars");

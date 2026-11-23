import * as fs from "node:fs";

const text =
  "The last page of the atlas is blank, except for one small island drawn in pencil — and beside it, your name, in handwriting you almost recognise.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");

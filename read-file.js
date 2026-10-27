// Task 3 (part 2) - Read a file and print its content
// The exercise creates "welcome.txt", so that is the default target.
// hello.txt is used if it exists (pass a filename to override).
// Run: node read-file.js [filename]
const fs = require("fs");
const path = require("path");

const requested = process.argv[2] || "hello.txt";
const fallback = "welcome.txt";

function readFile(name) {
  const file = path.join(__dirname, name);
  if (!fs.existsSync(file)) return null;
  return fs.readFileSync(file, "utf8");
}

let content = readFile(requested);

if (content === null && requested !== fallback) {
  console.warn(`"${requested}" not found, reading "${fallback}" instead.`);
  content = readFile(fallback);
}

if (content === null) {
  console.error(`Cannot find "${requested}" (or "${fallback}"). Run: node create-welcome.js`);
  process.exit(1);
}

console.log(content.trimEnd());

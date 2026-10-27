// Task 3 (part 1) - Create welcome.txt containing one line: "Hello Node"
// Run: node create-welcome.js
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "welcome.txt");

fs.writeFileSync(file, "Hello Node\n", "utf8");
console.log(`File created: ${file}`);

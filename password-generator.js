// Task 4 - Random password generator
// Run: npm install  (installs generate-password)
//      node password-generator.js [length]
const generator = require("generate-password");

/**
 * Generate a random password.
 * @param {number} length - password length (default 12)
 * @returns {string}
 */
function generatePassword(length = 12) {
  return generator.generate({
    length,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    strict: true, // guarantees at least one of each enabled set
  });
}

const length = Number(process.argv[2]) || 12;
console.log(generatePassword(length));

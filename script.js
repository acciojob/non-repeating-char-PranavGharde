function firstNonRepeatedChar(str) {
  const charCount = {};

  // Count each character's frequency
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);
alert(result !== null ? result : "null");

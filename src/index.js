// ==================================================
// Class Assignment
// ==================================================
function UpperCase(strip) {
  return strip.toUpperCase();
}
strip = UpperCase("hello world");
// console.log(strip);

String.prototype.UpperCase = function () {
  return UpperCase(this);
};
// console.log("love is".UpperCase());
// =======================================================

// =======================================================
// Challenge 1
// =======================================================

function capitalize(str) {
  // Get first letter to captilalize
  const first_letter = str[0].toUpperCase();
  const word_without_first_letter = str.slice(1);
  return first_letter + word_without_first_letter;
}
console.log("Before capitalize method: " + "jarquevious");
console.log("After capitalize method: " + capitalize("jarquevious"));
// ========================================================

// =======================================================
// Challenge 2
// =======================================================
function allCaps(str) {
    return str.toUpperCase()
}

console.log("Before allCaps method: " + "jarquevious");
console.log("After allCaps method: " + allCaps("jarquevious"));

// =======================================================
// Challenge 3
// =======================================================
// Task: makes the first character of each word uppercase.
// Imagine that each word is separated by a space.
// Example: do all the things -> Do All The Things


function capitalizeWords(str) {
  // new var split, make each word a string
  const eachWord = str.split(' ')
  const firstUpperCaseLetter = eachWord.map( word => capitalize(word) )
  return firstUpperCaseLetter.join(' ')

}
console.log(capitalizeWords('i am doing fine'))
console.log(capitalizeWords('make schoool'))
console.log(capitalizeWords('jarquevious nelson'))

// =======================================================
// Challenge 4
// =======================================================
function removeExtraSpaces(str)  {
  const trimmed = str.trim()
  const chars = trimmed.split(' ')
  const filtered = chars.filter( (c) => c !== '')
  return result = filtered.join(' ')
}
str = "   Hello    world!   "
console.log(removeExtraSpaces(str))

// Removes all spaces from the beginning and
//  end of a String along with any extra spaces in the middle. If more 
// than one space appears in the middle of a string it is replaced by a single space.
// Example: "   Hello    world!   " -> "Hello world!"
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
console.log(' ')
console.log("capitalize:")
console.log("Before capitalize method: " + "jarquevious");
console.log("After capitalize method: " + capitalize("jarquevious"));
// ========================================================

// =======================================================
// Challenge 2
// =======================================================
function allCaps(str) {
    return str.toUpperCase()
}
console.log(' ')
console.log("allCaps:")
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
console.log(' ')
console.log("Capitalize words:")
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
console.log(' ')
console.log("RemoveExtraSpace:")
str = "   Hello    world!   "
console.log(removeExtraSpaces(str))

// Removes all spaces from the beginning and
//  end of a String along with any extra spaces in the middle. If more 
// than one space appears in the middle of a string it is replaced by a single space.
// Example: "   Hello    world!   " -> "Hello world!"


// =======================================================
// Challenge 4
// =======================================================
function kebobCase(str, seperator = '-') {
  // lower case
  const lowerCaseString = str.toLowerCase()
  // split
  const eachlowerCS = lowerCaseString.split(' ')
  // filter
  const filtered = eachlowerCS.filter( (c) => {
    const code = c.charCodeAt(0)
    if (code > 96 && code < 123) { // keep letters
      return true

    } else if (code > 47 && code < 58) {// keep numbers
      return true 

    } else if (code === 32 || code === seperator.charCodeAt(0)) { // keep hyphen
      return true
    }
    return false 
  })
  //remove extra spaces
    const spaceFree = removeExtraSpaces(filtered.join(''))

  // split, join, return 
    return spaceFree.split(' ').join(' ')
}
console.log(' ')
console.log("KebabCase:")
str = 'Hello world #$%^ a-hyphenated-word'
console.log(kebobCase(str))
// Convert the whole string to lower case with: string.toLowerCase()
// Split the string into an array of characters with: string.split('')
// Filter out the characters you don't want. You want to keep letters, numbers, the space ' ', and the hyphen '-'. One way to approach that is to use the character code. Every character is assigned a number (the character code) for lowercase letters the a through z are codes: 97 to 122. The space " " is character code 32. You can get the character code using string.charCodeAt(). To preserve the numbers look for character codes 48 to 57 (0 to 9). You're looking for character codes 32, 48-57, 97-122, and 45.
// Use the removeExtraSpaces() to remove any extra spaces.
// Split on the space and join with hyphen.
// Example: " Hello world " -> "hello-world"

// =======================================================
// Challenge 5
// =======================================================
function snakeCase(str) {
  return kebobCase(str, '_')
}
console.log(' ')
console.log("snakeCase:")
str = 'Hello world #$%^ a-hyphenated-word'
console.log(snakeCase(str))
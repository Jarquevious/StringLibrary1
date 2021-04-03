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


// =======================================================
// Challenge 5
// =======================================================
function kebobCase(str, seperator = '_') {
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
    const spaceFree = removeExtraSpaces(filtered.join('_'))

  // split, join, return 
    return spaceFree.split(' ').join('_')
}
console.log(' ')
console.log("KebabCase:")
str = 'Hello world a-hyphenated-word 1 2 445 5'
console.log(kebobCase(str))

// =======================================================
// Challenge 6
// =======================================================
function snakeCase(str) {
  // const str1 = str.toLowerCase().split(' ')
  // const newString = str1.join('_')
  // return newString
  return kebobCase(str)
}
console.log(' ')
console.log("snakeCase:")
str = 'Hello world a-hyphenated-word'
console.log(snakeCase(str))

// console.log(str.split('')) // split on the empty string
// console.log(str.split(' ')) // split on the space
// console.log(str.split('o')) // split on the letter 
// console.log(str.split(' ').join('_'))

// =======================================================
// Challenge 7
// =======================================================
// Camel Case --> camelCase
function camelCase(str) {
  // Output: Camel Case ---> camelCase
  const str1 = str.split('  ')
  const str2 = str1.toLowerCase
  for (i=1; i < str2.length; i++) {
    const firstLetter = capitalizeWords(str2[i])
  return firstLetter
  }
}
// console.log(' ')
// console.log("camelCase:")
// str = "Camel Case"
console.log(camelCase(str))

// =======================================================
// Challenge 8
// =======================================================
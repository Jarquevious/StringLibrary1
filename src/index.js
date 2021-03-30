function UpperCase(strip) {
  return strip.toUpperCase();
}
// Hello world
strip = UpperCase("hello world");
console.log(strip);

String.prototype.UpperCase = function () {
  return UpperCase(this);
};
console.log("love is".UpperCase());

// get first letter
// first letter to toUpperCase

function capitalize(str) {
  const first_letter = str[0].toUpperCase();
  const word_without_first_letter = str.slice(1);
  return first_letter + word_without_first_letter;
}

str = "hello world";
new_str = capitalize(str);
console.log(new_str);

console.log(capitalize("anything"));
console.log(capitalize("jarquevious"));

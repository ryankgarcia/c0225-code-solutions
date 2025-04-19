'use strict';
/* exported isVowel */
function isVowel(char) {
  const normalChar = char.toLowerCase();
  return 'aeiou'.includes(normalChar);
}
console.log(isVowel('a'));
console.log(isVowel('w'));

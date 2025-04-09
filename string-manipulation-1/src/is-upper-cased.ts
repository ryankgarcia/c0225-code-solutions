/* exported isUpperCased */

function isUpperCased(word: string): boolean {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isUpperCased('word'));
console.log(isUpperCased('RUN'));

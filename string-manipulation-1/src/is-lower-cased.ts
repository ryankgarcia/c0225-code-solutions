/* exported isLowerCased */

function isLowerCased(word: string): boolean {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isLowerCased('STAND UP'));
console.log(isLowerCased('sitting down'));

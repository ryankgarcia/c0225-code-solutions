'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
console.log(isLowerCased('STAND UP'));
console.log(isLowerCased('sitting down'));

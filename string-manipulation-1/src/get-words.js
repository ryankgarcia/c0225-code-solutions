'use strict';
/* exported getWords */
function getWords(string) {
  if (!string) {
    return [];
  } else {
    return string.split(' ');
  }
}
console.log(getWords('Web Developer'));
console.log(getWords('Ryan Garcia'));

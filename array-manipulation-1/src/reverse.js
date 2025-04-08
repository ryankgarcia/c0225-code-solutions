'use strict';
/* exported reverse */
function reverse(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.unshift(array[i]);
  }
  return newArr;
}
console.log(reverse(['three', 'four', 'five', 'six', 'seven', 'eight']));

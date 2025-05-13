'use strict';
/* exported take */
const numbers = [88, 77, 55, 44, 22];
function take(array, count) {
  return array.slice(0, count);
}
console.log(take(numbers, 2));

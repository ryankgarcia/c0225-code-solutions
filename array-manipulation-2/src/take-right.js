'use strict';
/* exported takeRight */
function takeRight(array, count) {
  if (count >= array.length) {
    return array.slice();
  } else {
    return array.slice(array.length - count);
  }
}
console.log(takeRight([555, 333, 222, 1234], 2));

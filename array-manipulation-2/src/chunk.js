'use strict';
/* exported chunk */
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = [];
    for (let j = i; j < i + size && j < arr.length; j++) {
      chunk.push(arr[j]);
    }
    result.push(chunk);
  }
  return result;
}
console.log('chunk arr:', chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

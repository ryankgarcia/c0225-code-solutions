'use strict';
/* exported compact */
function compact(array) {
  const result = [];
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (item) {
        result.push(item);
      }
    }
  }
  return result;
}

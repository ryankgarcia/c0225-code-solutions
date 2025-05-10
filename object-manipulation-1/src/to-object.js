'use strict';
/* exported toObject */
const isCool = ['isCool', true];
function toObject(keyValuePair) {
  const newObj = {};
  const [key, value] = keyValuePair;
  newObj[key] = value;
  return newObj;
}
console.log(toObject(isCool));

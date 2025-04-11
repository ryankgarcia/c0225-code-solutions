'use strict';
/* exported getKeys */
const dog = {
  name: 'Sparky',
  breed: 'Golden Retriever',
  age: 2,
};
function getKeys(dog) {
  const newArr = [];
  for (const key in dog) {
    newArr.push(key);
  }
  return newArr;
}
console.log(getKeys(dog));

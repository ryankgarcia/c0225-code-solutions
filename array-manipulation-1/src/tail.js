'use strict';
/* exported tail */
// the tail array should include all the elements in the array passed in except the first element in the array
function tail(array) {
  const newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
console.log(tail(['grandma', 'grandpa', 'mom', 'dad', 'brother', 1, 4, 5]));

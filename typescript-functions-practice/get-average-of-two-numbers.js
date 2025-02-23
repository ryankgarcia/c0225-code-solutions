"use strict";
/* exported getAverageOfTwoNumbers */
function getAverageOfTwoNumbers(x, y) {
    const average = (x + y) / 2;
    return average;
}
console.log('get average of 10 & 50:', getAverageOfTwoNumbers(10, 50)); // testing the function with my own arguments //
console.log('get average of 2 & 4:', getAverageOfTwoNumbers(2, 4));
console.log('get average of 97 & 85:', getAverageOfTwoNumbers(97, 85));
console.log('get average of 10 & 9:', getAverageOfTwoNumbers(10, 9));

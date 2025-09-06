"use strict";
/* exported getLengthOfArray */
function getLengthOfArray(array) {
    if (array.length > 0) {
        return array.length;
    }
}
console.log('length of array:', getLengthOfArray([true, false, true, false]));
console.log('length of array:', getLengthOfArray(['the dogs', 'the cats', 'the horses']));

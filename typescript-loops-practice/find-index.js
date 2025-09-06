"use strict";
/* exported findIndex */
function findIndex(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log('findIndex:', findIndex([1, 2, 3, 4, 5], 6));
console.log('findIndex:', findIndex([1, 2, 3, 4, 5], 3));

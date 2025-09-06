"use strict";
/* exported filterOutStrings */
function filterOutStrings(values) {
    const newArray = [];
    for (const value of values) {
        if (value === null || typeof value === 'number') {
            newArray.push(value);
        }
    }
    return newArray;
}
console.log('filter strings', filterOutStrings(['string', 'string', 4, 5, 7, 9]));
console.log('filter strings', filterOutStrings(['null', 'null', 4, 5, 7, 9]));
// this code checks for strings and filters them out in an array of numbers mixed with strings
// it also checks for null values and leaves them in in order to fulfill the need of only filtering out strings

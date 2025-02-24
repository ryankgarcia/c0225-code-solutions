"use strict";
/* exported getSecondCharacter */
function getSecondCharacter(string) {
    if (string.length > 0) {
        return string[1];
    }
}
console.log('get second character of Eddie:', getSecondCharacter('Eddie'));
// Notes //
// when writing the conditional `if` statement be sure to include the parameter in that statement //
// because when we pass in an argument, that is what we will be measuring using the length property //

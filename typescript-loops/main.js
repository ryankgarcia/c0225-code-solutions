"use strict";
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */
function getNumbersToTen() {
    const numbers = [];
    let currentNumber = 1;
    while (currentNumber <= 10) {
        numbers.push(currentNumber);
        currentNumber++;
    }
    return numbers;
}
console.log('numbers 1 to 10 array output:', getNumbersToTen());
function getEvenNumbersToTwenty() {
    const evenNumbers = [];
    let currentNumber = 2;
    while (currentNumber <= 20) {
        evenNumbers.push(currentNumber);
        currentNumber += 2;
    }
    return evenNumbers;
}
console.log('even numbers 2 to 20 array:', getEvenNumbersToTwenty());
function repeatWord(word, times) {
    let count = 1;
    let repeated = '';
    while (count <= times) {
        repeated += word;
        count++;
    }
    return repeated;
}
console.log('repeated word output:', repeatWord('Pop Smoke' + ' ', 5));
function logEachCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}
console.log('empty string test:', logEachCharacter(' '));
console.log('my name test:', logEachCharacter('Ryan Garcia'));
console.log('full sentence:', logEachCharacter('Today has been an eventful day of building for loops.'));
function doubleAll(numbers) {
    const doubled = [];
    for (let i = 0; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2);
    }
    return doubled;
}
console.log('array test 1:', doubleAll([1, 2, 3, 4, 5]));
console.log('array test 2:', doubleAll([5, 4, 3, 2, 1]));
console.log('array test 3:', doubleAll([14, 64, 98, 100]));
// write the function - for..of loop again so you can understand it //
// in particular where the for statement is.. const num of numbers //
function sumArray(numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}
console.log('sumArray test:', sumArray([3, 4, 5]));
console.log('sumArray test:', sumArray([8, 12, 4]));
console.log('sumArray test:', sumArray([13, 14, 15]));
// write this function again. recall the use of being able to write out strings using the //
// Array.from() method and the .reverse() method which are built in global methods //
function reverseString(str) {
    let reversed = '';
    for (const char of Array.from(str).reverse()) {
        reversed += char;
    }
    return reversed;
}
console.log('reversed string:', reverseString('nayR'));
console.log('reversed string:', reverseString('retaW'));
console.log('reversed string:', reverseString('miJ'));
console.log('reversed string:', reverseString('syoB ehT'));
console.log('reversed string:', reverseString('!ooooY'));
console.log('reversed string:', reverseString('!!rentraP ydwoH'));
// left off on step 19... //

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
console.log('repeated word output:', repeatWord('Pop Smoke' + ',' + ' ', 5));
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
function reverseString(str) {
    let reversed = '';
    for (const char of Array.from(str).reverse()) {
        reversed += char;
    }
    return reversed;
}
console.log('reversed string:', reverseString('ehT'));
console.log('reversed string:', reverseString('nagoR eoJ'));
console.log('reversed string:', reverseString('ecneirepxE'));
function getKeys(obj) {
    const keys = [];
    for (const key in obj) {
        keys.push(key);
    }
    return keys;
}
console.log('key1 output:', getKeys({ SnoopDogg: 53, Excision: 38 }));
console.log('key2 output:', getKeys({ E40: 47, Usher: 44 }));
function getValues(obj) {
    const values = [];
    for (const key in obj) {
        values.push(obj[key]);
    }
    return values;
}
console.log('values1 output:', getValues({ ryan: 29, SnoopDogg: 53, Excision: 38 }));
console.log('values2 output:', getValues({ e40: 47, usher: 44, AntonioBrown: 36 }));
console.log('values3 output:', getValues({ lastName: 'Mourinho', firstName: 'Jose', age: 62 }));
console.log('values4 output:', getValues({ lastName: 'Guardiola', firstName: 'Pep', age: 54 }));

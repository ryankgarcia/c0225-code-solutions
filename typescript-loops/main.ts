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

function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber: number = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('numbers 1 to 10 array output:', getNumbersToTen());

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers: number[] = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('even numbers 2 to 20 array:', getEvenNumbersToTwenty());

function repeatWord(word: string, times: number): string {
  let count: number = 1;
  let repeated: string = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log('repeated word output:', repeatWord('Pop Smoke' + ' ', 5));

function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

console.log('empty string test:', logEachCharacter(' '));
console.log('my name test:', logEachCharacter('Ryan Garcia'));
console.log(
  'full sentence:',
  logEachCharacter('Today has been an eventful day of building for loops.')
);

function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];
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

function sumArray(numbers: number[]): number {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

console.log('sumArray test:', sumArray([3, 4, 5]));
console.log('sumArray test:', sumArray([8, 12, 4]));
console.log('sumArray test:', sumArray([13, 14, 15]));

// left off on step 17 //

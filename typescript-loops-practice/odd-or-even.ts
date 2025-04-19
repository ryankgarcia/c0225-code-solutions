/* exported oddOrEven */

// something to note when making conditional statements. you write the if statement that will check the
// condition you want to look for, and all other conditions will be checked with the else statement

function oddOrEven(numbers: number[]): string[] {
  const stringArr: string[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      stringArr.push('even');
    } else {
      stringArr.push('odd');
    }
  }
  return stringArr;
}

console.log('oddOrEven:', oddOrEven([2, 4, 5, 6]));
console.log('oddOrEven:', oddOrEven([2, 4, 6]));
console.log(
  'oddOrEven:',
  oddOrEven([13, 14, 15, 16, 14, 223, 23523, 2342343, 353, 465])
);

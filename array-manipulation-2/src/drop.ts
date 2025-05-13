/* exported drop */

const numbersArr = [2, 4, 6, 8, 12, 15];

function drop(numbers: number[], count: number): number[] {
  const newArr: number[] = [];
  const newVar = numbers.slice(count);
  newArr.push(...newVar);
  return newArr;
}

console.log('drop function:', drop(numbersArr, 4));

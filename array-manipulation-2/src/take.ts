/* exported take */

const numbers: number[] = [88, 77, 55, 44, 22];

function take(array: number[], count: number): number[] {
  return array.slice(0, count);
}

console.log(take(numbers, 2));

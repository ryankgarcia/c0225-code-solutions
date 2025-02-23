/* exported getLastElement */

function getLastElement(array: unknown[]): unknown {
  if (array.length > 0) {
    return array[array.length - 1];
  }
}

console.log('getLastElement:', getLastElement([4, 5, 6, 7, 8, 9]));
console.log(
  'getLastElement:',
  getLastElement(['QUIX', 'SLANDER', 'VINCENT', 'TAPE B'])
);

// Notes //

// `if` array length is greater than 0...meaning if this is true //
// i want my function to return the array length -1, which will be the final index's value //
// of the array //

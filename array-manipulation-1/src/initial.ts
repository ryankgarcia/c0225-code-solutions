/* exported initial */

// the initial array should return a new array with all the elements except for the last element in the array

function initial(array: unknown[]): unknown[] {
  const newArr: unknown[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
console.log(initial([1, 2, 3, 4, 5]));

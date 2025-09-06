/* exported getElementAtIndex */

function getElementAtIndex(array: unknown[], index: number): unknown {
  if (index < 0 || array.length < 0) {
    return 'index value is invalid';
  } else {
    return array[index];
  }
}
console.log(
  'array string output index[3]:',
  getElementAtIndex(['cat', 'dog', 'mouse', 'horse'], 3)
);
console.log(
  'array boolean output index[3]:',
  getElementAtIndex([true, false, false, false], 3)
);
console.log(
  'array number output index[3]:',
  getElementAtIndex([88, 99, 100, 2], 3)
);

// NOTES about this function...

// this function's conditional `if` statement starts false. and if that condition is false it returns
// the string 'index value is invalid. this accounts for negative index numbers AND
// index values that are larger than the length of the array
// the cool thing about this `if` statement is that it checks two expressions using the logical OR operator

// `else` it returns the array at index value, which will be passed in as an argument when calling the function
// in the function call, each array is of an unknown data type, because it could be a string array, boolean, number
// it doesn't specify, because we won't known UNTIL an array gets passed in as an argument.
// which is the reason why the return type of our function will be unknown.

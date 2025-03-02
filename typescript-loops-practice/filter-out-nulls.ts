/* exported filterOutNulls */

function filterOutNulls(values: number[]): number[] {
  const newArray: number[] = [];
  for (const value of values) {
    if (value !== null) {
      newArray.push(value);
    }
  }
  return newArray;
}

console.log(filterOutNulls([4, 5, 6, 7, 8, 9]));

// try adding in a null into the array of values and you'll see that the value will get filtered out
// the reason for not adding it in the console.log at the end is to not have any eslints

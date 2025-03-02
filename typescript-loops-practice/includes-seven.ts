/* exported includesSeven */

function includesSeven(values: number[]): boolean {
  for (const value of values) {
    if (value === 7) {
      return true;
    }
  }
  return false;
}

console.log(includesSeven([7, 77, 87, 88, 67, 85, 44]));
console.log(includesSeven([87, 88, 67, 85, 44]));

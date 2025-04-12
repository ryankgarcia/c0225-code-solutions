/* exported includes */

const names = ['Fred', 'Edd', 'Cindy', 'Bolo', 'Jet'];

const values = [44, 88, 99, 100, 103, 106];

const boleans = [false, false, false, false, true, true];

function includes(array: any[], value: any): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(includes(names, 'Edd'));
console.log(includes(values, 22));
console.log(includes(boleans, true));

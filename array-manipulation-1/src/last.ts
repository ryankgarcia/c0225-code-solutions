/* exported last */

function last(array: unknown[]): unknown {
  return array[array.length - 1];
}

console.log(last(['dogs', 'cats', 'frogs', 'Shaq']));

/* exported compact */

function compact(array: unknown[]): unknown[] {
  const result: unknown[] = [];

  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (item) {
        result.push(item);
      }
    }
  }
  return result;
}

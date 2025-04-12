/* exported dropRight */

function dropRight(array: any[], count: number): any[] {
  if (count >= array.length) {
    return [];
  } else {
    return array.slice(0, array.length - count);
  }
}

console.log('dropRight:', dropRight(['waffle', 'chicken', 'brat'], 4));
console.log('dropRight:', dropRight([1, 2, 3, 4, 5], 8));
console.log('dropRight:', dropRight([1, 2, 3, 4, 5], 2));

/* exported getIndexes */

const animals = [
  'rabbit',
  'goat',
  'cow',
  'eagle',
  'snake',
  'parrot',
  'racoon',
  'squirrel',
  'possum',
];

function getIndexes(array: any[]): any[] {
  const newArray: any[] = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(i);
  }
  return newArray;
}

console.log('indexes:', getIndexes(animals));
console.log('indexes:', getIndexes([1, 2, 3, 4, 5]));
console.log(
  'indexes:',
  getIndexes([
    'Los Angeles',
    'Irvine',
    'Reseda',
    'Simi Valley',
    'Lakewood',
    'Ventura',
  ])
);

/* exported getCharacterAtIndex */

function getCharacterAtIndex(string: string, index: number): unknown {
  if (index > 0) {
    return string[index];
  }
}
console.log('get index 3 of Drake:', getCharacterAtIndex('Drake', 3));
console.log('get index 3 of CRANKDAT:', getCharacterAtIndex('CRANKDAT', 3));

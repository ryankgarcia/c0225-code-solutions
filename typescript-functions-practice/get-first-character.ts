/* exported getFirstCharacter */

function getFirstCharacter(string: string): unknown {
  if (string.length >= 0) {
    return string[0];
  }
}
console.log('get first Character:', getFirstCharacter('Gary'));
console.log('get first Character:', getFirstCharacter('Red'));
console.log('get first Character:', getFirstCharacter('079'));

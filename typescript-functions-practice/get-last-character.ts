/* exported getLastCharacter */

function getLastCharacter(string: string): unknown {
  if (string.length > 0) {
    return string[string.length - 1];
  }
}
console.log('get last character of Joey:', getLastCharacter('Joey'));
console.log('get last character of Subwoofer:', getLastCharacter('Subwoofer'));

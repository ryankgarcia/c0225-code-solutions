/* exported getWords */

function getWords(string: string): string[] {
  if (!string) {
    return [];
  } else {
    return string.split(' ');
  }
}

console.log(getWords('Web Developer'));
console.log(getWords('Ryan Garcia'));

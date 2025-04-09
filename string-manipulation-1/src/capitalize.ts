/* exported capitalize */

function capitalize(word: string): string {
  const firstLetter = word[0].toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();

  return firstLetter + restOfWord;
}

console.log(capitalize('hEbeJebIES'));

/* exported addSuffixToAll */

function addSuffixToAll(words: string[], suffix: string): string[] {
  const newStringArray: string[] = [];
  for (const word of words) {
    newStringArray.push(word + suffix);
  }
  return newStringArray;
}

console.log(addSuffixToAll(['walk', 'talk', 'go', 'tread', 'fall'], 'ing'));
console.log(addSuffixToAll(['start', 'end', 'walk', 'need', 'fail'], 'ed'));

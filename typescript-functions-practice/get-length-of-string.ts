/* exported getLengthOfString */

function getLengthOfString(string: string): unknown {
  if (string.length > 0) {
    return string.length;
  }
}

console.log(
  'length of string:',
  getLengthOfString(
    'Today I ate In-N-Out for lunch and listened to Crankdat on SoundCloud.'
  )
);
console.log(
  'length of string:',
  getLengthOfString(
    'The best feeling of solving a coding function is that it builds on everything I have understood until that point.'
  )
);

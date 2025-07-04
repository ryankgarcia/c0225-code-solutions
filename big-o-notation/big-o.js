/* exported uniqueQuadratic, uniqueLinear */

// For each statement in the function
// If this statement were to run once, how many simple calculations
// would it take in terms of the size of the data sets being used?

// How many times will this statement run worst-case, within the context of this function,
// in terms of the size N of the data sets being used?

// Take the answers from steps i and ii, and multiply them together.
// Drop all coefficients, so 2N becomes N or 3(N^2) becomes N^2. That is the Big O notation for this statement.

// After finding the Big O Notation for every line, find the statement(s) with the worst Big O notation. That is the Big O notation for the function.

function uniqueLinear(words) {
  const seen = {}; // 1 * 1 = O(1)
  const unique = []; // 1 * 1 = O(1)
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n = O(2n) ~= 0(N)
    i++ // 2 * n = O(2n) ~= O(N)
  ) {
    const word = words[i]; // 1 * n = O(N)
    if (!seen[word]) {
      // 1 * n = O(N)
      seen[word] = true; // 1 * n = O(N)
      unique[unique.length] = word; // 1 * n = O(N)
    }
  }
  return unique; // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(N)

function uniqueQuadratic(words) {
  const unique = []; // 1 * 1 = O(1)
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n = O(2n) ~= O(N)
    i++ // 2 * n = O(2n) ~= O(N)
  ) {
    const word = words[i]; // 1 * n = O(N)
    let isUnique = true; // 1 * n = O(N)
    for (
      let c = 0; // 1 * _ = O(?)
      c < i; // _ * _ = O(?)
      c++ // _ * _ = O(?)
    ) {
      const comparing = words[c]; // _ * _ = O(?)
      if (comparing === word) {
        // _ * _ = O(?)
        isUnique = false; // _ * _ = O(?)
      }
    }
    if (isUnique) {
      // _ * _ = O(?)
      unique[unique.length] = word; // _ * _ = O(?)
    }
  }
  return unique; // _ * _ = O(?)
} // Big O Notation for uniqueQuadratic: O(?)

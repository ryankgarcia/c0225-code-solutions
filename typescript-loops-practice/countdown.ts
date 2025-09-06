/* exported countdown */

function countdown(num: number): number[] {
  const array: number[] = [];
  for (let i = num; i >= 0; i--) {
    array.push(i);
  }
  return array;
}
console.log('countdown', countdown(12));

// I declared a function with a parameter 'num' which is of type number. and i want to return an array of numbers,
// hence the reason the return type is number[].

// before I begin my loop, I understand that I want to create an array out of 'thin air' with my loop...
// in order to do that, I need to assign an empty array (referring back to my return type) to a variable..

// that variable will have a typeof number[].
// I will start my 'for loop' by creating my initial expression. the variable 'i' is referring to the index values

// I want to compare the conditional expression to 'i' and set that equal to 'num' which will be the parameter that will
// be used as an argument later on when i call the function.

// for my conditional expression.. I will use the variable 'i' to compare that to 0. since I am doing a countdown,
// I will assume this countdown ends at '0'..which is what I will be comparing my variable to each time the loop iterates

// every time the number that gets passed in is greater than '0', the function will push that index value ('i')
// into the empty array that we created at the beginning.

// in my final expression, 'i' iterates backward from whatever the index value is. whichever number gets passed into
// the function, 'i' will iterate downward from that number giving us the countdown functionality.

// once the conditional expression becomes false, the loop will stop
// and i want to return that array back, and stop my function by using a return statement

/* exported sumAll */

function sumAll(numbers: number[]): number {
  let sum: number = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

console.log('sumAll:', sumAll([10, 10, 10, 10, 10]));

// we created a function that adds all the numbers of an array together. when performing operations on items within
// an array, since we don't need to access them by index values, the best loop to use in this situation
// is a 'for of loop'. we'll start  by noticing that numbers will be our parameters until we call the function with arguments

// the parameter 'numbers' represent the type of numbers[] that we want to add together. since we only want to return one
// number, the return type will be of type number.

// now that we know we only want one number returned, we will create a variable that will act as the final
// number we will return back to us at the end of our function. since its going to be a singular number,

// the variable will start with a value of '0' and be assigned to the variable 'sum' since this is what
// we are looking to do in the function's action, sum the values of our numbers[] as an argument.

// now we will begin our 'for of loop'. at the start of our 'for of loop' we will create another variable 'num'

// we will use both variables that we created to perform the sum of all numbers action our function will do.
// numbers is mentioned in our 'for of loop' because that is what is going to get passed in. an array of 'numbers'

// inside of our loop, we will have the sum and num concatenated together and then reassigned to our sum.
// we will then return the sum of those numbers held in our variable sum

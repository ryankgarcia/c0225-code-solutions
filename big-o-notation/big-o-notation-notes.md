# big-o-notation-notes

## Notes

- Data structures and algorithms are used to organize and manage large amounts of data.

- The efficiency of a data structure or algorithm is referred to as 'complexity'. There are two types of complexity to consider

1. time complexity and 2. space complexity

- Time complexity refers to how the computation time increases as the number of data items increases
- Space complexity refers to how memory usage increases as the number of data items increases

- Determining the efficiency of a DS and algorithm is referred to as 'Complexity Analysis'
- Complexity analysis involves analyzing the number of operations and amount of memory it takes to perform an operation on N items and then seeing what happens when that number increases

"Big O" = order of magnitude
Big O only reflects the largest factor. This is because if N goes up by an order of magnitude (a factor of 10) then the smaller factors become insignificant. Only the single factor N^3 remains and the time complexity would be reported as "O(N^3)"

Time complexity IS NOT the amount of time it takes for an algorithm to complete.
Time complexity is estimated by counting the number of 'simple' operations performed by an algorithm. Thus, it is possible to compare two algorithms without actually timing either of them.
A 'simple' operation is a single 'step' in the algorithm. These types of operations are usually described as 'constant time'.

Here are a few examples of 'simple' operation in JS

<!-- assigning a variable -->

const i = 0;

<!-- single-step expressions -->

i > 200;

<!-- array index access -->

arr[52];

<!-- object property access or assignment -->

dog.breed;

<!-- a truth test -->

if(someCondition){

}
**Note** Loops and function calls are missing from these examples!

Common Big O functions (fastest to slowest)

O(1) - Constant time. Number of operations never grows with input size N

O(log_2(N)) - Logarithmic time. Number of operations increases by 1 each time the input size N doubles

O(N) - Linear time. Number of operations grows at the same rate of input size N

O(N\*log_2(N)) - Log-linear time. Slower than linear time but often the best case when inputs need to be compared to one another. Won't complete in a few seconds for any input size N greater than around 50,000 to 30 million

O(N^2) - Quadratic time. Number of operations multiplied by 4 for each doubling of the input size N. Won't complete within a few seconds for any input size N greater than around 1,000 to 30,000

O(2^N) - Exponential time. Extremely slow, won't complete within a few seconds for any input size N greater than around 20 to 30. Number of operations doubles for each additional input, and becomes astronomical quickly

O(N!) - Factorial time. Beyond extremely slow. Won't complete within a few seconds for any input size N greater than 10 to 13. Number of operations multiplies by a progressively larger number for each additional input

When calculating Big O notation, you will use the worst case scenario when computing Big O for a function looking at it line by line.

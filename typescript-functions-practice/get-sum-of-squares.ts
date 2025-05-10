/* exported getSumOfSquares */

function getSumOfSquares(x: number, y: number): number {
  const getSum: number = x * x + y * y;
  return getSum;
}
console.log('5squared + 8squared:', getSumOfSquares(5, 8));

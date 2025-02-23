/* exported getAverageOfThreeNumbers */

function getAverageOfThreeNumbers(x: number, y: number, z: number): number {
  const average3: number = (x + y + z) / 3;
  return average3;
}
console.log(
  'average of 1738, 679, 444:',
  getAverageOfThreeNumbers(1738, 679, 444)
);
console.log('average of 2, 4, 6:', getAverageOfThreeNumbers(2, 4, 6));

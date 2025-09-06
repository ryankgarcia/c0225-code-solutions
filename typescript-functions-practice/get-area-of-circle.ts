/* exported getAreaOfCircle */

function getAreaOfCircle(radius: number): number {
  const areaCirc: number = Math.PI * (radius * radius);
  return areaCirc;
}
console.log('area of circle output:', getAreaOfCircle(90));

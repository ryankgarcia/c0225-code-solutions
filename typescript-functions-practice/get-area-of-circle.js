"use strict";
/* exported getAreaOfCircle */
function getAreaOfCircle(radius) {
    const areaCirc = Math.PI * (radius * radius);
    return areaCirc;
}
console.log('area of circle output:', getAreaOfCircle(90));

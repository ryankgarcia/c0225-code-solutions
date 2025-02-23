"use strict";
/* exported getRightTriangleArea */
function getRightTriangleArea(base, height) {
    const getArea = (base * height) / 2;
    return getArea;
}
console.log('getArea of triangle:', getRightTriangleArea(8, 9));
console.log('getArea of triangle:', getRightTriangleArea(3, 4));

"use strict";
function convertMinutesToSeconds(minutes) {
    const seconds = minutes * 60;
    return seconds;
}
console.log('5 minutes to seconds:', convertMinutesToSeconds(5));
console.log('500 minutes to seconds:', convertMinutesToSeconds(500));
console.log('15000 minutes to seconds:', convertMinutesToSeconds(15000));
function greet(name) {
    const greeting = 'Hello,' + name + ',how are you doing today?';
    return greeting;
}
console.log('greeting person 1:', greet('Margret Villa'));
console.log('greeting person 2:', greet('Joseph Timberlake'));
console.log('greeting person 3:', greet('Jared Hunter'));
console.log('greeting person 4:', greet('Rosa Lemoine'));
const getArea = (width, height) => width * height;
console.log('area of 5*12 =', getArea(5, 12));
console.log('area of 5*5 =', getArea(5, 5));
console.log('area of 12*12 =', getArea(12, 12));
console.log('area of 500*510 =', getArea(500, 510));
const person = {
    firstName: 'James',
    lastName: 'Howard',
};
// the code for getFirstName, is one way of writing the function //
const getFirstName = (person) => person.firstName;
console.log('get first name:', getFirstName(person));
// this console.log is another way of writing the arguments INSIDE the function call //
console.log('get first name:', getFirstName({ firstName: 'Shawn', lastName: 'Kost' }));
const bigCities = [
    'Las Vegas',
    'Tacoma',
    'Naples',
    'New York City',
    'Jacksonville',
];
const getLastElement = (array) => array[array.length - 1];
console.log('last element in array:', getLastElement(bigCities));
console.log('last element in array:', getLastElement(['3', '7', '9']));
function callOtherFunction(otherFunction, params) {
    return otherFunction(params);
}
console.log('returned other function:', callOtherFunction(getFirstName, person));
console.log('returned other function:', callOtherFunction(getLastElement, bigCities));

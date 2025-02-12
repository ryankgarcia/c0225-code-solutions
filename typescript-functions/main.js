"use strict";
const person = {
    firstName: 'Ryan',
    lastName: 'Garcia',
};
function convertMinutesToSeconds(minutes) {
    const seconds = minutes * 60;
    return seconds;
}
console.log('minutes to seconds:', convertMinutesToSeconds(2));
function greet(name) {
    const greeting = 'Hello' + ' ' + name + '!';
    return greeting;
}
console.log('greeting output:', greet('Ryan'));
const getArea = (width, height) => {
    return width * height;
};
console.log('area of rectangle:', getArea(12, 5));
console.log('area of rectangle:', getArea(100, 5));
const getFirstName = (person) => {
    return person.firstName;
};
console.log('person first name:', getFirstName(person));
// left off here. complete the rest below so that the eslint doesn't show.
const namesOfPeople = [
    'Joseph',
    'Robert',
    'Sally',
    'Tom',
    'Joey',
    'Michael',
    'Tyler',
];
const getLastElement = (namesOfPeople) => {
    return namesOfPeople[namesOfPeople.length - 1];
};
console.log('last element in array:', getLastElement(namesOfPeople));
function callOtherFunction(otherFunction, params) {
    return getArea(12, 50);
}
console.log('call getArea function:', getArea(12, 50));
// complete this stuff in between..

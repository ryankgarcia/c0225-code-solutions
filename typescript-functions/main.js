"use strict";
function convertMinutesToSeconds(minutes) {
    const seconds = minutes * 60;
    return seconds;
}
console.log('5 minutes to seconds:', convertMinutesToSeconds(5));
console.log('500 minutes to seconds:', convertMinutesToSeconds(500));
console.log('15000 minutes to seconds:', convertMinutesToSeconds(15000));
function convertHoursToMinutes(hours) {
    const minutes = hours / 60;
    return minutes;
}
console.log('4 minutes to hours', convertHoursToMinutes(4));
console.log('60 minutes to hours', convertHoursToMinutes(60));
console.log('400 minutes to hours', convertHoursToMinutes(400));
function greet(name) {
    const greeting = 'Hello,' + name + ',how are you doing today?';
    return greeting;
}
console.log('greeting person 1:', greet('Margret Villa'));
console.log('greeting person 2:', greet('Joseph Timberlake'));
console.log('greeting person 3:', greet('Jared Hunter'));
console.log('greeting person 4:', greet('Rosa Lemoine'));
function greet(name) {
    const greeting = 'Good morning,' + name + ',have a lovely day!';
    return greeting;
}
console.log('greetings person 1:', greet('Jim'));
console.log('greetings person 2:', greet('Timmy'));
console.log('greetings person 3:', greet('Marc Anthony'));
console.log('greetings person 4:', greet('Joey Marcus'));
const getArea = (width, height) => width * height;
console.log('area of 5*12 =', getArea(5, 12));
console.log('area of 5*5 =', getArea(5, 5));
console.log('area of 12*12 =', getArea(12, 12));
console.log('area of 500*510 =', getArea(500, 510));
const person = {
    firstName: 'James',
    lastName: 'Howard'
};
const getFirstName = (firstName, lastName) => person.firstName;
console.log('get first name:', getFirstName(person));
//or written like this//
const getLastName = (firstName, lastName) => lastName;
// console.log(getLastName({firstName: 'Jimmy', lastName: 'Farley'}));
// console.log(getLastName({firstName: 'Tony', lastName: 'Villaloba'}));
console.log('select last name:', getLastName('Jimmy', 'Farley'));
console.log('select last name:', getLastName('Tony', 'Villaloba'));
//ask Shawn which is correct of the two..//
const bigCities = ['Las Vegas', 'Tacoma', 'Naples', 'New York City', 'Jacksonville'];
const getLastElement = bigCities[bigCities.length - 1];
console.log('last city in array:', getLastElement);
//ask again..// i got confused on how to do this one with arrays. i only know how to return arrays
//by doing the .length property of the object
const citiesBig = ['Las Vegas', 'Naples', 'New York City', 'Jacksonville', 'Tacoma'];
const lastElement = () => index[index - 1];
//the call other functions got me confused as well//
function callOtherFunction(otherFunction, params) {
    const getFirstName = getFirstName();
    return callOtherFunction;
}
console.log('returned other function:', callOtherFunction);

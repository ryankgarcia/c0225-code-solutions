"use strict";
/* exported getFirstInitialOfPerson */
const fullName = {
    firstName: 'Ryan',
    lastName: 'Garcia',
};
function getFirstInitialOfPerson(person) {
    fullName;
    if (person.firstName.length >= 0) {
        return fullName.firstName[0];
    }
}
console.log('getFirstInitial:', getFirstInitialOfPerson('Joseph Jahill'));

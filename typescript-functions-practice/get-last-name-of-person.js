"use strict";
/* exported getLastNameOfPerson */
const person = {
    firstName: 'Pep',
    lastName: 'Guardiola',
    occupation: 'Head Coach',
    birthPlace: 'Santpedor, Spain',
    name: 'Pep Guardiola',
};
function getLastNameOfPerson(person) {
    return person.lastName;
}
console.log('get last name:', getLastNameOfPerson(person));
console.log('get last name:', getLastNameOfPerson({ firstName: 'Santiago', lastName: 'Tacuba' }));

"use strict";
/* exported getFirstInitialOfPerson */
const joe = {
    firstName: 'Joe',
    lastName: 'Jackson',
};
function getFirstInitialOfPerson(person) {
    const getFullName = person.firstName + person.lastName;
    if (getFullName.length >= 0) {
        return firstName[0] && lastName[0];
    }
}
console.log('first initial of henry:', getFirstInitialOfPerson(joe));
// left off here getting the first initial and last initial of person first name and last name //

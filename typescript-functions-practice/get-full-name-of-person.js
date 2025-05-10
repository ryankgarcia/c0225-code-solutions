"use strict";
/* exported getFullNameOfPerson */
function getFullNameOfPerson(person) {
    const fullName = person.firstName + ' ' + person.lastName;
    return fullName;
}
console.log(getFullNameOfPerson(person));
console.log(getFullNameOfPerson({ firstName: 'Ray', lastName: 'Volpe' }));

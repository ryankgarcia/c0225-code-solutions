'use strict';
/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  if (person.firstName && person.lastName) {
    return person.firstName[0] + person.lastName[0];
  }
  return undefined;
}
console.log(getInitialsOfPerson({ firstName: 'Dog', lastName: 'Cat' }));

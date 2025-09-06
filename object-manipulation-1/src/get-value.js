'use strict';
/* exported getValue */
const person = {
  firstName: 'Joe',
  lastName: 'Edwards',
  occupation: 'Athlete',
};
function getValue(person, key) {
  return person[key];
}
console.log(getValue(person, 'occupation'));
console.log(getValue(person, 'lastName'));

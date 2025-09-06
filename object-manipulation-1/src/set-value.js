'use strict';
/* exported setValue */
const person1 = {
  firstName: 'Ricardo',
  lastName: 'Ruiz',
  occupation: 'Teacher',
};
function setValue(person1, key, value) {
  person1[key] = value;
}
console.log(setValue(person1, 'age', 35));

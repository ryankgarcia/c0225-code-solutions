'use strict';
/* exported getPropertyValue */
const object = {
  name: 'Ryan',
  occupation: 'student',
  birthPlace: 'Los Angeles',
};
function getPropertyValue(object, key) {
  return object[key];
}
console.log(getPropertyValue(object, 'name'));

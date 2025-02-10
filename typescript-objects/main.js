'use strict';
const student = {
  firstName: 'Ryan',
  lastName: 'Garcia',
  age: 29,
};
const fullName = `${student.firstName} ${student.lastName}`;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Car Mechanic';
console.log('lives in Irvine:', student.livesInIrvine);
console.log('previous occupation:', student.previousOccupation);
console.log('student object:', student);
console.log('typeof student:', typeof student);
const vehicle = {
  make: 'Nissan',
  model: 'GTR',
  year: 2017,
};
vehicle['color'] = 'midnight black';
vehicle['isConvertible'] = false;
console.log('color of vehicle:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle object:', vehicle);
console.log('typeof vehicle object:', typeof vehicle);
const pet = {
  name: 'Sparky',
  kind: 'dog',
};
delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);

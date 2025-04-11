/* exported getValue */

interface Person {
  firstName: string;
  lastName: string;
  occupation: string;
}

const person: Person = {
  firstName: 'Joe',
  lastName: 'Edwards',
  occupation: 'Athlete',
};

function getValue(person: Person, key: string): Record<string, unknown> {
  return person[key];
}

console.log(getValue(person, 'occupation'));
console.log(getValue(person, 'lastName'));

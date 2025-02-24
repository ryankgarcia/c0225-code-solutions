/* exported getLastNameOfPerson */

interface Person {
  firstName?: string;
  lastName?: string;
  occupation?: string;
  birthPlace?: string;
  name?: string;
}

const person: Person = {
  firstName: 'Pep',
  lastName: 'Guardiola',
  occupation: 'Head Coach',
  birthPlace: 'Santpedor, Spain',
  name: 'Pep Guardiola',
};

function getLastNameOfPerson(person: Person): string | undefined {
  return person.lastName;
}
console.log('get last name:', getLastNameOfPerson(person));
console.log(
  'get last name:',
  getLastNameOfPerson({ firstName: 'Santiago', lastName: 'Tacuba' })
);

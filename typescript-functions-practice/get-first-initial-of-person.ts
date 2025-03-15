/* exported getFirstInitialOfPerson */

interface Person {
  firstName: string;
  lastName: string;
}

const fullName: Person = {
  firstName: 'Ryan',
  lastName: 'Garcia',
};

function getFirstInitialOfPerson(person: Person): string {
  fullName;
  if (person.firstName.length >= 0) {
    return fullName.firstName[0];
  }
}

console.log('getFirstInitial:', getFirstInitialOfPerson('Joseph Jahill'));

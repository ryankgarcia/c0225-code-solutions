/* exported getInitialsOfPerson */

interface Person {
  firstName?: string;
  lastName?: string;
}

function getInitialsOfPerson(person: Person): string | undefined {
  if (person.firstName && person.lastName) {
    return person.firstName[0] + person.lastName[0];
  }
  return undefined;
}

console.log(getInitialsOfPerson({ firstName: 'Dog', lastName: 'Cat' }));

/* exported getFirstInitialOfPerson */

const joe: Person = {
  firstName: 'Joe',
  lastName: 'Jackson',
};

function getFirstInitialOfPerson(person: Person): unknown {
  const getFullName: string = person.firstName + person.lastName;
  if (getFullName.length >= 0) {
    return firstName[0] && lastName[0];
  }
}

console.log('first initial of henry:', getFirstInitialOfPerson(joe));

// left off here getting the first initial and last initial of person first name and last name //

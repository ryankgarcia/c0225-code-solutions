/* exported getFullNameOfPerson */

function getFullNameOfPerson(person: Person): string {
  const fullName: string = person.firstName + ' ' + person.lastName;
  return fullName;
}
console.log(getFullNameOfPerson(person));
console.log(getFullNameOfPerson({ firstName: 'Ray', lastName: 'Volpe' }));

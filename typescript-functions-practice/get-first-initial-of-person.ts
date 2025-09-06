/* exported getFirstInitialOfPerson */

function getFirstInitialOfPerson(person: Person): string | undefined {
  return person.firstName?.[0];
}

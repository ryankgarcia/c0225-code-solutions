/* exported getPropertyValue */

interface Person {
  name?: string;
  occupation?: string;
  birthPlace?: string;
  [key: string]: string | undefined;
}

const object: Person = {
  name: 'Ryan',
  occupation: 'student',
  birthPlace: 'Los Angeles',
};

function getPropertyValue(object: Person, key: string): string | undefined {
  return object[key];
}

console.log(getPropertyValue(object, 'name'));

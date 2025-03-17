"use strict";
/* exported getFirstInitialOfPerson */
// interface Person {
//   firstName?: string;
//   lastName?: string;
// }
// const person: Person = {
//   firstName: 'Jose',
//   lastName: 'Jarim',
// }
function getFirstInitialOfPerson(firstName, lastName) {
    const person = firstName + lastName;
    const firstInitial = person[firstName];
    if (typeof firstName === 'string' && firstName[length] > 0) {
        return firstName[0];
    }
    return firstInitial;
}
// function getFirstInitialOfPerson(obj: T, key: keyof T): string | undefined {
//   const value = obj[key];
//   if (typeof value === 'string' && value.length > 0) {
//     return value[0];
//   }
//   return undefined;
// }
const person = { name: 'alice', age: 25 };
console.log(getFirstInitialOfPerson(person, 'name'));
console.log('getFirstInitial:', getFirstInitialOfPerson('Jose', 'Casillas'));

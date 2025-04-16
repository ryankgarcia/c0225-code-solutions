/* exported setValue */

interface Person1 {
  firstName: string;
  lastName: string;
  occupation: string;
}

const person1: Person1 = {
  firstName: 'Ricardo',
  lastName: 'Ruiz',
  occupation: 'Teacher',
};

function setValue(person1: Person1, key: string, value: number): undefined {
  person1[key] = value;
}

console.log(setValue(person1, 'age', 35));

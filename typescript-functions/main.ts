interface Person {
  firstName: string;
  lastName: string;
}

const person: Person = {
  firstName: 'Ryan',
  lastName: 'Garcia',
};

function convertMinutesToSeconds(minutes: number): number {
  const seconds: number = minutes * 60;
  return seconds;
}
console.log('minutes to seconds:', convertMinutesToSeconds(2));

function greet(name: string): string {
  const greeting: string = 'Hello' + ' ' + name + '!';
  return greeting;
}
console.log('greeting output:', greet('Ryan'));

const getArea = (width: number, height: number): number => {
  return width * height;
};
console.log('area of rectangle:', getArea(12, 5));
console.log('area of rectangle:', getArea(100, 5));

const getFirstName = (person: Person): string => {
  return person.firstName;
};
console.log('person first name:', getFirstName(person));

const namesOfPeople: string[] = [
  'Joseph',
  'Robert',
  'Sally',
  'Tom',
  'Joey',
  'Michael',
  'Tyler',
];

const getLastElement = (namesOfPeople: string[]): string => {
  return namesOfPeople[namesOfPeople.length - 1];
};

console.log('last element in array:', getLastElement(namesOfPeople));

function callOtherFunction(otherFunction: Function, params: unknown): unknown {
  return otherFunction(params);
}

console.log(
  'convert 5 Minutes To Seconds function:',
  callOtherFunction(convertMinutesToSeconds, 5)
);

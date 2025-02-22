const heroes = ['Spider-Man', 'Batman', 'Superman', 'Iron Man'];

let randomNumber = Math.random();

randomNumber = heroes.length * randomNumber;

const randomIndex = Math.floor(randomNumber);

console.log('random Index:', randomIndex);

const randomHero = heroes[randomIndex];

console.log('random Hero:', randomHero);

const library = [
  { title: 'How to Win Friends & Influence People', author: 'Dale Carnegie' },
  { title: 'Deep Work', author: 'Cal Newport' },
  { title: 'Remember Everything You Read', author: 'Stanley D. Frank, Ed.D.' },
];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(2, 1);

console.log('library array:', library);

const fullName = 'Ryan Garcia';

const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName output:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log('sayMyName output:', sayMyName);

interface Employee {
  name: string;
  age: number;
  position: string;
}

const employee: Employee = {
  name: 'Garret',
  age: 22,
  position: 'Area Marketing Director',
};

const employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);

const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);

const employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);

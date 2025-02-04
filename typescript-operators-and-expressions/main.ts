const width: number = 10;
const height: number = 4;
const area: number = width * height;

console.log('value of area:', area);
console.log('typeof area:', typeof area);

const bill: number = 12.5;
const payment: number = 20.48;
const change: number = payment - bill;

console.log('value of change:', change);
console.log('typeof change:', typeof change);

const quizzes: number = 85;
const midterm: number = 95;
const final: number = 88;
const grade: number = (quizzes + midterm + final) / 3;

console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName: string = 'Ryan';
const lastName: string = 'Garcia';
const fullName: string = firstName + ' ' + lastName;

console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH: number = 5;
const isAcidic: number = pH < 7;

console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount: number = 47;
const isSparta: number = headCount === 300;

console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';

console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);

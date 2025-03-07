const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
  'Darren',
  'Darnel',
  'Daniella',
  'Debrah',
  'david',
  'drake',
  'ryan',
  'shawn',
  'garrett',
];

const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log('evenNumbers', evenNumbers);

const noD = names.filter((n) => !n.includes('d') && !n.includes('D'));
console.log('noD', noD);

interface Book {
  isbn: string;
  title: string;
  author: string;
}

const bookArray: Book[] = [
  {
    isbn: '97866574-11-9646',
    title: 'Farmer John and his 8 kids',
    author: 'Dr. Doo Little',
  },
  {
    isbn: '88475858-15-6547',
    title: 'Sally Sold Beets to Timmy',
    author: 'Jean Willer Gavinson',
  },
  {
    isbn: '54583394-18-4783',
    title: 'Ye and the Hay',
    author: 'Tony Fred Wilder',
  },
];

console.log('book array output:', bookArray);
console.log('book typeof array output:', typeof bookArray);

const json = JSON.stringify(bookArray);

console.log('JSON result:', json);
console.log('JSON typeof result:', typeof json);

const student = '{"id": 19475867, "studentName": "Tim Trinity"}';

console.log('const student output:', student);
console.log('const student typeof output:', typeof student);

const studentParse = JSON.parse(student);

console.log('JSON parse:', studentParse);
console.log('JSON typeof parse:', typeof studentParse);

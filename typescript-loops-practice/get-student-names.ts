/* exported getStudentNames */

interface Students {
  name: string;
}

const students: Students[] = [
  { name: 'Fred' },
  { name: 'Kendal' },
  { name: 'Vanessa' },
  { name: 'Harry' },
  { name: 'Will' },
  { name: 'Jared' },
];

function getStudentNames(students: Students[]): string[] {
  const studentArray: string[] = [];
  for (const student of students) {
    studentArray.push(student.name);
  }
  return studentArray;
}

console.log(getStudentNames(students));

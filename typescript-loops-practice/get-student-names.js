"use strict";
/* exported getStudentNames */
const students = [
    { name: 'Fred' },
    { name: 'Kendal' },
    { name: 'Vanessa' },
    { name: 'Harry' },
    { name: 'Will' },
    { name: 'Jared' },
];
function getStudentNames(students) {
    const studentArray = [];
    for (const student of students) {
        studentArray.push(student.name);
    }
    return studentArray;
}
console.log(getStudentNames(students));

'use strict';
/* exported getValues */
const job = {
  location: 'Newport Beach',
  indoors: false,
  entryLevel: false,
};
function getValues(job) {
  const newArr = [];
  for (const value in job) {
    newArr.push(job[value]);
  }
  return newArr;
}
console.log(getValues(job));

/* exported getValues */

interface Jobs {
  location: string;
  indoors: boolean;
  entryLevel: boolean;
}

const job: Jobs = {
  location: 'Newport Beach',
  indoors: false,
  entryLevel: false,
};
function getValues(job: Jobs): (string | boolean)[] {
  const newArr: (string | boolean)[] = [];
  for (const value in job) {
    newArr.push(job[value]);
  }
  return newArr;
}

console.log(getValues(job));

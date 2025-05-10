// /* exported getDescriptionOfPerson */

const jeff: Person = {
  name: 'Jeff Abel',
  occupation: 'Professional Touring DJ',
  birthPlace: 'Kelowna, Canada',
};

const ada: Person = {
  name: 'Ada Lovelace',
  occupation: 'countess',
  birthPlace: 'London, England',
};

function getDescriptionOfPerson(person: Person): string {
  const getDescription: string = `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
  return getDescription;
}
console.log('who is this person?:', getDescriptionOfPerson(jeff));
console.log('who is this person?:', getDescriptionOfPerson(ada));
console.log(
  'who is this person?:',
  getDescriptionOfPerson({
    name: 'Heather Gladwell',
    occupation: 'Teacher',
    birthPlace: 'Seattle, Washington',
  })
);

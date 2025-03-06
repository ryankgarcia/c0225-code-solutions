import { takeAChance } from './take-a-chance.js';

const promise = takeAChance('Ryan');

promise
  .then((message) => console.log(message))
  .catch((error) => console.log(`Error: ${error.message}`));

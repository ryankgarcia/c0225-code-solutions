/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

interface Person {
  name: string;
  age: number;
}

const person = {
  name: 'Mike Jones Jameson',
  age: 55,
};

function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

console.log('is 12 less than five:', isUnderFive(12));

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log('is 15 an even number:', isEven(15));

function startsWithJ(string: string): boolean {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

console.log('Does Ryan string start with letter J:', startsWithJ('Ryan'));

// console.log(startsWithJ(Ryan))

// you can index any value of your parameter

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

console.log('isOldEnoughToDrink:', isOldEnoughToDrive(person));

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

console.log('isOldEnoughToDrive:', isOldEnoughToDrive(person));

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  if (person.age >= 21 && person.age >= 16) {
    return false;
  } else {
    return false;
  }
}

console.log('isOldEnoughToDrinkAndDrive:', isOldEnoughToDrinkAndDrive(person));

function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'pH is neutral';
  } else if (pH > 7 && pH < 14) {
    return 'pH is basic';
  } else if (pH < 7 && pH > 0) {
    return 'pH is acid';
  } else {
    return 'invalid pH level';
  }
}

console.log('is pH 14.5 acidic:', categorizeAcidity(14.5));
console.log('is pH 7 acidic:', categorizeAcidity(7));
console.log('is pH 12 acidic:', categorizeAcidity(12));
console.log('is pH 3 acidic:', categorizeAcidity(3));
console.log('is pH -1 acidic:', categorizeAcidity(-1));

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

console.log(introduceWarnerBro('yakko'));
console.log(introduceWarnerBro('wakko'));
console.log(introduceWarnerBro('dot'));
console.log(introduceWarnerBro('shawn'));
console.log(introduceWarnerBro('gary'));

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Top Gun: Maverick';
    case 'comedy':
      return 'Anchorman';
    case 'horror':
      return 'The Conjuring';
    case 'drama':
      return 'The Green Mile';
    case 'musical':
      return 'The Sound of Music';
    case 'sci-fi':
      return 'Star Wars: Episode 3 - Revenge of the Sith';
    default:
      return 'invalid movie genre';
  }
}

console.log('recommend action movie:', recommendMovie('action'));
console.log('recommend comedy movie:', recommendMovie('comedy'));
console.log('recommend horror movie:', recommendMovie('horror'));
console.log('recommend drama movie:', recommendMovie('drama'));
console.log('recommend musical movie:', recommendMovie('musical'));
console.log('recommend sci-fi movie:', recommendMovie('sci-fi'));
console.log('recommend another type of movie:', recommendMovie('dogs'));

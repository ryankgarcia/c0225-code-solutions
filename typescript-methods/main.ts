interface Heroes {
  hero1: string;
  hero2: string;
  hero3: string;
  hero4: string;
}

interface Book {
  title: string,
  author: string,
}

const heroes: Heroes = [
  { hero1: 'Batman' },
  { hero2: 'Superman' },
  { hero3: 'Iron Man' },
  { hero4: 'Spider-Man' },
];

let randomNumber = Math.random();

randomNumber = randomNumber * heroes.length();

const randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];

console.log('value of randomHero:', randomHero);


const library: Book = [
  {title: ,
    author:
  }
]

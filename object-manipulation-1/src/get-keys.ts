/* exported getKeys */

interface Dog {
  name: string;
  breed: string;
  age: number;
}

const dog: Dog = {
  name: 'Sparky',
  breed: 'Golden Retriever',
  age: 2,
};

function getKeys(dog: Dog): string[] {
  const newArr: string[] = [];
  for (const key in dog) {
    newArr.push(key);
  }
  return newArr;
}

console.log(getKeys(dog));

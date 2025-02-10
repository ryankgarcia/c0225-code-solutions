interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Ryan',
  lastName: 'Garcia',
  age: 29,
};

const fullName: string = `${student.firstName} ${student.lastName}`;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Car Mechanic';

console.log('lives in Irvine:', student.livesInIrvine);
console.log('previous occupation:', student.previousOccupation);
console.log('student object:', student);
console.log('typeof student:', typeof student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
  make: 'Nissan',
  model: 'GTR',
  year: 2017,
};

vehicle['color'] = 'midnight black';
vehicle['isConvertible'] = false;

console.log('color of vehicle:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle object:', vehicle);
console.log('typeof vehicle object:', typeof vehicle);

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: 'Sparky',
  kind: 'dog',
};

delete pet.name;
delete pet.kind;

console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);

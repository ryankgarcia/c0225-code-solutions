import { divideBy, evenNumbers, multiplyBy, toDollars } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [0, 1, 4, 5, 10, 20];
    const result = evenNumbers(numbers);
    expect(result).toEqual([0, 4, 10, 20]);
  });
});

describe('toDollars', () => {
  it('returns amount in dollars', () => {
    const amount = 1;
    const result = toDollars(amount);
    expect(result).toEqual('$1.00');
  });
});

describe('divideBy', () => {
  it('returns an array of numbers where every entry is divided by the divisor', () => {
    const numbers = [4, 8, 15, 22];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([2, 4, 7.5, 11]);
  });
});

describe('multiplyBy', () => {
  it('modifies an object by multiplying the value of each key only if its value is a number', () => {
    const obj = { name: 'Ryan', age: 80, favoriteHobby: 'listening to music' };
    const multiplier = 5;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({
      name: 'Ryan',
      age: 400,
      favoriteHobby: 'listening to music',
    });
  });
});

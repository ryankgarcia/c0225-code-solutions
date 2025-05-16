import { evenNumbers, toDollars } from './numbers';

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
    // left off getting this line in the unit test to pass
    expect(result).toEqual(amount.toFixed(2));
  });
});

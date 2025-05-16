export function calculator(
  num1: number,
  num2: number,
  operator: string
): number {
  if (operator === '+') {
    num1 += num2;
  } else if (operator === '-') {
    num1 -= num2;
  } else if (operator === '*') {
    num1 *= num2;
  } else if (operator === '/') {
    num1 /= num2;
  }

  return num1;
}

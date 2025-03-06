const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((n) => console.log('values in order:', n));

values.forEach((n, index) =>
  console.log('values reverse order:', values[values.length - 1 - index])
);

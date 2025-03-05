const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

// const newPrices = [
//   {price: 42.42, salePrice: 42.42 / 2},
//   {price: 10, salePrice: 10 / 2},
//   {price: 28.2234, salePrice: 28.2234 / 2},
//   {price: 3.2, salePrice: 3.2 / 2},
//   {price: 5, salePrice: 5 / 2},
//   {price: 12, salePrice: 12 / 2},
// ]

interface Prices {
  price: number;
  salePrice: number;
}

const updatedPrice = {
  price: 0,
  salePrice: 0,
};

// format the prices into an object correctly //

const newPrices = prices.map((num) => num / 2);
console.log('newPrices', newPrices);
// console.log('newPrices', updatedPrice.push(newPrices));
